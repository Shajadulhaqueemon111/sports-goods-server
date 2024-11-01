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
const user_route_1 = require("./modules/user/user.route");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//application route
app.use("/api/v1/aboute", aboute_router_1.AbouteRoutes);
app.use("/api/v1/product", product_router_1.ProductRoute);
app.use("/api/v1/single", single_product_router_1.SingleProductRoute);
app.use("/api/v1/user", user_route_1.userRoute);
// app.get("/", async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     res.send("Hello Worlds!");
//   } catch (error) {
//     console.log(error);
//     next(error);
//   }
// });
// app.post("/", (req: Request, res: Response) => {
//   console.log(req.body);
//   res.json({
//     message: "Successfully recived data",
//   });
// });
// all route error handelling
// app.all("*", (req: Request, res: Response) => {
//   res.status(400).json({
//     success: false,
//     message: "Route is not defained",
//   });
// });
//global error handelling
// app.use((error: any, req: Request, res: Response, next: NextFunction) => {
//   if (error) {
//     res.status(400).json({
//       success: false,
//       message: "Something went worng",
//     });
//   }
// });
exports.default = app;
