"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleModel = void 0;
const mongoose_1 = require("mongoose");
const singleProductDetailsSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    category: { type: String },
    brand: { type: String },
    stock_quantity: { type: String },
    rating: { type: String },
    price: { type: String },
    image: { type: String },
});
const singleProductSchema = new mongoose_1.Schema({
    id: { type: String },
    single_product: singleProductDetailsSchema,
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
exports.SingleModel = (0, mongoose_1.model)("Single_Data", singleProductSchema);
