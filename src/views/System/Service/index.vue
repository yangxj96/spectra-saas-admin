<template>
    <el-row style="height: 1.2%"></el-row>

    <el-row style="height: 90.8%">
        <!-- @formatter:off -->
        <el-table :data="table_data" stripe border  height="100%" style="width: 100%">
            <el-table-column label="序号"    type="index" width="80"/>
            <el-table-column label="服务名称" prop="date"  width="180"/>
            <el-table-column label="说明"    prop="name"  width="180" show-overflow-tooltip/>
            <el-table-column label="实例数量" prop="num"   width="120"/>
            <el-table-column label="实例状态" prop="num" />
            <el-table-column label="操作"    fixed="right" width="120">
                <template #default>
                    <el-button type="text" @click="this.handleShowDetails" size="small">详情</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- @formatter:on -->
    </el-row>

    <el-row style="float: right;height: 8%">
        <el-pagination
            v-model:currentPage="pagination.page"
            hide-on-single-page
            background
            :page-sizes="pagination.page_sizes"
            layout="sizes,prev, pager, next"
            :total="pagination.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </el-row>

    <service-details :id="detailId" :visible="detailsPopupShow" @submit="this.handleSubmitDetails">
        <!--<template v-slot:footer>-->
        <!--    我是插槽内容-->
        <!--</template>-->
    </service-details>
</template>

<script lang="ts">

import table from "@/mixins/Table";
import ServiceDetails from './components/details.vue';

import {Options, mixins} from "vue-property-decorator";

@Options({
    components: {
        ServiceDetails
    }
})
export default class SystemService extends mixins(table) {

    public detailId: string = '1';

    public detailsPopupShow: boolean = false;

    public created() {
        for (let i = 0; i < 17; i++) {
            this.table_data.push({
                date: '用户服务',
                name: '用户服务服务',
                num: 8
            })
        }
    }

    public handleShowDetails() {
        this.detailId = '1';
        this.detailsPopupShow = !this.detailsPopupShow;
    }

    public handleSubmitDetails(param: any) {
        console.log('父类接受到子类emit事件', param)
        this.detailsPopupShow = false;
    }

}

</script>

<style scoped lang="scss">


</style>
