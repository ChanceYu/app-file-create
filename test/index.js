const AppFileCreate = require('../index');

AppFileCreate({
    root: __dirname,
    dirname: 'profile',
    extensions: [{
        ext: 'js'
    },{
        ext: 'axml'
    },{
        ext: 'json',
        args: {
            title: '个人信息'
        }
    }]
})