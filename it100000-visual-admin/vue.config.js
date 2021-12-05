/*
 * Copyright (c) 2021.
 * 作者：杨新杰(Jack Young)
 * 邮箱：yangxj96@gmail.com
 * 日期：2021-11-28 02:11:05
 * Copyright (c) 2021.
 */

module.exports = {
	runtimeCompiler: true,
	css: {
		requireModuleExtension: true,
		sourceMap: true
	},
	// devServer: {
	//     proxy: {
	//         "/baiduApi": {
	//             target: 'https://api.map.baidu.com/',
	//             changOrigin: true,
	//             secure: true,//只有代理https地址需要次选项
	//             pathRewrite: {
	//                 '^/baiduApi': ''
	//             }
	//         }
	//     }
	// }
}
