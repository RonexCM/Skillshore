import { QuizCategoryType } from "../../pages/list/types";
import { myApi } from "./myApi";

const myQuizCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuizCategorys: builder.query<QuizCategoryType[], void>({
      query: () => "/quizCategory",
    }),
    addQuizCategory: builder.mutation<QuizCategoryType, QuizCategoryType>({
      query: (body: QuizCategoryType) => ({
        url: "/quizCategory",
        method: "POST",
        body,
      }),
    }),
    deleteQuizCategory: builder.mutation<void, any>({
      query: ({ id }) => ({
        url: `/quizCategory/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetQuizCategorysQuery, useAddQuizCategoryMutation } =
  myQuizCategoryApiEndpoints;
