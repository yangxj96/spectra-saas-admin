/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:57:27
 * Copyright (c) 2021.
 */

import {createI18n} from "vue-i18n";

import elementLocaleZh from 'element-plus/lib/locale/lang/zh-cn';
import elementLocaleEn from 'element-plus/lib/locale/lang/en';

const zh = require('./language/zh-CN');
const en = require('./language/en');

const i18n = createI18n({
	locale: 'zh-CN',
	messages: {
		'zh-CN': {
			...zh,
			...elementLocaleZh
		},
		en: {
			...en,
			...elementLocaleEn
		}
	}
});

export default i18n;
