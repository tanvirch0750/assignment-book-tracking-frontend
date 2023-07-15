/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IAuthLogin, IAuthSignup } from '../../../types/authType';
import { api } from '../../api/apiSlice';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // register endpoint
    signup: builder.mutation({
      query: (data: IAuthSignup) => ({
        url: '/user/signup',
        method: 'POST',
        body: data,
      }),
    }),
    // login endpoint
    login: builder.mutation({
      query: (data: IAuthLogin) => ({
        url: '/user/login',
        method: 'POST',
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            'auth',
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
          // dispatch(
          //   userLoggedIn({
          //     accessToken: result.data.accessToken,
          //     user: result.data.user,
          //   })
          // );
        } catch (error) {
          // do nothing
        }
      },
    }),
  }),
});

// eslint-disable-next-line no-empty-pattern
export const { useSignupMutation, useLoginMutation } = authApi;
