import React from 'react';
import {View, Text} from 'react-native';
import s from '../Styles/HeaderStyles';

const Header = () => {
    return (
        <View style={s.headerContainer}>
            <Text style={s.header}>Crypto Currency App</Text>
        </View>
    );
};

export default Header;
