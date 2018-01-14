import * as types from './types'
import bookSerivce from '../services/bookSerivce'
var BookSerivce = new bookSerivce()

export function novelChapter(params) {
    return dispatch => {
        dispatch(fetchDataLoading())
        BookSerivce.GetSingleChapter(params).then(
            (res) => {
                if (res && res.chapter) {
                    dispatch(fetchChapterSuccess(res.chapter))
                } else {
                    dispatch(fetchDataError())
                }
            }
        ).catch((error) => {
            console.log(error)
        }).done()
    }
}

function fetchDataLoading() {
    return {
        type: types.FETCH_CHAPTER_DATA_LOADING,
        isFreshing: true
    }
}

function fetchDataError() {
    return {
        type: types.FETCH_CHAPTER_DATA_ERROR,
        isFreshing: false
    }
}

function fetchChapterSuccess(_data) {
    return {
        type: types.FETCH_NOVEL_CHAPTER_SUCCESS,
        isFreshing: false,
        data: _data
    }
}