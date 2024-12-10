import http from "@/plugin/request";
import { ElMessage } from "element-plus";

const url = "/api/platform/administrativeDivision";

export default {
    async created(parameters: AdministrativeDivision): Promise<IResult<AdministrativeDivision>> {
        const resp = await http.post<IResult<AdministrativeDivision>>(url, parameters);
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
    async modify(parameters: AdministrativeDivision): Promise<IResult<AdministrativeDivision> | undefined> {
        if (!parameters.id) {
            ElMessage.error({
                message: "主键ID不能为空"
            });
            return;
        }
        const resp = await http.put<IResult<AdministrativeDivision>>(url, parameters);
        return resp.data;
    },
    async page(parameters?: AdministrativeDivision, page_number: number = 1, page_size: number = 15) {
        const resp = await http.get<IResult<Page<AdministrativeDivision>>>(`${url}/page`, {
            params: { page_num: page_number, page_size, ...parameters }
        });
        return resp.data;
    },
    tree() {
        // const resp = await http.get<IResult<Page<AdministrativeDivisionTree[]>>>(`${url}/tree`);
        // return resp.data;
        return http.get<IResult<Page<AdministrativeDivisionTree>>>(`${url}/tree`);
    }
};
