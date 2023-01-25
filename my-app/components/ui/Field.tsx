import { View, Text, TextInput } from 'react-native';
import React, { FC } from 'react';

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: FC<IField> = ({ onChange, placeholder, val, isSecure }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      showSoftInputOnFocus={false}
      autoCapitalize="none"
      className='rounded-xl bg-gray-200 mt-3 p-3 w-full'
    />
  );
};

export default Field;
