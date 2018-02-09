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
} from 'react-native';
import {connect} from "react-redux";
import {imageLoaded, imageLoading} from '../../actions/image'

class ChapterItem extends Component {
    constructor(props){
        super(props);
    }

    onImageLayout = (event, rowData) => {
        // const descHeight = event.nativeEvent.layout.height;
        // const descWidth = event.nativeEvent.layout.width;
        // let h = 835
        //
        // const self = this
        // if (rowData.imageUrl && rowData.imageUrl != '') {
        //     Image.getSize(rowData.imageUrl, (width, height) => {
        //         h = descWidth / width * height
        //         console.log(h)
        //         self.refs.itemImage.setNativeProps({
        //             style: {
        //                 height: h,
        //                 width: descWidth,
        //                 marginTop: 20,
        //             }
        //         })
        //     })
        // }
    }

    onLoadEnd = () => {
        // const isComplete = 1
        // this.props.callbackParent(isComplete)
        const {dispatch} = this.props
        dispatch(imageLoaded())
    }

    onLoadStart = () => {
        const {dispatch} = this.props
        dispatch(imageLoading())
    }

    render() {
        const {rowData} = this.props
        return (
            <Image style={{height: 1040}} ref={'itemImage'} onLoadStart={this.onLoadStart.bind(this)} onLoadEnd={this.onLoadEnd.bind(this)} source={{uri: rowData.imageUrl}} />
        );
    }
}

function mapStateToProps(state) {
    const { image } = state
    return {
        image
    }
}

export default connect(mapStateToProps)(ChapterItem)




