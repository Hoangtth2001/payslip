import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHandler } from 'react-native';

import HomeTab from 'navigations/routes/Hometab';
import { RouterPathValue } from 'types/router';
import { goBack } from 'utils/navigation';
import { PATH } from 'configs/routerPath';
import { Login } from 'screens/Login';
import AddStaff from 'containers/Staff/addStaff';
import { COLORS } from 'theme/theme';
import { Icon } from '@rneui/base';
import Payslip from 'containers/payslip';
import AddOrEditLeave from 'containers/leave/AddOrEditLeave';
import { useAppDispatch, useAppSelector } from 'hooks';
import { staffSelector } from 'redux/slice/staff.slice';

import { actions } from '../../redux/slice/staff.slice';
import ViewLeaves from 'containers/leave/ViewLeaves'

type RoutesProps = {
  initialRoute: {
    stackName: RouterPathValue;
    routeName: RouterPathValue;
    params?: object;
  };
};

const Stack = createStackNavigator();

export const Routes: React.FC<RoutesProps> = ({ initialRoute }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', goBack);

    return () => backHandler.remove();
  }, []);
  const { isEdit } = useAppSelector(staffSelector);

  const dispatch = useAppDispatch();
  return (
    <Stack.Navigator initialRouteName={initialRoute.stackName}>
      <Stack.Screen
        name={PATH.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={PATH.HOMETAB}
        component={HomeTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={PATH.ADDSTAFF}
        component={AddStaff}
        options={{
          headerTitle: isEdit ? 'Sửa nhân viên' : 'Thêm nhân viên',
          headerStyle: {
            backgroundColor: COLORS.Green,
          },
          headerTitleStyle: { color: COLORS.White },
          headerLeft: () => (
            <Icon
              onPress={() => {
                goBack();
                dispatch(actions.setIsEdit(false));
              }}
              color={COLORS.White}
              name="left"
              type="ant-design"
            />
          ),
        }}
      />
      <Stack.Screen
        name={PATH.PAYSLIP}
        component={Payslip}
        options={{
          headerTitle: 'Bảng lương',
          headerStyle: {
            backgroundColor: COLORS.Green,
          },
          headerTitleStyle: { color: COLORS.White },
          headerLeft: () => (
            <Icon
              onPress={() => {
                goBack();
              }}
              color={COLORS.White}
              name="left"
              type="ant-design"
            />
          ),
        }}
      />

      <Stack.Screen
        name={PATH.LEAVE}
        component={AddOrEditLeave}
        options={{
          headerTitle: 'Xin nghỉ phép',
          headerStyle: {
            backgroundColor: COLORS.Green,
          },
          headerTitleStyle: { color: COLORS.White },
          headerLeft: () => (
            <Icon
              onPress={() => {
                goBack();
              }}
              color={COLORS.White}
              name="left"
              type="ant-design"
            />
          ),
        }}
      />

<Stack.Screen
        name={PATH.VIEWLEAVE}
        component={ViewLeaves}
        options={{
          headerTitle: 'Xem nghỉ phép',
          headerStyle: {
            backgroundColor: COLORS.Green,
          },
          headerTitleStyle: { color: COLORS.White },
          headerLeft: () => (
            <Icon
              onPress={() => {
                goBack();
              }}
              color={COLORS.White}
              name="left"
              type="ant-design"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};
