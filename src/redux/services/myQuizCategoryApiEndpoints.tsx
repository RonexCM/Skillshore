import {
  TAddQuizCategoryFieldType,
  TEditQuizCategoryFieldType,
  TFetchQuizCategoriesQueryTransformReturnType,
  TFetchQuizCategoriesType,
  TQuizCategoryListFetchAllType,
  TQuizCategoryType,
} from "../../pages/admin/types";
import { TSearchParams } from "../../pages/admin/types/TCommonTypes";
import { myApi } from "./myApi";

const myQuizCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizCategories: builder.query<TQuizCategoryListFetchAllType, void>({
      query: () => "/admin/quiz-categories/all",
      providesTags: ["FetchQuizCategories"],
    }),
    getQuizCategories: builder.query<
      TFetchQuizCategoriesQueryTransformReturnType,
      TSearchParams
    >({
      query: ({ page, title }) => {
        let query = `/admin/questions?page=${page}`;
        if (title) {
          query += `&title=${title}`;
        }
        return query;
      },
      providesTags: ["FetchQuizCategories"],
      transformResponse: (response: TFetchQuizCategoriesType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    getSingleQuizCategory: builder.query<TQuizCategoryType, number>({
      query: (id) => `/admin/quiz-categories/${id}`,
    }),
    addQuizCategory: builder.mutation<
      TAddQuizCategoryFieldType,
      TAddQuizCategoryFieldType
    >({
      query: (body: TAddQuizCategoryFieldType) => ({
        url: "/admin/quiz-categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuizCategories"],
    }),

    editQuizCategory: builder.mutation<
      TEditQuizCategoryFieldType,
      TEditQuizCategoryFieldType
    >({
      query: ({ id, ...rest }) => ({
        url: `/admin/quiz-categories/${id}`,
        method: "PUT",
        body: { ...rest },
      }),
      invalidatesTags: ["FetchQuizCategories"],
    }),
    deleteQuizCategory: builder.mutation<void, number>({
      query: (id) => ({
        url: `/admin/quiz-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuizCategories"],
    }),
  }),
});

export const {
  useAddQuizCategoryMutation,
  useDeleteQuizCategoryMutation,
  useEditQuizCategoryMutation,
  useGetAllQuizCategoriesQuery,
  useGetQuizCategoriesQuery,
  useGetSingleQuizCategoryQuery,
} = myQuizCategoryApiEndpoints;
