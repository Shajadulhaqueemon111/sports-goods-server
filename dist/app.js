"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const aboute_router_1 = require("./modules/about/aboute.router");
const product_router_1 = require("./modules/AllProducts/products/product.router");
const single_product_router_1 = require("./modules/singleProduct/single.product.router");
const Order_router_1 = require("./modules/Order/Order.router");
const Payment_router_1 = require("./modules/Payment/Payment.router");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/v1/aboute", aboute_router_1.AbouteRoutes);
app.use("/api/v1/product", product_router_1.ProductRoute);
app.use("/api/v1/single", single_product_router_1.SingleProductRoute);
app.use("/api/v1/order", Order_router_1.orderRoutes);
app.use("/api/v1/payment", Payment_router_1.paymentRoutes);
exports.default = app;
