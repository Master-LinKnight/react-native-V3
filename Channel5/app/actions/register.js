import * as types from './types'
import UserService from '../services/userService'
var userService = new UserService()

export function register(params) {
    return dispatch => {
        dispatch(receiveLoginDoing())
        userService.PostLogin(params).then(
            (res) => {
                console.log(res)
                if (res && res.userId) {
                    dispatch(receiveLoginIn(res))
                } else {
                    dispatch(receiveLoginError(res))
                }
            }
        ).catch((error) => {
            console.log(error)
        }).done()
    }
}

function receiveLoginDoing() {
    return {
        type: types.REGISTER_DOING,
        isFreshing: true
    }
}

function receiveLoginIn(res) {
    return {
        type: types.REGISTER_IN,
        isFreshing: false,
        userInfo: res
    }
}

function receiveLoginOut() {
    return {
        type: types.REGISTER_OUT,
        isFreshing: false
    }
}

function receiveLoginError() {
    return {
        types: types.REGISTER_ERROR,
        isFreshing: false
    }
}