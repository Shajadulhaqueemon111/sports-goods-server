import { Products } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDB = async (product: Products) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductIntoDB = async () => {
  const result = await ProductModel.find();

  return result;
};

const getsingleProductIntoDB = async (id: string) => {
  const result = await ProductModel.findOne({ id });

  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductIntoDB,
  getsingleProductIntoDB,
};
