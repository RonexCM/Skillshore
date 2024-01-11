import ReactDom from "react-dom";
import { Field, Formik, Form, ErrorMessage } from "formik";

import { ValidationSchemaAddQuestion } from "../../../validation/validationSchema";
import { AddQuestionFieldType } from "../../list/types";
import closeBtn from "../../../assets/close.svg";
import { ChangeEvent, useState } from "react";
// import OptionField from "../../../components/OptionField";
type Props = {
  handleModal: () => void;
  isOpen: boolean;
};

const AdminAddQuestionModal = ({ handleModal, isOpen }: Props) => {
  if (!isOpen) return null;

  //   ----------formik objects----------
  const initialValues: AddQuestionFieldType = {
    category_id: 0n,
    title: "",
    slug: "",
    description: "",
    options: [],
    answer: "",
    weightage: "",
    status: false,
  };

  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = (values: AddQuestionFieldType) => {
    handleModal();
    values.options = [...optionsArray];
    console.log(values);
    console.log("submitted");
  };

  const modalBackgroundClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleModal();
    }
  };

  const [totalOptions, setTotalOptions] = useState(4);
  const [optionsArray, setOptionsArray] = useState(
    Array.from({ length: totalOptions }, (_) => "")
  );

  //   ----------for each input field value take index, value and store it to options state----------
  const handleInputChange = (index: number, value: string) => {
    const tempArray = [...optionsArray];
    tempArray[index] = value;
    setOptionsArray(tempArray);
  };

  //   ----------create array from totalOptions state and render input firld to input option respectively----------
  const optionFields = Array.from({ length: totalOptions }, (_, index) => (
    <div key={index} className="flex gap-3 items-center">
      <label htmlFor="slug" className="text-sm">
        {`${index + 1}.)`}
      </label>
      <Field
        type="text"
        id={`option-${index + 1}`}
        autoComplete="current-slug"
        name={`option-${index + 1}`}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(index, e.target.value)
        }
        placeholder={`option ${index + 1}`}
        value={`${optionsArray[index]}`}
        className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
      />
    </div>
  ));

  //   ----------mapping options to option tag for dropdown----------
  const answerDropdown = optionsArray.map((one, index) => (
    <option key={index} value={`option-${index + 1}`}>
      {one}
    </option>
  ));

  //   ----------component----------
  return ReactDom.createPortal(
    <div
      onClick={modalBackgroundClicked}
      className=" modal-background z-40 fixed inset-0 bg-dark bg-opacity-[40%] flex justify-center items-center"
    >
      <div className="modal-wrapper basis-[1000px] relative z-50 w-[440px] bg-[#ffffff] rounded-xl px-12 flex flex-col gap-4">
        <img
          onClick={handleModal}
          className="absolute right-5 top-5 cursor-pointer"
          src={closeBtn}
          alt="close-button"
        />
        <div className="modal-title p-6 border-primary-light border-b-2">
          <h1 className="text-center text-xl font-semibold text-dark">
            Add New Question
          </h1>
        </div>
        <div className="py-8">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={ValidationSchemaAddQuestion}
          >
            <Form className="flex flex-col gap-6">
              <div className="flex gap-6">
                {/* title input field and error message */}
                <div className="flex basis-[60%] flex-col gap-1">
                  <div className="flex gap-3">
                    <label htmlFor="title" className="text-lg text-primary">
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
                    className="text-red-500 text-xs"
                    component="div"
                    name="title"
                  />
                </div>
                {/* slug input field and error message */}
                <div className="flex basis-[40%] flex-col gap-1">
                  <div className="flex gap-3">
                    <label htmlFor="slug" className="text-lg text-primary">
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
                    className="text-red-500 text-xs"
                    component="div"
                    name="slug"
                  />
                </div>
              </div>
              {/* description textarea field and error message */}
              <div className="flex flex-col gap-1">
                <div className="flex gap-3">
                  <label htmlFor="description" className="text-lg text-primary">
                    Description:
                  </label>
                  <Field
                    as="textarea"
                    id="description"
                    autoComplete="current-description"
                    name="description"
                    className="p-1 h-32 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs"
                  component="div"
                  name="description"
                />
              </div>
              {/* options input fields and error message */}
              <p className="text-lg text-primary">Options:</p>
              <div className="grid grid-cols-2 gap-6">{optionFields}</div>
              <div className="flex gap-6">
                {/* answer input field and error message */}
                <div className="flex basis-[70%] flex-col gap-1">
                  <div className="flex gap-3">
                    <label htmlFor="answer" className="text-lg text-primary">
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
                    className="text-red-500 text-xs"
                    component="div"
                    name="answer"
                  />
                </div>
                {/* weightage input field and error message */}
                <div className="flex basis-[30%] flex-col gap-1">
                  <div className="flex gap-3">
                    <label htmlFor="weightage" className="text-lg text-primary">
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
                    className="text-red-500 text-xs"
                    component="div"
                    name="weightage"
                  />
                </div>
              </div>

              {/* submit button */}
              <button
                type="submit"
                className="bg-dark text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
              >
                Add
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>,
    document.getElementById("portal-admin")!
  );
};

export default AdminAddQuestionModal;
