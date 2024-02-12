import {
  StudentQuizCategoryType,
  TStudentAllQuizCategoryType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuizCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizCategories: builder.query<TStudentAllQuizCategoryType, void>({
      query: () => "student/quiz-categories/all",
    }),
    getQuizCategories: builder.query<StudentQuizCategoryType[], void>({
      query: () => "student/quiz-categories/all",
    }),
  }),
});

export const { useGetQuizCategoriesQuery, useGetAllQuizCategoriesQuery } =
  myQuizCategoryApiEndpoints;
