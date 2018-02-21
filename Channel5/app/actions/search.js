import * as types from './types'
import shortVideoService from "../services/shortVideoService";
import bookSerivce from '../services/bookSerivce'
import comicService from '../services/comicService'

var ShortVideoService = new shortVideoService()
var BookSerivce = new bookSerivce()
var ComicService = new comicService()

export function searchList(params) {
    return dispatch => {
        dispatch(fetchDataLoading())
        fetchSearchList(params).then(
            (res) => {
                if (res) {
                    dispatch(fetchDataSuccess(res))
                } else {
                    dispatch(fetchDataError())
                }
            }
        ).catch((error) => {
            console.log('searchListError', error)
        }).done()
    }
}

async function fetchSearchList(params) {
    try {
        let rslt = []
        const rsltVideos = await ShortVideoService.GetShortVideosByKeyWords(params)
        if (rsltVideos && rsltVideos.shortVideos.length > 0) {
            let list = []
            for (let v of rsltVideos.shortVideos) {
                list.push({
                    id: v.videoId,
                    title: v.name,
                    description: v.description,
                    url: v.videoUrl,
                    imageUrl: v.coverImage,
                    duration: v.playTime,
                    playCount: v.playCount,
                    subhead: v.playCountStr,
                    isVideo: true
                })
            }
            rslt.push({
                title: '视频',
                listData: list
            })
        }
        const rsltComics = await ComicService.GetComicsByKeyWords(params)
        if (rsltComics && rsltComics.comics.length > 0) {
            let list = []
            for (let v of rsltComics.comics) {
                list.push({
                    id: v.comicId,
                    title: v.name,
                    description: v.description,
                    imageUrl: v.largeImage,
                    duration: v.status,
                    readCount: v.readCount,
                    subhead: v.readCountStr,
                    isVideo: true
                })
            }
            rslt.push({
                title: '动漫',
                listData: list
            })
        }
        const rsltBooks = await BookSerivce.GetBooksByKeyWords(params)
        if (rsltBooks && rsltBooks.books.length > 0) {
            let list = []
            for (let v of rsltBooks.books) {
                list.push({
                    id: v.bookId,
                    title: v.name,
                    description: v.description,
                    imageUrl: v.largeImage,
                    duration: v.status,
                    readCount: v.readCount,
                    subhead: v.readCountStr,
                    isVideo: true
                })
            }
            rslt.push({
                title: '小说',
                listData: list
            })
        }
        return rslt
    } catch (error) {
        console.log('error', error)
    }
}

function fetchDataLoading() {
    return {
        type: types.FETCH_SEARCH_DATA_LOADING,
        isFreshing: true
    }
}

function fetchDataError() {
    return {
        type: types.FETCH_SEARCH_DATA_ERROR,
        isFreshing: false
    }
}

function fetchDataSuccess(_data) {
    return {
        type: types.FETCH_SEARCH_DATA_SUCCESS,
        isFreshing: false,
        data: _data
    }
}
