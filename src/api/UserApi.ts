import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import useUserStore from "@/plugin/store/modules/useUserStore";
import type { IResult, Token } from "@/types";

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
        "/api/auth/check_token",
        {
          token: useUserStore().token.access_token
        },
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
        {
          token: useUserStore().token.refresh_token
        },
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
   * 退出登录
   */
  logout() {
    return http
      .post("/api/auth/logoff", {
        token: useUserStore().token.access_token
      })
      .then((response: AxiosResponse<IResult>) => {
        return response.data;
      });
  }
};
