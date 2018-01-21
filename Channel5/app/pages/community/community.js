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
} from 'react-native';

const CATGORYDATA = [
    {
        groupName:"热门精华",
        createTime:"2018年1月1日",
        groups:[
            {
                topicTitle:"凡人修仙传",
                userAvatar:"http://images.hezikele.com/channel5/avatar/1.jpg",
                description:"喜欢《凡人修仙传》的筒子快到碗里来！！！",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            },
            {
                topicTitle:"海贼王",
                userAvatar:"http://images.hezikele.com/channel5/avatar/2.jpg",
                description:"启航出发！！我一定要成为最伟大的海贼！！！",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            },
            {
                topicTitle:"漫威",
                userAvatar:"http://images.hezikele.com/channel5/avatar/1.jpg",
                description:"如果让你选择一个最喜欢的漫威超级英雄，你会选胸肌大的呢，还是选个胸肌大的呢？",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            }
        ]
    },
    {
        groupName:"小说吧",
        createTime:"2018年1月12日",
        groups:[
            {
                topicTitle:"斗破苍穹",
                userAvatar:"http://images.hezikele.com/channel5/avatar/2.jpg",
                description:"史上最火退婚流，土豆出品。。。",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            },
            {
                topicTitle:"陈二狗的妖孽人生",
                userAvatar:"http://images.hezikele.com/channel5/avatar/1.jpg",
                description:"你不用顶天立地，因为我也只是一朵狗尾巴花而已~",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            },
            {
                topicTitle:"斗罗大陆",
                userAvatar:"http://images.hezikele.com/channel5/avatar/2.jpg",
                description:"三少灌水留集大成之作，褒贬由你评说。",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            }
        ]
    },
    {
        groupName:"影视吧",
        createTime:"2018年1月7日",
        groups:[
            {
                topicTitle:"拯救大兵瑞恩",
                userAvatar:"http://images.hezikele.com/channel5/avatar/1.jpg",
                description:"汤姆汉克斯千里驰援马特达蒙",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            },
            {
                topicTitle:"卧虎藏龙",
                userAvatar:"http://images.hezikele.com/channel5/avatar/1.jpg",
                description:"李安，当下华人中最伟大的导演，没有之一，前无古人",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            },
            {
                topicTitle:"战狼2",
                userAvatar:"http://images.hezikele.com/channel5/avatar/2.jpg",
                description:"中国大兵孤胆拯救，扬我国威",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            }
        ]
    },
    {
        groupName:"动漫吧",
        createTime:"2018年1月6日",
        groups:[
            {
                topicTitle:"海贼王",
                userAvatar:"http://images.hezikele.com/channel5/avatar/1.jpg",
                description:"启航出发！！我一定要成为最伟大的海贼！！！",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            },
            {
                topicTitle:"我的英雄学院",
                userAvatar:"http://images.hezikele.com/channel5/avatar/2.jpg",
                description:"英雄的披风，就是为了给哪些受到坏人伤害的无助少女带去温暖的啊",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            },
            {
                topicTitle:"fade系列",
                userAvatar:"http://images.hezikele.com/channel5/avatar/1.jpg",
                description:"狗咬狗一嘴毛",
                topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
            }
        ]
    },
]

export default class Community extends Component {
    constructor(props){
        super(props);

        this.state = {
            headers:[],
            sections:[]
        }

    }

    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }

    componentDidMount(){
        this.getData()
    }

    _extraUniqueKey(item ,index){
        return "index"+index+item;
    }

    getData(){
        let sections = [];
        // let headers = [];

        // for (let i = 0; i < 4; i++) {
        //     headers.push({
        //         name:(CATGORYDATA[i]!=null)?CATGORYDATA[i]:"分类",
        //         time:"2018年1月" + (i+15) + "日"
        //     })
        // }
        this.setState({headers:CATGORYDATA})

        // for (let i = 0; i < 4; i++) {
        //     let datas = []
        //     for (let j = 0; j < 3; j++) {
        //         datas.push(
        //             {
        //                 topicTitle:"我的标题",
        //                 userAvatar:"http://images.hezikele.com/channel5/avatar/2.jpg",
        //                 description:"这个是描述这个是描述这个是描述这个是描述这个是描述这个是描述这个是描述这个是描述",
        //                 topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
        //             }
        //         )
        //     }
        //     sections.push(
        //         {
        //             key:i,
        //             data:datas,
        //         }
        //     )
        // }
        for (var i = 0; i < CATGORYDATA.length; i++) {
                sections.push(
                    {
                        key:i,
                        data:CATGORYDATA[i].groups,
                    }
                )
        }

        this.setState({sections:sections})
    }

    onItemClick = () => {
        const Navigation = this.props.navigation
        Navigation.navigate('BarDetail', {data: {
            id: "barId"
        }})
    }

    _renderItem = (info) => {
        // console.log("-----------",info)
        return (
            <TouchableWithoutFeedback onPress={this.onItemClick}>
            <View style={styles.listItemContainer} >

                <View style={styles.listItemIconContainer} >
                    <Image style={styles.cardIcon}
                        source={
                            {
                                uri:info.item.userAvatar,
                                cache: 'force-cache'
                            }
                        } />
                </View>
                <View style={styles.listItemDocContainer} >
                    <Text style={styles.listItemTitle} >
                        {info.item.topicTitle}
                    </Text>
                    <Text style={styles.listItemDesc} numberOfLines={1}>
                        {info.item.description}
                    </Text>
                </View>
                <View style={styles.listItemCheckBtnContainer} >
                        <Text style={styles.listItemCheckText} >查看</Text>
                </View>
            </View>
            </TouchableWithoutFeedback>
        )
    }

    _renderHeader = (info) => {
        // console.log("------header------",info)
        return (
            <View style={styles.listTitleContainer} >
                <Text style={[styles.createInfoMargin,styles.createTime]}>
                    {this.state.headers[info.section.key].createTime}
                </Text>
                <Text style={[styles.createInfoMargin,styles.createName]} >
                    {this.state.headers[info.section.key].groupName}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container} >
              <View style={styles.postBarTitleContainer} >
                  {/*<TouchableWithoutFeedback*/}
                      {/*onPress={() => console.log("返回")}>*/}
                      {/*<View style={styles.postBarTitleBackButtonContainer} >*/}
                          {/*<Image style={styles.postBarTitleBackImg} source={require("../../images/return.png")} />*/}
                      {/*</View>*/}
                  {/*</TouchableWithoutFeedback>*/}
                  <Text style={styles.postBarTitleText} >
                      大神贴吧
                  </Text>
              </View>
              <View style={styles.listContainer} >
                  <SectionList
                      ref='list'
                      keyExtractor={this._extraUniqueKey}
                      renderItem={this._renderItem}
                      renderSectionHeader={this._renderHeader}
                      sections={this.state.sections}
                      stickySectionHeadersEnabled={false}
                  />
              </View>
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
    listContainer: {
        flex: 10
    },
    // postBarContainer:{
    //     flex: 1,
    // },
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
        marginTop: 35,
        // marginRight: 85,
        fontSize: 30,
        color: "#333333",
    },
    listTitleContainer:{
        paddingTop:25,
        backgroundColor: "white"
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
        height: 100
    },
    listItemIconContainer:{
        flex: 1,
    },
    cardIcon:{
        flex: 1,
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
