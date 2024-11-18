/** 系统配置实体 */
type SystemConfig = {
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
};

/** 菜单对象 **/
type Menu = {
  index: string;
  icon: string;
  name: string;
  default?: string;
  path?: string;
  component?: string;
};

interface MenuTree extends Menu {
  children?: Menu[];
}

/** 系统字典 */
type SystemDictGroup = {
  id: number;
  name: string;
  children?: SystemDictGroup[];
};
