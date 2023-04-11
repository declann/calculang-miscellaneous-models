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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emissions_rate", function() { return emissions_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "year_0", function() { return year_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temperature_0", function() { return temperature_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CO2_concentration_0", function() { return CO2_concentration_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "climate_change_sensitivity", function() { return climate_change_sensitivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "year", function() { return year; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absorption", function() { return absorption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawdown", function() { return drawdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CO2_concentration", function() { return CO2_concentration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "net_carbon", function() { return net_carbon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CO2_concentration_delta", function() { return CO2_concentration_delta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temperature", function() { return temperature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concentration_factor", function() { return concentration_factor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "temperature_delta", function() { return temperature_delta; });

// minimise wip: just plan this on paper for now

// todo: validate against what I've been told.
// reconcile to UCAR Simple Climate Model: https://scied.ucar.edu/interactive/simple-climate-model

const emissions_rate = ({ emissions_rate_in }) => emissions_rate_in; // gigatons carbon per year, not CO2 (=> no oxygen mass) // 10.5

const year_0 = ({}) => 2015;
const temperature_0 = ({}) => 14.65;
const CO2_concentration_0 = ({}) => 399.4;

const climate_change_sensitivity = ({ climate_change_sensitivity_in }) => climate_change_sensitivity_in; // 3

const year = ({ year_in }) => year_in;

const absorption = ({ emissions_rate_in }) => emissions_rate({ emissions_rate_in }) * 0.55;

const drawdown = ({ year_in, emissions_rate_in }) => 0.005 * CO2_concentration({ year_in, emissions_rate_in });

const CO2_concentration = ({ year_in, emissions_rate_in }) => {
  if (year({ year_in }) == year_0({})) return CO2_concentration_0({});else

  return (
    CO2_concentration({ emissions_rate_in, year_in: year({ year_in }) - 1 }) + CO2_concentration_delta({ emissions_rate_in, year_in }));

};

const net_carbon = ({ emissions_rate_in, year_in }) => emissions_rate({ emissions_rate_in }) - absorption({ emissions_rate_in }) - drawdown({ year_in, emissions_rate_in }); // can be negative because of drawdown

const CO2_concentration_delta = ({ emissions_rate_in, year_in }) => net_carbon({ emissions_rate_in, year_in }) * 0.000001; // TODO put a real value here?

const temperature = ({ year_in, emissions_rate_in, climate_change_sensitivity_in }) =>
temperature_0({}) + (concentration_factor({ year_in, emissions_rate_in }) - 1) * climate_change_sensitivity({ climate_change_sensitivity_in });

const concentration_factor = ({ year_in, emissions_rate_in }) =>
CO2_concentration({ year_in, emissions_rate_in }) / CO2_concentration_0({});

const temperature_delta = ({ year_in, emissions_rate_in, climate_change_sensitivity_in }) =>
CO2_concentration({ year_in, emissions_rate_in }) / CO2_concentration_0({}) * climate_change_sensitivity({ climate_change_sensitivity_in });

/***/ })
/******/ ]);
});
//# sourceMappingURL=climate-simple-nomemo.js.map