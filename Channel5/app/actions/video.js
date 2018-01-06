import * as types from './types'
import shortVideoService from "../services/shortVideoService";
var ShortVideoService = new shortVideoService()

export function videoList() {
    return dispatch => {
        dispatch(fetchDataLoading())
        ShortVideoService.GetBaseShortVideoInfos().then(
            (res) => {
                if (res && res.shortVideos && res.shortVideos.length > 0) {
                    let data = []
                    for (let v of res.shortVideos) {
                        if (data && data.length > 0) {
                            for (let vv of data) {
                                if (v.groupKey == vv.groupKey) {
                                    vv.listData.push({
                                        id: v.videoId,
                                        title: v.name,
                                        description: v.description,
                                        url: v.videoUrl,
                                        imageUrl: v.coverImage,
                                        duration: v.playTime,
                                        playCount: v.playCount,
                                        subhead: v.playCountStr
                                    })
                                } else {
                                    data.push({
                                        displayIndex: v.displayIndex,
                                        groupKey: v.groupKey,
                                        listData: [
                                            {
                                                id: v.videoId,
                                                title: v.name,
                                                description: v.description,
                                                url: v.videoUrl,
                                                imageUrl: v.coverImage,
                                                duration: v.playTime,
                                                playCount: v.playCount,
                                                subhead: v.playCountStr
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
                                        id: v.videoId,
                                        title: v.name,
                                        description: v.description,
                                        url: v.videoUrl,
                                        imageUrl: v.coverImage,
                                        duration: v.playTime,
                                        playCount: v.playCount,
                                        subhead: v.playCountStr
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
        )
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