import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";

import UserApiMock from "./UserApiMock";
import SystemApiMock from "./SystemApiMock";
import RoleApiMock from "./RoleApiMock";

export function setupProdMockServer() {
    let modules = [...UserApiMock, ...SystemApiMock, ...RoleApiMock]
    for (let datum of modules) {
        // datum.url = import.meta.env.BASE_URL + datum.url.substring(1);
        datum.url = '.' + datum.url;
    }
    createProdMockServer(modules);
}
