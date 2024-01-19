export type AddQuizCategoryFieldType = {
  id: string;
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
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  timer: number;
  retry_after: number;
  status: string;
};

export type AddQuizFieldType = {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  timer: number;
  retry_after: number;
  status: string;
};

export type FetchQuestionType = {
  title: string;
  options: string[];
  weightage: string;
  status: string;
};

export type FetchQuestionsMetaType = {
  current_page: number;
  from: number;
  last_page: number;
  links: { url: string; label: string; active: boolean }[];
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type FetchQuestionsType = {
  data: FetchQuestionType[];
  links: {
    first: string;
    last: string;
    prev: string;
    next: string;
  };
  meta: FetchQuestionsMetaType;
};

export type FetchQuestionsQueryReturnType = {
  data: FetchQuestionType[];
  meta: FetchQuestionsMetaType;
};

export type QuestionsMetaLinkChildType = {
  active: boolean;
  label: string;
  url: string;
};

export type QuestionsMetaLinksType = QuestionsMetaLinkChildType[];

export type QuestionMetaType = {
  current_page: number;
  from: number;
  last_page: number;
  links: QuestionsMetaLinksType;
  path: string;
  per_page: number;
  to: number;
  total: number;
};
