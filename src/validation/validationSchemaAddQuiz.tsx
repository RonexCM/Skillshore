import * as Yup from "yup";

const validationSchemaAddQuiz = Yup.object({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  category_id: Yup.number()
    .required("Category is required")
    .positive("Category is required"),
  thumbnail: Yup.mixed().required("Please upload a file"),
  // .test("fileSize", "File size is too large", (value) => {
  //   const file = value as File;
  //   console.log("Uploaded file:", file.size);
  //   return file.size <= 10000000;
  // }),
  description: Yup.string().max(255).required("Description is required"),
  time: Yup.number().required("Time is required"),
  retry_after: Yup.number()
    .notOneOf([0], "Input should not be zero")
    .required("Retry after is required"),
  question_categories: Yup.array()
    .of(Yup.number().required("Question Categories are required"))
    .required("Question Categories are required"),
  status: Yup.boolean().required("Status is required"),
  pass_percentage: Yup.number()
    .required("Pass percentage is required")
    .max(99, "Must be less that 100"),
});
export default validationSchemaAddQuiz;
