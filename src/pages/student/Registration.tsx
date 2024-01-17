import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import registrationSchema from "../../validation/registrationValidationSchema";
import penguinImage from "../../assets/images/penguin.svg";
import { Link, useNavigate } from "react-router-dom";
import { registrationFormType } from "../list/types/types";
import { useRegisterUserMutation } from "../../redux/services/myApiEndpoints";

const RegistrationForm: React.FC = () => {
  const [registerUser] = useRegisterUserMutation();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  const handleSubmit = (
    values: registrationFormType,
    { resetForm }: FormikHelpers<registrationFormType>
  ) => {
    try {
      const handleRegister = async () => {
        const payload = await registerUser(values).unwrap();
        console.log(`This is payload: ${payload}`);
        console.log(payload);
      };
      handleRegister();
      resetForm();
      navigate("/");
    } catch (error) {
      console.log(`Error registering the user: ${error}`);
    }
  };

  return (
    <div className="registrationPage flex justify-between p-5">
      {/* registration form goes here */}
      <div className=" registration w-[500px]  rounded-[32px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)]  ml-28 py-5 px-7">
        <Formik
          initialValues={initialValues}
          validationSchema={registrationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col items-center h-max ">
            <h2 className=" items-center text-center text-3xl mt-[15px] leading-[46px] font-bold">
              Create an account
            </h2>
            <div className="flex flex-col mt-[15px] min-h-[84px] w-full mb-1">
              <label htmlFor="name">Name</label>
              <div className="flex flex-col">
                <Field
                  type="text"
                  id="name"
                  name="name"
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
              <span className="flex gap-1 mt-[9px] text-text-dark">
                Already Have An Account?{" "}
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
      <div className=" w-[800px] ">
        <img src={penguinImage} className="mt-[120px] ml-[150px]" />
      </div>
    </div>
  );
};
export default RegistrationForm;
