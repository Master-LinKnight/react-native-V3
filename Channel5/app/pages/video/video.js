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
    ListView,
    Text,
    Dimensions
} from 'react-native';
var headerIcon = require('../../images/pic_head.png')
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var Navigation
import {connect} from 'react-redux'
var dataBlob = {},
    sectionIDs = [],
    rowIDs = []
import IndexListView from '../../component/indexListView'
import {videoList} from '../../actions/video'
import Loading from '../../common/loading'

class Video extends Component {
    constructor(props){
        super(props);

        this.state = {
            isFreshing: false,
            data: [
            ]
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this)
    }

    static navigationOptions = ({navigation}) => {
        return ({
            header: null
        })
    }
    componentWillReceiveProps = (nextProps, nextState) => {
        if(nextProps.video.status != this.props.video.status && nextProps.video.status === 'FETCH_DATA_SUCCESS'){
            this.setState({
                isFreshing: false
            })
            if (nextProps.video.data && nextProps.video.data.length > 0) {
                for (let v of nextProps.video.data) {
                    const array = v.groupKey.split(';')
                    v.dateTitle = array[0]
                    v.title = array[1]
                }
            }
            console.log(nextProps.video.data)
            this.setState({
                data: nextProps.video.data
            })
            return false
        }
        if (nextProps.video.status != this.props.video.status && nextProps.video.status === 'FETCH_DATA_LOADING') {
            this.setState({
                isFreshing: true
            })
            return false
        } else {
            this.setState({
                isFreshing: false
            })
            return false
        }

        return true
    }
    componentDidMount = () => {
        this.props.dispatch(videoList())
    }

    render() {
        return (
            <View style={styles.container}>
                <Loading size={'large'} visible={this.state.isFreshing}/>
                <IndexListView data={this.state.data} category={'video'} {...this.props}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

function mapStateToProps(state) {
    const { video, router } = state
    return {
        video,
        router
    }
}

export default connect(mapStateToProps)(Video)



