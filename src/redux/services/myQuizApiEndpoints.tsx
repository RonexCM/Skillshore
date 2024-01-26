import {
  TQuizType,
  TFetchQuizzesQueryTransformReturnType,
  TFetchQuizzesType,
  TAddQuizFieldType,
  TEditQuizFieldType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuizApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query<TFetchQuizzesQueryTransformReturnType, number>({
      query: (page) => `/admin/quizzes?page=${page}`,
      providesTags: ["FetchQuizzes"],
      transformResponse: (response: TFetchQuizzesType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    getSingleQuiz: builder.query<TQuizType, number>({
      query: (id) => `/admin/quizzes/${id}`,
    }),
    addQuiz: builder.mutation<TAddQuizFieldType, TAddQuizFieldType>({
      query: (body: TAddQuizFieldType) => ({
        url: "/admin/quizzes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
    editQuiz: builder.mutation<TEditQuizFieldType, TEditQuizFieldType>({
      query: ({ id, ...rest }) => ({
        url: `/admin/quizzes/${id}`,
        method: "PUT",
        body: { ...rest },
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
    deleteQuiz: builder.mutation<void, number>({
      query: (id) => ({
        url: `/admin/quizzes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
  }),
});

export const {
  useEditQuizMutation,
  useGetQuizzesQuery,
  useGetSingleQuizQuery,
  useAddQuizMutation,
  useDeleteQuizMutation,
} = myQuizApiEndpoints;
