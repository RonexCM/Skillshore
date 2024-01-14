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
  category_id: bigint;
  title: string;
  slug: string;
  description: string;
  options: string[];
  answer: string;
  weightage: string;
  status: boolean;
};

export type QuestionType = {
  title: string;
  slug: string;
  description: string;
  weightage: string;
};
