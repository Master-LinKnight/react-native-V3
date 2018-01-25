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
    Text,
    ListView,
    Dimensions,
    PixelRatio,
    InteractionManager
} from 'react-native';
import {imageSlider, imageClear} from '../../actions/image'
import BaseStyle from "../../common/style"
import {connect} from "react-redux"
import {cartoonChapter, novelChapter} from '../../actions/chaper'
import ChapterItem from './chapterItem'
import Loading from '../../common/loading'
import image from "../../reducers/image"

class CartoonChapter extends Component {
    constructor(props){
        super(props);
        this.state = {
            subtitle: '',
            title: '',
            list: new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            }),
            index: 1
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    }
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    skipToGoBack = () => {
        const {navigation, dispatch} = this.props
        dispatch(imageClear())
        navigation.goBack()
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        // console.log(nextProps.chapter)
        if (nextProps.chapter.status != this.props.chapter.status && nextProps.chapter.status == 'FETCH_CARTOON_CHAPTER_SUCCESS') {
            const {data} = nextProps.chapter
            // console.log(data)
            if (data) {
                console.log(data)
                this.setState({
                    title: data.name
                })
                if (data.files.length > 0) {
                    let arrayList = []
                    for (let v of data.files) {
                        arrayList.push({
                            imageUrl: v
                        })
                    }
                    // console.log(arrayList)
                    this.setState({
                        list: this.state.list.cloneWithRows(arrayList.slice(0, 2))
                    })
                }
            }
        }
        if (nextProps.image.status != this.props.image.status && nextProps.image.status == 'FETCH_IMAGE_INDEX_SLIDER') {
            // console.log(nextProps.image)
            const {data} = this.props.chapter
            if (data && data.files.length > 0) {
                let arrayList = []
                for (let v of data.files) {
                    arrayList.push({
                        imageUrl: v
                    })
                }
                // console.log(arrayList)
                this.setState({
                    list: this.state.list.cloneWithRows(arrayList.slice(0, nextProps.image.index))
                })
            }
        }
    }

    componentDidMount = () => {
        const {navigation, dispatch} = this.props
        const detailData = navigation.state.params.data
        // console.log(detailData)
        this.setState({
            subtitle: detailData.name,
            title: detailData.title
        })
        let params = {}
        params.ChapterId = detailData.id
        InteractionManager.runAfterInteractions(() => {
            dispatch(cartoonChapter(params))
        })
    }

    getEndReached = () => {
        const {image, dispatch, chapter} = this.props
        console.log(image)
        // console.log(chapter.data.files.length)
        if (image.isFreshing == false && image.status == 'FETCH_IMAGE_INDEX_END' && image.index <= chapter.data.files.length) {
            // console.log(1)
            dispatch(imageSlider(image.index))
        }
    }

    onChildChanged = (isComplete) => {
        console.log(isComplete)
    }

    renderRow = (rowData) => {
        return (
            <ChapterItem callbackParent={this.onChildChanged.bind(this)} rowData={rowData}/>
        )
    }

    lastChapter = () => {
        const {chapter, dispatch} = this.props
        const detailData = chapter.data
        let params = {}
        params.ChapterId = detailData.last

        dispatch(cartoonChapter(params))
        dispatch(imageClear())
        this.refs.list.scrollTo({x: 0, y: 0, animated: false})
    }

    nextChapter = () => {
        const {chapter, dispatch} = this.props
        const detailData = chapter.data
        let params = {}
        params.ChapterId = detailData.next

        dispatch(cartoonChapter(params))
        dispatch(imageClear())
        this.refs.list.scrollTo({x: 0, y: 0, animated: false})
    }

    render() {
        const {chapter, image} = this.props
        return (
            <View style={styles.container}>
                <Loading size={'large'} visible={chapter.isFreshing || image.isFreshing}/>
                <View style={{height: 315}}>
                    <TouchableWithoutFeedback onPress={this.skipToGoBack.bind()}>
                        <Image style={{height: 50, width: 50, position: 'absolute', top: 78, left: 35}} source={require('../../images/return.png')}/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 24, color: '#999999', fontWeight: 'bold', position: 'absolute', right: 35,
                        top: 68
                    }}>
                        {this.state.subtitle}
                    </Text>
                    <Text style={{fontSize: 60, color: '#000000', fontWeight: '900', position: 'absolute', right: 35, top: 118}}>
                        {this.state.title}
                    </Text>
                    <TouchableWithoutFeedback onPress={this.lastChapter.bind(this)}>
                        <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                            bottom: 30, left: 35
                        }, BaseStyle.txtCenter]}>
                            <Text style={{fontSize: 28, color: '#007aff'}}>{'上一章'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.nextChapter.bind(this)}>
                        <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                            bottom: 30, right: 35
                        }, BaseStyle.txtCenter]}>
                            <Text style={{fontSize: 28, color: '#007aff'}}>{'下一章'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{height: 1, backgroundColor: '#999999'}}/>
                <ListView
                    ref='list'
                    style={{margin: 35}}
                    dataSource={this.state.list}
                    renderRow={this.renderRow}
                    onEndReached={this.getEndReached.bind(this)}
                />
                {/*<ScrollView>
                    <ListView
                        style={{margin: 35}}
                        dataSource={this.state.list}
                        renderRow={this.renderRow}
                        onEndReached={this.getEndReached.bind(this)}
                    />
                    <View style={{height: 100}}>
                        <TouchableWithoutFeedback onPress={this.lastChapter.bind(this)}>
                            <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                                bottom: 40, left: 35
                            }, BaseStyle.txtCenter]}>
                                <Text style={{fontSize: 28, color: '#007aff'}}>{'上一章'}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={this.nextChapter.bind(this)}>
                            <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                                bottom: 40, right: 35
                            }, BaseStyle.txtCenter]}>
                                <Text style={{fontSize: 28, color: '#007aff'}}>{'下一章'}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ScrollView>*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: -20
    }
})

function mapStateToProps(state) {
    const { chapter, image } = state
    return {
        chapter,
        image
    }
}

export default connect(mapStateToProps)(CartoonChapter)



