import express, { Application } from "express";
import cors from "cors";
import { AbouteRoutes } from "./modules/about/aboute.router";
import { ProductRoute } from "./modules/AllProducts/products/product.router";
import { SingleProductRoute } from "./modules/singleProduct/single.product.router";
import { userRoute } from "./modules/user/user.route";
const app: Application = express();

//parser

app.use(express.json());
app.use(cors());

//application route

app.use("/api/v1/aboute", AbouteRoutes);
app.use("/api/v1/product", ProductRoute);
app.use("/api/v1/single", SingleProductRoute);
app.use("/api/v1/user", userRoute);

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

export default app;
