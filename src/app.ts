import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { UserRoutes } from "./app/modules/user/user.route";
import { OrderRoutes } from "./app/modules/order/order.route";

// parsers
app.use(express.json());
app.use(cors());

//app routes
app.use("/api", UserRoutes);
app.use("/api", OrderRoutes);

//
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Assignment Express project!");
});

export default app;
