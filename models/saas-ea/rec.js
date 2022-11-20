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
/* unused harmony export subs_growth_pc */
/* unused harmony export subs_churn_pc */
/* unused harmony export subs_0_ */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CAC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return subs_new_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return subs_churned_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return subs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return expenses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return revenue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return profit; });
/* harmony import */ var _rec_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
const subs_growth_pc = ({ subs_growth_pc_in }) => subs_growth_pc_in;
const subs_churn_pc = ({ subs_churn_pc_in }) => subs_churn_pc_in;
const subs_0_ = ({ subs_0_in }) => subs_0_in; // subs at start of year 0
const year = ({ year_in }) => year_in;
const CAC = ({ CAC_in }) => CAC_in;

const subs_new_ = ({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in }) =>
// its hard to find the year boundary needed here when I add expenses to model, when it worked without. Table and good error reporting is very important
year({ year_in }) < 0 ? 0 : subs({ subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in, year_in: year({ year_in }) - 1 }) * (subs_growth_pc({ subs_growth_pc_in }) / 100);

const subs_churned_ = ({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in }) =>
(subs({ subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in, year_in: year({ year_in }) - 1 }) + Object(_rec_cul_js__WEBPACK_IMPORTED_MODULE_0__["subs_new"])({ year_in, subs_new_actual_to_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in })) * subs_churn_pc({ subs_churn_pc_in }) / 100; // churn assumption also applies to new subs

// subs at end = prev subs at end + new subs@yr - churned subs@yr
const subs = ({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in }) => {
  if (year({ year_in }) < 0) return Object(_rec_cul_js__WEBPACK_IMPORTED_MODULE_0__["subs_0"])({ subs_0_in });else
  return subs({ subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in, year_in: year({ year_in }) - 1 }) + Object(_rec_cul_js__WEBPACK_IMPORTED_MODULE_0__["subs_new"])({ year_in, subs_new_actual_to_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in }) - Object(_rec_cul_js__WEBPACK_IMPORTED_MODULE_0__["subs_churned"])({ year_in, subs_churned_actual_to_in, actuals_table_in, subs_0_in, subs_new_actual_to_in, subs_growth_pc_in, subs_churn_pc_in });
}; // => can project subs given subs_0, growth and churn rates

const expenses = ({ year_in, subs_new_actual_to_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in, CAC_in }) => Object(_rec_cul_js__WEBPACK_IMPORTED_MODULE_0__["subs_new"])({ year_in, subs_new_actual_to_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in }) * CAC({ CAC_in }); // error?
const revenue = ({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in }) => subs({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in }) * 100;
const profit = ({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in, CAC_in }) => revenue({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in }) - expenses({ year_in, subs_new_actual_to_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in, CAC_in });

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actuals_table", function() { return actuals_table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_0", function() { return subs_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_new_actual", function() { return subs_new_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_churned_actual", function() { return subs_churned_actual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_new_actual_to", function() { return subs_new_actual_to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_churned_actual_to", function() { return subs_churned_actual_to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_new", function() { return subs_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_churned", function() { return subs_churned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ea_start", function() { return ea_start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ea_end", function() { return ea_end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_ea", function() { return subs_ea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_new_experience", function() { return subs_new_experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subs_churned_experience", function() { return subs_churned_experience; });
/* harmony import */ var _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subs", function() { return _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "year", function() { return _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "revenue", function() { return _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expenses", function() { return _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "profit", function() { return _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAC", function() { return _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["a"]; });



 // necessary

const actuals_table = ({ actuals_table_in }) => actuals_table_in;

// actuals
const subs_0 = ({ subs_0_in }) => subs_0_in; // start at 100 subs (this line now redundant!)
const subs_new_actual = ({ actuals_table_in, year_in }) =>
actuals_table({ actuals_table_in })[Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in }) + 1].subs_new_actual;
const subs_churned_actual = ({ actuals_table_in, year_in }) =>
actuals_table({ actuals_table_in })[Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in }) + 1].subs_churned_actual;

// year up to which actual data should be used, -1=use only expecteds
const subs_new_actual_to = ({ subs_new_actual_to_in }) => subs_new_actual_to_in;
const subs_churned_actual_to = ({ subs_churned_actual_to_in }) => subs_churned_actual_to_in;

// interleave actuals into projections: this rebases expd using actuals?
const subs_new = ({ year_in, subs_new_actual_to_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in }) => {
  if (Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in }) <= subs_new_actual_to({ subs_new_actual_to_in })) return subs_new_actual({ actuals_table_in, year_in });else
  return Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* subs_new_ */ "g"])({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in }); // this is an override which uses itself: but it doesn't compile correctly, check memo-loader version?
};
const subs_churned = ({ year_in, subs_churned_actual_to_in, actuals_table_in, subs_0_in, subs_new_actual_to_in, subs_growth_pc_in, subs_churn_pc_in }) => {
  if (Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in }) <= subs_churned_actual_to({ subs_churned_actual_to_in })) return subs_churned_actual({ actuals_table_in, year_in });else
  return Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* subs_churned_ */ "f"])({ year_in, subs_0_in, subs_new_actual_to_in, actuals_table_in, subs_growth_pc_in, subs_churned_actual_to_in, subs_churn_pc_in });
};

// move away from experience.
// just look at projections
// => subs({year:x,actuals:x})

const ea_start = ({ ea_start_in }) => ea_start_in;
const ea_end = ({ ea_end_in }) => ea_end_in;

const subs_ea = ({ subs_0_in, actuals_table_in, subs_growth_pc_in, subs_churn_pc_in, ea_end_in, ea_start_in }) => [
{
  type: 'Expected',
  function: 'subs',
  value: Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* subs */ "e"])({ subs_0_in, actuals_table_in, subs_growth_pc_in, subs_churn_pc_in,
    year_in: ea_end({ ea_end_in }),
    subs_new_actual_to_in: ea_start({ ea_start_in }),
    subs_churned_actual_to_in: ea_start({ ea_start_in }) }) },


{
  type: '-> Actual Sales', // this impact will include expd churn on sales impact, alt. split could use 0 decrements and create a balancing 'confounding' amount
  function: 'subs',
  value: Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* subs */ "e"])({ subs_0_in, actuals_table_in, subs_growth_pc_in, subs_churn_pc_in,
    year_in: ea_end({ ea_end_in }),
    subs_new_actual_to_in: ea_end({ ea_end_in }),
    subs_churned_actual_to_in: ea_start({ ea_start_in }) }) },


{
  type: '-> Actual Churn (=Actual)',
  function: 'subs',
  value: Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* subs */ "e"])({ subs_0_in, actuals_table_in, subs_growth_pc_in, subs_churn_pc_in,
    year_in: ea_end({ ea_end_in }),
    subs_new_actual_to_in: ea_end({ ea_end_in }),
    subs_churned_actual_to_in: ea_end({ ea_end_in }) }) }];



// todo use an impacts abstraction or move subtraction to VL

// reconcile actual to expected, experience=A-E
// in year
// this should be abstracted using a table for clarity
const subs_new_experience = ({ year_in, actuals_table_in, subs_0_in, subs_churn_pc_in, subs_growth_pc_in }) => {
  // now a fn on year
  const subs_churned_actual_to_in = Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in }) - 1;
  return (
    subs_new({ year_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in, subs_new_actual_to_in: Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in }) }) -
    subs_new({ year_in, actuals_table_in, subs_0_in, subs_churned_actual_to_in, subs_churn_pc_in, subs_growth_pc_in, subs_new_actual_to_in: Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in }) - 1 }));

};

const subs_churned_experience = ({ year_in, actuals_table_in, subs_0_in, subs_growth_pc_in, subs_churn_pc_in }) => {
  // now a fn on year
  const subs_new_actual_to_in = Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in });
  return (
    subs_churned({ year_in, actuals_table_in, subs_0_in, subs_new_actual_to_in, subs_growth_pc_in, subs_churn_pc_in, subs_churned_actual_to_in: Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in }) }) -
    subs_churned({ year_in, actuals_table_in, subs_0_in, subs_new_actual_to_in, subs_growth_pc_in, subs_churn_pc_in, subs_churned_actual_to_in: Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ "h"])({ year_in }) - 1 }));
  // todo project, constrain rec ordering somewhere
};

// re introspection: devtools can probably do this? But messy at that stage, so might not be an option
// export to excel with hacked formulae (=7+0*E8) for relationships is probably a nice short-term feature until I get the experience outside
// hacked formulae can easily be replaced by proper conversions if I convert JS to Excel in fut
// maybe this is important for explanation phase, more impt than technical/memo-loader?

/***/ })
/******/ ]);
});
//# sourceMappingURL=rec.js.map