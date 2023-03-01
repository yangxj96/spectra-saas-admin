import {MockMethod} from "vite-plugin-mock";
import CommonUtils from "../src/utils/CommonUtils";
import {IResult} from "../src/plugin/request";
import {RoleTree} from "../src/api/RoleApi";

export default <MockMethod[]>[
    {
        url: `/api/auth/role/tree`,
        method: 'get',
        statusCode: 200,
        timeout: CommonUtils.getRandom(50, 100),
        response: () => {
            return <IResult<RoleTree[]>>{
                code: 0,
                message: '操作成功',
                data: [
                    {
                        id: "123",
                        name: "运维管理员1",
                        description: "说明",
                        children: [
                            {
                                id: "123",
                                name: "运维管理员4",
                                description: "说明",
                            },
                            {
                                id: "123",
                                name: "运维管理员5",
                                description: "说明",
                            }
                        ]
                    },
                    {
                        id: "123",
                        name: "运维管理员2",
                        description: "说明"
                    },
                    {
                        id: "123",
                        name: "运维管理员3",
                        description: "说明"
                    },
                ]
            }
        }
    }
]
