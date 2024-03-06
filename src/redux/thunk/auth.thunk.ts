import { createAsyncThunk } from '@reduxjs/toolkit';

import { LoginRequest, LoginResponse } from 'types/auth';
import { userService } from 'services';
import { ThunkAPI } from 'types/redux';

interface ActionError {}

export const login = createAsyncThunk<LoginResponse, LoginRequest, ThunkAPI<ActionError>>(
  'thunk/auth/login',
  async (params, { rejectWithValue }) => {
    try {
      const { data } = await userService.login(params);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
