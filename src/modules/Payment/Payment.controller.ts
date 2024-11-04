import { Request, Response } from "express";
import { paymentService } from "./Payment.service";

const conformationController = async (req: Request, res: Response) => {
  console.log(req.query.transactionId);
  const { transactionId } = req.query;
  const result = await paymentService.conformationService(
    transactionId as string
  );
  res.send(result);
};

export const paymentController = {
  conformationController,
};
