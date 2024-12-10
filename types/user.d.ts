/**
 * 路由对象
 */
type Route = {
    id: string;
    uri: string;
    route_id: string;
    order: number;
    filters: string;
    predicates: string;
    metadata: string;
};

/**
 * 行政区划对象
 */
type AdministrativeDivision = {
    id: string;
    name: string;
    pid: string;
    level: string;
};

/**
 * 行政区划对象树
 */
type AdministrativeDivisionTree = AdministrativeDivision & {
    children?: Array<AdministrativeDivisionTree>;
};

/**
 * 角色类
 */
type Role = {
    // ID
    id: string | null;
    // PID
    pid?: string;
    // 角色名称
    name: string;
    // 角色代码
    code?: string;
    // 角色说明
    description?: string;
};

/**
 * 角色树
 */
interface RoleTree extends Role {
    children?: Role[];
}

/**
 * 账号实体类
 */
type Account = {
    // ID
    id?: string;
    // 用户名
    username: string;
    // 密码
    password: string;
    // 账号是否未过期
    account_non_expired: boolean;
    // 账号是否未锁定
    account_non_locked: boolean;
    // 账号是否启用
    enabled: boolean;
    // 密码是否未过期
    credentials_non_expired: boolean;
    // 权限列表
    authorities?: string[];
};

/**
 * 角色树
 */
interface RoleTree extends Role {
    children?: Role[];
}

/**
 * 权限类
 */
type Authority = {
    // ID
    id: string | null;
    // PID
    pid?: string;
    // 角色名称
    name: string;
    // 角色代码
    code: string;
    // 角色说明
    description?: string;
};

interface AuthorityTree extends Authority {
    children?: Authority[];
}

/** 登录响应的token */
type Token = {
    id: string;
    /** 用户名 */
    username: string;
    /** 认证token */
    accessToken: string;
    /** 权限列表 */
    authorities: string[];
    /** 角色 */
    roles: string[];
};

/** 用户信息实体 */
type UserList = {
    id: number;
    username: string;
    password: string;
    org_name: string;
    last_login_time: string;
    last_login_ip: string;
    lock: boolean;
    enable: boolean;
};

/** 用户日志实体接口 */
type UserOperateLog = {
    /** 日志ID */
    id: number;
    /** 创建时间 */
    created_time: string;
    /** URL */
    url: string;
    /** 响应状态码 */
    response_status: number;
    /** 响应数据 */
    response_result: string;
    /** 请求IP */
    ip: string;
    /** 备注 */
    remark?: string;
};
