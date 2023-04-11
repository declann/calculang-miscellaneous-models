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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barnsley_transforms", function() { return barnsley_transforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "winning_transform_values", function() { return winning_transform_values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "winner", function() { return winner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barnsley_0", function() { return barnsley_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barnsley_1", function() { return barnsley_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barnsley_2", function() { return barnsley_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barnsley_3", function() { return barnsley_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barnsley_4", function() { return barnsley_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barnsley_5", function() { return barnsley_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
// the starting point here is modelled from the nicely simple/narrated code @ https://www.fractal.garden/barnsley-fern by Rico Trebeljahr

// an array of 4 transformations and associated probabilities
const barnsley_transforms = ({}) => [
[
/* transformation params: */0, 0, 0, 0.16, 0, 0,
/* probability for this transform: */0.01],

[0.85, 0.04, -0.04, 0.85, 0, 1.6, 0.85],
[0.2, -0.26, 0.23, 0.22, 0, 1.6, 0.07],
[-0.15, 0.28, 0.26, 0.24, 0, 0.44, 0.07]];


const winning_transform_values = ({ i_in }) => barnsley_transforms({})[winner({ i_in })];

const i = ({ i_in }) => i_in;

// a draw determines which transformation to apply in each iteration
const winner = ({ i_in }) => {
  var r = Math.random() + 0 * i({ i_in });

  // imperative so don't like this so much in calculang.. but its quick and ready, see reference above

  // moving to weighting of probabilities, so easier to allow users to vary weights
  const total_probability = barnsley_transforms({}).reduce((p, v) => p + v[6], 0);

  const prob1 = barnsley_transforms({})[1][6] / total_probability;
  const prob2 = barnsley_transforms({})[2][6] / total_probability;
  const prob3 = barnsley_transforms({})[3][6] / total_probability;
  const prob4 = barnsley_transforms({})[0][6] / total_probability;
  if (r <= prob1) {
    return 1;
  } else if (r <= prob1 + prob2) {
    return 2;
  } else if (r <= prob1 + prob2 + prob3) {
    return 3;
  } else if (r <= prob1 + prob2 + prob3 + prob4) {// next step.. make # transforms variable
    return 0;
  }
};

// also abstract this..
const barnsley_0 = ({ i_in }) => winning_transform_values({ i_in })[0];
const barnsley_1 = ({ i_in }) => winning_transform_values({ i_in })[1];
const barnsley_2 = ({ i_in }) => winning_transform_values({ i_in })[2];
const barnsley_3 = ({ i_in }) => winning_transform_values({ i_in })[3];
const barnsley_4 = ({ i_in }) => winning_transform_values({ i_in })[4];
const barnsley_5 = ({ i_in }) => winning_transform_values({ i_in })[5];

// this is where the magic is brought together::
// the iterated function system

const x = ({ i_in }) => {
  if (i({ i_in }) == 0) return 0;else

  return (
    barnsley_0({ i_in }) * x({ i_in: i({ i_in }) - 1 }) +
    barnsley_1({ i_in }) * y({ i_in: i({ i_in }) - 1 }) +
    barnsley_4({ i_in }));

};

const y = ({ i_in }) => {
  if (i({ i_in }) == 0) return 0;else

  return (
    barnsley_2({ i_in }) * x({ i_in: i({ i_in }) - 1 }) +
    barnsley_3({ i_in }) * y({ i_in: i({ i_in }) - 1 }) +
    barnsley_5({ i_in }));

};

/***/ })
/******/ ]);
});
//# sourceMappingURL=fern-nomemo.js.map