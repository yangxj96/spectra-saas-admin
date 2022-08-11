/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {hideLoading, showLoading} from "@/plugin/element/loading";
import {ElMessage} from "element-plus/es";
import {MessageDefaultConfig} from "@/utils/DefaultConfig";

const http = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 3 * 1000,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json'
    }
});

export interface IResult {
    code: number,
    message: string,
    data?: any
}

// 请求拦截器
http.interceptors.request.use(
    (config: AxiosRequestConfig) => {
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
    (response: AxiosResponse<IResult>) => {
        hideLoading();
        if (response.status >= 200 && response.status < 300 && response.data.code == 0) {
            return response.data.data;
        } else {
            ElMessage.success({
                ...MessageDefaultConfig,
                type: 'error',
                message: response.data.message
            })
        }
    },
    error => {
        hideLoading();
        ElMessage.success({
            ...MessageDefaultConfig,
            type: 'error',
            message: error.message
        })
        return Promise.reject(error);
    }
)

export default http;
