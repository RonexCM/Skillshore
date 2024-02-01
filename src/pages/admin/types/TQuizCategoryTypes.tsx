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

export type TAllQuizCategoryType = {
  id: number;
  title: string;
  categories: string;
};

export type TAllQuizCategoriesType = {
  data: TAllQuizCategoryType[];
};
