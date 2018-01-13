import * as types from '../actions/types'

const initialState = {
    isFreshing: false,
    data: null,
    status: null
}

export default function novel(state=initialState, action){
    switch (action.type) {
        case types.FETCH_NOVEL_DATA_SUCCESS:
            return {
                isFreshing: false,
                status: types.FETCH_NOVEL_DATA_SUCCESS,
                data: action.data
            }
        case types.FETCH_NOVEL_DATA_LOADING:
            return {
                isFreshing: true,
                status: types.FETCH_NOVEL_DATA_LOADING,
                data: null
            }
        case types.FETCH_NOVEL_DATA_ERROR:
            return {
                isFreshing: false,
                status: types.FETCH_NOVEL_DATA_ERROR,
                data: null
            }
        case types.FETCH_NOVEL_DETAIL_SUCCESS:
            return {
                isFreshing: false,
                status: types.FETCH_NOVEL_DETAIL_SUCCESS,
                data: action.data
            }
        default:
            return state
    }
}