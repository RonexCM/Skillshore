import * as Yup from "yup";

const registrationSchema = Yup.object().shape({
<<<<<<< HEAD
<<<<<<< HEAD
    name: Yup.string()
        .required("Name is required")
        .max(255, "Name must not exceed 255 charracters"),
=======
  name: Yup.string()
    .required("Name is required")
    .max(255, "Name must not exceed 255 charracters"),
>>>>>>> 2230a16 (fixed issues in register and forgot password page)

    email: Yup.string()
        .email("Email must be a valid email")
        .required("Email is required")
        .matches(
          /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Email must be a valid email"
        ),

    password: Yup.string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()+_\-~<>?/.;:{}[\]\\|=" ']).+$/,
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),

    password_confirmation: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
=======
  name: Yup.string()
    .required("Name is required")
    .min(10, "Name must be at least 10 characters")
    .max(255, "Name must not exceed 255 charracters"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .max(255, "Email must not exceed 255 charracters")
    .matches(
      /^[a-zA-Z0-9]+([._-]*[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([a-zA-Z0-9]*[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
      "Email must be a valid email"
    ),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),

  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
>>>>>>> 19cf8ac (updated folder structure, fixed some design inconsistency)
});

export default registrationSchema;
