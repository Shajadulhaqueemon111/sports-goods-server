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
exports.SingleProductControllers = void 0;
const single_product_service_1 = require("./single.product.service");
const createSingleProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { single_product: productData } = req.body;
        const result = yield single_product_service_1.SingleProductService.createSingleProductIntoDB(productData);
        res.status(200).json({
            success: true,
            message: "single Product Create data is successfully",
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "An error occurred while fetching the data.",
            data: error,
        });
    }
});
const getAllSingleProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield single_product_service_1.SingleProductService.getAllSingleProductIntoDB();
        res.status(200).json({
            success: true,
            message: "single Product get data is successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "An error occurred while fetching the data.",
            data: error,
        });
    }
});
const getSingleProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield single_product_service_1.SingleProductService.getSingleProductIntoDB(id);
        res.status(200).json({
            success: true,
            message: "single Product get data is successfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "An error occurred while fetching the data.",
            data: error,
        });
    }
});
exports.SingleProductControllers = {
    createSingleProductData,
    getAllSingleProductData,
    getSingleProductData,
};
