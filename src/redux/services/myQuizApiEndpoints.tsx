import {
  TAllQuizType,
  TFetchQuizQueryResponseType,
  TFetchQuizQueryTransformResponseType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myQuizApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuiz: builder.query<TFetchQuizQueryTransformResponseType, unknown>({
      query: ({ page, title, selectedCategory }) => {
        let query = `/student/quizzes/all?page=${page}`;
        if (title) {
          query += `&title=${title}`;
        }
        if (selectedCategory) {
          if (selectedCategory.length > 0) {
            const number = selectedCategory.map(Number).join(",");
            query += `&category_id=${number}`;
          }
        }
        return query;
      },
      providesTags: ["FetchQuizzes"],
      transformResponse: (response: TFetchQuizQueryResponseType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    getQuizById: builder.query({
      query: () => ({
        url: `/student/quizzes/all`,
        method: "GET",
        providesTags: ["FetchQuizzes"],
      }),
    }),
    addQuiz: builder.mutation<TAllQuizType, TAllQuizType>({
      query: (body: TAllQuizType) => ({
        url: "/student/quizzes/all",
        method: "POST",
        body,
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
    deleteQuiz: builder.mutation<void, string>({
      query: (id) => ({
        url: `/student/quizzes/all/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FetchQuizzes"],
    }),
  }),
});

export const {
  useGetAllQuizQuery,
  useGetQuizByIdQuery,
  useAddQuizMutation,
  useDeleteQuizMutation,
} = myQuizApiEndpoints;
