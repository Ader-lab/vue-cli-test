import axios from "axios";
// 建立axios
const service = axios.create();


// 添加請求攔截器
service.interceptors.request.use(function (config) {
    // 在發送請求前做甚麼
    return config;
}, function (error) {
    // 對請求錯誤做甚麼
    return error;
});

// 添加響應攔截器
service.interceptors.response.use(function (response) {
    // 對響應數據做點甚麼
    return response;
}, function (error) {
    // 對響應數據錯誤做點甚麼
    return Promise.reject(error)
});



export default service;