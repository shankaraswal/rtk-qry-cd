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
    getProduct: builder.query<ProductType, string>({
      query: (pid: string) => `products/${pid}`,
    }),
    getProductCategories: builder.query<string[], void>({
      query: () => `products/categories`,
    }),
    getProductByCategory: builder.query<ProductType[], string>({
      query: (cat: string) => `products/category/${cat}`,
    }),
  }),
});

export const {
  useGetProductListQuery,
  useGetProductQuery,
  useGetProductCategoriesQuery,
  useGetProductByCategoryQuery,
} = productService;
