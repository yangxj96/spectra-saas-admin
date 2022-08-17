import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";

import UserApiMock from "./UserApiMock";

export function setupProdMockServer() {
    createProdMockServer([...UserApiMock]);
}
