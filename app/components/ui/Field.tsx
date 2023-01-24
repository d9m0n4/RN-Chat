import { View, Text, TextInput } from 'react-native';
import React, { FC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: FC<IField> = ({ onChange, placeholder, val, isSecure }) => {
  const tw = useTailwind();
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      showSoftInputOnFocus={false}
      autoCapitalize="none"
      style={tw('rounded-xl bg-gray-100 mt-3 p-3 w-full')}
    />
  );
};

export default Field;
