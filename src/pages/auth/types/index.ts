export type TLoginField = {
  email: string;
  password: string;
};

export type TLoginResponseSuccess = {
  message: string;
  token: string;
};

export type TLoginResponseError = {
<<<<<<< HEAD
<<<<<<< HEAD
  message: string;
  errors: { email: string[] };
=======
  status: number;
  data: { message: string; errors: { email: string[] } };
>>>>>>> 19cf8ac (updated folder structure, fixed some design inconsistency)
=======
  message: string;
  errors: { email: string[] };
};
export type TUserDetails = {
  resume: string;
  name: string;
  profile: string;
  description: string;
  mail: string;
  phone: string;
  experience: string;
  language: string;
  available: string;
  role: string;
  salary: string;
  id: string;
  expected: string;
};

export type TEditUserDetails = {
  name: string;
  description: string;
  mail: string;
  phone: string;
>>>>>>> 2230a16 (fixed issues in register and forgot password page)
};

export type TRegistrationFormType = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type TForgotPasswordEmailField = {
  email: string;
};

export type TResetPassword = {
<<<<<<< HEAD
  token: string;
=======
  token: string | undefined;
>>>>>>> 2230a16 (fixed issues in register and forgot password page)
  email: string | null;
  password: string;
  password_confirmation: string;
};

export type TAccessibleRoutes = {
  [key: string]: string[];
};

export type TAllowedRoute = {
  [key: string]: string;
};
