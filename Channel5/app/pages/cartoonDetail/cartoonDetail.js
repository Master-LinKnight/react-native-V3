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
import {cartoonDetail} from '../../actions/cartoon'
import BaseStyle from '../../common/style'
import Loading from '../../common/loading'
import TabBar from '../../component/tabBar'
import {connect} from "react-redux";
class CartoonDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            opt: 1,
            data: {
                title: '',
                subhead: '',
                editorName: '',
                imageUrl: ''
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
            ComicId: detailData.id
        }
        dispatch(cartoonDetail(params))
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        if (nextProps.cartoon.status != this.props.cartoon.status && nextProps.cartoon.status == 'FETCH_CARTOON_DETAIL_SUCCESS') {
            const {baseComicInfo, allChapters, comments} = nextProps.cartoon.data
            console.log(baseComicInfo)
            console.log(allChapters)
            console.log(comments)
            if (baseComicInfo) {
                this.setState({
                    data: {
                        title: baseComicInfo.name,
                        editorName: baseComicInfo.author,
                        subhead: baseComicInfo.dateNow + baseComicInfo.status,
                        imageUrl: baseComicInfo.largeImage
                    }
                })
            }
        }
    }

    clickToGoBack = () => {
        const {navigation} = this.props
        navigation.goBack()
    }

    render() {
        const {cartoon} = this.props
        return (
            <ScrollView style={styles.container}>
                <Loading size={'large'} visible={cartoon.isFreshing && cartoon.status == 'FETCH_CARTOON_DATA_LOADING'}/>
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
                </Image>
                <View style={{height: 135, backgroundColor: '#ffffff'}}>
                    <TabBar style={{position: 'absolute', bottom: 1, left: 35, right: 35, height: 53}}/>
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
    const { cartoon } = state
    return {
        cartoon
    }
}

export default connect(mapStateToProps)(CartoonDetail)



