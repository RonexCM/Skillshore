import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { TEnterNewPasswordField } from "../types";
import enterNewPasswordSchema from "../../../validation/enterNewPasswordSchema";

const EnterNewPassword: React.FC = () => {
  const initialValues: TEnterNewPasswordField = {
    password: "",
    confirm_password: "",
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="relative shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] w-[470px] h-max text-dark rounded-[20px] py-[25px] px-[42px] ">
        <Formik
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
                  id="confirm_password"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3 hover:border-accent"
                />
                <ErrorMessage
                  className="text-[13px] font-light text-error py-1"
                  name="confirm_password"
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
    </div>
  );
};

export default EnterNewPassword;
