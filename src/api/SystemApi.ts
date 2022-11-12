import request from "@/plugin/request";

// 系统配置实体
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


// 文件存储配置
export interface FileSave {
    type: number,
    locale: string,
    access_id: string,
    access_secret: string,
    bucket: string
}

export default {
    // --------------- 系统配置项相关
    getSystemConfig() {
        return request.get('/api/system/config')
    },
    saveSystemConfig(params: SystemConfig) {
        return request.post(`/api/system/config/11111`, params)
    },
    //---------------- 文件存储相关
    getFileSave() {
        return request.get(`/api/system/fileSave`)
    }
}
