import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import { IResult, Page, Role, RoleTree } from "@/types";
import { ElMessage } from "element-plus";

export default {
  created(params: Role) {
    return http.post("/api/auth/role", params).then((response: AxiosResponse<IResult<Role>>) => {
      return response.data;
    });
  },
  remove(id: string) {
    return http.delete(`/api/auth/role/${id}`).then((response: AxiosResponse<IResult>) => {
      return response.data;
    });
  },
  modify(params: Role) {
    if (!params.id) {
      ElMessage.error({
        message: "修改数据需要提交数据ID"
      });
      return;
    }
    return http.put("/api/auth/role", params).then((response: AxiosResponse<IResult<Role>>) => {
      return response.data;
    });
  },
  query(params?: Role) {
    return http
      .get("/api/auth/role", {
        data: params
      })
      .then((response: AxiosResponse<IResult<Page<Role>>>) => {
        return response.data;
      });
  },
  tree() {
    return http.get("/api/auth/role/tree").then((response: AxiosResponse<IResult<RoleTree[]>>) => {
      return response.data;
    });
  }
};
