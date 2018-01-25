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
    WebView,
    Dimensions,
    PixelRatio
} from 'react-native';
import Orientation from 'react-native-orientation'
export default class videoPlay extends Component {
    constructor(props){
        super(props);
        this.state = {
            isfreshing: false,
            html: ''
        }
    }
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    componentDidMount() {
        const {navigation} = this.props
        var {height, width} = Dimensions.get('window')
        let detailData = navigation.state.params.data
        console.log(height, width)
        const html = `<html>
            <video id="myVideo" controls="controls" autoplay="autoplay" width="100%" height="30%" onclick="play()" style="margin-top: 30%;">
              <source src="${detailData.url}" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <script>
                function play() {
                    document.getElementById('myVideo').play()
                }
            </script>
        </html>`

        this.setState({
            html: html
        })
    }

    loadComplete = () => {
        this.setState({
            isfreshing: false
        })
    }

    onRenderLoading = () => {
        console.log('loading')
    }

    loadStart = () => {
        this.setState({
            isfreshing: false
        })
    }

    handleMessage = (evt: any) => {
        const message = evt.nativeEvent.data
        console.log(message)
    }

    clickToGoBack = () => {
        const {navigation} = this.props
        navigation.goBack()
    }

    render() {
        const {navigation} = this.props
        let detailData = navigation.state.params.data
        console.log(detailData)
        return (
            <View style={styles.container}>
                <View style={{height: 200}}>
                    <TouchableWithoutFeedback onPress={this.clickToGoBack.bind(this)}>
                        <View style={{height: 50, marginTop: 55}}>
                            <Image style={styles.backView} source={require('../../images/return.png')}/>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {
                    this.state.html && this.state.html != '' ?
                        <WebView
                            style={styles.web}
                            source={{html: this.state.html}}
                            // onNavigationStateChange  = {(navState) => this._onNavigationStateChange (navState)}
                            automaticallyAdjustContentInsets={true}
                            scalesPageToFit={true}
                            onLoadEnd={this.loadComplete}
                            onLoadStart={this.loadStart}
                            renderLoading={this.onRenderLoading}
                            onMessage={(event)=>{console.log(event.nativeEvent)}}
                            onNavigationStateChange={(event)=>{console.log(event)}}
                        /> : null
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: -20
    },
    web: {
        position: 'absolute',
        top:200,
        bottom:0,
        left:0,
        right:0,
    },
    backView: {
        height: 50,
        width: 50,
        marginLeft: 35
    }
});



