"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentRoutes = void 0;
const express_1 = require("express");
const Payment_controller_1 = require("./Payment.controller");
const router = (0, express_1.Router)();
router.post("/conformation", Payment_controller_1.paymentController.conformationController);
exports.paymentRoutes = router;
