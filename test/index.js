const expect = require('chai').expect;
const fse = require('fs-extra');
const AppFileCreate = require('../index');

const pageRoot = __dirname + '/pages';

AppFileCreate.config({
    root: pageRoot,
    debug: false
});

describe('testing `app-file-create`', () => {

    it('outputFiles length', () => {
        fse.emptyDirSync(pageRoot);

        let result = AppFileCreate({
            dirname: 'outputFiles_page',
            files: ['js', 'json', 'wxml', 'wxss']
        });

        expect(result.outputFiles.length).to.eq(4);
    });

    it('files length', () => {
        fse.emptyDirSync(pageRoot);
        
        let result = AppFileCreate({
            dirname: 'files_page',
            env: '',
            files: ['js', 'json', 'css', 'txt', 'html', 'xml']
        });

        expect(result.files.length).to.eq(6);
    });

});