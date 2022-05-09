<template>
    <div>
    </div>
</template>

<script lang="ts">

import {Options, Vue} from "vue-property-decorator";
import demo from "@/utils/demo";

import * as xlsx from 'xlsx';

@Options({})
export default class Module extends Vue {

    created() {
        let data: XlsxData[] = [];
        for (let i = 0; i < demo.length; i++) {
            let datum = demo[i];
            data.push({
                Shape_Type: datum.properties.Shape_Type,
                Name: datum.properties.Name,
                Type: datum.properties.Type,
                latitude: datum.geometry.coordinates[0],
                longitude: datum.geometry.coordinates[1],
                altitude: datum.geometry.coordinates[2]
            })
        }
        let wb = xlsx.utils.book_new();
        let ws = xlsx.utils.json_to_sheet(data);
        wb.SheetNames.push('bk1');
        wb.Sheets['bk1'] = ws;
        // 导出到文件
        // xlsx.writeFile(wb, '导出.xlsx')
    }

}

interface XlsxData {
    Shape_Type: string,
    Name: string,
    Type: string,
    latitude: number,
    longitude: number,
    altitude: number
}

</script>

<style scoped lang="scss">

</style>
