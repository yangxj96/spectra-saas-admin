import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

export default {
  created(parameters: Account): Promise<IResult<Account>> {
    return http.post("/api/auth/account", parameters).then((response: AxiosResponse<IResult<Account>>) => {
      return response.data;
    });
  },
  remove(id: string): Promise<IResult> {
    return http.delete(`/api/auth/account/${id}`).then((response: AxiosResponse<IResult>) => {
      return response.data;
    });
  },
  modify(parameters: Account): Promise<IResult<Account>> | undefined {
    if (!parameters.id) {
      ElMessage.error({
        message: "修改数据需要提交数据ID"
      });
      return;
    }
    return http.put("/api/auth/account", parameters).then((response: AxiosResponse<IResult<Account>>) => {
      return response.data;
    });
  },
  page(parameters?: Account, page_number: number = 1, page_size: number = 10): Promise<IResult<Page<Account>>> {
    return http
      .get("/api/auth/account/page", {
        params: { page_num: page_number, page_size, ...parameters }
      })
      .then((response: AxiosResponse<IResult<Page<Account>>>) => {
        return response.data;
      });
  }
};
