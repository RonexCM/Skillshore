import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import penguinImage from "../../../assets/images/penguin.svg";
import { Link, useNavigate } from "react-router-dom";
import { TRegistrationFormType } from "../types";
import { useRegisterUserMutation } from "../../../redux/services/myRegistrationApiEndpoints";
import registrationSchema from "../../../validation/registrationValidationSchema";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register: React.FC = () => {
  const [registerUser] = useRegisterUserMutation();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const navigate = useNavigate();
  const handleSubmit = async (
    values: TRegistrationFormType,
    { resetForm }: FormikHelpers<TRegistrationFormType>
  ) => {
    try {
      const responseData = await registerUser(values);
      if ("error" in responseData) {
        const errorTemp = responseData.error;
        if ("data" in errorTemp) {
          const dataTemp = errorTemp.data;
          if ("message" in dataTemp) {
            console.log(dataTemp.message);
            toast.error(dataTemp.message);
          }
        }
      } else {
        const successMessage: string = "Successfully registered";
        resetForm();
        toast.success(successMessage, {
          autoClose: 1200,
          onClose: () => {
            navigate("/");
          },
        });
      }
    } catch (error: any) {
      if ("status" in error && "data" in error) {
        const errorMessage = error.data.message;
        toast.error(errorMessage);
      } else if ("status" in error) {
        toast.error(`Problem registering!`);
      } else {
        toast.error("No response from server!");
      }
    }
  };

  return (
    <>
      <div className="registrationPage mt-auto flex justify-around gap-[220px] p-5">
        <div className=" registration w-[500px]  rounded-[32px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] py-7 px-7">
          <Formik
            initialValues={initialValues}
            validationSchema={registrationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col items-center h-max ">
              <h2 className=" items-center text-center text-3xl leading-[46px] font-bold">
                Create an account
              </h2>
              <div className="flex flex-col min-h-[84px] py-3 w-full mb-1">
                <label htmlFor="name">Name</label>
                <div className="flex flex-col">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3 hover:border-accent"
                  />
                  <ErrorMessage
                    className="text-[13px] font-light text-error py-1"
                    name="name"
                    component="div"
                  />
                </div>
              </div>
              <div className="flex flex-col min-h-[84px] w-full mb-1">
                <label htmlFor="email">Email</label>
                <div className="flex flex-col">
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3 hover:border-accent"
                  />
                  <ErrorMessage
                    className="text-[13px] font-light text-error py-1"
                    name="email"
                    component="div"
                  />
                </div>
              </div>
              <div className="flex flex-col min-h-[84px] w-full mb-1">
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
              <div className="flex flex-col min-h-[84px] w-full mb-1">
                <label htmlFor="password_confirmation">Confirm Password</label>
                <div>
                  <Field
                    type="password"
                    id="password_confirmation"
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
                Create Account
              </button>
              <div className="text-center  text-[14px] font-normal">
                <span className="flex gap-1 mt-[8px] ">
                  Already have an account?{" "}
                  <Link
                    to="/"
                    className="text-primary font-['Poppins'] text-14 leading-18.2 hover:underline"
                  >
                    Login
                  </Link>
                </span>
              </div>
            </Form>
          </Formik>
        </div>
        <div className=" w-1/2 flex justify-center items-center">
          <img src={penguinImage} className="" />
        </div>
      </div>
      <ToastContainer
        className="top-16"
        autoClose={10000}
        hideProgressBar
        newestOnTop
        limit={1}
      />
    </>
  );
};
export default Register;
