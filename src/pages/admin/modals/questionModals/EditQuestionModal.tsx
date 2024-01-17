import { useEffect } from "react";
import ReactDom from "react-dom";
import { IoClose } from "react-icons/io5";
import {
  Field,
  FieldArray,
  Formik,
  Form,
  ErrorMessage,
  FormikHelpers,
} from "formik";
import { ValidationSchemaAddQuestion } from "../../../../validation/validationSchemaAddQuestion";
import { QuestionType } from "../../../list/types/types";
import { ChangeEvent, useState } from "react";
import { useEditQuestionMutation } from "../../../../redux/services/myQuestionApiEndpoints";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

type Props = {
  setShowModal: (a: boolean) => void;
  id: string;
};

const EditQuestionModal = ({ setShowModal }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setOptionsArray(initialValues.options);
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  //   ----------formik objects----------
  const initialValues = useSelector(
    (state: RootState) => state.editQuestionReducer
  );
  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = async (
    values: QuestionType,
    actions: FormikHelpers<QuestionType>
  ) => {
    const { resetForm } = actions;
    await editQuestion(values);
    setShowModal(false);
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
  const answerDropdown = optionsArray.map((option, index) => (
    <option className="" key={index} value={option}>
      {option?.length > 30 ? option.slice(0, 30) + "..." : option}
    </option>
  ));
  const [editQuestion] = useEditQuestionMutation();
  const closeModal = (e: React.MouseEvent<HTMLDivElement | SVGElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <>
      <div
        onClick={closeModal}
        className="modal-background z-40 fixed inset-0 bg-dark bg-opacity-[40%] p-6 flex justify-center items-center"
      >
        <div className="modal-wrapper relative z-50  bg-[#ffffff] rounded-xl p-6 flex flex-col gap-4 w-[900px] ">
          <div
            className="absolute cursor-pointer m-2 p-[3px] right-1 top-1 text-2xl "
            onClick={() => setShowModal(false)}
          >
            <IoClose />
          </div>
          <div className="w-full">
            <div className="flex flex-col justify-start items-center pb-[20px]">
              <h1 className="text-primary font-medium text-[24px] leading-[18px] ">
                Edit Question
              </h1>
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
                    <div className="flex flex-col col-span-2 gap-1  h-[76px]">
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
                      <div className="label-and-field flex gap-1 flex-col ">
                        <label htmlFor="slug" className="text-md text-dark">
                          Slug
                        </label>
                        <Field
                          type="text"
                          id="slug"
                          autoComplete="current-slug"
                          name="slug"
                          className="p-1 px-2  rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                        />
                      </div>
                      <ErrorMessage
                        className="text-red-500 text-xs "
                        component="div"
                        name="slug"
                      />
                    </div>
                    {/* weightage input field and error message */}
                    <div className="flex  flex-col gap-1 h-[76px] ">
                      <div className="flex flex-col gap-1 w-full">
                        <label
                          htmlFor="weightage"
                          className="text-md text-dark"
                        >
                          Weightage
                        </label>
                        <Field
                          as="select"
                          type="text"
                          id="weightage"
                          autoComplete="current-weightage"
                          name="weightage"
                          className="p-1 px-2  rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                        >
                          <option value="">select weightage...</option>
                          <option value="5">5</option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                        </Field>
                      </div>
                      <ErrorMessage
                        className="text-red-500 text-xs "
                        component="div"
                        name="weightage"
                      />
                    </div>
                    {/* description textarea field and error message */}
                    <div className="flex flex-col gap-1 col-span-2 h-[138px]">
                      <div className="flex  flex-col gap-1">
                        <label
                          htmlFor="description"
                          className="text-md text-dark"
                        >
                          Description
                        </label>
                        <Field
                          as="textarea"
                          id="description"
                          autoComplete="current-description"
                          name="description"
                          className="p-1 px-2  h-24 rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
                        />
                      </div>
                      <ErrorMessage
                        className="text-red-500 text-xs"
                        component="div"
                        name="description"
                      />
                    </div>
                    {/* options input fields and error message */}
                    <div className="flex flex-col col-span-2 gap-1 ">
                      <p className="text-md text-dark">Options</p>

                      <FieldArray name="options">
                        {({ form }) => {
                          const { values } = form;
                          const { options } = values;
                          return (
                            <div className=" grid grid-cols-2 gap-3">
                              {options.map((_: any, index: number) => (
                                <div key={index} className="h-[75px]">
                                  <div className="flex gap-1 items-center">
                                    <label
                                      htmlFor={`option-${index + 1}`}
                                      className="text-sm self-start pt-1"
                                    >{`${index + 1})`}</label>
                                    <Field
                                      as="textarea"
                                      className="p-1 px-2  rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full resize-none"
                                      id={`option-${index + 1}`}
                                      placeholder={`option ${index + 1}`}
                                      name={`options[${index}]`}
                                      onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                      ) => {
                                        handleInputChange(
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
                                </div>
                              ))}
                            </div>
                          );
                        }}
                      </FieldArray>
                    </div>

                    {/* answer input field and error message */}
                    <div className="flex flex-col gap-1 h-[70px]">
                      <div className="flex flex-col gap-1">
                        <label htmlFor="answer" className="text-md text-dark">
                          Answer
                        </label>
                        <Field
                          as="select"
                          id="answer"
                          autoComplete="current-answer"
                          name="answer"
                          className="p-1 px-2  rounded-lg border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary w-full"
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
                      className="bg-dark w-max h-12 mt-auto  text-primary-light rounded-lg text-md font-medium py-button-padding-y px-8 ml-auto outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
                    >
                      confirm edit
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal-admin")!
  );
};

export default EditQuestionModal;
