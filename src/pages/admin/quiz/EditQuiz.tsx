import { Formik, Form } from "formik";
import { validationSchemaAddQuiz } from "../../../validation";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { TAddQuizFieldType } from "../types";
import {
  useEditQuizMutation,
  useGetSingleQuizQuery,
} from "../../../redux/services/myQuizApiEndpoints";
import { ParamsType } from "../types/TCommonTypes";
import { useLoadingState } from "../../../layouts/AdminLayout";

import { FaHome } from "react-icons/fa";
import {
  BreadCrumb,
  FormikButton,
  FormikFileInputField,
  FormikInputField,
  FormikSelectCategoryField,
  FormikSelectQuestionCategoriesField,
  FormikTextAreaField,
} from "../../../components";
import { useGetAllQuizCategoriesQuery } from "../../../redux/services/myQuizCategoryApiEndpoints";

const EditQuiz = () => {
  const navigate = useNavigate();

  const params = useParams();
  const { id } = params as ParamsType;

  const loadingState = useLoadingState();
  const { setShowLoader } = loadingState;

  const { data: quiz, isLoading: quizIsLoading } = useGetSingleQuizQuery(id);

  const { data: quizCategoryList } = useGetAllQuizCategoriesQuery();

  const [editQuiz, { isSuccess, error }] = useEditQuizMutation();

  const [thumbnail, setThumbnail] = useState<File | string>("");

  const onSubmit = async (values: TAddQuizFieldType) => {
    const valuesToSend = {
      ...values,
      id: Number(id),
      thumbnail: thumbnail,
      category_id: Number(values.category_id),
    };

    try {
      await editQuiz(valuesToSend);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setShowLoader(quizIsLoading);
  }, [quizIsLoading]);

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

  if (!quiz || !quizCategoryList) return;

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      className="w-full pt-5 pb-10 px-8 "
    >
      <div className="flex flex-col justify-start items-left p-2 mb-2">
        <BreadCrumb icon={FaHome} title="Quiz" subTitle="Edit Quiz" />
        <h1 className="text-primary font-medium text-2xl">Edit Quiz</h1>
      </div>

      <Formik
        initialValues={quiz}
        onSubmit={onSubmit}
        validationSchema={validationSchemaAddQuiz}
      >
        {({ handleChange, setFieldValue, handleBlur }) => (
          <Form>
            <div className="border-2  p-7 rounded-md grid gap-2 gap-x-6 grid-cols-2 border-primary-light ">
              <FormikInputField name="title" label="Title" type="text" />

              <FormikInputField name="slug" label="Slug" type="text" />

              <FormikSelectCategoryField data={quizCategoryList} />

              <FormikSelectQuestionCategoriesField
                setFieldValue={setFieldValue}
                selected={quiz.question_categories}
                handleBlur={handleBlur}
              />

              <FormikTextAreaField name="description" label="Description" />

              <FormikInputField name="time" label="Time" type="number" />

              <FormikInputField
                name="pass_percentage"
                label="Pass Percentage"
                type="number"
              />

              <FormikInputField
                name="retry_after"
                label="Retry After"
                type="number"
              />

              <FormikFileInputField
                name="thumbnail"
                label="Thumbnail"
                setThumbnail={setThumbnail}
                handleChange={handleChange}
              />
            </div>

            <FormikButton type="submit" label="Edit" />
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default EditQuiz;
