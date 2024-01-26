import { TCommonLinksType, TCommonMetaType } from "./TCommonTypes";

export type TQuizCategoryType = {
  id: number;
  title: string;
  slug: string;
};

export type TAddQuizCategoryFieldType = {
  title: string;
  slug: string;
};

export type TFetchQuizCategoriesType = {
  data: TQuizCategoryType[];
  links: TCommonLinksType;
  meta: TCommonMetaType;
};

export type TFetchQuizCategoriesQueryTransformReturnType = {
  data: TQuizCategoryType[];
  meta: TCommonMetaType;
};

export type TEditQuizCategoryFieldType = {
  id: number;
  title: string;
  slug: string;
};
