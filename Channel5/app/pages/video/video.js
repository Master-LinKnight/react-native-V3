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
import {connect} from 'react-redux'
var dataBlob = {},
    sectionIDs = [],
    rowIDs = []
import {videoList} from '../../actions/video'
import Loading from '../../common/loading'
import ListItem from '../../component/listItem'
import ListItemHeader from '../../component/listItemHeader'

class Video extends Component {
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
            isFreshing: false,
            dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
            data: [
            ]
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    }

    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        // console.log(nextProps.video)
        if(nextProps.video.status != this.props.video.status && nextProps.video.status === 'FETCH_VIDEO_DATA_SUCCESS'){
            this.setState({
                isFreshing: false
            })
            if (nextProps.video.data && nextProps.video.data.length > 0) {
                for (let v of nextProps.video.data) {
                    const array = v.groupKey.split(';')
                    v.dateTitle = array[0]
                    v.title = array[1]
                }
            }
            // console.log(nextProps.video.data)
            this.loadListViewDataFormJson(nextProps.video.data)
            return false
        }
        if (nextProps.video.status != this.props.video.status && nextProps.video.status === 'FETCH_VIDEO_DATA_LOADING') {
            this.setState({
                isFreshing: true
            })
            return false
        } else {
            this.setState({
                isFreshing: false
            })
            return false
        }
        return true
    }

    loadListViewDataFormJson = (data) => {
        const {login, register} = this.props
        let jsonData = data
        dataBlob = []
        sectionIDs = []
        rowIDs = []

        let avatar = ''
        if (login && login.userInfo && login.userInfo.avatar) {
            avatar = login.userInfo.avatar
        } else if (register && register.userInfo && register.userInfo.avatar) {
            avatar = register.userInfo.avatar
        }
        for (let i in jsonData) {
            sectionIDs.push(i)
            dataBlob[i] = {
                dateTitle: jsonData[i].dateTitle,
                title: jsonData[i].title,
                iconUrl: i == 0 ? avatar : ''
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

    componentDidMount = () => {
        this.props.dispatch(videoList())
    }

    onItemClick = (rowData) => {
        const Navigation = this.props.navigation
        Navigation.navigate('VideoDetail', {data: {
            id: rowData.id
        }})
    }

    skipToPersonal = () => {
        const {navigation, login, register} = this.props
        let avatar = ''
        if (login && login.userInfo && login.userInfo.avatar) {
            avatar = login.userInfo.avatar
        } else if (register && register.userInfo && register.userInfo.avatar) {
            avatar = register.userInfo.avatar
        }
        navigation.navigate('UserCenter', {data: {
            avatar: avatar
        }})
    }

    renderRow = (rowData) => {
        return (
            <ListItem rowData={rowData} onItemClick={this.onItemClick.bind(this, rowData)} isVideo={true}/>
        )
    }

    renderSectionHeader = (sectionData,sectionId) => {
        return (
            <ListItemHeader sectionData={sectionData} skipToPersonal={this.skipToPersonal.bind(this)}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Loading size={'large'} visible={this.state.isFreshing}/>
                <ListView
                    style={{marginTop: 40}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderSectionHeader={this.renderSectionHeader.bind(this)}
                    stickySectionHeadersEnabled={false}
                    removeClippedSubviews={false}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

function mapStateToProps(state) {
    const { video, router, login, register } = state
    return {
        video,
        router,
        login,
        register
    }
}

export default connect(mapStateToProps)(Video)



