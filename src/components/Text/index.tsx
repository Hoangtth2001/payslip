import React from 'react';
import { useFonts, Montserrat_500Medium } from '@expo-google-fonts/montserrat';
import { useIntl, FormattedMessage } from 'react-intl';
import { Text, TextProps } from '@rneui/themed';
import omit from 'lodash/omit';

import { useStyles } from './styles';

interface IProps extends TextProps {
  id?: string;
}

export const AppText: React.FC<IProps> = ({ id, children, ...props }) => {
  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
  });

  const styles = useStyles();

  const intl = useIntl();

  const isMessageIdDefined = Object.prototype.hasOwnProperty.call(intl.messages, id as PropertyKey);

  return (
    <Text
      allowFontScaling={false}
      style={[{ ...styles.text, ...(fontsLoaded && { fontFamily: 'Montserrat_500Medium' }) }, props.style]}
      {...omit(props, 'style')}
    >
      {isMessageIdDefined ? <FormattedMessage id={id} /> : children}
    </Text>
  );
};
