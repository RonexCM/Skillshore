import * as Yup from "yup";
const validationSchemaAddQuestionCategory = Yup.object({
  // category_id: Yup.number().required(),
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  description: Yup.string().max(255).required("Description is required"),
  "option-1": Yup.array().required("Option is required"),
  "option-2": Yup.array().required("Option is required"),
  "option-3": Yup.array().required("Option is required"),
  "option-4": Yup.array().required("Option is required"),
  answer: Yup.string().required("Answer is required"),
  weightage: Yup.string().required("Weightage is required"),
  // status: Yup.boolean().required(),
});
export default validationSchemaAddQuestionCategory;
