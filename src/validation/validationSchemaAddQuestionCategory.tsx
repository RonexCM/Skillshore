import * as Yup from "yup";
const validationSchemaAddQuestionCategory = Yup.object({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
});
export default validationSchemaAddQuestionCategory;
