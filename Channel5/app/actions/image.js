import * as types from './types'

export function imageLoading() {
    return dispatch => {
        dispatch(fetchImageLoading())
    }
}

export function imageLoaded() {
    return dispatch => {
        dispatch(fetchImageLoaded())
    }
}

export function imageSlider(_index) {
    _index = _index + 1
    return dispatch => {
        dispatch(fetchImageSlider(_index))
    }
}

export function imageClear() {
    return dispatch => {
        dispatch(fetchImageClear())
    }
}

function fetchImageLoading() {
    return {
        type: types.FETCH_IMAGE_INDEX_LOADING,
        isFreshing: true
    }
}

function fetchImageLoaded() {
    return {
        type: types.FETCH_IMAGE_INDEX_END,
        isFreshing: false
    }
}

function fetchImageSlider(_index) {
    return {
        type: types.FETCH_IMAGE_INDEX_SLIDER,
        isFreshing: false,
        index: _index
    }
}

function fetchImageClear() {
    return {
        type: types.FETCH_IMAGE_INDEX_CLEAR,
        isFreshing: false,
        index: 2
    }
}
