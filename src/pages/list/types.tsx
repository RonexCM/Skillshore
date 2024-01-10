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
  id: string;
  expected: string;
  skills: string[];
  education: string;
};

export type editUserDetails = {
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

export type editedData = {
  name: string;
  description: string;
  mail: string;
  phone: string;
  experience: string;
  language: string;
  available: string;
  role: string;
  education: string;
  expected: string;
  skills: string[];
};
export type registrationFormType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};
