import React from 'react';
import { View } from 'react-native';

import { AppText } from 'components/Text';
import { useStyles } from './styles';
import { Button, Icon } from '@rneui/base';
import { COLORS } from 'theme/theme';
import { push } from 'utils/navigation';
import { PATH } from 'configs/routerPath';
import { useAppDispatch, useAppSelector } from 'hooks';
import { staffSelector } from 'redux/slice/staff.slice';
import { AuthUserResponse } from 'types/auth';

import { getLeavesbyId } from '../../redux/slice/leaves.slice';

export const Notification: React.FC = () => {
  const styles = useStyles();
  const { staffList } = useAppSelector(staffSelector);

  const dispatch = useAppDispatch();

  const handleOnpressView = async (data: AuthUserResponse) => {
    const resultAction = await dispatch(getLeavesbyId(data.employeeId));
    if (getLeavesbyId.fulfilled.match(resultAction)) {
      push(PATH.VIEWLEAVE);
    } else {
    }
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

            <View style={{ ...styles.tableHeadElement, width: '40%' }}>
              <AppText style={styles.tableHeadText}>Họ và tên</AppText>
            </View>
            <View style={{ ...styles.tableHeadElement, width: '20%' }}>
              <AppText style={styles.tableHeadText}>Mã nv</AppText>
            </View>

            <View style={{ ...styles.tableHeadElement, width: '30%' }}>
              <AppText style={styles.tableHeadText}>Hành động</AppText>
            </View>
          </View>

          <View style={styles.tableBody}>
            {staffList?.map((item, index) => (
              <View style={styles.tableHead}>
                {/* table row map data */}
                <View style={{ ...styles.tablebodyEl, width: '10%' }}>
                  <AppText>{index + 1}</AppText>
                </View>
                <View style={{ ...styles.tablebodyEl, width: '40%' }}>
                  <AppText>{item.name}</AppText>
                </View>
                <View style={{ ...styles.tablebodyEl, width: '20%' }}>
                  <AppText>{item.employeeId}</AppText>
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
                  <Button
                    buttonStyle={{ backgroundColor: 'transparent' }}
                    onPress={() => {
                      handleOnpressView(item);
                    }}
                  >
                    <Icon name="edit" type="ant-design" size={20} color="#2F6B73" />
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
            push(PATH.LEAVE);
          }}
        >
          <Icon name="addfile" type="ant-design" />
        </Button>
      </View>
    </View>
  );
};
