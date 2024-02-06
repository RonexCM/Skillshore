import { Formik, Form } from "formik";
import { validationSchemaAddQuiz } from "../../../validation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { TAddQuizFieldType } from "../types";
import { useAddQuizMutation } from "../../../redux/services/myQuizApiEndpoints";
import FormikInputField from "../../../components/form/FormikInputField";
import FormikTextAreaField from "../../../components/form/FormikTextAreaField";
import FormikFileInputField from "../../../components/form/FormikFileInputField";
import FormikSelectQuizCategoryField from "../../../components/form/FormikSelectQuizCategoryField";
import FormikSelectQuestionCategoriesField from "../../../components/form/FormikSelectQuestionCategoriesField";
import FormikButton from "../../../components/form/FormikButton";
import Breadcrumb from "../../../components/Breadcrumb";
import { AddQuizInitialValues } from "../../../configs/constants";

const AddQuiz = () => {
  const [thumbnail, setThumbnail] = useState<File | string>("");

  const [addQuiz, { error, isSuccess }] = useAddQuizMutation();

  const onSubmit = async (values: TAddQuizFieldType) => {
    const valuesToSend = {
      ...values,
      thumbnail: thumbnail,
      category_id: Number(values.category_id),
    };
    console.log(valuesToSend);
    // try {
    //   await addQuiz(valuesToSend);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Quiz added!");
      navigate(-1);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error.data.message);
    }
  }, [error]);

  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      className="w-full pt-5 pb-10 px-8 "
    >
      <div className="flex flex-col justify-start items-left p-2 mb-2">
        <Breadcrumb parentLabel="Quiz" childLabel="New Quiz" />
        <h1 className="text-primary font-medium text-2xl">New Quiz</h1>
      </div>

      <Formik
        initialValues={AddQuizInitialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchemaAddQuiz}
      >
        {({ handleChange, setFieldValue }) => (
          <Form>
            <div className="border-2  p-7 rounded-md grid gap-2 gap-x-6 grid-cols-2 border-primary-light ">
              <FormikInputField name="title" label="Title" type="text" />

              <FormikInputField name="slug" label="Slug" type="text" />

              <FormikSelectQuizCategoryField />

              <FormikSelectQuestionCategoriesField
                setFieldValue={setFieldValue}
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

            <FormikButton type="submit" label="Add" />
          </Form>
        )}
      </Formik>
    </motion.div>
  );
};

export default AddQuiz;
