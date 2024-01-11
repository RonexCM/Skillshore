import * as Yup from "yup";
export const ValidationSchemaAddQuestion = Yup.object({
  // category_id: Yup.number().required(),
  // title: Yup.string().required(),
  // slug: Yup.string().required(),
  // description: Yup.string().required(),
  // options: Yup.array().required(),
  // answer: Yup.string().required(),
  // weightage: Yup.string().required(),
  // status: Yup.boolean().required(),
  title: Yup.string().required(),
});
