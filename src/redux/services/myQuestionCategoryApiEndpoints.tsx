import {
  TFetchQuestionCategoryQueryTransformReturnType,
  TFetchQuestionCategoryType,
  TQuestionCategoryType,
  TQuestionCategoryListFetchAllType,
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
    addQuestionCategory: builder.mutation<
      TQuestionCategoryType,
      TQuestionCategoryType
    >({
      query: (body: TQuestionCategoryType) => ({
        url: "/question-categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuestionCategories"],
    }),
    deleteQuestionCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `/question-categories/${id}`,
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
} = myQuestionCategoryApiEndpoints;
