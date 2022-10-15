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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gross_salary_A", function() { return gross_salary_A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pension_contribution_A", function() { return pension_contribution_A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tax_credits_A", function() { return tax_credits_A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paye_taxable_salary_impact", function() { return paye_taxable_salary_impact; });
/* harmony import */ var _A_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "net_salary_A", function() { return _A_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paye_taxable_salary_A", function() { return _A_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "net_salary_plus_pension_contribution_A", function() { return _A_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony import */ var _B_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "net_salary_B", function() { return _B_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paye_taxable_salary_B", function() { return _B_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "net_salary_plus_pension_contribution_B", function() { return _B_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony import */ var _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "paye_taxable_salary", function() { return _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__["a"]; });












const gross_salary_A = ({ gross_salary_A_in }) => gross_salary_A_in;
const pension_contribution_A = ({ pension_contribution_A_in }) => pension_contribution_A_in;
const tax_credits_A = ({ tax_credits_A_in }) => tax_credits_A_in;

const paye_taxable_salary_impact = ({ gross_salary_in, pension_contribution_in, gross_salary_A_in, pension_contribution_A_in, tax_credits_A_in }) =>
Object(_B_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_taxable_salary_B */ "c"])({ gross_salary_in, pension_contribution_in }) -
Object(_A_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* paye_taxable_salary_A */ "c"])({
  gross_salary_in: gross_salary_A({ gross_salary_A_in }),
  pension_contribution_in: pension_contribution_A({ pension_contribution_A_in }),
  tax_credits_in: tax_credits_A({ tax_credits_A_in }) });


//export const net_salary_impact = () => ()

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _impact_simple_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _B_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _simple_incometax_cul_cul_scope_id_5_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_3__["b"]; });





/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _impact_simple_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _A_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _simple_incometax_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _simple_incometax_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_3__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _simple_incometax_cul_cul_scope_id_4_cul_parent_scope_id_2__WEBPACK_IMPORTED_MODULE_3__["b"]; });





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gross_salary */
/* unused harmony export tax_credits */
/* unused harmony export pension_contribution */
/* unused harmony export net_salary */
/* unused harmony export income_tax */
/* unused harmony export effective_rate */
/* unused harmony export prsi_taxable_salary */
/* unused harmony export prsi */
/* unused harmony export prsi_rate */
/* unused harmony export usc_table */
/* unused harmony export usc_band_id */
/* unused harmony export usc_band_end */
/* unused harmony export usc_band_start */
/* unused harmony export usc_rate */
/* unused harmony export usc_taxable_salary */
/* unused harmony export usc_by_band_id */
/* unused harmony export usc */
/* unused harmony export paye_table */
/* unused harmony export paye_band_id */
/* unused harmony export paye_band_end */
/* unused harmony export paye_band_start */
/* unused harmony export paye_rate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return paye_taxable_salary; });
/* unused harmony export paye_by_band_id */
/* unused harmony export paye_over_bands */
/* unused harmony export paye */
/* unused harmony export net_salary_plus_pension_contribution */
/* harmony import */ var _impact_simple_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _B_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _A_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
 // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters, single person. Many limitations
// work in progress. See README.md

// inputs:
const gross_salary = ({ gross_salary_in }) => gross_salary_in;
const tax_credits = ({ tax_credits_in }) => tax_credits_in;
const pension_contribution = ({ pension_contribution_in }) => pension_contribution_in;

// functions:
const net_salary = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => gross_salary({ gross_salary_in }) - income_tax({ gross_salary_in, pension_contribution_in, tax_credits_in });

const income_tax = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => paye({ gross_salary_in, pension_contribution_in, tax_credits_in }) + prsi({ gross_salary_in }) + usc({ gross_salary_in });

const effective_rate = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => 1 - net_salary({ gross_salary_in, pension_contribution_in, tax_credits_in }) / gross_salary({ gross_salary_in });

const prsi_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in });

const prsi = ({ gross_salary_in }) =>
prsi_taxable_salary({ gross_salary_in }) * prsi_rate({}) * (gross_salary({ gross_salary_in }) > 352 * 52 ? 1 : 0); // todo feature flag RE threshold

const prsi_rate = ({}) => 0.04;

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
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

const usc_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in }); // pay usc on pension contribution

const usc_by_band_id = ({ usc_band_id_in, gross_salary_in }) =>
usc_rate({ usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in }) - usc_band_start({ usc_band_id_in }),
Math.max(usc_taxable_salary({ gross_salary_in }) - usc_band_start({ usc_band_id_in }), 0));


const usc = ({ gross_salary_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ gross_salary_in, usc_band_id_in: v.band_id }),
0) * (
gross_salary({ gross_salary_in }) > 13000 ? 1 : 0);

// PAYE, "
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

const paye_taxable_salary = ({ gross_salary_in, pension_contribution_in }) =>
Math.max(0, gross_salary({ gross_salary_in }) - pension_contribution({ pension_contribution_in }));

const paye_by_band_id = ({ paye_band_id_in, gross_salary_in, pension_contribution_in }) =>
paye_rate({ paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in }) - paye_band_start({ paye_band_id_in }),
Math.max(paye_taxable_salary({ gross_salary_in, pension_contribution_in }) - paye_band_start({ paye_band_id_in }), 0));


const paye_over_bands = ({ gross_salary_in, pension_contribution_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ gross_salary_in, pension_contribution_in, paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here => placed outside. Issue #95
);

const paye = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => Math.max(paye_over_bands({ gross_salary_in, pension_contribution_in }) - tax_credits({ tax_credits_in }), 0);

const net_salary_plus_pension_contribution = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) =>
net_salary({ gross_salary_in, pension_contribution_in, tax_credits_in }) + pension_contribution({ pension_contribution_in });

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gross_salary */
/* unused harmony export tax_credits */
/* unused harmony export pension_contribution */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return net_salary; });
/* unused harmony export income_tax */
/* unused harmony export effective_rate */
/* unused harmony export prsi_taxable_salary */
/* unused harmony export prsi */
/* unused harmony export prsi_rate */
/* unused harmony export usc_table */
/* unused harmony export usc_band_id */
/* unused harmony export usc_band_end */
/* unused harmony export usc_band_start */
/* unused harmony export usc_rate */
/* unused harmony export usc_taxable_salary */
/* unused harmony export usc_by_band_id */
/* unused harmony export usc */
/* unused harmony export paye_table */
/* unused harmony export paye_band_id */
/* unused harmony export paye_band_end */
/* unused harmony export paye_band_start */
/* unused harmony export paye_rate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return paye_taxable_salary_; });
/* unused harmony export paye_by_band_id */
/* unused harmony export paye_over_bands */
/* unused harmony export paye */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return net_salary_plus_pension_contribution; });
/* harmony import */ var _impact_simple_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _A_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
 // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters, single person. Many limitations
// work in progress. See README.md

// inputs:
const gross_salary = ({ gross_salary_in }) => gross_salary_in;
const tax_credits = ({ tax_credits_in }) => tax_credits_in;
const pension_contribution = ({ pension_contribution_in }) => pension_contribution_in;

// functions:
const net_salary = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => gross_salary({ gross_salary_in }) - income_tax({ gross_salary_in, pension_contribution_in, tax_credits_in });

const income_tax = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => paye({ gross_salary_in, pension_contribution_in, tax_credits_in }) + prsi({ gross_salary_in }) + usc({ gross_salary_in });

const effective_rate = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => 1 - net_salary({ gross_salary_in, pension_contribution_in, tax_credits_in }) / gross_salary({ gross_salary_in });

const prsi_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in });

const prsi = ({ gross_salary_in }) =>
prsi_taxable_salary({ gross_salary_in }) * prsi_rate({}) * (gross_salary({ gross_salary_in }) > 352 * 52 ? 1 : 0); // todo feature flag RE threshold

const prsi_rate = ({}) => 0.04;

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
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

const usc_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in }); // pay usc on pension contribution

const usc_by_band_id = ({ usc_band_id_in, gross_salary_in }) =>
usc_rate({ usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in }) - usc_band_start({ usc_band_id_in }),
Math.max(usc_taxable_salary({ gross_salary_in }) - usc_band_start({ usc_band_id_in }), 0));


const usc = ({ gross_salary_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ gross_salary_in, usc_band_id_in: v.band_id }),
0) * (
gross_salary({ gross_salary_in }) > 13000 ? 1 : 0);

// PAYE, "
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

const paye_taxable_salary_ = ({ gross_salary_in, pension_contribution_in }) =>
Math.max(0, gross_salary({ gross_salary_in }) - pension_contribution({ pension_contribution_in }));

const paye_by_band_id = ({ paye_band_id_in, gross_salary_in, pension_contribution_in }) =>
paye_rate({ paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in }) - paye_band_start({ paye_band_id_in }),
Math.max(Object(_simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_taxable_salary */ "a"])({ gross_salary_in, pension_contribution_in }) - paye_band_start({ paye_band_id_in }), 0));


const paye_over_bands = ({ gross_salary_in, pension_contribution_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ gross_salary_in, pension_contribution_in, paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here => placed outside. Issue #95
);

const paye = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => Math.max(paye_over_bands({ gross_salary_in, pension_contribution_in }) - tax_credits({ tax_credits_in }), 0);

const net_salary_plus_pension_contribution = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) =>
net_salary({ gross_salary_in, pension_contribution_in, tax_credits_in }) + pension_contribution({ pension_contribution_in });

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gross_salary */
/* unused harmony export tax_credits */
/* unused harmony export pension_contribution */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return net_salary; });
/* unused harmony export income_tax */
/* unused harmony export effective_rate */
/* unused harmony export prsi_taxable_salary */
/* unused harmony export prsi */
/* unused harmony export prsi_rate */
/* unused harmony export usc_table */
/* unused harmony export usc_band_id */
/* unused harmony export usc_band_end */
/* unused harmony export usc_band_start */
/* unused harmony export usc_rate */
/* unused harmony export usc_taxable_salary */
/* unused harmony export usc_by_band_id */
/* unused harmony export usc */
/* unused harmony export paye_table */
/* unused harmony export paye_band_id */
/* unused harmony export paye_band_end */
/* unused harmony export paye_band_start */
/* unused harmony export paye_rate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return paye_taxable_salary_; });
/* unused harmony export paye_by_band_id */
/* unused harmony export paye_over_bands */
/* unused harmony export paye */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return net_salary_plus_pension_contribution; });
/* harmony import */ var _impact_simple_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _B_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
 // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters, single person. Many limitations
// work in progress. See README.md

// inputs:
const gross_salary = ({ gross_salary_in }) => gross_salary_in;
const tax_credits = ({ tax_credits_in }) => tax_credits_in;
const pension_contribution = ({ pension_contribution_in }) => pension_contribution_in;

// functions:
const net_salary = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => gross_salary({ gross_salary_in }) - income_tax({ gross_salary_in, pension_contribution_in, tax_credits_in });

const income_tax = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => paye({ gross_salary_in, pension_contribution_in, tax_credits_in }) + prsi({ gross_salary_in }) + usc({ gross_salary_in });

const effective_rate = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => 1 - net_salary({ gross_salary_in, pension_contribution_in, tax_credits_in }) / gross_salary({ gross_salary_in });

const prsi_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in });

const prsi = ({ gross_salary_in }) =>
prsi_taxable_salary({ gross_salary_in }) * prsi_rate({}) * (gross_salary({ gross_salary_in }) > 352 * 52 ? 1 : 0); // todo feature flag RE threshold

const prsi_rate = ({}) => 0.04;

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
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

const usc_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in }); // pay usc on pension contribution

const usc_by_band_id = ({ usc_band_id_in, gross_salary_in }) =>
usc_rate({ usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in }) - usc_band_start({ usc_band_id_in }),
Math.max(usc_taxable_salary({ gross_salary_in }) - usc_band_start({ usc_band_id_in }), 0));


const usc = ({ gross_salary_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ gross_salary_in, usc_band_id_in: v.band_id }),
0) * (
gross_salary({ gross_salary_in }) > 13000 ? 1 : 0);

// PAYE, "
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

const paye_taxable_salary_ = ({ gross_salary_in, pension_contribution_in }) =>
Math.max(0, gross_salary({ gross_salary_in }) - pension_contribution({ pension_contribution_in }));

const paye_by_band_id = ({ paye_band_id_in, gross_salary_in, pension_contribution_in }) =>
paye_rate({ paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in }) - paye_band_start({ paye_band_id_in }),
Math.max(Object(_simple_incometax_cul_cul_scope_id_3_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* paye_taxable_salary */ "a"])({ gross_salary_in, pension_contribution_in }) - paye_band_start({ paye_band_id_in }), 0));


const paye_over_bands = ({ gross_salary_in, pension_contribution_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ gross_salary_in, pension_contribution_in, paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here => placed outside. Issue #95
);

const paye = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => Math.max(paye_over_bands({ gross_salary_in, pension_contribution_in }) - tax_credits({ tax_credits_in }), 0);

const net_salary_plus_pension_contribution = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) =>
net_salary({ gross_salary_in, pension_contribution_in, tax_credits_in }) + pension_contribution({ pension_contribution_in });

/***/ })
/******/ ]);
});
//# sourceMappingURL=impact-simple.js.map