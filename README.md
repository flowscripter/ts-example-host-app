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

E2E test: `npm run e2e`

## Run with Node (14.4.0+)

Firstly run the host app and check no plugins are discovered:

    npm run nodeHostApp

Then install a sample plugin providing one extension (without saving to `package.json`):

    npm install --no-save @flowscripter/ts-example-plugin

Now when you run the host app, you should see a plugin discovered:

    npm run nodeHostApp

Install a different sample plugin providing two extension (without saving to `package.json`) and run again:

    npm install --no-save @flowscripter/js-example-plugin
    npm run nodeHostApp

## Run with Browser

To serve locally:

    npm run browserHostApp

Alternatively an online demo is available at: https://flowscripter.github.io/ts-example-host-app/

In the browser developer tools, enable debug logging to the console by setting the local storage key/value:

    debug = *,-NodeModulesPluginRepository

Without checking either plugin URL listed on the page, click on 'load' and the browser console should show that no plugins are discovered.

When checking one or both plugin URLs and clicking on 'load', you should see plugins discovered.

## Further Details

Further details on project configuration files and Javascript version support can be found in
the [template for this project](https://github.com/flowscripter/ts-template/blob/master/README.md#overview).

## License

MIT © Flowscripter
