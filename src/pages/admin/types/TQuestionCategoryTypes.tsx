import { CommonMetaType } from ".";

export type QuestionCategoryType = {
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

export type FetchQuestionCategoryType = {
  data: QuestionCategoryType[];
  links: {
    first: string;
    last: string;
    prev: string;
    next: string;
  };
  meta: CommonMetaType;
};
export type FetchQuestionCategoryQueryTransformReturnType = {
  data: QuestionCategoryType[];
  meta: CommonMetaType;
};
