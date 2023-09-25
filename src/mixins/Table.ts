import { defineComponent } from "vue";
import { Pagination } from "@/model/CommonModel";

export default defineComponent({
  data() {
    const pagination: Pagination = {
      size: 10,
      page: 1,
      page_sizes: [10, 50, 100, 150, 300],
      default_page_size: 10,
      total: 0
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
