import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../configs";
import Cookies from "universal-cookie";

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
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});
