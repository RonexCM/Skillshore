import { QuizCategoryType } from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuizCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizCategories: builder.query<QuizCategoryType[], void>({
      query: () => "/admin/quiz-categories",
      providesTags: ["FetchQuizCategories"],
    }),
    getQuizCategories: builder.query<QuizCategoryType[], void>({
      query: () => "/admin/quiz-categories",
      providesTags: ["FetchQuizCategories"],
    }),
    addQuizCategory: builder.mutation<QuizCategoryType, QuizCategoryType>({
      query: (body: QuizCategoryType) => ({
        url: "/admin/quiz-categories",
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
  useGetQuizCategoriesQuery,
  useAddQuizCategoryMutation,
  useDeleteQuizCategoryMutation,
  useEditQuizCategoryMutation,
  useGetAllQuizCategoriesQuery,
} = myQuizCategoryApiEndpoints;
