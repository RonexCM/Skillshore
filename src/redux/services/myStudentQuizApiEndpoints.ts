import {
  TFetchQuizQueryResponseType,
  TFetchQuizQueryTransformResponseType,
} from "../../pages/admin/types";
import { myApi } from "./myApi";

const myStudentQuizApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllQuizStudent: builder.query<
      TFetchQuizQueryTransformResponseType,
      unknown
    >({
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
      transformResponse: (response: TFetchQuizQueryResponseType) => {
        return { data: response.data, meta: response.meta };
      },
    }),
    getQuizById: builder.query({
      query: () => ({
        url: `/student/quizzes/all`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllQuizStudentQuery, useGetQuizByIdQuery } =
  myStudentQuizApiEndpoints;
