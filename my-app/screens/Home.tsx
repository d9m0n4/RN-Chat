import { View, Text } from 'react-native';
import React from 'react';
import Header from "../components/Header";
import {StatusBar} from "expo-status-bar";

 export const Home = () => {
  return (
    <View>
        <StatusBar style={'auto'} />
        <Header />
      <Text>Home</Text>
    </View>
  );
};
