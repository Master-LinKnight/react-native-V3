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
import {searchList} from "../../actions/search";
import {connect} from "react-redux";
var dataBlob = {},
    sectionIDs = [],
    rowIDs = []

class SearchList extends Component {
    constructor(props){
        super(props)
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
            data: [],
            isFreshing: false
        }
    }

    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        console.log(nextProps.search)
        if(nextProps.search.status != this.props.search.status && nextProps.search.status === 'FETCH_SEARCH_DATA_SUCCESS'){
            this.setState({
                isFreshing: false
            })
            if (nextProps.search.data && nextProps.search.data.length > 0) {
                this.loadListViewDataFormJson(nextProps.search.data)
            }
            // console.log(nextProps.video.data)
            // this.loadListViewDataFormJson(nextProps.search.data)
            return false
        }
        if (nextProps.search.status != this.props.search.status && nextProps.search.status === 'FETCH_SEARCH_DATA_LOADING') {
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

    componentDidMount = () => {
        const {navigation, dispatch} = this.props
        let detailData = navigation.state.params.data
        let params = {}
        params.KeyWords = detailData.searchTxt
        dispatch(searchList(params))
        if (this.state.data.length > 0)
        {
            this.loadListViewDataFormJson(this.state.data)
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
                // dateTitle: jsonData[i].dateTitle,
                title: jsonData[i].title,
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

    clickToGoBack = () => {
        const {navigation} = this.props
        navigation.goBack()
    }

    onItemClick = (rowData) => {
        const {navigation} = this.props
        if (rowData.type == 'video') {
            navigation.navigate('VideoDetail', {data: {
                id: rowData.id
            }})
        } else if (rowData.type == 'cartoon') {
            navigation.navigate('CartoonDetail', {data: {
                id: rowData.id
            }})
        } else if (rowData.type == 'novel') {
            navigation.navigate('NovelDetail', {data: {
                id: rowData.id
            }})
        }

    }

    renderRow = (rowData) => {
        return (
            <View style={{height: 895}}>
                <TouchableWithoutFeedback onPress={this.onItemClick.bind(this, rowData)}>
                    <View style={styles.rowView}>
                        <Image style={styles.rowImageView} source={{url: rowData.imageUrl}}>
                            <Text style={styles.rowSubhead}>{rowData.subhead}</Text>
                            <Text style={styles.rowTitle}>{rowData.title}</Text>
                            <Text style={styles.rowDuration}>{rowData.duration}</Text>
                            {/*<Image style={styles.rowPlay} source={require('../../images/icon_play.png')}/>*/}
                        </Image>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    renderSectionHeader = (sectionData,sectionId) => {
        return (
            <View style={styles.sectionHeader}>
                {/*<Text style={styles.sectionDateTitle}>{sectionData.dateTitle}</Text>*/}
                <Text style={styles.sectionTitle}>{sectionData.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableWithoutFeedback onPress={this.clickToGoBack.bind(this)}>
                    <View style={{height: 50, marginTop: 55}}>
                        <Image style={styles.backView} source={require('../../images/return.png')}/>
                    </View>
                </TouchableWithoutFeedback>
                <ListView
                    style={{marginTop: 40}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderSectionHeader={this.renderSectionHeader.bind(this)}
                    stickySectionHeadersEnabled={false}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    backView: {
        height: 50,
        width: 50,
        marginLeft: 35
    },
    sectionHeader: {
        height: 130,
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
    }
})

function mapStateToProps(state) {
    const { search } = state
    return {
        search
    }
}

export default connect(mapStateToProps)(SearchList)