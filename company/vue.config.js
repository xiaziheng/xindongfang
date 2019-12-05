// vue.config.js
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // publicPath: '//h5.z211.top/gugong/web',
  publicPath: '/',
  outputDir: 'dist', // 打包生成的生产环境构建文件的目录
  assetsDir: '', // 放置生成的静态资源路径，默认在outputDir
  indexPath: 'index.html', // 指定生成的 index.html 输入路径，默认outputDir
  pages:  {
    index: {
      // page 的入口
      entry: 'src/page/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'index page'
    },
    second: {
        entry: 'src/page/second/main.js',
        template: 'public/second.html',
        filename: 'second.html',
        title: 'second'
    }
  }, // 构建多页
  productionSourceMap: false, // 开启 生产环境的 source map?
  configureWebpack: {
    externals: {
      "BMap": "BMap", 
      vue: 'Vue',
      element: 'ElementUI',
    }
  },
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  css: {
    modules: false, // 启用 CSS modules
    extract: true, // 是否使用css分离插件
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {} // css预设器配置项
  },
  devServer: {
    disableHostCheck: true,
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://39.97.242.38',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }

  },

  lintOnSave: 'error'
}