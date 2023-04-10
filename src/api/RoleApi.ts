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
