import * as Yup from "yup";

const validationSchemaEditQuiz = Yup.object({
  title: Yup.string().required("Title is required").max(255),
  slug: Yup.string()
    .required("Slug is required")
    .max(255)
    .matches(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug should be words seperated by '-'"
    ),
  category_id: Yup.number()
    .required("Category is required")
    .positive("Category is required"),
  thumbnail: Yup.mixed(),
  description: Yup.string().max(5000).required("Description is required"),
  time: Yup.number()
    .required("Time is required")
    .notOneOf([0], "Input should not be zero"),
  retry_after: Yup.number()
    .notOneOf([0], "Input should not be zero")
    .required("Retry after is required"),
  question_categories: Yup.array()
    .of(Yup.number().required("Question Categories are required"))
    .min(1, "Question Categories are required")
    .required("Question Categories are required"),
  status: Yup.boolean().required("Status is required"),
  pass_percentage: Yup.number()
    .notOneOf([0], "Input should not be zero")
    .required("Pass percentage is required")
    .max(99, "Must be less that 100"),
});
export default validationSchemaEditQuiz;
