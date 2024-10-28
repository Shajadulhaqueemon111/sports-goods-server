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

export const ProductControllers = {
  createProductData,
  getAllProductData,
  getSingleProductData,
};
