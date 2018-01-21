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
    Text,
    TextInput
} from 'react-native';
import {connect} from "react-redux"
import {novelDetail} from "../../actions/novel";

var array = ['我 的 信 息', '我 的 大 神', '我 的 收 藏', '帮 助 与 反 馈', '关 于 我 们']

class UserCenter extends Component {
    constructor(props){
        super(props);
        this.state = {
            avatar: ''
        }
    }
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    onSubmitEditing = (index) => {
        // console.log('onSubmitEditing', index)
        const {navigation} = this.props
        if (index == 2) {
            navigation.navigate('Collection')
        } else if (index == 1) {
            navigation.navigate('MyCommunity')
        }
    }

    clickToGoBack = () => {
        const {navigation} = this.props
        navigation.goBack()
    }

    componentDidMount = () => {
        const {dispatch, navigation} = this.props
        // console.log(navigation.state.params.data.id)
        const detailData = navigation.state.params.data
        console.log(detailData)
        this.setState({
            avatar: detailData.avatar
        })
    }


    render() {
        const self = this
        const {login, register} = this.props
        const ArrayList = array.map(function (item, i) {
            const Item = (
                <TouchableWithoutFeedback key={i+'_'+item.id+'_btn'} onPress={self.onSubmitEditing.bind(self, i)}>
                    <View style={{height: 90}}>
                        <View style={{height: 89, justifyContent: 'center'}}>
                            <Text style={{color: '#007aff', fontSize: 40, fontWeight: '700', marginLeft: 35}}>{item}</Text>
                        </View>
                        <View style={{height: 1, marginRight: 35, marginLeft: 35, backgroundColor: '#999999'}}/>
                    </View>
                </TouchableWithoutFeedback>
            )
            return Item
        })
        // let avatar = ''
        // avatar = login.userInfo.avatar != '' ? login.userInfo.avatar : ''
        // avatar = register.userInfo.avatar != '' ? register.userInfo.avatar : ''
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.clickToGoBack.bind(this)}>
                    <View style={{height: 50, marginTop: 55}}>
                        <Image style={styles.backView} source={require('../../images/return.png')}/>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.titleTxt}>{'个人中心'}</Text>
                {
                    this.state.avatar && this.state.avatar != '' ?
                    <Image style={{height: 100, width: 100, borderRadius: 50, marginLeft: 35, marginTop: 60, marginBottom: 85}}
                    source={{uri: this.state.avatar}}/> : null
                }

                {ArrayList}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    titleTxt: {
        marginTop: 50,
        fontSize: 60,
        fontWeight: '900',
        marginLeft: 35
    },
    input: {
        fontSize: 30,
        color: '#999999',
        marginLeft: 30,
        width: 300
    },
    secondTitle: {
        fontSize: 36,
        marginLeft: 35,
        fontWeight: '900',
        marginTop: 90,
        marginBottom: 35
    },
    backView: {
        height: 50,
        width: 50,
        marginLeft: 35
    }
})

function mapStateToProps(state) {
    const { login, register } = state
    return {
        login,
        register
    }
}

export default connect(mapStateToProps)(UserCenter)



