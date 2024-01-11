import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .max(255, "Cannot have more than 255 characters"),
  password: Yup.string()
    .matches(
      /^.*(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
      "Must use atleast each of uppercase, lowercase, special character and number"
    )
    .required("Password is required"),
});
