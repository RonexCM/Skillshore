import {
  StudentQuizCategoryType,
  TAllStudentQuizCategoriesType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuizCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizCategoriesStudent: builder.query<
      TAllStudentQuizCategoriesType,
      void
    >({
      query: () => "/student/quiz-categories/all",
    }),
    getQuizCategoriesStudent: builder.query<StudentQuizCategoryType[], void>({
      query: () => "/student/quiz-categories/all",
    }),
  }),
});

export const {
  useGetQuizCategoriesStudentQuery,
  useGetAllQuizCategoriesStudentQuery,
} = myQuizCategoryApiEndpoints;
