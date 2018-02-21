import * as types from '../actions/types'

const initialState = {
    isFreshing: false,
    data: null,
    status: null
}

export default function video(state=initialState, action){
    switch (action.type) {
        case types.FETCH_SEARCH_DATA_SUCCESS:
            return {
                isFreshing: false,
                status: types.FETCH_SEARCH_DATA_SUCCESS,
                data: action.data
            }
        case types.FETCH_SEARCH_DATA_LOADING:
            return {
                isFreshing: true,
                status: types.FETCH_SEARCH_DATA_LOADING,
                data: null
            }
        case types.FETCH_SEARCH_DATA_SUCCESS:
            return {
                isFreshing: false,
                status: types.FETCH_SEARCH_DATA_SUCCESS,
                data: null
            }
        default:
            return state
    }
}