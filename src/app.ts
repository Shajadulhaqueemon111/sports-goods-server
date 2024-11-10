import express, { Application } from "express";
import cors from "cors";
import { AbouteRoutes } from "./modules/about/aboute.router";
import { ProductRoute } from "./modules/AllProducts/products/product.router";
import { SingleProductRoute } from "./modules/singleProduct/single.product.router";
import { orderRoutes } from "./modules/Order/Order.router";
import { paymentRoutes } from "./modules/Payment/Payment.router";

const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

app.use("/api/v1/aboute", AbouteRoutes);
app.use("/api/v1/product", ProductRoute);
app.use("/api/v1/single", SingleProductRoute);
app.use("/api/v1/order", orderRoutes);
app.use("/api/v1/payment", paymentRoutes);

export default app;
