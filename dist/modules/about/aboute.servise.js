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
exports.AbouteServices = void 0;
const aboute_model_1 = require("./aboute.model");
const getAbouteIntoDB = (aboute) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboute_model_1.AboutModel.create(aboute);
    return result;
});
const getAllAbouteIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield aboute_model_1.AboutModel.find();
    return result;
});
exports.AbouteServices = {
    getAbouteIntoDB,
    getAllAbouteIntoDB,
};
