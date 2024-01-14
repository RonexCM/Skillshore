import { QuestionType } from "../../pages/list/types";
import { myApi } from "./myApi";

const myApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionType[], void>({
      query: () => "/questions",
    }),
    addQuestion: builder.mutation<QuestionType, QuestionType>({
      query: (body: QuestionType) => ({
        url: "/questions",
        method: "POST",
        body,
      }),
    }),
    deleteQuestion: builder.mutation<void, any>({
      query: ({ id }) => ({
        url: `/questions/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetQuestionsQuery, useAddQuestionMutation } = myApiEndpoints;
