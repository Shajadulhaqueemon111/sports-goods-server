"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const single_product_controller_1 = require("./single.product.controller");
const router = express_1.default.Router();
//eill coll controller function
router.post("/create-product", single_product_controller_1.SingleProductControllers.createSingleProductData);
router.get("/get-product", single_product_controller_1.SingleProductControllers.getAllSingleProductData);
router.get("/get-product/:id", single_product_controller_1.SingleProductControllers.getSingleProductData);
exports.SingleProductRoute = router;
