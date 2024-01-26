import * as Yup from "yup";

const validationSchemaAddQuiz = Yup.object({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  category_id: Yup.number()
    .required("Category ID is required")
    .positive("Category ID is required"),
  thumbnail: Yup.mixed().required("Please upload a file"),
  description: Yup.string().max(255).required("Description is required"),
  time: Yup.number().required(),
  retry_after: Yup.number().required(),
  question_categories: Yup.array().of(Yup.number()),
  status: Yup.boolean().required("Status is required"),
  pass_percentage: Yup.number().required(),
});
export default validationSchemaAddQuiz;
