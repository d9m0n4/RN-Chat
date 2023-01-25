import { View, Text, ScrollView } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';

interface ILayout {
  isScrollView?: boolean;
}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, isScrollView }) => {
  return <View className={'h-full w-full pt-16 bg-white'}>{isScrollView ? <ScrollView>{children}</ScrollView> : children}</View>;
};

export  default Layout