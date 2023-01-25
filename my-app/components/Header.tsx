import React, {FC} from 'react';

import {Text, TouchableOpacity, View} from 'react-native';
import Padding from "./ui/Padding";
import Avatar from "./ui/Avatar";
import {useNavigation} from "@react-navigation/native";

import {Entypo} from '@expo/vector-icons'
import useProfile from "../hooks/useProfile";
import Loader from "./ui/Loader";

const Header:FC = () => {

    const navigation = useNavigation()
    const {isLoading, name} = useProfile()
    // @ts-ignore
    return isLoading ? <Loader /> : (
        <Padding className={'flex-row items-center'}>
           <Avatar />
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} className={'flex-row items-end'}>
                <Text className={'text-2xl text-gray-800 font-bold'}>{name}</Text>
                <Entypo name={'chevron-small-right'} className={'text-gray-800'} />
            </TouchableOpacity>
        </Padding>
    );
};

export  default  Header