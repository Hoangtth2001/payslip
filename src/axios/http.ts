import axios from 'axios';

import { expoApi } from '../../config.json';

export const ZULIP_API_BASE_URL = expoApi;

const axiosInstance = axios.create({
  baseURL: ZULIP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
     'Cache-Control': 'no-cache'
  }, // Thay thế bằng URL API của bạn
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Successful response processing
    return response;
  },
  (error) => {
    // Check if the error is an AxiosError and if there's a response

    // Reject the error to be handled in calling code
    return Promise.reject(error.response);
  },
);

export default axiosInstance;
