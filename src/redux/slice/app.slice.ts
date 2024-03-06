import { createSlice } from '@reduxjs/toolkit';

import { RootState } from 'types/redux';

type InitialState = {
  locale: string;
};

const initialState: InitialState = {
  locale: 'vi',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeLocale: (state, action) => {
      state.locale = action.payload;
    },
  },
  extraReducers: () => {},
});

export const appSelector = (state: RootState) => state.appReducer;

export const { actions, reducer } = appSlice;
