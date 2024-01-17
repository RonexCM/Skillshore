import {
  Field,
  FieldArray,
  Formik,
  Form,
  ErrorMessage,
  FormikHelpers,
} from "formik";
import { ValidationSchemaAddQuestion } from "../../../validation/validationSchemaAddQuestion";
import { AddQuestionFieldType } from "../../list/types/types";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { useAddQuestionMutation } from "../../../redux/services/myQuestionApiEndpoints";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddQuestion = () => {
  const [addQuestion] = useAddQuestionMutation();
  //   ----------formik objects----------
  // we dont need to save this from . Do we need to create slice for this? !!!!!!
  const initialValues: AddQuestionFieldType = {
    title: "",
    slug: "",
    description: "",
    options: ["", "", "", ""],
    answer: "",
    weightage: "",
    status: "Active",
  };
  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = async (
    values: AddQuestionFieldType,
    actions: FormikHelpers<AddQuestionFieldType>
  ) => {
    try {
      const { resetForm } = actions;
      await addQuestion(values);
      toast.success("Question Added!");
      resetForm();
      setOptionsArray(["", "", "", ""]);
    } catch (error) {
      toast.error("Error adding question!");
    }
  };
  const [totalOptions, _] = useState(4);
  const [optionsArray, setOptionsArray] = useState(
    Array.from({ length: totalOptions }, (_) => "")
  );
  //   ----------for each input field value take index, value and store it to options state----------
  const handleInputChange = (index: number, value: string) => {
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
    <div className="w-full p-5 px-8 ">
      <div className="flex flex-col justify-start items-left p-2 mb-2">
        <div className="text-primary p-1 pl-0  pr-3 rounded-lg text-opacity-80 text-sm mb-5 flex items-center gap-1 self-start ">
          <div
            className="flex gap-2  cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <AiFillHome className="text-lg" />
            <span className="hover:underline">Questions</span>
          </div>
          <MdOutlineKeyboardArrowRight className="text-xl" />
          <span className="text-[#82a6ef]"> New Question</span>
        </div>
        <h1 className="text-primary font-medium text-2xl">Add New Question</h1>
      </div>

      <div className="border-2 p-7  border-primary-light rounded-xl w-full  ">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ValidationSchemaAddQuestion}
        >
          {({ handleChange }) => (
            // form field in 2 grid columns
            <Form className="grid gap-2 grid-cols-2">
              {/* title input field and error message */}
              <div className="flex flex-col col-span-2 gap-1 h-[76px]">
                <div className="flex flex-col gap-1">
                  <label htmlFor="title" className="text-md text-dark">
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
                  className="text-red-500 text-xs "
                  component="div"
                  name="title"
                />
              </div>

              {/* slug input field and error message */}
              <div className="parent-field h-[76px]">
                <div className="label-and-field flex flex-col gap-1  ">
                  <label htmlFor="slug" className="text-md text-dark">
                    Slug
                  </label>
                  <Field
                    type="text"
                    id="slug"
                    autoComplete="current-slug"
                    name="slug"
                    className="p-1 px-2 rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
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
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="weightage" className="text-md text-dark">
                    Weightage
                  </label>
                  <Field
                    as="select"
                    type="text"
                    id="weightage"
                    autoComplete="current-weightage"
                    name="weightage"
                    className="p-1 px-2 rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
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
                <div className="flex  flex-col gap-3">
                  <label htmlFor="description" className="text-md text-dark">
                    Description
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    autoComplete="current-description"
                    name="description"
                    className="p-1 px-2 h-44 rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
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
                <p className="text-md text-dark">Options</p>

                <FieldArray name="options">
                  {({ form }) => {
                    const { values } = form;
                    const { options } = values;
                    return (
                      <div className=" grid grid-cols-2 gap-x-3 gap-y-2">
                        {options.map((_: any, index: number) => (
                          <div key={index} className="h-[112px]">
                            <div className="flex gap-3 items-center">
                              <label
                                htmlFor={`option-${index + 1}`}
                                className="text-sm self-start pt-1"
                              >{`${index + 1})`}</label>
                              <Field
                                as="textarea"
                                className="p-1 px-2 rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full h-24 resize-none"
                                id={`option-${index + 1}`}
                                placeholder={`option ${index + 1}`}
                                name={`options[${index}]`}
                                onChange={(
                                  e: ChangeEvent<HTMLInputElement>
                                ) => {
                                  handleInputChange(index, e.target.value);
                                  handleChange(e);
                                }}
                              />
                            </div>
                            <ErrorMessage
                              className="text-red-500 text-xs ml-6 my-1"
                              component="div"
                              name={`options[${index}]`}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </FieldArray>
              </div>

              {/* answer input field and error message */}
              <div className="flex flex-col gap-1 h-[90px]">
                <div className="flex flex-col gap-3">
                  <label htmlFor="answer" className="text-md text-dark">
                    Answer
                  </label>
                  <Field
                    as="select"
                    id="answer"
                    autoComplete="current-answer"
                    name="answer"
                    className="p-1 px-2 rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
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

              {/* submit button */}
              <button
                type="submit"
                className="bg-dark w-max row-start-6 text-primary-light rounded-lg text-md font-medium py-button-padding-y px-28 outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
              >
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddQuestion;
