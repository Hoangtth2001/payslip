import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';
import { Button } from '@rneui/base';
import { FormProvider, useForm } from 'react-hook-form';
import Input from 'components/Form/Input';
import { IOption, StaffInfor } from 'types/auth';
import { addStaffSchema } from 'libs/yup/auth.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'hooks';
import { ScrollView } from 'react-native-gesture-handler';
import Radios from 'components/Form/Radios';
import { createStaff, editStaff, getStaffList, staffSelector } from 'redux/slice/staff.slice';
import { PATH } from 'configs/routerPath';
import { goBack, reset } from 'utils/navigation';
import { actions } from '../../../redux/slice/staff.slice';
const AddStaff = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const { loading, message, isEdit, staffDetail } = useAppSelector(staffSelector);

  const genderOptions: IOption[] = [
    { value: 'male', label: 'Nam' },
    { value: 'female', label: 'Nữ' },
  ];
  const rolesOptions: IOption[] = [
    { value: 'admin', label: 'Quản trị' },
    { value: '', label: 'Nhân viên' },
  ];

  const methods = useForm<StaffInfor>({
    defaultValues: {
      email: '',
      password: '',
      allowance: '',
      basicSalary: '',
      confirmPassword: '',
      name: '',
      gender: genderOptions[0].value,
      employeeId: '',
      position: '',
      role: rolesOptions[0].value,
    },

    resolver: yupResolver(addStaffSchema),
  });

  const onSubmit = async (data: StaffInfor) => {
    if (!isEdit) {
      const resultAction = await dispatch(createStaff(data));
      if (createStaff.fulfilled.match(resultAction)) {
        goBack();
        dispatch(getStaffList());
      } else {
        methods.setError('allowance', {
          type: 'manual',
          message: message as string,
        });
      }
    } else {
      const resultAction = await dispatch(editStaff({ data: data, id: staffDetail?._id as string }));
      if (createStaff.fulfilled.match(resultAction)) {
        goBack();
        dispatch(getStaffList());
        dispatch(actions.setIsEdit(false));
      } else {
        methods.setError('allowance', {
          type: 'manual',
          message: message as string,
        });
      }
    }
  };

  useEffect(() => {
    if (isEdit) {
      methods.reset({
        email: staffDetail?.email || '',
        password: '',
        allowance: staffDetail?.allowance?.toString() || '',
        basicSalary: staffDetail?.basicSalary?.toString() || '',
        confirmPassword: '',
        name: staffDetail?.name || '',
        gender: staffDetail?.gender || genderOptions[0].value,
        employeeId: staffDetail?.employeeId || '',
        position: staffDetail?.position || '',
        role: staffDetail?.role || rolesOptions[0].value,
      });
    }
  }, [isEdit]);

  return (
    <FormProvider {...methods}>
      <ScrollView>
        <Input name="email" label="Email" placeholder="jon.doe@email.com" keyboardType="email-address" />
        <Input name="password" label="Mật khẩu" password />
        <Input name="confirmPassword" label="Nhập lại mật khẩu" password />
        <Input name="name" label="Họ và tên" />
        <Input name="position" label="Chức vụ" />
        <Radios name="role" label="Quyền" options={rolesOptions} />
        <Radios name="gender" label="Giới tính" options={genderOptions} />
        <Input name="employeeId" label="Mã nhân viên" />
        <Input name="basicSalary" label="Lương cơ bản" />
        <Input name="allowance" label="Phụ cấp" />
        <Button
          title="Tạo"
          titleStyle={{ color: '#ffffff' }}
          buttonStyle={styles.button}
          containerStyle={{ width: '100%' }}
          onPress={methods.handleSubmit(onSubmit)}
          loading={loading[createStaff.typePrefix]}
        />
      </ScrollView>
    </FormProvider>
  );
};

export default AddStaff;
