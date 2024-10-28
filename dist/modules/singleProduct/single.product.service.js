"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleProductService = void 0;
const single_product_model_1 = require("./single.product.model");
const createSingleProductIntoDB = (singleproduct) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield single_product_model_1.SingleModel.create(singleproduct);
    return result;
});
const getAllSingleProductIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield single_product_model_1.SingleModel.find();
    return result;
});
const getSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield single_product_model_1.SingleModel.findOne({ id });
    return result;
});
exports.SingleProductService = {
    createSingleProductIntoDB,
    getAllSingleProductIntoDB,
    getSingleProductIntoDB,
};
