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
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import UserService from '../../services/userService'
import Loading from '../../common/loading'
var Navigation
import BaseStyle from '../../common/style'
export default class FindPassWord extends Component {
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }
    constructor(props) {
        super(props);

        this.state = {
            isFreshing: false,
            text: ''
        }
    }

    clickToGoBack = () => {
        const {navigation} = this.props
        navigation.goBack()
    }

    clickToSubmit = () => {
        if (this.state.text == '') {
            Alert.alert('请输入邮箱或手机号')
            return false
        }
        const {navigation} = this.props
        Alert.alert('提交成功')
        navigation.goBack()
    }

    render() {
        return (
            <View style={styles.container}>
                <Loading size={'large'} visible={this.state.isFreshing}/>
                <TouchableWithoutFeedback onPress={this.clickToGoBack.bind(this)}>
                    <View style={{height: 50, marginTop: 55}}>
                        <Image style={styles.backView} source={require('../../images/return.png')}/>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.titleTxt}>{'找回密码'}</Text>
                <Text style={styles.subTitleTxt}>{'请输入您的邮箱或手机号'}</Text>
                <View style={styles.textView}>
                    {/*<Text style={styles.userTxt}>{'请输入邮箱或手机号'}</Text>*/}
                    <TextInput
                        placeholder='请输入邮箱或手机号'
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={(txt) => this.setState({
                            text: txt
                        })}
                    />
                </View>
                <TouchableWithoutFeedback onPress={this.clickToSubmit.bind(this)}>
                    <View style={[styles.loginBtnView, BaseStyle.txtCenter]}>
                        <Text style={styles.loginTxt}>{'提  交'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    backView: {
        height: 50,
        width: 50,
        marginLeft: 35
    },
    titleTxt: {
        marginTop: 50,
        fontSize: 60,
        fontWeight: '900',
        marginLeft: 35
    },
    subTitleTxt: {
        marginLeft: 35,
        marginTop: 15,
        fontSize: 30,
        color: '#999999'
    },
    textView: {
        marginTop: 60,
        marginLeft: 35,
        marginRight: 35,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f0f0f7',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        fontSize: 30,
        color: '#999999',
        marginLeft: 30,
        width: '90%'
    },
    userTxt: {
        marginLeft: 40,
        fontSize: 30,
        color: '#333333'
    },
    loginBtnView: {
        height:80,
        marginTop: 90,
        marginLeft: 35,
        marginRight: 35,
        borderRadius:40,
        backgroundColor: '#007aff'
    },
    loginTxt: {
        color: '#ffffff',
        fontSize: 30
    }
});

