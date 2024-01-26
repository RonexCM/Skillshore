import {
  TFetchQuestionCategoryQueryTransformReturnType,
  TFetchQuestionCategoryType,
  TQuestionCategoryType,
  TAddQuestionCategoryFieldType,
  TQuestionCategoryListFetchAllType,
  TEditQuestionCategoryFieldType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuestionCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuestionCategories: builder.query<
      TQuestionCategoryListFetchAllType,
      void
    >({
      query: () => "/admin/quiz-categories/all",
    }),
    getQuestionCategories: builder.query<
      TFetchQuestionCategoryQueryTransformReturnType,
      number
    >({
      query: (page) => `/admin/question-categories?page=${page}`,
      providesTags: ["FetchQuestionCategories"],
      transformResponse: (response: TFetchQuestionCategoryType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    getSingleQuestionCategory: builder.query<TQuestionCategoryType, number>({
      query: (id) => `/admin/question-categories/${id}`,
    }),
    addQuestionCategory: builder.mutation<
      TAddQuestionCategoryFieldType,
      TAddQuestionCategoryFieldType
    >({
      query: (body: TAddQuestionCategoryFieldType) => ({
        url: "/admin/question-categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuestionCategories"],
    }),
    editQuestionCategory: builder.mutation<
      TEditQuestionCategoryFieldType,
      TEditQuestionCategoryFieldType
    >({
      query: ({ id, ...rest }) => ({
        url: `/admin/question-categories/${id}`,
        method: "PUT",
        body: { ...rest },
      }),
      invalidatesTags: ["FetchQuestionCategories"],
    }),
    deleteQuestionCategory: builder.mutation<void, number>({
      query: (id) => ({
        url: `/admin/question-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuestionCategories"],
    }),
  }),
});

export const {
  useGetQuestionCategoriesQuery,
  useAddQuestionCategoryMutation,
  useDeleteQuestionCategoryMutation,
  useGetAllQuestionCategoriesQuery,
  useEditQuestionCategoryMutation,
  useGetSingleQuestionCategoryQuery,
} = myQuestionCategoryApiEndpoints;
