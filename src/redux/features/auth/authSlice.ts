import { createSlice } from '@reduxjs/toolkit';
//import type { PayloadAction } from '@reduxjs/toolkit';

interface IUser {
  userName: string;
  email: string;
}

const initialState: IUser = {
  userName: '',
  email: '',
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

// eslint-disable-next-line no-empty-pattern
export const {} = authSlice.actions;

export default authSlice.reducer;
