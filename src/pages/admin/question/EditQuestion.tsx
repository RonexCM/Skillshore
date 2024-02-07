import { Formik, Form } from "formik";
import { validationSchemaAddQuestion } from "../../../validation";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useEditQuestionMutation,
  useGetSingleQuestionQuery,
} from "../../../redux/services/myQuestionApiEndpoints";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { TEditQuestionFieldType } from "../types";
import { useLoadingState } from "../../../layouts/AdminLayout";
import { ParamsType } from "../types/TCommonTypes";
import { FaHome } from "react-icons/fa";
import {
  BreadCrumb,
  FormikButton,
  FormikInputField,
  FormikOptionsFieldArray,
  FormikSelectAnswerField,
  FormikSelectQuestionCategoryField,
  FormikSelectStatus,
  FormikSelectWeightageField,
  FormikTextAreaField,
} from "../../../components";

const EditQuestion = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params as ParamsType;
  const { data: questionData, isLoading } = useGetSingleQuestionQuery(id);

  const loadingState = useLoadingState();
  const { setShowLoader } = loadingState;

  const [editQuestion, { error, isSuccess }] = useEditQuestionMutation();
  const [optionsArray, setOptionsArray] = useState([""]);

  useEffect(() => {
    if (questionData) {
      setOptionsArray(questionData.options);
    }
    setShowLoader(isLoading);
  }, [questionData, isLoading]);

  const onSubmit = async (values: TEditQuestionFieldType) => {
    const editedValues = {
      ...values,
      id: questionData?.id,
    } as TEditQuestionFieldType;

    try {
      await editQuestion(editedValues);
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
    if (error && "data" in error) {
      toast.error(error.data.message);
    }
  }, [error]);

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

  if (!questionData) return;

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
        <BreadCrumb icon={FaHome} title="Question" subTitle="Edit Question" />
        <h1 className="text-primary font-medium text-2xl">Edit Question</h1>
      </div>

      <Formik
        initialValues={mappedQuestionData}
        onSubmit={onSubmit}
        validationSchema={validationSchemaAddQuestion}
      >
        {({ handleChange }) => (
          <Form>
            <div className="border-2  p-7 rounded-md grid gap-2 gap-x-6 grid-cols-2 border-primary-light ">
              <FormikInputField name="title" label="Title" type="text" />

              <FormikSelectQuestionCategoryField />

              <FormikInputField name="slug" label="Slug" type="text" />

              <FormikSelectStatus />

              <FormikTextAreaField name="description" label="Description" />

              <FormikOptionsFieldArray
                optionsArray={optionsArray}
                setOptionsArray={setOptionsArray}
                handleOptionsInputChange={handleOptionsInputChange}
                handleChange={handleChange}
              />

              <FormikSelectAnswerField answerOptions={answerOptions} />

              <FormikSelectWeightageField />
            </div>

            <FormikButton type="submit" label="Edit" />
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default EditQuestion;
