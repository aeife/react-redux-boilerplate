# react-redux-boilerplate

## starter project for react + redux

inspired by https://github.com/davezuko/react-redux-starter-kit

using Webpack + react + redux + react-router-redux + immutable.js

### General
* fully based on ES2015 using babel
* includes babel stage-0
* all workflows are using Webpack and npm scripts
* uses better-npm-run for better npm script handling

### Dev Server
* express server
* includes webpack-dev-middleware and webpack-hot-middleware
* history api fallback for html5 routes

### Styles
* sass preprocessor
* postcss for autoprefixing
* css modules

### eslint
* includes babel-eslint
* using standard and standard react sharable configs

### Unit Tests
* mocha + chai + jsdom
* tests/setup.js initializes jsdom
* ignore-styles handles css module imports

### web application content
* uses react and redux
* redux-simple-router for routing
* redux-actions for handling redux actions
* includes redux-devtools, only when debugging
