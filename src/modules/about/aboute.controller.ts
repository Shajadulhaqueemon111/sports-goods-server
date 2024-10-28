import { Request, Response } from "express";
import { AbouteServices } from "./aboute.servise";

const getAbouteData = async (req: Request, res: Response) => {
  try {
    const { Aboute_details: abouteData } = req.body;

    const result = await AbouteServices.getAbouteIntoDB(abouteData);

    res.status(200).json({
      success: true,
      message: "Aboute get data is successfully",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the data.",
    });
  }
};

export const AbouteControllers = {
  getAbouteData,
};
