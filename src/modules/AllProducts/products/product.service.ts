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
const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.updateOne({ id }, { isDeleted: true });
  return result;
};

const updateProductInDB = async (
  id: string,
  updatedData: Partial<Products>
) => {
  const result = await ProductModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductIntoDB,
  getsingleProductIntoDB,
  deleteProductFromDB,
  updateProductInDB,
};
