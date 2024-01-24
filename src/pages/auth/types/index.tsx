export type TLoginField = {
  email: string;
  password: string;
};

export type TLoginResponseSuccess = {
  message: string;
  token: string;
};

export type TLoginResponseError = {
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
};

export type TRegistrationFormType = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type TLoggedInUserDetails = {
  email: string;
  password: string;
  isLoggedIn: boolean;
};
