import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import penguinImage from "../../../assets/images/penguin.svg";
import { Link, useNavigate } from "react-router-dom";
import { TRegistrationFormType } from "../types";
import { useRegisterUserMutation } from "../../../redux/services/myRegistrationApiEndpoints";
import registrationSchema from "../../../validation/registrationValidationSchema";

const Register: React.FC = () => {
  const [registerUser] = useRegisterUserMutation();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  const handleSubmit = async (
    values: TRegistrationFormType,
    { resetForm }: FormikHelpers<TRegistrationFormType>
  ) => {
    try {
      await registerUser(values);
      resetForm();
      navigate("/");
    } catch (error) {
      console.error("Error registering the user:", error);
    }
  };

  return (
    <div className="registrationPage flex justify-around gap-[220px] p-5">
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
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3 hover:border-accent"
                />
                <ErrorMessage
                  className="text-[13px] font-light text-error py-1"
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
              <span className="flex gap-1 mt-[8px] font-light text-text-dark">
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
  );
};
export default Register;