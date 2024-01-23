import { TCommonLinksType, TCommonMetaType } from "./TCommonTypes";

export type TQuizType = {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  description: string;
  time: number;
  retry_after: number;
  status: number;
  category: {
    id: number;
    title: string;
  };
};

export type TAddQuizFieldType = {
  title: string;
  slug: string;
  category_id: number;
  thumbnail: File;
  description: string;
  time: number;
  retry_after: number;
  question_categories: number[];
  status: number;
  pass_percentage: number;
};

export type FetchQuestionsType = {
  data: TQuizType[];
  links: TCommonLinksType;
  meta: TCommonMetaType;
};

export type FetchQuestionsQueryTransformReturnType = {
  data: TQuizType[];
  meta: TCommonMetaType;
};

export type TEditQuizFieldType = {
  id: number;
  title: string;
  slug: string;
  category_id: number;
  thumbnail: File;
  description: string;
  time: number;
  retry_after: number;
  question_categories: number[];
  status: number;
  pass_percentage: number;
};
