import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/users", UserControllers.createUsers);
router.get("/users", UserControllers.getUsers);

export const UserRoutes = router;
