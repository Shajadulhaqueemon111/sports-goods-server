"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const Order_controller_1 = require("./Order.controller");
const router = (0, express_1.Router)();
// Route to create an order
router.post("/create", Order_controller_1.createOrderController);
exports.orderRoutes = router;
