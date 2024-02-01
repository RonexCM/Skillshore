import { TCommonLinksType, TCommonMetaType } from "./TCommonTypes";

export type TAllQuizType = {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  time: number;
  retry_after: number;
  status: string;
  result: string;
  categories: string;
  category: string;
};

export type TAddQuizFieldType = {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  timer: number;
  retry_after: number;
  result: string;
};

export type TFetchQuizQueryTransformResponseType = {
  data: TAllQuizType[];
  meta: TCommonMetaType;
};

export type TFetchQuizQueryResponseType = {
  data: TAllQuizType[];
  meta: TCommonMetaType;
  links: TCommonLinksType;
};
