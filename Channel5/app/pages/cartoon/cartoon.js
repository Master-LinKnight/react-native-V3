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
var Navigation
export default class Cartoon extends Component {
    constructor(props){
        super(props);

    }
    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    onItemClick = (rowData) => {
        Navigation.navigate('CartoonDetail')
    }

    render() {
        let w = '100%'
        let h = 1010
        Navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={this.onItemClick.bind()}>
                    <Image style={{height: h, width: w, justifyContent: 'center', alignItems: 'center'}} source={require('../../images/index_img02.png')}>

                    </Image>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef'
    }
});



