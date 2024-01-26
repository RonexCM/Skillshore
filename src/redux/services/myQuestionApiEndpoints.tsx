import {
  TAddQuestionFieldType,
  TFetchQuestionsQueryTransformReturnType,
  TFetchQuestionsType,
  TQuestionType,
  TEditQuestionFieldType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuestionApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<
      TFetchQuestionsQueryTransformReturnType,
      number
    >({
      query: (page) => `/admin/questions?page=${page}`,
      providesTags: ["FetchQuestions"],
      transformResponse: (response: TFetchQuestionsType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    getSingleQuestion: builder.query<TQuestionType, string>({
      query: (id) => `/admin/questions/${id}`,
    }),
    addQuestion: builder.mutation<TAddQuestionFieldType, TAddQuestionFieldType>(
      {
        query: (body: TAddQuestionFieldType) => ({
          url: "/admin/questions",
          method: "POST",
          body,
        }),
        invalidatesTags: ["FetchQuestions"],
      }
    ),
    editQuestion: builder.mutation<
      TEditQuestionFieldType,
      TEditQuestionFieldType
    >({
      query: ({ id, ...rest }) => ({
        url: `/admin/questions/${id}`,
        method: "PUT",
        body: { ...rest },
      }),
      invalidatesTags: ["FetchQuestions"],
    }),

    deleteQuestion: builder.mutation<void, number>({
      query: (id) => ({
        url: `/admin/questions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuestions"],
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useAddQuestionMutation,
  useDeleteQuestionMutation,
  useEditQuestionMutation,
  useGetSingleQuestionQuery,
} = myQuestionApiEndpoints;
