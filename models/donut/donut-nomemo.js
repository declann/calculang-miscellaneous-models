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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R1", function() { return R1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R2", function() { return R2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K2", function() { return K2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K1", function() { return K1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screen_width", function() { return screen_width; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screen_height", function() { return screen_height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theta", function() { return theta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi", function() { return phi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosA", function() { return cosA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinA", function() { return sinA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosB", function() { return cosB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinB", function() { return sinB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosTheta", function() { return cosTheta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinTheta", function() { return sinTheta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cosPhi", function() { return cosPhi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinPhi", function() { return sinPhi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circlex", function() { return circlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circley", function() { return circley; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xp", function() { return xp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yp", function() { return yp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
// this code reflects math and code listings written by Andy Sloane in:
//  https://www.a1k0n.net/2011/07/20/donut-math.html
// interesting to compare iterative vs. functional style in approach.
// also interesting to compare separation of concerns.
// go to Andys blog (also https://www.a1k0n.net/2021/01/13/optimizing-donut.html)
// to understand the math in this hurried conversion!
// soon I will elaborate specifically on how calculang can be used to understand the math/numbers.

// torus params
const R1 = ({ R1_in }) => R1_in;
const R2 = ({ R2_in }) => R2_in;
// rotations time params
//export const A = () => A_in;
//export const B = () => B_in;
const A = ({ frame_in }) => 1 + 0.07 * frame({ frame_in }); // todo make rotation params out of 0.07, 0.03
const B = ({ frame_in }) => 1 + 0.03 * frame({ frame_in });
const frame = ({ frame_in }) => frame_in;

const K2 = ({ K2_in }) => K2_in;
const K1 = ({ K1_in }) => K1_in; //(screen_width() * K2() * 3) / (8 * (R1() + R2()));
const screen_width = ({ screen_width_in }) => screen_width_in;
const screen_height = ({ screen_height_in }) => screen_height_in;

// around the cross-sectional circle of torus domain 0-2pi
const theta = ({ theta_in }) => theta_in;
// around center of revolution of torus domain 0-2pi
const phi = ({ phi_in }) => phi_in;

// just for convenience/introspection
const cosA = ({ frame_in }) => Math.cos(A({ frame_in }));
const sinA = ({ frame_in }) => Math.sin(A({ frame_in }));
const cosB = ({ frame_in }) => Math.cos(B({ frame_in }));
const sinB = ({ frame_in }) => Math.sin(B({ frame_in }));
const cosTheta = ({ theta_in }) => Math.cos(theta({ theta_in }));
const sinTheta = ({ theta_in }) => Math.sin(theta({ theta_in }));
const cosPhi = ({ phi_in }) => Math.cos(phi({ phi_in }));
const sinPhi = ({ phi_in }) => Math.sin(phi({ phi_in }));

// (x,y) coordinates of circle before revolving:
const circlex = ({ R2_in, R1_in, theta_in }) => R2({ R2_in }) + R1({ R1_in }) * cosTheta({ theta_in });
const circley = ({ R1_in, theta_in }) => R1({ R1_in }) * sinTheta({ theta_in });

// (x,y,z) coordinates after rotations:
// [for math: https://www.a1k0n.net/2011/07/20/donut-math.html]
const x = ({ R2_in, R1_in, theta_in, frame_in, phi_in }) =>
circlex({ R2_in, R1_in, theta_in }) * (cosB({ frame_in }) * cosPhi({ phi_in }) + sinA({ frame_in }) * sinB({ frame_in }) * sinPhi({ phi_in }));

const y = ({ R2_in, R1_in, theta_in, frame_in, phi_in }) =>
circlex({ R2_in, R1_in, theta_in }) * (sinB({ frame_in }) * cosPhi({ phi_in }) - sinA({ frame_in }) * cosB({ frame_in }) * sinPhi({ phi_in })) +
circley({ R1_in, theta_in }) * cosA({ frame_in }) * cosB({ frame_in });

const z = ({ K2_in, frame_in, R2_in, R1_in, theta_in, phi_in }) =>
K2({ K2_in }) + cosA({ frame_in }) * circlex({ R2_in, R1_in, theta_in }) * sinPhi({ phi_in }) + circley({ R1_in, theta_in }) * sinA({ frame_in });

// coordinates in 2d projection
const xp = ({ screen_width_in, K1_in, R2_in, R1_in, theta_in, frame_in, phi_in, K2_in }) => screen_width({ screen_width_in }) / 2 + K1({ K1_in }) * x({ R2_in, R1_in, theta_in, frame_in, phi_in }) / z({ K2_in, frame_in, R2_in, R1_in, theta_in, phi_in });
const yp = ({ screen_height_in, K1_in, R2_in, R1_in, theta_in, frame_in, phi_in, K2_in }) => screen_height({ screen_height_in }) / 2 - K1({ K1_in }) * y({ R2_in, R1_in, theta_in, frame_in, phi_in }) / z({ K2_in, frame_in, R2_in, R1_in, theta_in, phi_in });

// luminosity
const L = ({ phi_in, theta_in, frame_in }) =>
cosPhi({ phi_in }) * cosTheta({ theta_in }) * sinB({ frame_in }) -
cosA({ frame_in }) * cosTheta({ theta_in }) * sinPhi({ phi_in }) -
sinA({ frame_in }) * sinTheta({ theta_in }) +
cosB({ frame_in }) * (cosA({ frame_in }) * sinTheta({ theta_in }) - cosTheta({ theta_in }) * sinA({ frame_in }) * sinPhi({ phi_in }));

/***/ })
/******/ ]);
});
//# sourceMappingURL=donut-nomemo.js.map