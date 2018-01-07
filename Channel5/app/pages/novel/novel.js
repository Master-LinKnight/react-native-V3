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
import {connect} from "react-redux";
import Loading from '../../common/loading'
import {novelList} from '../../actions/novel'
import IndexListView from '../../component/indexListView'

class Novel extends Component {
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
        if(nextProps.novel.status != this.props.novel.status && nextProps.novel.status === 'FETCH_DATA_SUCCESS'){
            this.setState({
                isFreshing: false
            })
            if (nextProps.novel.data && nextProps.novel.data.length > 0) {
                for (let v of nextProps.novel.data) {
                    const array = v.groupKey.split(';')
                    v.dateTitle = array[0]
                    v.title = array[1]
                }
            }
            console.log(JSON.stringify(nextProps.novel.data))
            this.setState({
                data: nextProps.novel.data
            })
            return false
        }

        if (nextProps.novel.status != this.props.novel.status && nextProps.novel.status === 'FETCH_DATA_LOADING') {
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

        if (nextProps.navigation.state.key == this.props.navigation.state.key) {
            this.setState({
                data: nextProps.novel.data
            })
            return false
        }
        return true
    }
    componentDidMount = () => {
        this.props.dispatch(novelList())
    }

    render() {
        return (
            <View style={styles.container}>
                <Loading size={'large'} visible={this.state.isFreshing}/>
                <IndexListView data={this.state.data} category={'novel'} {...this.props}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

function mapStateToProps(state) {
    const { novel } = state
    return {
        novel
    }
}

export default connect(mapStateToProps)(Novel)



