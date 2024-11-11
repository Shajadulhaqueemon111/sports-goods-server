import { Request, Response } from "express";
import { SingleProductService } from "./single.product.service";

const createSingleProductData = async (req: Request, res: Response) => {
  try {
    const { single_product: productData } = req.body;

    const result =
      await SingleProductService.createSingleProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: "single Product Create data is successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "An error occurred while fetching the data.",
      data: error,
    });
  }
};

const getAllSingleProductData = async (req: Request, res: Response) => {
  try {
    const result = await SingleProductService.getAllSingleProductIntoDB();
    res.status(200).json({
      success: true,
      message: "single Product get data is successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "An error occurred while fetching the data.",
      data: error,
    });
  }
};
const getSingleProductData = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const result = await SingleProductService.getSingleProductIntoDB(_id);
    res.status(200).json({
      success: true,
      message: "single Product get data is successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "An error occurred while fetching the data.",
      data: error,
    });
  }
};

const deleteProductData = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const result = await SingleProductService.deleteProductFromDB(_id);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "An error occurred while deleting the product.",
      data: error,
    });
  }
};

const updateProductData = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    console.log("Updating product with ID:", req.params._id);
    const { single_product: updatedData } = req.body;

    console.log("Updating product with ID:", _id);
    console.log("Updated data:", updatedData);

    const result = await SingleProductService.updateProductInDB(
      _id,
      updatedData
    );

    if (result) {
      res.status(200).json({
        success: true,
        message: "Product updated successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }
  } catch (error) {
    console.error("Error during update:", error);
    res.status(400).json({
      success: false,
      message: "An error occurred while updating the product.",
      data: error,
    });
  }
};

export const SingleProductControllers = {
  createSingleProductData,
  getAllSingleProductData,
  getSingleProductData,
  deleteProductData,
  updateProductData,
};
