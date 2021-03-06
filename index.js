const path = require('path')
const fse  = require('fs-extra')

let defaultOptions = {
    root: process.cwd(),
    replace: false,
    debug: false,
    env: 'wechat',
    dirname: 'index',
    filename: '',
    files: []
}

function AppFileCreate(options){
    options = Object.assign({}, defaultOptions, options || {});

    options.filename = options.filename || options.dirname;

    let pageRoot = path.join(options.root, options.dirname, '/');
    let env = options.env;
    let files = [];
    let outputFiles = [];

    // handler files
    options.files.forEach((item, idx) => {
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
                    template = require(`./templates/${ env === 'alipay' ? 'alipay' : 'wechat' }-json.js`);
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

        fileOptions.filePath = pageRoot;
        fileOptions.file = path.join(pageRoot, fileOptions.filename + '.' + fileOptions.ext);

        files.push(fileOptions);

        // create files
        let exists = fse.pathExistsSync(fileOptions.file);

        if(!exists || options.replace === true){
            fse.outputFileSync(fileOptions.file, fileOptions.template);

            outputFiles.push(fileOptions);
            
            if(options.debug === true){
                console.log(`${ exists ? 'replaced' : 'created'}: ${fileOptions.file}`);
            }
        }
    });

    return {
        files: files,
        outputFiles: outputFiles
    }
}

AppFileCreate.config = function(options){
    Object.assign(defaultOptions, options);
}

module.exports = AppFileCreate