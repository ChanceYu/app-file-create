# app-file-create
[![](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)](https://github.com/ChanceYu/app-file-create)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 

创建微信小程序和支付宝小程序的目录页面，还适合其它非小程序的项目使用


## 安装

```bash
npm install app-file-create --save-dev
```


## 参数

- `root` - 创建的位置根目录
- `env` - 环境类型，`alipay`、`wechat`，默认`wechat`
- `dirname` - 文件夹名称，`String`
- `filename` - 子文件名称，`String`，默认就是上面的`dirname`与文件夹名称相同
- `extensions` - 子文件扩展名
  - `filename` - 子文件名称，默认是`options`的`filename`，或者`options`的`dirname`（与文件夹名称相同）
  - `ext` - 子文件扩展名，`String`
  - `template` - 子文件模板内容，`String|Function`
  - `args` - 子文件模板渲染的参数，`Object`


## 使用

```javascript
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
```


## License

[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 