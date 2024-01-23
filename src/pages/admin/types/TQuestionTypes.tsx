import { TCommonLinksType, TCommonMetaType } from "./TCommonTypes";

export type QuestionType = {
  id: number;
  title: string;
  options: string[];
  weightage: number;
  status: number;
  answer: string;
  slug: string;
  description: string;
  category: { id: number; title: string };
};

export type FetchQuestionsType = {
  data: QuestionType[];
  links: TCommonLinksType;
  meta: TCommonMetaType;
};

export type FetchQuestionsQueryTransformReturnType = {
  data: QuestionType[];
  meta: TCommonMetaType;
};
export type CommonQueryTransformReturnType = {
  data: QuestionType[];
  meta: TCommonMetaType;
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
  weightage: number;
  status: number;
  category_id: number;
};
export type TEditQuestionFieldType = {
  id: number;
  title: string;
  slug: string;
  description: string;
  options: string[];
  answer: string;
  weightage: number;
  status: number;
  category_id: number;
};
