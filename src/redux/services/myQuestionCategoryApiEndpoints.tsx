import {
  FetchQuestionCategoryQueryTransformReturnType,
  FetchQuestionCategoryType,
  QuestionCategoryType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuestionCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionCategorys: builder.query<
      FetchQuestionCategoryQueryTransformReturnType,
      number
    >({
      query: (page) => `/admin/question-categories?page=${page}`,
      providesTags: ["FetchQuestionCategories"],
      transformResponse: (response: FetchQuestionCategoryType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    addQuestionCategory: builder.mutation<
      QuestionCategoryType,
      QuestionCategoryType
    >({
      query: (body: QuestionCategoryType) => ({
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
  useGetQuestionCategorysQuery,
  useAddQuestionCategoryMutation,
  useDeleteQuestionCategoryMutation,
} = myQuestionCategoryApiEndpoints;
