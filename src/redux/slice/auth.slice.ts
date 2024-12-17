import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'axios/http';
import { AuthUserResponse } from 'types/auth';
import { IResponseList } from 'types/common';

import { RootState } from 'types/redux';

type InitialState = {
  isAuth: boolean;
  loading: { [key: string]: boolean };
  user?: AuthUserResponse | null;
};

const initialState: InitialState = {
  isAuth: false,
  loading: {},
  user: null,
};

export const getAuthUser = createAsyncThunk<IResponseList<AuthUserResponse>, string>(
  'api/getme',
  async (params: string) => {
    try {
      const res = await axiosInstance.get(`employees/${params}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAuthUser.pending, (state) => {
      state.loading[getAuthUser.typePrefix] = true;
    });
    builder.addCase(getAuthUser.fulfilled, (state, action) => {
      state.isAuth = true;
      state.user = action.payload.content;
      state.loading[getAuthUser.typePrefix] = false;
    });
    builder.addCase(getAuthUser.rejected, (state) => {
      state.loading[getAuthUser.typePrefix] = false;
    });
  },
});

export const authSelector = (state: RootState) => state.authReducer;

export const { actions, reducer } = authSlice;
