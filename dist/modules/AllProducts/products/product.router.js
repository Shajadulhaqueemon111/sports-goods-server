"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
//eill coll controller function
router.post("/create-product", product_controller_1.ProductControllers.createProductData);
router.get("/get-product", product_controller_1.ProductControllers.getAllProductData);
router.get("/:id", product_controller_1.ProductControllers.getSingleProductData);
router.delete("/:id", product_controller_1.ProductControllers.deleteProductData);
router.patch("/:id", product_controller_1.ProductControllers.updateProductData);
exports.ProductRoute = router;
