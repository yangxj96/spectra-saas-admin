// 分页实体
export interface Page<T = any> {
  current: number;
  optimize_count_sql: boolean;
  orders: string[] | null;
  pages: number;
  records: T[] | null;
  search_count: boolean;
  size: number;
  total: number;
}

// 分页参数实体
export interface Pagination {
  size: number;
  page: number;
  page_sizes: Array<number>;
  default_page_size: number;
  total: number;
}
