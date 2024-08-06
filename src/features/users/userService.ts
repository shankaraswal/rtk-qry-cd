import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type UserType = {
  address: {
    geolocation: {
      lat: string;
      long: string;
    };
    city: string;
    street: string;
    number: number;
    zipcode: string;
  };
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  phone: string;
};

export const userService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getUserList: builder.query<UserType[], void>({
      query: () => `users`,
    }),
    getUser: builder.query<any, any>({
      query: (uid: any) => `users/${uid}`,
    }),
  }),
});

export const { useGetUserListQuery, useGetUserQuery } = userService;
