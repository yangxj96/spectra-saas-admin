import request from "@/plugin/request";
import {ElMessage} from "element-plus";
import {MessageDefaultConfig} from "@/utils/DefaultConfig";
import IResult from "@/entity/IResult";

export interface Login {
    username: string;
    access_token: string;
    refresh_token: string;
    authorities: string[],
    expiration_time: string
}

export default {
    login(username: string, password: string) {
        return request.post<IResult<Login>>('/api/auth/login', {
            username: username,
            password: password
        }).catch(err => {
            ElMessage.success({
                ...MessageDefaultConfig,
                type: 'error',
                message: err.message
            })
        });
    }
}
