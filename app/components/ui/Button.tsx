import { View, Text, TouchableHighlight, GestureResponderEvent } from 'react-native';
import React, { FC } from 'react';
import { useTailwind } from 'tailwind-rn/dist';

interface IButton {
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  colors: [string, string];
}

const Button: FC<IButton> = ({ colors = ['bg-yellow-300', '#fbbf24'], onPress, title }) => {
  const tw = useTailwind();
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors[1]}
      style={tw(`${colors[0]} text-gray-800 rounded-xl w-full my-4 py-3`)}>
      <Text>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;
