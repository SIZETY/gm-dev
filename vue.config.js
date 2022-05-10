module.exports = {
  configureWebpack: {
    devtool: 'source-map',
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
