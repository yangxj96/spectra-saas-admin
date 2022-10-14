import request from "@/plugin/request";

export interface Token {
    username: string;
    access_token: string;
    refresh_token: string;
    authorities: string[],
    expiration_time: string
}

// 表单实体接口
export interface UserList {
    id: number,
    username: string,
    password: string,
    org_name: string,
    last_login_time: string,
    last_login_ip: string,
    enable: boolean,
}

export default {
    login(username: string, password: string) {
        return request.post('/api/auth/login', {
            username: username,
            password: password
        });
    },
    // 获取用户列表
    getUserList() {
        return request.get(`/api/user/getUserList`);
    }
}
