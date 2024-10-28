import { model, Schema } from "mongoose";
import {
  SingleProduct,
  SingleProductsDetails,
} from "./single.product.interface";

const singleProductDetailsSchema = new Schema<SingleProductsDetails>({
  name: { type: String },
  description: { type: String },
  category: { type: String },
  brand: { type: String },
  stock_quantity: { type: String },
  rating: { type: String },
  price: { type: String },
  image: { type: String },
});
const singleProductSchema = new Schema<SingleProduct>({
  id: { type: String },
  single_product: singleProductDetailsSchema,
});

export const SingleModel = model<SingleProduct>(
  "Single_Data",
  singleProductSchema,
);
