# app-file-create
[![NPM][img-npm]][url-npm]
[![Build Status][img-travis]][url-travis]
[![Dependencies][img-david]][url-david]
[![Language][img-javascript]][url-github]
[![License][img-mit]][url-mit]

创建微信小程序和支付宝小程序的目录页面，还适合其它非小程序的项目使用，简单易用，功能强大，[English](./README-en.md)


## 安装

```bash
npm install app-file-create --save-dev
```


## 参数

名称 | 类型 | 默认 | 描述
--- | --- | --- | ---
`root`                 | String | `process.cwd()` | 创建的文件位置目录
`env`                  | String | `wechat` | 环境类型，`alipay`、`wechat`，默认`wechat`
`debug`                | Boolean | `false` | 是否开启调试模式，默认`false`，如果为`true`，则会显示log信息
`replace`              | Boolean | `false` | 是否替换原来的文件，默认`false`
`dirname`              | String | `index` | 文件夹名称，默认`index`
`filename`             | String | -- | 子文件名称，默认就是上面的`dirname`（与文件夹名称相同）
`files`                | Array | `[` <br>`filesOption`<br>`]` | 子文件配置，`filesOption` 是个对象参数
`filesOption.ext`      | String | -- | 子文件扩展名
`filesOption.filename` | String | -- | 子文件名称，默认是`options`的`filename`，或者`options`的`dirname`（与文件夹名称相同）
`filesOption.template` | String \| Function | -- | 子文件模板内容，如果是函数，那么函数第一个参数就是下面的`args`参数
`filesOption.args`     | Object | `{}` | 子文件模板渲染的参数，如果`template`参数是函数，此参数生效


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
[url-travis]: https://travis-ci.org/ChanceYu/app-file-create
[url-david]: https://david-dm.org/ChanceYu/app-file-create
[url-mit]: https://opensource.org/licenses/mit-license.php

[img-npm]: https://nodei.co/npm/app-file-create.png?compact=true
[img-travis]: https://travis-ci.org/ChanceYu/app-file-create.svg?branch=master
[img-david]: https://david-dm.org/ChanceYu/app-file-create/status.svg
[img-javascript]: https://img.shields.io/badge/language-JavaScript-brightgreen.svg
[img-mit]: https://img.shields.io/badge/license-MIT-blue.svg