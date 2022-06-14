/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import axios from "axios";
import {hideLoading, showLoading} from "@/plugin/element/loading";
import IResult from "@/entity/IResult";

const http = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 3 * 1000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json'
    }
});


// 请求拦截器
http.interceptors.request.use(
    config => {
        showLoading();
        return config;
    },
    error => {
        hideLoading();
        return Promise.reject(error);
    }
);

// 响应拦截器
http.interceptors.response.use(
    response => {
        hideLoading();

        return response.data;
    },
    error => {
        hideLoading();
        return Promise.reject(error);
    }
)

export default http;
