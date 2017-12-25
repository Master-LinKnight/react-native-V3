import * as types from '../actions/types'

const initialState = {
    isLoggedIn: false,
    userInfo: {},
    isFreshing: false,
    status: null
}

export default function login(state=initialState, action){
    switch (action.type) {
        case types.LOGGED_DOING:
            return {
                ...state,
                isFreshing: true,
                status: types.LOGGED_DOING
            }
        case types.LOGGED_IN:
            return {
                isLoggedIn: true,
                userInfo: action.userInfo,
                isFreshing: false,
                status: types.LOGGED_IN
            }
        case types.LOGGED_OUT:
            return {
                ...state,
                status: types.LOGGED_OUT
            }
        case types.LOGGED_ERROR:
            return {
                ...state,
                status: types.LOGGED_ERROR
            }
        default:
            return state
    }
}