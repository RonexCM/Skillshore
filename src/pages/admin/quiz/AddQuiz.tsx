import {
  Field,
  FieldArray,
  Formik,
  Form,
  ErrorMessage,
  FormikHelpers,
} from "formik";
import { validationSchemaAddQuiz } from "../../../validation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { TAddQuizFieldType, TQuestionCategoryFetchAllType } from "../types";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useGetAllQuizCategoriesQuery } from "../../../redux/services/myQuizCategoryApiEndpoints";
import { useAddQuizMutation } from "../../../redux/services/myQuizApiEndpoints";
import { saveAllQuizCategoriesList } from "../../../redux/slice/quizCategorySlice/allQuizCategoriesListSlice";
import { useGetAllQuestionCategoriesQuery } from "../../../redux/services/myQuestionCategoryApiEndpoints";
import { saveAllQuestionCategoriesList } from "../../../redux/slice/questionCategorySlice/allQuestionCategoriesListSlice";

const AddQuiz = () => {
  const dispatch = useDispatch();
  const { data: allQuizCategoriesList } = useGetAllQuizCategoriesQuery();
  const [addQuiz, { error, isError }] = useAddQuizMutation();
  const { data: allQuestionCategoriesData } =
    useGetAllQuestionCategoriesQuery();

  const [questionCategories, setQuestionCategories] = useState<
    TQuestionCategoryFetchAllType[]
  >([]);
  useEffect(() => {
    if (allQuizCategoriesList && "data" in allQuizCategoriesList) {
      dispatch(saveAllQuizCategoriesList(allQuizCategoriesList["data"]));
    }
    if (allQuestionCategoriesData) {
      dispatch(saveAllQuestionCategoriesList(allQuestionCategoriesData.data));
      setQuestionCategories(allQuestionCategoriesData.data);
    }
  }, [allQuizCategoriesList, allQuestionCategoriesData]);
  const allQuizCategories = useSelector(
    (state: RootState) => state.allQuizCategories.data
  );

  //   ----------formik objects----------
  const initialValues = useSelector((state: RootState) => state.addQuiz);

  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = async (
    values: TAddQuizFieldType,
    actions: FormikHelpers<TAddQuizFieldType>
  ) => {
    console.log(values);
    await addQuiz(values);
    if (isError) {
      toast.error("Error adding question!");
      console.log(error);
    } else {
      const { resetForm } = actions;
      toast.success("Question added!");
      resetForm();
    }
  };

  const navigate = useNavigate();

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
            <span className="hover:underline">Quiz</span>
          </div>
          <MdOutlineKeyboardArrowRight className="text-xl" />
          <span className="text-[#82a6ef]"> New Quiz</span>
        </div>
        <h1 className="text-primary font-medium text-2xl">New Quiz</h1>
      </div>

      <Formik
        initialValues={initialValues.data}
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
                  >
                    <option value="">select category...</option>
                    {allQuizCategories.map((quizCategory, index) => (
                      <option key={index} value={quizCategory.id}>
                        {quizCategory.id}
                      </option>
                    ))}
                  </Field>
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
              {/* thumbnail textarea field and error message */}
              <div className="h-[76px]">
                <div className=" flex flex-col gap-2  ">
                  <label htmlFor="thumbnail" className="text-base text-dark">
                    Thumbnail
                  </label>
                  <Field
                    type="file"
                    id="thumbnail"
                    autoComplete="current-thumbnail"
                    name="thumbnail"
                    className=" text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs "
                  component="div"
                  name="thumbnail"
                />
              </div>
            </div>

            {/* submit button */}
            <button
              type="submit"
              className="bg-dark w-max row-start-6 text-primary-light rounded-md text-base font-medium py-button-padding-y px-28 mt-5 outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>

      <ToastContainer />
    </motion.div>
  );
};

export default AddQuiz;
