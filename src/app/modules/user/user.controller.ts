import { Request, Response } from "express";
import { UserServices } from "./user.service";
import { userValidationSchema } from "./user.validation";

const createUsers = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    //data validation using zod
    const zodParsedData = userValidationSchema.parse(userData);
    const result = await UserServices.createUserToDb(zodParsedData);
    res.status(200).json({
      success: true,
      message: "User Created Successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserServices.getAllUserFromDb();
    res.status(200).json({
      success: true,
      message: "User Fetched Successfully",
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const getUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    const result = await UserServices.getUserByIdFromDb(userId);
    if (result) {
      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
        error: { code: 404, description: "User not found!" },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    const updatedUser = await UserServices.updateUser(userId, req.body.user);
    if (updatedUser) {
      res.json({
        success: true,
        message: "User updated successfully!",
        data: updatedUser,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
        error: { code: 404, description: "User not found!" },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    await UserServices.deleteUserFromDb(userId);
    res.json({
      success: true,
      message: "User deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
      error: error,
    });
  }
};

export const UserControllers = {
  createUsers,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
