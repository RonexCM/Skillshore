import * as Yup from "yup";

const validationSchemaAddQuestion = Yup.object({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  description: Yup.string().max(255).required("Description is required"),
  options: Yup.array().of(Yup.string().required("Option is required")),
  answer: Yup.string().required("Answer is required"),
  weightage: Yup.string().required("Weightage is required"),
  category_id: Yup.number()
    .required("Category ID is required")
    .positive("Category ID is required"),
  status: Yup.boolean().required("Status is required"),
});
export default validationSchemaAddQuestion;
