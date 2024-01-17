import { Field, Formik, Form, ErrorMessage, FormikHelpers } from "formik";

import { ValidationSchemaAddQuizCategory } from "../../../validation/validationSchemaAddQuizCategory";
import { AddQuizCategoryFieldType } from "../../list/types/types";
import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useAddQuizCategoryMutation } from "../../../redux/services/myQuizCategoryApiEndpoints";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddQuizCategory = () => {
  const [addQuizCategory] = useAddQuizCategoryMutation();
  //   ----------formik objects----------
  const initialValues: AddQuizCategoryFieldType = {
    id: "",
    title: "",
    slug: "",
  };
  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = async (
    values: AddQuizCategoryFieldType,
    actions: FormikHelpers<AddQuizCategoryFieldType>
  ) => {
    try {
      const { resetForm } = actions;
      await addQuizCategory(values);
      toast.success("QuizCategory Added!");
      resetForm();
    } catch (error) {
      toast.error("Error adding quiz category!");
    }
  };

  const navigate = useNavigate();
  return (
    <div className="w-full p-5 px-8 ">
      <div className="flex flex-col justify-start items-left p-2 mb-2">
        <div className="text-primary p-1 pl-0  pr-3 rounded-lg text-opacity-80 text-sm mb-5 flex items-center gap-1 self-start ">
          <div
            className="flex gap-2  cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <AiFillHome className="text-lg" />
            <span className="hover:underline">Quiz Category</span>
          </div>
          <MdOutlineKeyboardArrowRight className="text-xl" />
          <span className="text-[#82a6ef]"> New Quiz Category</span>
        </div>
        <h1 className="text-primary font-medium text-2xl">New Quiz Category</h1>
      </div>
      <div className="border-2 p-5 border-primary-light rounded-xl form-container relative">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ValidationSchemaAddQuizCategory}
        >
          <Form className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              {/* title input field and error message */}
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex flex-col gap-1 ">
                    <label htmlFor="title" className="text-md text-dark ps-1">
                      Title
                    </label>
                    <Field
                      type="text"
                      id="title"
                      autoComplete="current-title"
                      name="title"
                      className="p-1 px-2 rounded-lg w-full  border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary"
                    />
                  </div>
                  <ErrorMessage
                    className=" text-red-500 text-xs  absolute mt-1"
                    component="div"
                    name="title"
                  />
                </div>
              </div>
              {/* slug input field and error message */}
              <div className="flex  flex-col gap-3">
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
                      className="p-1 px-2 rounded-lg w-full  border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary"
                    />
                  </div>
                  <ErrorMessage
                    className="text-red-500 text-xs absolute mt-1"
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
              className="bg-dark text-primary-light rounded-lg text-md font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark mt-3 w-[150px]"
            >
              Add
            </button>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddQuizCategory;
