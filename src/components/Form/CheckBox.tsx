import React, { memo } from 'react';
import { CheckBoxProps, CheckBox as RNECheckBox } from '@rneui/themed';
import { Controller, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';
import { View } from 'react-native';
import { omitBy } from 'lodash';

import { appColors } from 'constants/Colors';
import { AppText } from 'components/Text';

interface ICheckBoxProps extends Omit<CheckBoxProps, 'checked'> {
  name: string;
  label?: React.ReactNode;
}

const CheckBox: React.FC<ICheckBoxProps> = ({ name, label, ...props }) => {
  const methods = useFormContext();

  const intl = useIntl();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', display: 'flex', gap: -15 }}>
            <RNECheckBox
              containerStyle={{ backgroundColor: 'transparent' }}
              checked={value}
              onPress={() => {
                onChange(!value);
              }}
              checkedColor={appColors.main}
              {...omitBy(props, ['children'])}
            />
            {label}
          </View>
          {error ? (
            <AppText style={{ color: 'red', marginLeft: 15 }}>{intl.formatMessage({ id: error.message })}</AppText>
          ) : undefined}
        </View>
      )}
    />
  );
};

export default memo(CheckBox);
