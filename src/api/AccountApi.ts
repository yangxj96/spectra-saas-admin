import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

export default {
  created(params: Account): Promise<IResult<Account>> {
    return http.post("/api/auth/account", params).then((response: AxiosResponse<IResult<Account>>) => {
      return response.data;
    });
  },
  remove(id: string): Promise<IResult> {
    return http.delete(`/api/auth/account/${id}`).then((response: AxiosResponse<IResult>) => {
      return response.data;
    });
  },
  modify(params: Account): Promise<IResult<Account>> | undefined {
    if (!params.id) {
      ElMessage.error({
        message: "修改数据需要提交数据ID"
      });
      return;
    }
    return http.put("/api/auth/account", params).then((response: AxiosResponse<IResult<Account>>) => {
      return response.data;
    });
  },
  page(params?: Account, page_num: number = 1, page_size: number = 10): Promise<IResult<Page<Account>>> {
    return http
      .get("/api/auth/account/page", {
        params: { page_num, page_size, ...params }
      })
      .then((response: AxiosResponse<IResult<Page<Account>>>) => {
        return response.data;
      });
  }
};
