import React, { useState } from 'react';
import { View } from 'react-native';
import { useStyles } from './styles';
import { AppText } from 'components/Text';
import { useAppSelector } from 'hooks';
import { payslipSelector } from 'redux/slice/payslip.sice';
import { Button, Icon } from '@rneui/base';
import { Dialog } from '@rneui/themed';
import { IPayslip } from 'types/auth';
import { ScrollView } from 'react-native-gesture-handler';
import { formatCurrencyVND } from 'types/common';

const Payslip = () => {
  const styles = useStyles();
  const { payslip } = useAppSelector(payslipSelector);

  const [visible2, setVisible2] = useState(false);

  const [payslipDetail, setPayslipDetail] = useState<IPayslip>();

  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };
  return (
    <View style={styles.container}>
      <View style={{ marginBlock: 20 }}>
        <AppText style={styles.title}>Danh sách bảng lương</AppText>

        <View style={styles.infor}>
          <AppText>Họ và tên</AppText>
          <AppText>{payslip?.name}</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Mã nhân viên</AppText>
          <AppText>{payslip?.employeeId}</AppText>
        </View>
        <View style={styles.infor}>
          <AppText>Chức vụ</AppText>
          <AppText>{payslip?.position}</AppText>
        </View>
      </View>

      <View style={styles.table}>
        <View style={styles.tableHead}>
          {/* table head */}

          <View style={{ ...styles.tableHeadElement, width: '15%' }}>
            <AppText style={styles.tableHeadText}>Tháng</AppText>
          </View>
          <View style={{ ...styles.tableHeadElement, width: '20%' }}>
            <AppText style={styles.tableHeadText}>Tổng lương</AppText>
          </View>
          <View style={{ ...styles.tableHeadElement, width: '15%' }}>
            <AppText style={styles.tableHeadText}>Số ngày nghỉ</AppText>
          </View>
          <View style={{ ...styles.tableHeadElement, width: '30%' }}>
            <AppText style={styles.tableHeadText}>Lương nhận</AppText>
          </View>

          <View style={{ ...styles.tableHeadElement, width: '20%' }}>
            <AppText style={styles.tableHeadText}>Hành động</AppText>
          </View>
        </View>

        <View style={styles.tableBody}>
          {payslip?.payrolls?.map((item, index) => (
            <View key={index} style={styles.tableHead}>
              {/* table row map data */}
              <View style={{ ...styles.tablebodyEl, width: '15%' }}>
                <AppText>{item.month}</AppText>
              </View>
              <View style={{ ...styles.tablebodyEl, width: '20%' }}>
                <AppText>{item.totalSalary}</AppText>
              </View>
              <View style={{ ...styles.tablebodyEl, width: '15%' }}>
                <AppText>{item.leaveDays}</AppText>
              </View>
              <View style={{ ...styles.tablebodyEl, width: '30%' }}>
                <AppText>{item.netSalary}</AppText>
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
                  title="Open Mutli Action Dialog"
                  onPress={() => {
                    toggleDialog2();
                    setPayslipDetail(item);
                  }}
                >
                  <Icon name="list" type="entypo" size={20} color="#BC3433" />
                </Button>
                <Dialog isVisible={visible2} onBackdropPress={toggleDialog2}>
                  <Dialog.Title title={`Phiếu lương tháng ${payslipDetail?.month}`} titleStyle={styles.title} />
                  <ScrollView>
                    {/* infor */}
                    <View style={styles.inforContainer}>
                      <View style={styles.infor}>
                        <AppText>Họ và tên</AppText>
                        <AppText>{payslip.name}</AppText>
                      </View>
                      <View style={styles.infor}>
                        <AppText>Mã nhân viên</AppText>
                        <AppText>{payslip.employeeId}</AppText>
                      </View>
                      <View style={styles.infor}>
                        <AppText>Chức vụ</AppText>
                        <AppText>{payslip.position}</AppText>
                      </View>
                    </View>
                    {/* salary */}
                    <View style={styles.salaryContainer}>
                      <View style={styles.infor}>
                        <AppText>Tổng ngày nghỉ</AppText>
                        <AppText style={styles.money}>{payslipDetail?.leaveDays}</AppText>
                      </View>
                      <View style={styles.infor}>
                        <AppText>Ngày nghỉ không lương</AppText>
                        <AppText style={styles.money}>{payslipDetail?.unpaidLeave}</AppText>
                      </View>
                      <View style={styles.infor}>
                        <AppText>Lương cơ bản</AppText>
                        <AppText style={styles.money}>
                          {formatCurrencyVND(parseInt(payslipDetail?.basicSalary as string, 10))}
                        </AppText>
                      </View>
                      <View style={styles.infor}>
                        <AppText>Phụ cấp</AppText>
                        <AppText style={styles.money}>
                          {formatCurrencyVND(parseInt(payslipDetail?.allowance as string, 10))}
                        </AppText>
                      </View>
                      <View style={styles.infor}>
                        <AppText>{'Khấu trừ BHYT,\nXH,TN (10.5%)'}</AppText>
                        <AppText style={styles.money}>
                          {formatCurrencyVND(parseInt(payslipDetail?.bhxh as string, 10))}
                        </AppText>
                      </View>
                      <View style={styles.infor}>
                        <AppText>{'Số ngày làm việc'}</AppText>
                        <AppText style={styles.money}>
                          {parseInt(payslipDetail?.workDays as string, 10) -
                            parseInt(payslipDetail?.leaveDays as string, 10)}
                        </AppText>
                      </View>

                      <View style={styles.infor}>
                        <AppText>{'Tổng ngày làm\n việc tiêu chuẩn'}</AppText>
                        <AppText style={styles.money}>{payslipDetail?.workDays}</AppText>
                      </View>
                    </View>
                    <View style={styles.salaryContainer}>
                      <View style={styles.infor}>
                        <AppText>{'Tổng thu về\n tháng 12'}</AppText>
                        <AppText style={styles.money}>
                          {formatCurrencyVND(parseInt(payslipDetail?.netSalary as string, 10))}
                        </AppText>
                      </View>
                    </View>
                  </ScrollView>
                  <Dialog.Actions></Dialog.Actions>
                </Dialog>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Payslip;
