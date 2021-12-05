<template>
    <div id="nav">
        <div>{{ $t('header_menu.register') }}</div>
        <el-config-provider>
            <router-view/>
        </el-config-provider>
    </div>

</template>

<script lang="ts">

import {compile, defineComponent} from "vue";

export default defineComponent({
    setup() {
        // let param = {
        //     name: '杨新杰',
        //     age: 18,
        //     size: '20cm'
        // };
        // console.log('原始值', param);
        // let encryption = AesEncryption.encryption(JSON.stringify(param));
        // console.log("加密结果:",encryption);
        // let decryption = AesEncryption.decryption(encryption);
        // console.log("解密结果:",decryption);

        return {};
    },
    methods: {
        getSearchParams(data: any) {
            // sql最终格式 1 = 1 and k1 = 'v1' and k2 = 'v2'
            // 拆分 1 = 1后都是and x 拼接
            // 所以1 = 1开头,
            // 后续有条件才拼接就ok
            let param = '1 = 1 ';
            for (const key in data) {
                let value = data[key];
                // value为空跳过
                if (value === undefined || value === '' || value === null) continue;
                param += `and ${key} = '${value}' `;
            }
            return param
        },
    }
})
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
}

</style>
