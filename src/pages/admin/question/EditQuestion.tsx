import { Field, FieldArray, Formik, Form, ErrorMessage } from "formik";
import { validationSchemaAddQuestion } from "../../../validation";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import {
  useEditQuestionMutation,
  useGetSingleQuestionQuery,
} from "../../../redux/services/myQuestionApiEndpoints";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { TEditQuestionFieldType } from "../types";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

type ParamsType = {
  id: string;
};

const EditQuestion = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params as ParamsType;
  const { data: questionData } = useGetSingleQuestionQuery(id);
  // console.log(questionData);
  const questionCategoriesList = useSelector(
    (state: RootState) => state.allQuestionCategories
  );
  const [addQuestion, { isError, error, isSuccess }] =
    useEditQuestionMutation();
  const [optionsArray, setOptionsArray] = useState([""]);

  useEffect(() => {
    if (questionData) {
      setOptionsArray(questionData.options);
    }
  }, [questionData]);

  const onSubmit = async (values: TEditQuestionFieldType) => {
    const editedValues = {
      ...values,
      id: questionData?.id,
    } as TEditQuestionFieldType;

    try {
      await addQuestion(editedValues);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Updated!");
      navigate(-1);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error) {
      toast.error(error.data.message);
    }
  }, [error]);

  // //   ----------for each input field value take index, value and store it to options state----------

  const handleOptionsInputChange = (index: number, value: string) => {
    const tempArray = [...optionsArray];
    tempArray[index] = value;
    setOptionsArray(tempArray);
  };

  // //   ----------mapping options to option tag for answer dropdown----------

  const answerDropdown = optionsArray.map((option, index) => (
    <option key={index} value={option}>
      {option?.length > 50 ? option.slice(0, 50) + "..." : option}
    </option>
  ));

  if (!questionData) {
    return <div style={{ margin: "0 auto" }}>Loading...</div>;
  }

  const {
    id: editId,
    title,
    slug,
    description,
    options,
    answer,
    weightage,
    status,
    category_id,
  }: TEditQuestionFieldType = questionData;

  const mappedQuestionData: TEditQuestionFieldType = {
    id: editId,
    title,
    slug,
    description,
    options,
    answer,
    weightage,
    status,
    category_id,
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
            <span className="hover:underline">Question</span>
          </div>
          <MdOutlineKeyboardArrowRight className="text-xl" />
          <span className="text-[#82a6ef]">Edit Question</span>
        </div>
        <h1 className="text-primary font-medium text-2xl">Edit Question</h1>
      </div>

      <Formik
        initialValues={mappedQuestionData}
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
                    Category
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
                    {questionCategoriesList["data"].map(
                      (questionCategory, index) => (
                        // LAST WORKED HERE ----------> CHECK WHAT THE VALUE OF OPTION TAG SHOULD BE
                        <option key={index} value={questionCategory.id}>
                          {questionCategory.title}
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
              {/* status input field and error message */}
              <div className="flex  flex-col gap-1">
                <div className="flex flex-col gap-2">
                  <label htmlFor="status" className="text-base text-dark">
                    Status
                  </label>
                  <Field
                    as="select"
                    id="status"
                    autoComplete="current-status"
                    name="status"
                    className="p-1 px-2 text-sm rounded-md border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                  >
                    <option value="" className="text-[#a0a0a0]">
                      select status...
                    </option>
                    <option value={1}>Active</option>
                    <option value={0}>Inactive</option>
                  </Field>
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs"
                  component="div"
                  name="status"
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
                  {({ form, push, pop, remove }) => {
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
                                if (optionsArray.length < 6) {
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
                                if (optionsArray.length > 2) {
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
                                className="h-[112px] relative"
                              >
                                <ImCross
                                  onClick={() => {
                                    console.log(optionsArray);
                                    if (optionsArray.length > 2) {
                                      remove(index);

                                      setOptionsArray((prevOptions) =>
                                        prevOptions.filter(
                                          (_, i) => i !== index
                                        )
                                      );
                                    }
                                  }}
                                  className="absolute cursor-pointer text-[#fb6e6e] text-xs top-[8px] right-[8px]"
                                />
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

export default EditQuestion;
