import * as Yup from "yup";
const validationSchemaAddQuestionCategory = Yup.object({
  title: Yup.string().required("Title is required").max(255),
  // slug: Yup.string()
  //   .max(255)
  //   .matches(
  //     /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
  //     "Slug should be words seperated by '-'"
  //   ),
});
export default validationSchemaAddQuestionCategory;
