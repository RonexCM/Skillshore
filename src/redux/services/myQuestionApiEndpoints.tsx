import {
  AddQuestionFieldType,
  FetchQuestionsQueryReturnType,
  FetchQuestionsType,
  QuestionType,
} from "../../pages/admin/types/TQuestionTypes";
import { myApi } from "./myApi";

const myApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<FetchQuestionsQueryReturnType, number>({
      query: (page) => `/admin/questions?page=${page}`,
      providesTags: ["FetchQuestions"],
      transformResponse: (response: FetchQuestionsType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    getSingleQuestion: builder.query<QuestionType, string>({
      query: (id) => `/questions/${id}`,
    }),
    addQuestion: builder.mutation<AddQuestionFieldType, AddQuestionFieldType>({
      query: (body: AddQuestionFieldType) => ({
        url: "/admin/questions",
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
