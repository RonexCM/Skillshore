import { TQuizType } from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuizApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuiz: builder.query<TQuizType[], void>({
      query: () => "/admin/quizzes",
      providesTags: ["FetchQuizzes"],
    }),
    addQuiz: builder.mutation<TQuizType, TQuizType>({
      query: (body: TQuizType) => ({
        url: "/amdin/quizzes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
    deleteQuiz: builder.mutation<void, string>({
      query: (id) => ({
        url: `/admin/quizzes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
  }),
});

export const { useGetAllQuizQuery, useAddQuizMutation, useDeleteQuizMutation } =
  myQuizApiEndpoints;
