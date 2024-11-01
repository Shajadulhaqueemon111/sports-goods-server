import express from "express";
import { cerateUserController } from "./user.controller";

const router = express.Router();

router.post("/create-user", cerateUserController.createUserData);
export const userRoute = router;
