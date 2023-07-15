/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IUser {
  accessToken: string | undefined;
  userName: string | undefined;
  email: string | undefined;
  userId: string | undefined;
}

const initialState: IUser = {
  accessToken: '',
  userName: '',
  email: '',
  userId: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state: IUser, action: PayloadAction<IUser>) => {
      console.log('action', action.payload);
      state.accessToken = action.payload.accessToken;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.userId = action.payload.userId;
    },
    userLoggedOut: (state) => {
      state.accessToken = undefined;
      state.userName = undefined;
      state.email = undefined;
      state.userId = undefined;
    },
  },
});

// eslint-disable-next-line no-empty-pattern
export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
