import { model, Schema } from "mongoose";
import { SingleProduct } from "./single.product.interface";

const singleProductSchema = new Schema<SingleProduct>({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  category: { type: String },
  brand: { type: String },
  stock_quantity: { type: String },
  rating: { type: String },
  price: { type: String },
  image: { type: String },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

//deleted find Query middleeware ignore data function ignore deleted data
singleProductSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

//findOne Query middleware korlao jano deleted data na asa say function
singleProductSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

//agregate Query middleware use korla o deleted data gula atkanor jonno ay ta use korsi

singleProductSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const SingleModel = model<SingleProduct>(
  "Single_Data",
  singleProductSchema
);
