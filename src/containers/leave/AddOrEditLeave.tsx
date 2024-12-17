import React from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';
import { AppText } from 'components/Text';
import { FormProvider, useForm } from 'react-hook-form';
import Input from 'components/Form/Input';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'components/Form/DatePicker';
import { Button } from '@rneui/base';
import { COLORS } from 'theme/theme';
import { useAppDispatch, useAppSelector } from 'hooks';
import { authSelector } from 'redux/slice/auth.slice';
import { ICreateLeaveRequest } from 'types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import { createLeaveRequestSchema } from 'libs/yup/auth.schema';
import { leavesSelector, postLeaves } from 'redux/slice/leaves.slice';
import { goBack } from 'utils/navigation';

const AddOrEditLeave = () => {
  const styles = useStyles();

  const { user } = useAppSelector(authSelector);

  const { loading, message } = useAppSelector(leavesSelector);

  const dispatch = useAppDispatch();

  const methods = useForm<ICreateLeaveRequest>({
    defaultValues: {
      employeeId: user?.employeeId,
      endDate: '',
      startDate: '',
      name: user?.name,
      reason: '',
    },

    resolver: yupResolver(createLeaveRequestSchema),
  });

  const onSubmit = async (values: ICreateLeaveRequest) => {
    const resultAction = await dispatch(postLeaves(values));
    if (postLeaves.fulfilled.match(resultAction)) {
      goBack();
    } else {
      methods.setError('reason', {
        type: 'manual',
        message: message as string,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>Xin nghỉ</AppText>
        </View>

        <View style={styles.inforContainer}>
          <View style={styles.infor}>
            <AppText>Họ và tên</AppText>
            <AppText>{user?.name}</AppText>
          </View>
          <View style={styles.infor}>
            <AppText>Mã nhân viên</AppText>
            <AppText>{user?.employeeId}</AppText>
          </View>
          <View style={styles.infor}>
            <AppText>Chức vụ</AppText>
            <AppText>{user?.position}</AppText>
          </View>
        </View>

        <View style={styles.inforContainer}>
          <DatePicker name="startDate" label="Từ Ngày" />
          <DatePicker name="endDate" label="Đến Ngày" />
          <Input name="reason" label="Lý do" />
        </View>
        <Button
          title="Gửi"
          titleStyle={{ color: '#ffffff' }}
          buttonStyle={{ backgroundColor: COLORS.Green }}
          containerStyle={{ width: '100%' }}
          onPress={methods.handleSubmit(onSubmit)}
          loading={loading[postLeaves.typePrefix]}
        />
      </View>
    </FormProvider>
  );
};

export default AddOrEditLeave;
