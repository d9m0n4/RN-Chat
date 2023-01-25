import {View, Text, Pressable} from 'react-native';
import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Loader from '../components/ui/Loader';
import Field from '../components/ui/Field';
import Button from "../components/ui/Button";

interface IData {
  email: string;
  password: string;
}

 export const Auth = () => {
  const { isLoading, login, register  } = useAuth();
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);

  const authHandler = async () => {
  const {email, password} = data

    if (isReg) {
      await register(email, password)
    } else {
      await login(email, password)
    }

    setData({} as IData)
  }

  return (
    <View className={'h-full w-full pt-16 bg-white'}>
      <View className={'mx-5 justify-center items-center'}>
        <View className={'w-9/12'}>
          <Text className={'text-center text-gray-800 text-2xl font-bold mb-2'}>
            {isReg ? 'SignUp' : 'SignIn'}
          </Text>

          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Field
                onChange={(val) => setData({ ...data, email: val })}
                placeholder="Enter email"
                val={data.email}
              />
              <Field
                onChange={(val) => setData({ ...data, password: val })}
                placeholder="Enter password"
                val={data.password}
                isSecure={true}
              />

              <Button onPress={() => authHandler()} title={'123'}/>

              <Pressable onPress={() => setIsReg(!isReg)}>
                <Text className={'text-gray-800 opacity-30 text-right text-sm'}>{isReg ? 'Login' : 'Register'}</Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};
