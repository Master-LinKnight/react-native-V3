import React, { Component } from 'react';
import BaseService from './baseService'

export default class ComicService extends BaseService{
    constructor() {
        super();
    }

    async GetBaseComicInfos(params) {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let url = '/Comics/GetBaseComicInfos'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.error(error)
        }
    }

    async GetSingleComicChapter(params) {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let url = '/Comics/GetSingleComicChapter'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.error(error)
        }
    }

    async GetSingleComic(params) {
        try {
            let url = '/Comics/GetSingleComic'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.error(error)
        }
    }

    async PostComicComment(params) {
        try {
            let url = '/Comics/PostComicComment'
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

    async PostAddFavoriteComic(params) {
        try {
            let url = '/Comics/PostAddFavoriteComic'
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

    async GetComicsByKeyWords(params) {
        try {
            let url = '/Comics/GetComicsByKeyWords'
            url = this.complexParamsUrl(url, params)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.log(error)
        }
    }
}