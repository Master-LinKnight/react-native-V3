import React, { Component } from 'react';
import BaseService from './baseService'

export default class ShortVideoService extends BaseService {
    constructor() {
        super();
    }

    async GetBaseShortVideoInfos(params) {
        try {
            let url = '/ShortVideos/GetBaseShortVideoInfos'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }

    async GetSingleShortVideo(params) {
        try {
            let url = '/ShortVideos/GetSingleShortVideo'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }

    async PostComment(params) {
        try {
            let url = '/ShortVideos/PostComment'
            url = this.complexUrl(url)
            let response = await fetch(url, {
                method: 'POST',
                body: this.complexParams(params),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                }
            });
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }

    async PostAddFavoriteShortVideo(params) {
        try {
            let url = '/ShortVideos/PostAddFavoriteShortVideo'
            url = this.complexUrl(url)
            let response = await fetch(url, {
                method: 'POST',
                body: this.complexParams(params),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept": "application/json"
                }
            });
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }

    async GetShortVideosByKeyWords(params) {
        try {
            let url = '/ShortVideos/GetShortVideosByKeyWords'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }
}