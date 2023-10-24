import * as yup from 'yup';

export const userSchema = yup.string().matches(
    /^[A-Za-z]+$/,
    "Invalid UserName"
).required("Username is Invalid")

export const emailSchema = yup.string().matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
    "Invalid email"
  ).required("Email is required");
  
  export const passwordSchema = yup
  .string()
  .min(8, "Password must be at least 8 characters")
  .matches(/[a-z]/, "Password must contain at least one lowercase letter")
  .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
  .matches(/[0-9]/, "Password must contain at least one digit")
  .matches(/[!@#$%^&*(),.?\":{}|<>]/, "Password must contain at least one special character")
  .required("Password is required");

  export const SingUpSchema = yup.object().shape({
    username:userSchema,
    email: emailSchema,
    password: passwordSchema,
  });
  