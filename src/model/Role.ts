
/** 角色类 */
export interface Role {
    // ID
    id: string | null,
    // 角色名称
    name: string,
    // 角色说明
    description: string
}

/** 角色树 */
export interface RoleTree extends Role {
    children?: Role[]
}
