import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  LoginErrorMessageType,
  LoginField,
  LoginResponseSuccess,
} from "./list/types";
import { validationSchemaLogin } from "../validation/validationSchema";
import { Link } from "react-router-dom";
import { useGetUserCredentialsMutation } from "../redux/services/myApiEndpoints";
import { useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };
  /**
   *function to check if error is of type FetchBaseQueryError
   * @param error
   * @returns
   */
  const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError => {
    return error;
  };
  /**
   * function to check if response data is of type LoginResponseSuccess or LoginResponseError
   * @param response
   * @returns
   */
  const isLoginResponseSuccess = (
    response: any
  ): response is LoginResponseSuccess => {
    return response;
  };
  const [loginUser] = useGetUserCredentialsMutation();
  const [loginErrorMessage, setLoginErrorMessage] =
    useState<LoginErrorMessageType>([""]);
  const onSubmit = (values: LoginField) => {
    /**
     * user clicks login, form is submitted, we get accessToken in response body and token is saved in cookie
     */
    const handleLogin = async () => {
      try {
        const responseFromLogin = await loginUser(values);
        // check if error key exists in responseFromLogin
        if ("error" in responseFromLogin) {
          const loginError = responseFromLogin.error;
          // check if loginError is of type FetchBaseQueryError
          if (isFetchBaseQueryError(loginError)) {
            console.log(loginError);
          }
        }
        // check if data key exists in responseFromLogin
        else if ("data" in responseFromLogin) {
          const responseData = responseFromLogin.data;
          console.log(responseData);
          // check if responseFromLogin is of type LoginResponseSuccess
          if (isLoginResponseSuccess(responseData)) {
            const message = responseData.message;
            const token = responseData.token;
            console.log(message);
            console.log(token);
            if (token && message === "Successfully logged in") {
              document.cookie = `token=${token}`;
              //dispatch isLoggedIn as true to redux store then navigate to protected route /user
              navigate("/user");
            }
          } else {
            const message = responseData.message;
            const errors = responseData.errors;
            const errorMessage = errors.email;
            setLoginErrorMessage(errorMessage);
            // toast the error message
          }
        }
      } catch (error) {
        console.log(`error occured while loging in user - ${error}`);
      }
    };
    handleLogin();
  };

  return (
    <div className="shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] w-[370px] h-max text-dark rounded-[24px] p-[40px] ">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaLogin}
      >
        {({ values, setFieldValue }) => (
          <Form className="flex flex-col items-center h-max">
            <p className="font-bold text-[32px] text-dark leading-[32px] mb-[8px]">
              Login
            </p>
            <div className="flex flex-col h-[130px] mt-[22px] mb-[-30px] w-full">
              <label htmlFor="email" className="font-normal text-lg text-dark">
                Email
              </label>
              <Field
                className="h-field-height w-full border-[2px] outline-none border-primary-light rounded-[10px] px-3 hover:border-accent focus:border-3 focus:border-blue-600 "
                type="email"
                placeholder="Email"
                id="email"
                autoComplete="current-email"
                name="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const lowercaseEmail = e.target.value.toLowerCase();
                  setFieldValue("email", lowercaseEmail);
                }}
              />
              <ErrorMessage
                className="text-[13px] text-error"
                component="div"
                name="email"
              />
            </div>
            <div className="flex flex-col h-[110px] w-full">
              <label
                htmlFor="password"
                className="font-normal text-lg text-dark"
              >
                Password
              </label>
              <Field
                className="h-field-height w-full border-[2px] outline-none border-primary-light rounded-[10px] px-3 hover:border-accent focus:border-3 focus:border-primary"
                type="password"
                placeholder="Password"
                id="password"
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
                className="text-[14px] font-normal text-primary font-poppins hover:underline"
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
        )}
      </Formik>
    </div>
  );
};

export default Login;
