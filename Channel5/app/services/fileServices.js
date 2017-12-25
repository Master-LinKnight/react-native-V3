import React, { Component } from 'react';
import BaseService from './baseService'

export default class FileService extends BaseService {
    constructor() {
        super();
    }

    async UploadFile(params) {
        try {
            let url = '/Files/Upload'
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
}