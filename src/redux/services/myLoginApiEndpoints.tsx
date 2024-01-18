import { myApi } from "./myApi";
import {
  LoginResponseSuccess,
  LoginResponseError,
  LoginField,
} from "../../pages/auth/types";
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
  }),
});

export const { useLoginUserMutation } = myApiEndpoints;
