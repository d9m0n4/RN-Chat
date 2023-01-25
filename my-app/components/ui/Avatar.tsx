import React, {FC} from 'react';

import {Text, View} from 'react-native';
interface IAvatar {
    name?: string,
    size?: 'small' | 'large',
}

const Avatar:FC<IAvatar> = ({size = 'small', name}) => {
    const isSmall = size === 'small'
    return (
        <View className={`rounded-full bg-gray-300 ${isSmall ? 'w-9 h-9 mr-3' : 'w-12 h-12'} items-center justify-center`}>
            <Text className={`${isSmall ? 'text-lg' : 'text-xl'} font-medium`}>{name?.slice(0, 1)}</Text>
        </View>
    );
};

export default Avatar