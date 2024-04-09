import { onMounted, ref } from "vue";
import type { IResult, Page, Pagination } from "@/types";
import { ElMessage } from "element-plus";

export function useTable<T>(
  request: (params?: T, page_num?: number, page_size?: number) => Promise<IResult<Page<T>>>,
  params: T | undefined = undefined
) {
  const pagination = ref<Pagination>({
    size: 10,
    page: 1,
    page_sizes: [10, 50, 100, 150, 300],
    default_page_size: 10,
    total: 0
  });

  const table_data = ref<T[]>([]);

  onMounted(() => {
    handleCurrentChange(pagination.value.page);
  });

  function handleCurrentChange(val: number) {
    request(params, val, pagination.value.size).then(handleRequestResult);
  }

  function handleSizeChange(val: number) {
    request(params, pagination.value.page, val).then(handleRequestResult);
  }

  function handleRequestResult(response: IResult<Page<T>>) {
    console.log("请求结果:", response);
    if (response.code != 0) {
      ElMessage.success({
        message: response.msg
      });
      return;
    }
    table_data.value = response.data.records as never[];
    pagination.value.total = response.data.total;
    pagination.value.size = response.data.size;
    pagination.value.page = response.data.current;
  }

  return {
    table_data,
    pagination,
    handleCurrentChange,
    handleSizeChange
  };
}
