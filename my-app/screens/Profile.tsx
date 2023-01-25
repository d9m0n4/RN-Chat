import { View, Text } from 'react-native';
import React, {FC, PropsWithChildren} from 'react';

 const Profile:FC<PropsWithChildren> = ({children}) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

 export default Profile