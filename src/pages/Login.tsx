import { Formik, Form, Field, ErrorMessage } from "formik";
import { LoginField } from "./list/types";
import { validationSchemaLogin } from "../validation/validationSchema";
import { Link } from "react-router-dom";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values: LoginField) => {
    //--------submit handler goes here--------
  };

  return (
    <div className="shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] w-[370px] h-max text-dark rounded-[24px] p-[40px] ">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaLogin}
      >
        <Form className="flex flex-col items-center h-max">
          <p className="font-bold text-[32px] text-dark leading-[32px]">
            Login
          </p>
          <div className="flex flex-col h-[130px] mt-[22px] mb-[-30px] w-full">
            <label
              htmlFor="email__field"
              className="font-normal text-[20px] text-dark"
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
              className="text-[13px] text-error"
              component="div"
              name="email"
            />
          </div>
          <div className="flex flex-col h-[110px] w-full">
            <label
              htmlFor="password__field"
              className="font-normal text-[20px] text-dark"
            >
              Password
            </label>
            <Field
              className="h-field-height w-full border-[2px] outline-none border-primary-light rounded-[10px] px-3 hover:border-accent focus:border-3 focus:border-primary"
              type="password"
              placeholder="Password"
              id="password__field"
              autoComplete="current-password"
              name="password"
            />
            <ErrorMessage
              className="text-[13px] text-error leading-[12px] mt-[3px]"
              component="div"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="px-button-padding-x py-button-padding-y rounded-[10px]  mb-[18px] bg-accent text-dark font-semibold font-poppins hover:outline hover:outline-2 hover:outline-primary"
          >
            login
          </button>
          <div className="flex gap-1 mt-[9px] text-text-dark">
            <p className="text-[14px] font-normal">Don't have an account?</p>
            <Link
              to="/register"
              className="text-[14px] font-semibold font-poppins hover:underline"
            >
              Register
            </Link>
          </div>
          <Link
            to="/forgotpassword"
            className="text-[14px] font-normal mt-[8px] text-primary hover:underline"
          >
            Forgot Password?
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
