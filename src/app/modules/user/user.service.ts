import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

const createUserToDb = async (user: TUser) => {
  const result = await UserModel.create(user);
  return result;
};

export const UserServices = {
  createUserToDb,
};
