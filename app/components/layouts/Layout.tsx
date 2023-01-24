import { View, Text, ScrollView } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';

interface ILayout {
  isScrollView?: boolean;
}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, isScrollView }) => {
  return <View>{isScrollView ? <ScrollView>{children}</ScrollView> : children}</View>;
};

export default Layout;
