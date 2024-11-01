import express from "express";
import { ProductControllers } from "./product.controller";

const router = express.Router();

//eill coll controller function

router.post("/create-product", ProductControllers.createProductData);
router.get("/get-product", ProductControllers.getAllProductData);
router.get("/:id", ProductControllers.getSingleProductData);
router.delete("/:id", ProductControllers.deleteProductData);
router.patch("/:id", ProductControllers.updateProductData);

export const ProductRoute = router;
