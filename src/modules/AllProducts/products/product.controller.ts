import { Request, Response } from "express";
import { ProductService } from "./product.service";

const createProductData = async (req: Request, res: Response) => {
  try {
    const { create_product: productData } = req.body;

    const result = await ProductService.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: "Product Create data is successfully",
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

const getAllProductData = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getAllProductIntoDB();

    res.status(200).json({
      success: true,
      message: "get all product success fully",

      data: result,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({
      success: false,
      message: "something is worng ! does not get data successfully",
      data: error,
    });
  }
};

const getSingleProductData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.getsingleProductIntoDB(id);

    res.status(200).json({
      success: true,
      message: "get a single product data succssfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "single data does not get successfully",
      data: error,
    });
  }
};

const deleteProductData = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const result = await ProductService.deleteProductFromDB(_id);

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
    const { id } = req.params;
    const updatedData = req.body;

    const result = await ProductService.updateProductInDB(id, updatedData);

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
    console.error(error);
    res.status(400).json({
      success: false,
      message: "An error occurred while updating the product.",
      data: error,
    });
  }
};

export const ProductControllers = {
  createProductData,
  getAllProductData,
  getSingleProductData,
  deleteProductData,
  updateProductData,
};
