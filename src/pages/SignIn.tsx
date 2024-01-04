import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignInField } from "./list/types";
import { validationSchemaSignIn } from "../validation/validationSchema";
import { Link } from "react-router-dom";
const SignIn = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values: SignInField) => {
    console.log(values);
  };

  return (
    <div className="shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] w-[370px] h-max text-dark rounded-[24px] p-[40px] ">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaSignIn}
      >
        <Form className="flex flex-col items-center h-max">
          <p className="font-bold text-[32px] text-dark leading-[32px]">
            Sign In
          </p>
          <div className="flex flex-col h-[130px] mt-[22px] mb-[-30px] w-full">
            <label
              htmlFor="email__field"
              className="font-normal text-[20px] ml-[13px] "
            >
              Email
            </label>
            <Field
              className="h-field-height w-full border-[2px] outline-none border-primary-light rounded-[10px] px-3 hover:border-accent focus:border-3 focus:border-blue-600 "
              type="email"
              placeholder="Email"
              id="email__field"
              autoComplete="current-email"
              name="email"
            />
            <ErrorMessage
              className="text-[14px] text-error"
              component="div"
              name="email"
            />
          </div>
          <div className="flex flex-col h-[130px] w-full">
            <label
              htmlFor="password__field"
              className="font-normal text-[20px] ml-[13px]"
            >
              Password
            </label>
            <Field
              className="h-field-height w-full border-[2px] outline-none border-primary-light rounded-[10px] px-3 hover:border-accent focus:border-3 focus:border-blue-600"
              type="password"
              placeholder="Password"
              id="password__field"
              autoComplete="current-password"
              name="password"
            />
            <ErrorMessage
              className="text-[14px] text-error"
              component="div"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="px-button-padding-x py-button-padding-y rounded-[3px]  mb-[18px] bg-accent font-semibold font-poppins"
          >
            Sign in
          </button>
          <div className="flex gap-1 mt-[9px] text-text-dark">
            <p className="text-[14px] font-normal">Don't have and account?</p>
            <Link
              to="/register"
              className="text-[14px] font-semibold font-poppins"
            >
              Sign Up
            </Link>
          </div>
          <Link
            to="/forgotpassword"
            className="text-[14px] font-normal mt-[8px] text-primary"
          >
            Forgot Password?
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
