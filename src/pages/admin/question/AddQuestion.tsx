import {
  Field,
  FieldArray,
  Formik,
  Form,
  ErrorMessage,
  FormikHelpers,
  FormikValues,
} from "formik";
import { ValidationSchemaAddQuestion } from "../../../validation/validationSchemaAddQuestion";
import { AddQuestionFieldType } from "../../list/types";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useAddQuestionMutation } from "../../../redux/services/myApiEndpoints";

// import OptionField from "../../../components/OptionField";

const AddQuestion = () => {
  const [addQuestion] = useAddQuestionMutation();

  //   ----------formik objects----------
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
    const { resetForm } = actions;
    await addQuestion(values);
    console.log(values);
    console.log("submitted");
    resetForm();
    setOptionsArray(["", "", "", ""]);
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
  const answerDropdown = optionsArray.map((one, index) => (
    <option className="" key={index} value={one}>
      {one}
    </option>
  ));
  const navigate = useNavigate();

  return (
    <div className="w-full p-5 px-8 ">
      <div className="flex flex-col justify-start items-center p-5 pb-0 px-0 ">
        <h1 className="text-primary font-medium text-2xl  ">
          Add New Question
        </h1>
        <div
          className="text-primary bg-primary-light p-1 pl-2 pr-3 rounded-lg text-opacity-80 text-sm mb-5 cursor-pointer flex items-center gap-1 self-start "
          onClick={() => navigate(-1)}
        >
          <IoIosArrowBack className="text-lg" />
          <span>Questions</span>
        </div>
      </div>

      <div className="border-2 p-5 border-primary-light rounded-xl w-full ">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ValidationSchemaAddQuestion}
        >
          {({ handleChange }) => (
            <Form className="flex flex-col gap-6">
              <div className="flex gap-6">
                {/* title input field and error message */}
                <div className="flex basis-[60%] flex-col gap-1">
                  <div className="flex gap-3">
                    <label htmlFor="title" className="text-md text-dark">
                      Title:
                    </label>
                    <Field
                      type="text"
                      id="title"
                      autoComplete="current-title"
                      name="title"
                      className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                    />
                  </div>
                  <ErrorMessage
                    className="text-red-500 text-xs ml-[52px]"
                    component="div"
                    name="title"
                  />
                </div>
                {/* slug input field and error message */}
                <div className="flex basis-[40%] flex-col gap-1">
                  <div className="flex gap-3">
                    <label htmlFor="slug" className="text-md text-dark">
                      Slug:
                    </label>
                    <Field
                      type="text"
                      id="slug"
                      autoComplete="current-slug"
                      name="slug"
                      className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                    />
                  </div>
                  <ErrorMessage
                    className="text-red-500 text-xs ml-[54px]"
                    component="div"
                    name="slug"
                  />
                </div>
              </div>
              {/* description textarea field and error message */}
              <div className="flex flex-col gap-1">
                <div className="flex  flex-col gap-3">
                  <label htmlFor="description" className="text-md text-dark">
                    Description:
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    autoComplete="current-description"
                    name="description"
                    className="p-1 h-44 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs"
                  component="div"
                  name="description"
                />
              </div>
              {/* options input fields and error message */}
              <p className="text-md text-dark">Options:</p>
              <div>
                <FieldArray name="options">
                  {({ form }) => {
                    const { values } = form;
                    const { options } = values;
                    return (
                      <div className=" grid grid-cols-2 gap-6">
                        {options.map((_: any, index: number) => (
                          <div key={index}>
                            <div className="flex gap-3 items-center">
                              <label
                                htmlFor={`option-${index + 1}`}
                                className="text-sm self-start pt-1"
                              >{`${index + 1})`}</label>
                              <Field
                                as="textarea"
                                className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full h-28 resize-none"
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
              <div className="flex gap-6">
                {/* answer input field and error message */}
                <div className="flex basis-[70%] flex-col gap-1">
                  <div className="flex gap-3">
                    <label htmlFor="answer" className="text-md text-dark">
                      Answer:
                    </label>
                    <Field
                      as="select"
                      id="answer"
                      autoComplete="current-answer"
                      name="answer"
                      className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                    >
                      <option value="" className="text-[#a0a0a0]">
                        select answer...
                      </option>
                      {answerDropdown}
                    </Field>
                  </div>
                  <ErrorMessage
                    className="text-red-500 text-xs ml-[82px]"
                    component="div"
                    name="answer"
                  />
                </div>
                {/* weightage input field and error message */}
                <div className="flex basis-[30%] flex-col gap-1">
                  <div className="flex gap-3">
                    <label htmlFor="weightage" className="text-md text-dark">
                      Weightage:
                    </label>
                    <Field
                      type="text"
                      id="weightage"
                      autoComplete="current-weightage"
                      name="weightage"
                      className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                    />
                  </div>
                  <ErrorMessage
                    className="text-red-500 text-xs ml-[116px]"
                    component="div"
                    name="weightage"
                  />
                </div>
              </div>

              {/* submit button */}
              <button
                type="submit"
                className="bg-dark w-max self-center text-primary-light rounded-lg text-md font-medium py-button-padding-y px-28 outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
              >
                Add
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddQuestion;
