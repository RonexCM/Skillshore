export type TLoginField = {
  email: string;
  password: string;
};

export type TLoginResponseSuccess = {
  message: string;
  token: string;
};

export type TLoginResponseError = {
  status: number;
  data: { message: string; errors: { email: string[] } };
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
