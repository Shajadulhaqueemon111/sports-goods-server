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
    const { id } = req.params;
    const result = await SingleProductService.getSingleProductIntoDB(id);
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

export const SingleProductControllers = {
  createSingleProductData,
  getAllSingleProductData,
  getSingleProductData,
};
