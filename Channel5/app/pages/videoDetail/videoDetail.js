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
    Alert,
    WebView
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
import ShortVideoService from '../../services/shortVideoService'
var shortVideoService = new ShortVideoService()
import {videoDetail} from '../../actions/video'
import Loading from '../../common/loading'
import {connect} from 'react-redux'
import BaseStyle from "../../common/style";
import SharePOP from '../../component/sharePopView'
class VideoDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {
                title: '',
                duration: '',
                subhead: '',
                videoUrl: ''
            },
            url: '',
            webview: null,
            isBindOther: false,
            listLength: 0,
            list: [],
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            })
        }
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    }

    componentDidMount() {
        const {navigation, dispatch} = this.props
        let detailData = navigation.state.params.data
        let params = {
            ShortVideoId: detailData.id
        }
        // console.log(params)
        dispatch(videoDetail(params))
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        // const {navigation, dispatch, video} = this.props
        // console.log(nextProps.video.data)
        if (nextProps.video.status != this.props.video.status && nextProps.video.status === 'FETCH_VIDEO_DETAIL_SUCCESS') {
            if (nextProps.video.data.shortVideo) {
                this.setState({
                    data: {
                        title: nextProps.video.data.shortVideo.name,
                        duration: nextProps.video.data.shortVideo.playTime,
                        subhead: nextProps.video.data.shortVideo.playCountStr,
                        imageUrl: nextProps.video.data.shortVideo.coverImage,
                        videoUrl: nextProps.video.data.shortVideo.videoUrl
                    }
                })
            }

            if (nextProps.video.data.comments && nextProps.video.data.comments.length > 0) {
                let list = []
                for (let v of nextProps.video.data.comments) {
                    list.push({
                        userName: v.userName,
                        dateTxt: v.createOnString,
                        comment: v.content
                    })
                }
                // console.log(list)
                this.setState({
                    listLength: list.length,
                    dataSource: this.state.dataSource.cloneWithRows(list)
                })
            }
        }
    }

    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    clickToGoBack = () => {
        const {navigation} = this.props
        navigation.goBack()
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

    skipToPlay = async () => {
        const {navigation, video} = this.props
        console.log(11)
        // this.setState({
        //     url: null
        // })
        // this.setState({
        //     url: video.data.shortVideo.videoUrl
        // })
        // navigation.navigate('VideoPlay', {data: {
        //     url: this.state.data.videoUrl
        // }})
        await this.setState({
            webview: null
        })
        // console.log(this.state.webview)
        // this.props.navigation.state.params.refresh()
        try {
            await this.setState({
                webview: (
                    <View style={{height: 0, width: 0, overflow: 'hidden'}}>
                        <WebView
                            style={{height: 0, width: 0}}
                            source={{url: this.state.data.videoUrl}}
                            automaticallyAdjustContentInsets={true}
                            scalesPageToFit={true}
                        />
                    </View>
                )
            })
        } catch (error) {
            console.log(error)
        }
    }

    CloseMask = () => {
        this.setState({isBindOther:false})
    }

    OpenMask = () => {
        this.setState({isBindOther:true})
    }

    clickToShare = () => {
        Alert.alert('分享成功')
        this.CloseMask()
    }

    render() {
        const {video} = this.props

        return (
            <ScrollView style={styles.container}>
                <Loading size={'large'} visible={video.isFreshing && video.status == 'FETCH_VIDEO_DATA_LOADING'}/>
                <Image style={{height: 970, justifyContent: 'center', alignItems: 'center'}} source={{uri: this.state.data.imageUrl}}>
                    <TouchableWithoutFeedback onPress={this.clickToGoBack.bind(this)}>
                        <Image style={{height: 50, width: 50, position: 'absolute', top: 75, left: 35}} source={require('../../images/close.png')}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.skipToPlay.bind(this)}>
                        <Image style={styles.playImg} source={require('../../images/icon_play.png')}/>
                    </TouchableWithoutFeedback>
                </Image>
                <View style={{height: 310, width: '100%'}}>
                    <Text style={{fontSize: 28, color: '#999999', position: 'absolute', top: 50, left: 35}}>{this.state.data.subhead}</Text>
                    <Text style={{fontSize: 28, color: '#999999', position: 'absolute', top: 50, right: 35}}>{this.state.data.duration}</Text>
                    <Text style={{fontSize: 48, color: '#000000', position: 'absolute', top: 95, left: 35, fontWeight: '900'}}>{this.state.data.title}</Text>
                    <Text style={{fontSize: 36, color: '#444444', position: 'absolute', top: 235, left: 35}}>{'用户评论'}</Text>
                    <Text style={{fontSize: 28, color: '#999999', position: 'absolute', top: 235, right: 35}}>{this.state.listLength + '个评论'}</Text>
                </View>
                <ListView
                    style={{marginBottom: 40}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    // renderSectionHeader={this.renderSectionHeader}
                    // stickySectionHeadersEnabled={false}
                />
                <View style={{flexDirection: 'row', height: 40, marginBottom: 200}}>
                    <Image style={{width: 38, height: 38, marginLeft: 35}} source={require('../../images/icon_edit.png')}/>
                    <Text style={{fontSize: 36, marginLeft: 20, color: '#007aff'}}>{'我要留言'}</Text>
                </View>
                <View style={[{height: 210, borderTopWidth: 1, borderTopColor: '#f0f4f7'}, BaseStyle.txtCenter]}>
                    <TouchableWithoutFeedback onPress={this.OpenMask.bind(this)}>
                        <View style={{height: 90, width: 240, backgroundColor: '#f0f0f7', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Image style={{height: 36, width: 39, marginLeft: 64}} source={require('../../images/icon_share.png')}/>
                            <Text style={{fontSize: 30, color: '#007aff', marginRight: 64}}>{'分享'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {this.state.webview}
                {
                    this.state.isBindOther == true?(
                        <SharePOP Login={this.clickToShare.bind(this)} cancel={this.CloseMask.bind(this)} />
                    ) : ( null )
                }
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
    playImg: {
        width: 128,
        height: 128,
        alignSelf: 'center',
        // marginTop: 184
    }
});

function mapStateToProps(state) {
    const { video } = state
    return {
        video
    }
}

export default connect(mapStateToProps)(VideoDetail)



