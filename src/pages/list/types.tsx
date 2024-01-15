export type LoginField = {
  email: string;
  password: string;
};
export type LoginResponse = {
  accessToken: string;
};

export type AddQuizCategoryType = {
  title: string;
  slug: string;
};
export type AddQuestionFieldType = {
  title: string;
  slug: string;
  description: string;
  options: string[];
  answer: string;
  weightage: string;
  status: string;
};

export type QuestionType = {
  title: string;
  slug: string;
  description: string;
  weightage: string;
};
