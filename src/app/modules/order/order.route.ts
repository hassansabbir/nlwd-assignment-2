import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.put("/users/:userId/orders", OrderControllers.addOrder);
router.get("/users/:userId/orders", OrderControllers.getAllOrders);
router.get(
  "/users/:userId/orders/total-price",
  OrderControllers.calculateTotalPrice
);

export const OrderRoutes = router;
