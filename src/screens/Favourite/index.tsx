import React from 'react';
import { Button, useThemeMode } from '@rneui/themed';
import { View } from 'react-native';

import { AppText } from 'components/Text';
import { useStyles } from './styles';

export const Favourite: React.FC = () => {
  const styles = useStyles();
  const { setMode, mode } = useThemeMode();

  const handleOnPress = () => {
    setMode(mode === 'dark' ? 'light' : 'dark');
  };

  return (
    <View style={styles.container}>
      <AppText h3>Start Using RNE </AppText>
      <AppText style={styles.text}>Open up App.tsx to start working on your app!</AppText>
      <Button onPress={handleOnPress}>Switch Theme</Button>
    </View>
  );
};
