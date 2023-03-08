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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return x; });
/* unused harmony export waviness */
/* unused harmony export tallness */
/* unused harmony export arc_size */
/* unused harmony export pinchiness */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return trend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return wavey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arcy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return y_; });
/* harmony import */ var _rotation_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _pow_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
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



const trend = ({ x_in, pinchiness_in }) => Object(_pow_mjs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(x({ x_in }), pinchiness({ pinchiness_in }));

const wavey = ({ waviness_in, x_in }) => Math.sin(waviness({ waviness_in }) * Math.PI * x({ x_in }));

const arcy = ({ x_in, arc_size_in }) => {
  if (Math.abs(x({ x_in })) > Math.sqrt(arc_size({ arc_size_in }))) return 0;else
  return Object(_pow_mjs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arc_size({ arc_size_in }) - x({ x_in }) * x({ x_in }), 0.5);
};

// trend + arcy * wavey
const y_ = ({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) => trend({ x_in, pinchiness_in }) + arcy({ x_in, arc_size_in }) * wavey({ waviness_in, x_in }) * tallness({ tallness_in });

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "angle", function() { return angle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x1", function() { return x1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
/* harmony import */ var _beating_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arcy", function() { return _beating_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trend", function() { return _beating_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wavey", function() { return _beating_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["c"]; });




const angle = ({ angle_in }) => angle_in;

// I want the x used in pow to be the x_in and not this
const x1 = ({ x_in, angle_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) => Object(_beating_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* x */ "d"])({ x_in }) * Math.cos(angle({ angle_in })) - Object(_beating_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* y_ */ "e"])({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) * Math.sin(angle({ angle_in })); // y0 ref here means only working for final y function
const y = ({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in, angle_in }) => Object(_beating_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* y_ */ "e"])({ x_in, pinchiness_in, arc_size_in, waviness_in, tallness_in }) * Math.cos(angle({ angle_in })) + Object(_beating_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* x */ "d"])({ x_in }) * Math.sin(angle({ angle_in }));


// todo approach for transformation of all functions:
// play with this even though its probably has fundamental tradeoffs:

/*
export const heart = () => trend() + arcy() * wavey() * tallness();

export const f = () => (f_in);

export const y = () => {
  switch (f()) {
    case 'heart': return heart();
    case 'trend': return trend();
    //...
  }
}
*/

/***/ }),
/* 2 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// see https://stackoverflow.com/questions/14575697/math-pow-with-negative-numbers-and-non-integer-powers
const pow = (base, exponent) => {
  if (base > 0) return Math.pow(base, exponent);
  else return Math.pow(-base, exponent);
};

/* harmony default export */ __webpack_exports__["a"] = (pow);

/***/ })
/******/ ]);
});
//# sourceMappingURL=rotation.js.map