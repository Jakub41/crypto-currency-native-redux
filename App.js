import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/components'
import {  Header } from './src/components';


export default class App extends React.Component {
  render() {
    return (
        <Provider store={Store}>
            <View>
                <Header />
            </View>
        </Provider>
    );
  }
}