interface ITableData {
    table_data: object[];
    pagination: object;
}

export default {
    data():ITableData {
        return {
            table_data: [],
            pagination: {
                size: 15,
                page: 1,
                page_sizes: [100, 200, 300, 400],
                total: 1000
            }
        }
    },
    methods: {
        /**
         * 每页数量被改变
         * @param val 改变后的值
         */
        handleSizeChange(val: number) {
            console.log(`每页数量: ${val}`)
        },
        /**
         * 当前页被改变
         * @param val 改变后的值
         */
        handleCurrentChange(val: number) {
            console.log(`当前页: ${val}`)
        },
        handleTableData(data: object[]) {
            console.log(typeof data);
            console.log(data);
            // this.table_data = data;
        }
    }
}
