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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weight_y", function() { return weight_y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weight_x", function() { return weight_x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_x", function() { return F_x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F_y", function() { return F_y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a_x", function() { return a_x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a_y", function() { return a_y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coords", function() { return coords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theta", function() { return theta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return m; });
// start simple: inclined plane by theta, no friction

// multiple coordinate systems => an input, though I might get here incrementally

// scale fns in-calculang, like an early view model, this might get me thinking about patterning.
// +will an input control scales to usual fns, rather than making bespoke fns?

// w/o friction the net force on inclined plane is mg*sin(theta) [mg=weight or gravitational force]
// => a = F/m = g*sin(theta) [along the inclined plane]

// todo generalise rotation of (0, mg) force? (think rotation matrix)

const weight_y = ({ coords_in, m_in, g_in, theta_in }) => {
  if (coords({ coords_in }) == 'ground') return m({ m_in }) * g({ g_in });else
  if (coords({ coords_in }) == 'plane')
  return weight_y({ m_in, g_in, theta_in, coords_in: 'ground' }) * Math.cos(theta({ theta_in }));
};

const weight_x = ({ coords_in, m_in, g_in, theta_in }) => {
  if (coords({ coords_in }) == 'ground') return 0;else
  if (coords({ coords_in }) == 'plane')
  return weight_y({ m_in, g_in, theta_in, coords_in: 'ground' }) * Math.sin(theta({ theta_in })); // notation development as-in Julia would benefit a lot here
};

// other forces: Normal reaction which offsets weight_y on 'plane'
// friction(out)

// => net force on 'plane' is (?, 0)
// but on 'ground' is (?, ?)
// weight_x is the only force contributing to the net force (weight_y is offset by normal)

// F is net force
// only use weight_x
const F_x = ({ coords_in, m_in, g_in, theta_in }) => weight_x({ coords_in, m_in, g_in, theta_in });
// convert weight_x 'plane' to 'ground', so weight_x works directly?

const F_y = ({ coords_in, m_in, g_in, theta_in }) => {
  if (coords({ coords_in }) == 'plane') return 0;
  // necessary? This is where normal+weight_y would cancel
  else if (coords({ coords_in }) == 'ground')
  return weight_x({ m_in, g_in, theta_in, coords_in: 'plane' }) * Math.sin(theta({ theta_in })); // ?
};
// convert weight_x 'plane' to 'ground', so weight_x('plane') is manipulated

const a_x = ({ coords_in, m_in, g_in, theta_in }) => F_x({ coords_in, m_in, g_in, theta_in }) / m({ m_in }); // ?

const a_y = ({ coords_in, m_in, g_in, theta_in }) => F_y({ coords_in, m_in, g_in, theta_in }) / m({ m_in }); // ?

//export const a = () => g() * Math.sin(theta()); // relative to inclined plane, no coord stuff happening yet

const coords = ({ coords_in }) => coords_in; // 'plane' for inclined plane and 'ground'
const theta = ({ theta_in }) => theta_in; // radians, 1 radian ~= 57 degrees, todo configurable
const g = ({ g_in }) => g_in;
const m = ({ m_in }) => m_in; // force depends on mass, but not accelaration
// todo also generalise x,y directions

/***/ })
/******/ ]);
});
//# sourceMappingURL=wedge.js.map