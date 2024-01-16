import { Field, Formik, Form, ErrorMessage } from "formik";

import { ValidationSchemaAddQuizCategory } from "../../../validation/validationSchemaAddQuizCategory";
import { AddQuizCategoryFieldType } from "../../list/types";

import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaHome,
  FaTachometerAlt,
  FaWarehouse,
} from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
// import OptionField from "../../../components/OptionField";

const AddQuizCategory = () => {
  //   ----------formik objects----------
  const initialValues: AddQuizCategoryFieldType = {
    title: "",
    slug: "",
  };

  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = (values: AddQuizCategoryFieldType) => {
    console.log(values);
    console.log("submitted");
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

  //   ----------create array from totalOptions state and render input field to input option respectively----------
  const optionFields = Array.from({ length: totalOptions }, (_, index) => (
    <div key={index}>
      <div className="flex gap-3 items-center">
        <label htmlFor="slug" className="text-sm">
          {`${index + 1})`}
        </label>
        <Field
          as="textarea"
          id={`option-${index + 1}`}
          autoComplete="current-slug"
          name={`option-${index + 1}`}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(index, e.target.value)
          }
          required
          placeholder={`option ${index + 1}`}
          value={`${optionsArray[index]}`}
          className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full h-20"
        />
      </div>
      <ErrorMessage
        className="text-red-500 text-xs ml-6 my-1"
        component="div"
        name={`option-${index + 1}`}
      />
    </div>
  ));

  //   ----------mapping options to option tag for answer dropdown----------
  const answerDropdown = optionsArray.map((one, index) => (
    <option className="" key={index} value={`option-${index + 1}`}>
      {one}
    </option>
  ));
  const navigate = useNavigate();
  return (
    <div className="w-full p-5 px-8 ">
      <div className="flex flex-col justify-start items-start  pb-0 ">
        <div
          className="text-primary text-opacity-80 text-sm mb-5 cursor-pointer flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <FaHome />
          <span>Admin </span>
          <SlArrowRight />
          <span> Quiz Category </span>
        </div>
      </div>
      <h1 className="text-primary font-medium p-3 text-2xl">Add New Quiz</h1>

      <div className="border-2 p-5 border-primary-light rounded-xl w-full ">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={ValidationSchemaAddQuizCategory}
        >
          <Form className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              {/* title input field and error message */}
              <div className="flex basis-[60%] flex-col gap-1">
                <div className="flex gap-3">
                  <label htmlFor="title" className="text-md text-dark">
                    Title
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
                    Slug
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

            {/* submit button */}
            <button
              type="submit"
              className="bg-dark text-primary-light rounded-lg text-md font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
            >
              Add
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddQuizCategory;
