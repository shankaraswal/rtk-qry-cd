import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type CategoryType = string;

export const categoryService = createApi({
  reducerPath: "categoryService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getCategoryList: builder.query<any, void>({
      query: () => `/products/categories`,
    }),
  }),
});

export const { useGetCategoryListQuery } = categoryService;
