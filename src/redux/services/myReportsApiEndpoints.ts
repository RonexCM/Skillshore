import { myApi } from "./myApi";

const myReportsApiEndpoints = myApi.injectEndpoints({
  endpoints: (builder) => ({
    getReport: builder.query<any, number>({
      query: (page) => `/admin/results?page=${page}`,
      transformResponse: (response: any) => {
        return { data: response.data, meta: response.meta };
      },
    }),
  }),
});

export const { useGetReportQuery } = myReportsApiEndpoints;
