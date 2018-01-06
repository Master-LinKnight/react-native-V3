import React, { Component } from 'react';
import {
    Platform,
    Image,
    StyleSheet,
    ScrollView,
    View,
    TouchableWithoutFeedback,
    Dimensions,
    Text,
    ListView
} from 'react-native';
import BaseStyle from '../common/style'

export default class TabBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            opt: 1
        }
    }
    clickTabBar = (_opt) => {
        this.setState({
            opt: _opt.obj
        })
    }
    render() {
        return (
            <View style={[styles.tabBarBg, this.props.style]}>
                <TouchableWithoutFeedback onPress={this.clickTabBar.bind(this, {obj: 1})}>
                    {
                        this.state.opt === 1 ?
                            <View style={[{backgroundColor: '#007aff', height: 52, width: '33%', borderTopLeftRadius: 8, borderBottomLeftRadius: 8}, BaseStyle.txtCenter]}>
                                <Text style={styles.whiteTxt}>{'简介'}</Text>
                            </View> :
                            <View style={[{height: 52, width: '33%'}, BaseStyle.txtCenter]}>
                                <Text style={styles.blueTxt}>{'简介'}</Text>
                            </View>
                    }
                </TouchableWithoutFeedback>
                <View style={{height: 52, width: '0.5%', backgroundColor: '#007aff'}}/>
                <TouchableWithoutFeedback onPress={this.clickTabBar.bind(this, {obj: 2})}>
                    {
                        this.state.opt === 2 ?
                            <View style={[{backgroundColor: '#007aff', height: 52, width: '33%'}, BaseStyle.txtCenter]}>
                                <Text style={styles.whiteTxt}>{'目录'}</Text>
                            </View> :
                            <View style={[{height: 52, width: '33%'}, BaseStyle.txtCenter]}>
                                <Text style={styles.blueTxt}>{'目录'}</Text>
                            </View>
                    }
                </TouchableWithoutFeedback>
                <View style={{height: 52, width: '0.5%', backgroundColor: '#007aff'}}/>
                <TouchableWithoutFeedback onPress={this.clickTabBar.bind(this, {obj: 3})}>
                    {
                        this.state.opt === 3 ?
                            <View style={[{backgroundColor: '#007aff', height: 52, width: '33%', borderTopRightRadius: 8, borderBottomRightRadius: 8}, BaseStyle.txtCenter]}>
                                <Text style={styles.whiteTxt}>{'评论'}</Text>
                            </View> :
                            <View style={[{height: 52, width: '33%'}, BaseStyle.txtCenter]}>
                                <Text style={styles.blueTxt}>{'评论'}</Text>
                            </View>

                    }
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBarBg: {
        position: 'absolute',
        bottom: 1,
        left: 35,
        right: 35,
        height: 53,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        borderRadius: 8,
        borderColor: '#007aff',
        borderWidth: 1
    },
    whiteTxt: {
        fontSize: 30,
        color: '#ffffff'
    },
    blueTxt: {
        fontSize: 30,
        color: '#007aff'
    }
});