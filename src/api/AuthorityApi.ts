import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import { Authority, AuthorityTree, IResult, Page } from "@/types";
import { ElMessage } from "element-plus";

export default {
  created(params: Authority) {
    return http.post("/api/auth/authority", params).then((response: AxiosResponse<IResult<Authority>>) => {
      return response.data;
    });
  },
  remove(id: string) {
    return http.delete(`/api/auth/authority/${id}`).then((response: AxiosResponse<IResult>) => {
      return response.data;
    });
  },
  modify(params: Authority) {
    if (!params.id) {
      ElMessage.error({
        message: "修改数据需要提交数据ID"
      });
      return;
    }
    return http.put("/api/auth/authority", params).then((response: AxiosResponse<IResult<Authority>>) => {
      return response.data;
    });
  },
  query(params?: Authority) {
    return http
      .get("/api/auth/authority", {
        data: params
      })
      .then((response: AxiosResponse<IResult<Page<Authority>>>) => {
        return response.data;
      });
  },
  tree() {
    return http.get("/api/auth/authority/tree").then((response: AxiosResponse<IResult<AuthorityTree[]>>) => {
      return response.data;
    });
  }
};
