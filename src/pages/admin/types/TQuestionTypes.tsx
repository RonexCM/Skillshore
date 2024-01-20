import { QuestionCategoryType } from ".";

export type QuestionType = {
  id: number;
  title: string;
  options: string[];
  weightage: string;
  status: string;
  answer: string;
  slug: string;
  description: string;
};

export type CommonMetaType = {
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
  data: QuestionType[];
  links: {
    first: string;
    last: string;
    prev: string;
    next: string;
  };
  meta: CommonMetaType;
};

// export type CommonFetchType = {
//   data: QuestionType[];
//   links: {
//     first: string;
//     last: string;
//     prev: string;
//     next: string;
//   };
//   meta: CommonMetaType;
// };

export type FetchQuestionsQueryTransformReturnType = {
  data: QuestionType[];
  meta: CommonMetaType;
};
export type CommonQueryTransformReturnType = {
  data: QuestionType[];
  meta: CommonMetaType;
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
export type AddQuestionFieldType = {
  title: string;
  slug: string;
  description: string;
  options: string[];
  answer: string;
  weightage: string;
  status: string;
  "category-id": string;
};
