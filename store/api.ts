import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const mainApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'yeet',
  }),
  reducerPath: 'mainApi',
  tagTypes: [],
  endpoints: (build) => ({
    getTest: build.query({
      query(_) {
        return {
          url: ``,
          method: 'GET',
        }
      },
      transformResponse: (response) => response,
      providesTags: [],
    }),
    postTest: build.mutation({
      query(body) {
        return {
          url: '',
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [],
    }),
  }),
})

export default mainApi
export const {useGetTestQuery, usePostTestMutation} = mainApi
