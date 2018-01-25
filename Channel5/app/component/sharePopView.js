import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';

export default class SharePOP extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
          <View style={styles.container} >
              <TouchableWithoutFeedback onPress={this.props.cancel} >
                  <View style={styles.blackIntouch} ></View>
              </TouchableWithoutFeedback>

              <View style={styles.shareContainer} >
                  <View style={styles.shareBtnContainer} >
                      <TouchableWithoutFeedback onPress={this.props.Login} >
                          <View style={styles.shareBtnView} >
                              <Image style={styles.shareBtnImg} source={require("../images/icon_sina.png")} />
                              <Text style={styles.shareBtnText}>
                                  微博
                              </Text>
                          </View>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={this.props.Login} >
                          <View style={styles.shareBtnView} >
                              <Image style={styles.shareBtnImg} source={require("../images/icon_wechat.png")} />
                              <Text style={styles.shareBtnText}>
                                  微信
                              </Text>
                          </View>
                      </TouchableWithoutFeedback>
                      <TouchableWithoutFeedback onPress={this.props.Login} >
                          <View style={styles.shareBtnView} >
                              <Image style={styles.shareBtnImg} source={require("../images/icon_qq.png")} />
                              <Text style={styles.shareBtnText}>
                                  QQ
                              </Text>
                          </View>
                      </TouchableWithoutFeedback>
                  </View>
                    <TouchableWithoutFeedback onPress={this.props.cancel} >
                      <View style={styles.cancelBtnContainer}>
                          <Text style={styles.cancelBtn} >
                              取消
                          </Text>
                      </View>
                    </TouchableWithoutFeedback>
              </View>
          </View>
      );
    }

}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
    },
    blackIntouch:{
        position: 'absolute',
        bottom: 308,
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "black",
        opacity: 0,
    },
    shareContainer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        height: 308,
    },
    shareBtnContainer:{
        flexDirection: 'row',
    },
    shareBtnView:{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 30,
    },
    shareBtnText:{
        fontSize: 25,
        color:"#333333",
        textAlign:'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    shareBtnImg:{
        alignSelf: 'center',
        width: 120,
    },
    cancelBtnContainer:{
        position: 'absolute',
        left: 35,
        right: 35,
        bottom: 35,
        height: 60,
        borderRadius: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#f2eff8",
    },
    cancelBtn:{
        fontSize: 30,
        lineHeight: 60,
        color:"#007aff",
        textAlign: 'center',
        backgroundColor: "transparent",
    }
})
