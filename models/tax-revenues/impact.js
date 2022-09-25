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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export taxpayer_id */
/* unused harmony export taxpayer_table */
/* unused harmony export taxpayer_count */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gross_salary; });
/* unused harmony export proportion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return income_tax_by_taxpayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return paye_by_taxpayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return usc_by_taxpayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return income_tax_sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return paye_sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return usc_sum; });
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["c"]; });




const taxpayer_id = ({ taxpayer_id_in }) => taxpayer_id_in;
const taxpayer_table = ({ taxpayer_table_in }) => taxpayer_table_in;
const taxpayer_count = ({ taxpayer_count_in }) => taxpayer_count_in;

const gross_salary = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].gross_salary;
const proportion = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].proportion;


const income_tax_by_taxpayer = ({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) => Object(_simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__[/* income_tax */ "b"])({ taxpayer_table_in, taxpayer_id_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });
const paye_by_taxpayer = ({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) => Object(_simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__[/* paye */ "c"])({ taxpayer_table_in, taxpayer_id_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });
const usc_by_taxpayer = ({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) => Object(_simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__[/* usc */ "d"])({ taxpayer_table_in, taxpayer_id_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });

const income_tax_sum = ({ taxpayer_table_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
Object(_simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__[/* income_tax */ "b"])({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) * // this should be abstracted e.g. income_tax = income_tax * proportion * taxpayer_calc in sep. scaling model, for now creating _by_taxpayer variables
taxpayer_count({ taxpayer_count_in }),
0);


const paye_sum = ({ taxpayer_table_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
Object(_simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__[/* paye */ "c"])({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({ taxpayer_count_in }),
0);


const usc_sum = ({ taxpayer_table_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
Object(_simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__[/* usc */ "d"])({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({ taxpayer_count_in }),
0);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tax_rate */
/* unused harmony export band */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return usc_table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return paye_table; });
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["g"]; });





// tax rate an input
const tax_rate = ({ tax_rate_in }) => tax_rate_in;

//export const tax_credit_proposed = () => tax_credit_proposed_in;

//export const tax_credit = () => tax_credit_in;

const band = ({ band_in }) => band_in;

const usc_table = ({ usc_table_in }) => usc_table_in;

const paye_table = ({ paye_table_in }) => paye_table_in;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "income_tax_by_taxpayer_impact", function() { return income_tax_by_taxpayer_impact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_by_taxpayer_impact", function() { return usc_by_taxpayer_impact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paye_by_taxpayer_impact", function() { return paye_by_taxpayer_impact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "income_tax_sum_impact", function() { return income_tax_sum_impact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "income_tax_impact", function() { return income_tax_impact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paye_sum_impact", function() { return paye_sum_impact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paye_impact", function() { return paye_impact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_sum_impact", function() { return usc_sum_impact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usc_impact", function() { return usc_impact; });
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax_sum_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_sum_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paye_sum_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paye_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effective_rate_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paye_by_taxpayer_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax_by_taxpayer_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_by_taxpayer_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax_sum_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_sum_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paye_sum_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paye_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effective_rate_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paye_by_taxpayer_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax_by_taxpayer_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usc_by_taxpayer_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["j"]; });
















const income_tax_by_taxpayer_impact = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in, taxpayer_count_in }) =>
Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* income_tax_by_taxpayer */ "c"])({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in, taxpayer_count_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* income_tax_by_taxpayer */ "d"])({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in });
const usc_by_taxpayer_impact = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) =>
Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_by_taxpayer */ "j"])({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* usc_by_taxpayer */ "j"])({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in });
const paye_by_taxpayer_impact = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) =>
Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_by_taxpayer */ "f"])({ paye_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* paye_by_taxpayer */ "g"])({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in });

const income_tax_sum_impact = ({ taxpayer_table_in, paye_table_in, usc_table_in, taxpayer_count_in }) =>
Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* income_tax_sum */ "d"])({ taxpayer_table_in, paye_table_in, usc_table_in, taxpayer_count_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* income_tax_sum */ "e"])({ taxpayer_table_in, taxpayer_count_in });

const income_tax_impact = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in }) =>
Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* income_tax */ "b"])({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* income_tax */ "c"])({ taxpayer_table_in, taxpayer_id_in });

const paye_sum_impact = ({ taxpayer_table_in, paye_table_in, taxpayer_count_in }) => Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_sum */ "g"])({ taxpayer_table_in, paye_table_in, taxpayer_count_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* paye_sum */ "h"])({ taxpayer_table_in, taxpayer_count_in });

const paye_impact = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in }) => Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye */ "e"])({ paye_table_in, taxpayer_table_in, taxpayer_id_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* paye */ "f"])({ taxpayer_table_in, taxpayer_id_in });

const usc_sum_impact = ({ taxpayer_table_in, usc_table_in, taxpayer_count_in }) => Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_sum */ "k"])({ taxpayer_table_in, usc_table_in, taxpayer_count_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* usc_sum */ "k"])({ taxpayer_table_in, taxpayer_count_in });

const usc_impact = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) => Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc */ "i"])({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* usc */ "i"])({ taxpayer_table_in, taxpayer_id_in });

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export taxpayer_id */
/* unused harmony export taxpayer_table */
/* unused harmony export taxpayer_count */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return gross_salary; });
/* unused harmony export proportion */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return income_tax_by_taxpayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return paye_by_taxpayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return usc_by_taxpayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return income_tax_sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return paye_sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return usc_sum; });
/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__["c"]; });




const taxpayer_id = ({ taxpayer_id_in }) => taxpayer_id_in;
const taxpayer_table = ({ taxpayer_table_in }) => taxpayer_table_in;
const taxpayer_count = ({ taxpayer_count_in }) => taxpayer_count_in;

const gross_salary = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].gross_salary;
const proportion = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].proportion;


const income_tax_by_taxpayer = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in, taxpayer_count_in }) => Object(_simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__[/* income_tax */ "b"])({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });
const paye_by_taxpayer = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) => Object(_simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__[/* paye */ "c"])({ paye_table_in, taxpayer_table_in, taxpayer_id_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });
const usc_by_taxpayer = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) => Object(_simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__[/* usc */ "d"])({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });

const income_tax_sum = ({ taxpayer_table_in, paye_table_in, usc_table_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
Object(_simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__[/* income_tax */ "b"])({ paye_table_in, taxpayer_table_in, usc_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) * // this should be abstracted e.g. income_tax = income_tax * proportion * taxpayer_calc in sep. scaling model, for now creating _by_taxpayer variables
taxpayer_count({ taxpayer_count_in }),
0);


const paye_sum = ({ taxpayer_table_in, paye_table_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
Object(_simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__[/* paye */ "c"])({ paye_table_in, taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({ taxpayer_count_in }),
0);


const usc_sum = ({ taxpayer_table_in, usc_table_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
Object(_simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_4__WEBPACK_IMPORTED_MODULE_3__[/* usc */ "d"])({ usc_table_in, taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({ taxpayer_count_in }),
0);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export net_salary */
/* unused harmony export gross_salary_ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return income_tax; });
/* unused harmony export tax_credit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return effective_rate; });
/* unused harmony export prsi */
/* unused harmony export usc_table_ */
/* unused harmony export usc_band_id */
/* unused harmony export usc_band_end */
/* unused harmony export usc_band_start */
/* unused harmony export usc_rate */
/* unused harmony export usc_by_band_id */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return usc; });
/* unused harmony export paye_table_ */
/* unused harmony export paye_band_id */
/* unused harmony export paye_band_end */
/* unused harmony export paye_band_start */
/* unused harmony export paye_rate */
/* unused harmony export paye_by_band_id */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return paye; });
/* harmony import */ var _incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
 // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters. Many limitations

const net_salary = ({ taxpayer_table_in, taxpayer_id_in, paye_table_in, usc_table_in }) => Object(_incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) - income_tax({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in });

const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;

const income_tax = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in }) => Math.max(paye({ paye_table_in, taxpayer_table_in, taxpayer_id_in }) + prsi({ taxpayer_table_in, taxpayer_id_in }) + usc({ usc_table_in, taxpayer_table_in, taxpayer_id_in }), 0);

const tax_credit = ({}) => 4000; //tax_credit_in;

const effective_rate = ({ taxpayer_table_in, taxpayer_id_in, paye_table_in, usc_table_in }) => 1 - net_salary({ taxpayer_table_in, taxpayer_id_in, paye_table_in, usc_table_in }) / Object(_incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in });

const prsi = ({ taxpayer_table_in, taxpayer_id_in }) =>
Object(_incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) * 0.04 * (Object(_incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) > 352 * 52 ? 1 : 0);

const usc_table_ = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 21295, rate: 0.02 },
{
  band_id: 3,
  band_co: 70144,
  rate: 0.045 },

{ band_id: 4, band_co: 0, rate: 0.08 }];


const usc_band_id = ({ usc_band_id_in }) => usc_band_id_in;

const usc_band_end = ({ usc_band_id_in, usc_table_in }) => {
  if (usc_band_id({ usc_band_id_in }) == Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_table */ "l"])({ usc_table_in }).length) return 999999999;
  return Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_table */ "l"])({ usc_table_in })[usc_band_id({ usc_band_id_in }) - 1].band_co;
};

const usc_band_start = ({ usc_band_id_in, usc_table_in }) => {
  if (usc_band_id({ usc_band_id_in }) == 1) return 0;
  return Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_table */ "l"])({ usc_table_in })[usc_band_id({ usc_band_id_in }) - 2].band_co;
};

const usc_rate = ({ usc_table_in, usc_band_id_in }) => Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_table */ "l"])({ usc_table_in })[usc_band_id({ usc_band_id_in }) - 1].rate;

const usc_by_band_id = ({ usc_table_in, usc_band_id_in, taxpayer_table_in, taxpayer_id_in }) =>
usc_rate({ usc_table_in, usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in, usc_table_in }) - usc_band_start({ usc_band_id_in, usc_table_in }),
Math.max(Object(_incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) - usc_band_start({ usc_band_id_in, usc_table_in }), 0));


const usc = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) =>
Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* usc_table */ "l"])({ usc_table_in }).reduce(
(a, v) => a + usc_by_band_id({ usc_table_in, taxpayer_table_in, taxpayer_id_in, usc_band_id_in: v.band_id }),
0) * (
Object(_incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) > 13000 ? 1 : 0);

const paye_table_ = ({}) => [
{ band_id: 1, band_co: 36800, rate: 0.2 },
{ band_id: 2, band_co: 100000, rate: 0.4 },
{
  band_id: 3,
  band_co: 0,
  rate: 0.4 }];



const paye_band_id = ({ paye_band_id_in }) => paye_band_id_in;

const paye_band_end = ({ paye_band_id_in, paye_table_in }) => {
  if (paye_band_id({ paye_band_id_in }) == Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_table */ "h"])({ paye_table_in }).length) return 999999999;
  return Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_table */ "h"])({ paye_table_in })[paye_band_id({ paye_band_id_in }) - 1].band_co;
};

const paye_band_start = ({ paye_band_id_in, paye_table_in }) => {
  if (paye_band_id({ paye_band_id_in }) == 1) return 0;
  return Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_table */ "h"])({ paye_table_in })[paye_band_id({ paye_band_id_in }) - 2].band_co;
};

const paye_rate = ({ paye_table_in, paye_band_id_in }) => Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_table */ "h"])({ paye_table_in })[paye_band_id({ paye_band_id_in }) - 1].rate;

const paye_by_band_id = ({ paye_table_in, paye_band_id_in, taxpayer_table_in, taxpayer_id_in }) =>
paye_rate({ paye_table_in, paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in, paye_table_in }) - paye_band_start({ paye_band_id_in, paye_table_in }),
Math.max(Object(_incometax_set_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) - paye_band_start({ paye_band_id_in, paye_table_in }), 0));


const paye = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in }) =>
Math.max(
0,
Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_table */ "h"])({ paye_table_in }).reduce(
(a, v) => a + paye_by_band_id({ paye_table_in, taxpayer_table_in, taxpayer_id_in, paye_band_id_in: v.band_id }),
0) -
tax_credit({}) // input not working here, related to reduce/- above?
);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export net_salary */
/* unused harmony export gross_salary_ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return income_tax; });
/* unused harmony export tax_credit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return effective_rate; });
/* unused harmony export prsi */
/* unused harmony export usc_table */
/* unused harmony export usc_band_id */
/* unused harmony export usc_band_end */
/* unused harmony export usc_band_start */
/* unused harmony export usc_rate */
/* unused harmony export usc_by_band_id */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return usc; });
/* unused harmony export paye_table */
/* unused harmony export paye_band_id */
/* unused harmony export paye_band_end */
/* unused harmony export paye_band_start */
/* unused harmony export paye_rate */
/* unused harmony export paye_by_band_id */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return paye; });
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
 // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters. Many limitations

const net_salary = ({ taxpayer_table_in, taxpayer_id_in }) => Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) - income_tax({ taxpayer_table_in, taxpayer_id_in });

const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;

const income_tax = ({ taxpayer_table_in, taxpayer_id_in }) => Math.max(paye({ taxpayer_table_in, taxpayer_id_in }) + prsi({ taxpayer_table_in, taxpayer_id_in }) + usc({ taxpayer_table_in, taxpayer_id_in }), 0);

const tax_credit = ({}) => 4000; //tax_credit_in;

const effective_rate = ({ taxpayer_table_in, taxpayer_id_in }) => 1 - net_salary({ taxpayer_table_in, taxpayer_id_in }) / Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in });

const prsi = ({ taxpayer_table_in, taxpayer_id_in }) =>
Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) * 0.04 * (Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) > 352 * 52 ? 1 : 0);

const usc_table = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 21295, rate: 0.02 },
{
  band_id: 3,
  band_co: 70144,
  rate: 0.045 },

{ band_id: 4, band_co: 0, rate: 0.08 }];


const usc_band_id = ({ usc_band_id_in }) => usc_band_id_in;

const usc_band_end = ({ usc_band_id_in }) => {
  if (usc_band_id({ usc_band_id_in }) == usc_table({}).length) return 999999999;
  return usc_table({})[usc_band_id({ usc_band_id_in }) - 1].band_co;
};

const usc_band_start = ({ usc_band_id_in }) => {
  if (usc_band_id({ usc_band_id_in }) == 1) return 0;
  return usc_table({})[usc_band_id({ usc_band_id_in }) - 2].band_co;
};

const usc_rate = ({ usc_band_id_in }) => usc_table({})[usc_band_id({ usc_band_id_in }) - 1].rate;

const usc_by_band_id = ({ usc_band_id_in, taxpayer_table_in, taxpayer_id_in }) =>
usc_rate({ usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in }) - usc_band_start({ usc_band_id_in }),
Math.max(Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) - usc_band_start({ usc_band_id_in }), 0));


const usc = ({ taxpayer_table_in, taxpayer_id_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ taxpayer_table_in, taxpayer_id_in, usc_band_id_in: v.band_id }),
0) * (
Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) > 13000 ? 1 : 0);

const paye_table = ({}) => [
{ band_id: 1, band_co: 36800, rate: 0.2 },
{ band_id: 2, band_co: 100000, rate: 0.4 },
{
  band_id: 3,
  band_co: 0,
  rate: 0.4 }];



const paye_band_id = ({ paye_band_id_in }) => paye_band_id_in;

const paye_band_end = ({ paye_band_id_in }) => {
  if (paye_band_id({ paye_band_id_in }) == paye_table({}).length) return 999999999;
  return paye_table({})[paye_band_id({ paye_band_id_in }) - 1].band_co;
};

const paye_band_start = ({ paye_band_id_in }) => {
  if (paye_band_id({ paye_band_id_in }) == 1) return 0;
  return paye_table({})[paye_band_id({ paye_band_id_in }) - 2].band_co;
};

const paye_rate = ({ paye_band_id_in }) => paye_table({})[paye_band_id({ paye_band_id_in }) - 1].rate;

const paye_by_band_id = ({ paye_band_id_in, taxpayer_table_in, taxpayer_id_in }) =>
paye_rate({ paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in }) - paye_band_start({ paye_band_id_in }),
Math.max(Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "b"])({ taxpayer_table_in, taxpayer_id_in }) - paye_band_start({ paye_band_id_in }), 0));


const paye = ({ taxpayer_table_in, taxpayer_id_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ taxpayer_table_in, taxpayer_id_in, paye_band_id_in: v.band_id }),
0) -
tax_credit({}) // input not working here, related to reduce/- above?
);

/***/ })
/******/ ]);
});
//# sourceMappingURL=impact.js.map