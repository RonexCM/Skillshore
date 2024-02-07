import * as Yup from "yup";

const validationSchemaAddQuestion = Yup.object({
  title: Yup.string().required("Title is required").max(255),
  slug: Yup.string()
    .required("Slug is required")
    .max(255)
    .matches(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug should be words seperated by '-'"
    ),
  description: Yup.string().max(5000).required("Description is required"),
  options: Yup.array().of(Yup.string().required("Option is required")),
  answer: Yup.string().required("Answer is required"),
  weightage: Yup.string()
    .notOneOf(["0"], "Weightage is required")
    .required("Weightage is required"),
  category_id: Yup.number()
    .required("Category is required")
    .positive("Category is required"),
  status: Yup.boolean().required("Status is required"),
});
export default validationSchemaAddQuestion;
