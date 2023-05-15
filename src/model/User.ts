/** 登录响应的token */
export interface Token {
  /** 用户名 */
  username: string;
  /** 认证token */
  access_token: string;
  /** 刷新的token */
  refresh_token: string;
  /** 权限列表 */
  authorities: string[],
  /** 过期时间 */
  expiration_time: string
}

/** 用户信息实体 */
export interface UserList {
  id: number,
  username: string,
  password: string,
  org_name: string,
  last_login_time: string,
  last_login_ip: string,
  lock: boolean,
  enable: boolean,
}

/** 用户日志实体接口 */
export interface UserOperateLog {
  /** 日志ID */
  id: number,
  /** 创建时间 */
  created_time: string,
  /** URL */
  url: string,
  /** 响应状态码 */
  response_status: number,
  /** 响应数据 */
  response_result: string,
  /** 请求IP */
  ip: string,
  /** 备注 */
  remark?: string
}