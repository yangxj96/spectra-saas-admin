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

export interface IResult<T = any> {
    code: number,
    message: string,
    data: T
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
    // 在2xx范围内的任何状态代码都会触发此函数，这里主要用于处理响应数据
    (response: AxiosResponse<IResult>) => {
        hideLoading();
        if (response.data.code != 0) {
            ElMessage.error({
                ...MessageDefaultConfig,
                type: 'error',
                message: response.data.message
            })
            throw new Error(`请求失败:${response.data.message}`);
        }
        return response;
    },
    // 任何超出2xx范围的状态码都会触发此函数，这里主要用于处理响应错误
    error => {
        hideLoading();
        ElMessage.error({
            ...MessageDefaultConfig,
            type: 'error',
            message: error.message
        })
        return Promise.reject(error);
    }
)

export default http;
