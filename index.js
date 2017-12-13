const path = require('path');
const fse  = require('fs-extra');

module.exports = function createPage(options){
    options = Object.assign({ dirname: 'index', root: process.cwd(), extensions: [] }, options || {});

    options.filename = options.filename || options.dirname;

    let pageRoot = path.resolve(options.root, options.dirname) + '/';
    let env = 'wechat';
    let files = [];

    // alipay wechat ''
    if(options.hasOwnProperty('env')){
        env = options.env;
    }

    // handler file extensions
    options.extensions.forEach((item, idx) => {
        if(typeof item === 'string'){
            item = {
                ext: item
            };
        }
        
        let fileOptions = {
            filename: item.filename || options.filename,
            ext: item.ext
        };

        let template = '';

        if(item.hasOwnProperty('template')){
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

            if(env !== 'alipay' && env !== 'wechat'){
                template = '';
            }
        }

        if(typeof template === 'function'){
            fileOptions.template = template(item.args || {});
        }else if(typeof template === 'string'){
            fileOptions.template = template;
        }

        files.push(fileOptions);
    });

    // create files
    files.forEach((item, idx) => {
        fse.outputFileSync(pageRoot + item.filename + '.' + item.ext, item.template);
    });
}