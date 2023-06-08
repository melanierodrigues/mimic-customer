import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getCards: builder.mutation({
        query(payload) {
          return {
            url: 'https://cms.talkdesk.com/wp-json/web-api/v1/content/cards',
            method: 'POST',
            body: payload,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
              invalidatesTags: [{ type: 'Post', id: 'LIST' }],
          };
        },
        transformResponse: (response) => response,
      }),
  }),
})

export const { useGetCardsMutation } = cardApi