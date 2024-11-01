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
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const createProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { create_product: productData } = req.body;
        const result = yield product_service_1.ProductService.createProductIntoDB(productData);
        res.status(200).json({
            success: true,
            message: "Product Create data is successfully",
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
const getAllProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.getAllProductIntoDB();
        res.status(200).json({
            success: true,
            message: "get all product success fully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "something is worng ! does not get data successfully",
            data: error,
        });
    }
});
const getSingleProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield product_service_1.ProductService.getsingleProductIntoDB(id);
        res.status(200).json({
            success: true,
            message: "get a single product data succssfully",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "single data does not get successfully",
            data: error,
        });
    }
});
const deleteProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield product_service_1.ProductService.deleteProductFromDB(id);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "An error occurred while deleting the product.",
            data: error,
        });
    }
});
const updateProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const result = yield product_service_1.ProductService.updateProductInDB(id, updatedData);
        if (result) {
            res.status(200).json({
                success: true,
                message: "Product updated successfully",
                data: result,
            });
        }
        else {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(400).json({
            success: false,
            message: "An error occurred while updating the product.",
            data: error,
        });
    }
});
exports.ProductControllers = {
    createProductData,
    getAllProductData,
    getSingleProductData,
    deleteProductData,
    updateProductData,
};
