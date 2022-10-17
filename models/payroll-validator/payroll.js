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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_table", function() { return usc_table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_band_id", function() { return usc_band_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_band_end", function() { return usc_band_end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_band_start", function() { return usc_band_start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_rate", function() { return usc_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_taxable_salary", function() { return usc_taxable_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_by_band_id", function() { return usc_by_band_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_taxable_by_band_id", function() { return usc_taxable_by_band_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc", function() { return usc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pay_period", function() { return pay_period; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pay_period_duration", function() { return pay_period_duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_gross_salary", function() { return op_gross_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pay_period_gross_salary", function() { return pay_period_gross_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gross_salary", function() { return gross_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "op_usc", function() { return op_usc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pay_period_usc", function() { return pay_period_usc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factor_for_credits_and_bands", function() { return factor_for_credits_and_bands; });
// USC code adapted from simple-incometax.cul.js

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
const usc_table = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 21295, rate: 0.02 },
{
  band_id: 3,
  band_co: 70144,
  rate: 0.045 },

{ band_id: 4, band_co: 999999999, rate: 0.08 }];


const usc_band_id = ({ usc_band_id_in }) => usc_band_id_in;

const usc_band_end = ({ usc_band_id_in, pay_period_duration_in, pay_period_in }) => {
  return (
    usc_table({})[usc_band_id({ usc_band_id_in }) - 1].band_co * factor_for_credits_and_bands({ pay_period_duration_in, pay_period_in }));

};

const usc_band_start = ({ usc_band_id_in, pay_period_duration_in, pay_period_in }) => {
  if (usc_band_id({ usc_band_id_in }) == 1) return 0;
  return (
    usc_table({})[usc_band_id({ usc_band_id_in }) - 2].band_co * factor_for_credits_and_bands({ pay_period_duration_in, pay_period_in }));

};

const usc_rate = ({ usc_band_id_in }) => usc_table({})[usc_band_id({ usc_band_id_in }) - 1].rate;

const usc_taxable_salary = ({ pay_period_gross_salary_in, op_gross_salary_in }) => gross_salary({ pay_period_gross_salary_in, op_gross_salary_in }); // pay usc on pension contribution

const usc_by_band_id = ({ usc_band_id_in, pay_period_duration_in, pay_period_in, pay_period_gross_salary_in, op_gross_salary_in }) => usc_rate({ usc_band_id_in }) * usc_taxable_by_band_id({ usc_band_id_in, pay_period_duration_in, pay_period_in, pay_period_gross_salary_in, op_gross_salary_in });

const usc_taxable_by_band_id = ({ usc_band_id_in, pay_period_duration_in, pay_period_in, pay_period_gross_salary_in, op_gross_salary_in }) =>
Math.min(
usc_band_end({ usc_band_id_in, pay_period_duration_in, pay_period_in }) - usc_band_start({ usc_band_id_in, pay_period_duration_in, pay_period_in }),
Math.max(usc_taxable_salary({ pay_period_gross_salary_in, op_gross_salary_in }) - usc_band_start({ usc_band_id_in, pay_period_duration_in, pay_period_in }), 0));


const usc = ({ pay_period_duration_in, pay_period_in, pay_period_gross_salary_in, op_gross_salary_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ pay_period_duration_in, pay_period_in, pay_period_gross_salary_in, op_gross_salary_in, usc_band_id_in: v.band_id }),
0) *
1; //(gross_salary() > 13000 ? 1 : 0);


// end USC

const pay_period = ({ pay_period_in }) => pay_period_in;
const pay_period_duration = ({ pay_period_duration_in }) => pay_period_duration_in; // 'M' or 'W'

// op = opening = pre current pay period, fut = after current pay period to end of year
const op_gross_salary = ({ op_gross_salary_in }) => op_gross_salary_in;
const pay_period_gross_salary = ({ pay_period_gross_salary_in }) => pay_period_gross_salary_in;
const gross_salary = ({ pay_period_gross_salary_in, op_gross_salary_in }) => pay_period_gross_salary({ pay_period_gross_salary_in }) + op_gross_salary({ op_gross_salary_in });

const op_usc = ({ pay_period_duration_in, pay_period_in, pay_period_gross_salary_in, op_gross_salary_in }) => usc({ pay_period_duration_in, pay_period_gross_salary_in, op_gross_salary_in, pay_period_in: pay_period({ pay_period_in }) - 1 });
const pay_period_usc = ({ pay_period_duration_in, pay_period_in, pay_period_gross_salary_in, op_gross_salary_in }) => usc({ pay_period_duration_in, pay_period_in, pay_period_gross_salary_in, op_gross_salary_in }) - op_usc({ pay_period_duration_in, pay_period_in, pay_period_gross_salary_in, op_gross_salary_in });

const factor_for_credits_and_bands = ({ pay_period_duration_in, pay_period_in }) => {
  if (pay_period_duration({ pay_period_duration_in }) == 'W') return pay_period({ pay_period_in }) / 52;
  if (pay_period_duration({ pay_period_duration_in }) == 'M') return pay_period({ pay_period_in }) / 12;
  return 999;
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=payroll.js.map