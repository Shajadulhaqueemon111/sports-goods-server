import express from "express";

import { SingleProductControllers } from "./single.product.controller";

const router = express.Router();

//eill coll controller function

router.get("/create-product", SingleProductControllers.createSingleProductData);
router.get("/get-product", SingleProductControllers.getAllSingleProductData);
router.get("/:id", SingleProductControllers.getSingleProductData);

export const SingleProductRoute = router;
