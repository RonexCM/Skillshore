import {
  Field,
  FieldArray,
  Formik,
  Form,
  ErrorMessage,
  FormikHelpers,
} from "formik";
import { validationSchemaAddQuestion } from "../../../validation";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { useAddQuestionMutation } from "../../../redux/services/myQuestionApiEndpoints";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { AddQuestionFieldType, QuestionType } from "../types";
import { useGetAllQuestionCategoriesQuery } from "../../../redux/services/myQuestionCategoryApiEndpoints";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { saveAllQuestionCategoriesList } from "../../../redux/slice/questionCategorySlice/allQuestionCategoriesListSlice";
import { RootState } from "../../../redux/store";

const AddQuestion = () => {
  const dispatch = useDispatch();
  const { data: allQuestionCategoriesList } =
    useGetAllQuestionCategoriesQuery();
  const [addQuestion, { error, isError }] = useAddQuestionMutation();
  const questionCategoriesList = useSelector(
    (state: RootState) => state.allQuestionCategories
  );
  useEffect(() => {
    if (allQuestionCategoriesList && "data" in allQuestionCategoriesList) {
      // LAST WORKED HERE ------------------>
      dispatch(
        saveAllQuestionCategoriesList(allQuestionCategoriesList["data"])
      );
    }
  }, [allQuestionCategoriesList]);

  const [totalOptions, _] = useState(3);

  //   ----------formik objects----------
  const initialValues = useSelector((state: RootState) => state.addQuestion);
  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = async (
    values: AddQuestionFieldType,
    actions: FormikHelpers<AddQuestionFieldType>
  ) => {
    console.log(values);
    await addQuestion(values);
    if (isError) {
      toast.error("Error adding question!");
      console.log(error);
    } else {
      const { resetForm } = actions;
      toast.success("Question added!");
      resetForm();
      setOptionsArray(Array.from({ length: totalOptions }, (_) => ""));
    }
  };
  const [optionsArray, setOptionsArray] = useState(
    Array.from({ length: totalOptions }, (_) => "")
  );
  //   ----------for each input field value take index, value and store it to options state----------
  const handleOptionsInputChange = (index: number, value: string) => {
    const tempArray = [...optionsArray];
    tempArray[index] = value;
    setOptionsArray(tempArray);
  };
  //   ----------mapping options to option tag for answer dropdown----------
  const answerDropdown = optionsArray.map((option, index) => (
    <option key={index} value={option}>
      {option?.length > 50 ? option.slice(0, 50) + "..." : option}
    </option>
  ));
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
            <span className="hover:underline">Question</span>
          </div>
          <MdOutlineKeyboardArrowRight className="text-xl" />
          <span className="text-[#82a6ef]"> New Question</span>
        </div>
        <h1 className="text-primary font-medium text-2xl">New Question</h1>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaAddQuestion}
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
                    <option value="">select category id...</option>
                    {questionCategoriesList["data"].map(
                      (questionCategory, index) => (
                        <option key={index} value={questionCategory.id}>
                          {questionCategory.id}
                        </option>
                      )
                    )}
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

              {/* weightage input field and error message */}
              <div className="flex  flex-col gap-1 h-[76px]">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="weightage" className="text-base text-dark">
                    Weightage
                  </label>
                  <Field
                    as="select"
                    type="text"
                    id="weightage"
                    autoComplete="current-weightage"
                    name="weightage"
                    className="p-1 px-2 text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                  >
                    <option value="">select weightage...</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </Field>
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs "
                  component="div"
                  name="weightage"
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
              {/* options input fields and error message */}
              <div className="flex flex-col col-span-2 gap-2 ">
                <FieldArray name="options">
                  {({ form, push, pop }) => {
                    const { values } = form;
                    const { options } = values;

                    return (
                      <>
                        <div className="flex gap-2 items-center">
                          <p className="text-base text-dark mr-3">Options</p>
                          <Tooltip
                            content="Add Option"
                            className="text-primary"
                            style="light"
                          >
                            <button
                              className="flex items-center bg-primary-light p-[4px] rounded-md"
                              type="button"
                              onClick={() => {
                                if (optionsArray.length < 4) {
                                  push("");
                                  setOptionsArray([...optionsArray, ""]);
                                }
                              }}
                            >
                              <MdAdd className="text-primary text-xl" />
                              {/* <span className="text-sm text-[#705a5a]">add</span> */}
                            </button>
                          </Tooltip>
                          <Tooltip
                            content="Remove Option"
                            className="text-error"
                            style="light"
                          >
                            <button
                              className="flex items-center bg-primary-light p-[4px] rounded-md"
                              type="button"
                              onClick={() => {
                                if (optionsArray.length > 3) {
                                  pop();
                                  const indexToRemove = optionsArray.length - 1;
                                  setOptionsArray(
                                    optionsArray.slice(0, indexToRemove)
                                  );
                                }
                              }}
                            >
                              <MdOutlineRemove className="text-primary text-xl" />
                              {/* <span className="text-sm text-[#705a5a]">add</span> */}
                            </button>
                          </Tooltip>
                        </div>
                        <div className=" grid grid-cols-2 gap-x-3 gap-y-2">
                          {options.map((_: any, index: number) => {
                            return (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                key={index}
                                className="h-[112px]"
                              >
                                <div className="flex gap-2 items-center">
                                  <label
                                    htmlFor={`option-${index + 1}`}
                                    className="text-sm self-start pt-1"
                                  >{`${index + 1})`}</label>
                                  <Field
                                    as="textarea"
                                    className="p-1 px-2 text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full h-24 resize-none"
                                    id={`option-${index + 1}`}
                                    placeholder={`option ${index + 1}`}
                                    name={`options[${index}]`}
                                    onChange={(
                                      e: ChangeEvent<HTMLInputElement>
                                    ) => {
                                      handleOptionsInputChange(
                                        index,
                                        e.target.value
                                      );
                                      handleChange(e);
                                    }}
                                  />
                                </div>
                                <ErrorMessage
                                  className="text-red-500 text-xs ml-6 my-1"
                                  component="div"
                                  name={`options[${index}]`}
                                />
                              </motion.div>
                            );
                          })}
                        </div>
                      </>
                    );
                  }}
                </FieldArray>
              </div>

              {/* answer input field and error message */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="answer" className="text-base text-dark">
                    Answer
                  </label>
                  <Field
                    as="select"
                    id="answer"
                    autoComplete="current-answer"
                    name="answer"
                    className="p-1 px-2 text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                  >
                    <option value="" className="text-[#a0a0a0]">
                      select answer...
                    </option>
                    {answerDropdown}
                  </Field>
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs"
                  component="div"
                  name="answer"
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

export default AddQuestion;
