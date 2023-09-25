import http from "@/plugin/request";
import { AxiosResponse } from "axios";
import { IResult, Page, Route } from "@/types";

export default {
  query(num: number = 1, size: number = 10) {
    return http
      .get("/api/platform/route", {
        params: {
          page_num: num,
          page_size: size
        }
      })
      .then((response: AxiosResponse<IResult<Page<Route>>>) => {
        return response.data;
      });
  }
};
