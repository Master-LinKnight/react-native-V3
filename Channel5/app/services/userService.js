import BaseService from './baseService'

export default class UserService extends BaseService{
    constructor() {
        super();
    }

    async PostLogin(params) {
        try {
            let url = '/Users/Login'
            url = this.complexParams(url, params)
            let response = await fetch(url, {
                method: 'POST',
                body:JSON.stringify(params)
            });
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }


    async GetUserInfoById(params) {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let url = '/Users/GetUserInfoById'
            url = this.complexParams(url, params)
            let response = await fetch(url);
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }

    GetTest(params) {
        let url = '/Books/GetSingleBook'
        url = this.complexParams(url, params)
        console.log(url)
        return url
    }
}