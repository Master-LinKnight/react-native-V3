import React, { Component } from 'react';
import BaseService from './baseService'

export default class BarService extends BaseService {
    constructor() {
        super();
    }

    async GetBaseBarInfors(params) {
        try {
            let url = '/Bars/GetBaseBarInfors'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }

    async GetSingleBarInfos(params) {
        try {
            let url = '/Bars/GetSingleBarInfos'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }

    async GetSingleBarTopic(params) {
        try {
            let url = '/Bars/GetSingleBarTopic'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }

    async PostBarTopic(params) {
        try {
            let url = '/Bars/PostBarTopic'
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

    async PostTopicComment(params) {
        try {
            let url = '/Bars/PostTopicComment'
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

    async PostAddFavoriteBar(params) {
        try {
            let url = '/Bars/PostAddFavoriteBar'
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

    async GetBarsByKeyWords(params) {
        try {
            let url = '/Bars/GetBarsByKeyWords'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }
}