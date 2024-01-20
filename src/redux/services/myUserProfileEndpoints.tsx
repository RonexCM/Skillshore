import Cookies from "universal-cookie";
import { IUserProfile } from "../../pages/student/types";
import { myApi } from "./myApi";

const cookies = new Cookies();
const token = cookies.get("token");

export const apiSlice = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<TUserProfile[], void>({
      query: () => ({
        url: `/user`,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }),
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
    }),
  }),
});

export const { useGetUserQuery, useUpdateUserProfileMutation } = apiSlice;
