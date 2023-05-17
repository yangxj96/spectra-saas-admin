/** 系统配置实体 */
export interface SystemConfig {
  id: number;
  key: string;
  value: any;
  value_str?: string;
  type: number;
  remark?: string;
  items?: {
    name: string;
    value: number;
  }[];
}

/** 系统字典 */
export interface SystemDictGroup {
  id: number;
  name: string;
  children?: SystemDictGroup[];
}

/** 文件存储配置 */
export interface FileSave {
  type: number;
  locale: string;
  access_id: string;
  access_secret: string;
  bucket: string;
}
