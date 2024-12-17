import { AxiosRequestConfig, AxiosPromise } from 'axios';

import { AuthUserResponse, LoginRequest, LoginResponse } from 'types/auth';
import { instance } from 'libs/axios';
import axiosInstance from 'axios/http';

export const getAuthUser = async (employeeId: string) => {
  try {
    const res = await axiosInstance.get(`employees/${employeeId}`);
    return res.data;
  } catch (error) {
    return error;
  }
};
