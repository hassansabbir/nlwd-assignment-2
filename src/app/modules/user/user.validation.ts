import z from "zod";

export const fullNameValidationSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
});

export const addressValidationSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

export const userValidationSchema = z.object({
  userId: z.number().int().positive().min(1),
  username: z.string().min(1, { message: "unique username required" }),
  password: z.string().min(1),
  fullName: fullNameValidationSchema,
  age: z.number().int().positive().min(1),
  email: z.string().email().min(1, { message: "invalid email" }),
  isActive: z.boolean(),
  hobbies: z.array(z.string().min(1)),
  address: addressValidationSchema,
});
