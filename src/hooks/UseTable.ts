import { onMounted, reactive } from "vue";
import { Pagination } from "@/types";

export function useTable() {
  const pagination = reactive<Pagination>({
    size: 10,
    page: 1,
    page_sizes: [10, 50, 100, 150, 300],
    default_page_size: 10,
    total: 0
  });

  onMounted(() => {
    handleCurrentChange(0);
  });

  return {
    pagination
  };
}

export function handleCurrentChange(val: number) {
  console.log(`当前页:${val}`);
}

export function handleSizeChange(val: number) {
  console.log(`每页数量:${val}`);
}
