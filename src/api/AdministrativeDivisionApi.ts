import http from "@/plugin/request";
import { ElMessage } from "element-plus";

const url = "/api/platform/administrativeDivision";

export default {
  async created(params: AdministrativeDivision): Promise<IResult<AdministrativeDivision>> {
    const resp = await http.post<IResult<AdministrativeDivision>>(url, params);
    return resp.data;
  },
  async remote(id: string): Promise<any> {
    if (!id) {
      ElMessage.error({
        message: "主键ID不能为空"
      });
      return;
    }
    const resp = await http.delete(`${url}/${id}`);
    return resp.data;
  },
  async modify(params: AdministrativeDivision): Promise<IResult<AdministrativeDivision> | undefined> {
    if (!params.id) {
      ElMessage.error({
        message: "主键ID不能为空"
      });
      return;
    }
    const resp = await http.put<IResult<AdministrativeDivision>>(url, params);
    return resp.data;
  },
  async page(params?: AdministrativeDivision, page_num: number = 1, page_size: number = 15) {
    const resp = await http.get<IResult<Page<AdministrativeDivision>>>(`${url}/page`, {
      params: { page_num, page_size, ...params }
    });
    return resp.data;
  },
  async tree() {
    const resp = await http.get<IResult<Page<AdministrativeDivisionTree[]>>>(`${url}/tree`);
    return resp.data;
  }
};
