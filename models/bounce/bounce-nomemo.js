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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dx", function() { return dx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dampener", function() { return dampener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dy", function() { return dy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressed", function() { return compressed; });
// the floor is at y=190 so the ball will start falling until it reaches 190, and then bounce.
// dy calculates the change to y in each time step (except where the "floor rule" bites).
// dy is 3 at t_in=0 and is influenced by a dampener input

/////////// model ///////////

// explicit inputs (by convention):
const t = ({ t_in }) => t_in;
const dx = ({ dx_in }) => dx_in;
const dampener = ({ dampener_in }) => dampener_in;

// functions:

// calculang determines x function dependent on inputs t_in, dx_in
const x = ({ t_in, dx_in }) => {
  if (t({ t_in }) == 0) return 100 + dx({ dx_in });else
  return x({ dx_in, t_in: t({ t_in }) - 1 }) + dx({ dx_in });
};

// calculang determines y function dependent on inputs t_in, dampener_in
const y = ({ t_in, dampener_in }) => {
  if (t({ t_in }) == 0) return 50;else
  if (y({ dampener_in, t_in: t({ t_in }) - 1 }) + dy({ dampener_in, t_in: t({ t_in }) - 1 }) > 185) return 190; // "floor rule"
  else return y({ dampener_in, t_in: t({ t_in }) - 1 }) + dy({ dampener_in, t_in: t({ t_in }) - 1 });
};

// calculang determines dy function dependent on inputs t_in, dampener_in
const dy = ({ t_in, dampener_in }) => {
  if (t({ t_in }) == 0) return 0 * dampener({ dampener_in }) + 3;else
  if (y({ dampener_in, t_in: t({ t_in }) }) > 185) return -dy({ dampener_in, t_in: t({ t_in }) - 1 }); // bounce at the floor by negating dy
  else return dy({ dampener_in, t_in: t({ t_in }) - 1 }) * dampener({ dampener_in }) + 3;
}; // if expressions vs statements would really help make this more concise

// ball gets compressed on the ground before bouncing upwards
const compressed = ({ t_in, dampener_in }) => y({ t_in, dampener_in }) == 190 ? true : false;

/***/ })
/******/ ]);
});
//# sourceMappingURL=bounce-nomemo.js.map