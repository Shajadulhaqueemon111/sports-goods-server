import { Router } from "express";
import { paymentController } from "./Payment.controller";

const router = Router();

router.post("/conformation", paymentController.conformationController);

export const paymentRoutes = router;
