import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHandler } from 'react-native';

import { RouterPathValue } from 'types/router';
import { goBack } from 'utils/navigation';
import { PATH } from 'configs/routerPath';
import { Login } from 'screens/Login';
import { Home } from 'screens/Home';

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

  return (
    <Stack.Navigator initialRouteName={initialRoute.stackName}>
      <Stack.Screen
        name={PATH.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={PATH.HOME} component={Home} />
    </Stack.Navigator>
  );
};
