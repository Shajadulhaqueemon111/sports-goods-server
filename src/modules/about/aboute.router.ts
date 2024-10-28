import express from "express";
import { AbouteControllers } from "./aboute.controller";

const router = express.Router();

//eill coll controller function

router.post("/aboute-details", AbouteControllers.getAbouteData);

export const AbouteRoutes = router;
