import http from "@/plugin/request";
import type { AxiosResponse } from "axios";
import type { IResult, Page, Route } from "@/types";

export default {
  page(params?: Route, page_num: number = 1, page_size: number = 10): Promise<IResult<Page<Route>>> {
    return http
      .get("/api/platform/route", {
        params: { page_num, page_size, ...params }
      })
      .then((response: AxiosResponse<IResult<Page<Route>>>) => {
        return response.data;
      });
  }
};
