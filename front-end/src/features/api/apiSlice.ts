import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types/TodoTypes';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    getTodos: builder.query<Product[], void>({
      query: () => '/product/all'
    })
  })
});

export const { useGetTodosQuery } = apiSlice;
