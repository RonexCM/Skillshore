import * as Yup from "yup";
export const ValidationSchemaAddQuestion = Yup.object({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
});
