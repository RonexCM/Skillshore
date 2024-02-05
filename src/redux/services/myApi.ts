import {
<<<<<<< HEAD
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  retry,
} from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../configs";
import { RootState } from "../store";

type CustomErrorMessage = {
  data: {
    errors: [];
    message: string;
  };
};

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.data.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-type", "application/json");
    headers.set("Accept", "application/json");
    return headers;
  },
=======
    BaseQueryFn,
    FetchArgs,
    createApi,
    fetchBaseQuery,
    retry,
} from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../configs";
import Cookies from "universal-cookie";

type CustomErrorMessage = {
    data: {
        errors: [];
        message: string;
    };
};

const cookies = new Cookies();
const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
        const token = cookies.get("token");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        headers.set("Content-type", "application/json");
        headers.set("Accept", "application/json");
        return headers;
    },
>>>>>>> 4525c06 (wipp)
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const myApi = createApi({
<<<<<<< HEAD
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry as BaseQueryFn<
    string | FetchArgs,
    unknown,
    CustomErrorMessage
  >,
  tagTypes: ["users"],
  endpoints: () => ({}),
=======
    reducerPath: "myApi",
    baseQuery: baseQueryWithRetry as BaseQueryFn<
        string | FetchArgs,
        unknown,
        CustomErrorMessage
    >,
    tagTypes: ["users"],
    endpoints: () => ({}),
>>>>>>> 4525c06 (wipp)
});
