import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { BASE_URL as baseUrl } from "../../configs";
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set("content-type", "application/json");
  },
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
});
