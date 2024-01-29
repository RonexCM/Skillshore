import * as Yup from "yup";

const forgotPasswordEmailFieldSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([a-zA-Z0-9]*[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
      "Email must be a valid email"
    ),
});

export default forgotPasswordEmailFieldSchema;
