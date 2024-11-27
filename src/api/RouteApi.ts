import http from "@/plugin/request";
import { ElMessage } from "element-plus";

export default {
  async created(parameters: Route): Promise<IResult<Route>> {
    const resp = await http.post<IResult<Route>>("/api/platform/route", parameters);
    return resp.data;
  },
  async remote(id: string) {
    if (!id) {
      ElMessage.error({
        message: "主键ID不能为空"
      });
      return;
    }
    const resp = await http.delete(`/api/platform/route/${id}`);
    return resp.data;
  },
  async modify(parameters: Route): Promise<IResult<Route> | undefined> {
    if (!parameters.id) {
      ElMessage.error({
        message: "主键ID不能为空"
      });
      return;
    }
    const resp = await http.put<IResult<Route>>("/api/platform/route", parameters);
    return resp.data;
  },
  async page(parameters?: Route, page_number: number = 1, page_size: number = 10): Promise<IResult<Page<Route>>> {
    const resp = await http.get("/api/platform/route", {
      params: { page_num: page_number, page_size, ...parameters }
    });
    return resp.data;
  }
};
