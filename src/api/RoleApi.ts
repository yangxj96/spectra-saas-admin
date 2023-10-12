import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import { IResult, RoleTree } from "@/types";

export default {
  tree() {
    return http.get("/api/auth/role/tree").then((response: AxiosResponse<IResult<RoleTree[]>>) => {
      return response.data;
    });
  }
};
