# app-file-create
[![NPM Version][img-npm-version]][url-npm]
[![Build Status][img-travis]][url-travis]
[![NPM Downloads][img-npm-downloads]][url-npm]
[![Dependencies][img-david]][url-david]
[![Language][img-javascript]][url-github]
[![License][img-mit]][url-mit]

A package to create files and directory for WeChat and Alipay miniProgram, and also support for other programs to use, [中文](./README.md)


## Install

```bash
npm install app-file-create --save-dev
```


## Options

Name | Type | Default | Description
--- | --- | --- | ---
`root`                 | String | `process.cwd()` | Output directory
`env`                  | String | `wechat` | Running environment，`alipay`、`wechat` or empty string
`debug`                | Boolean | `false` | Use debug mode, if true will show log info
`replace`              | Boolean | `false` | Replace old files
`dirname`              | String | `index` | Folder name
`filename`             | String | `index` | Subfile name
`files`                | Array | `[ filesOption ]` | Subfiles Array, `filesOption` is an object
`filesOption.ext`      | String | -- | File extension
`filesOption.filename` | String | -- | Filename
`filesOption.template` | String \| Function | -- | File's template, if it is `Function`, the first argument is `args` below
`filesOption.args`     | Object | `{}` | The argumant for rending template, if `filesOption.template` is `Function`, `args` will be effective


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


[img-npm-version]: https://img.shields.io/npm/v/app-file-create.svg
[img-npm-downloads]: https://img.shields.io/npm/dt/app-file-create.svg
[img-travis]: https://travis-ci.org/ChanceYu/app-file-create.svg?branch=master
[img-david]: https://david-dm.org/ChanceYu/app-file-create/status.svg
[img-javascript]: https://img.shields.io/badge/language-JavaScript-brightgreen.svg
[img-mit]: https://img.shields.io/badge/license-MIT-blue.svg