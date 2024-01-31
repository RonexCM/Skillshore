import {
  QuizCategoryType,
  TAllQuizCategoriesType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuizCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizCategories: builder.query<TAllQuizCategoriesType, void>({
      query: () => "student/quiz-categories/all",
      providesTags: ["FetchQuizCategories"],
    }),
    getQuizCategories: builder.query<QuizCategoryType[], void>({
      query: () => "student/quiz-categories/all",
      providesTags: ["FetchQuizCategories"],
    }),
    addQuizCategory: builder.mutation<QuizCategoryType, QuizCategoryType>({
      query: (body: QuizCategoryType) => ({
        url: "student/quiz-categories/all",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuizCategories"],
    }),
    deleteQuizCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `student/quiz-categories/all/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuizCategories"],
    }),
    editQuizCategory: builder.mutation<QuizCategoryType, QuizCategoryType>({
      query: ({ id, ...rest }) => ({
        url: `student/quiz-categories/all/${id}`,
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
