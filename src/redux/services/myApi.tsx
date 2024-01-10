import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../configs";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const token = cookies.get("token");

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("content-type", "application/json");
  },
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});
