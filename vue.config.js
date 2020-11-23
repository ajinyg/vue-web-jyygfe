module.exports = {
  publicPath: './',
  // assetsDir: 'static', // 静态资源打包后所在文件夹
  productionSourceMap: false,
  //webpack配置
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints: false
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_DOMAIN,//请求域名
        //secure: false, // 如果是https接口，需要配置这个参数
        changeOrigin: true,//如果是跨域访问，需要配置这个参数
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}