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
