import request from "@/plugin/request";

export interface Role {
    // ID
    id: string | null,
    // 角色名称
    name: string,
    // 角色说明
    description: string
}

export interface RoleTree extends Role {
    children?: Role[]
}

export default {

    /**
     * 新增角色
     *
     * @param params 角色参数
     * @return 是否新增成功
     */
    create(params: Role) {
        return request.post("/api/auth/role", params)
    },

    /**
     * 删除角色
     *
     * @param id 角色id
     * @return 是否删除成功
     */
    delete(id: string) {
        return request.delete(`/api/auth/role/${id}`)
    },

    /**
     * 修改角色
     *
     * @param params 角色参数
     * @return 是否修改成功
     */
    modify(params: Role) {
        return request.put("/api/auth/role", params)
    },

    /**
     * 查询角色列表
     *
     * @return 是否新增成功
     */
    select() {
        return request.get("/api/auth/role")
    },

    /**
     * 查询角色树形列表
     *
     * @return 是否新增成功
     */
    tree() {
        return request.get("/api/auth/role/tree")
    }

}