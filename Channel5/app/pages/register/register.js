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
import { connect } from 'react-redux'
import BaseStyle from '../../common/style'
import {register} from "../../actions/register";
class Register extends Component {
    // static navigationOptions = ({navigation}) => {
    //     return ({
    //         header: null
    //     })
    // }
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }
    constructor(props) {
        super(props);

        this.state = {
            isFreshing: false,
            phone: '',
            username: '',
            password: '',
            code: ''
        }
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    }

    componentWillReceiveProps (nextProps, nextState) {
        const {navigation} = this.props
        if(nextProps.register.isLoggedIn != this.props.isLoggedIn && nextProps.register.isLoggedIn === true && nextProps.register.status == 'REGISTER_IN'){
            this.setState({
                isFreshing: false
            })
            navigation.navigate('Index')
            return false
        }

        if (nextProps.register.isFreshing) {
            // console.log('isfreshing')
            this.setState({
                isFreshing: true
            })
            return false
        } else {
            // console.log('not isfreshing')
            this.setState({
                isFreshing: false
            })
            return false
        }

        return true
    }

    clickToGoBack = () => {
        const {navigation} = this.props
        navigation.goBack()
    }

    skipToRegister = () => {
        if (this.state.phone == '') {
            Alert.alert('请输入手机号码')
            return false
        }
        if (this.state.username == '') {
            Alert.alert('请输入用户名')
            return false
        }
        if (this.state.code == '') {
            Alert.alert('请输入验证码')
            return false
        }
        if (this.state.password == '') {
            Alert.alert('请输入密码')
            return false
        }
        let params = {}
        params.username = 'lei'
        params.password = '123456'
        Alert.alert('注册成功')
        this.props.dispatch(register(params))
    }

    getCode = () => {
        const random = Math.random()
        this.setState({
            // code:
            code: String(Number.parseInt(random * 1000000))
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.clickToGoBack.bind(this)}>
                    <View style={{height: 50, marginTop: 55}}>
                        <Image style={styles.backView} source={require('../../images/return.png')}/>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.titleTxt}>{'手机注册'}</Text>
                <View style={[styles.textView, {marginTop: 60}]}>
                    {/*<Text style={styles.userTxt}>{'请输入手机号码'}</Text>*/}
                    <TextInput
                        placeholder='请输入手机号码'
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={(txt) => this.setState({
                            phone: txt
                        })}
                    />
                </View>
                <View style={styles.textContainer}>
                    <View style={[styles.PWSView]}>
                        {/*<Text style={styles.userTxt}>{'请输入验证码'}</Text>*/}
                        <TextInput
                            placeholder='请输入验证码'
                            autoCapitalize={"none"}
                            autoCorrect={false}
                            style={styles.input}
                            onChangeText={(txt) => this.setState({
                                code: txt
                            })}
                            value={this.state.code}
                        />
                    </View>
                    <TouchableWithoutFeedback onPress={this.getCode.bind(this)}>
                        <View style={[styles.getPWSBtnView, BaseStyle.txtCenter]}>
                            <Text style={styles.getPWSBtnTxt}>{'获取验证码'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.textView}>
                    {/*<Text style={styles.userTxt}>{'请输入用户名'}</Text>*/}
                    <TextInput
                        placeholder='请输入用户名'
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={(txt) => this.setState({
                            username: txt
                        })}
                    />
                </View>
                <View style={styles.textView}>
                    {/*<Text style={styles.userTxt}>{'请输入密码'}</Text>*/}
                    <TextInput
                        placeholder='请输入密码'
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(txt) => this.setState({
                            password: txt
                        })}
                    />
                </View>
                <TouchableWithoutFeedback onPress={this.skipToRegister.bind(this)}>
                    <View style={[styles.loginBtnView, BaseStyle.txtCenter]}>
                        <Text style={styles.loginTxt}>{'注    册'}</Text>
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
    textContainer: {
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    PWSView: {
        height: 60,
        width: 400,
        borderRadius: 30,
        backgroundColor: '#f0f0f7',
        alignItems: 'center',
        flexDirection: 'row'
    },
    getPWSBtnView: {
        height: 60,
        width: 270,
        borderRadius: 30,
        backgroundColor: '#007aff'
    },
    textView: {
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f0f0f7',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    getPWSBtnTxt: {
        fontSize: 30,
        color: '#ffffff'
    },
    loginBtnView: {
        height:80,
        marginTop: 90,
        marginLeft: 35,
        marginRight: 35,
        borderRadius:40,
        backgroundColor: '#007aff'
    },
    userTxt: {
        marginLeft: 40,
        fontSize: 30,
        color: '#333333'
    },
    input: {
        fontSize: 30,
        color: '#999999',
        marginLeft: 35,
        width: '90%'
    },
    loginTxt: {
        color: '#ffffff',
        fontSize: 30
    }
})

function mapStateToProps(state) {
    const { register } = state
    return {
        register
    }
}

export default connect(mapStateToProps)(Register)
