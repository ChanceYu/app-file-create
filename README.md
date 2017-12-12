# weapp-file-create
[![](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)](https://github.com/ChanceYu/weapp-file-create)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 

创建小程目录和页面，支持微信小程序和支付宝小程序，还适合其它非小程序的项目使用


## 安装

```bash
npm install weapp-file-create --save-dev
```


## 使用

```javascript
const WeappFileCreate = require('weapp-file-create');

/*
WeappFileCreate({
    root,
    dirname,
    filename,
    extensions: [{
        filename,
        ext,
        template,
        args
    }]
})
 */

WeappFileCreate({
    root: __dirname,
    dirname: 'profile',
    extensions: ['js', 'json', 'axml']
})
```


## 参数`options`

- `root` - 创建的根目录
- `dirname` - 文件夹名称，`String`
- `filename` - 子文件名称，`String`，默认就是上面的`dirname`
- `extensions` - 子文件扩展名


### 子文件类型`extensions`
`extensions` 是个数组，里面可以直接传递文件扩展名，或者一个对象，里面包含每个子文件的参数，如下两种效果是一样的
```javascript
// 1
WeappFileCreate({
    extensions: ['js', 'json', 'axml']
})

// 2
WeappFileCreate({
    extensions: [{
        ext: 'js'
    },{
        ext: 'json'
    },{
        ext: 'axml'
    }]
})
```


### 子文件参数`fileOptions`

- `filename` - 子文件名称，默认是`options`的`filename`，或者`options`的`dirname`（与文件夹名称相同）
- `ext` - 子文件扩展名，`String`
- `template` - 子文件模板内容，`String|Function`
- `args` - 子文件模板渲染的参数，`Object`


## License

[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 