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
export default class CartoonDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                title: '海贼王',
                duration: '12月16日 连载中 816集',
                subhead: '尾田容一部',
                editorName: '尾田容一部'
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
            // dataSource:new ListView.DataSource({
            //     rowHasChanged:(row1,row2) => row1 !== row2
            // })
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
                <Image style={{height: h, width: w, justifyContent: 'center', alignItems: 'center'}} source={require('../../images/index_img04.png')}>
                    <TouchableWithoutFeedback onPress={this.clickToGoBack.bind()}>
                        <Image style={{height: 50, width: 50, position: 'absolute', top: 55, left: 35}} source={require('../../images/close.png')}/>
                    </TouchableWithoutFeedback>
                    {/*<Image style={styles.playImg} source={require('../../images/icon_play.png')}/>*/}
                    <View style={{height: 180, width: '100%', position: 'absolute', bottom: 0, left: 0, backgroundColor: 'rgba(255, 255, 255, 0.95)'}}>
                        <Text style={{fontSize: 26, left: 30, top: 26, position: 'absolute', color: '#999999', fontWeight: 'bold'}}>{this.state.data.subhead}</Text>
                        <Text style={{fontSize: 60, left: 30, top: 80, position: 'absolute', color: '#333333', fontWeight: '900'}}>{this.state.data.title}</Text>
                        <Text style={{fontSize: 28, right: 30, top: 24, position: 'absolute', color: '#999999', fontWeight: 'bold'}}>{this.state.data.duration}</Text>
                        <Text style={{}}></Text>
                    </View>
                </Image>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});



