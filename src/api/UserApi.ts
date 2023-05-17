import http, { type IResult } from "@/plugin/request";
import type { AxiosResponse } from "axios";
import type { Token } from "@/model/User";

export default {
  /**
   * 用户登录
   * @param username 用户名
   * @param password 密码
   */
  login(username: string, password: string) {
    return http
      .post("/api/auth/login", {
        username: username,
        password: password
      })
      .then((response: AxiosResponse<IResult<Token>>) => {
        return response.data;
      });
  },
  /**
   * 检查token
   */
  check() {
    return http
      .post(
        "/api/auth/check",
        {},
        {
          headers: {
            loading: false
          }
        }
      )
      .then((response: AxiosResponse<IResult<Token>>) => {
        return response.data;
      });
  },
  /**
   * 刷新token
   */
  refresh() {
    return http
      .post(
        "/api/auth/refresh",
        {},
        {
          headers: {
            loading: false
          }
        }
      )
      .then((response: AxiosResponse<IResult<Token>>) => {
        return response.data;
      });
  }
};
