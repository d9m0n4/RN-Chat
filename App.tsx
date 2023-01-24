import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './app/navigation/Navigation';
import { AuthProvider } from './app/providers/AuthProvider';

export const App = () => {
  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </>
  );
};
