import React, { Component } from 'react';
import BaseService from './baseService'

export default class BookService extends BaseService{
    constructor() {
        super();
    }

    async GetIndexBooks(params) {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let url = '/Books/GetIndexBooks'
            url = this.complexParams(url, params)
            let response = await fetch(url);
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }

    async GetSingleBook(params) {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let url = '/Books/GetSingleBook'
            url = this.complexParams(url, params)
            let response = await fetch(url);
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }

    async GetSingleChapter(params) {
        try {
            let url = '/Books/GetSingleChapter'
            url = this.complexParams(url, params)
            let response = await fetch(url);
            let responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error)
        }
    }
}
