import React from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';
import { AppText } from 'components/Text';

import { useAppSelector } from 'hooks';
import { leavesSelector } from 'redux/slice/leaves.slice';
import { formatDate } from 'types/common';

const ViewLeaves = () => {
  const styles = useStyles();

  const { infor } = useAppSelector(leavesSelector);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>Xin nghỉ</AppText>
      </View>

      <View style={styles.inforContainer}>
        <View style={styles.infor}>
          <AppText>Họ và tên</AppText>
          <AppText>{infor?.name}</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Mã nhân viên</AppText>
          <AppText>{infor?.employeeId}</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Chức vụ</AppText>
          <AppText>{infor?.position}</AppText>
        </View>
      </View>
      <View>
        <View>
          {infor?.leaveDays?.map((item, index) => {
            return (
              <View key={index} style={styles.inforContainer}>
                <View style={styles.infor}>
                  <AppText>Từ Ngày</AppText>
                  <AppText>{formatDate(item.startDate)}</AppText>
                </View>
                <View style={styles.infor}>
                  <AppText>Đến Ngày</AppText>
                  <AppText>{formatDate(item.endDate)}</AppText>
                </View>
                <View style={styles.infor}>
                  <AppText>Lý do</AppText>
                  <AppText>{item.reason}</AppText>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ViewLeaves;
