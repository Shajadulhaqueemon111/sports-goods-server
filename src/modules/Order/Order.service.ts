/* eslint-disable @typescript-eslint/no-explicit-any */

import { initiatePayment } from "../Payment/Payment.utils";
import { SingleModel } from "../singleProduct/single.product.model";
import OrderModel from "./Order.model";

const createOrder = async (orderData: any) => {
  const { user, products } = orderData;

  let totalPrice = 0;

  // Calculate the total price
  const productDetails = await Promise.all(
    products.map(async (item: any) => {
      const product = await SingleModel.findById(item.product);
      if (product) {
        totalPrice += product.price * item.quantity;
        return {
          product: product._id,
          quantity: item.quantity,
        };
      } else {
        throw new Error("Product not found");
      }
    })
  );

  const transactionId = `TXN-${Date.now()}`;

  const order = new OrderModel({
    user,
    products: productDetails,
    totalPrice,
    status: "Pending",
    paymentStatus: "Pending",
    transactionId,
  });

  await order.save();

  const paymentData = {
    transactionId,
    totalPrice,
    customerName: user.name,
    customerEmail: user.email,
    customerPhone: user.phone,
    customerAddress: user.address,
  };
  //payment
  const paymentSession = await initiatePayment(paymentData);
  console.log(paymentSession);
  return paymentSession;
};

export const orderService = {
  createOrder,
};