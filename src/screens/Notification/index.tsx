import React from 'react';
import { View } from 'react-native';

import { AppText } from 'components/Text';
import { useStyles } from './styles';

export const Notification: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>Notification</AppText>
    </View>
  );
};
