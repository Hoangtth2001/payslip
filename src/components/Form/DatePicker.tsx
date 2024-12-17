import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { View } from 'react-native';
import { Input as RNEInput, InputProps, Icon } from '@rneui/themed';
import RNDateTimePicker from '@react-native-community/datetimepicker';

type Props = {
  name: string;
  label: string;
};

const DatePicker = ({ name,label }: Props) => {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const methods = useFormContext();

  return (
    <Controller
      name={name}
      control={methods.control}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => {
        // Convert value to a Date object or default to a new Date
        const dateValue = value ? new Date(value) : new Date();

        return (
          <>
            <RNEInput
              onBlur={onBlur}
              onChangeText={(text) => onChange(text)} // Update form state
              value={value ? new Date(value).toLocaleDateString() : ''} // Display formatted date
              ref={ref}
              errorStyle={{ color: 'red' }}
              label={label}
              errorMessage={error?.message || undefined}
              rightIcon={
                <Icon
                  name="date"
                  size={28}
                  type="fontisto"
                  onPress={() => setIsDatePickerVisible(true)}
                />
              }
            />
            {isDatePickerVisible && (
              <RNDateTimePicker
                value={dateValue}
                mode="date"
                onChange={(event, selectedDate) => {
                  setIsDatePickerVisible(false);
                  if (selectedDate) {
                    onChange(selectedDate.toISOString()); // Update form value as ISO string
                  }
                }}
              />
            )}
          </>
        );
      }}
    />
  );
};

export default DatePicker;
