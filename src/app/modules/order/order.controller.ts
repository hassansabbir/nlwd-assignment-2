import { OrderServices } from "./order.service";
import { Request, Response } from "express";

const addOrder = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  try {
    await OrderServices.addOrder(userId, req.body.orders);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: { code: 500, description: error.message },
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  try {
    const orders = await OrderServices.getAllOrders(userId);
    res.json({
      success: true,
      message: "Orders fetched successfully!",
      data: orders,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: { code: 500, description: error.message },
    });
  }
};

const calculateTotalPrice = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);

  try {
    const totalPrice = await OrderServices.calculateTotalOrderPrice(userId);
    res.json({
      success: true,
      message: "Total price calculated successfully!",
      data: { totalPrice },
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: "User not found",
      error: { code: 404, description: "User not found!" },
    });
  }
};

export const OrderControllers = {
  addOrder,
  getAllOrders,
  calculateTotalPrice,
};
