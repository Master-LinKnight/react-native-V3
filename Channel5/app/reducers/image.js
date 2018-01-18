import * as types from '../actions/types'

const initialState = {
    isFreshing: false,
    status: '',
    index: 2
}

export default function image(state=initialState, action){
    switch (action.type) {
        case types.FETCH_IMAGE_INDEX_LOADING:
            return {
                ...state,
                isFreshing: true,
                status: types.FETCH_IMAGE_INDEX_LOADING
            }
        case types.FETCH_IMAGE_INDEX_END:
            return {
                ...state,
                isFreshing: false,
                status: types.FETCH_IMAGE_INDEX_END
            }
        case types.FETCH_IMAGE_INDEX_SLIDER:
            return {
                index: action.index,
                isFreshing: false,
                status: types.FETCH_IMAGE_INDEX_SLIDER
            }
        case types.FETCH_IMAGE_INDEX_CLEAR:
            return {
                index: 2,
                isFreshing: false,
                status: types.FETCH_IMAGE_INDEX_CLEAR
            }
        default:
            return state
    }
}