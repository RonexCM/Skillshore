import { QuestionCategoryType } from "../../../src/pages/admin/types/TQuestionCategoryTypes";
import { myApi } from "./myApi";

const myQuestionCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionCategorys: builder.query<QuestionCategoryType[], number>({
      query: (page) => `/admin/question-categories?page=${page}`,
      providesTags: ["FetchQuestionCategories"],
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
