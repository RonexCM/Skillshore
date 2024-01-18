import { QuizType } from "../../pages/admin/types/types";
import { myApi } from "./myApi";

const myQuizApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuiz: builder.query<QuizType[], void>({
      query: () => "/quizzes",
      providesTags: ["FetchQuizzes"],
    }),
    addQuiz: builder.mutation<QuizType, QuizType>({
      query: (body: QuizType) => ({
        url: "/quizzes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
    deleteQuiz: builder.mutation<void, string>({
      query: (id) => ({
        url: `/quizzes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
  }),
});

export const { useGetQuizQuery, useAddQuizMutation, useDeleteQuizMutation } =
  myQuizApiEndpoints;
