import {MockMethod} from "vite-plugin-mock";
import CommonUtils from "../src/utils/CommonUtils";
import {SystemConfig} from '@/api/SystemApi'
import {IResult} from "../src/plugin/request";

export default <MockMethod[]> [
    {
        url: `/api/system/config`,
        method: 'get',
        statusCode: 200,
        response: () => {
            return <IResult<SystemConfig[]>>{
                code: 0,
                message: '操作成功',
                data:  [
                    {
                        id: CommonUtils.getRandom(10000000,99999999),
                        key: 'sys.default.password',
                        type: 1,
                        value: '123456',
                        value_str: '123456',
                        remark: '默认密码'
                    },
                    {
                        id: CommonUtils.getRandom(10000000,99999999),
                        key: 'sys.default.avatar',
                        type: 1,
                        value: '/api/file/oss/default/avatar.png',
                        value_str: '/api/file/oss/default/avatar.png',
                        remark: '默认头像地址'
                    },
                    {
                        id: CommonUtils.getRandom(10000000,99999999),
                        key: 'sys.default.gender',
                        type: 2,
                        value: '0',
                        value_str: '男',
                        remark: '默认性别',
                        items: [
                            {name: '男', value : 0},
                            {name: '女', value : 1},
                            {name: '未知', value : 2}
                        ]
                    },
                    {
                        id: CommonUtils.getRandom(10000000,99999999),
                        key: 'sys.default.free_modules',
                        type: 3,
                        value: '0,1',
                        value_str: 'OA,管理',
                        remark: '默认的免费模块',
                        items: [
                            {name: 'OA', value : 0},
                            {name: '管理', value : 1},
                            {name: 'OSS', value : 2}
                        ]
                    }
                ]
            }
        }
    },
    {
        url: `/api/system/config/11111`,
        method: 'post',
        statusCode: 200,
        response: () => {
            return <IResult>{
                code: 0,
                message: '操作成功'
            }
        }
    },
]
