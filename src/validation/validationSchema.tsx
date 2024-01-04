import * as Yup from "yup";

export const validationSchemaSignIn = Yup.object({
  email: Yup.string()
    .required("email is required")
    .max(255, "cannot have more than 255 characters")
    .strict()
    .lowercase("must be lowercase"),
  password: Yup.string()
    .matches(
      /^.*(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
      "must use atleast each of uppercase, lowercase, special character and number"
    )
    .required("password is required"),
});
