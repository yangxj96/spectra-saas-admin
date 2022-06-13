import * as axios from 'axios'
import IResult from "@/entity/IResult";
import {AxiosRequestConfig} from "axios";

declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<IResult>
    }
}
