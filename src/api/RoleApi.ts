import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

export default {
    created(parameters: Role): Promise<IResult<Role>> {
        return http.post("/api/auth/role", parameters).then((response: AxiosResponse<IResult<Role>>) => {
            return response.data;
        });
    },
    remove(id: string): Promise<IResult> {
        return http.delete(`/api/auth/role/${id}`).then((response: AxiosResponse<IResult>) => {
            return response.data;
        });
    },
    modify(parameters: Role): Promise<IResult<Role>> | undefined {
        if (!parameters.id) {
            ElMessage.error({
                message: "修改数据需要提交数据ID"
            });
            return;
        }
        return http.put("/api/auth/role", parameters).then((response: AxiosResponse<IResult<Role>>) => {
            return response.data;
        });
    },
    page(parameters?: Role, page_number: number = 1, page_size: number = 10): Promise<IResult<Page<Role>>> {
        return http
            .get("/api/auth/role/page", {
                params: { page_num: page_number, page_size, ...parameters }
            })
            .then((response: AxiosResponse<IResult<Page<Role>>>) => {
                return response.data;
            });
    },
    ownerAuthority(id: string) {
        return http.get(`/api/auth/role/ownerAuthority/${id}`).then((response: AxiosResponse<IResult>) => {
            return response.data;
        });
    },
    tree() {
        return http.get("/api/auth/role/tree").then((response: AxiosResponse<IResult<RoleTree[]>>) => {
            return response.data;
        });
    }
};
