"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const ProductDetailsSchema = new mongoose_1.Schema({
    name: { type: String },
    sportCategory: { type: String },
    price: { type: String },
    brand: { type: String },
    rating: { type: String },
    features: { type: String },
    availabity: { type: String },
});
const ProductSchema = new mongoose_1.Schema({
    id: { type: String },
    sportroduct: ProductDetailsSchema,
});
exports.ProductModel = (0, mongoose_1.model)("Product_Datas", ProductSchema);
