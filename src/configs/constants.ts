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
export {
  loginInitialValues,
  registerInitialValues,
  createProfileValues,
  forgotPasswordEmailInitialValues,
  resetPasswordInitialValues,
};