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
import {cartoonList} from '../../actions/cartoon'
import IndexListView from '../../component/indexListView'

class Cartoon extends Component {
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
        if(nextProps.cartoon.status != this.props.cartoon.status && nextProps.cartoon.status === 'FETCH_DATA_SUCCESS'){
            this.setState({
                isFreshing: false
            })
            if (nextProps.cartoon.data && nextProps.cartoon.data.length > 0) {
                for (let v of nextProps.cartoon.data) {
                    const array = v.groupKey.split(';')
                    v.dateTitle = array[0]
                    v.title = array[1]
                }
            }
            console.log(JSON.stringify(nextProps.cartoon.data))
            this.setState({
                data: JSON.parse(JSON.stringify(nextProps.cartoon.data))
            })
            return false
        }

        if (nextProps.cartoon.status != this.props.cartoon.status && nextProps.cartoon.status === 'FETCH_DATA_LOADING') {
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
        this.props.dispatch(cartoonList())
    }

    render() {
        Navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <Loading size={'large'} visible={this.state.isFreshing}/>
                <IndexListView data={this.state.data} category={'cartoon'} {...this.props}/>
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
    const { cartoon } = state
    return {
        cartoon
    }
}

export default connect(mapStateToProps)(Cartoon)



