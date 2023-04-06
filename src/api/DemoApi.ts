import request from "@/plugin/request";

export default {
    demoGet() {
        return request.get("/api/auth/Demo", {
            params: {
                k1: '13123',
                k2: '212',
                k3: 1000,
                k4: {
                    kk1: 'vv1'
                }
            }
        })
    }
}