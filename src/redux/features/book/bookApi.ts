/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '../../api/apiSlice';

type IBookParam = {
  searchTerm?: string;
  page?: number;
  limit?: number;
};

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (options: IBookParam) => {
        let queryString = '/book';

        if (options.page || options.limit || options.searchTerm) {
          queryString += '?';

          if (options.page) {
            queryString += `page=${options.page}&`;
          }

          if (options.limit) {
            queryString += `limit=${options.limit}&`;
          }

          if (options.searchTerm) {
            queryString += `searchTerm=${options.searchTerm}&`;
          }

          queryString = queryString.slice(0, -1);
        }

        return queryString;
      },
      keepUnusedDataFor: 600,
    }),
    getBook: builder.query({
      query: (id: string) => `/book/${id}`,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/book`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery, useAddBookMutation } =
  bookApi;
