import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserProfile } from "../../pages/student/types";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://657ad086394ca9e4af12b9e0.mockapi.io/",
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<IUserProfile[], void>({
      query: () => "student",
      providesTags: ["User"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ id, ...updatedUserData }) => ({
        url: `student/${id}`,
        method: "PUT",
        body: updatedUserData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserProfileMutation } = apiSlice;
