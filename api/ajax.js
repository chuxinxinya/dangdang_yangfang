import axios from "axios"
import qs from "qs"

const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
});


instance.interceptors.request.use(function (config) {
    const data = config.data
    if(data){
        config.data = qs.stringify(data)
    }

    // const token = store.state.user.token;
    // if(token){
    //     config.headers['Authorization'] = token;
    // } else {
    //     const needCheck = config.headers.needCheck
    //     // 如果没有token, 但又需要token校验, 不能发请求
    //     if (needCheck) {
    //         throw new Error('没有登陆, 不能请求!')
    //     }
    // }

    return config;
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response.data;

}, function (error) {
    return new Promise(() => {})
});


export default instance
