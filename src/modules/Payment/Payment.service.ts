/* eslint-disable @typescript-eslint/no-unused-vars */
import { join } from "path";
import { readFileSync, existsSync } from "fs";
import OrderModel from "../Order/Order.model";
import { veriFyPayment } from "./Payment.utils";

const conformationService = async (transactionId: string, status: string) => {
  const verifyResponse = await veriFyPayment(transactionId);
  console.log(verifyResponse);
  let result;
  let message = "";

  if (verifyResponse && verifyResponse.pay_status === "Successful") {
    result = await OrderModel.findOneAndUpdate(
      { transactionId },
      { paymentStatus: "paid" }
    );
    message = "Successfully Paid!";
  } else {
    message = "Payment Failed!";
  }

  const filePath = join(
    __dirname,
    "../../../src/modules/Views/conformation.html"
  );

  if (!existsSync(filePath)) {
    throw new Error(`File not found at path: ${filePath}`);
  }

  let template = readFileSync(filePath, "utf-8");
  console.log(template);

  template = template.replace("{{message}}", message);
  return template;
};
export const paymentService = {
  conformationService,
};
