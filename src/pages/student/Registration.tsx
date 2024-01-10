import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import registrationSchema from "../../validation/registrationValidationSchema";
import penguinImage from "../../assets/images/penguin.svg";
import { Link } from "react-router-dom";
import { registrationFormType } from "../list/types";
import { baseUrl } from "../../configs";
const RegistrationForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = (
    values: registrationFormType,
    { resetForm }: FormikHelpers<registrationFormType>
  ) => {
    fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("POST request successful:", responseData);
        resetForm();
      })
      .catch((error) => {
        console.error("Error during POST request:", error);
      });
  };
  return (
    <div className="registrationPage flex justify-between  h-full p-5">
      {/* registration form goes here */}
      <div className=" registration border-solid border-2 border-gray-500 w-[500px]  rounded-[32px] shadow-md  ml-28 p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={registrationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center h-max ">
            <h2 className=" items-center text-center text-3xl leading-[46px] font-bold">
              Create An Account
            </h2>
            <p className="text-center text-[15px] leading-[19.5px] font-normal ">
              Create an account to get yourself certified <br /> through
              Skillshore
            </p>
            <div className="flex flex-col h-[90px] mt-[22px]  w-full mb-3">
              <label htmlFor="name">Name</label>
              <div className="flex flex-col h-20">
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full h-14 bg-white rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error"
                  name="name"
                  component="div"
                />
              </div>
            </div>
            <div className="flex flex-col h-[90px] mb-3  w-full">
              <label htmlFor="email">Email</label>
              <div className="flex flex-col h-20">
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="w-full h-14 bg-white rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error"
                  name="email"
                  component="div"
                />
              </div>
            </div>
            <div className="flex flex-col h-[90px] w-full mb-6">
              <label htmlFor="password">Password</label>
              <div className="flex flex-col h-[100px]">
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full h-14 bg-white rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error"
                  name="password"
                  component="div"
                />
              </div>
            </div>
            <div className="flex flex-col h-[90px] mb-3  w-full">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full h-14 bg-white rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error"
                  name="confirmPassword"
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
            <div className="AlreadyHaveAnAccountLogin text-center">
              <span className="flex gap-1 mt-[9px] text-text-dark">
                Already Have An Account?{" "}
                <Link
                  to="/login"
                  className="text-primary font-karla text-14 font-bold leading-18.2 hover:underline"
                >
                  Login
                </Link>
              </span>
            </div>
          </Form>
        </Formik>
      </div>
      <div className=" w-[800px] ">
        <img src={penguinImage} className="mt-[120px] ml-[150px]" />
      </div>
    </div>
  );
};
export default RegistrationForm;
