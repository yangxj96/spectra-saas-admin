import request from "@/plugin/request";

export default {
    demoGet() {
        return request.get("/api/auth/Demo", {
            params: {
                k1: '13123',
                k2: '212',
                k3: 1000
            }
        })
    },
    demoDelete() {
        return request.delete("/api/auth/Demo", {
            params: {
                id1: '12333333',
                id2: '1111111111111111',
                id3: 123444
            }
        })
    },
    demoPostJson() {
        return request.post("/api/auth/Demo/json", {
            id: 39,
            name: "test_b1c52f1ac97b",
            age: 47
        })
    },
    demoPostFromData() {
        // let params = new FormData();
        // params.append("id", "39");
        // params.append("name", "test_b1c52f1ac97b");
        // params.append("age", "47");
        // params.append("file",)
        // return axios.post("/api/auth/Demo/fromdata", params, {
        //     baseURL: import.meta.env.VITE_API_URL
        // })
        // return request.postForm("/api/auth/Demo/fromdata", params)
    }
};