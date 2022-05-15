const Components = require('unplugin-vue-components/webpack')
const { ElementUiResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
	configureWebpack: {
		devtool: 'source-map',
		plugins: [
			Components({
				resolvers: [ElementUiResolver()],
			}),
		],
		devServer: {
			// 代理
			proxy: {
				'^/api': {
					target: 'http://152.136.185.210:5000/',
					pathRewrite: {
						'^/api': '',
					},
					changeOrigin: true,
				},
			},
		},
	},
}
