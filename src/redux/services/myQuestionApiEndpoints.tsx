import {
  TAddQuestionFieldType,
  TFetchQuestionsQueryTransformReturnType,
  TFetchQuestionsType,
  TEditQuestionFieldType,
} from "../../pages/admin/types";
import { TSearchParams } from "../../pages/admin/types/TCommonTypes";
import { myApi } from "./myApi";

const myQuestionApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<
      TFetchQuestionsQueryTransformReturnType,
      TSearchParams
    >({
      query: ({ page, title }) => {
        let query = `/admin/questions?page=${page}`;
        if (title) {
          query += `&title=${title}`;
        }
        return query;
      },

      providesTags: ["FetchQuestions"],

      transformResponse: (response: TFetchQuestionsType) => {
        return { data: response.data, meta: response.meta };
      },
    }),

    getSingleQuestion: builder.query<TEditQuestionFieldType, string>({
      query: (id) => `/admin/questions/${id}`,
      transformResponse: (response: any) => {
        return { ...response.data, category_id: response.data.category.id };
      },
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
