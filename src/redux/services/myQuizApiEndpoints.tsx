import {
  TAllQuizType,
  TFetchQuizQueryResponseType,
  TFetchQuizQueryTransformResponseType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuizApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuiz: builder.query<TFetchQuizQueryTransformResponseType, void>({
      query: () => "/student/quizzes/all",
      providesTags: ["FetchQuizzes"],
      transformResponse: (response: TFetchQuizQueryResponseType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    addQuiz: builder.mutation<TAllQuizType, TAllQuizType>({
      query: (body: TAllQuizType) => ({
        url: "/student/quizzes/all",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
    deleteQuiz: builder.mutation<void, string>({
      query: (id) => ({
        url: `/student/quizzes/all/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
  }),
});

export const { useGetAllQuizQuery, useAddQuizMutation, useDeleteQuizMutation } =
  myQuizApiEndpoints;
