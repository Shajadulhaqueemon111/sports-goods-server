"use strict";
// import { object } from "zod";
// import config from "../../app/config";
// import { TUser } from "./user.interface";
// import { UsreModel } from "./user.model";
// const createUserIntoDB = async (password: string, singlUserData: TUser) => {
//   const userData: Partial<TUser> = {};
//   userData.password = password || (config.default_password as string);
//   userData.role = "user";
//   //   set Mannuali generator
//   userData.id = "20200785";
//   const result = await UsreModel.create(userData);
//   if (object.keys(result).length) {
//     singlUserData.id = result.id;
//     singlUserData.user = result._id;
//   }
//   return result;
// };
// export const createUserServices = {
//   createUserIntoDB,
// };
