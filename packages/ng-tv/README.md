# NgSsrStepsWithRoutes

### Refs:

[https://medium.com/@MarkPieszak/angular-universal-server-side-rendering-deep-dive-dc442a6be7b7](https://medium.com/@MarkPieszak/angular-universal-server-side-rendering-deep-dive-dc442a6be7b7)

[https://alligator.io/angular/angular-universal/](https://alligator.io/angular/angular-universal/)

[https://github.com/angular/universal](https://github.com/angular/universal)

Static rendering notes:
[https://github.com/angular/angular/issues/23024#issuecomment-446205508](https://github.com/angular/angular/issues/23024#issuecomment-446205508)


### Quote

Thanks to @matthew-a-thomas, I was able to edit manually the `ng add @nguniversal/express-engine` to also handle the static pre-rendering.

For those interested, all the steps to do so:

1. `ng add @nguniversal/express-engine --clientProject [your project name]`
2. Create the files `prerender.ts` and `static.paths.ts` at the root level of your project next to `server.ts`
3. Copy the content of https://github.com/angular/universal-starter/blob/master/prerender.ts in your `prerender.ts` file
4. Create your routes in your `static.paths.ts` following the example https://github.com/angular/universal-starter/blob/master/static.paths.ts
5. Add the prerender entry in your `webpack.server.config.js`:

```
module.exports = {
  mode: 'none',
  entry: {
    server: './server.ts',
    prerender: './prerender.ts'
  },
```
1. Add the prerender scripts in your `package.json` :

```
"scripts": {
    ...
    "build:prerender": "npm run build:client-and-server-bundles && npm run compile:server && npm run generate:prerender",
    "generate:prerender": "cd dist && node prerender",
    "serve:prerender": "cd dist/browser && http-server"
  }
```
1. Edit the following line in your `prerender.ts`:
   Change `const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./server/main');` (normally line 17)
   By `const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/server/main');`
2. Install the package **http-server** to serve the prerender build:
   `npm install http-server --save-dev`

You are now ready to go!
`npm run build:prerender && npm run serve:prerender`

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.0.10:8080
Hit CTRL-C to stop the server
```

### Ng CLI notes:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
