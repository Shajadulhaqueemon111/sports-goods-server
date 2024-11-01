import { Request, Response } from "express";
import { createUserServices } from "./user.service";

const createUserData = async (req: Request, res: Response) => {
  try {
    const { password, createUser: userData } = req.body;

    const result = await createUserServices.createUserIntoDB(
      password,
      userData
    );

    res.status(200).json({
      success: true,
      message: "single Product Create data is successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "An error occurred while fetching the data.",
      data: error,
    });
  }
};

export const cerateUserController = {
  createUserData,
};
