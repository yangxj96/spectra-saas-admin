import type { MockMethod } from "vite-plugin-mock";
import type { IResult } from "@/plugin/request";
import type { Token } from "@/model/User";

export default [
  {
    url: "/api/auth/login",
    method: "post",
    response: () => {
      return {
        code: 0,
        msg: "success",
        data: {
          username: "sysadmin",
          access_token: "29C02A6F-C886-4668-82A5-4A3139B5D90F",
          refresh_token: "B83C2F7F-D90E-440A-8327-55A2A8CD7422",
          authorities: [
            "ROLE_SYSADMIN",
            "ROLE_ADMIN",
            "ROLE_USER",
            "USER:INSERT",
            "USER:DELETE",
            "USER:UPDATE",
            "USER:SELECT",
            "SYS:CONFIGURE:INSERT",
            "SYS:CONFIGURE:DELETE",
            "SYS:CONFIGURE:UPDATE",
            "SYS:CONFIGURE:SELECT"
          ],
          expiration_time: "2023-04-11 11:58:33"
        }
      } as IResult<Token>;
    }
  }
] as MockMethod[];
