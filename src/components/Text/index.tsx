import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Text, TextProps } from '@rneui/themed';
import omit from 'lodash/omit';

import { useStyles } from './styles';

interface IProps extends TextProps {
  id?: string;
}

export const AppText: React.FC<IProps> = ({ id, children, ...props }) => {
  const styles = useStyles();

  const intl = useIntl();

  const isMessageIdDefined = Object.prototype.hasOwnProperty.call(intl.messages, id as PropertyKey);

  return (
    <Text allowFontScaling={false} style={[styles.text, props.style]} {...omit(props, 'style')}>
      {isMessageIdDefined ? <FormattedMessage id={id} /> : children}
    </Text>
  );
};
