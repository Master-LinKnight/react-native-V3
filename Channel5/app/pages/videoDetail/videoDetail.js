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
    Dimensions,
    Text,
    ListView
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var Navigation
export default class VideoDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                title: '热点游戏视频',
                duration: '05:40',
                subhead: '游戏文化'
            },
            list: [{
                userName: '阿宝好可爱',
                dateTxt: '12月3日',
                comment: '一次成像我知道吧，一次成像我知道吧，一次成像我知道吧，一次成像我知道吧，一次成像我知道吧，一次成像我知道吧，'
            },{
                userName: '阿宝好可爱',
                dateTxt: '12月3日',
                comment: '一次成像我知道吧，一次成像我知道吧，一次成像我知道吧，一次成像我知道吧，一次成像我知道吧，一次成像我知道吧，'
            }],
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            })
        }
    }

    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }
    clickToGoBack = () => {
        Navigation.goBack()
    }
    renderRow = (rowData) => {
        return (
            <View style={{height: 265, marginLeft: 35, marginRight: 35, backgroundColor: '#f0f0f8', borderRadius: 20, marginBottom: 40}}>
                <Text style={{marginTop: 24, marginLeft: 20, fontSize: 30, color: '#000000'}}>{rowData.userName}</Text>
                <Text style={{marginTop: 64, marginLeft: 20, marginRight: 20, fontSize: 28, color: '#000001'}}>{rowData.comment}</Text>
                <Text style={{position: 'absolute', top: 24, right: 20, color: '#999999', fontSize: 30}}>{rowData.dateTxt}</Text>
            </View>
        )
    }
    render() {
        let w = '100%'
        let h = 1010
        // Image.getSize(require('../../images/index_img02.png'), (width, height) => {
        //     if (width > Dimensions.get('window').width)
        //     {
        //         height = Dimensions.get('window').width / width * height
        //         width = Dimensions.get('window').width
        //     }
        //     h = height
        //     w = width
        // })
        Navigation = this.props.navigation
        return (
            <ScrollView style={styles.container}>
                <Image style={{height: h, width: w, justifyContent: 'center', alignItems: 'center'}} source={require('../../images/index_img02.png')}>
                    <TouchableWithoutFeedback onPress={this.clickToGoBack.bind()}>
                        <Image style={{height: 50, width: 50, position: 'absolute', top: 55, left: 35}} source={require('../../images/close.png')}/>
                    </TouchableWithoutFeedback>
                    <Image style={styles.playImg} source={require('../../images/icon_play.png')}/>
                </Image>
                <View style={{height: 310, width: '100%'}}>
                    <Text style={{fontSize: 28, color: '#999999', position: 'absolute', top: 50, left: 35}}>{this.state.data.subhead}</Text>
                    <Text style={{fontSize: 28, color: '#999999', position: 'absolute', top: 50, right: 35}}>{this.state.data.duration}</Text>
                    <Text style={{fontSize: 48, color: '#000000', position: 'absolute', top: 95, left: 35, fontWeight: '900'}}>{this.state.data.title}</Text>
                    <Text style={{fontSize: 36, color: '#444444', position: 'absolute', top: 235, left: 35}}>{'用户评论'}</Text>
                    <Text style={{fontSize: 28, color: '#999999', position: 'absolute', top: 235, right: 35}}>{this.state.list.length + '个评论'}</Text>
                </View>
                <ListView
                    style={{marginBottom: 40}}
                    dataSource={this.state.dataSource.cloneWithRows(this.state.list)}
                    renderRow={this.renderRow}
                    // renderSectionHeader={this.renderSectionHeader}
                    // stickySectionHeadersEnabled={false}
                />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    playImg: {
        width: 128,
        height: 128,
        alignSelf: 'center',
        // marginTop: 184
    }
});



