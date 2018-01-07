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
import IndexListItem from './indexListItem'

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
    // componentDidMount(){
    //     this.loadListViewDataFormJson()
    // }
    componentWillReceiveProps(nextProps, nextState) {
        // console.log(this)
        if (nextProps.data != this.props.data && nextProps.data.length > 0 && this.props.data.length == 0) {
            this.loadListViewDataFormJson(nextProps.data)
        }
    }

    loadListViewDataFormJson = (data) => {
        let jsonData = data
        dataBlob = []
        sectionIDs = []
        rowIDs = []
        for (let i in jsonData) {
            sectionIDs.push(i)
            dataBlob[i] = {
                dateTitle: jsonData[i].dateTitle,
                title: jsonData[i].title,
                // iconUrl: jsonData[i].iconUrl
            }
            rowIDs[i] = []
            let listData = jsonData[i].listData
            for (let j in listData) {
                rowIDs[i].push(j)
                dataBlob[i+':'+j] = listData[j]
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
            <IndexListItem rowData={rowData} {...this.props}/>
        )
    }

    renderSectionHeader = (sectionData,sectionId) => {
        // const imageUrl = sectionData.imageUrl
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionDateTitle}>{sectionData.dateTitle}</Text>
                <Text style={styles.sectionTitle}>{sectionData.title}</Text>
                {/*<Image style={styles.sectionAvatar} source={uri:sectionData.iconUrl}/>*/}
            </View>
        )
    }

    onItemClick = (rowData) => {
        // console.log(this)
        const Navigation = this.props.navigation
        Navigation.navigate('VideoDetail')
    }

    render() {
        const {category} = this.props
        console.log(category)
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
    }
})