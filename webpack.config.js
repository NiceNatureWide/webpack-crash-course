const path = require('path')
// 絶対パスを取得する
const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
    // webpackのエントリーポイント　= バンドル対象の設定
    entry: './src/index.js',
    output: {
        filename: 'main.js'
        // 絶対パスで記載する
        path: outputPath
    },
    // webpack-dev-serverのドキュメントルートを指定
    devServer: {
        contentBase: outputPath
    }
}

