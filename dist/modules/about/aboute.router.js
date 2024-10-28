"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbouteRoutes = void 0;
const express_1 = __importDefault(require("express"));
const aboute_controller_1 = require("./aboute.controller");
const router = express_1.default.Router();
//eill coll controller function
router.post("/aboute-details", aboute_controller_1.AbouteControllers.getAbouteData);
exports.AbouteRoutes = router;
