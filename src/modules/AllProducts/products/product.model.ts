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
  image: { type: String },
});
const ProductSchema = new Schema<Products>({
  id: { type: String },
  sportroduct: ProductDetailsSchema,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

//deleted find Query middleeware ignore data function ignore deleted data
ProductSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

//findOne Query middleware korlao jano deleted data na asa say function
ProductSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

//agregate Query middleware use korla o deleted data gula atkanor jonno ay ta use korsi

ProductSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const ProductModel = model<Products>("Product_Datas", ProductSchema);
