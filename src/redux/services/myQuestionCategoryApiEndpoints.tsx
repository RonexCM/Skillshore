import { QuestionCategoryType } from "../../pages/list/types";
import { myApi } from "./myApi";

const myQuestionCategoryApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestionCategorys: builder.query<QuestionCategoryType[], void>({
      query: () => "/questionCategorys",
    }),
    addQuestionCategory: builder.mutation<
      QuestionCategoryType,
      QuestionCategoryType
    >({
      query: (body: QuestionCategoryType) => ({
        url: "/questionCategorys",
        method: "POST",
        body,
      }),
    }),
    deleteQuestionCategory: builder.mutation<void, any>({
      query: ({ id }) => ({
        url: `/questionCategorys/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetQuestionCategorysQuery, useAddQuestionCategoryMutation } =
  myQuestionCategoryApiEndpoints;
