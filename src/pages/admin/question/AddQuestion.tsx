import { Formik, Form } from "formik";
import { validationSchemaAddQuestion } from "../../../validation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddQuestionMutation } from "../../../redux/services/myQuestionApiEndpoints";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { TAddQuestionFieldType } from "../types";
import FormikButton from "../../../components/form/FormikButton";
import Breadcrumb from "../../../components/Breadcrumb";
import FormikInputField from "../../../components/form/FormikInputField";
import FormikSelectWeightageField from "../../../components/form/FormikSelectWeightageField";
import FormikTextAreaField from "../../../components/form/FormikTextAreaField";
import FormikSelectQuestionCategoryField from "../../../components/form/FormikSelectQuestionCategoryField";
import { AddQuestionInitialValues } from "../../../configs/constants";
import FormikSelectAnswerField from "../../../components/form/FormikSelectAnswerField";
import FormikOptionsFieldArray from "../../../components/form/FormikOptionsFieldArray";
import { FaHome } from "react-icons/fa";

const AddQuestion = () => {
  const navigate = useNavigate();

  const [addQuestion, { error, isSuccess }] = useAddQuestionMutation();

  const onSubmit = async (values: TAddQuestionFieldType) => {
    try {
      await addQuestion(values);
    } catch (error) {
      console.log(error);
    }
  };

  const [totalOptions, _] = useState(2);

  const [optionsArray, setOptionsArray] = useState(
    Array.from({ length: totalOptions }, (_) => "")
  );

  const handleOptionsInputChange = (index: number, value: string) => {
    const tempArray = [...optionsArray];
    tempArray[index] = value;
    setOptionsArray(tempArray);
  };

  const answerOptions = optionsArray.map((option, index) => (
    <option key={index} value={option}>
      {option?.length > 50 ? option.slice(0, 50) + "..." : option}
    </option>
  ));

  useEffect(() => {
    if (isSuccess) {
      toast.success("Question added!");
      navigate(-1);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error.data.message);
    }
  }, [error]);

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      className="w-full pt-5 pb-10 px-8 "
    >
      <div className="flex flex-col justify-start items-left p-2 mb-2">
        <Breadcrumb icon={FaHome} title="Question" subTitle="New Question" />
        <h1 className="text-primary font-medium text-2xl">New Question</h1>
      </div>

      <Formik
        initialValues={AddQuestionInitialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaAddQuestion}
      >
        {({ handleChange }) => (
          <Form>
            <div className="border-2  p-7 rounded-md grid gap-2 gap-x-6 grid-cols-2 border-primary-light ">
              <FormikInputField name="title" label="Title" type="text" />

              <FormikSelectQuestionCategoryField />

              <FormikInputField name="slug" label="Slug" type="text" />

              <FormikSelectWeightageField />

              <FormikTextAreaField name="description" label="Description" />

              <FormikOptionsFieldArray
                optionsArray={optionsArray}
                setOptionsArray={setOptionsArray}
                handleOptionsInputChange={handleOptionsInputChange}
                handleChange={handleChange}
              />
              <FormikSelectAnswerField answerOptions={answerOptions} />
            </div>

            <FormikButton type="submit" label="Add" />
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default AddQuestion;
