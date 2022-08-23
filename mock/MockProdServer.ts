import {createProdMockServer} from "vite-plugin-mock/es/createProdMockServer";

import UserApiMock from "./UserApiMock";

export function setupProdMockServer() {
    let data = [...UserApiMock];
    for (let datum of data) {
        // datum.url = import.meta.env.BASE_URL + datum.url.substring(1);
        datum.url = '.' + datum.url;
    }
    createProdMockServer(data);
}
