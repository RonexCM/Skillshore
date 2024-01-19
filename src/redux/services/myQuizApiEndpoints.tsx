import { QuizType } from "../../pages/list/types/types";
import { myApi } from "./myApi";

const myQuizApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuiz: builder.query<QuizType[], void>({
      query: () => "/quizzes",
      providesTags: ["FetchQuizzes"],
    }),
    addQuiz: builder.mutation<QuizType, QuizType>({
      query: (body: QuizType) => ({
        url: "/quizzes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
    deleteQuiz: builder.mutation<void, string>({
      query: (id) => ({
        url: `/quizzes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuizzes"],
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
  useGetQuizQuery,
  useAddQuizMutation,
  useChangeStatusMutation,
  useDeleteQuizMutation,
} = myQuizApiEndpoints;
