import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserToDb = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUserFromDb = async () => {
  const result = await UserModel.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1 }
  );
  return result;
};

const getUserByIdFromDb = async (userId: number) => {
  const result = await UserModel.findOne({ userId }, { password: 0 });
  return result;
};

export const UserServices = {
  createUserToDb,
  getAllUserFromDb,
  getUserByIdFromDb,
};
