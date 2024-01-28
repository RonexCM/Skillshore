import { Field, FieldArray, Formik, Form, ErrorMessage } from "formik";
import {
  validationSchemaAddQuestion,
  validationSchemaAddQuizCategory,
} from "../../../validation";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { TAddQuizCategoryFieldType } from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEditQuizCategoryMutation } from "../../../redux/services/myQuizCategoryApiEndpoints";

const EditQuizCategory = () => {
  const navigate = useNavigate();

  const { data: quizCategoryData } = useSelector(
    (state: RootState) => state.quizCategory
  );
  const { id, ...rest } = quizCategoryData;
  const initialValues = { ...rest };

  const [editQuizCategory, { isError, error }] = useEditQuizCategoryMutation();
  //   ----------formik objects----------
  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = async (values: TAddQuizCategoryFieldType) => {
    const editedValues = { ...values, id: id };
    await editQuizCategory(editedValues);
    if (isError) {
      toast.error("Error editing quiz category!");
      console.log(error);
    } else {
      toast.success("Updated!", {
        autoClose: 400,
        hideProgressBar: true,
        onClose: () => {
          navigate(-1);
        },
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      className="w-full pt-5 pb-10 px-8 "
    >
      <div className="flex flex-col justify-start items-left p-2 mb-2">
        <div className="text-primary p-1 pl-0  pr-3 rounded-md text-opacity-80 text-sm mb-5 flex items-center gap-1 self-start ">
          <div
            className="flex gap-2  cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <AiFillHome className="text-lg" />
            <span className="hover:underline">Quiz Category</span>
          </div>
          <MdOutlineKeyboardArrowRight className="text-xl" />
          <span className="text-[#82a6ef]">Edit Category</span>
        </div>
        <h1 className="text-primary font-medium text-2xl">Edit Category</h1>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaAddQuizCategory}
      >
        {({ handleChange }) => (
          // form field in 2 grid columns
          <Form>
            <div className="border-2  p-7 rounded-md grid gap-2 gap-x-6 grid-cols-2 border-primary-light ">
              {/* title input field and error message */}
              <div className="h-[76px]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="title" className="text-base text-dark">
                    Title
                  </label>
                  <Field
                    type="text"
                    id="title"
                    autoComplete="current-title"
                    name="title"
                    className="p-1 px-2 text-sm rounded-md w-full  border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs "
                  component="div"
                  name="title"
                />
              </div>

              {/* slug input field and error message */}
              <div className=" h-[76px]">
                <div className=" flex flex-col gap-2  ">
                  <label htmlFor="slug" className="text-base text-dark">
                    Slug
                  </label>
                  <Field
                    type="text"
                    id="slug"
                    autoComplete="current-slug"
                    name="slug"
                    className="p-1 px-2 text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs "
                  component="div"
                  name="slug"
                />
              </div>
            </div>
            {/* submit button */}
            <button
              type="submit"
              className="bg-dark w-max row-start-6 text-primary-light rounded-md text-base font-medium py-button-padding-y px-16 mt-5 outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
            >
              Update
            </button>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </motion.div>
  );
};

export default EditQuizCategory;
