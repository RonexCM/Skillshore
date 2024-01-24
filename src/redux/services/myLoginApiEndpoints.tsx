import { myApi } from "./myApi";
import {
  TLoginResponseSuccess,
  TLoginResponseError,
  TLoginField,
} from "../../pages/auth/types";
const myLoginApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<TLoginResponseSuccess, TLoginField>({
      query: (body: TLoginField) => ({
        url: `/login`,
        method: "post",
        body,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = myLoginApiEndpoints;
