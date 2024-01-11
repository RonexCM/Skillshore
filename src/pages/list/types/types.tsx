export type LoginField = {
  email: string;
  password: string;
};

export type LoginResponseSuccess = {
  message: string;
  token: string;
};

export type LoginResponseError = {
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

export type editUserDetails = {
  name: string;
  description: string;
  mail: string;
  phone: string;
};

export type registrationFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};



