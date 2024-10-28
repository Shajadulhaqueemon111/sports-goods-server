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
exports.AbouteControllers = void 0;
const aboute_servise_1 = require("./aboute.servise");
const getAbouteData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Aboute_details: abouteData } = req.body;
        const result = yield aboute_servise_1.AbouteServices.getAbouteIntoDB(abouteData);
        res.status(200).json({
            success: true,
            message: "Aboute get data is successfully",
            data: result,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching the data.",
        });
    }
});
exports.AbouteControllers = {
    getAbouteData,
};
