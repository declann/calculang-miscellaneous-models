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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return age_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return retirement_age; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return annual_salary_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return salary_inflation_rate_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return empee_contribution_rate_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return unit_growth_rate_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fund_value_0; });
/* harmony import */ var _rec_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _actual_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _pensions_calculator_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _pensions_calculator_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "q", function() { return _pensions_calculator_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "p", function() { return _pensions_calculator_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "s", function() { return _pensions_calculator_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _pensions_calculator_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _pensions_calculator_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _pensions_calculator_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _pensions_calculator_cul_cul_scope_id_3_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_2__["a"]; });





const age_0 = ({}) => 20;
const retirement_age = ({}) => 65;
const annual_salary_0 = ({}) => 30000;
const salary_inflation_rate_ = ({}) => 0.02;
const empee_contribution_rate_ = ({}) => 0.1;
const unit_growth_rate_ = ({}) => 0.05;
const fund_value_0 = ({}) => 0;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_opening", function() { return age_opening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_closing", function() { return age_closing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rec_step", function() { return rec_step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate_actual_co", function() { return salary_inflation_rate_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate", function() { return salary_inflation_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_rate", function() { return empee_contribution_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_growth_rate", function() { return unit_growth_rate; });
/* harmony import */ var _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fund_value", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_balance", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_allocation", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_price", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annual_premium", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annual_salary", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "projected_fund_value", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "age", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "age_0", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["age_0_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retirement_age", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["retirement_age_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "annual_salary_0", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["annual_salary_0_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fund_value_0", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["fund_value_0_"]; });

/* harmony import */ var _actual_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
// a reconciliation pattern (automate-able)








const age_opening = ({ age_opening_in }) => age_opening_in;
const age_closing = ({ age_closing_in }) => age_closing_in;
const rec_step = ({ rec_step_in }) => rec_step_in; // 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)

const salary_inflation_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 1) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

// logic on age op/closing, age, rec step
const salary_inflation_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "a"])({ age_in }) > salary_inflation_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* salary_inflation_rate_ */ "o"])({});else
  return Object(_actual_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* salary_inflation_rate_ */ "a"])({ age_in });
};

const empee_contribution_rate = ({}) => Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* empee_contribution_rate_ */ "h"])({});
const unit_growth_rate = ({}) => Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* unit_growth_rate_ */ "r"])({});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fund_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return unit_balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unit_allocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return unit_price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return annual_premium; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return annual_salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return projected_fund_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return age; });
/* unused harmony export age_0_ */
/* unused harmony export retirement_age_ */
/* unused harmony export annual_salary_0_ */
/* unused harmony export salary_inflation_rate_ */
/* unused harmony export empee_contribution_rate_ */
/* unused harmony export unit_growth_rate_ */
/* unused harmony export fund_value_0_ */
/* harmony import */ var _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _rec_cul_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _actual_cul_cul_scope_id_2_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
 // disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

const fund_value = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => unit_balance({ age_in, rec_step_in, age_opening_in, age_closing_in }) * unit_price({ age_in }); // not allowing for multiple funds now

const unit_balance = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) <= Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age_0 */ "b"])({}) - 1) return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* fund_value_0 */ "j"])({}) / unit_price({ age_in }); // was caught by stack error because of no lower bound! static analysis!
  else return unit_balance({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, rec_step_in, age_opening_in, age_closing_in });
  // timing = premium received at start of year and allocated immediately
};

const unit_allocation = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => annual_premium({ age_in, rec_step_in, age_opening_in, age_closing_in }) / unit_price({ age_in }); // TODO model a contribution charge
const unit_price = ({ age_in }) => {// no b/o spread. Should this part be in terms of age ?
  if (age({ age_in }) <= Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age_0 */ "b"])({})) return 1;else
  return unit_price({ age_in: age({ age_in }) - 1 }) * (1 + Object(_rec_cul_js__WEBPACK_IMPORTED_MODULE_1__["unit_growth_rate"])({}));
};

const annual_premium = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) <= Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age_0 */ "b"])({}) - 1 || age({ age_in }) == Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* retirement_age */ "m"])({})) return 0;else
  return annual_salary({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) * Object(_rec_cul_js__WEBPACK_IMPORTED_MODULE_1__["empee_contribution_rate"])({});
};

// at end of year
const annual_salary = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) <= Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age_0 */ "b"])({}) - 1) return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* annual_salary_0 */ "f"])({});else
  if (age({ age_in }) >= Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* retirement_age */ "m"])({}))
  return 0;else

  return annual_salary({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) * (1 + Object(_rec_cul_js__WEBPACK_IMPORTED_MODULE_1__["salary_inflation_rate"])({ age_in, rec_step_in, age_opening_in, age_closing_in })); // < age_0 = undefined, any way/use to capture this statically?
};


// at retirement:
const projected_fund_value = ({ rec_step_in, age_opening_in, age_closing_in }) =>
fund_value({ rec_step_in, age_opening_in, age_closing_in, age_in: Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* retirement_age */ "m"])({}) });

// explicit inputs ::

// using age and age_0 (starting age) as inputs, rather than year/time and age_0.
const age = ({ age_in }) => age_in; // input
const age_0_ = ({ age_0_in }) => age_0_in;

const retirement_age_ = ({ retirement_age_in }) => retirement_age_in;
const annual_salary_0_ = ({ annual_salary_0_in }) => annual_salary_0_in;
const salary_inflation_rate_ = ({ salary_inflation_rate_in }) => salary_inflation_rate_in;
const empee_contribution_rate_ = ({ empee_contribution_rate_in }) => empee_contribution_rate_in;
//export const emper_contribution_rate = () => (emper_contribution_rate_in) not modelling employer contributions yet

const unit_growth_rate_ = ({ unit_growth_rate_in }) => unit_growth_rate_in;

const fund_value_0_ = ({ fund_value_0_in }) => fund_value_0_in;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export age_0_ */
/* unused harmony export retirement_age_ */
/* unused harmony export annual_salary_0_ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return salary_inflation_rate_; });
/* unused harmony export empee_contribution_rate_ */
/* unused harmony export unit_growth_rate_ */
/* unused harmony export fund_value_0_ */
/* harmony import */ var _rec_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
 //import {
/*fund_value,
unit_balance,
unit_allocation,
unit_price,
annual_premium,
annual_salary,
projected_fund_value,
age,*/
/*age_0,
retirement_age,
annual_salary_0,
salary_inflation_rate,
empee_contribution_rate,
unit_growth_rate,
fund_value_0,*/
//} from "./pensions-calculator.cul";
//export {
/*fund_value,
unit_balance,
unit_allocation,
unit_price,
annual_premium,
annual_salary,
projected_fund_value,
age,*/
/*age_0,
retirement_age,
annual_salary_0,
salary_inflation_rate,
empee_contribution_rate,
unit_growth_rate,
fund_value_0,*/
//};

// just reconciling on 3 inputs now: salary_inflation_rate, empee_contribution_rate, unit_growth_rate

const age_0_ = ({}) => 20;
const retirement_age_ = ({}) => 65;
const annual_salary_0_ = ({}) => 30000;
const salary_inflation_rate_ = ({ age_in }) => [0.02, 0.01, 0.01][Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* age */ "a"])({ age_in }) - Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* age_0 */ "b"])({})];
const empee_contribution_rate_ = ({ age_in }) => [0.1, 0.1, 0.08][Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* age */ "a"])({ age_in }) - Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* age_0 */ "b"])({})];
const unit_growth_rate_ = ({ age_in }) => [0.06, 0.04, 0.04][Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* age */ "a"])({ age_in }) - Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_1__[/* age_0 */ "b"])({})];
const fund_value_0_ = ({}) => 0;

// NOTE: actual.cul.js is not a complete model now (no import of calculator.cul.js)

/***/ })
/******/ ]);
});
//# sourceMappingURL=rec.js.map