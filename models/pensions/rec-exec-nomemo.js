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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return age; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return age_0_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return retirement_age_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return salary_0_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return salary_inflation_rate_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return empee_contribution_rate_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return unit_growth_rate_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return fund_value_0_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fund_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return unit_balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return unit_allocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return unit_price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return empee_contribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return projected_fund_value; });
/* harmony import */ var _rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const age = ({ age_in }) => age_in;
const age_0_ = ({}) => 20;
const retirement_age_ = ({}) => 65;
const salary_0_ = ({}) => 30000;
const salary_inflation_rate_ = ({}) => 0.02;
const empee_contribution_rate_ = ({}) => 0.1;
const unit_growth_rate_ = ({}) => 0.05;
const fund_value_0_ = ({}) => 0;

// disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

// todo add timing comments

const fund_value = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => unit_balance({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) * unit_price({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }); // not allowing for multiple funds now

const unit_balance = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) <= Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) - 1) return Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["fund_value_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) / unit_price({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });else
  return unit_balance({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });
  // timing = premium received at start of year and allocated immediately
};

const unit_allocation = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => empee_contribution({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) / unit_price({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }); // todo emper contribution, AVCs?

const unit_price = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) <= Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in })) return 1;else
  return unit_price({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }) * (1 + Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["unit_growth_rate"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }));
};

const empee_contribution = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) <= Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) - 1 || age({ age_in }) == Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["retirement_age"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in })) return 0;else
  return salary({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }) * Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["empee_contribution_rate"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });
};

const salary = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  // at end of year
  if (age({ age_in }) <= Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) - 1) return Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["salary_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });else
  if (age({ age_in }) >= Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["retirement_age"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in })) return 0;else
  return salary({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }) * (1 + Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["salary_inflation_rate"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in })); // < age_0 = undefined, any way/use to capture this statically?
};

const projected_fund_value = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) =>
// at retirement:
fund_value({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["retirement_age"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) });

// explicit inputs ::

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actuals", function() { return actuals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate_actual", function() { return salary_inflation_rate_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_rate_actual", function() { return empee_contribution_rate_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_growth_rate_actual", function() { return unit_growth_rate_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_0_actual", function() { return age_0_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fund_value_0_actual", function() { return fund_value_0_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retirement_age_actual", function() { return retirement_age_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_0_actual", function() { return salary_0_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emper_contribution_rate_actual_actual", function() { return emper_contribution_rate_actual_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contribution_charge_actual", function() { return contribution_charge_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_opening", function() { return age_opening; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_closing", function() { return age_closing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_opening_closing_offset", function() { return age_opening_closing_offset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rec_step", function() { return rec_step; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_0_actual_co", function() { return age_0_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retirement_age_actual_co", function() { return retirement_age_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_0_actual_co", function() { return salary_0_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate_actual_co", function() { return salary_inflation_rate_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_rate_actual_co", function() { return empee_contribution_rate_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emper_contribution_rate_actual_co", function() { return emper_contribution_rate_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_growth_rate_actual_co", function() { return unit_growth_rate_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fund_value_0_actual_co", function() { return fund_value_0_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contribution_charge_actual_co", function() { return contribution_charge_actual_co; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_0", function() { return age_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retirement_age", function() { return retirement_age; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_0", function() { return salary_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate", function() { return salary_inflation_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_rate", function() { return empee_contribution_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emper_contribution_rate", function() { return emper_contribution_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_growth_rate", function() { return unit_growth_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fund_value_0", function() { return fund_value_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contribution_charge", function() { return contribution_charge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rec_order", function() { return rec_order; });
/* harmony import */ var _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["income_tax"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fund_value", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_balance", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_allocation", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_price", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empee_contribution", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accumulated_empee_contributions", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["accumulated_empee_contributions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pension_tax_relief_ratio", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["pension_tax_relief_ratio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_tax_relief", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["empee_contribution_tax_relief"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emper_contribution", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["emper_contribution"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "salary", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "projected_fund_value", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "age", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "age_0_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retirement_age_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "salary_0_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_rate_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emper_contribution_rate_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["emper_contribution_rate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_growth_rate_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fund_value_0_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contribution_charge_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["contribution_charge"]; });





// actual data todo add flexibility

const actuals = ({ actuals_in }) => actuals_in;

// TODO generalise
const salary_inflation_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].salary_inflation_rate_in;
const empee_contribution_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].empee_contribution_rate_in;
const unit_growth_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].unit_growth_rate_in;
const age_0_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].age_0_in;
const fund_value_0_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].fund_value_0_in;
const retirement_age_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].retirement_age_in;
const salary_0_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].salary_0_in;
const emper_contribution_rate_actual_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].emper_contribution_rate_in;
const contribution_charge_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].contribution_charge_in;




// TODO generalise
const age_opening = ({ age_opening_in, age_opening_closing_offset_in }) => age_opening_in + age_opening_closing_offset({ age_opening_closing_offset_in }); // todo offset in terms of closing-opening?
const age_closing = ({ age_closing_in, age_opening_closing_offset_in }) => age_closing_in + age_opening_closing_offset({ age_opening_closing_offset_in });
const age_opening_closing_offset = ({ age_opening_closing_offset_in }) => age_opening_closing_offset_in;
const rec_step = ({ rec_step_in }) => rec_step_in; // wrong: 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)


// neater if I merge these 2 blocks together:

const age_0_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 1) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

const retirement_age_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 2) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

const salary_0_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 3) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

const salary_inflation_rate_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 4) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

const empee_contribution_rate_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 5) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

const emper_contribution_rate_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 6) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

const unit_growth_rate_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 7) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

const fund_value_0_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 8) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

const contribution_charge_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 9) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};;

const age_0 = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > age_0_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age_0_ */ "c"])({});else
  return age_0_actual({ actuals_in, age_in });
};

const retirement_age = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > retirement_age_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* retirement_age_ */ "o"])({});else
  return retirement_age_actual({ actuals_in, age_in });
};

const salary_0 = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > salary_0_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* salary_0_ */ "q"])({});else
  return salary_0_actual({ actuals_in, age_in });
};

const salary_inflation_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > salary_inflation_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* salary_inflation_rate_ */ "r"])({});else
  return salary_inflation_rate_actual({ actuals_in, age_in });
};

const empee_contribution_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > empee_contribution_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* empee_contribution_rate_ */ "f"])({});else
  return empee_contribution_rate_actual({ actuals_in, age_in });
};

const emper_contribution_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > emper_contribution_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["emper_contribution_rate"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in });else
  return emper_contribution_rate_actual();
};

const unit_growth_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > unit_growth_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* unit_growth_rate_ */ "u"])({});else
  return unit_growth_rate_actual({ actuals_in, age_in });
};

const fund_value_0 = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > fund_value_0_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* fund_value_0_ */ "k"])({});else
  return fund_value_0_actual({ actuals_in, age_in });
};

const contribution_charge = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > contribution_charge_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["contribution_charge"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });else
  return contribution_charge_actual({ actuals_in, age_in });
};;

const rec_order = ['age_0', 'retirement_age', 'salary_0', 'salary_inflation_rate', 'empee_contribution_rate', 'emper_contribution_rate', 'unit_growth_rate', 'fund_value_0', 'contribution_charge'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=rec-exec-nomemo.js.map