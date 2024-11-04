import express from "express";

import { SingleProductControllers } from "./single.product.controller";

const router = express.Router();

//eill coll controller function

router.post(
  "/create-product",
  SingleProductControllers.createSingleProductData
);
router.get("/get-product", SingleProductControllers.getAllSingleProductData);

router.delete(
  "/delete-product/:_id",
  SingleProductControllers.deleteProductData
);
router.get("/get-product/:_id", SingleProductControllers.getSingleProductData);
router.patch(
  "/upadate-product/:_id",
  SingleProductControllers.updateProductData
);

export const SingleProductRoute = router;
