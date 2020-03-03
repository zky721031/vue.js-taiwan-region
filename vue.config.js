module.exports = {
    outputDir: 'dist', // build 輸出目錄
    assetsDir: 'assets', // 靜態資源目錄（js、css、img）
    lintOnSave: false, // 是否開啟eslint
    publicPath: './',
    devServer: {
        open: true, // 是否自動彈出瀏覽器頁面
        host: 'localhost',
        port: '8080',
        https: false, // 是否使用https協議
        hotOnly: false, // 是否開啟hotkey
        /*proxy: {
            '/api': {
                target: 'http://192.168.0.60/api', // API服務器的地址
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }*/
    }
}