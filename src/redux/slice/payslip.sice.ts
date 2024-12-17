import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'axios/http';
import { IAllPayslip, ICreateLeaveRequest, ILeavesByIDResponse } from 'types/auth';
import { IResponseList } from 'types/common';

import { RootState } from 'types/redux';

type InitialState = {
  loading: { [key: string]: boolean };
  message?: string | null;
  view?: boolean;
  payslip: IAllPayslip | null;
};

const initialState: InitialState = {
  loading: {},
  message: null,
  view: false,
  payslip: null,
};

// export const getLeavesbyId = createAsyncThunk<IResponseList<ILeavesByIDResponse>, string>(
//   'api/getLeavesbyId',
//   async (id: string) => {
//     try {
//       const res = await axiosInstance.get(`leaverequests/${id}`);
//       return res.data;
//     } catch (error) {
//       return error;
//     }
//   },
// );

export const getAllPaySlip = createAsyncThunk<IResponseList<IAllPayslip>, string>(
  'api/getAllPaySlip',
  async (id: string) => {
    try {
      const res = await axiosInstance.get(`payrolls/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  },
);

const payslipSlice = createSlice({
  name: 'payslip',
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPaySlip.pending, (state) => {
      state.loading[getAllPaySlip.typePrefix] = true;
    });
    builder.addCase(getAllPaySlip.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.payslip = action.payload.content;
      state.loading[getAllPaySlip.typePrefix] = false;
    });
    builder.addCase(getAllPaySlip.rejected, (state) => {
      state.loading[getAllPaySlip.typePrefix] = false;
    });
  },
});

export const payslipSelector = (state: RootState) => state.payslipReducer;

export const { actions, reducer } = payslipSlice;
