/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Animated,
    Keyboard,
    KeyboardAvoidingView,
    StatusBar,
    Image,
    TextInput,
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import UserService from '../../services/userService'
const userService = new UserService()
var Navigation
export default class Login extends Component {
    // static navigationOptions = ({navigation}) => {
    //     return ({
    //         header: null
    //     })
    // }
    static navigationOptions = ({navigation}) => {
        return ({
            title:'login',
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
    constructor(props) {
        super(props);

        this.state = {
            // isBlock: true
        }
        // this.pswBlock = this.pswBlock.bind(this)
    }

    pswBlock = () => {
        this.setState({
            isBlock: !this.state.isBlock
        })
    };

    skipToPlayground = () => {
        userService.GetTest({id:1})
        Navigation.navigate('Index')
    }

    render() {
        Navigation = this.props.navigation;
        return (
            <View style={styles.loginBtnView}>
                <TouchableWithoutFeedback onPress={this.skipToPlayground}>
                    <View style={styles.loginBtn}>
                        <Text style={{fontSize:28, color:'#3b5597', fontWeight:'bold'}}>{'Login'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#3b5597'
    },
    header: {
        height: 128,
        marginTop: 0,
        backgroundColor: '#272638'
    },
    logo: {
        marginTop: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    inputView: {
        marginTop:30,
        marginLeft:30,
        marginRight:30,
        height:80,
        borderRadius:4,
        backgroundColor:'#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        fontSize: 30,
        marginLeft: 15,
        width:450
    },
    loginBtnView: {
        height:80,
        margin:30,
        borderRadius:4,
        backgroundColor: '#FFFFFF'
    },
    loginBtn: {
        position:'absolute',
        top:10,
        bottom:10,
        left:10,
        right:10,
        borderColor: '#3b5597',
        backgroundColor:'#FFFFFF',
        borderRadius:4,
        borderWidth:3,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
