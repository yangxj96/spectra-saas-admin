import request from "@/plugin/request";
import {ElMessage} from "element-plus";
import {MessageDefaultConfig} from "@/utils/DefaultConfig";
import IResult from "@/entity/IResult";

export default {
    login(username: string, password: string) {
        return request.post<IResult>('/api/auth/login', {
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
