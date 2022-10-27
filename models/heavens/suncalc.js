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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "date", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lat", function() { return lat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lng", function() { return lng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayMs", function() { return dayMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J1970", function() { return J1970; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J2000", function() { return J2000; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad", function() { return rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lw", function() { return lw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi", function() { return phi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "julian_1", function() { return julian_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right_ascension", function() { return right_ascension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declination", function() { return declination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dec", function() { return dec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuth", function() { return azimuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "altitude", function() { return altitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidereal_time", function() { return sidereal_time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obj", function() { return obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solar_mean_anomaly", function() { return solar_mean_anomaly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equation_of_center", function() { return equation_of_center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perihelion_of_earth", function() { return perihelion_of_earth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ecliptic_longitude", function() { return ecliptic_longitude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "declination_L0", function() { return declination_L0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right_ascension_L0", function() { return right_ascension_L0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuth_obj", function() { return azimuth_obj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "altitude_obj", function() { return altitude_obj; });
// based on formulae in SunCalc,
// https://github.com/mourner/suncalc
// SunCalc is (c) Vladimir Agafonkin (http://agafonkin.com/en)

// SunCalc readme:
// "Most calculations are based on the formulas given in the excellent Astronomy Answers articles
// about [position of the sun](http://aa.quae.nl/en/reken/zonpositie.html)
// and [the planets](http://aa.quae.nl/en/reken/hemelpositie.html)."

// ideas: compare/rec against Mike Bostock solar-calculator module on npm, and/or NOAA s/s on which solar-calculator based.
// + https://observablehq.com/@mourner/sun-position-in-900-bytes
//   ^ "more precise" "based on formulas from the 2nd edition of [Jean Meeus's "Astronomical Algorithms" book](https://www.willbell.com/math/mc1.htm)" 

const date = ({ date_in }) => date_in;
const lat = ({ lat_in }) => lat_in;
const lng = ({ lng_in }) => lng_in;

// "date/time constants and conversions"
const dayMs = ({}) => 1000 * 60 * 60 * 24;
const J1970 = ({}) => 2440588;
const J2000 = ({}) => 2451545;
const rad = ({}) => Math.PI / 180;

// bad form?
var PI = Math.PI,
sin = Math.sin,
cos = Math.cos,
tan = Math.tan,
asin = Math.asin,
atan = Math.atan2,
acos = Math.acos;

const e = ({}) => rad({}) * 23.4397; // obliquity of the Earth

const lw = ({ lng_in }) => rad({}) * -lng({ lng_in });
const phi = ({ lat_in }) => rad({}) * lat({ lat_in });

const julian_1 = ({ date_in }) => date({ date_in }).valueOf() / dayMs({}) - 0.5 + J1970({}) - J2000({}); // fn on date_in

//// right_ascension, declination locked input structure
const l = ({ l_in }) => l_in;
const b = ({ b_in }) => b_in;

const right_ascension = ({ l_in, b_in }) =>
atan(sin(l({ l_in })) * cos(e({})) - tan(b({ b_in })) * sin(e({})), cos(l({ l_in })));
const declination = ({ b_in, l_in }) =>
asin(sin(b({ b_in })) * cos(e({})) + cos(b({ b_in })) * sin(e({})) * sin(l({ l_in })));

/// azimuth, altitude ~~locked~~ input structure
//export const H = () => H_in;
//export const phi = () => phi_in;
const dec = ({ dec_in }) => dec_in;

const azimuth = ({ date_in, lng_in, obj_in, lat_in, dec_in }) =>
atan(sin(H({ date_in, lng_in, obj_in })), cos(H({ date_in, lng_in, obj_in })) * sin(phi({ lat_in })) - tan(dec({ dec_in })) * cos(phi({ lat_in }))); // some refactors to function might help here
const altitude = ({ lat_in, dec_in, date_in, lng_in, obj_in }) =>
asin(sin(phi({ lat_in })) * sin(dec({ dec_in })) + cos(phi({ lat_in })) * cos(dec({ dec_in })) * cos(H({ date_in, lng_in, obj_in })));

//export const lw = () => lw_in;
const sidereal_time = ({ date_in, lng_in }) =>
rad({}) * (280.16 + 360.9856235 * julian_1({ date_in })) - lw({ lng_in });

// abstract sun, moon values via obj_in
const obj = ({ obj_in }) => obj_in;
const solar_mean_anomaly = ({ obj_in, date_in }) => {
  if (obj({ obj_in }) == 'sun') return rad({}) * (357.5291 + 0.98560028 * julian_1({ date_in }));else
  if (obj({ obj_in }) == 'moon') return rad({}) * (134.963 + 13.064993 * julian_1({ date_in }));else
  console.error('obj not sun or moon');
};

const equation_of_center = ({ obj_in, date_in }) =>
rad({}) * (
1.9148 * sin(solar_mean_anomaly({ obj_in, date_in })) +
0.02 * sin(2 * solar_mean_anomaly({ obj_in, date_in })) +
0.0003 * sin(3 * solar_mean_anomaly({ obj_in, date_in })));

const perihelion_of_earth = ({}) => rad({}) * 102.9372;

const ecliptic_longitude = ({ obj_in, date_in }) =>
Math.PI + solar_mean_anomaly({ obj_in, date_in }) + equation_of_center({ obj_in, date_in }) + perihelion_of_earth({});

// sunCoords outputs (still intermediate)
// naming convention? (L, 0) / _obj?
const declination_L0 = ({ obj_in, date_in }) =>
declination({ l_in: ecliptic_longitude({ obj_in, date_in }), b_in: 0 });
const right_ascension_L0 = ({ obj_in, date_in }) =>
right_ascension({ l_in: ecliptic_longitude({ obj_in, date_in }), b_in: 0 });

const H = ({ date_in, lng_in, obj_in }) => sidereal_time({ date_in, lng_in }) - right_ascension_L0({ obj_in, date_in });

// outputs
const azimuth_obj = ({ date_in, lng_in, obj_in, lat_in }) => azimuth({ date_in, lng_in, obj_in, lat_in, dec_in: declination_L0({ obj_in, date_in }) });
const altitude_obj = ({ lat_in, date_in, lng_in, obj_in }) => altitude({ lat_in, date_in, lng_in, obj_in, dec_in: declination_L0({ obj_in, date_in }) });

// moon calcs in suncalc have an astroRefraction param I didn't build?
// also some other error?
// but sun recs closer from a few tests

/***/ })
/******/ ]);
});
//# sourceMappingURL=suncalc.js.map