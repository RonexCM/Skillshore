import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required")
    .max(255, "Cannot have more than 255 characters")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Email must be a valid email"
    ),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^.*(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
      "Must include at least one  of uppercase, lowercase, number, and special character "
    )
    .min(8, "Password must be atleast 8 characters"),
});
