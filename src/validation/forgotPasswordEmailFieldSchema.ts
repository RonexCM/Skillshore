import * as Yup from "yup";

const forgotPasswordEmailFieldSchema = Yup.object({
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required")
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
      "Email must be a valid email"
    ),
});

export default forgotPasswordEmailFieldSchema;
