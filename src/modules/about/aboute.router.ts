import express from "express";
import { AbouteControllers } from "./aboute.controller";

const router = express.Router();

//eill coll controller function

router.post("/aboute-details", AbouteControllers.getAbouteData);
router.get("/aboute-details", AbouteControllers.getAllAbouteData);

export const AbouteRoutes = router;
