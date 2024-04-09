import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import type { Authority, AuthorityTree, IResult, Page } from "@/types";
import { ElMessage } from "element-plus";

export default {
  created(params: Authority): Promise<IResult<Authority>> {
    return http.post("/api/auth/authority", params).then((response: AxiosResponse<IResult<Authority>>) => {
      return response.data;
    });
  },
  remove(id: string): Promise<IResult> {
    return http.delete(`/api/auth/authority/${id}`).then((response: AxiosResponse<IResult>) => {
      return response.data;
    });
  },
  modify(params: Authority): Promise<IResult<Authority>> | undefined {
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
  page(params?: Authority, page_num: number = 1, page_size: number = 10): Promise<IResult<Page<Authority>>> {
    return http
      .get("/api/auth/authority", {
        params: { page_num, page_size, ...params }
      })
      .then((response: AxiosResponse<IResult<Page<Authority>>>) => {
        return response.data;
      });
  },
  tree(): Promise<IResult<AuthorityTree[]>> {
    return http.get("/api/auth/authority/tree").then((response: AxiosResponse<IResult<AuthorityTree[]>>) => {
      return response.data;
    });
  }
};
