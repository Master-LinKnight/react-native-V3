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
    ListView,
    FlatList
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
import {novelDetail, clearNovelDetail} from '../../actions/novel'
import BaseStyle from '../../common/style'
import Loading from '../../common/loading'
import TabBar from '../../component/tabBar'
import {connect} from "react-redux";
var itemHeight = 65
class NovelDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            opt: 1,
            data: {
                title: '',
                subhead: '',
                editorName: '',
                imageUrl: '',
                description: ''
            },
            comment: [],
            chaptersList: [],
            commentsList: new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            }),
            commentsCount: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    }

    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    componentDidMount = () => {
        const {dispatch, navigation} = this.props
        // console.log(navigation.state.params.data.id)
        const detailData = navigation.state.params.data
        let params = {
            BookId: detailData.id
        }
        dispatch(novelDetail(params))
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        console.log(nextProps.novel)
        if (nextProps.novel.status != this.props.novel.status && nextProps.novel.status == 'FETCH_NOVEL_DETAIL_SUCCESS') {
            const {baseBookInfo, volumes, comments} = nextProps.novel.data
            console.log(baseBookInfo)
            console.log(volumes[0])
            console.log(comments)
            if (baseBookInfo && volumes[0].chapters) {
                this.setState({
                    data: {
                        title: baseBookInfo.name,
                        editorName: baseBookInfo.author,
                        subhead: baseBookInfo.dateNow + ' ' + baseBookInfo.status + ' ' + volumes[0].chapters.length + '回',
                        imageUrl: baseBookInfo.largeImage,
                        description: baseBookInfo.description
                    }
                })
            }
            if (volumes[0].chapters && volumes[0].chapters.length > 0) {
                for (let v of volumes[0].chapters) {
                    v.subName = '第' + v.chapterIndex + '回'
                }

                if (volumes[0].chapters.length > 29) {
                    let arrayList = []
                    arrayList = volumes[0].chapters.sort((a, b) => b.chapterIndex - a.chapterIndex)
                    arrayList = arrayList.slice(0, 29)
                    arrayList.push({
                        chapterIndex: 0,
                        name: '查看更多',
                        subName: '查看更多',
                        isCtrl: true
                    })
                    this.setState({
                        chaptersList: arrayList
                    })
                } else {
                    this.setState({
                        chaptersList: volumes[0].chapters
                    })
                }
            }

            if (comments && comments.length > 0) {
                this.setState({
                    commentsCount: comments.length,
                    commentsList: this.state.commentsList.cloneWithRows(comments)
                })
            }
        }
    }

    clickToGoBack = () => {
        const {navigation, dispatch} = this.props
        dispatch(clearNovelDetail())
        navigation.goBack()
    }

    onChildChanged = (opt) => {
        console.log(opt)
        this.setState({
            opt: opt
        })
    }

    clickToChapter = (item) => {
        console.log(item)
        const {novel} = this.props
        if (item.isCtrl) {
            const {baseBookInfo, volumes, comments} = novel.data
            if (volumes[0].chapters && volumes[0].chapters.length > 0) {
                this.setState({
                    chaptersList: volumes[0].chapters.sort((a, b) => b.chapterIndex - a.chapterIndex)
                })
            }
        } else {

        }
    }

    renderItemView = (item) => {
        return (
            <TouchableWithoutFeedback onPress={this.clickToChapter.bind(this, item)}>
                <View style={{height: itemHeight, width: 210, justifyContent: 'center', alignItems: 'center', margin: 10, borderRadius: 4, borderColor: '#999999', borderWidth: 1}}>
                    <Text style={[BaseStyle.txtCenter, {fontSize: 30, color: '#333333'}]}>{item.subName}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    renderItemLayout = (data, index) => {
        return {length: itemHeight,offset: itemHeight*index,index}
    }

    renderRow = (rowData) => {
        return (
            <View style={{height: 265, marginLeft: 35, marginRight: 35, backgroundColor: '#f0f0f8', borderRadius: 20, marginBottom: 40}}>
                <Text style={{marginTop: 24, marginLeft: 20, fontSize: 30, color: '#000000'}}>{rowData.userName}</Text>
                <Text style={{marginTop: 64, marginLeft: 20, marginRight: 20, fontSize: 28, color: '#000001'}}>{rowData.content}</Text>
                <Text style={{position: 'absolute', top: 24, right: 20, color: '#999999', fontSize: 30}}>{rowData.createOnString}</Text>
            </View>
        )
    }
    tabBarCtrl = () => {
        if (this.state.opt == 1) {
            return (
                <Text style={{fontSize: 24, marginLeft: 35, marginRight: 35, color: '#333333', marginTop: 56}}>{this.state.data.description}</Text>
            )
        } else if (this.state.opt == 2) {
            return (
                <FlatList
                    style={{marginTop: 50, marginLeft: 30, marginRight: 30}}
                    data = {this.state.chaptersList}
                    keyExtractor={(item, index) => index}
                    renderItem={
                        ({item}) => this.renderItemView(item)
                    }
                    getItemLayout={(data, index) => this.renderItemLayout(data, index)}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                />
            )
        } else {
            return (
                <View>
                    <View style={{height: 40, flexDirection: 'row', justifyContent: 'space-between', marginTop: 52}}>
                        <Text style={{fontSize: 36, color: '#444444', fontWeight: '900', marginLeft: 36}}>{'用户评论'}</Text>
                        <Text style={{fontSize: 28, color: '#999999', marginRight: 36}}>{this.state.commentsCount + '个评论'}</Text>
                    </View>
                    <ListView
                        style={{marginBottom: 67, marginTop: 38}}
                        dataSource={this.state.commentsList}
                        renderRow={this.renderRow}
                    />
                    <View style={{flexDirection: 'row', height: 40, marginBottom: 40}}>
                        <Image style={{width: 38, height: 38, marginLeft: 35}} source={require('../../images/icon_edit.png')}/>
                        <Text style={{fontSize: 38, marginLeft: 20, color: '#007aff'}}>{'我要留言'}</Text>
                    </View>
                </View>
            )
        }
    }

    render() {
        const {novel} = this.props
        return (
            <ScrollView style={styles.container}>
                <Loading size={'large'} visible={novel.isFreshing && novel.status == 'FETCH_NOVEL_DATA_LOADING'}/>
                {novel.status == 'FETCH_NOVEL_DETAIL_SUCCESS' ?
                    <Image style={{height: 970, justifyContent: 'center', alignItems: 'center'}} source={{uri: this.state.data.imageUrl}}>
                        <TouchableWithoutFeedback onPress={this.clickToGoBack.bind()}>
                            <Image style={{height: 50, width: 50, position: 'absolute', top: 75, left: 35}} source={require('../../images/close.png')}/>
                        </TouchableWithoutFeedback>
                        {/*<Image style={styles.playImg} source={require('../../images/icon_play.png')}/>*/}
                        <View style={styles.titleBg}>
                            <Text style={styles.editorNameTxt}>{this.state.data.editorName}</Text>
                            <Text style={styles.titleTxt}>{this.state.data.title}</Text>
                            <Text style={styles.subheadTxt}>{this.state.data.subhead}</Text>
                            <View style={[styles.blueBtn, BaseStyle.txtCenter]}>
                                <Text style={styles.btnTxt}>{'开始阅读'}</Text>
                            </View>
                        </View>
                    </Image> : <View style={{height: 970}}/>
                }

                <View style={{height: 135, backgroundColor: '#ffffff'}}>
                    <TabBar style={{position: 'absolute', bottom: 1, left: 35, right: 35, height: 53}} callbackParent={this.onChildChanged.bind(this)}/>
                </View>
                <View>
                    {this.tabBarCtrl()}
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: -20
    },
    editorNameTxt: {
        fontSize: 26,
        left: 30,
        top: 26,
        position: 'absolute',
        color: '#999999',
        fontWeight: 'bold'
    },
    subheadTxt: {
        fontSize: 28,
        right: 30,
        top: 24,
        position: 'absolute',
        color: '#999999',
        fontWeight: 'bold'
    },
    titleTxt: {
        fontSize: 60,
        left: 30,
        top: 80,
        position: 'absolute',
        color: '#333333',
        fontWeight: '900'
    },
    titleBg: {
        height: 180,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
    },
    blueBtn: {
        height: 56,
        width: 180,
        top: 90,
        right: 30,
        backgroundColor: '#007aff',
        position: 'absolute',
        borderRadius: 28
    },
    btnTxt: {
        fontSize: 24,
        color: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        fontWeight: '500'
    }
})

function mapStateToProps(state) {
    const { novel } = state
    return {
        novel
    }
}

export default connect(mapStateToProps)(NovelDetail)



