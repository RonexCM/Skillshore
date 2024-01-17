import { Field, Formik, Form, ErrorMessage } from "formik";

import { ValidationSchemaAddQuizCategory } from "../../../validation/validationSchemaAddQuizCategory";
import { AddQuizCategoryFieldType } from "../../list/types/types";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

const AddQuizCategory = () => {
  //   ----------formik objects----------
  const initialValues: AddQuizCategoryFieldType = {
    title: "",
    slug: "",
  };

  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = (values: AddQuizCategoryFieldType) => {
    console.log(values);
    console.log("submitted");
  };

  const navigate = useNavigate();
  return (
    <div className="w-full p-5 px-8 ">
      <div className="flex flex-col justify-start items-start  pb-0 ">
        <div
          className="text-primary text-opacity-80 text-sm mb-5 cursor-pointer flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <FaHome />
          <span>Admin </span>
          <SlArrowRight />
          <span> Quiz Category </span>
        </div>
      </div>
      <h1 className="text-primary font-medium p-3 text-2xl">Add New Quiz</h1>

      <div className="border-2 p-5 border-primary-light rounded-xl w-[600px] form-container relative">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ValidationSchemaAddQuizCategory}
        >
          <Form className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              {/* title input field and error message */}
              <div className="flex basis-[60%] flex-col gap-6">
                <div className="">
                  <div className="flex flex-col gap-1 ">
                    <label htmlFor="title" className="text-md text-dark ps-1">
                      Title
                    </label>
                    <Field
                      type="text"
                      id="title"
                      autoComplete="current-title"
                      name="title"
                      className="p-1 ps-3 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                    />
                  </div>
                  <ErrorMessage
                    className=" text-red-500 text-xs ml-[52px] absolute pt-2 ps-8"
                    component="div"
                    name="title"
                  />
                </div>
              </div>
              {/* slug input field and error message */}
              <div className="flex basis-[40%] flex-col gap-3">
                <div>
                  <div className="flex flex-col gap-1">
                    <label htmlFor="slug" className="text-md text-dark ps-1">
                      Slug
                    </label>
                    <Field
                      type="text"
                      id="slug"
                      autoComplete="current-slug"
                      name="slug"
                      className="p-1 ps-3 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                    />
                  </div>
                  <ErrorMessage
                    className="text-red-500 text-xs ml-[54px] absolute pt-2 ps-8"
                    component="div"
                    name="slug"
                  />
                </div>
              </div>
            </div>
            {/* description textarea field and error message */}

            {/* submit button */}
            <button
              type="submit"
              className="bg-dark text-primary-light rounded-lg text-md font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark mt-9 w-[150px]"
            >
              Add
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddQuizCategory;
