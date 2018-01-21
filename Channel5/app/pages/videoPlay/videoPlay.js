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
    WebView
} from 'react-native';

export default class videoPlay extends Component {
    constructor(props){
        super(props);
        this.state = {
            isfreshing: false
        }
    }
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    componentDidMount() {
        const {navigation} = this.props
        let detailData = navigation.state.params.data
        console.log(detailData)
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

    render() {
        const {navigation} = this.props
        let detailData = navigation.state.params.data
        console.log(detailData)
        return (
            <View style={styles.container}>
                {
                    detailData.url && detailData.url != '' ?
                        <WebView
                            style={styles.web}
                            source={{uri: detailData.url}}
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
        top:0,
        bottom:0,
        left:0,
        right:0,
    }
});



