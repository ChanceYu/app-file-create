const WeappFileCreate = require('../index');

WeappFileCreate({
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