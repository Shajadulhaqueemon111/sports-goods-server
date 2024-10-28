import { SingleProduct } from "./single.product.interface";
import { SingleModel } from "./single.product.model";

const createSingleProductIntoDB = async (singleproduct: SingleProduct) => {
  const result = await SingleModel.create(singleproduct);
  return result;
};

const getAllSingleProductIntoDB = async () => {
  const result = await SingleModel.find();

  return result;
};

const getSingleProductIntoDB = async (id: string) => {
  const result = await SingleModel.findOne({ id });

  return result;
};

export const SingleProductService = {
  createSingleProductIntoDB,
  getAllSingleProductIntoDB,
  getSingleProductIntoDB,
};
