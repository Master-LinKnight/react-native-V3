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

var searchArray = ['凡人修仙传', '行尸走肉', '星球大战', '足球', '爱科技', '视频']

export default class Search extends Component {
    constructor(props){
        super(props);

    }
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    onSubmitEditing = () => {
        const {navigation} = this.props
        navigation.navigate('SearchList')
    }

    render() {
        const self = this
        const searchHistoryArray = searchArray.map(function (item, i) {
            const searchItem = (
                <TouchableWithoutFeedback key={i+'_'+item.id+'_btn'} onPress={self.onSubmitEditing.bind(self)}>
                    <View style={{height: 90}}>
                        <View style={{height: 89, justifyContent: 'center'}}>
                            <Text style={{color: '#007aff', fontSize: 30, marginLeft: 35}}>{item}</Text>
                        </View>
                        <View style={{height: 1, marginRight: 35, marginLeft: 35, backgroundColor: '#999999'}}/>
                    </View>
                </TouchableWithoutFeedback>
            )
            return searchItem
        })
        return (
            <View style={styles.container}>
                <Text style={styles.titleTxt}>{'搜索'}</Text>
                <View style={styles.searchView}>
                    <Image style={styles.searchImg} source={require('../../images/icon_search.png')}/>
                    <TextInput
                        placeholder="搜索内容"
                        autoCapitalize={"none"}
                        autoCorrect={false}
                        secureTextEntry={true}
                        style={styles.input}
                        onSubmitEditing={this.onSubmitEditing.bind(this)}
                    />
                </View>
                <Text style={styles.secondTitle}>{'搜索历史'}</Text>
                {searchHistoryArray}
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
        marginTop: 135,
        fontSize: 60,
        fontWeight: '900',
        marginLeft: 35
    },
    searchView: {
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35,
        height: 66,
        borderRadius: 33,
        backgroundColor: '#f0f0f2',
        alignItems: 'center',
        flexDirection: 'row'
    },
    searchImg: {
        marginLeft: 20,
        height: 35,
        width: 30
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
    }
})



