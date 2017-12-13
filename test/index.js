const AppFileCreate = require('../index');

const pageRoot = __dirname + '/pages';

// 创建支付宝小程序页面
AppFileCreate({
    root: pageRoot,
    env: 'alipay',
    dirname: 'ali_page',
    extensions: [
        'js',
        'axml',
        {
            ext: 'json',
            args: {
                title: '个人信息'
            }
        }
    ]
});


// 创建微信小程序页面
AppFileCreate({
    root: pageRoot,
    dirname: 'wx_page',
    extensions: ['js', 'json', 'wxml']
});


// 创建其它类型项目文件
AppFileCreate({
    root: pageRoot,
    env: '',
    dirname: 'web_page',
    extensions: [
        'js',
        {
            ext: 'html',
            template: 
`<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>

    </body>
</html>`
        }
    ]
});


// 创建其它类型项目文件，子文件名称与文件夹不同
AppFileCreate({
    root: pageRoot,
    env: '',
    dirname: 'diff_dir_page',
    filename: 'child',
    extensions: ['js', 'css']
});


// 创建其它类型项目文件，子文件名称自定义
AppFileCreate({
    root: pageRoot,
    env: '',
    dirname: 'diff_filename_page',
    extensions: [{
        ext: 'js',
        filename: 'a'
    },{
        ext: 'css',
        filename: 'b'
    }]
});