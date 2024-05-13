/**
 * 响应整体
 */
export type IResult<T = any> = {
  code: number;
  msg: string;
  data: T;
};

/**
 * 分页实体
 */
export type Page<T = any> = {
  current: number;
  optimize_count_sql: boolean;
  orders?: string[];
  pages: number;
  records: T[];
  search_count: boolean;
  size: number;
  total: number;
};

/**
 * 分页参数实体
 */
export type Pagination = {
  size: number;
  page: number;
  page_sizes: Array<number>;
  default_page_size: number;
  total: number;
};

// --------------- platform

/**
 * 路由对象
 */
export type Route = {
  id: string;
  uri: string;
  route_id: string;
  order: number;
  filters: string;
  predicates: string;
  metadata: string;
};

// --------------- role

/**
 * 角色类
 */
export type Role = {
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
export interface RoleTree extends Role {
  children?: Role[];
}

/**
 * 账号实体类
 */
export type Account = {
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
export interface RoleTree extends Role {
  children?: Role[];
}

/**
 * 权限类
 */
export type Authority = {
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

export interface AuthorityTree extends Authority {
  children?: Authority[];
}

// --------------- system

/** 系统配置实体 */
export type SystemConfig = {
  id: number;
  key: string;
  value: any;
  value_str?: string;
  type: number;
  remark?: string;
  items?: {
    name: string;
    value: number;
  }[];
};

/** 菜单对象 **/
export type Menu = {
  index: string;
  icon: string;
  name: string;
  default?: string;
  path?: string;
  component?: string;
};

export interface MenuTree extends Menu {
  children?: Menu[];
}

/** 系统字典 */
export type SystemDictGroup = {
  id: number;
  name: string;
  children?: SystemDictGroup[];
};

// --------------- user

/** 登录响应的token */
export type Token = {
  id: string;
  /** 用户名 */
  username: string;
  /** 认证token */
  access_token: string;
  /** 权限列表 */
  authorities: string[];
  /** 角色 */
  roles: string[];
};

/** 用户信息实体 */
export type UserList = {
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
export type UserOperateLog = {
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
