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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fund_value", function() { return fund_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_balance", function() { return unit_balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_allocation", function() { return unit_allocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_price", function() { return unit_price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution", function() { return empee_contribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accumulated_empee_contributions", function() { return accumulated_empee_contributions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emper_contribution", function() { return emper_contribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary", function() { return salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projected_fund_value", function() { return projected_fund_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age", function() { return age; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_0", function() { return age_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retirement_age", function() { return retirement_age; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_0", function() { return salary_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate", function() { return salary_inflation_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_rate", function() { return empee_contribution_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emper_contribution_rate", function() { return emper_contribution_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_growth_rate", function() { return unit_growth_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fund_value_0", function() { return fund_value_0; });
// disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

// todo add timing comments

const fund_value = ({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) => unit_balance({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) * unit_price({ age_in, age_0_in, unit_growth_rate_in }); // not allowing for multiple funds now

const unit_balance = ({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1) return fund_value_0({ fund_value_0_in }) / unit_price({ age_in, age_0_in, unit_growth_rate_in });else
  return unit_balance({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, unit_growth_rate_in });
  // timing = premium received at start of year and allocated immediately
};

const unit_allocation = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, unit_growth_rate_in }) =>
(empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) + emper_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, emper_contribution_rate_in })) / unit_price({ age_in, age_0_in, unit_growth_rate_in }); // todo, AVCs?

const unit_price = ({ age_in, age_0_in, unit_growth_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in })) return 1;else
  return unit_price({ age_0_in, unit_growth_rate_in, age_in: age({ age_in }) - 1 }) * (1 + unit_growth_rate({ unit_growth_rate_in }));
};

const empee_contribution = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1 || age({ age_in }) == retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * empee_contribution_rate({ empee_contribution_rate_in });
};

const accumulated_empee_contributions = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) => {
  if (age({ age_in }) == age_0({ age_0_in }) - 1) return 0;else

  return (
    accumulated_empee_contributions({ age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, age_in: age({ age_in }) - 1 }) +
    empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }));

};
//_.range(age_0(), retirement_age()).reduce((acc, val) => acc + val);

const emper_contribution = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, emper_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1 || age({ age_in }) == retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * emper_contribution_rate({ emper_contribution_rate_in });
};

const salary = ({ age_in, age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in }) => {
  // at end of year
  if (age({ age_in }) <= age_0({ age_0_in }) - 1) return salary_0({ salary_0_in });else
  if (age({ age_in }) >= retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * (1 + salary_inflation_rate({ salary_inflation_rate_in })); // < age_0 = undefined, any way/use to capture this statically?
};

const projected_fund_value = ({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) =>
// at retirement:
fund_value({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, age_in: retirement_age({ retirement_age_in }) });

// explicit inputs ::

// using age and age_0 (starting age) as inputs, rather than year/time and age_0.
const age = ({ age_in }) => age_in; // input
const age_0 = ({ age_0_in }) => age_0_in;

const retirement_age = ({ retirement_age_in }) => retirement_age_in;
const salary_0 = ({ salary_0_in }) => salary_0_in;
const salary_inflation_rate = ({ salary_inflation_rate_in }) => salary_inflation_rate_in;
const empee_contribution_rate = ({ empee_contribution_rate_in }) => empee_contribution_rate_in;
const emper_contribution_rate = ({ emper_contribution_rate_in }) => emper_contribution_rate_in;

const unit_growth_rate = ({ unit_growth_rate_in }) => unit_growth_rate_in;

const fund_value_0 = ({ fund_value_0_in }) => fund_value_0_in;

/***/ })
/******/ ]);
});
//# sourceMappingURL=pension-calculator-nomemo.js.map