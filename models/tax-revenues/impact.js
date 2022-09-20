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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export taxpayer_id */
/* unused harmony export taxpayer_table */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gross_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return income_tax_sum; });
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_4_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);



const taxpayer_id = ({ taxpayer_id_in }) => taxpayer_id_in;
const taxpayer_table = ({ taxpayer_table_in }) => taxpayer_table_in;

const gross_salary = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].gross_salary;

// -taxpayer_id_in
const income_tax_sum = ({ taxpayer_table_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) => acc + Object(_simple_incometax_cul_cul_scope_id_4_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__[/* income_tax */ "a"])({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }), //income_tax({ gross_salary_in: gross_salary({ taxpayer_id_in: val }) }),
0);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export taxpayer_id */
/* unused harmony export taxpayer_table */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gross_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return income_tax_sum; });
/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);



const taxpayer_id = ({ taxpayer_id_in }) => taxpayer_id_in;
const taxpayer_table = ({ taxpayer_table_in }) => taxpayer_table_in;

const gross_salary = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].gross_salary;

// -taxpayer_id_in
const income_tax_sum = ({ taxpayer_table_in, tax_rate_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) => acc + Object(_simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_3__WEBPACK_IMPORTED_MODULE_3__[/* income_tax */ "a"])({ tax_rate_in, taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }), //income_tax({ gross_salary_in: gross_salary({ taxpayer_id_in: val }) }),
0);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tax_rate; });
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _incometax_set_cul_cul_scope_id_3_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _incometax_set_cul_cul_scope_id_3_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_2__["b"]; });




// tax rate an input
const tax_rate = ({ tax_rate_in }) => tax_rate_in;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "income_tax_sum_impact", function() { return income_tax_sum_impact; });
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax_sum_current", function() { return _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax_sum_proposed", function() { return _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["a"]; });






const income_tax_sum_impact = ({ taxpayer_table_in, tax_rate_in }) =>
Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* income_tax_sum */ "a"])({ taxpayer_table_in, tax_rate_in }) - Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* income_tax_sum */ "b"])({ taxpayer_table_in });

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export net_salary */
/* unused harmony export gross_salary_ */
/* unused harmony export tax_rate_ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return income_tax; });
/* unused harmony export tax_credit */
/* harmony import */ var _incometax_set_cul_cul_scope_id_3_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
 // a simple one

const net_salary = ({ taxpayer_table_in, taxpayer_id_in, tax_rate_in }) => Object(_incometax_set_cul_cul_scope_id_3_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "a"])({ taxpayer_table_in, taxpayer_id_in }) - income_tax({ tax_rate_in, taxpayer_table_in, taxpayer_id_in });

const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;

const tax_rate_ = ({}) => 0.15;

const income_tax = ({ tax_rate_in, taxpayer_table_in, taxpayer_id_in }) =>
Math.max(Object(_proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* tax_rate */ "b"])({ tax_rate_in }) * Object(_incometax_set_cul_cul_scope_id_3_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "a"])({ taxpayer_table_in, taxpayer_id_in }) - tax_credit({}), 0);

const tax_credit = ({}) => 1000;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export net_salary */
/* unused harmony export gross_salary_ */
/* unused harmony export tax_rate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return income_tax; });
/* unused harmony export tax_credit */
/* harmony import */ var _incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _impact_cul_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _proposed_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
 // a simple one

const net_salary = ({ taxpayer_table_in, taxpayer_id_in }) => Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "a"])({ taxpayer_table_in, taxpayer_id_in }) - income_tax({ taxpayer_table_in, taxpayer_id_in });

const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;

const tax_rate = ({}) => 0.15;

const income_tax = ({ taxpayer_table_in, taxpayer_id_in }) =>
Math.max(tax_rate({}) * Object(_incometax_set_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* gross_salary */ "a"])({ taxpayer_table_in, taxpayer_id_in }) - tax_credit({}), 0);

const tax_credit = ({}) => 1000;

/***/ })
/******/ ]);
});
//# sourceMappingURL=impact.js.map