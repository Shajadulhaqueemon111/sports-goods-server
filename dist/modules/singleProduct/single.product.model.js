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
});
exports.SingleModel = (0, mongoose_1.model)("Single_Data", singleProductSchema);
