import { QuizType } from "../../pages/list/types/types";
import { myApi } from "./myApi";

const myQuizApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuiz: builder.query<QuizType[], void>({
      query: () => "/Quiz",
    }),
    addQuiz: builder.mutation<QuizType, QuizType>({
      query: (body: QuizType) => ({
        url: "/Quiz",
        method: "POST",
        body,
      }),
    }),
    deleteQuiz: builder.mutation<void, any>({
      query: ({ id }) => ({
        url: `/Quiz/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetQuizQuery, useAddQuizMutation } = myQuizApiEndpoints;
