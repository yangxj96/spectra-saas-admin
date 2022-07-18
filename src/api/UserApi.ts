import request, {IResult} from "@/plugin/request";

export default {
    login(username: string, password: string) {
        return request.post('/api/auth/login', {
            username: username,
            password: password
        }).then((r: any) => {
            let res = r as IResult;
            if (res.code == 0) {
                return r.data;
            }
        })
    }
}
