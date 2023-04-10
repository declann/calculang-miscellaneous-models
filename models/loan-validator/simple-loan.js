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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v_pow_term_left", function() { return v_pow_term_left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repayment_amount", function() { return repayment_amount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interest", function() { return interest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capital_repayment", function() { return capital_repayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interest_repayment", function() { return interest_repayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repayment_due", function() { return repayment_due; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repayment", function() { return repayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balance", function() { return balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interest_rate", function() { return interest_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "principal", function() { return principal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "term", function() { return term; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "year", function() { return year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "missed_repayment_year", function() { return missed_repayment_year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip_interest", function() { return skip_interest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d_i_year", function() { return d_i_year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d_i", function() { return d_i; });
const v = ({ year_in, d_i_year_in, i_in, d_i_in }) => 1 / (1 + interest_rate({ year_in, d_i_year_in, i_in, d_i_in }));

const v_pow_term_left = ({ year_in, d_i_year_in, i_in, d_i_in, term_in }) => Math.pow(v({ year_in, d_i_year_in, i_in, d_i_in }), term({ term_in }) - year({ year_in }));

// this models automatic refinancing because there is no restriction to last financing, an updated calc is applied every year
const repayment_amount = ({ year_in, principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in }) => {
  if (Math.abs(balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 })) < 0.01) return 0;
  //if (term() == year()) edge case?
  if (interest_rate({ year_in, d_i_year_in, i_in, d_i_in }) == 0)
  return balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) / (term({ term_in }) - year({ year_in }));else

  return (
    balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) * interest_rate({ year_in, d_i_year_in, i_in, d_i_in }) / (
    1 - v_pow_term_left({ year_in, d_i_year_in, i_in, d_i_in, term_in })));

};

// interest charged to balance:
const interest = ({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, d_i_year_in, i_in, d_i_in }) =>
balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) * interest_rate({ year_in, d_i_year_in, i_in, d_i_in });

// restrict cap repayment to repayment made.. (no, implied?)
const capital_repayment = ({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }) => {
  return Math.max(0, repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }) - interest_repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }));
};
const interest_repayment = ({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }) => Math.min(repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }), interest({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, d_i_year_in, i_in, d_i_in }));

// year 0 the principal is received, first repayment is due year=1
const repayment_due = ({ year_in, term_in }) => year({ year_in }) <= term({ term_in }) && year({ year_in }) != 0;

const repayment = ({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in }) => {
  // I'm modelling a "missed repayment" as being either 0 (skip_interest is set) or =interest (an interest-only payment: capital part is 'missed')
  if (year({ year_in }) == missed_repayment_year({ missed_repayment_year_in })) {
    if (skip_interest({ skip_interest_in })) return 0;else
    return interest({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, d_i_year_in, i_in, d_i_in });
  } else return repayment_due({ year_in, term_in }) * repayment_amount({ year_in, principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in });
};

const balance = ({ year_in, principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in }) => {
  if (year({ year_in }) < 0) return 0;
  if (year({ year_in }) == 0) return principal({ principal_in });else
  return balance({ principal_in, d_i_year_in, i_in, d_i_in, missed_repayment_year_in, skip_interest_in, term_in, year_in: year({ year_in }) - 1 }) + interest({ year_in, principal_in, missed_repayment_year_in, skip_interest_in, term_in, d_i_year_in, i_in, d_i_in }) - repayment({ year_in, missed_repayment_year_in, skip_interest_in, principal_in, d_i_year_in, i_in, d_i_in, term_in });
};

// changing interest rates are a modelling option, blend here and use above:
const interest_rate = ({ year_in, d_i_year_in, i_in, d_i_in }) => year({ year_in }) >= d_i_year({ d_i_year_in }) ? i({ i_in }) + d_i({ d_i_in }) : i({ i_in });

// inputs:
const principal = ({ principal_in }) => principal_in;
const i = ({ i_in }) => i_in; // interest rate
const term = ({ term_in }) => term_in;
const year = ({ year_in }) => year_in;

// inputs for missed repayment option:
const missed_repayment_year = ({ missed_repayment_year_in }) => missed_repayment_year_in;
const skip_interest = ({ skip_interest_in }) => skip_interest_in;

// inputs for delta/changing interest rates:
const d_i_year = ({ d_i_year_in }) => d_i_year_in; // year the delta interest rate happens
const d_i = ({ d_i_in }) => d_i_in; // delta interest rate

/***/ })
/******/ ]);
});
//# sourceMappingURL=simple-loan.js.map