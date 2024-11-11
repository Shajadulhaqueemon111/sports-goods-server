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

const getSingleProductIntoDB = async (_id: string) => {
  const result = await SingleModel.findOne({ _id });

  return result;
};

const deleteProductFromDB = async (_id: string) => {
  const result = await SingleModel.updateOne({ _id }, { isDeleted: true });
  return result;
};

const updateProductInDB = async (
  _id: string,
  updatedData: Partial<SingleProduct>
) => {
  const result = await SingleModel.findByIdAndUpdate(_id, updatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const SingleProductService = {
  createSingleProductIntoDB,
  getAllSingleProductIntoDB,
  getSingleProductIntoDB,
  deleteProductFromDB,
  updateProductInDB,
};
