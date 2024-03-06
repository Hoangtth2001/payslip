import React from 'react';
import { Text, Button, useThemeMode } from '@rneui/themed';
import { View } from 'react-native';

import { useStyles } from './styles';

export const Home: React.FC = () => {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <View style={styles.container}>
      <Text h3>Start Using RNE </Text>
      <Text style={styles.text}>Open up App.tsx to start working on your app!</Text>
      <Button onPress={handleOnPress}>Switch Theme</Button>
    </View>
  );
};
