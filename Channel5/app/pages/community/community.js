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
} from 'react-native';

class ListItem extends Component {
    render(){
        return(
            <View style={styles.listItemContainer} >
                <View style={styles.listItemIconContainer} >
                    <Image style={styles.cardIcon} source={require("../../images/pic_head.png")} />
                </View>
                <View style={styles.listItemDocContainer} >
                    <Text style={styles.listItemTitle} >2018年的你 新年快乐</Text>
                    <Text style={styles.listItemDesc} >(记录贴) 写在2018年前提醒自己</Text>
                </View>
                <View style={styles.listItemCheckBtnContainer} >
                    <Text style={styles.listItemCheckText} >查看</Text>
                </View>
            </View>
        )
    }
}

class PostBarList extends Component {

    _returnListItem(){
        let listItems = []
        for (var i = 0; i < 3; i++) {
            listItems.push(
                <ListItem key={i} />
            )
        }
        return listItems;
    }

    render(){
        let ListItems = this._returnListItem()
        return(
            <View style={styles.listTitleContainer} >
                <Text style={[styles.createInfoMargin,styles.createTime]}>
                    12月17日 星期三
                </Text>
                <Text style={[styles.createInfoMargin,styles.createName]} >
                    精华帖
                </Text>
                {ListItems}
                <View style={styles.lastLineOfItem} ></View>
            </View>
        )
    }
}

export default class Community extends Component {
    constructor(props){
        super(props);

    }

    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.postBarTitleContainer} >
                    <View style={styles.postBarTitleBackButtonContainer} >
                        <Image style={styles.postBarTitleBackImg} source={require("../../images/close.png")} />
                    </View>
                    <Text style={styles.postBarTitleText} >
                        大神贴吧
                    </Text>
                </View>
                <PostBarList />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    postBarTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    postBarTitleBackButtonContainer: {
        width: 60,
        height: 60,
        marginTop: 45,
        marginLeft: 25,
        borderRadius: 30,
        backgroundColor: "#198bff"
    },
    postBarTitleBackImg: {
        flex: 1,
        alignSelf: 'stretch',
        width: 60,
        height: 60,
    },
    postBarTitleText: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: 45,
        marginRight: 85,
        fontSize: 30,
        color: "#333333",
    },
    listTitleContainer:{
        flex: 10,
    },
    createInfoMargin: {
        marginTop:25,
        marginLeft:25,
    },
    createTime: {
        fontSize: 24,
        color: "#999999",
        fontWeight: '700',
    },
    createName: {
        fontSize: 60,
        color: "#000000",
        marginBottom: 35,
        fontWeight: 'bold',
    },
    listItemContainer: {
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 10,
        marginTop: 15,
    },
    listItemIconContainer:{
        flex: 1,

    },
    cardIcon:{
        borderRadius: 10,
    },
    listItemDocContainer:{
        flex: 5,
        paddingLeft: 25,
        paddingRight: 15,
        flexDirection: 'column',
        justifyContent: 'space-between',
        // borderBottomWidth: 1,
        // borderBottomColor: "#f0f0f7"
    },
    listItemTitle:{
        paddingTop: 10,
        fontSize: 30,
        color: "#000000"
    },
    listItemDesc:{
        fontSize: 24,
        color: "#848485",
        paddingBottom: 10,
    },
    listItemCheckBtnContainer:{
        flex: 1.3,
        backgroundColor: "#f0f0f7",
        height: 50,
        borderRadius: 25,
        alignSelf: 'center',
        justifyContent:'center'
    },
    listItemCheckText: {
        fontSize: 28,
        color: "#007aff",
        textAlign:"center",
        alignSelf: 'center',
    },
    lastLineOfItem: {
        marginTop: 25,
        height: 1,
        width: "100%",
        backgroundColor: "#f0f0f7"
    }
});
