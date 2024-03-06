import React, { memo, useState } from 'react';
import { Input as RNEInput, InputProps, Icon } from '@rneui/themed';
import { Controller, useFormContext } from 'react-hook-form';
import { useIntl } from 'react-intl';

interface IInputProps extends InputProps {
  name: string;
  password?: boolean;
}

const Input: React.FC<IInputProps> = ({ name, password, ...props }) => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const methods = useFormContext();

  const intl = useIntl();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <RNEInput
          onBlur={onBlur}
          onChangeText={onChange}
          value={value}
          ref={ref}
          errorStyle={{ color: 'red' }}
          errorMessage={error ? intl.formatMessage({ id: error.message }) : undefined}
          rightIcon={
            password ? (
              <Icon
                name={isPasswordSecure ? 'visibility-off' : 'visibility'}
                size={28}
                onPress={() => setIsPasswordSecure((prev) => !prev)}
              />
            ) : undefined
          }
          secureTextEntry={password && isPasswordSecure}
          {...props}
        />
      )}
    />
  );
};

export default memo(Input);
