import request from "@/plugin/request";


export default {
    login(username: string, password: string) {
        return request.post('/api/auth/login', {
            username: username,
            password: password
        }).catch(err => {
            console.log(err)
        });
    }
}
