import * as types from '../actions/types'

const initialState = {
    isLoggedIn: false,
    userInfo: {},
    isFreshing: false,
    status: null
}

export default function register(state=initialState, action){
    switch (action.type) {
        case types.REGISTER_DOING:
            return {
                ...state,
                isFreshing: true,
                status: types.REGISTER_DOING
            }
        case types.REGISTER_IN:
            return {
                isLoggedIn: true,
                userInfo: action.userInfo,
                isFreshing: false,
                status: types.REGISTER_IN
            }
        case types.REGISTER_OUT:
            return {
                ...state,
                status: types.REGISTER_OUT
            }
        case types.REGISTER_ERROR:
            return {
                ...state,
                status: types.REGISTER_ERROR
            }
        default:
            return state
    }
}