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
var dataBlob = {},
    sectionIDs = [],
    rowIDs = []
export default class Video extends Component {
    constructor(props){
        super(props);
        
        var _getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID]
        }
        var _getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID]
        }
        const ds = new ListView.DataSource({
            getSectionData: _getSectionData,
            getRowData: _getRowData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        })
        this.state = {
            dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
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
        // var ds = new ListView.DataSource({
        //     rowHasChanged: (r1, r2) => r1 !== r2,
        //     sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        // })
    }
    
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    componentDidMount(){
        this.loadListViewDataFormJson()
    }

    loadListViewDataFormJson = () => {
        let jsonData = this.state.data

        for (let i in jsonData) {
            sectionIDs.push(i)
            dataBlob[i] = {
                dateTitle: jsonData[i].dateTitle,
                title: jsonData[i].title,
                iconUrl: jsonData[i].iconUrl
            }
            rowIDs[i] = []
            let video = jsonData[i].video
            for (let j in video) {
                rowIDs[i].push(j)
                dataBlob[i+':'+j] = video[j]
            }
        }
        // console.log('dataBlob', dataBlob)
        this.setState(
            {
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
            }
        )
        // console.log('dataSource', this.state.dataSource)
    }
    renderRow = (rowData) => {
        return (
            <View style={{height: 885}}>
                <View style={styles.rowView}>
                    <Image style={styles.rowImageView} source={rowData.imageUrl}>
                        <Text style={styles.rowSubhead}>{rowData.subhead}</Text>
                        <Text style={styles.rowTitle}>{rowData.title}</Text>
                        <Text style={styles.rowDuration}>{rowData.duration}</Text>
                        <Image style={styles.rowPlay} source={require('../../images/icon_play.png')}/>
                    </Image>
                </View>
            </View>
        )
    }

    renderSectionHeader = (sectionData,sectionId) => {
        // const imageUrl = sectionData.imageUrl
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionDateTitle}>{sectionData.dateTitle}</Text>
                <Text style={styles.sectionTitle}>{sectionData.title}</Text>
                <Image style={styles.sectionAvatar} source={sectionData.iconUrl}/>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={{marginTop: 40}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    sectionHeader: {
        height: 164,
        flexDirection:'row',
        backgroundColor: '#ffffff'
    },
    sectionDateTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: 35,
        color: '#999999'
    },
    sectionTitle: {
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: 28,
        marginLeft: 35
    },
    sectionAvatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        position: 'absolute',
        right: 35,
        top: 85
    },
    rowView: {
        height: 835,
        marginTop: 22,
        marginLeft: 35,
        marginRight: 35,
        width: 680,
        borderRadius: 30,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 8
    },
    rowImageView: {
        height: 835,
        width: 680,
        borderRadius: 30
    },
    rowSubhead: {
        fontSize: 28,
        marginLeft: 36,
        marginTop: 30,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    rowTitle: {
        fontSize: 48,
        marginLeft: 36,
        marginTop: 20,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        fontWeight: '900'
    },
    rowDuration: {
        fontSize: 28,
        marginLeft: 36,
        marginTop: 21,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    rowPlay: {
        width: 128,
        height: 128,
        alignSelf: 'center',
        marginTop: 184
    }
});



