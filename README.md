# ts-example-host-app
[![license](https://img.shields.io/github/license/flowscripter/ts-example-host-app.svg)](https://github.com/flowscripter/ts-example-host-app/blob/master/LICENSE.md)
[![dependencies](https://img.shields.io/david/flowscripter/ts-example-host-app.svg)](https://david-dm.org/flowscripter/ts-example-host-app)
[![travis](https://api.travis-ci.com/flowscripter/ts-example-host-app.svg)](https://travis-ci.com/flowscripter/ts-example-host-app)
[![npm](https://img.shields.io/npm/v/@flowscripter/ts-example-host-app.svg)](https://www.npmjs.com/package/@flowscripter/ts-example-host-app)

> Example TypeScript host application for the [esm-dynamic-plugins](https://github.com/flowscripter/esm-dynamic-plugins) framework.

## Overview

## Development

Firstly: 

```
npm install
```

then:

Build: `npm run build`

Watch: `npm run watch`

Lint: `npm run lint`

## Run with Node

Firstly run the host app and check no plugins are discovered:
 
    DEBUG=*,-NodeModulesPluginRepository node --experimental-modules dist/index.js

Then install a sample plugin providing one extension (without saving to `package.json`):

    npm install --no-save @flowscripter/ts-example-plugin

Now when you run the host app, you should see a plugin discovered:

    DEBUG=*,-NodeModulesPluginRepository node --experimental-modules dist/index.js

Install another sample plugin providing two extension (without saving to `package.json`) and run again:

    npm install --no-save @flowscripter/ts-example-plugin
    DEBUG=*,-NodeModulesPluginRepository node --experimental-modules dist/index.js

## Further Details

#### Configuration
Explanation of project configuration files:

* `.editorconfig` - Configures [EditorConfig](https://editorconfig.org) compliant editors.
* `.eslintrc.js` - TypeScript based [ESLint](https://eslint.org) configuration for the project derived from [@flowscripter/eslint-config](https://www.npmjs.com/package/@flowscripter/eslint-config).
* `.gitignore` - Specifies files for git to [ignore](https://git-scm.com/docs/gitignore).
* `.huskyrc.js` - Provides git hooks using [Husky](https://github.com/typicode/husky) to enforce semantic commit messages and linting.   
* `.travis.yml` - Defines the [Travis](https://travis-ci.com) build pipeline.
* `commitlint.config.js` - Configures [commitlint](https://conventional-changelog.github.io/commitlint) to ensure commit messages can be used to drive automated [Semantic Version](https://semver.org) releases.
* `package.js` - Defines development cycle scripts and configures publication of ES2015 modules. 
* `release.config.js` - Configuration for automated semantic version releasing using [semantic-release](https://semantic-release.gitbook.io/semantic-release/)
* `renovate.json` - Ensures automated dependency upgrade via [Renovate](https://renovatebot.com)
* `rollup.config.js` - Defines the TypeScript and ES2015 module build pipeline for [Rollup](https://rollupjs.org/guide/en)
* `tsconfig.json` - [TypeScript](https://www.typescriptlang.org) configuration for the project derived from [@flowscripter/tsconfig](https://www.npmjs.com/package/@flowscripter/tsconfig)

#### No Legacy JavaScript Support

All source and build output is in ES2015 module form. 

Browsers or NodeJS versions need to support:

* https://github.com/tc39/proposal-dynamic-import
* https://tc39.github.io/ecmascript-asyncawait/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

Because of this the modules are configured so that:
 
* no transpiling is performed (apart from TypeScript to ES2015 JavaScript)
* `package.json` specifies:
    * `"main": "dist/index.js`
    * `"type": "module"`
    * `"node": ">=12.6.0"` so that the `--experimental-modules` flag can be used and `"type": "module"` can be specified

#### Legacy Module Consumption
 
Legacy CommonJS format npm packages are supported for internal consumption by `rollup-plugin-commonjs`

## License

MIT © Vectronic
