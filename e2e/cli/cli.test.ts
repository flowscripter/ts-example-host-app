/* eslint-disable import/no-extraneous-dependencies */
import nixt from 'nixt';
import { removeSync } from 'fs-extra';

describe('CLI test', () => {

    beforeEach(() => {
        removeSync('node_modules/@flowscripter/js-example-plugin');
        removeSync('node_modules/@flowscripter/ts-example-plugin');
    });

    test('no plugins installed', (done) => {
        nixt()
            .run('npm run nodeHostApp')
            .stderr(/.*Loaded 0 new plugins providing extensions for Extension Point A.*/)
            .stderr(/.*Loaded 0 new plugins providing extensions for Extension Point B.*/)
            .stderr(/.*Registered 0 extensions for Extension Point A.*/)
            .stderr(/.*Registered 0 extensions for Extension Point B.*/)
            .end(done);
    });

    test('one plugin installed with one extension point', (done) => {
        nixt()
            .exec('npm install --no-save @flowscripter/ts-example-plugin')
            .run('npm run nodeHostApp')
            .stderr(/.*Loaded 1 new plugins providing extensions for Extension Point A.*/)
            .stderr(/.*Loaded 0 new plugins providing extensions for Extension Point B.*/)
            .stderr(/.*Registered 1 extensions for Extension Point A.*/)
            .stderr(/.*Registered 0 extensions for Extension Point B.*/)
            .end(done);
    }, 30000);

    test('one plugin installed with two extension points', (done) => {
        nixt()
            .exec('npm install --no-save @flowscripter/js-example-plugin')
            .run('npm run nodeHostApp')
            .stderr(/.*Loaded 1 new plugins providing extensions for Extension Point A.*/)
            .stderr(/.*Loaded 0 new plugins providing extensions for Extension Point B.*/)
            .stderr(/.*Registered 1 extensions for Extension Point A.*/)
            .stderr(/.*Registered 1 extensions for Extension Point B.*/)
            .end(done);
    }, 30000);

    test('two plugins installed', (done) => {
        nixt()
            .exec('npm install --no-save @flowscripter/js-example-plugin @flowscripter/ts-example-plugin')
            .run('npm run nodeHostApp')
            .stderr(/.*Loaded 2 new plugins providing extensions for Extension Point A.*/)
            .stderr(/.*Loaded 0 new plugins providing extensions for Extension Point B.*/)
            .stderr(/.*Registered 2 extensions for Extension Point A.*/)
            .stderr(/.*Registered 1 extensions for Extension Point B.*/)
            .end(done);
    }, 30000);
});
