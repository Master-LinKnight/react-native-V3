import * as types from './types'
import bookSerivce from '../services/bookSerivce'
var BookSerivce = new bookSerivce()

export function novelList() {
    return dispatch => {
        dispatch(fetchDataLoading())
        BookSerivce.GetIndexBooks().then(
            (res) => {
                if (res.books && res.books.length > 0) {
                    let data = []
                    // console.log(res.books)
                    for (let v of res.books) {
                        if (data && data.length > 0) {
                            let isExist = false
                            for (let vv of data) {
                                if (v.groupKey == vv.groupKey) {
                                    isExist = true
                                    vv.listData.push({
                                        id: v.bookId,
                                        title: v.name,
                                        description: v.description,
                                        // url: v.videoUrl,
                                        imageUrl: v.largeImage,
                                        duration: v.status,
                                        readCount: v.readCount,
                                        subhead: v.readCountStr
                                    })
                                    break
                                }
                            }
                            if (!isExist) {
                                data.push({
                                    displayIndex: v.displayIndex,
                                    groupKey: v.groupKey,
                                    listData: [
                                        {
                                            id: v.bookId,
                                            title: v.name,
                                            description: v.description,
                                            // url: v.videoUrl,
                                            imageUrl: v.largeImage,
                                            duration: v.status,
                                            readCount: v.readCount,
                                            subhead: v.readCountStr
                                        }
                                    ]
                                })
                            }
                        } else {
                            data.push({
                                displayIndex: v.displayIndex,
                                groupKey: v.groupKey,
                                listData: [
                                    {
                                        id: v.bookId,
                                        title: v.name,
                                        description: v.description,
                                        // url: v.videoUrl,
                                        imageUrl: v.largeImage,
                                        duration: v.status,
                                        readCount: v.readCount,
                                        subhead: v.readCountStr
                                    }
                                ]
                            })
                        }
                    }
                    dispatch(fetchDataSuccess(data))
                } else {
                    dispatch(fetchDataError())
                }
            }
        ).catch((error) => {
            console.log(error)
        }).done()
    }
}

export function novelDetail(params) {
    return dispatch => {
        dispatch(fetchDataLoading())
        BookSerivce.GetSingleBook(params).then(
            (res) => {
                if (res) {
                    dispatch(fetchDetailSuccess(res))
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
        type: types.FETCH_NOVEL_DATA_LOADING,
        isFreshing: true
    }
}

function fetchDataError() {
    return {
        type: types.FETCH_NOVEL_DATA_ERROR,
        isFreshing: false
    }
}

function fetchDataSuccess(_data) {
    return {
        type: types.FETCH_NOVEL_DATA_SUCCESS,
        isFreshing: false,
        data: _data
    }
}

function fetchDetailSuccess(_data) {
    return {
        type: types.FETCH_NOVEL_DETAIL_SUCCESS,
        isFreshing: false,
        data: _data
    }
}