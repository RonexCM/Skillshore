import {
  TAddQuizCategoryFieldType,
  TEditQuizCategoryFieldType,
  TFetchQuizCategoriesQueryTransformReturnType,
  TFetchQuizCategoriesType,
  TQuizCategoryType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuizCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizCategories: builder.query<TQuizCategoryType[], void>({
      query: () => "/admin/quiz-categories/all",
      providesTags: ["FetchQuizCategories"],
    }),
    getQuizCategories: builder.query<
      TFetchQuizCategoriesQueryTransformReturnType,
      number
    >({
      query: (page) => `/admin/quiz-categories?page=${page}`,
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
