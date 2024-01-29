import * as Yup from "yup";

const forgotPasswordEmailFieldSchema = Yup.object({
  email: Yup.string()
<<<<<<< HEAD
    .email("Email must be a valid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
=======
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([a-zA-Z0-9]*[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
>>>>>>> 2230a16 (fixed issues in register and forgot password page)
      "Email must be a valid email"
    ),
});

export default forgotPasswordEmailFieldSchema;
