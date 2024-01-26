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
  message: string;
  errors: { email: string[] };
=======
  status: number;
  data: { message: string; errors: { email: string[] } };
>>>>>>> 19cf8ac (updated folder structure, fixed some design inconsistency)
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
  token: string;
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
