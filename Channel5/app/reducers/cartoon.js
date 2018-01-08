import * as types from '../actions/types'

const initialState = {
    isFreshing: false,
    data: null,
    status: null
}

export default function cartoon(state=initialState, action){
    switch (action.type) {
        case types.FETCH_CARTOON_DATA_SUCCESS:
            return {
                ...state,
                status: types.FETCH_CARTOON_DATA_SUCCESS,
                data: action.data
            }
        case types.FETCH_CARTOON_DATA_LOADING:
            return {
                ...state,
                status: types.FETCH_CARTOON_DATA_LOADING
            }
        case types.FETCH_CARTOON_DATA_ERROR:
            return {
                ...state,
                status: types.FETCH_CARTOON_DATA_ERROR
            }
        default:
            return state
    }
}