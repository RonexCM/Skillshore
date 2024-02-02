import * as Yup from "yup";
const validationSchemaAddQuizCategory = Yup.object({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
});
export default validationSchemaAddQuizCategory;
