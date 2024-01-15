import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .max(255, "Cannot have more than 255 characters"),
  password: Yup.string().required("Password is required"),
});
