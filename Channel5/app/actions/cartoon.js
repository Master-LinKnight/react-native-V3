import * as types from './types'
import comicService from '../services/comicService'
var ComicService = new comicService()

export function cartoonList() {
    return dispatch => {
        dispatch(fetchDataLoading())
        ComicService.GetBaseComicInfos().then(
            (res) => {
                console.log(res.comics)
                console.log(res.comics.length)
                if (res.comics && res.comics.length > 0) {
                    let data = []
                    for (let v of res.comics) {
                        if (data && data.length > 0) {
                            let isExist = false
                            for (let vv of data) {
                                if (v.groupKey == vv.groupKey) {
                                    isExist = true
                                    vv.listData.push({
                                        id: v.comicId,
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
                                            id: v.comicId,
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
                                        id: v.comicId,
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

export function cartoonDetail(params) {
    return dispatch => {
        dispatch(fetchDataLoading())
        ComicService.GetSingleComic(params).then(
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

export function clearCartoonDetail() {
    return dispatch => {
        dispatch(fetchDetailClear())
    }
}

function fetchDataLoading() {
    return {
        type: types.FETCH_CARTOON_DATA_LOADING,
        isFreshing: true
    }
}

function fetchDataError() {
    return {
        type: types.FETCH_CARTOON_DATA_ERROR,
        isFreshing: false
    }
}

function fetchDataSuccess(_data) {
    return {
        type: types.FETCH_CARTOON_DATA_SUCCESS,
        isFreshing: false,
        data: _data
    }
}

function fetchDetailSuccess(_data) {
    return {
        type: types.FETCH_CARTOON_DETAIL_SUCCESS,
        isFreshing: false,
        data: _data
    }
}

function fetchDetailClear() {
    return {
        type: types.FETCH_CARTOON_DETAIL_CLEAR,
        isFreshing: false
    }
}