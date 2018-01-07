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

export default class IndexListItem extends Component {
    constructor(props){
        super(props);
    }

    onImageLayout = (event, rowData) => {
        const descHeight = event.nativeEvent.layout.height;
        const descWidth = event.nativeEvent.layout.width;
        let h = 835
        // console.log(descWidth)
        // console.log(rowData)
        const self = this
        if (rowData.imageUrl && rowData.imageUrl != '') {
            Image.getSize(rowData.imageUrl, (width, height) => {
                h = descWidth / width * height
                console.log(h)
                self.refs.item.setNativeProps({
                    style: {
                        height: h + 60
                    }
                })
                self.refs.itemRow.setNativeProps({
                    style: {
                        height: h,
                        marginTop: 25,
                        marginLeft: 35,
                        marginRight: 35,
                        width: descWidth,
                        borderRadius: 30,
                        shadowOffset: {width: 0, height: 0},
                        shadowColor: 'black',
                        shadowOpacity: 0.4,
                        shadowRadius: 12,
                        elevation: 8
                    }
                })
                self.refs.itemImage.setNativeProps({
                    style: {
                        height: h,
                        width: descWidth,
                        borderRadius: 30,
                    }
                })
                self.refs.itemIcon.setNativeProps({
                    style: {
                        width: 128,
                        height: 128,
                        alignSelf: 'center',
                        marginTop: 0
                    }
                })
            })
        }
    }
    onItemClick = (rowData) => {
        const Navigation = this.props.navigation
        Navigation.navigate('VideoDetail', {data: {
            id: rowData.id
        }})
    }

    render() {
        const {rowData} = this.props;
        return (
            <View ref='item' style={{height: 895}}>
                <TouchableWithoutFeedback onPress={this.onItemClick.bind(this, rowData)}>
                    <View ref='itemRow' style={styles.rowView}>
                        <Image ref='itemImage' style={styles.rowImageView} onLayout={(e) => {this.onImageLayout(e, rowData)}} source={{url: rowData.imageUrl}}>
                            <Text style={styles.rowSubhead}>{rowData.subhead}</Text>
                            <Text style={styles.rowTitle}>{rowData.title}</Text>
                            <Text style={styles.rowDuration}>{rowData.duration}</Text>
                            <Image ref='itemIcon' style={styles.rowPlay} source={require('../images/icon_play.png')}/>
                        </Image>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    },
    rowPlay: {
        width: 128,
        height: 128,
        alignSelf: 'center',
        marginTop: 184
    }
})