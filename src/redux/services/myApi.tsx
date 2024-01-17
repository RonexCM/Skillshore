import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../configs";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = "82|trwnUsaZehcEAqDB34sua9oAzdYkB4Eqtr9LstUMa5d152cb";
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
