import { TCommonLinksType, TCommonMetaType } from "./TCommonTypes";

export type TQuizType = {
  id: number;
  title: string;
  slug: string;
  thumbnail: File | null;
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
  thumbnail: File | null;
  description: string;
  time: number;
  retry_after: number;
  question_categories: number[] | undefined[];
  status: number;
  pass_percentage: number;
};

export type TFetchQuizzesType = {
  data: TQuizType[];
  links: TCommonLinksType;
  meta: TCommonMetaType;
};

export type TFetchQuizzesQueryTransformReturnType = {
  data: TQuizType[];
  meta: TCommonMetaType;
};

export type TEditQuizFieldType = {
  id: number;
  title: string;
  slug: string;
  category_id: number;
  thumbnail: File | null;
  description: string;
  time: number;
  retry_after: number;
  question_categories: number[];
  status: number;
  pass_percentage: number;
};

export type TAddQuizFieldInitialStateType = {
  data: TAddQuizFieldType;
};

export type TEditQuizFieldInitialStateType = {
  data: TQuizType;
};

export type option = { value: number; label: string };
