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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.veriFyPayment = exports.initiatePayment = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const axios_1 = __importDefault(require("axios"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./.env" });
dotenv_1.default.config();
const initiatePayment = (paymentData) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.post(process.env.PAYMENT_URL, {
        store_id: process.env.STORE_ID,
        signature_id: process.env.SIGNATURE_KEY,
        tran_id: paymentData.transactionId,
        success_url: `http://localhost:5000/api/v1/payment/conformation?transactionId=${paymentData.transactionId}&status=success`,
        fail_url: `http://localhost:5000/api/v1/payment/conformation?status=faield`,
        cancel_url: "http://localhost:5173/",
        amount: paymentData.totalPrice,
        currency: "BDT",
        signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
        desc: "Merchant Registration Payment",
        cus_name: paymentData.customerName,
        cus_email: paymentData.customerEmail,
        cus_add1: "House B-158 Road 22",
        cus_add2: "Mohakhali DOHS",
        cus_city: "Dhaka",
        cus_state: "Dhaka",
        cus_postcode: "NAN",
        cus_country: "NAN",
        cus_phone: paymentData.customerPhone,
        type: "json",
    });
    return response.data;
});
exports.initiatePayment = initiatePayment;
const veriFyPayment = (tnxId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(process.env.PAYMENT_VERIFY_URL, {
            params: {
                store_id: process.env.STORE_ID,
                signature_key: process.env.SIGNATURE_KEY,
                type: "json",
                request_id: tnxId,
            },
        });
        return response.data;
    }
    catch (error) {
        console.error("Error in verifyPayment:", error);
        return null;
    }
});
exports.veriFyPayment = veriFyPayment;
