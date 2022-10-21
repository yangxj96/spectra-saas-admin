import request from "@/plugin/request";

export interface SystemConfig {
    id: number,
    key: string,
    value: any,
    value_str?: string,
    type: number,
    remark?: string,
    items?: {
        name: string,
        value: number
    }[]
}


export default {
    // --------------- 系统配置项相关
    getSystemConfig() {
        return request.get('/api/system/config')
    },
    saveSystemConfig(params: SystemConfig) {
        return request.post(`/api/system/config/11111`, params)
    }
}
