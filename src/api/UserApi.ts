import request from "@/plugin/request";

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
