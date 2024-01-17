export type LoginField = {
  email: string;
  password: string;
};
export type LoginResponse = {
  accessToken: string;
};

export type AddQuizCategoryFieldType = {
  title: string;
  slug: string;
};
export type QuizCategoryType = {
  id: string;
  title: string;
  slug: string;
};
export type AddQuestionCategoryFieldType = {
  category_id: bigint;
  title: string;
  slug: string;
  description: string;
  options: string[];
  answer: string;
  weightage: string;
  status: boolean;
};
export type QuestionCategoryType = {
  id: string;
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
  id: string;
  options: string[];
  answer: string;
  title: string;
  slug: string;
  description: string;
  weightage: string;
  status: string;
};

export type QuizType = {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  timer: number;
  retry_after: number;
};

export type AddQuizFieldType = {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  timer: number;
  retry_after: number;
};
