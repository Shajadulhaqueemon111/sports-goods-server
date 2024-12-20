import { Request, Response } from "express";
import { orderService } from "./Order.service";

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    console.log(orderData);
    const newOrder = await orderService.createOrder(orderData);
    console.log(newOrder);
    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: newOrder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
      error,
    });
  }
};
