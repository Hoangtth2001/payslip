import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@rneui/themed';
import { View } from 'react-native';

import { useAppDispatch } from 'hooks';
import { getAuthUser } from 'redux/slice/auth.slice';
import { loginSchema } from 'libs/yup/auth.schema';
import Input from 'components/Form/Input';
import { LoginRequest, LoginResponse } from 'types/auth';
import { PATH } from 'configs/routerPath';
import { reset } from 'utils/navigation';
import { useStyles } from './styles';
import axiosInstance from 'axios/http';
import { IResponseList } from 'types/common';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const styles = useStyles();

  const [loading, setLoading] = useState(false);

  //   console.log(staffId);

  const methods = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: '',
      employeeId: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    setLoading(true);
    try {
      const res: { data: IResponseList<LoginResponse> } = await axiosInstance.post('login', data);

      if (res.data.status) {
        await dispatch(getAuthUser(res.data.content.employeeId));
        await AsyncStorage.setItem('employeeId', data.employeeId);
        reset(PATH.HOMETAB);
      }
    } catch (error) {
      methods.setError('email', {
        type: 'manual', // Chỉ rõ loại lỗi là "manual" để không phải kiểm tra validation tự động
        message: 'error-password-or-usename', // Thông báo lỗi
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const refresh = async () => {
      const staffId = await AsyncStorage.getItem('employeeId');
      if (!!staffId) {
        const resultAction = await dispatch(getAuthUser(staffId as unknown as string));
        if (getAuthUser.fulfilled.match(resultAction)) {
          reset(PATH.HOMETAB);
        } else {
          await AsyncStorage.removeItem('employeeId');
        }
      } else {
        await AsyncStorage.removeItem('employeeId');
      }
    };
    refresh();
  }, []);

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <Input name="email" label="Email" placeholder="jon.doe@email.com" keyboardType="email-address" />
        <Input name="password" label="Mật khẩu" password />
        <Input name="employeeId" label="Mã nhân viên" />
      </FormProvider>
      <Button
        title="Login"
        titleStyle={{ color: '#ffffff' }}
        buttonStyle={styles.button}
        containerStyle={{ width: '100%' }}
        onPress={methods.handleSubmit(onSubmit)}
        loading={loading}
      />
    </View>
  );
};
