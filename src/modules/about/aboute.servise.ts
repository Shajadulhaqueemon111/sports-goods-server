import { Aboute } from "./about.interface";
import { AboutModel } from "./aboute.model";

const getAbouteIntoDB = async (aboute: Aboute) => {
  const result = await AboutModel.create(aboute);

  return result;
};

const getAllAbouteIntoDB = async () => {
  const result = await AboutModel.find();
  return result;
};
export const AbouteServices = {
  getAbouteIntoDB,
  getAllAbouteIntoDB,
};
