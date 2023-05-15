import { defineComponent } from "vue";

export default defineComponent({
  data() {
    const pagination: Pagination = {
      size: 15,
      page: 1,
      page_sizes: [10, 50, 100, 150, 300],
      default_page_size: 10,
      total: 1000
    };
    return {
      table_data: [] as any[],
      pagination: pagination
    };
  },
  methods: {
    handleSizeChange(val: number) {
      console.log(`每页数量: ${val}`);
    },
    handleCurrentChange(val: number) {
      console.log(`当前页: ${val}`);
    }
  }
});

// 分页参数实体
export interface Pagination {
  size: number;
  page: number;
  page_sizes: Array<number>;
  default_page_size: number;
  total: number;
}
