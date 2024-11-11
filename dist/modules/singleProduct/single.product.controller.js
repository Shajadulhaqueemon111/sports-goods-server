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
        const { _id } = req.params;
        const result = yield single_product_service_1.SingleProductService.getSingleProductIntoDB(_id);
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
const deleteProductData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id } = req.params;
        const result = yield single_product_service_1.SingleProductService.deleteProductFromDB(_id);
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
        const { _id } = req.params;
        console.log("Updating product with ID:", req.params._id);
        const { single_product: updatedData } = req.body;
        console.log("Updating product with ID:", _id);
        console.log("Updated data:", updatedData);
        const result = yield single_product_service_1.SingleProductService.updateProductInDB(_id, updatedData);
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
        console.error("Error during update:", error);
        res.status(400).json({
            success: false,
            message: "An error occurred while updating the product.",
            data: error,
        });
    }
});
exports.SingleProductControllers = {
    createSingleProductData,
    getAllSingleProductData,
    getSingleProductData,
    deleteProductData,
    updateProductData,
};
