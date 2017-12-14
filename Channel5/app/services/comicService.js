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
    } ///Comics/GetSingleComicChapter


}