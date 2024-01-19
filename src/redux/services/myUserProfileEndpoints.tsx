import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUserProfile } from "../../pages/student/types";
import { baseUrl } from "../../configs";

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<IUserProfile[], void>({
      query: () => ({
        url: `/user`,
      }),
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
