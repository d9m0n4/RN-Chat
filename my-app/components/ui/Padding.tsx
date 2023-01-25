import React, {FC, PropsWithChildren} from 'react';

import {Text, View} from 'react-native';

interface IPadding {
    className?: string
}

 const Padding:FC<PropsWithChildren<IPadding>> = ({children, className}) => {
    return (
        <View className={`px-4 ${className}`}>
            {children}
        </View>
    );
};

export default Padding