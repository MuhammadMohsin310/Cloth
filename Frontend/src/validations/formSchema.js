import {z} from "zod"

export  const checkoutSchema=z.object({
    name: z
    .string({ required_error: "Name is required" })
    .trim()
    .nonempty({ message: "Name cannot be empty" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Name must only contain letters" }),
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .nonempty({ message: "Email cannot be empty" })
    .email("Invalid email address"),
    address: z
    .string()
    .trim()
    .min(10, { message: "Address must be at least 10 characters long" })
    .max(100, { message: "Address cannot exceed 100 characters" })
    .regex(/^[a-zA-Z0-9\s,.-]+$/, { message: "Invalid address format" }),
    city: z
    .string()
    .trim()
    
    .regex(/^[a-zA-Z0-9\s,.-]+$/, { message: "Invalid address format" }),
    phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .nonempty({ message: "Phone number cannot be empty" })
    .regex(/^03[0-9]{9}$/, {
      message:
        "Invalid Pakistani phone number (should be 11 digits starting with 03)",
    }),
})

export const signUpSchema = z.object({
  username: z
  .string({ required_error: "Name is required" })
  .trim()
  .nonempty({ message: "Name cannot be empty" })
  .min(3, { message: "Name must be at least 3 characters long" })
  .regex(/^[a-zA-Z\s]+$/, { message: "Name must only contain letters" }),
  email: z
  .string({ required_error: "Email is required" })
  .trim()
  .nonempty({ message: "Email cannot be empty" })
  .email("Invalid email address"),
  password: z
  .string({ required_error: "Password is required" })
  .trim()
  .nonempty({ message: "Password cannot be empty" })
  .min(8, { message: "Password must be at least 8 characters long" })

})
export const loginSchema = z.object({
  email: z
  .string({ required_error: "Email is required" })
  .trim()
  .nonempty({ message: "Email cannot be empty" })
  .email("Invalid email address"),
  password: z
  .string({ required_error: "Password is required" })
  .trim()
  .nonempty({ message: "Password cannot be empty" })
  .min(8, { message: "Password must be at least 8 characters long" })
})