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
const userService = new UserService()
import { connect } from 'react-redux'
import {login} from '../../actions/login'
var Navigation
import BaseStyle from '../../common/style'
import SplashScreen from 'react-native-splash-screen'
import Orientation from 'react-native-orientation'
import SharePOP from '../../component/sharePopView'

class Login extends Component {
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
            isBindOther: false,
            username: '',
            password: ''
        }
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
        // this.pswBlock = this.pswBlock.bind(this)
    }

    componentWillMount() {

    }

    componentDidMount() {
        SplashScreen.hide()
    }

     componentWillReceiveProps (nextProps, nextState) {
        // console.log(nextProps)
        if(nextProps.login.isLoggedIn != this.props.isLoggedIn && nextProps.login.isLoggedIn === true && nextProps.login.status == 'LOGGED_IN'){
            this.setState({
                isFreshing: false
            })
            // Alert.alert('登陆成功')
            Navigation.navigate('Index')
            return false
        }

        if (nextProps.login.isFreshing) {
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
        // if(nextProps.status == 'doing'){
        //     //loggining
        //     this.refs.modal.open();
        //     return false;
        // }
        // if(nextProps.status == 'error' || nextProps.status == 'done'){
        //     this.refs.modal.close();
        //     return false;
        // }

        return true
    }

    skipToIndex = () => {
        // userService.GetTest({id:1})
        if (this.state.username == '' || this.state.password == '' ) {
            Alert.alert('请填写用户名和密码')
            return false
        }
        let params = {}
        params.username = 'lei'
        params.password = '123456'
        this.props.dispatch(login(params))
    }

    skipToRegister = () => {
        const {navigation} = this.props
        // console.log(navigation)
        navigation.navigate('Register')
    }

    skipToPWS = () => {
        const {navigation} = this.props
        navigation.navigate('FindPassWord')
    }

    CloseMask = () => {
        this.setState({isBindOther:false})
    }

    OpenMask = () => {
        this.setState({isBindOther:true})
    }

    render() {
        Navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <Loading size={'large'} visible={this.state.isFreshing}/>
                <View style={styles.registerView}>
                    <TouchableWithoutFeedback onPress={this.skipToRegister.bind(this)}>
                        <View>
                            <Text style={styles.registerText}>{'注册'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <Text style={styles.titleTxt}>{'登陆'}</Text>
                <View style={styles.textView}>
                    {/*<Text style={styles.userTxt}>{'用户名'}</Text>*/}
                    <TextInput
                        placeholder='用户名'
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        style={styles.input}
                        onChangeText={(txt) => this.setState({
                            username: txt
                        })}
                    />
                </View>
                <View style={styles.textView}>
                    {/*<Text style={styles.userTxt}>{'密    码'}</Text>*/}
                    <TextInput
                        placeholder='密    码'
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(txt) => this.setState({
                            password: txt
                        })}
                    />
                </View>
                <TouchableWithoutFeedback onPress={this.skipToIndex.bind(this)}>
                    <View style={[styles.loginBtnView, BaseStyle.txtCenter]}>
                        <Text style={styles.loginTxt}>{'登  陆'}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.loginOptView}>
                    <TouchableWithoutFeedback onPress={this.skipToPWS.bind(this)}>
                        <View>
                            <Text style={[styles.resetPwdTxt, styles.bottomTxt]}>{'忘记密码？'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.OpenMask}>
                        <View>
                            <Text style={[styles.reloginTxt, styles.bottomTxt]}>{'其他方式登陆'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {
                    this.state.isBindOther == true?(
                        <SharePOP Login={this.skipToIndex} cancel={this.CloseMask} />
                    ) : ( null )
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    registerView: {
        height: 30,
        marginTop: 60,
        flexDirection: 'row-reverse'
    },
    registerText: {
        fontSize: 30,
        color: '#333333',
        marginRight: 35
    },
    titleTxt: {
        marginTop: 65,
        fontSize: 60,
        fontWeight: '900',
        marginLeft: 35
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
        width: 300
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
    loginTxt: {
        color: '#ffffff',
        fontSize: 30
    },
    loginOptView: {
        marginTop: 65,
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    resetPwdTxt: {
        marginLeft: 35
    },
    reloginTxt: {
        marginRight: 35
    },
    bottomTxt: {
        fontSize: 35,
        color: '#007aff'
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
