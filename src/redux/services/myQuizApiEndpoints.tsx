import {
  TQuizType,
  TFetchQuizzesQueryTransformReturnType,
  TFetchQuizzesType,
  TAddQuizFieldType,
  TEditQuizFieldType,
} from "../../pages/admin/types";
import { TSearchParams } from "../../pages/admin/types/TCommonTypes";
import { myApi } from "./myApi";

const myQuizApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query<
      TFetchQuizzesQueryTransformReturnType,
      TSearchParams
    >({
      query: ({ page, title }) => {
        let query = `/admin/quizzes?page=${page}`;
        if (title) {
          query += `&title=${title}`;
        }
        return query;
      },
      providesTags: ["FetchQuizzes"],
      transformResponse: (response: TFetchQuizzesType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    getSingleQuiz: builder.query<any, string>({
      query: (id) => `/admin/quizzes/${id}`,
      transformResponse: (response: any) => {
        return {
          ...response.data,
          thumbnail: "",
          question_categories: response.data.question_categories.map(
            (obj) => obj.id
          ),
        };
      },
    }),
    addQuiz: builder.mutation<TAddQuizFieldType, TAddQuizFieldType>({
      query: (payload: TAddQuizFieldType) => {
        return {
          url: "/admin/quizzes",
          method: "POST",
          body: payload,
          // headers: { "Content-type": "multipart/form-data" },
        };
      },
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
