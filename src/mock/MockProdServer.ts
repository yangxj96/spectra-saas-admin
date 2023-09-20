import { createProdMockServer } from "vite-plugin-mock/es/createProdMockServer"

import UserApiMock from "./UserApiMock";

export function setupProdMockServer() {
  const modules = [...UserApiMock];
  for (const datum of modules) {
    // datum.url = import.meta.env.BASE_URL + datum.url.substring(1);
    datum.url = "." + datum.url;
  }
  createProdMockServer(modules);
}
