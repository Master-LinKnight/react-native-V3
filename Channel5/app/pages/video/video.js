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
    ListView,
    Text,
    Dimensions
} from 'react-native';
var headerIcon = require('../../images/pic_head.png')
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var Navigation
var dataBlob = {},
    sectionIDs = [],
    rowIDs = []
import IndexListView from '../../component/indexListView'
export default class Video extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: [
                {
                    video: [
                        {
                            imageUrl: require('../../images/index_img01.png'),
                            title: '圣诞de烟花易冷',
                            duration: '02:40',
                            subhead: '7.5万次播放'
                        },
                        {
                            imageUrl: require('../../images/index_img02.png'),
                            title: '热点游戏视频',
                            duration: '05:40',
                            subhead: '游戏文化'
                        }
                    ],
                    dateTitle: '12月22日 星期日',
                    title: '今天',
                    iconUrl: require('../../images/pic_head.png')
                },
                {
                    video: [
                        {
                            imageUrl: require('../../images/index_img03.png'),
                            title: '北京冬残奥会会徽宣传片',
                            duration: '00:51',
                            subhead: '残奥会'
                        }
                    ],
                    dateTitle: '12月16日 星期四',
                    title: '星期四',
                    iconUrl: require('../../images/pic_head.png')
                }
            ]
        }
    }
    
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    componentDidMount(){
        // this.loadListViewDataFormJson()
    }

    render() {
        Navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <IndexListView data={this.state.data} {...this.props}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});



