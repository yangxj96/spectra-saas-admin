import request from "@/plugin/request";

/**
 * 系统配置实体
 */
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

/**
 * 系统字典
 */
export interface SystemDictGroup {
    id: number,
    name: string,
    children?: SystemDictGroup[]
}

/**
 * 文件存储配置
 */
export interface FileSave {
    type: number,
    locale: string,
    access_id: string,
    access_secret: string,
    bucket: string
}

/** 菜单实体类 */
export interface Menu {
    /** ID */
    id: string,
    /** 菜单名称 */
    name: string,
    /** uri */
    uri: string,
    /** icon */
    icon: string,
    /** 父ID */
    pid: string,
    /** 权限列表 */
    authority: string[],
}

export interface MenuTree extends Menu {
    /** 子级 */
    children?: Menu[]
}

export default {
    // --------------- 系统配置项相关
    getSystemConfig() {
        return request.get('/api/system/config')
    },
    saveSystemConfig(params: SystemConfig) {
        return request.post(`/api/system/config/11111`, params)
    },

    // --------------- 字典
    getDictGroupAll() {
        return request.get('/api/system/dict/group')
    },
    // 根据组ID获取
    getDictItemByGroupId(id: number) {
        return request.get(`/api/system/dict/item/getByGroupId?id=${id}`)
    },
    //---------------- 文件存储相关
    getFileSave() {
        return request.get(`/api/system/fileSave`)
    }
}
