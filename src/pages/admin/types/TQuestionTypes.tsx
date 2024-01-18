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
