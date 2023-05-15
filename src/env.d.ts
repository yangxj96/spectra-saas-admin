/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** api请求地址 **/
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.vue" {
  import type {DefineComponent} from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}