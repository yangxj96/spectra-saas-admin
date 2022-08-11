import {Vue, Options} from "vue-property-decorator";

@Options({})
export default class Table<T> extends Vue {

    /**
     * 表单数据
     */
    public table_data: T[] = [];

    /**
     * 分页数据
     */
    public pagination: Pagination = {
        size: 15,
        page: 1,
        page_sizes: [100, 200, 300, 400],
        total: 1000
    }

    /**
     * 每页数量被改变
     * @param val 改变后的值
     */
    public handleSizeChange(val: number) {
        console.log(`每页数量: ${val}`)
    }


    /**
     * 当前页被改变
     * @param val 改变后的值
     */
    public handleCurrentChange(val: number) {
        console.log(`当前页: ${val}`)
    }

}

// 分页参数实体
interface Pagination {
    size: number,
    page: number,
    page_sizes: Array<number>,
    total: number,
}
