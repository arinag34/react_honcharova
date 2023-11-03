
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Post {
  body: string;
  id: number;
  title: string
  userId: number;
}

export const apiSlice = createApi({
  reducerPath: 'jsonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => `posts`
    })
  })
})

export const { useGetPostsQuery } = apiSlice

