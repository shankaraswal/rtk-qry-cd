import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export const productService = createApi({
  reducerPath: "productService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getProductList: builder.query<ProductType[], void>({
      query: () => `products`,
    }),
    getProduct: builder.query<any, number>({
      query: (id: number) => `products/${id}`,
    }),
  }),
});

export const { useGetProductListQuery, useGetProductQuery } = productService;
