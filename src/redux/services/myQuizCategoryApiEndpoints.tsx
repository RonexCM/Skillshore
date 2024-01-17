import { QuizCategoryType } from "../../pages/list/types/types";
import { myApi } from "./myApi";

const myQuizCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuizCategorys: builder.query<QuizCategoryType[], void>({
      query: () => "/quiz-categories",
      providesTags: ["FetchQuizCategories"],
    }),
    addQuizCategory: builder.mutation<QuizCategoryType, QuizCategoryType>({
      query: (body: QuizCategoryType) => ({
        url: "/quiz-categories",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuizCategories"],
    }),
    deleteQuizCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `/quiz-categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuizCategories"],
    }),
    editQuizCategory: builder.mutation<QuizCategoryType, QuizCategoryType>({
      query: ({ id, ...rest }) => ({
        url: `/quiz-categories/${id}`,
        method: "PUT",
        body: { ...rest },
      }),
      invalidatesTags: ["FetchQuizCategories"],
    }),
  }),
});

export const {
  useGetQuizCategorysQuery,
  useAddQuizCategoryMutation,
  useDeleteQuizCategoryMutation,
  useEditQuizCategoryMutation,
} = myQuizCategoryApiEndpoints;
