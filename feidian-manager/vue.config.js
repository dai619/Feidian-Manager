// vue.config.js  https://cli.vuejs.org/config/
module.exports = {
	// 选项...
	css: {
		loaderOptions: {
			less: {
				javascriptEnabled: true
			},
		}
	},
	// devServer: {
	// 	proxy: {
	// 		'/apis': {
	// 			// 目标 API 地址
	// 			// target: 'http://127.0.0.1:3000/api',
	// 			// target: 'http://192.168.31.38:3000/api',
	// 			target: 'http://192.168.3.228:8085/api',
	// 			// target: 'http://172.16.8.27:3000/api' ,
	// 			// target: 'http://10.164.8.44:3000/api',
	// 			// target: 'http://10.164.4.251:3000/api',
	// 			// 如果要代理 websockets
	// 			ws: false,
	// 			"secure": false,
	// 			// 将主机标头的原点更改为目标URL
	// 			changeOrigin: true,
	// 			pathRewrite: {
	// 				'^/apis': ''
	// 			}
	// 		}
	// 	}
	// }
}