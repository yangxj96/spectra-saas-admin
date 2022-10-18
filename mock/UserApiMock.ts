import {MockMethod} from "vite-plugin-mock";

export default <MockMethod[]>[
    {
        url: `/api/auth/login`,
        method: 'post',
        statusCode: 200,
        response: () => {
            return {
                code: 0,
                message: '操作成功',
                data: {
                    username: "admin",
                    access_token: "ea0b5233-e02e-4156-92b8-daf7511e4645",
                    refresh_token: "e5a6c21f-61c0-4867-9772-9711d7081347",
                    authorities: [
                        "ROLE_ADMIN"
                    ],
                    expiration_time: "2022-06-13 17:29:21"
                }
            }
        }
    },
    {
        url: `/api/user/getUserList`,
        method: 'get',
        statusCode: 200,
        response: () => {
            return {
                code: 0,
                message: '操作成功',
                data: [
                    {
                        id: 1000000000000,
                        username: 'sysadmin',
                        password: 'password',
                        org_name: '我是组织',
                        last_login_time: '2022-08-12 00:36:05',
                        last_login_ip: '127.0.0.1',
                        lock: false,
                        enable: true
                    },
                    {
                        id: 1000000000002,
                        username: 'devadmin',
                        password: 'password',
                        org_name: '我是组织',
                        last_login_time: '2022-08-12 00:36:05',
                        last_login_ip: '127.0.0.1',
                        lock: false,
                        enable: true
                    },
                    {
                        id: 1000000000003,
                        username: 'oldadmin',
                        password: 'password',
                        org_name: '我是组织',
                        last_login_time: '2022-08-12 00:36:05',
                        last_login_ip: '127.0.0.1',
                        lock: true,
                        enable: true
                    }
                ]
            }
        }
    }
]
