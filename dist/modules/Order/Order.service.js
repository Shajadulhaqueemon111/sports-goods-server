"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const Payment_utils_1 = require("../Payment/Payment.utils");
const single_product_model_1 = require("../singleProduct/single.product.model");
const Order_model_1 = __importDefault(require("./Order.model"));
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const { user, products } = orderData;
    let totalPrice = 0;
    // Calculate the total price
    const productDetails = yield Promise.all(products.map((item) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield single_product_model_1.SingleModel.findById(item.product);
        if (product) {
            totalPrice += product.price * item.quantity;
            return {
                product: product._id,
                quantity: item.quantity,
            };
        }
        else {
            throw new Error("Product not found");
        }
    })));
    const transactionId = `TXN-${Date.now()}`;
    const order = new Order_model_1.default({
        user,
        products: productDetails,
        totalPrice,
        status: "Pending",
        paymentStatus: "Pending",
        transactionId,
    });
    yield order.save();
    const paymentData = {
        transactionId,
        totalPrice,
        customerName: user.name,
        customerEmail: user.email,
        customerPhone: user.phone,
        customerAddress: user.address,
    };
    //payment
    const paymentSession = yield (0, Payment_utils_1.initiatePayment)(paymentData);
    console.log(paymentSession);
    return paymentSession;
});
exports.orderService = {
    createOrder,
};
