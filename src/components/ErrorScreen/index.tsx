import React from 'react';
import { View, Image } from 'react-native';

import { useStyles } from './styles';

const ErrorInternetScreen = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <Image style={styles.introImageStyle} source={require('assets/errorInternet.png')} />
    </View>
  );
};

export default ErrorInternetScreen;
