import { myApi } from "./myApi";
import {
  LoginResponseSuccess,
  LoginResponseError,
  LoginField,
} from "../../pages/list/types/types";
import { registrationFormType } from "../../pages/list/types/types";
const myApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<
      LoginResponseSuccess | LoginResponseError,
      LoginField
    >({
      query: (body: LoginField) => ({
        url: `/login`,
        method: "post",
        body,
      }),
    }),
    registerUser: builder.mutation({
      query: (body: registrationFormType) => ({
        url: "/Registration",
        method: "post",
        body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = myApiEndpoints;
