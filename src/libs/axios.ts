import AsyncStorage from '@react-native-async-storage/async-storage';
import MockAdapter from 'axios-mock-adapter';

import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 20000,
});

instance.interceptors.request.use(
  async (config) => {
    const access_token = await AsyncStorage.getItem('access_token');
    if (access_token) {
      config.headers.setAuthorization(`Bearer ${access_token}`);
    }

    return config;
  },
  (error) => Promise.reject(error),
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.log('error', error);
    return Promise.reject(error);
  },
);

const mock = new MockAdapter(instance, { delayResponse: 2000 });

mock.onPost('/api/v1/login').reply(200, {
  users: { id: 1, name: 'John Smith' },
});
