import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

export default {
    created(parameters: Authority): Promise<IResult<Authority>> {
        return http.post("/api/auth/authority", parameters).then((response: AxiosResponse<IResult<Authority>>) => {
            return response.data;
        });
    },
    remove(id: string): Promise<IResult> {
        return http.delete(`/api/auth/authority/${id}`).then((response: AxiosResponse<IResult>) => {
            return response.data;
        });
    },
    modify(parameters: Authority): Promise<IResult<Authority>> | undefined {
        if (!parameters.id) {
            ElMessage.error({
                message: "修改数据需要提交数据ID"
            });
            return;
        }
        return http.put("/api/auth/authority", parameters).then((response: AxiosResponse<IResult<Authority>>) => {
            return response.data;
        });
    },
    page(parameters?: Authority, page_number: number = 1, page_size: number = 10): Promise<IResult<Page<Authority>>> {
        return http
            .get("/api/auth/authority", {
                params: { page_num: page_number, page_size, ...parameters }
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
