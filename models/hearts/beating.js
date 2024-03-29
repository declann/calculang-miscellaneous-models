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
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// see https://stackoverflow.com/questions/14575697/math-pow-with-negative-numbers-and-non-integer-powers
const pow = (base, exponent) => {
  if (base > 0) return Math.pow(base, exponent);
  else return Math.pow(-base, exponent);
};

/* harmony default export */ __webpack_exports__["a"] = (pow);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waviness", function() { return waviness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tallness", function() { return tallness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arc_size", function() { return arc_size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinchiness", function() { return pinchiness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trend", function() { return trend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wavey", function() { return wavey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcy", function() { return arcy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
/* harmony import */ var _pow_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
// some references:
// https://www.google.com/search?q=beating+heart+in+desmos
// https://www.youtube.com/watch?v=4rPUg2jmcOw

// my own desmos build to figure:
// https://www.desmos.com/calculator/hf4pefzsbl

const x = ({ x_in }) => x_in;
const waviness = ({ waviness_in }) => waviness_in;
const tallness = ({ tallness_in }) => tallness_in;
const arc_size = ({ arc_size_in }) => arc_size_in;
const pinchiness = ({ pinchiness_in }) => pinchiness_in;



const trend = ({ x_in, pinchiness_in }) => Object(_pow_mjs__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x({ x_in }), pinchiness({ pinchiness_in }));

const wavey = ({ waviness_in, x_in }) => Math.sin(waviness({ waviness_in }) * Math.PI * x({ x_in }));

const arcy = ({ x_in, arc_size_in }) => {
  if (Math.abs(x({ x_in })) > Math.sqrt(arc_size({ arc_size_in }))) return 0;else
  return Object(_pow_mjs__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(arc_size({ arc_size_in }) - x({ x_in }) * x({ x_in }), 0.5);
};

// trend + arcy * wavey
const y = ({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) => trend({ x_in, pinchiness_in }) + arcy({ x_in, arc_size_in }) * wavey({ waviness_in, x_in }) * tallness({ tallness_in });

/***/ })
/******/ ]);
});
//# sourceMappingURL=beating.js.map