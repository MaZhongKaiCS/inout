// vue.config.js
module.exports = {
    // 解决引入失败的问题
    publicPath : './', // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
    outputDir: 'docs' // 打包之后生成的生产环境的文件名（默认是dist）
}