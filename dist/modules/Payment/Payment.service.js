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
exports.paymentService = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const Payment_utils_1 = require("./Payment.utils");
const Order_model_1 = __importDefault(require("../Order/Order.model"));
const conformationService = (transactionId) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyResponse = yield (0, Payment_utils_1.veriFyPayment)(transactionId);
    console.log(verifyResponse);
    let result;
    let message = "";
    if (verifyResponse && verifyResponse.pay_status === "Successful") {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        result = yield Order_model_1.default.findOneAndUpdate({ transactionId }, {
            paymentStatus: "paid",
        });
        message = "Successfully Paid !";
    }
    else {
        message = "payment Faild !";
    }
    const filePath = (0, path_1.join)(__dirname, "../../../views/conformation.html");
    let templete = (0, fs_1.readFileSync)(filePath, "utf-8");
    console.log(templete);
    templete = templete.replace("{{message}}", message);
    return templete;
});
exports.paymentService = {
    conformationService,
};
