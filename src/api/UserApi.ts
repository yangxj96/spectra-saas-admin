import request from "@/plugin/request";

export default {
    /**
     * 用户登录
     * @param username 用户名
     * @param password 密码
     */
    login(username: string, password: string) {
        return request.post('/api/auth/login', {
            username: username,
            password: password
        });
    }
}
