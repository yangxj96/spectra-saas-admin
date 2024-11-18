import http from "@/plugin/request";
import { ElMessage } from "element-plus";

export default {
  async created(params: Route): Promise<IResult<Route>> {
    const resp = await http.post<IResult<Route>>("/api/platform/route", params);
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
  async modify(params: Route): Promise<IResult<Route> | undefined> {
    if (!params.id) {
      ElMessage.error({
        message: "主键ID不能为空"
      });
      return;
    }
    const resp = await http.put<IResult<Route>>("/api/platform/route", params);
    return resp.data;
  },
  async page(params?: Route, page_num: number = 1, page_size: number = 10): Promise<IResult<Page<Route>>> {
    const resp = await http.get("/api/platform/route", {
      params: { page_num, page_size, ...params }
    });
    return resp.data;
  }
};
