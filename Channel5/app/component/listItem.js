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

export default class ListItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={{height: 895}}>
                <TouchableWithoutFeedback onPress={this.props.onItemClick}>
                    <View style={styles.rowView}>
                        <Image style={styles.rowImageView} source={{uri: this.props.rowData.imageUrl}}>
                            <Text style={styles.rowSubhead}>{this.props.rowData.subhead}</Text>
                            <Text style={styles.rowTitle}>{this.props.rowData.title}</Text>
                            <Text style={styles.rowDuration}>{this.props.rowData.duration}</Text>
                            {
                                this.props.isVideo ? <Image style={styles.rowPlay} source={require('../images/icon_play.png')}/> : null
                            }
                        </Image>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    rowView: {
        height: 835,
        marginTop: 25,
        marginLeft: 35,
        marginRight: 35,
        width: 680,
        borderRadius: Platform.OS === 'ios' ? 30 : 0,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowRadius: 12,
        elevation: 8
    },
    rowImageView: {
        height: 835,
        width: 680,
        borderRadius: Platform.OS === 'ios' ? 30 : 0
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
        // alignSelf: 'center',
        position: 'absolute',
        top: 350,
        left: 270
    }
})