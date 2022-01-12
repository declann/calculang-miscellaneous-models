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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrr_cf", function() { return mrr_cf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vc_cf", function() { return vc_cf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rent_cf", function() { return rent_cf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employees", function() { return employees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payroll_cf", function() { return payroll_cf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "total_cf", function() { return total_cf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "npv", function() { return npv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrr", function() { return mrr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "month", function() { return month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mrr_growth", function() { return mrr_growth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vc_1", function() { return vc_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vc_2", function() { return vc_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rent", function() { return rent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employees_0", function() { return employees_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "new_employees_per_month", function() { return new_employees_per_month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_per_employee", function() { return salary_per_employee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "last_month", function() { return last_month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "npv_i", function() { return npv_i; });
const mrr_cf = ({ mrr_in, month_in, mrr_growth_in }) => mrr({ mrr_in }) * Math.exp(month({ month_in }) * mrr_growth({ mrr_growth_in }));

const vc_cf = ({ month_in, vc_1_in, vc_2_in }) => {
  if (month({ month_in }) == 3) return vc_1({ vc_1_in });
  if (month({ month_in }) == 11) return vc_2({ vc_2_in });else
  return 0;
};

const rent_cf = ({ rent_in }) => -rent({ rent_in });

const employees = ({ month_in, employees_0_in, new_employees_per_month_in }) => {
  if (month({ month_in }) == 0) return employees_0({ employees_0_in });else
  return employees({ employees_0_in, new_employees_per_month_in, month_in: month({ month_in }) - 1 }) + new_employees_per_month({ new_employees_per_month_in });
};

const payroll_cf = ({ salary_per_employee_in, month_in, employees_0_in, new_employees_per_month_in }) => -salary_per_employee({ salary_per_employee_in }) * employees({ month_in, employees_0_in, new_employees_per_month_in });

const total_cf = ({ mrr_in, month_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in }) => mrr_cf({ mrr_in, month_in, mrr_growth_in }) + rent_cf({ rent_in }) + vc_cf({ month_in, vc_1_in, vc_2_in }) + payroll_cf({ salary_per_employee_in, month_in, employees_0_in, new_employees_per_month_in });

const npv = ({ month_in, last_month_in, mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, npv_i_in }) => {
  if (month({ month_in }) > last_month({ last_month_in })) return 0;
  return (npv({ month_in, last_month_in, mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, npv_i_in, t_in: t() + 1 }) - total_cf({ mrr_in, month_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, t_in: t() + 1 })) / (1 + npv_i({ npv_i_in }));
};

// inputs
const mrr = ({ mrr_in }) => mrr_in;
const month = ({ month_in }) => month_in;
const mrr_growth = ({ mrr_growth_in }) => mrr_growth_in;
const vc_1 = ({ vc_1_in }) => vc_1_in;
const vc_2 = ({ vc_2_in }) => vc_2_in;
const rent = ({ rent_in }) => rent_in;
const employees_0 = ({ employees_0_in }) => employees_0_in;
const new_employees_per_month = ({ new_employees_per_month_in }) => new_employees_per_month_in;
const salary_per_employee = ({ salary_per_employee_in }) => salary_per_employee_in;
const last_month = ({ last_month_in }) => last_month_in;
const npv_i = ({ npv_i_in }) => npv_i_in;

/***/ })
/******/ ]);
});
//# sourceMappingURL=simple-cfs.js.map