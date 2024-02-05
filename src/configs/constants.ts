const loginInitialValues = { email: "", password: "" };
const registerInitialValues = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};
const createProfileValues = {
  skills: "",
  education: "",
  experience: "",
  career: "",
};

const forgotPasswordEmailInitialValues = {
  email: "",
};

const resetPasswordInitialValues = {
  token: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const categoryInitialValues = {
  title: "",
  slug: "",
};

const AddQuizInitialValues = {
  title: "",
  slug: "",
  category_id: 0,
  description: "",
  time: "",
  retry_after: "",
  thumbnail: "",
  question_categories: [0],
  status: 1,
  pass_percentage: "",
};

const AddQuestionInitialValues = {
  title: "",
  slug: "",
  description: "",
  options: ["", ""],
  answer: "",
  weightage: 0,
  status: 1,
  category_id: 0,
};
export {
  AddQuestionInitialValues,
  AddQuizInitialValues,
  categoryInitialValues,
  loginInitialValues,
  registerInitialValues,
  createProfileValues,
  forgotPasswordEmailInitialValues,
  resetPasswordInitialValues,
};
