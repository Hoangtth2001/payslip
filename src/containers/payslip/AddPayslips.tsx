import React, { useEffect, useState } from 'react';
import { Button, useThemeMode } from '@rneui/themed';
import { View } from 'react-native';

import { AppText } from 'components/Text';
import { useStyles } from './styles';
import { Icon } from '@rneui/base';
import { push, reset } from 'utils/navigation';
import { PATH } from 'configs/routerPath';
import { useAppDispatch, useAppSelector } from 'hooks';
import { COLORS } from 'theme/theme';
import { actions } from '../../redux/slice/auth.slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axiosInstance from 'axios/http';
import { getStaffList, staffSelector } from 'redux/slice/staff.slice';

interface IPayrolls {
  employeeId: string;
  name: string;
  position: string;
  basicSalary: string;
  allowance: string;
  netSalary: string;
  leaveDays: string;
  unpaidLeave: string;
  month: string;
}

export const Favourite: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const hanldleLogout = async () => {
    dispatch(actions.logout());
    await AsyncStorage.removeItem('employeeId');
    reset(PATH.LOGIN);
  };

  const [payrollsList, setPayrollsList] = useState([]);

  const { staffList } = useAppSelector(staffSelector);

  const getEmployeeLeaves = async () => {
    try {
      const res = await axiosInstance.get('payrolls');

      if (res.data.status) {
        setPayrollsList(res.data.content);
      } else setPayrollsList([]);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllStaff = async () => {
    const resultAction = await dispatch(getStaffList());
    if (getStaffList.fulfilled.match(resultAction)) {
    }
  };
  useEffect(() => {
    getAllStaff();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View>
          <AppText style={styles.title}>Danh sách nhân sự</AppText>
          <View style={styles.table}>
            <View style={styles.tableHead}>
              {/* table head */}

              <View style={{ ...styles.tableHeadElement, width: '10%' }}>
                <AppText style={styles.tableHeadText}>stt</AppText>
              </View>
              <View style={{ ...styles.tableHeadElement, width: '20%' }}>
                <AppText style={styles.tableHeadText}>mã nv</AppText>
              </View>
              <View style={{ ...styles.tableHeadElement, width: '30%' }}>
                <AppText style={styles.tableHeadText}>Họ tên</AppText>
              </View>
              <View style={{ ...styles.tableHeadElement, width: '20%' }}>
                <AppText style={styles.tableHeadText}>chức vụ</AppText>
              </View>

              <View style={{ ...styles.tableHeadElement, width: '20%' }}>
                <AppText style={styles.tableHeadText}>Hành động</AppText>
              </View>
            </View>

            <View style={styles.tableBody}>
              {staffList?.map((item, index) => (
                <View key={index} style={styles.tableHead}>
                  {/* table row map data */}
                  <View style={{ ...styles.tablebodyEl, width: '10%' }}>
                    <AppText>{index + 1}</AppText>
                  </View>
                  <View style={{ ...styles.tablebodyEl, width: '20%' }}>
                    <AppText>{item.employeeId}</AppText>
                  </View>
                  <View style={{ ...styles.tablebodyEl, width: '30%' }}>
                    <AppText>{item.name}</AppText>
                  </View>
                  <View style={{ ...styles.tablebodyEl, width: '20%' }}>
                    <AppText>{item.position}</AppText>
                  </View>

                  <View
                    style={{
                      ...styles.tablebodyEl,
                      width: '20%',
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      gap: 10,
                    }}
                  >
                    <Button
                      buttonStyle={{ backgroundColor: 'transparent' }}
                      onPress={() => {
                        push(PATH.PAYSLIP);
                      }}
                    >
                      <Icon name="list" type="entypo" size={20} color="#BC3433" />
                    </Button>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>

        <Button buttonStyle={{ backgroundColor: COLORS.Green }} onPress={hanldleLogout}>
          <Icon name="logout" type="ant-design" /> Đăng xuất
        </Button>
      </View>
    </View>
  );
};
