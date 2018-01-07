import * as types from '../actions/types'

const initialState = {
    isFreshing: false,
    data: null,
    status: null
}

export default function novel(state=initialState, action){
    switch (action.type) {
        case types.FETCH_DATA_SUCCESS:
            return {
                ...state,
                status: types.FETCH_DATA_SUCCESS,
                data: action.data
            }
        case types.FETCH_DATA_LOADING:
            return {
                ...state,
                status: types.FETCH_DATA_LOADING
            }
        case types.FETCH_DATA_ERROR:
            return {
                ...state,
                status: types.FETCH_DATA_ERROR
            }
        default:
            return state
    }
}