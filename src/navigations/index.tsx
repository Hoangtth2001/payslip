import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { navigationRef } from 'utils/navigation';
import { Routes } from './routes';
import { useRoute } from 'hooks';

const RootRoute: React.FC = () => {
  const { initialRoute } = useRoute();

  return (
    <NavigationContainer ref={navigationRef}>
      <Routes initialRoute={initialRoute} />
    </NavigationContainer>
  );
};

export default RootRoute;
