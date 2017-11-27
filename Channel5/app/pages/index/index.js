/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    Image,
    StyleSheet,
    ScrollView,
    View,
    TouchableWithoutFeedback,
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator } from 'react-navigation';
// import Drawer from 'react-native-drawer'

export default class Index extends Component {
    constructor(props){
        super(props);

    }
    static navigationOptions = ({navigation}) => {
        return ({
            title:'Index',
            headerTitleStyle: {
                color: '#ffffff',
                fontSize: 36,
                textAlign: 'center',
                marginTop: 16,
            },
            headerStyle: {
                backgroundColor: '#3b5597',
                height: 132
            },
            headerTintColor: '#ffffff',
            headerBackTitle: null,
            // headerLeft: null,
            gesturesEnabled: false
        })
    }

    render() {

        return (
            <View style={styles.container}>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef'
    },
    tabBarIcon: {
        height: 45,
        width: 45,
        marginBottom: 30
    }
});



