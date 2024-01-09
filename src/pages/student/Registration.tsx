import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import registrationSchema from "../../validation/registrationValidationSchema";
import penguinImage from "../../assets/images/penguin.svg";
import { Link } from "react-router-dom";
import { registrationFormType } from "../list/types";
// import { TUserDetails } from "../list/types";
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
    const apiUrl = "https://65990024a20d3dc41cef2336.mockapi.io/Registration";

    fetch(apiUrl, {
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
    <div className="registrationPage flex justify-between  h-full">
      {/* registration form goes here */}
      <div className="registration rounded-[32px] shadow-md mb-40 mt-[80px] ml-28 ">
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
            <div className="flex flex-col h-[90px] mt-[22px]  w-full">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-96 h-14 bg-white rounded-lg border-2 border-indigo-100"
              />
              <ErrorMessage
                className="text-[13px] text-error"
                name="name"
                component="div"
              />
            </div>
            <div className="flex flex-col h-[90px]   w-full">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                id="email"
                name="email"
                className="w-96 h-14 bg-white rounded-lg border-2 border-indigo-100"
              />
              <ErrorMessage
                className="text-[13px] text-error"
                name="email"
                component="div"
              />
            </div>
            <div className="flex flex-col h-[90px]  w-full">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-96 h-14 bg-white rounded-lg border-2 border-indigo-100"
              />
              <ErrorMessage
                className="text-[13px] text-error"
                name="password"
                component="div"
              />
            </div>
            <div className="flex flex-col h-[90px]  w-full">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-96 h-14 bg-white rounded-lg border-2 border-indigo-100"
              />
              <ErrorMessage
                className="text-[13px] text-error"
                name="confirmPassword"
                component="div"
              />
            </div>
            <button
              type="submit"
              className="text-slate-900 text-sm font-semibold font-['Poppins'] leading-none w-60 h-12 px-6 py-4 my-3 bg-amber-400 rounded-lg justify-center items-center gap-2.5 inline-flex"
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
