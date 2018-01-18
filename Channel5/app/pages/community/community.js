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
        let headers = [];

        for (let i = 0; i < 4; i++) {
            headers.push({
                name:"分类" + i,
                time:"2018年1月" + i + "日"
            })
        }
        this.setState({headers:headers})

        for (let i = 0; i < 4; i++) {
            let datas = []
            for (let j = 0; j < 3; j++) {
                datas.push(
                    {
                        topicTitle:"我的标题",
                        userAvatar:"http://images.hezikele.com/channel5/avatar/2.jpg",
                        description:"这个是描述这个是描述这个是描述这个是描述这个是描述这个是描述这个是描述这个是描述",
                        topicId:"7fe685d3-935c-49ac-b882-a802202aa885"
                    }
                )
            }
            sections.push(
                {
                    key:i,
                    data:datas,
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
        return (
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
                    <TouchableWithoutFeedback
                        onPress={this.onItemClick}>
                        <View>
                            <Text style={styles.listItemCheckText} >查看</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }

    _renderHeader = (info) => {
        return (
            <View style={styles.listTitleContainer} >
                <Text style={[styles.createInfoMargin,styles.createTime]}>
                    {this.state.headers[info.section.key].time}
                </Text>
                <Text style={[styles.createInfoMargin,styles.createName]} >
                    {this.state.headers[info.section.key].name}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container} >
              <View style={styles.postBarTitleContainer} >
                  <TouchableWithoutFeedback
                      onPress={()=>alert("返回")}>
                      <View style={styles.postBarTitleBackButtonContainer} >
                          <Image style={styles.postBarTitleBackImg} source={require("../../images/return.png")} />
                      </View>
                  </TouchableWithoutFeedback>
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
        marginRight: 85,
        fontSize: 30,
        color: "#333333",
    },
    listTitleContainer:{
        marginTop:25,
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
