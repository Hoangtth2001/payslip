import { AxiosRequestConfig, AxiosPromise } from 'axios';

import { LoginRequest, LoginResponse } from 'types/auth';
import { instance } from 'libs/axios';

export const login = (data: LoginRequest): AxiosPromise<LoginResponse> => {
  const request: AxiosRequestConfig = {
    url: '/api/v1/login',
    method: 'POST',
    data,
  };

  return instance(request);
};
