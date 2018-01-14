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
    Text,
    TouchableWithoutFeedback,
    ListView
} from 'react-native';
import BaseStyle from '../../common/style'
import {novelChapter} from '../../actions/chaper'
import {connect} from "react-redux";
import Loading from '../../common/loading'

class NovelChapters extends Component {
    constructor(props){
        super(props);
        this.state = {
            subtitle: '',
            title: '',
            list: new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !== row2
            })
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
        const {navigation} = this.props
        navigation.goBack()
    }

    componentWillReceiveProps = (nextProps, nextState) => {
        // console.log(nextProps.chapter)
        if (nextProps.chapter.status != this.props.status && nextProps.chapter.status == 'FETCH_NOVEL_CHAPTER_SUCCESS') {
            const {data} = nextProps.chapter
            const {dispatch, navigation} = this.props
            const detailData = navigation.state.params.data
            console.log(data)

            console.log(detailData)
            const arrayName = data.name.split(' ')
            console.log(array)
            this.setState({
                title: arrayName[1],
                subtitle: detailData.name + ' ' + arrayName[0]
            })

            let content = data.content
            content = content.replace(/\r\n/g, '')
            content = content.replace(/&nbsp;/g, '  ')
            content = content.replace(/&lt;/g, '')
            content = content.replace(/\/&gt;/g, '')
            content = content.replace(/&gt;/g, '')
            content = content.replace(/\/d\/r\/ble/g, '')
            // console.log(content)
            const array = content.split('<br>')
            let arrayList = []
            // console.log(array)
            if (array && array.length > 0) {
                for (let v of array) {
                    arrayList.push({
                        text: v
                    })
                }

                this.setState({
                    list: this.state.list.cloneWithRows(arrayList)
                })
            }
        }
    }

    componentDidMount = () => {
        const {dispatch, navigation} = this.props
        const detailData = navigation.state.params.data
        console.log(detailData)
        const array = detailData.title.split(' ')
        console.log(array)
        this.setState({
            title: array[1],
            subtitle: detailData.name + ' ' + array[0]
        })
        let params = {}
        params.ChapterId = detailData.id
        dispatch(novelChapter(params))
    }

    renderRow = (rowData) => {
        return (
            <View>
                <Text style={{fontSize: 30, color: '#333333', lineHeight: 48}}>{rowData.text}</Text>
            </View>
        )
    }

    lastChapter = () => {
        const {chapter, dispatch} = this.props
        const detailData = chapter.data
        let params = {}
        params.ChapterId = detailData.last
        dispatch(novelChapter(params))
    }

    nextChapter = () => {
        const {chapter, dispatch} = this.props
        const detailData = chapter.data
        let params = {}
        params.ChapterId = detailData.next
        dispatch(novelChapter(params))
    }

    render() {
        const {chapter} = this.props
        return (
            <ScrollView style={styles.container}>
                <Loading size={'large'} visible={chapter.isFreshing && chapter.status == 'FETCH_CHAPTER_DATA_LOADING'}/>
                <View style={{height: 150}}>
                    <TouchableWithoutFeedback onPress={this.skipToGoBack.bind()}>
                        <Image style={{height: 50, width: 50, position: 'absolute', top: 78, left: 35}} source={require('../../images/return.png')}/>
                    </TouchableWithoutFeedback>
                    <Text style={{fontSize: 30, color: '#333333', position: 'absolute', top: 86, left: 125}}>{'字体：'}</Text>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 50, position: 'absolute', top: 76, left: 210,
                        backgroundColor: '#f0f0f7', borderRadius: 4
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'大'}</Text>
                    </View>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 50, position: 'absolute', top: 76, left: 285,
                        backgroundColor: '#f0f0f7', borderRadius: 4
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'中'}</Text>
                    </View>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 50, position: 'absolute', top: 76, left: 360,
                        backgroundColor: '#f0f0f7', borderRadius: 4
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'小'}</Text>
                    </View>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 130, position: 'absolute', top: 76, left: 440,
                        backgroundColor: '#f0f0f7', borderRadius: 25
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'护眼'}</Text>
                    </View>
                    <View style={[BaseStyle.txtCenter, {height: 50, width: 130, position: 'absolute', top: 76, left: 590,
                        backgroundColor: '#f0f0f7', borderRadius: 25
                    }]}>
                        <Text style={{fontSize: 25, color: '#007aff'}}>{'夜间'}</Text>
                    </View>
                </View>
                <View style={{height: 1, backgroundColor: '#999999'}}/>
                <View style={{height: 240}}>
                    <Text style={{fontSize: 24, color: '#999999', position: 'absolute', left: 35, top: 27}}>{this.state.subtitle}</Text>
                    <Text style={{fontSize: 60, color: '#000000', position: 'absolute', left: 35, top: 75, fontWeight: '900'}}>{this.state.title}</Text>
                    <TouchableWithoutFeedback onPress={this.lastChapter.bind(this)}>
                        <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                            bottom: 0, left: 35
                        }, BaseStyle.txtCenter]}>
                            <Text style={{fontSize: 28, color: '#007aff'}}>{'上一章'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.nextChapter.bind(this)}>
                        <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                            bottom: 0, right: 35
                        }, BaseStyle.txtCenter]}>
                            <Text style={{fontSize: 28, color: '#007aff'}}>{'下一章'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <ListView
                    style={{margin: 35}}
                    dataSource={this.state.list}
                    renderRow={this.renderRow}
                />
                <View style={{height: 100}}>
                    <TouchableWithoutFeedback onPress={this.lastChapter.bind(this)}>
                        <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                            bottom: 0, left: 35
                        }, BaseStyle.txtCenter]}>
                            <Text style={{fontSize: 28, color: '#007aff'}}>{'上一章'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.nextChapter.bind(this)}>
                        <View style={[{height: 56, width: 184, borderRadius: 28, backgroundColor: '#f0f0f7', position: 'absolute',
                            bottom: 0, right: 35
                        }, BaseStyle.txtCenter]}>
                            <Text style={{fontSize: 28, color: '#007aff'}}>{'下一章'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
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
    }
});

function mapStateToProps(state) {
    const { chapter } = state
    return {
        chapter
    }
}

export default connect(mapStateToProps)(NovelChapters)



