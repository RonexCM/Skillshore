<<<<<<< HEAD
import { Formik, Form, ErrorMessage } from "formik";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TResetPassword } from "../types";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "../../../redux/services/myResetPasswordApiEndpoints";
import enterNewPasswordSchema from "../../../validation/enterNewPasswordSchema";
import { useEffect } from "react";
import { resetPasswordInitialValues } from "../../../configs/constants";
=======
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { TResetPassword } from "../types";
import { ToastContainer, toast } from "react-toastify";
import { useResetPasswordMutation } from "../../../redux/services/myResetPasswordApiEndpoints";
import enterNewPasswordSchema from "../../../validation/enterNewPasswordSchema";
import { useEffect, useState } from "react";
>>>>>>> 2230a16 (fixed issues in register and forgot password page)

const ResetPassword: React.FC = () => {
  const [resetPassword, { isSuccess, error }] = useResetPasswordMutation();

  const navigate = useNavigate();
  const { token } = useParams();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const email = searchParams.get("email");
<<<<<<< HEAD
  const resetPasswordFields = {
    ...resetPasswordInitialValues,
    token: token || "",
    email: email || "",
  };

  const handleSubmit = async (values: TResetPassword) => {
    try {
      await resetPassword(values);
=======

  const initialValues: TResetPassword = {
    token: token,
    email: email,
    password: "",
    password_confirmation: "",
  };

  const [formReset, setFormReset] = useState(null);
  const handleSubmit = async (
    values: TResetPassword,
    { resetForm }: FormikHelpers<TResetPassword>
  ) => {
    try {
      await resetPassword(values);
      resetForm && setFormReset(resetForm as unknown as any);
>>>>>>> 2230a16 (fixed issues in register and forgot password page)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isSuccess) {
<<<<<<< HEAD
=======
      formReset && formReset();
>>>>>>> 2230a16 (fixed issues in register and forgot password page)
      toast.success("Please check your email to see verification link");
      navigate("/");
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error.data.message);
    }
  }, [error]);

  return (
    <div className="flex m-auto h-max">
      <div className="relative shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] w-[470px] h-max text-dark rounded-[20px] py-[25px] px-[42px] ">
        <Formik
<<<<<<< HEAD
          initialValues={resetPasswordFields}
          validationSchema={enterNewPasswordSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur }) => (
            <Form className="flex flex-col items-center h-max">
              <h2 className=" items-center text-center text-2xl leading-[46px] font-bold">
                Enter new password
              </h2>
              <div className="flex flex-col min-h-[94px] mt-[15px] w-full mb-1">
                <label htmlFor="password">Password</label>
                <div className="flex flex-col">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full h-12 px-3 bg-white border-2 border-indigo-100 rounded-lg outline-none hover:border-accent focus:border-3 focus:border-blue-600"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage
                    className="text-[13px] font-light text-error py-1"
                    name="password"
                    component="div"
                  />
                </div>
              </div>
              <div className="flex flex-col min-h-[94px] w-full mb-1">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    className="w-full h-12 px-3 bg-white border-2 border-indigo-100 rounded-lg outline-none hover:border-accent focus:border-3 focus:border-blue-600"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <ErrorMessage
                    className="text-[13px] font-light text-error py-1"
                    name="password_confirmation"
                    component="div"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-slate-900 text-sm font-semibold font-['Poppins'] leading-none h-12 px-6 py-4 my-3 bg-amber-400 rounded-lg justify-center items-center gap-2.5 inline-flex hover:outline hover:outline-2 hover:outline-primary"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
=======
          initialValues={initialValues}
          validationSchema={enterNewPasswordSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center h-max">
            <h2 className=" items-center text-center text-2xl leading-[46px] font-bold">
              Enter new password
            </h2>
            <div className="flex flex-col min-h-[94px] mt-[15px] w-full mb-1">
              <label htmlFor="password">Password</label>
              <div className="flex flex-col">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3 hover:border-accent"
                />
                <ErrorMessage
                  className="text-[13px] font-light text-error py-1"
                  name="password"
                  component="div"
                />
              </div>
            </div>
            <div className="flex flex-col min-h-[94px] w-full mb-1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="password_confirmation"
                  placeholder="Confirm Password"
                  className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3 hover:border-accent"
                />
                <ErrorMessage
                  className="text-[13px] font-light text-error py-1"
                  name="password_confirmation"
                  component="div"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-slate-900 text-sm font-semibold font-['Poppins'] leading-none h-12 px-6 py-4 my-3 bg-amber-400 rounded-lg justify-center items-center gap-2.5 inline-flex"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
      <ToastContainer
        className="top-16"
        autoClose={10000}
        hideProgressBar
        newestOnTop
        limit={1}
      />
>>>>>>> 2230a16 (fixed issues in register and forgot password page)
    </div>
  );
};

export default ResetPassword;
