import { ErrorMessage, Field, Form, Formik } from "formik";

import { ValidationSchemaAddQuestion } from "../../../validation/validationSchema";
import { AddQuizCategoryType } from "../../list/types/types";
import { Link } from "react-router-dom";

const AddQuizCategory = () => {
  const initialValues: AddQuizCategoryType = {
    title: "",
    slug: "",
  };
  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className=" justify-center align-middle  w-full relative">
      <Link to="/admin" className="underline text-blue-700 p-6  absolute">
        {" "}
        QuizCategory
      </Link>
      <h1 className="p-5 m-2 text-center text-2xl font-semibold text-[rgb(47,92,254)] ">
        Add Quiz Category
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ValidationSchemaAddQuestion}
      >
        <div className=" items-end justify-center ms-[470px]">
          <Form className="flex flex-col gap-1 justify-center items-center w-[400px] h-[300px] rounded-lg outline outline-2 outline-primary-light ">
            {/* title input field and error message */}
            <div className="flex flex-col gap-1 w-[300px] ">
              <div className=" flex flex-col  h-[80px]">
                <label htmlFor="title" className="text-xl">
                  Title:
                </label>
                <Field
                  ty="text"
                  id="title"
                  autoComplete="current-title"
                  name="title"
                  className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                />
                <ErrorMessage
                  className="text-red-500 text-base"
                  component="div"
                  name="title"
                />
              </div>
            </div>
            {/* slug input field and error message */}
            <div className="flex flex-col gap-1 w-[300px]">
              <div className="flex flex-col h-[80px]">
                <label htmlFor="slug" className="text-xl pt-1 pb-1">
                  Slug:
                </label>
                <Field
                  type="text"
                  id="slug"
                  autoComplete="current-slug"
                  name="slug"
                  className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                />
                <ErrorMessage
                  className="text-red-500 text-base"
                  component="div"
                  name="slug"
                />
              </div>
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="bg-dark text-primary-light rounded-lg text-xs font-medium mt-5 py-button-padding-y w-[300px] px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
            >
              Add
            </button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default AddQuizCategory;
