# app-file-create
[![version][img-npm-version]][url-npm]
[![downloads][img-npm-downloads]][url-npm]
[![language][img-javascript]][url-github]
[![license][img-mit]][url-mit]

创建微信小程序和支付宝小程序的目录页面，还适合其它非小程序的项目使用，简单易用，功能强大


## 安装

```bash
npm install app-file-create
```


## 参数

- `root` - 创建的文件位置目录
- `env` - 环境类型，`alipay`、`wechat`，默认`wechat`
- `debug` - 是否开启调试模式，默认`false`，如果为`true`，则会显示log信息
- `replace` - 是否替换原来的文件，默认`false`
- `dirname` - 文件夹名称，默认`index`
- `filename` - 子文件名称，默认就是上面的`dirname`，与文件夹名称相同
- `files` - 子文件配置
  - `ext` - 子文件扩展名
  - `filename` - 子文件名称，默认是`options`的`filename`，或者`options`的`dirname`（与文件夹名称相同）
  - `template` - 子文件模板内容，`String|Function`
  - `args` - 子文件模板渲染的参数，`Object`


## 方法

- `config` - 配置默认参数，注意：调用 `AppFileCreate([options])` 的参数会覆盖默认的配置

```javascript
const AppFileCreate = require('app-file-create');

const pageRoot = __dirname + '/pages';

AppFileCreate.config({
    root: pageRoot,
    debug: true
});
```


## 使用

- 创建微信小程序页面
```javascript
AppFileCreate({
    dirname: 'wx_page',
    files: ['js', 'json', 'wxml', 'wxss']
});
```

- 创建支付宝小程序页面
```javascript
AppFileCreate({
    env: 'alipay',
    dirname: 'ali_page',
    files: [
        'js',
        'axml',
        'acss',
        {
            ext: 'json',
            args: {
                title: '个人信息'
            }
        }
    ]
});
```

- 创建其它类型项目文件
```javascript
AppFileCreate({
    env: '',
    dirname: 'web_page',
    files: [
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
```

- 创建其它类型项目文件，子文件名称与文件夹不同
```javascript
AppFileCreate({
    env: '',
    dirname: 'diff_dir_page',
    filename: 'child',
    files: ['js', 'css']
});
```

- 创建其它类型项目文件，子文件名称自定义
```javascript
AppFileCreate({
    env: '',
    dirname: 'diff_filename_page',
    files: [{
        ext: 'js',
        filename: 'a'
    },{
        ext: 'css',
        filename: 'b'
    }]
});
```


## License

[![license][img-mit]][url-mit]


[url-github]: https://github.com/ChanceYu/app-file-create
[url-npm]: https://www.npmjs.com/package/app-file-create
[url-mit]: https://opensource.org/licenses/mit-license.php

[img-npm-version]: https://img.shields.io/npm/v/app-file-create.svg
[img-npm-downloads]: https://img.shields.io/npm/dt/app-file-create.svg
[img-javascript]: https://img.shields.io/badge/language-JavaScript-brightgreen.svg
[img-mit]: https://img.shields.io/badge/license-MIT-blue.svg