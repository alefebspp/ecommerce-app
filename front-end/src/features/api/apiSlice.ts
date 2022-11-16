import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types/types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: builder => ({
    getProducts: builder.query<Product[], void>({
      query: () => '/product/all'
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: category => `/product/categorys/${category}`
    }),
    getProduct: builder.query<Product, string | undefined>({
      query: id => `/product/${id}`
    }),
    postProduct: builder.mutation({
      query: (product: Product | null) => ({
        method: 'POST',
        url: '/product/create',
        body: product
      })
    }),
    deleteProduct: builder.mutation({
      query: (id: string) => ({
        method: 'DELETE',
        url: `/product/delete/${id}`
      })
    })
  })
});

export const {
  useGetProductsByCategoryQuery,
  useGetProductsQuery,
  useGetProductQuery,
  usePostProductMutation,
  useDeleteProductMutation
} = apiSlice;
