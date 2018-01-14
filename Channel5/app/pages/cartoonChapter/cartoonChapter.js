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
    Text
} from 'react-native';
import BaseStyle from "../../common/style";

export default class CartoonChapter extends Component {
    constructor(props){
        super(props);
        this.state = {
            subtitle: '',
            title: ''
        }
    }
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    skipToGoBack = () => {
        const {navigation} = this.props
        navigation.goBack()
    }

    componentDidMount = () => {
        const {navigation} = this.props
        const detailData = navigation.state.params.data
        console.log(detailData)
        this.setState({
            subtitle: detailData.title,
            title: detailData.name
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{height: 315}}>
                    <TouchableWithoutFeedback onPress={this.skipToGoBack.bind()}>
                        <Image style={{height: 50, width: 50, position: 'absolute', top: 78, left: 35}} source={require('../../images/return.png')}/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 24, color: '#999999', fontWeight: 'bold', position: 'absolute', right: 35,
                        top: 68
                    }}>
                        {this.state.subtitle}
                    </Text>
                    <Text style={{fontSize: 60, color: '#000000', fontWeight: '900', position: 'absolute', right: 35, top: 118}}>
                        {this.state.title}
                    </Text>
                    <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                        bottom: 30, left: 35
                    }, BaseStyle.txtCenter]}>
                        <Text style={{fontSize: 28, color: '#007aff'}}>{'上一章'}</Text>
                    </View>
                    <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                        bottom: 30, right: 35
                    }, BaseStyle.txtCenter]}>
                        <Text style={{fontSize: 28, color: '#007aff'}}>{'下一章'}</Text>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: '#999999'}}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: -20
    }
});



