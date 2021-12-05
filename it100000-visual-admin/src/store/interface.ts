/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import SystemModuleTypes from "@/store/modules/system/interface";

export default interface RootStateTypes {

}

export interface AllStateTypes extends RootStateTypes {
	SystemModule: SystemModuleTypes;
}

