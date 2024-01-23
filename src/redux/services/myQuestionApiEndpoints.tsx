import {
  AddQuestionFieldType,
  FetchQuestionsQueryTransformReturnType,
  FetchQuestionsType,
  QuestionType,
  TEditQuestionFieldType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<FetchQuestionsQueryTransformReturnType, number>(
      {
        query: (page) => `/admin/questions?page=${page}`,
        providesTags: ["FetchQuestions"],
        transformResponse: (response: FetchQuestionsType) => {
          return { data: response.data, meta: response.meta };
        },
      }
    ),
    getSingleQuestion: builder.query<QuestionType, number>({
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
    editQuestion: builder.mutation<
      TEditQuestionFieldType,
      TEditQuestionFieldType
    >({
      query: ({ id, ...rest }) => ({
        url: `/admin/questions/${id}`,
        method: "PUT",
        body: { ...rest },
      }),
      invalidatesTags: ["FetchQuestions"],
    }),

    deleteQuestion: builder.mutation<void, number>({
      query: (id) => ({
        url: `/admin/questions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuestions"],
    }),
  }),
});

export const {
  useGetQuestionsQuery,
  useAddQuestionMutation,
  useDeleteQuestionMutation,
  useEditQuestionMutation,
  useGetSingleQuestionQuery,
} = myApiEndpoints;
