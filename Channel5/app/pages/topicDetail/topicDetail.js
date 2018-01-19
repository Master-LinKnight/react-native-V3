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

const singleTopicInfo = {
  "topic": {
    "bar": {
      "topics": "纳米科技",
      "barId": "e079088f-e8b1-479b-8cfe-421025bc30f5",
      "displayName": "鲁磊的论坛",
      "barAvatar": "http://images.hezikele.com/channel5/avatar/1.jpg",
      "userName": "lei",
      "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
      "userAvatar": "../../images/themePicture.png",
      "description": "随便什么随便什么随便什么随便什么随便什么随便什么随便什么随便什么随便什么随便什么",
      "largePic": "datu"
    },
    "comments": [
      {
        "commentId": "a31f6163-9a54-4413-8db6-42c86ad5fd56",
        "topicId": "872c2181-42c0-40fd-a200-26fbb87120d1",
        "comment": "ABCDEFGABCDEFG",
        "photos": [],
        "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
        "userName": "lei",
        "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
        "photoString": "../../images/themePicture.png"
        },
        {
          "commentId": "a31f6163-9a54-4413-8db6-42c86ad5fd56",
          "topicId": "872c2181-42c0-40fd-a200-26fbb87120d1",
          "comment": "ABCDEFGABCDEFG",
          "photos": [],
          "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
          "userName": "lei",
          "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
          "photoString": null,
        },
        {
          "commentId": "a31f6163-9a54-4413-8db6-42c86ad5fd56",
          "topicId": "872c2181-42c0-40fd-a200-26fbb87120d1",
          "comment": "ABCDEFGABCDEFG",
          "photos": [],
          "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
          "userName": "lei",
          "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
          "photoString": "../../images/themePicture.png"
        },
        {
          "commentId": "a31f6163-9a54-4413-8db6-42c86ad5fd56",
          "topicId": "872c2181-42c0-40fd-a200-26fbb87120d1",
          "comment": "ABCDEFGABCDEFG",
          "photos": [],
          "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
          "userName": "lei",
          "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
          "photoString": null,
        },
        {
          "commentId": "a31f6163-9a54-4413-8db6-42c86ad5fd56",
          "topicId": "872c2181-42c0-40fd-a200-26fbb87120d1",
          "comment": "ABCDEFGABCDEFG",
          "photos": [],
          "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
          "userName": "lei",
          "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
          "photoString": null,
        },
        {
          "commentId": "a31f6163-9a54-4413-8db6-42c86ad5fd56",
          "topicId": "872c2181-42c0-40fd-a200-26fbb87120d1",
          "comment": "ABCDEFGABCDEFG",
          "photos": [],
          "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
          "userName": "lei",
          "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
          "photoString": "../../images/themePicture.png"
        },
        {
          "commentId": "a31f6163-9a54-4413-8db6-42c86ad5fd56",
          "topicId": "872c2181-42c0-40fd-a200-26fbb87120d1",
          "comment": "ABCDEFGABCDEFG",
          "photos": [],
          "userId": "911f6a86-73d7-42b6-b860-0b17a1a4609a",
          "userName": "lei",
          "userAvatar": "http://images.hezikele.com/channel5/avatar/2.jpg",
          "photoString": null,
        }
    ],
    "barId": "00000000-0000-0000-0000-000000000000",
    "topicId": "00000000-0000-0000-0000-000000000000",
    "topicTitle": "纳米科技",
    "userAvatar": "../../images/themePicture.png",
    "userName": "白羽飞凤",
    "userId": "00000000-0000-0000-0000-000000000000",
    "commentCount": 0,
    "description": "随便什么随便什么随便什么随便什么随便什么随便什么随便什么随便什么随便什么随便什么",
  }
}

class TopicItem extends Component{

    constructor(props){
        super(props)

    }

    isShowPhoto = () => {
        if (this.props.photo!=null) {
            return(
                <Image style={styles.topicItemPhoto}
                    source={
                        // {
                        //     uri:this.props.photo,
                        //     cache: 'force-cache'
                        // }
                        require("../../images/themePicture.png")
                    }
                />
            )
        }
    }

    render(){
        return (
            <View style={[styles.topicItemContainer,{backgroundColor: this.props.bgColor}]}>
                <View style={styles.topicItemInfoContainer} >
                    <View style={styles.topicItemUserInfoContainer} >
                        <Image style={styles.topicItemUserIcon}
                            source={
                                // {
                                //     uri:this.props.userIcon,
                                //     cache: 'force-cache'
                                // }
                                require("../../images/pic_head.png")
                            } />
                        <Text style={styles.topicItemUserName}>
                            {this.props.userName}
                        </Text>
                    </View>
                    <Text style={styles.topicItemTime} >
                        {this.props.createTime}
                    </Text>
                </View>
                <Text style={styles.topicItemDescripton} numberOfLines={5} >
                    {this.props.descripton}
                </Text>
                {this.isShowPhoto()}
            </View>
        )
    }
}

export default class TopicDetail extends Component {
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

    getData(){
        let sections = []
        sections.push(
            {
                key:1,
                data:singleTopicInfo.topic.comments
            }
        )
        this.setState(
            {
                header: singleTopicInfo.topic,
                sections:sections,
            }
        )
    }

    componentDidMount(){
        this.getData()
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
                            //     uri:headdata.barAvatar,
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
                                {headdata.topicTitle}
                            </Text>
                            <View style={styles.headerTitleNameContainer}>
                                <Image style={styles.headerUserIcon}
                                source={require("../../images/icon-user.png")} />
                                <Text style={styles.headerTitleName} >
                                    {headdata.userName}
                                </Text>
                            </View>

                        </View>
                </Image>
                <TopicItem bgColor={"#f3f3f3"} userName={headdata.userName} userIcon={"../../images/pic_head.png"} createTime={"2018-18-18"} descripton={headdata.description} photo={null} />
            </View>
        )
    }

    _renderItem = (item) => {
        return (
            <TopicItem bgColor={"#ffffff"} userName={item.item.userName} userIcon={item.item.userAvatar} createTime={"2018-18-18"} descripton={item.item.comment} photo={item.item.photoString} />
        )
    }

    _extraUniqueKey(item ,index){
        return "index"+index+item;
    }

    render(){
        return (
            <View style={styles.container} >
                <SectionList
                    ref='list'
                    // refreshing={true}
                    // onRefresh={() => alert("下拉刷新")}
                    onEndReachedThreshold={0.1}
                    onEndReached={() => alert("上拉加载")}
                    renderItem={this._renderItem}
                    // renderSectionHeader={this._renderHeader}
                    ListHeaderComponent={this._renderHeader}
                    sections={this.state.sections}
                    keyExtractor={this._extraUniqueKey}
                    ItemSeparatorComponent={() => <View style={styles.listLine} />}

                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        top: 40,
    },
    headerContainer:{
        flex: 1,
        backgroundColor: "white",
    },
    headerBgImg:{
        width: width,
        height: 124*width/300,
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
        paddingBottom: 20,
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
    topicItemContainer:{

    },
    topicItemInfoContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topicItemUserInfoContainer:{
        flexDirection: 'row',
    },
    topicItemUserIcon:{
        marginTop: 20,
        marginLeft: 25,
        marginRight: 15,
        width: 60,
        height: 60,
        borderRadius:30,
    },
    topicItemUserName:{
        marginTop: 20,
        fontSize: 24,
        color: "#333333",
        justifyContent: 'center',
        alignSelf: 'center',
    },
    topicItemTime:{
        marginTop: 30,
        marginRight: 25,
        fontSize: 24,
        color: "#999999",
        justifyContent: 'center',
    },
    topicItemDescripton:{
        color:"#333333",
        fontSize: 30,
        backgroundColor:"transparent",
        paddingTop: 25,
        paddingLeft: 25,
        paddingBottom: 25,
        paddingRight: 25,
        lineHeight: 40,
    },
    topicItemPhoto:{
        width: width-50,
        height: 163*(width-50)/340,
        alignSelf: 'center',
    },
    listLine:{
        height: 15,
        marginBottom: 15,
        backgroundColor: "#ffffff"
    }
})
