const path = require('path');
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /**
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   **/
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({
      symbolId: "icon-[name]",
      include: ["./src/icons"]
    })
  },
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],
      alias: {
        'vue': 'vue/dist/vue.js',
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components'),
      }
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      scss: {
        prependData:`@import "./src/styles/main.scss";`
      }

    }
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {// 设置代理
      '/api': {
        target: 'http://www.web-jshtml.cn/productapi/token',//API服务器的地址
        changeOrigin: true,
        pathRewrite:{
          '^/api': ""
        }
      }
    }, 
    overlay: { // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    before: app => {
    }
  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {}
}


// const path = require("path");
// const UglifyPlugin = require("uglifyjs-webpack-plugin");
// module.exports = {
//   // 基本路径
//   /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
//   /* 
//   baseUrl: process.env.NODE_ENV === 'production' ? './' : '/'
//    */
//   baseUrl: "/api/",
//   publicPath: process.env.NODE_ENV === "production" ? "api/" : "api/",
//   // 输出文件目录
//   outputDir: "dist",
//   // eslint-loader 是否在保存的时候检查
//   lintOnSave: false,
//   // use the full build with in-browser compiler?
//   // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
//   //   compiler: false,
//   runtimeCompiler: true, //关键点在这
//   // 调整内部的 webpack 配置。
//   // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
//   // webpack配置
//   // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
//   chainWebpack:config => {
//     // GraphQL Loader
//     // config.module
//     //   // 你还可以再添加一个 loader
//     //   .use('scss-loader')
//     //     .loader('scss-loader')
//     //     .end()
//   },
//   configureWebpack: config => {
//     if (process.env.NODE_ENV === "production") {
//       // 为生产环境修改配置...
//       config.mode = "production";
//       // 将每个依赖包打包成单独的js文件
//       var optimization = {
//         runtimeChunk: "single",
//         splitChunks: {
//           chunks: "all",
//           maxInitialRequests: Infinity,
//           minSize: 20000, // 依赖包超过20000bit将被单独打包
//           cacheGroups: {
//             vendor: {
//               test: /[\\/]node_modules[\\/]/,
//               name(module) {
//                 // get the name. E.g. node_modules/packageName/not/this/part.js
//                 // or node_modules/packageName
//                 const packageName = module.context.match(
//                   /[\\/]node_modules[\\/](.*?)([\\/]|$)/
//                 )[1];
//                 // npm package names are URL-safe, but some servers don't like @ symbols
//                 return `npm.${packageName.replace("@", "")}`;
//               }
//             }
//           }
//         },
//         minimizer: [
//           new UglifyPlugin({
//             uglifyOptions: {
//               compress: {
//                 warnings: false,
//                 drop_console: true, // console
//                 drop_debugger: false,
//                 pure_funcs: ["console.log"] // 移除console
//               }
//             }
//           })
//         ]
//       };
//       Object.assign(config, {
//         optimization
//       });
//     } else {
//       // 为开发环境修改配置...
//       config.mode = "development";
//       var optimization2 = {
//         runtimeChunk: "single",
//         splitChunks: {
//           chunks: "all",
//           maxInitialRequests: Infinity,
//           minSize: 20000, // 依赖包超过20000bit将被单独打包
//           cacheGroups: {
//             vendor: {
//               test: /[\\/]node_modules[\\/]/,
//               name(module) {
//                 // get the name. E.g. node_modules/packageName/not/this/part.js
//                 // or node_modules/packageName
//                 const packageName = module.context.match(
//                   /[\\/]node_modules[\\/](.*?)([\\/]|$)/
//                 )[1];
//                 // npm package names are URL-safe, but some servers don't like @ symbols
//                 return `npm.${packageName.replace("@", "")}`;
//               }
//             }
//           }
//         }
//       };
//     }
//     Object.assign(config, {
//       // 开发生产共同配置
 
//       // externals: {
//       //   'vue': 'Vue',
//       //   'element-ui': 'ELEMENT',
//       //   'vue-router': 'VueRouter',
//       //   'vuex': 'Vuex'
//       // } // 防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(用于csdn引入)
//       resolve: {
//         extensions: [".js", ".vue", ".json"], //文件优先解析后缀名顺序
//         alias: {
//           "@": path.resolve(__dirname, "./src"),
//           "@c": path.resolve(__dirname, "./src/components"),
//           "@v": path.resolve(__dirname, "./src/views"),
//           "@u": path.resolve(__dirname, "./src/utils"),
//           "@s": path.resolve(__dirname, "./src/service")
//         }, // 别名配置
//         plugins: [
// 			new sass-loader()
// 		]
//       },
//       optimization: optimization2
//     });
//   },
//   // vue-loader 配置项
//   // https://vue-loader.vuejs.org/en/options.html
//   // vueLoader: {},
//   // 生产环境是否生成 sourceMap 文件
//   productionSourceMap: false,
//   // css相关配置
//   css: {
//     // 是否使用css分离插件 ExtractTextPlugin
//     // extract: true, //注释css热更新生效
//     // 开启 CSS source maps?
//     sourceMap: false,
//     // css预设器配置项
// 	// requireModuleExtension:false,
//     loaderOptions: {
// 		sass:{
// 		        // @/ 是 src/ 的别名
// 		        // 所以这里假设你有 `src/variables.sass` 这个文件
// 		        // 注意：在 sass-loader v7 中，这个选项名是 "data"
// 		        prependData: '@import "~/style/variables.scss"'
// 		}
// 	},
//     // 启用 CSS modules for all css / pre-processor files.
//     modules: false
//   },
//   // use thread-loader for babel & TS in production build
//   // enabled by default if the machine has more than 1 cores
//   parallel: require("os").cpus().length > 1,
//   // 是否启用dll
//   // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
//   // dll: false,
//   // PWA 插件相关配置
//   // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
//   pwa: {},
//   // webpack-dev-server 相关配置
//   devServer: {
//     /* 自动打开浏览器 */
//     open: false,
//     // host: "192.168.0.137",
//     host: "192.168.1.137",
//     port: 8080,
//     https: false,
//     hotOnly: false,
//     /* 使用代理 */
//     proxy: {
//       "/api": {
//         /* 目标代理服务器地址 */
//         // target: "http://192.168.0.106:8080/",
//         target: "http://192.168.1.126:8080/", //阳洋
//         /* 允许跨域 */
//         changeOrigin: true,
//         ws: true,
//         pathRewrite: {
//           "^/api": ""
//         }
//       }
//     },
//     before: () => {}
//   },
//   // 第三方插件配置
//   pluginOptions: {}
// };

