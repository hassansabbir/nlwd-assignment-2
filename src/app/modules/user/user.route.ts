import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/users", UserControllers.createUsers);
router.get("/users", UserControllers.getUsers);
router.get("/users/:userId", UserControllers.getUserById);
router.put("/users/:userId", UserControllers.updateUser);
router.delete("/users/:userId", UserControllers.deleteUser);

export const UserRoutes = router;
