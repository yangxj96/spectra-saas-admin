<template>
    <el-row>
        <el-col :span="4">
            <img src="../../../../assets/logo-across.png" class="goto-home" @click="gotoHome" alt="logo"
                 style="height: 56px"/>
        </el-col>

        <el-col :span="1" :offset="19">
            <el-dropdown>
                <el-avatar
                    src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Ff0%2F4b%2F31%2Ff04b31b61de3beb1d87898afc6d84760.jpeg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1644772664&t=82aba550cf7ee7fd169853007fc3ab0c"/>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handlePersonalPopup">
                            <icons name="icon-user" class-name="icon-navbar"/>
                            <span>个人信息</span>
                        </el-dropdown-item>
                        <el-dropdown-item @click="handleModifyPasswordPopup">
                            <icons name="icon-change-password" class-name="icon-navbar"/>
                            <span>修改密码</span>
                        </el-dropdown-item>
                        <el-dropdown-item @click="handleUserLogout">
                            <icons name="icon-logout" class-name="icon-navbar"/>
                            <span>退出登录</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </el-row>
    <personal-details/>
    <change-password/>
</template>

<script lang="ts">

export default defineComponent({
    name: "LayoutNavbarIndex",
    methods: {
        gotoHome() {
            this.$router.push({path: '/'});
        },
        handleUserLogout() {
            this.$message.success({
                ...MessageDefaultConfig,
                message: '退出成功',
                onClose: () => {
                    window.localStorage.clear();
                    window.sessionStorage.clear();
                    location.reload();
                }
            })
        },
        handleModifyPasswordPopup() {
            usePropsStore().setChangePassword(true);
        },
        handlePersonalPopup() {
            usePropsStore().setPersonalDetails(true);
        }
    }
})

</script>

<style scoped lang="scss">

.goto-home {
    cursor: pointer;
}

.el-menu.el-menu--horizontal {
    border: 0;
}

:deep(.el-avatar--large) {
    --el-avatar-size: 2.8vw
}

:deep(.el-dropdown) {
    width: 100%;
    height: 100%;
    text-align: center;

    span {
        position: absolute;
        top: 50%;
        //left: 50%;
        transform: translate(-50%, -50%);
    }
}

.icon-navbar {
    width: 1.3em;
    height: 1.3em;
    padding-right: .5em;
}
</style>
