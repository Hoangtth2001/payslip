import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { AppText } from 'components/Text';
import { useStyles } from './styles';
import { Button, Icon } from '@rneui/base';
import { push } from 'utils/navigation';
import { PATH } from 'configs/routerPath';
import { COLORS } from 'theme/theme';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getStaffList, staffSelector } from 'redux/slice/staff.slice';

import { actions } from '../../redux/slice/staff.slice';
import { AuthUserResponse } from 'types/auth';

export const UserAccount: React.FC = () => {
  const styles = useStyles();
  const { staffList } = useAppSelector(staffSelector);
  const dispatch = useAppDispatch();

  const handlePressEdit = (data: AuthUserResponse) => {
    dispatch(actions.setFormStaff(data));
    dispatch(actions.setIsEdit(true));
    push(PATH.ADDSTAFF);
  };

  return (
    <View style={styles.container}>
      <View>
        <AppText style={styles.title}>Danh sách nhân sự</AppText>
        <View style={styles.table}>
          <View style={styles.tableHead}>
            {/* table head */}

            <View style={{ ...styles.tableHeadElement, width: '10%' }}>
              <AppText style={styles.tableHeadText}>stt</AppText>
            </View>
            <View style={{ ...styles.tableHeadElement, width: '10%' }}>
              <AppText style={styles.tableHeadText}>mã nv</AppText>
            </View>
            <View style={{ ...styles.tableHeadElement, width: '30%' }}>
              <AppText style={styles.tableHeadText}>Họ tên</AppText>
            </View>
            <View style={{ ...styles.tableHeadElement, width: '20%' }}>
              <AppText style={styles.tableHeadText}>Chức vụ</AppText>
            </View>

            <View style={{ ...styles.tableHeadElement, width: '30%' }}>
              <AppText style={styles.tableHeadText}>Hành động</AppText>
            </View>
          </View>

          <View style={styles.tableBody}>
            {staffList?.map((item, index) => (
              <View key={index + 1} style={styles.tableHead}>
                {/* table row map data */}
                <View style={{ ...styles.tablebodyEl, width: '10%' }}>
                  <AppText>{index + 1}</AppText>
                </View>
                <View style={{ ...styles.tablebodyEl, width: '10%' }}>
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
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    gap: 10,
                  }}
                >
                  <Button buttonStyle={{ backgroundColor: 'transparent' }} onPress={() => handlePressEdit(item)}>
                    <Icon name="edit" type="ant-design" size={20} color="#2F6B73" />
                  </Button>
                  <Button buttonStyle={{ backgroundColor: 'transparent' }}>
                    <Icon name="delete" type="ant-design" size={20} color="#BC3433" />
                  </Button>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View>
        <Button
          buttonStyle={{
            borderRadius: 50,
            marginTop: 5,
            backgroundColor: COLORS.Green,
          }}
          onPress={() => {
            push(PATH.ADDSTAFF);
          }}
        >
          <Icon name="adduser" type="ant-design" />
        </Button>
      </View>
    </View>
  );
};
