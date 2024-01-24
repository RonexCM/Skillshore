import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { TLoggedInUserDetails } from "../types";
import { loginValidationSchema } from "../../../validation";
import { Link } from "react-router-dom";
import { useLoginUserMutation } from "../../../redux/services/myLoginApiEndpoints";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { loggedInUser } from "../../../redux/slice/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const navigate = useNavigate();
  const initialValues = useSelector((state: RootState) => state.login);
  const [loginUser] = useLoginUserMutation();
  const onSubmit = async (
    values: TLoggedInUserDetails,
    { resetForm }: FormikHelpers<TLoggedInUserDetails>
  ) => {
    const userCredentials = {
      email: values.email.toLowerCase(),
      password: values.password,
    };
    const loggedInUserDetails = {
      email: values.email.toLowerCase(),
      password: values.password,
      isLoggedIn: true,
    };
    toast.dismiss();
    // user clicks login, form is submitted, we get accessToken in response body and token is saved in cookie
    try {
      const responseData = await loginUser(userCredentials).unwrap();
      if (responseData) {
        if ("message" in responseData && "token" in responseData) {
          const successMessage = responseData.message;
          const token = responseData.token;
          if (token && successMessage === "Successfully logged in") {
            cookies.set("token", token, { secure: true });
            resetForm();
            dispatch(loggedInUser(loggedInUserDetails));
            toast.success("Successfully logged in!", {
              autoClose: 500,
              onClose: () => {
                navigate("/home");
              },
            });
          } else {
            toast.error("Problem logging in!");
          }
        }
      }
    } catch (error: any) {
      if ("status" in error && "data" in error) {
        const errorMessage = error.data.message;
        toast.error(errorMessage);
      } else if ("status" in error) {
        toast.error(`Problem logging in!`);
      } else {
        toast.error("No response from server!");
      }
    }
  };

  return (
    <>
      <div className="mt-auto shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] w-[370px] h-max text-dark rounded-[24px] p-[40px] ">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}
        >
          <Form className="flex flex-col items-center h-max">
            <p className="font-bold text-[32px] text-dark leading-[32px] mb-[8px]">
              Login
            </p>
            <div className="flex flex-col h-[130px] mt-[22px] mb-[-30px] w-full">
              <label
                htmlFor="email"
                className="font-normal text-base text-dark"
              >
                Email
              </label>
              <Field
                className="h-field-height w-full text-base border-[2px] outline-none border-primary-light rounded-[10px] px-3 hover:border-accent focus:border-3 focus:border-blue-600 "
                type="email"
                placeholder="Email"
                id="email"
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
                htmlFor="password"
                className="font-normal text-base text-dark"
              >
                Password
              </label>
              <Field
                className="h-field-height w-full text-base border-[2px] outline-none border-primary-light rounded-[10px] px-3 hover:border-accent focus:border-3 focus:border-primary"
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
              className="px-button-padding-x py-button-padding-y rounded-[10px]  mb-[18px] bg-accent text-dark font-semibold font-poppins hover:outline hover:outline-2 hover:outline-primary focus:outline focus:outline-2 focus:outline-primary"
            >
              Login
            </button>
            <div className="flex gap-1 mt-[9px] text-text-dark">
              <p className="text-[14px] font-normal">Don't have an account?</p>
              <Link
                to="register"
                className="text-[14px] font-normal text-primary font-poppins rounded-sm hover:underline focus:outline focus:outline-2 focus:outline-primary"
              >
                Register
              </Link>
            </div>
            <Link
              to="forgotPassword"
              className="text-[14px] font-normal mt-[8px] rounded-sm text-primary hover:underline focus:outline focus:outline-2 focus:outline-primary"
            >
              Forgot Password?
            </Link>
          </Form>
        </Formik>
        <ToastContainer
          className="top-16"
          autoClose={10000}
          hideProgressBar
          newestOnTop
          limit={1}
        />
      </div>
    </>
  );
};

export default Login;
