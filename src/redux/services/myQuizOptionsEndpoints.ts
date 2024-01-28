import { TQuizOptions } from "../../pages/student/types";
import { myApi } from "./myApi";

const myQuizOptionEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuizOptions: builder.query<TQuizOptions[], number>({
      query: (quizId) => ({
        url: `/student/quizzes/${quizId}/start`,
        headers: {
          // Authorization: `Bearer 141|XfWfwPUJMgZYGWCBNjZm8VTuGPIDkUs1gXSstN7p5df06bd6`,
          "Content-Type": "application/json",
        },
      }),
    }),
    postQuizData: builder.mutation({
      query: (quizData) => ({
        url: `/student/quizzes/${quizData.quiz_id}/submit`,
        method: "POST",
        body: quizData,
      }),
    }),
  }),
});

export const { useGetQuizOptionsQuery, usePostQuizDataMutation } =
  myQuizOptionEndpoints;
