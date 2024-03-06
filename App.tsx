import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNetInfo } from '@react-native-community/netinfo';
import { createTheme, ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import ErrorInternetScreen from 'components/ErrorScreen';
import Locales from 'components/Locales';
import { store } from 'redux/storage';
import RootRoute from 'navigations';

const theme = createTheme({
  lightColors: {},
  darkColors: {},
});

const App = () => {
  const netInfo = useNetInfo();

  return !netInfo.isConnected ? (
    <ErrorInternetScreen />
  ) : (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Locales>
            <StatusBar style="auto" />
            <RootRoute />
          </Locales>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
