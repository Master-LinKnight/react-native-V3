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
import { connect } from 'react-redux'
import {login} from '../../actions/login'
var Navigation
class Login extends Component {
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

    shouldComponentUpdate (nextProps, nextState) {
        console.log(nextProps)
        if(nextProps.login.isLoggedIn != this.props.isLoggedIn && nextProps.login.isLoggedIn === true){
            Navigation.navigate('Index')
            return false
        }
        // if(nextProps.status == 'doing'){
        //     //loggining
        //     this.refs.modal.open();
        //     return false;
        // }
        // if(nextProps.status == 'error' || nextProps.status == 'done'){
        //     this.refs.modal.close();
        //     return false;
        // }

        return true;
    }

    skipToIndex = () => {
        // userService.GetTest({id:1})
        let params = {}
        params.username = 'lei'
        params.password = '123456'
        // userService.PostLogin(params).then(
        //     (res) => {
        //         console.log(res)
        //     }
        // )
        // Navigation.navigate('Index')
        this.props.dispatch(login(params))
    }

    render() {
        Navigation = this.props.navigation;
        return (
            <View style={styles.loginBtnView}>
                <TouchableWithoutFeedback onPress={this.skipToIndex}>
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

function mapStateToProps(state) {
    const { login } = state
    return {
        login
    }
}

export default connect(mapStateToProps)(Login)
