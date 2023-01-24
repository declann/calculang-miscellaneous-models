(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
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
/******/ 	__webpack_require__.p = "";
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_growth_pc", function() { return subs_growth_pc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_churn_pc", function() { return subs_churn_pc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_0", function() { return subs_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "year", function() { return year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAC", function() { return CAC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_new", function() { return subs_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_churned", function() { return subs_churned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs", function() { return subs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expenses", function() { return expenses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revenue", function() { return revenue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profit", function() { return profit; });
const subs_growth_pc = ({ subs_growth_pc_in }) => subs_growth_pc_in;
const subs_churn_pc = ({ subs_churn_pc_in }) => subs_churn_pc_in;
const subs_0 = ({ subs_0_in }) => subs_0_in; // subs at start of year 0
const year = ({ year_in }) => year_in;
const CAC = ({ CAC_in }) => CAC_in;

const subs_new = ({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in }) =>
// its hard to find the year boundary needed here when I add expenses to model, when it worked without. Table and good error reporting is very important
year({ year_in }) < 0 ? 0 : subs({ subs_0_in, subs_growth_pc_in, subs_churn_pc_in, year_in: year({ year_in }) - 1 }) * (subs_growth_pc({ subs_growth_pc_in }) / 100);

const subs_churned = ({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) =>
(subs({ subs_0_in, subs_growth_pc_in, subs_churn_pc_in, year_in: year({ year_in }) - 1 }) + subs_new({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in })) * subs_churn_pc({ subs_churn_pc_in }) / 100; // churn assumption also applies to new subs

// subs at end = prev subs at end + new subs@yr - churned subs@yr
const subs = ({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) => {
  if (year({ year_in }) < 0) return subs_0({ subs_0_in });else
  return subs({ subs_0_in, subs_growth_pc_in, subs_churn_pc_in, year_in: year({ year_in }) - 1 }) + subs_new({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in }) - subs_churned({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in });
}; // => can project subs given subs_0, growth and churn rates

const expenses = ({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in, CAC_in }) => subs_new({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in }) * CAC({ CAC_in }); // error?
const revenue = ({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) => subs({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) * 100;
const profit = ({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in, CAC_in }) => revenue({ year_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) - expenses({ year_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in, CAC_in });

/***/ })
/******/ ]);
});
//# sourceMappingURL=expected.js.map