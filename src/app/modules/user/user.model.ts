import { Schema, model } from "mongoose";
import { TAddress, TFullName, TUser } from "./user.interface";

const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: [true, "street is required"] },
  city: { type: String, required: [true, "city is required"] },
  country: { type: String, required: [true, "country is required"] },
});

// const orderSchema = new Schema<TOrder>({
//   productName: { type: String, required: [true, "productName is required"] },
//   price: { type: Number, required: [true, "Price is required"] },
//   quantity: { type: Number, required: [true, "Quantity is required"] },
// });

const userSchema = new Schema<TUser>({
  userId: { type: Number, required: [true, "userId is required"] },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: [true, "Password is required"] },
  fullName: fullNameSchema,
  age: { type: Number, required: [true, "Age is required"] },
  email: { type: String, unique: true, required: [true, "Email is required"] },
  isActive: { type: Boolean, required: [true, "isActive is required"] },
  hobbies: { type: [String], required: [true, "hobbies is required"] },
  address: addressSchema,
});

export const UserModel = model<TUser>("User", userSchema);
