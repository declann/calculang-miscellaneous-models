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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actuals", function() { return actuals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate_actual", function() { return salary_inflation_rate_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_rate_actual", function() { return empee_contribution_rate_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_growth_rate_actual", function() { return unit_growth_rate_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_0_actual", function() { return age_0_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fund_value_0_actual", function() { return fund_value_0_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retirement_age_actual", function() { return retirement_age_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_0_actual", function() { return salary_0_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emper_contribution_rate_actual", function() { return emper_contribution_rate_actual; });
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
/* harmony import */ var _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fund_value", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_balance", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_allocation", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["s"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_price", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["v"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empee_contribution", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accumulated_empee_contributions", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pension_tax_relief_ratio", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_tax_relief", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emper_contribution", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "salary", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["p"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "projected_fund_value", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["n"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "age", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "age_0_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "retirement_age_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["o"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "salary_0_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["q"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["r"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_rate_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emper_contribution_rate_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["i"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unit_growth_rate_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["u"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fund_value_0_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["k"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contribution_charge_projected", function() { return _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["d"]; });





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
const emper_contribution_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) - 30 + 1].emper_contribution_rate_in;
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
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age_0_ */ "c"])({}); // Make it _0 vars?
  else return age_0_actual({ actuals_in, age_in });
};

const retirement_age = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > retirement_age_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return retirement_age_actual({ actuals_in, age_in: age_opening({ age_opening_in, age_opening_closing_offset_in }) }); // Make it _0 vars?
  else return retirement_age_actual({ actuals_in, age_in });
};

const salary_0 = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > salary_0_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* salary_0_ */ "q"])({}); // Make it _0 vars?
  else return salary_0_actual({ actuals_in, age_in });
};

const salary_inflation_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > salary_inflation_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* salary_inflation_rate_ */ "r"])({}); // Make it _0 vars?
  else return salary_inflation_rate_actual({ actuals_in, age_in });
};

const empee_contribution_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > empee_contribution_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* empee_contribution_rate_ */ "f"])({}); // Make it _0 vars?
  else return empee_contribution_rate_actual({ actuals_in, age_in });
};

const emper_contribution_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > emper_contribution_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* emper_contribution_rate_ */ "i"])({}); // Make it _0 vars?
  else return emper_contribution_rate_actual({ actuals_in, age_in });
};

const unit_growth_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > unit_growth_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* unit_growth_rate_ */ "u"])({}); // Make it _0 vars?
  else return unit_growth_rate_actual({ actuals_in, age_in });
};

const fund_value_0 = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > fund_value_0_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* fund_value_0_ */ "k"])({}); // Make it _0 vars?
  else return fund_value_0_actual({ actuals_in, age_in });
};

const contribution_charge = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) > contribution_charge_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* contribution_charge_ */ "d"])({}); // Make it _0 vars?
  else return contribution_charge_actual({ actuals_in, age_in });
};;

const rec_order = ['age_0', 'retirement_age', 'salary_0', 'salary_inflation_rate', 'empee_contribution_rate', 'emper_contribution_rate', 'unit_growth_rate', 'fund_value_0', 'contribution_charge'];

/***/ }),
/* 1 */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return contribution_charge_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return emper_contribution_rate_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return fund_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return unit_balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return unit_allocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return unit_price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return empee_contribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accumulated_empee_contributions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return pension_tax_relief_ratio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return empee_contribution_tax_relief; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return emper_contribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return projected_fund_value; });
/* harmony import */ var _rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _simple_incometax_cul_cul_scope_id_2_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "l", function() { return _simple_incometax_cul_cul_scope_id_2_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_1__["a"]; });

const age = ({ age_in }) => age_in;
const age_0_ = ({}) => 30;
const retirement_age_ = ({}) => 65; //retirement_age_actual();
const salary_0_ = ({}) => 50000;
const salary_inflation_rate_ = ({}) => 0.02;
const empee_contribution_rate_ = ({}) => 0.1;
const unit_growth_rate_ = ({}) => 0.05;
const fund_value_0_ = ({}) => 0;
const contribution_charge_ = ({}) => 0.04;
const emper_contribution_rate_ = ({}) => 0.10;

// disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

// todo add timing comments




const fund_value = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => unit_balance({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) * unit_price({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }); // not allowing for multiple funds now

const unit_balance = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) <= Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) - 1) return Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["fund_value_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) / unit_price({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });else
  return unit_balance({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });
  // timing = premium received at start of year and allocated immediately
};

const unit_allocation = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) =>
(empee_contribution({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) + emper_contribution({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in })) * (
1 - Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["contribution_charge"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in })) /
unit_price({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }); // todo, AVCs?

const unit_price = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) <= Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in })) return 1;else
  return unit_price({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }) * (1 + Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["unit_growth_rate"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }));
};

const empee_contribution = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) <= Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) - 1 || age({ age_in }) == Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["retirement_age"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in })) return 0;else
  return salary({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }) * Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["empee_contribution_rate"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });
};

const accumulated_empee_contributions = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) == Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) - 1) return 0;else

  return (
    accumulated_empee_contributions({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }) +
    empee_contribution({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }));

};

const pension_tax_relief_ratio = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) =>
empee_contribution_tax_relief({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) / empee_contribution({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });

const empee_contribution_tax_relief = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) =>
Object(_simple_incometax_cul_cul_scope_id_2_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_1__[/* income_tax */ "a"])({ age_in,
  gross_salary_in: salary({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }),
  tax_credits_in: 3000,
  pension_contribution_in: 0 }) -

Object(_simple_incometax_cul_cul_scope_id_2_cul_parent_scope_id_1__WEBPACK_IMPORTED_MODULE_1__[/* income_tax */ "a"])({ age_in,
  gross_salary_in: salary({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }),
  tax_credits_in: 3000,
  pension_contribution_in: empee_contribution({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) });


// affected by bug: depends on gross_salary_in, for some reason
// issue #102
/*export const accumulated_empee_contribution_tax_relief = () => {
  if (age() == age_0() - 1) return 0;
  else
    return (
      accumulated_empee_contribution_tax_relief({ age_in: age() - 1 }) +
      empee_contribution_tax_relief()
    );
};*/

const emper_contribution = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) <= Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age_0"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) - 1 || age({ age_in }) == Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["retirement_age"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in })) return 0;else
  return salary({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in, age_in: age({ age_in }) - 1 }) * Object(_rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["emper_contribution_rate"])({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in });
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gross_salary */
/* unused harmony export tax_credits */
/* unused harmony export pension_contribution */
/* unused harmony export net_salary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return income_tax; });
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
/* unused harmony export age_ */
/* unused harmony export percentage_limit */
/* unused harmony export pension_tax_relief */
/* unused harmony export paye_taxable_salary */
/* unused harmony export paye_by_band_id */
/* unused harmony export paye_over_bands */
/* unused harmony export paye */
/* unused harmony export net_salary_plus_pension_contribution */
/* harmony import */ var _projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _rec_exec_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
 // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters, single person. Many limitations
// work in progress. See README.md

// inputs:
const gross_salary = ({ gross_salary_in }) => gross_salary_in;
const tax_credits = ({ tax_credits_in }) => tax_credits_in;
const pension_contribution = ({ pension_contribution_in }) => pension_contribution_in;

// functions:
const net_salary = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) =>
gross_salary({ gross_salary_in }) - pension_contribution({ pension_contribution_in }) - income_tax({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in });

const income_tax = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) => paye({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) + prsi({ gross_salary_in }) + usc({ gross_salary_in });

const effective_rate = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) => 1 - net_salary({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) / gross_salary({ gross_salary_in });

const prsi_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in });

const prsi = ({ gross_salary_in }) =>
prsi_taxable_salary({ gross_salary_in }) * prsi_rate({}) * (gross_salary({ gross_salary_in }) > 352 * 52 ? 1 : 0); // todo feature flag RE threshold

const prsi_rate = ({}) => 0.04;

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
const usc_table = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 22920, rate: 0.02 },
{
  band_id: 3,
  band_co: 70044, // this was off by 100e in error for 2023!
  rate: 0.045
},
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
{ band_id: 1, band_co: 40000, rate: 0.2 },
{ band_id: 2, band_co: 100000, rate: 0.4 },
{
  band_id: 3,
  band_co: 0,
  rate: 0.4
}];


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

const age_ = ({ age_in }) => age_in;

const percentage_limit = ({ age_in }) => {
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) < 30) return 0.15;else
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) < 40) return 0.2;else
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) < 50) return 0.25;else
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) < 55) return 0.3;else
  if (Object(_projected_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* age */ "b"])({ age_in }) < 60) return 0.35;else
  return 0.4;
};

const pension_tax_relief = ({ pension_contribution_in, age_in, gross_salary_in }) =>
// "The maximum amount of earnings taken into account for calculating tax relief is 115k per year". See also 26.3 https://www.revenue.ie/en/tax-professionals/tdm/pensions/chapter-26.pdf
// calcs/approach not particularly validated
// but some results in ./check-pensions-tax-relief.png
Math.min(
pension_contribution({ pension_contribution_in }),
percentage_limit({ age_in }) * Math.min(115000, gross_salary({ gross_salary_in })));


const paye_taxable_salary = ({ gross_salary_in, pension_contribution_in, age_in }) =>
Math.max(0, gross_salary({ gross_salary_in }) - pension_tax_relief({ pension_contribution_in, age_in, gross_salary_in }));

const paye_by_band_id = ({ paye_band_id_in, gross_salary_in, pension_contribution_in, age_in }) =>
paye_rate({ paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in }) - paye_band_start({ paye_band_id_in }),
Math.max(paye_taxable_salary({ gross_salary_in, pension_contribution_in, age_in }) - paye_band_start({ paye_band_id_in }), 0));


const paye_over_bands = ({ gross_salary_in, pension_contribution_in, age_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ gross_salary_in, pension_contribution_in, age_in, paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here => placed outside. Issue #95
);

const paye = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) => Math.max(paye_over_bands({ gross_salary_in, pension_contribution_in, age_in }) - tax_credits({ tax_credits_in }), 0);

const net_salary_plus_pension_contribution = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) =>
net_salary({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) + pension_contribution({ pension_contribution_in });

/***/ })
/******/ ]);
});
//# sourceMappingURL=rec-exec-nomemo.js.map