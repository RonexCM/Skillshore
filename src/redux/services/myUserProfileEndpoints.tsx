import { TUserProfile } from "../../pages/student/types";
import { myApi } from "./myApi";

export const apiSlice = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<TUserProfile[], void>({
      query: () => ({
        url: `/user`,
        headers: {
          Authorization: `Bearer 176|wlf0CI3FiOVj0qT4DnMiPPYRj9jE09z5zsJxJJZA4cc6e69d`, // Replace with your actual bearer token
          "Content-Type": "application/json",
        },
      }),
    }),
    updateUserProfile: builder.mutation({
      query: ({ id, ...updatedUserData }) => ({
        url: `/user/${id}`,
        method: "PUT",
        body: updatedUserData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserProfileMutation } = apiSlice;
