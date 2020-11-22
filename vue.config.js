const childProcess = require('child_process');
const release = childProcess.execSync('git rev-parse HEAD').toString().trim().substr(0, 9)
process.env.RELEASE_VERSION = release
module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://10.0.8.10:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        },
        cookieDomainRewrite: '',
      },
    },
	host:'81.70.200.109',
    quiet: true, // necessary for FriendlyErrorsPlugin
  },
  configureWebpack: config => {
    module: {
      rules: [{
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "fonts/[name].[ext]",
          },
        },
      }]
    }
  }
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {},
    modules: false
  }
}