import axios, { type AxiosResponse, type Canceler, type InternalAxiosRequestConfig } from "axios";
import { hideLoading, showLoading } from "@/plugin/element/loading";
import { ElMessage } from "element-plus/es";
import { MessageDefaultConfig } from "@/utils/DefaultConfig";
import useUserStore from "@/plugin/store/modules/useUserStore";

const http = axios.create({
  // baseURL: import.meta.env.MODE == "production" ? import.meta.env.VITE_API_URL : import.meta.env.BASE_URL,
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10 * 1000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json"
  }
});

export interface IResult<T = any> {
  code: number;
  msg: string;
  data: T;
}

export const clean: Canceler[] = [];

// 请求拦截器
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.headers.loading == undefined || config.headers.loading === true) {
      showLoading();
      config.headers.loading = undefined;
    }
    const token = useUserStore().token.access_token;
    if (token != null || token != undefined || token != "") {
      config.headers["Authorization"] = token;
    }
    config.cancelToken = new axios.CancelToken(function executor(c) {
      clean.push(c);
    });
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
        type: "error",
        message: response.data.msg
      });
      throw new Error(`请求失败:${response.data.msg}`);
    }
    return response;
  },
  // 任何超出2xx范围的状态码都会触发此函数，这里主要用于处理响应错误
  error => {
    console.log(error);
    hideLoading();
    if (error.name === "CanceledError") {
      return Promise.reject(error);
    }
    if (error.response) {
      switch (error.response.status) {
        case 404:
          ElMessage.error({
            ...MessageDefaultConfig,
            type: "error",
            message: "请求URL错误"
          });
          break;
        default:
          ElMessage.error({
            ...MessageDefaultConfig,
            type: "error",
            message: "请求失败,请稍后重试"
          });
      }
    } else {
      ElMessage.error({
        ...MessageDefaultConfig,
        type: "error",
        message: "网络错误,请检查网络"
      });
    }
    return Promise.reject(error);
  }
);

export default http;
