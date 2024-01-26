import { TUserProfile } from "../../pages/student/types";
import { myApi } from "./myApi";

export const apiSlice = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<TUserProfile, void>({
      query: () => ({
        url: `/user`,
      }),
      providesTags: ["users"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ id, ...updatedUserData }) => ({
        url: `/student/profile/${id}`,
        method: "PUT",
        body: updatedUserData,
      }),
      invalidatesTags: ["users"],
    }),
    createProfile: builder.mutation({
      query: (newProfileData) => ({
        url: `/student/profile`,
        method: "POST",
        body: newProfileData,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useUpdateUserProfileMutation,
  useCreateProfileMutation,
} = apiSlice;
