import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from 'axios/http';
import { AuthUserResponse, StaffInfor } from 'types/auth';
import { IResponseList } from 'types/common';

import { RootState } from 'types/redux';

export const createStaff = createAsyncThunk<IResponseList<AuthUserResponse>, StaffInfor>(
  'api/createStaff',
  async (data) => {
    try {
      const res = await axiosInstance.post(`employees`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  },
);

export const editStaff = createAsyncThunk<IResponseList<AuthUserResponse>, { data: StaffInfor; id: string }>(
  'api/editStaff',
  async ({ data, id }) => {
    try {
      const res = await axiosInstance.put(`employees${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  },
);

export const getStaffList = createAsyncThunk<IResponseList<AuthUserResponse[]>>('api/getStaffList', async () => {
  try {
    const res = await axiosInstance.get('employees');
    return res.data;
  } catch (error) {
    return error;
  }
});

type InitialState = {
  loading: { [key: string]: boolean };
  staffList?: AuthUserResponse[] | null;
  message?: string | null;
  staffDetail?: AuthUserResponse | null;
  isEdit?: boolean;
};

const initialState: InitialState = {
  loading: {},
  staffList: null,
  message: null,
  staffDetail: null,
  isEdit: false,
};

const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setFormStaff: (state, action) => {
      state.staffDetail = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createStaff.pending, (state) => {
      state.loading[createStaff.typePrefix] = true;
    });
    builder.addCase(createStaff.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.loading[createStaff.typePrefix] = false;
    });
    builder.addCase(createStaff.rejected, (state) => {
      state.loading[createStaff.typePrefix] = false;
    });
    builder.addCase(getStaffList.pending, (state) => {
      state.loading[getStaffList.typePrefix] = true;
    });
    builder.addCase(getStaffList.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.staffList = action.payload.content;
      state.loading[getStaffList.typePrefix] = false;
    });
    builder.addCase(getStaffList.rejected, (state) => {
      state.loading[getStaffList.typePrefix] = false;
    });
    builder.addCase(editStaff.pending, (state) => {
      state.loading[editStaff.typePrefix] = true;
    });
    builder.addCase(editStaff.fulfilled, (state, action) => {
      state.message = action.payload.message;
      state.loading[editStaff.typePrefix] = false;
    });
    builder.addCase(editStaff.rejected, (state) => {
      state.loading[editStaff.typePrefix] = false;
    });
  },
});

export const staffSelector = (state: RootState) => state.StaffReducer;

export const { actions, reducer } = staffSlice;
