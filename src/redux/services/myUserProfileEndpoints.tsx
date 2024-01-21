import { TUserProfile } from "../../pages/student/types";
import { myApi } from "./myApi";

export const apiSlice = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<TUserProfile[], void>({
      query: () => ({
        url: `/user`,
      }),
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
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserProfileMutation } = apiSlice;
