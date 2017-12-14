import BaseService from './baseService'

export default class UserService extends BaseService{
    constructor() {
        super();
    }

    async PostLogin(params) {
        try {
            let url = '/Users/Login'
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
            console.error(error)
        }
    }


    async GetUserInfoById(id) {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let url = '/Users/GetUserInfoById/'
            url = this.complexUrl(url) + id
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.error(error)
        }
    }

    async GetCurrentUserInfo(params) {
        try {
            let url = '/Users/GetCurrentUserInfo'
            url = this.complexUrl(url)
            let response = await fetch(url)
            let responseJson = await response.json()
            return responseJson
        } catch(error) {
            console.error(error)
        }
    }

    GetTest(params) {
        let url = '/Books/GetSingleBook'
        url = this.complexParamsUrl(url, params)
        console.log(url)
        return url
    }
}