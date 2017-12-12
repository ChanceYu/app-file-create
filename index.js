const fs   = require('fs')
const path = require('path')
const fse  = require('fs-extra')

const SupportExts = ['js', 'json', 'wxml', 'axml', 'xml'];

module.exports = function createPage(options){
    options = Object.assign({ dirname: 'index', root: process.cwd(), extensions: [] }, options || {});

    options.filename = options.filename || options.dirname;

    let pageRoot = path.resolve(options.root, options.dirname) + '/';
    let files = [];

    options.extensions.forEach((item, idx) => {
        let fileOptions = {
            filename: item.filename || options.filename,
            ext: item.ext || item
        };

        let template = '';

        if(item.template){
            template = item.template;
        }else{
            switch(fileOptions.ext){
                case 'js':
                    template = require('./templates/page.js');
                break;
                case 'json':
                    template = require(`./templates/${ options.env === 'alipay' ? 'alipay' : 'wechat' }-json.js`);
                break;
                case 'wxml':
                case 'axml':
                case 'xml':
                    template = require('./templates/xml.js');
                break;
            }
        }

        if(typeof template === 'function'){
            fileOptions.template = template(item.args || {});
        }else if(typeof template === 'string'){
            fileOptions.template = template;
        }

        files.push(fileOptions);
    });

    files.forEach((item, idx) => {
        fse.outputFileSync(pageRoot + item.filename + '.' + item.ext, item.template);
    });
}