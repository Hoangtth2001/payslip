import React from 'react';
import { View } from 'react-native';

import { AppText } from 'components/Text';
import { useStyles } from './styles';

export const UserAccount: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <AppText style={styles.text}>UserAccount</AppText>
    </View>
  );
};
