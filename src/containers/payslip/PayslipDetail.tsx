import React from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';
import { AppText } from 'components/Text';
import { useAppSelector } from 'hooks';
import { authSelector } from 'redux/slice/auth.slice';

const Payslip = () => {
  const styles = useStyles();

  const { user } = useAppSelector(authSelector);
  return (
    <View style={styles.container}>
      {/* title */}
      <View style={styles.titleContainer}>
        <AppText style={styles.title}>Phiếu lương</AppText>
        <AppText>{user?.role}</AppText>
      </View>
      {/* infor */}
      <View style={styles.inforContainer}>
        <View style={styles.infor}>
          <AppText>Họ và tên</AppText>
          <AppText>Trần Thanh Hoàng</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Mã nhân viên</AppText>
          <AppText>70546034</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Chức vụ</AppText>
          <AppText>PM</AppText>
        </View>
      </View>
      {/* salary */}
      <View style={styles.salaryContainer}>
        <View style={styles.infor}>
          <AppText>Ngày nghỉ phép</AppText>
          <AppText style={styles.money}>1</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Ngày nghỉ không lương</AppText>
          <AppText style={styles.money}>1</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Lương cơ bản</AppText>
          <AppText style={styles.money}>5 000 000 VND</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Phụ cấp</AppText>
          <AppText style={styles.money}>500 000 VND</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Khấu trừ BHYT,XH,TN (10.5%)</AppText>
          <AppText style={styles.money}>557 000 VND</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Trừ lương ngày nghỉ</AppText>
          <AppText style={styles.money}>557 000 VND</AppText>
        </View>
      </View>
      <View style={styles.salaryContainer}>
        <View style={styles.infor}>
          <AppText>Tổng thu về tháng 12</AppText>
          <AppText style={styles.money}>557 000 VND</AppText>
        </View>
      </View>
    </View>
  );
};

export default Payslip;
