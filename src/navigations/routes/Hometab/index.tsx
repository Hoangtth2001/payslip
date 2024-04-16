import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon, useTheme } from '@rneui/themed';

import { Notification } from 'screens/Notification';
import { UserAccount } from 'screens/UserAccount';
import { Favourite } from 'screens/Favourite';
import { appColors } from 'constants/Colors';
import { PATH } from 'configs/routerPath';
import { AppText } from 'components/Text';
import { useStyles } from './styles';
import { Home } from 'screens/Home';
import { View } from 'react-native';
import { Appicons } from 'assets';

const { AccountActiveIcon, AccountIcon, HomeActiveIcon, HomeIcon } = Appicons;

const Tab = createBottomTabNavigator();

const HomeTab: React.FC = () => {
  const styles = useStyles();

  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name={PATH.HOME}
        component={Home}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <AppText style={{ color: focused ? appColors.main : theme.colors.divider, fontSize: 12 }}>
              Trang chủ
            </AppText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.activeTabBar}>{focused ? <HomeActiveIcon /> : <HomeIcon />}</View>
          ),
        }}
      />

      <Tab.Screen
        name={PATH.FAVOURITE}
        component={Favourite}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <AppText style={{ color: focused ? appColors.main : theme.colors.divider, fontSize: 12 }}>
              Yêu thích
            </AppText>
          ),
          tabBarIcon: ({ focused }) => (
            <View style={styles.activeTabBar}>
              <Icon type="fontisto" name="heart-alt" color={focused ? appColors.main : appColors.DarkGrey} size={25} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={PATH.NOTIFICATION}
        component={Notification}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <AppText style={{ color: focused ? appColors.main : theme.colors.divider, fontSize: 12 }}>
              Thông báo
            </AppText>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.activeTabBar}>
              <Icon
                type="ionicon"
                name="notifications-outline"
                color={focused ? appColors.main : appColors.DarkGrey}
                size={30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={PATH.ACCOUNT}
        component={UserAccount}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <AppText style={{ color: focused ? appColors.main : theme.colors.divider, fontSize: 12 }}>
              Tài khoản
            </AppText>
          ),

          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.activeTabBar}>{focused ? <AccountActiveIcon /> : <AccountIcon />}</View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeTab;
