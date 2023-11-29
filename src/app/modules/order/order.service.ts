// import { TOrder } from "./order.interface";
import { IOrder } from "../user/user.interface";
import { UserModel } from "../user/user.model";

const addOrder = async (userId: number, order: IOrder) => {
  const result = await UserModel.findOneAndUpdate(
    { userId },
    { $push: { orders: order } },
    { new: true }
  );
  return result;
};

const getAllOrders = async (userId: number) => {
  const result = await UserModel.findOne({ userId }, { orders: 1, _id: 0 });
  return result;
};

const calculateTotalOrderPrice = async (userId: number) => {
  const result = await UserModel.findOne({ userId }, { orders: 1, _id: 0 });
  if (!result) {
    throw new Error("User not found");
  }

  const userOrders = result.orders;
  if (!userOrders || userOrders.length === 0) {
    return 0;
  }

  const totalPrice = userOrders.reduce(
    (acc, order) => acc + order.price * order.quantity,
    0
  );
  return totalPrice;
};

export const OrderServices = {
  addOrder,
  getAllOrders,
  calculateTotalOrderPrice,
};
