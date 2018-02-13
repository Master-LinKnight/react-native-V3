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

export default class ListItemHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionDateTitle}>{this.props.sectionData.dateTitle}</Text>
                <Text style={styles.sectionTitle}>{this.props.sectionData.title}</Text>
                {
                    this.props.sectionData.iconUrl && this.props.sectionData.iconUrl != '' ?
                        <TouchableWithoutFeedback onPress={this.props.skipToPersonal}>
                            <Image style={styles.sectionAvatar} source={{uri: this.props.sectionData.iconUrl}}/>
                        </TouchableWithoutFeedback>
                        : null
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    sectionHeader: {
        height: 184,
        flexDirection:'column',
        backgroundColor: '#ffffff'
    },
    sectionDateTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: 35,
        color: '#999999'
    },
    sectionTitle: {
        fontSize: 60,
        fontWeight: 'bold',
        marginTop: 28,
        marginLeft: 35
    },
    sectionAvatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        position: 'absolute',
        right: 35,
        top: 85
    }
})