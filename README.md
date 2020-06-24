# fc-clean-source-map-plugin
**删除sentry上传map之后的map文件** 

# 安装
npm install fc-clean-source-map-plugin --save-dev

# 用法示例

`
    var CleanSourceMapPlugin =  require('fc-clean-source-map-plugin')
    new CleanSourceMapPlugin({
        cssPath: 'dist/css',
        jsPath: 'dist/js'
    })
`
**参数说明**
|参数 | 说明|
|cssPath | 打包之后的css文件夹路径 |
|jsPath | 打包之后的js文件夹路径 |

**注意**  
若npm安装报错，请使用cnpm安装
