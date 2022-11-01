import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/product/all'
    }),
    getProduct: builder.query<Product, string>({
      query: (id: string) => `/product/${id}`
    }),
    postProduct: builder.mutation({
      query: (product: Product | null) => ({
        method: 'POST',
        url: '/product/create',
        body: product
      })
    })
  })
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  usePostProductMutation
} = apiSlice;
