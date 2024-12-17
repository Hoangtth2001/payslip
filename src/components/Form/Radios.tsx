import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox, Text } from '@rneui/themed';
import { Controller, useFormContext } from 'react-hook-form';
import { IOption } from 'types/auth';

type RadiosGroupProps = {
  name: string;
  options: IOption[];
  label?: string;
};

const Radios = ({ name, options, label }: RadiosGroupProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={styles.container}>
          {label && <Text style={styles.label}>{label}</Text>}
          <View style={styles.radios}>
            {options.map((option, index) => (
              <CheckBox
                key={index}
                title={option.label}
                checked={value === option.value}
                onPress={() => onChange(option.value)}
                containerStyle={styles.checkBoxContainer}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checkedColor="#007bff"
              />
            ))}
          </View>
          {error && <Text style={styles.error}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

export default Radios;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  radios:{
    display:"flex",
    flexDirection:"row"
  },

  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
