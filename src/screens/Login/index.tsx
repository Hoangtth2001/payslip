import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@rneui/themed';
import { View } from 'react-native';

import { useAppSelector, useAppDispatch } from 'hooks';
import { authSelector } from 'redux/slice/auth.slice';
import { loginSchema } from 'libs/yup/auth.schema';
import { login } from 'redux/thunk/auth.thunk';
import Input from 'components/Form/Input';
import { LoginRequest } from 'types/auth';
import { reset } from 'utils/navigation';
import { PATH } from 'configs/routerPath';
import { useStyles } from './styles';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const styles = useStyles();

  const { loading } = useAppSelector(authSelector);

  const methods = useForm<LoginRequest>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: LoginRequest) => {
    const resultAction = await dispatch(login(data));
    if (login.fulfilled.match(resultAction)) {
      reset(PATH.HOME);
    }
  };

  return (
    <View style={styles.container}>
      <FormProvider {...methods}>
        <Input name="email" label="Email" placeholder="jon.doe@email.com" keyboardType="email-address" />
        <Input name="password" label="Password" password />
      </FormProvider>
      <Button
        title="Login"
        titleStyle={{ color: '#ffffff' }}
        buttonStyle={styles.button}
        containerStyle={{ width: '100%' }}
        onPress={methods.handleSubmit(onSubmit)}
        loading={loading[login.typePrefix]}
      />
    </View>
  );
};
