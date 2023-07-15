/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IAuthLogin, IAuthSignup } from '../../../types/authType';
import { api } from '../../api/apiSlice';
import { userLoggedIn } from './authSlice';

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
              userName: result.data.userName,
              email: result.data.email,
              userId: result.data.userId,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              userName: result.data.userName,
              email: result.data.email,
              userId: result.data.userId,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

// eslint-disable-next-line no-empty-pattern
export const { useSignupMutation, useLoginMutation } = authApi;
