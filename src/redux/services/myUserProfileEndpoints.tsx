import Cookies from "universal-cookie";
import { TUserProfile } from "../../pages/student/types";
import { myApi } from "./myApi";

const cookies = new Cookies();
const token = cookies.get("token");
console.log(token, "token");

export const apiSlice = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<TUserProfile, void>({
      query: () => ({
        url: `/user`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["users"],
    }),
    updateUserProfile: builder.mutation({
      query: ({ id, ...updatedUserData }) => ({
        url: `/student/profile/${id}`,
        method: "PUT",
        body: updatedUserData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["users"],
    }),
    createProfile: builder.mutation({
      query: (newProfileData) => ({
        url: `/student/profile`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
