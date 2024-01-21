import { registrationFormType } from "../../pages/Auth/TRegistrationForm";
import { myApi } from "./myApi";

const myRegistrationApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body: registrationFormType) => ({
        url: "/register",
        method: "post",
        body,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = myRegistrationApiEndpoints;
