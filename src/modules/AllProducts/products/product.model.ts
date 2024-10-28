import { model, Schema } from "mongoose";
import { productDetails, Products } from "./product.interface";

const ProductDetailsSchema = new Schema<productDetails>({
  name: { type: String },
  sportCategory: { type: String },
  price: { type: String },
  brand: { type: String },
  rating: { type: String },
  features: { type: String },
  availabity: { type: String },
});
const ProductSchema = new Schema<Products>({
  id: { type: String },
  sportroduct: ProductDetailsSchema,
});

export const ProductModel = model<Products>("Product_Datas", ProductSchema);
