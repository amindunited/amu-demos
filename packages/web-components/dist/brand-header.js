(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BrandHeader"] = factory();
	else
		root["BrandHeader"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/brand-header/brand-header.string.scss
/* harmony default export */ var brand_header_string = ("ul{list-style:none;margin:0;padding:0}li{list-style:none;display:block;padding:8px;margin-bottom:8px;box-shadow:0 1px 1px 0 rgba(0,0,0,.06),0 0 2px 0 rgba(0,0,0,.06)}li img{max-height:80px;max-width:80px;display:inline-block;vertical-align:top}li .info-wrap{display:inline-block;min-width:80%;height:80px}li .info-wrap .headings{font-weight:bold}ul{list-style:none;margin:0;padding:0}li{list-style:none;display:block;padding:8px;margin-bottom:8px;box-shadow:0 1px 1px 0 rgba(0,0,0,.06),0 0 2px 0 rgba(0,0,0,.06)}li img{max-height:80px;max-width:80px;display:inline-block;vertical-align:top}li .info-wrap{display:inline-block;min-width:80%;height:80px}li .info-wrap .headings{font-weight:bold}:host{display:block;background-color:#547980;padding:8px 16px;margin-bottom:16px}:host .grid{display:flex;flex-wrap:wrap;align-content:center;justify-content:center}:host .grid .col-span-1-12{margin-left:8px;margin-right:8px;width:calc( 8.3333333333% - 16px )}:host a,:host a:visited{color:#e5fcc2;text-decoration:none;font-weight:bold;display:block;height:24px}");
// CONCATENATED MODULE: ./src/brand-header/brand-header.js


class brand_header_BrandHeader extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'});
    console.log('headerCSS', brand_header_string);
  }

  connectedCallback () {
    console.log('connected?');
    const fragment = document.createDocumentFragment();
    const container = document.createElement('div');
    const styleTag = document.createElement('style');
    styleTag.innerHTML = brand_header_string;
    container.innerHTML = `
      <slot>
        <header class="grid">
          <div class="col-span-1-12">
            <a aria-label="Link to TV Maze" href="https://tvmaze.com">TV Maze</a>
          </div>
          <div class="col-span-1-12">
            <a aria-label="Link to Github" href="https://github.com/amindunited">Github</a>
          </div>
          <div class="col-span-1-12">
            <a aria-label="Link to Twitter" href="https://twitter.com/amindunited">Twitter</a>
          </div>
        </header>
      </slot>
    `;
    fragment.appendChild(styleTag);
    fragment.appendChild(container);
    this.shadow.appendChild(fragment);
  }
}

/* harmony default export */ var brand_header = (brand_header_BrandHeader);

// CONCATENATED MODULE: ./src/brand-header/index.js

/* harmony default export */ var src_brand_header = __webpack_exports__["default"] = (brand_header);


/***/ })
/******/ ])["BrandHeader"];
});