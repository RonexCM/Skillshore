import * as Yup from "yup";

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([a-zA-Z0-9]*[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
      "Email must be a valid email"
    ),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^.*(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
      "Must include at least one of uppercase, lowercase, digit and special character"
    ),
});

export default loginValidationSchema;
