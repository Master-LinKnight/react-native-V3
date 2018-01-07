import * as types from './types'
import comicService from '../services/comicService'
var ComicService = new comicService()

export function cartoonList() {
    return dispatch => {
        dispatch(fetchDataLoading())
        ComicService.GetBaseComicInfos().then(
            (res) => {
                // console.log(res)
                if (res.comics && res.comics.length > 0) {
                    let data = []
                    for (let v of res.comics) {
                        if (data && data.length > 0) {
                            for (let vv of data) {
                                if (v.groupKey == vv.groupKey) {
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

function fetchDataLoading() {
    return {
        type: types.FETCH_DATA_LOADING,
        isFreshing: true
    }
}

function fetchDataError() {
    return {
        type: types.FETCH_DATA_ERROR,
        isFreshing: false
    }
}

function fetchDataSuccess(_data) {
    return {
        type: types.FETCH_DATA_SUCCESS,
        isFreshing: false,
        data: _data
    }
}