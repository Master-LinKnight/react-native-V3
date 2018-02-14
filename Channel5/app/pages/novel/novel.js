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
    ListView,
    View,
    TouchableWithoutFeedback,
    Text
} from 'react-native';
import {connect} from "react-redux";
import Loading from '../../common/loading'
import {novelList} from '../../actions/novel'
import ListItem from '../../component/listItem'
import ListItemHeader from '../../component/listItemHeader'

var dataBlob = [],
sectionIDs = [],
rowIDs = []
class Novel extends Component {
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
        if(nextProps.novel.status != this.props.novel.status && nextProps.novel.status === 'FETCH_NOVEL_DATA_SUCCESS'){
            this.setState({
                isFreshing: false
            })
            if (nextProps.novel.data && nextProps.novel.data.length > 0) {
                for (let v of nextProps.novel.data) {
                    const array = v.groupKey.split(';')
                    v.dateTitle = array[0]
                    v.title = array[1]
                }
            }
            // console.log(JSON.stringify(nextProps.novel.data))
            this.loadListViewDataFormJson(nextProps.novel.data)
            return false
        }

        if (nextProps.novel.status != this.props.novel.status && nextProps.novel.status === 'FETCH_NOVEL_DATA_LOADING') {
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

        if (nextProps.navigation.state.key == this.props.navigation.state.key) {
            this.setState({
                data: nextProps.novel.data
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

    onItemClick = (rowData) => {
        const Navigation = this.props.navigation
        Navigation.navigate('NovelDetail', {data: {
            id: rowData.id
        }})
    }

    componentDidMount = () => {
        this.props.dispatch(novelList())
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
            <ListItem rowData={rowData} onItemClick={this.onItemClick.bind(this, rowData)} isVideo={false}/>
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
    const { novel, login, register } = state
    return {
        novel,
        login,
        register
    }
}

export default connect(mapStateToProps)(Novel)



