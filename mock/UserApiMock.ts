import {MockMethod} from "vite-plugin-mock";
import CommonUtils from "../src/utils/CommonUtils";
import {IResult} from "../src/plugin/request";
import {UserOperateLog} from "../src/api/UserApi";

export default <MockMethod[]>[
    {
        url: `/api/auth/login`,
        method: 'post',
        statusCode: 200,
        timeout: CommonUtils.getRandom(50, 100),
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
        timeout: CommonUtils.getRandom(50, 100),
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
    },
    {
        url: `/api/user/getUserLogById`,
        method: 'get',
        statusCode: 200,
        timeout: CommonUtils.getRandom(50, 100),
        response: () => {
            let data: UserOperateLog[] = [];
            let status: number[] = [200, 204, 206, 301, 302, 303, 304, 400, 401, 403, 404, 500, 503]
            for (let i = 0; i < 10; i++) {
                data.push({
                    id: CommonUtils.getRandom(10000000, 99999999),
                    created_time: '2022-12-12 00:00:00',
                    url: '/baidu.com',
                    response_status: status[CommonUtils.getRandom(1, status.length)],
                    response_result: JSON.stringify({code: 0, message: '操作成功'}),
                    ip: '127.0.0.1',
                })
            }

            return <IResult<UserOperateLog[]>>{
                code: 0,
                message: '操作成功',
                data: data
            }
        }
    }
]
