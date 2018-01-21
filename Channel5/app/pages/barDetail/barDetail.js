import React, { Component } from 'react';
import {
    Platform,
    Image,
    StyleSheet,
    ScrollView,
    View,
    Text,
    SectionList,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';


const {width,height,scale} = Dimensions.get('window');
if (width < 750) {
    width = 750
}

const singleBarInfo = {
  "barInfos": {
    "topics": [
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "872c2181-42c0-40fd-a200-26fbb87120d1",
        "topicTitle": "关于One For All个性",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "Deku",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 15
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "咔酱个性的另类使用方法",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "爆豪",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 333
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "欧叔会死么",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "AllMight",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 1400
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "八百万赛高",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "异性恋都去死",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 1
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "只看轰八配",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "老公公",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 1
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "为什么丽日酱在日本本土不受欢迎",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "小公举",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 16
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "你最喜欢的个性是什么",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "无个性熊",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 1
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "百万的披风那一段，热血喷了我一脸",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "百万的披风",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 111
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "主推佐助鸣人，我就是乱入，你能咋滴",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "火影赛高",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 17
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "梅雨酱好萌啊",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "青蛙",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 98
      },
      {
        "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
        "topicId": "7fe685d3-935c-49ac-b882-a802202aa885",
        "topicTitle": "葡萄太淫荡了，哈哈哈哈",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "userName": "我不是英雄",
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "commentCount": 1
      }
    ],
    "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
    "displayName": "我的英雄学院吧",
    "barAvatar": "../../images/themePicture.png",
    "userName": "施主且慢",
    "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
    "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
    "description": "废材英雄崛起史，知道什么叫热血吗？？？",
    "largePic": "datu"
  }
}

export default class BarDetail extends Component {
    constructor(props){
        super(props);

        this.state = {
            header:{},
            sections:[]
        }

    }

    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    pushToTopic = () => {
        const Navigation = this.props.navigation
        Navigation.navigate('TopicDetail', {data: {
            id: "barId"
        }})
    }

    getData(){
        let sections = []
        sections.push(
            {
                key:1,
                data:singleBarInfo.barInfos.topics
            }
        )
        this.setState(
            {
                header: singleBarInfo.barInfos,
                sections:sections,
            }
        )
    }

    _renderHeader = (item) => {
        let headdata = this.state.header
        const Navigation = this.props.navigation

        return (
            <View style={styles.headerContainer}>
                <Image  style={styles.headerBgImg}
                        resizeMode="cover"
                        source={
                            // {
                            //     uri:this.state.header.barAvatar,
                            //     cache: 'force-cache'
                            // }
                            require("../../images/themePicture.png")
                        } >
                        <TouchableWithoutFeedback
                            onPress={()=>Navigation.goBack()}>
                            <View style={styles.headerBackBtnContainer} >
                                <Image style={styles.headerBackBtnBgImg} source={require("../../images/close.png")} />
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.headerInfoContainer} >
                            <Text style={styles.headerTitleDisplay} >
                                {this.state.header.displayName}
                            </Text>
                            <View style={styles.headerTitleNameContainer}>
                                <Image style={styles.headerUserIcon}
                                source={require("../../images/icon-user.png")} />
                                <Text style={styles.headerTitleName} >
                                    {this.state.header.userName}
                                </Text>
                            </View>

                        </View>
                </Image>
            </View>
        )
    }

    _renderItem = (item) => {
        return (
            <TouchableWithoutFeedback
                onPress={this.pushToTopic}>
                <View style={styles.itemContainer}>
                    <Text
                        style={styles.itemDescription}
                        numberOfLines={5}
                        >
                            {item.item.topicTitle}
                    </Text>
                    <View style={styles.itemInfomation} >
                        <TouchableWithoutFeedback
                            onPress={()=>alert(item.item.userName)}>
                            <View>
                                <Text style={styles.itemOwner} >
                                    {item.item.userName}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>

                        <View style={styles.topicInfoContainer} >
                            <View style={[styles.itemTimeContainer,styles.itemShower]}>
                                <Image style={styles.itemIcon} resizeMode="contain"  source={require("../../images/icon_Time.png")} />
                                <Text  style={[styles.itemInfoTxt,styles.itemTimeTxt]}>
                                    2018-02-02
                                </Text>
                            </View>
                            <View style={[styles.itemCommentContainer,styles.itemShower]}>
                                <Image style={styles.itemIcon} resizeMode="contain"  source={require("../../images/icon_Messages.png")} />
                                <Text  style={[styles.itemInfoTxt,styles.itemCommentCount]}>
                                    {item.item.commentCount}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    componentDidMount(){
        this.getData()
    }

    _extraUniqueKey(item ,index){
        return "index"+index+item;
    }

    render() {
        return (
            <View style={styles.container} >
                <SectionList
                    ref='list'
                    // refreshing={true}
                    // onRefresh={() => alert("下拉刷新")}
                    onEndReachedThreshold={0.1}
                    // onEndReached={() => alert("上拉加载")}
                    renderItem={this._renderItem}
                    // renderSectionHeader={this._renderHeader}
                    ListHeaderComponent={this._renderHeader}
                    sections={this.state.sections}
                    keyExtractor={this._extraUniqueKey}
                    ItemSeparatorComponent={() => <View style={styles.listLine} />}

                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        top: 40,
        backgroundColor: "white",
    },
    headerContainer:{
        flex: 1,
        backgroundColor: "white",
    },
    headerBgImg:{
        width: width,
        height: 735*width/1125,
        justifyContent: 'space-between',
    },
    headerBackBtnContainer:{
        paddingTop: 20,
        paddingLeft: 25,
    },
    headerBackBtnBgImg:{
        width: 60,
        height: 60,
    },
    headerInfoContainer:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: 50,
    },
    headerTitleDisplay:{
        fontSize: 60,
        color: "white",
        backgroundColor:'transparent',
        paddingRight: 30,
        fontWeight: 'bold',
    },
    headerTitleNameContainer:{
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop: 35,
        paddingRight: 30,
    },
    headerTitleName:{
        fontSize: 35,
        color: "white",
        backgroundColor:'transparent',
        paddingLeft: 30,
        fontWeight: 'bold',
    },
    headerUserIcon:{

    },
    itemContainer:{
        backgroundColor: "white"
    },
    itemDescription:{
        fontSize: 30,
        color: "#333333",
        paddingLeft: 25,
        paddingTop: 25,
        paddingRight: 25,
        paddingBottom: 25
    },
    itemInfomation:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topicInfoContainer:{
        paddingRight: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemOwner:{
        paddingLeft: 25,
        fontSize: 30,
        color: "#007AFF"
    },
    itemInfoTxt:{
        fontSize: 30,
        color: "#999999",
        textAlign: 'center',
        justifyContent: 'center',
        paddingLeft: 5,
    },
    itemShower:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 25,
    },
    itemIcon:{
        height: 33,
    },
    listLine:{
        height: 1,
        marginLeft: 25,
        marginRight: 25,
        marginTop: 15,
        backgroundColor: "#c9c6c6"
    }
});
