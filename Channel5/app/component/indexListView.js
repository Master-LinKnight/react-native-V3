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
var headerIcon = require('../images/pic_head.png')
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var dataBlob = {},
    sectionIDs = [],
    rowIDs = [],
    Navigation

export default class IndexListView extends Component {
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
            dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        }
        // Navigation = this.props.navigation
    }
    componentDidMount(){
        this.loadListViewDataFormJson()
    }

    loadListViewDataFormJson = () => {
        let jsonData = this.props.data

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
        this.setState(
            {
                dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
            }
        )
    }

    renderRow = (rowData) => {
        return (
            <View style={{height: 895}}>
                <TouchableWithoutFeedback onPress={this.onItemClick.bind(this, rowData)}>
                    <View style={styles.rowView}>
                        <Image style={styles.rowImageView} source={rowData.imageUrl}>
                            <Text style={styles.rowSubhead}>{rowData.subhead}</Text>
                            <Text style={styles.rowTitle}>{rowData.title}</Text>
                            <Text style={styles.rowDuration}>{rowData.duration}</Text>
                            <Image style={styles.rowPlay} source={require('../images/icon_play.png')}/>
                        </Image>
                    </View>
                </TouchableWithoutFeedback>
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

    onItemClick = (rowData) => {
        // console.log(this)
        const Navigation = this.props.navigation
        Navigation.navigate('VideoDetail')
    }

    render() {
        return (
            <ListView
                style={{marginTop: 40}}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
                renderSectionHeader={this.renderSectionHeader.bind(this)}
                stickySectionHeadersEnabled={false}
            />
        );
    }
}

const styles = StyleSheet.create({
    sectionHeader: {
        height: 184,
        flexDirection:'column',
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
        marginTop: 25,
        marginLeft: 35,
        marginRight: 35,
        width: 680,
        borderRadius: 30,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 12,
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
})