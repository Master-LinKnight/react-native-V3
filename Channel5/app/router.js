/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';
import { StackNavigator,TabNavigator,DrawerNavigator,addNavigationHelpers } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import TabBarItem from './common/tabBarItem'
import Login from './pages/login/login'
import Index from './pages/index/index'
import Cartoon from './pages/cartoon/cartoon'
import Community from './pages/community/community'
import Novel from './pages/novel/novel'
import Search from './pages/search/search'
import Video from  './pages/video/video'

class Router extends Component {
    render() {
        const TabScreen = TabNavigator({
                Novel: {
                    screen: Novel,
                    navigationOptions: {
                        tabBarLabel: '小说',
                        tabBarIcon: ({focused}) => (
                            <TabBarItem focused={focused} style={styles.tabBarIcon} normalImage={require('./images/icon_novel.png')} selectedImage={require('./images/icon_novel_active.png')}/>
                        )
                    }
                },
                Cartoon: {
                    screen: Cartoon,
                    navigationOptions: {
                        tabBarLabel: '卡通',
                        tabBarIcon: ({focused}) => (
                            <TabBarItem focused={focused} style={styles.tabBarIcon} normalImage={require('./images/icon_cartoon.png')} selectedImage={require('./images/icon_cartoon_active.png')}/>
                        )
                    }
                },
                Video: {
                    screen: Video,
                    navigationOptions: {
                        tabBarLabel: '直播和视频',
                        tabBarIcon: ({focused}) => (
                            <TabBarItem focused={focused} style={styles.tabBarIcon} normalImage={require('./images/icon_video.png')} selectedImage={require('./images/icon_video_active.png')}/>
                        )
                    }
                },
                Community: {
                    screen: Community,
                    navigationOptions: {
                        tabBarLabel: '社区',
                        tabBarIcon: ({focused}) => (
                            <TabBarItem focused={focused} style={styles.tabBarIcon} normalImage={require('./images/icon_com.png')} selectedImage={require('./images/icon_com_active.png')}/>
                        )
                    }
                },
                Search: {
                    screen: Search,
                    navigationOptions: {
                        tabBarLabel: '搜素',
                        tabBarIcon: ({focused}) => (
                            <TabBarItem focused={focused} style={styles.tabBarIcon} normalImage={require('./images/icon_search.png')} selectedImage={require('./images/icon_search_active.png')}/>
                        )
                    }
                },
            },
            {
                animationEnabled: true,
                lazy: true,
                swipeEnabled: false,
                tabBarPosition: 'bottom',
                initialRouteName: 'Video',
                tabBarOptions: {
                    activeTintColor: '#3b5597',
                    // activeBackgroundColor: '#3b5597',
                    pressOpacity: 0.95,
                    inactiveTintColor: '#8a8a8a',
                    showIcon: true,
                    indicatorStyle: {
                        opacity: 0
                    },
                    tabStyle: {
                        padding: 0,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    },
                    labelStyle: {
                        marginBottom: 6,
                        fontSize: 18 // 文字大小
                    },
                    style: {
                        backgroundColor: '#E1E1E1',
                        height: 90
                    },
                    iconStyle: {
                        height: 38,
                        width: 38,
                    }
                },
                backBehavior: 'none',
            });
        const AppScreen = StackNavigator({
                Login: {
                    screen: Login,
                    path: '/pages/Login'
                },
                Index: {
                    screen: TabScreen,
                    path: '/pages/Index'
                }
            },
            {

                initialRouteName: 'Login',
                mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
                headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
                onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
                onTransitionEnd: ()=>{ console.log('导航栏切换结束'); },  // 回调
                transitionConfig: (() => ({
                    screenInterpolator: CardStackStyleInterpolator.forHorizontal,
                })),
            });

        const AppNavigation = () => (
            <AppScreen  />
        );

        return (
            <AppNavigation>
                <Login/>
            </AppNavigation>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabBarIcon: {
        height: 41,
        width: 38,
        marginBottom: 24
    }
});

// function mapStateToProps(state) {
//     const { router } = state
//     return {
//         router
//     }
// }
// export default connect(mapStateToProps)(Router)

export default Router
