const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    filename: 'chwech-utils.js', // 打包后输出的文件名
    path: path.resolve(__dirname, 'dist'), // 打包后输出的路径
    library: 'cwcUtil', // 配合libraryTarget使用
    // libraryTarget: 'var' // 入口起点的任何导出值将赋值为library定义的名字作为全局变量，可通过script标签引入使用
    // libraryTarget: 'this' // 入口起点的任何导出值将赋值给this下的属性，library定义的名字作为属性名，可通过script标签引入使用
    // libraryTarget: 'window' //  入口起点的返回值将使用 output.library 中定义的值，分配给 window 对象的这个属性下。
    // libraryTarget: 'global' //  入口起点的返回值将使用 output.library 中定义的值，分配给 global 对象的这个属性下。
    // libraryTarget: 'commonjs'
    // libraryTarget: 'commonjs2'
    // libraryTarget: 'amd'
    // libraryTarget: 'jsonp' // 把入口起点的返回值，包裹到一个 jsonp 包装容器中
    libraryTarget: 'umd' // 将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。 
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}