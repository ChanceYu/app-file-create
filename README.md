# weapp-file-create
[![](https://img.shields.io/badge/language-JavaScript-brightgreen.svg)](https://github.com/ChanceYu/weapp-file-create)
[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 

创建微信小程序和支付宝小程序的目录页面，还适合其它非小程序的项目使用


## 安装

```bash
npm install weapp-file-create --save-dev
```


## 参数

- `root` - 创建的位置根目录
- `env` - 环境类型，`alipay`、`wechat`，默认`wechat`
- `dirname` - 文件夹名称，`String`
- `filename` - 子文件名称，`String`，默认就是上面的`dirname`
- `extensions` - 子文件扩展名
  - `filename` - 子文件名称，默认是`options`的`filename`，或者`options`的`dirname`（与文件夹名称相同）
  - `ext` - 子文件扩展名，`String`
  - `template` - 子文件模板内容，`String|Function`
  - `args` - 子文件模板渲染的参数，`Object`


## 使用

```javascript
const WeappFileCreate = require('weapp-file-create');

// demo1
WeappFileCreate({
    dirname: 'profile',
    extensions: ['js', 'json', 'axml']
})


// demo2
WeappFileCreate({
    dirname: 'profile',
    extensions: [{
        ext: 'js'
    },{
        ext: 'json',
        args: {
            title: '个人信息'
        }
    }]
})
```


## License

[![](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/mit-license.php) 