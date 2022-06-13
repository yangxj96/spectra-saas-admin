import {MockMethod} from "vite-plugin-mock";

const result: MockMethod[] = [
    {
        url: '/api/auth/login',
        method: 'post',
        statusCode: 200,
        response: () => {
            return {
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
]

export default result;
