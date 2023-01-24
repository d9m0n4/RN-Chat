import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import { Auth, Home, More, Payments, Profile, Services, Support } from '../screens';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  const { user } = useAuth();

  console.log(Navigation.displayName);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="Payments" component={Payments} />
            <Stack.Screen name="More" component={More} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
