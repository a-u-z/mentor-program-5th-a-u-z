// webpack.config.js

const path = require('path')
// node 中與路徑的相關套件
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  // 進入點，所以檔案必須與此檔案有關聯才會被編譯
  output: {
    filename: 'index.bundle.js',
    // 編譯檔案名稱
    path: path.resolve(__dirname, 'dist')
    // 編譯檔案的位置
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
