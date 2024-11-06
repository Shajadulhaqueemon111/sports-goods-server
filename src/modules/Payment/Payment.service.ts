import { join } from "path";

import { readFileSync } from "fs";
import { veriFyPayment } from "./Payment.utils";
import OrderModel from "../Order/Order.model";

const conformationService = async (transactionId: string) => {
  const verifyResponse = await veriFyPayment(transactionId);
  console.log(verifyResponse);
  let result;
  let message = "";
  if (verifyResponse && verifyResponse.pay_status === "Successful") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    result = await OrderModel.findOneAndUpdate(
      { transactionId },
      {
        paymentStatus: "paid",
      }
    );
    message = "Successfully Paid !";
  } else {
    message = "payment Faild !";
  }

  const filePath = join(__dirname, "../../modules/Views/conformation.html");

  let templete = readFileSync(filePath, "utf-8");
  console.log(templete);

  templete = templete.replace("{{message}}", message);
  return templete;
};

export const paymentService = {
  conformationService,
};
