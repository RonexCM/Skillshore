import {
  AddQuestionFieldType,
  QuestionType,
} from "../../pages/list/types/types";
import { myApi } from "./myApi";

const myApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionType[], void>({
      query: () => `/questions`,
      providesTags: ["FetchQuestions"],
    }),
    getSingleQuestion: builder.query<QuestionType, string>({
      query: (id) => `/questions/${id}`,
    }),
    addQuestion: builder.mutation<AddQuestionFieldType, AddQuestionFieldType>({
      query: (body: AddQuestionFieldType) => ({
        url: "/questions",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuestions"],
    }),
    editQuestion: builder.mutation<QuestionType, QuestionType>({
      query: ({ id, ...rest }) => ({
        url: `/questions/${id}`,
        method: "PUT",
        body: { ...rest },
      }),
      invalidatesTags: ["FetchQuestions"],
    }),

    deleteQuestion: builder.mutation<void, string>({
      query: (id) => ({
        url: `/questions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuestions"],
    }),
    changeStatus: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/questions/${id}`,
        method: "PUT",
        body: { ...rest },
      }),
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useAddQuestionMutation,
  useChangeStatusMutation,
  useDeleteQuestionMutation,
  useEditQuestionMutation,
  useGetSingleQuestionQuery,
} = myApiEndpoints;
