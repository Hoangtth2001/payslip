import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

import { login } from 'redux/thunk/auth.thunk';
import { RootState } from 'types/redux';

type InitialState = {
  isAuth: boolean;
  loading: { [key: string]: boolean };
};

const initialState: InitialState = {
  isAuth: false,
  loading: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      AsyncStorage.removeItem('access_token');
      AsyncStorage.removeItem('refresh_token');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading[login.typePrefix] = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.isAuth = true;
      state.loading[login.typePrefix] = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading[login.typePrefix] = false;
    });
  },
});

export const authSelector = (state: RootState) => state.authReducer;

export const { actions, reducer } = authSlice;
