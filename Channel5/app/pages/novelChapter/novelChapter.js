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
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import BaseStyle from '../../common/style'

export default class NovelChapter extends Component {
    constructor(props){
        super(props);
        this.state = {
            subtitle: '',
            title: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
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
        const {dispatch, navigation} = this.props
        const detailData = navigation.state.params.data
        console.log(detailData)
        const array = detailData.title.split(' ')
        console.log(array)
        this.setState({
            title: array[1],
            subtitle: detailData.name + array[0]
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{height: 150}}>
                    <TouchableWithoutFeedback onPress={this.skipToGoBack.bind()}>
                        <Image style={{height: 50, width: 50, position: 'absolute', top: 78, left: 35}} source={require('../../images/return.png')}/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 30, color: '#333333', position: 'absolute', top: 86, left: 125}}>{'字体：'}</Text>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 50, position: 'absolute', top: 76, left: 210,
                        backgroundColor: '#f0f0f7', borderRadius: 4
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'大'}</Text>
                    </View>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 50, position: 'absolute', top: 76, left: 285,
                        backgroundColor: '#f0f0f7', borderRadius: 4
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'中'}</Text>
                    </View>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 50, position: 'absolute', top: 76, left: 360,
                        backgroundColor: '#f0f0f7', borderRadius: 4
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'小'}</Text>
                    </View>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 130, position: 'absolute', top: 76, left: 440,
                        backgroundColor: '#f0f0f7', borderRadius: 25
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'护眼'}</Text>
                    </View>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 130, position: 'absolute', top: 76, left: 590,
                        backgroundColor: '#f0f0f7', borderRadius: 25
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'夜间'}</Text>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: '#999999'}}/>
                <View style={{height: 240}}>
                    <Text style={{fontSize: 24, color: '#999999', position: 'absolute', left: 35, top: 27}}>{this.state.subtitle}</Text>
                    <Text style={{fontSize: 60, color: '#000000', position: 'absolute', left: 35, top: 75, fontWeight: '900'}}>{this.state.title}</Text>
                    <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                        bottom: 0, left: 35
                    }, BaseStyle.txtCenter]}>
                        <Text style={{fontSize: 28, color: '#007aff'}}>{'上一章'}</Text>
                    </View>
                    <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                        bottom: 0, right: 35
                    }, BaseStyle.txtCenter]}>
                        <Text style={{fontSize: 28, color: '#007aff'}}>{'下一章'}</Text>
                    </View>
                </View>
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



