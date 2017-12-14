import React, { Component } from 'react';
import serverConfig from './service-config'

export default class BaseService {
    complexParamsUrl(url, params) {
        if (params) {
            url = serverConfig.serverUrl + url
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        return url
    }

    complexUrl(url) {
        url = serverConfig.serverUrl + url
        return url
    }

    complexParams(params) {
        let str = ''
        if (params && params !== {}) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            str += paramsArray.join('&')
        }
        return str
    }
}