import 'babel-polyfill';
import fetch from 'node-fetch';
import jsdom from 'jsdom';
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;
global.fetch = fetch;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

process.env.NODE_ENV = 'production';
global.__DEV__ = true;
global.__PROD__ = false;

chai.use(chaiImmutable);
