import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'axios/http';
import {  ICreateLeaveRequest, ILeavesByIDResponse } from 'types/auth';
import { IResponseList } from 'types/common';

import { RootState } from 'types/redux';

type InitialState = {
  loading: { [key: string]: boolean };
  message?: string | null;
  view?: boolean;
  infor: ILeavesByIDResponse | null;
};

const initialState: InitialState = {
  loading: {},
  message: null,
  view: false,
  infor: null,
};

export const getLeavesbyId = createAsyncThunk<IResponseList<ILeavesByIDResponse>, string>(
  'api/getLeavesbyId',
  async (id: string) => {
    try {
      const res = await axiosInstance.get(`leaverequests/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },
);

export const postLeaves = createAsyncThunk<IResponseList<ICreateLeaveRequest>, ICreateLeaveRequest>(
  'api/postLeaves',
  async (body) => {
    try {
      const res = await axiosInstance.post(`leaverequests`, body);
      return res.data;
    } catch (error) {
      return error;
    }
  },
);

const leavesSlice = createSlice({
  name: 'leaves',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLeaves.pending, (state) => {
      state.loading[postLeaves.typePrefix] = true;
    });
    builder.addCase(postLeaves.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.loading[postLeaves.typePrefix] = false;
    });
    builder.addCase(postLeaves.rejected, (state) => {
      state.loading[postLeaves.typePrefix] = false;
    });

    builder.addCase(getLeavesbyId.pending, (state) => {
      state.loading[getLeavesbyId.typePrefix] = true;
    });
    builder.addCase(getLeavesbyId.fulfilled, (state, action) => {
      state.infor = action.payload.content;
      state.loading[getLeavesbyId.typePrefix] = false;
    });
    builder.addCase(getLeavesbyId.rejected, (state) => {
      state.loading[getLeavesbyId.typePrefix] = false;
    });
  },
});

export const leavesSelector = (state: RootState) => state.leavesReducer;

export const { actions, reducer } = leavesSlice;
