import { Field, Formik, Form, ErrorMessage } from "formik";
import {
  validationSchemaAddQuiz,
  validationSchemaAddQuizCategory,
} from "../../../validation";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { TAddQuizFieldType } from "../types";
import { useGetAllQuestionCategoriesQuery } from "../../../redux/services/myQuestionCategoryApiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useEditQuizMutation } from "../../../redux/services/myQuizApiEndpoints";

const EditQuiz = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { data: allQuizCategoriesList } =
  //   useGetAllQuizCategoriesQuery();
  //   const quizCategoriesList = useSelector(
  //     (state: RootState) => state.allQuizCategories
  //   );
  // const { data: allQuestionCategoriesList } =
  //   useGetAllQuestionCategoriesQuery();
  //   const questionCategoriesList = useSelector(
  //     (state: RootState) => state.allQuestionCategories
  //   );

  const { data: quizData } = useSelector((state: RootState) => state.quiz);
  const { id, category, ...rest } = quizData;
  // const initialValues = { ...rest, category_id: category.id };

  const [editQuiz, { isError, error }] = useEditQuizMutation();
  //   ----------formik objects----------
  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = async (values: TAddQuizFieldType) => {
    // const editedValues = { ...values, id: id };
    // await editQuiz(editedValues);
    if (isError) {
      toast.error("Error editing quiz category!");
      console.log(error);
    } else {
      toast.success("Quiz category edited!", {
        autoClose: 400,
        hideProgressBar: true,
        onClose: () => {
          navigate(-1);
        },
      });
    }
  };
  if (true) return <p>Edit Quiz</p>;
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
        validationSchema={validationSchemaAddQuiz}
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
              {/* category input field and error message */}
              <div className="h-[76px]">
                <div className="flex flex-col gap-2">
                  <label htmlFor="category_id" className="text-base text-dark">
                    Category ID
                  </label>
                  <Field
                    as="select"
                    type="text"
                    id="category_id"
                    autoComplete="current-category_id"
                    name="category_id"
                    className="p-1 px-2 text-sm rounded-md w-full  border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary"
                  ></Field>
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs "
                  component="div"
                  name="category_id"
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

              {/* description textarea field and error message */}
              <div className="flex flex-col gap-1 col-span-2 h-[228px]">
                <div className="flex  flex-col gap-2">
                  <label htmlFor="description" className="text-base text-dark">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    autoComplete="current-description"
                    name="description"
                    className="p-1 px-2 text-sm h-44 rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs"
                  component="div"
                  name="description"
                />
              </div>
              {/* thumbnail textarea field and error message */}
              <div className=" h-[76px]">
                <div className=" flex flex-col gap-2  ">
                  <label htmlFor="thumbnail" className="text-base text-dark">
                    Thumbnail
                  </label>
                  <Field
                    type="file"
                    id="thumbnail"
                    autoComplete="current-thumbnail"
                    name="thumbnail"
                    className="p-1 px-2 text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs "
                  component="div"
                  name="thumbnail"
                />
              </div>
              {/* time textarea field and error message */}
              <div className=" h-[76px]">
                <div className=" flex flex-col gap-2  ">
                  <label htmlFor="time" className="text-base text-dark">
                    Time
                  </label>
                  <Field
                    type="text"
                    id="time"
                    autoComplete="current-time"
                    name="time"
                    className="p-1 px-2 text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs "
                  component="div"
                  name="time"
                />
              </div>
              {/* retry_after textarea field and error message */}
              <div className=" h-[76px]">
                <div className=" flex flex-col gap-2  ">
                  <label htmlFor="retry_after" className="text-base text-dark">
                    Retry After
                  </label>
                  <Field
                    type="text"
                    id="retry_after"
                    autoComplete="current-retry_after"
                    name="retry_after"
                    className="p-1 px-2 text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs "
                  component="div"
                  name="retry_after"
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
    </motion.div>
  );
};

export default EditQuiz;
