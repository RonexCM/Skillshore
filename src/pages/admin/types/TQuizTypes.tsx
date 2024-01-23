export type QuizType = {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  time: number;
  retry_after: number;
  status: string;
};

export type AddQuizFieldType = {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  timer: number;
  retry_after: number;
};
