import { TUserDataTransformed, TUserProfile } from "../../pages/student/types";
import { myApi } from "./myApi";

export const apiSlice = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<TUserDataTransformed, void>({
      query: () => ({
        url: `/user`,
      }),
      transformResponse: (response: TUserProfile) => {
        return { data: response.data, profile: response.data.profile };
      },
      providesTags: ["users"],
    }),
    getUserRole: builder.mutation({
      query: () => ({
        url: `/user`,
        method: "GET",
      }),
      invalidatesTags: ["users"],
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
  useGetUserRoleMutation,
  useUpdateUserProfileMutation,
  useCreateProfileMutation,
} = apiSlice;
