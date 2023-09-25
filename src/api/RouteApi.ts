import http, { type IResult } from "@/plugin/request";
import { AxiosResponse } from "axios";
import { Page } from "@/model/CommonModel";
import { Route } from "@/model/Platform";

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
