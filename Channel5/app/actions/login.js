import * as types from './types'
import UserService from '../services/userService'
var userService = new UserService()

export function login(params) {
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
        type: types.LOGGED_DOING,
        isFreshing: true
    }
}

function receiveLoginIn(res) {
    return {
        type: types.LOGGED_IN,
        isFreshing: false,
        userInfo: res
    }
}

function receiveLoginOut() {
    return {
        type: types.LOGGED_OUT,
        isFreshing: false
    }
}

function receiveLoginError() {
    return {
        types: types.LOGGED_ERROR,
        isFreshing: false
    }
}