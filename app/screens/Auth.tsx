import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useTailwind } from 'tailwind-rn/dist';
import { useAuth } from '../hooks/useAuth';
import Loader from '../components/ui/Loader';
import Field from '../components/ui/Field';

interface IData {
  email: string;
  password: string;
}

export const Auth = () => {
  const { isLoading } = useAuth();
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);

  const tw = useTailwind();
  return (
    <View style={tw('h-full w-full bg-white')}>
      <View style={tw('mx-5 justify-center items-center h-full')}>
        <View style={tw('w-9/12')}>
          <Text style={tw('text-center text-gray-800 text-2xl font-bold mb-2')}>
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
                isSecure={false}
              />
            </>
          )}
        </View>
      </View>
    </View>
  );
};
