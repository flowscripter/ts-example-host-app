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
 
    npm run nodeHostApp

Then install a sample plugin providing one extension (without saving to `package.json`):

    npm install --no-save @flowscripter/ts-example-plugin

Now when you run the host app, you should see a plugin discovered:

    npm run nodeHostApp

Install a different sample plugin providing two extension (without saving to `package.json`) and run again:

    npm install --no-save @flowscripter/ts-example-plugin
    npm run nodeHostApp

## Run with Browser

To serve locally:

    npm run browserHostApp

Alternatively an online demo is available at:
 
    https://flowscripter.github.io/ts-example-host-app/

In the browser developer tools, enable debug logging to the console by setting the local storage key/value:

    debug = *,-NodeModulesPluginRepository

Without checking either listed plugin URL on the page and clicking on 'load', the browser console should show that no plugins are discovered.

When checking one or both plugin URLs and clicking on 'load', you should see plugins discovered.
 
## Further Details

#### Entry Points for Node and Browser

The build config in `rollup.config.js` produces two bundled entry points:
 
* `browserEntryPoint.js` - loaded by the browser host app web page
* `nodeEntryPoint.js` is passed to node as the script to execute

This ensures that dependencies for node specific modules can be shimmed via [rollup-plugin-node-builtins](https://github.com/calvinmetcalf/rollup-plugin-node-builtins)
and [rollup-plugin-node-globals](https://github.com/calvinmetcalf/rollup-plugin-node-globals)   

Note that the sample plugins are also built in a similar way. To ensure the correct browser version is loaded from their
hosted [unpkg.com](https://unpkg.com) locations, they are published to npm with a `browser` property in `package.json`.    

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
* `renovate.json` - Ensures automated dependency upgrade via [Renovate](https://renovatebot.com) with configuration derived from [@flowscripter/renovate-config](https://www.npmjs.com/package/@flowscripter/renovate-config)
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
