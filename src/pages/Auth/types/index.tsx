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
