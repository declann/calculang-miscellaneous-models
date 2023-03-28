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
/******/ 	return __webpack_require__(__webpack_require__.s = 162);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ObjProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SymbolProto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return supportsArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return supportsDataView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return nativeIsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return nativeKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return nativeCreate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return nativeIsView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _isNaN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _isFinite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasEnumBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return nonEnumerableProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAX_ARRAY_INDEX; });
// Current version.
var VERSION = '1.13.2';

// Establish the root object, `window` (`self`) in the browser, `global`
// on the server, or `this` in some virtual machines. We use `self`
// instead of `window` for `WebWorker` support.
var root = typeof self == 'object' && self.self === self && self ||
          typeof global == 'object' && global.global === global && global ||
          Function('return this')() ||
          {};

// Save bytes in the minified (but not gzipped) version:
var ArrayProto = Array.prototype, ObjProto = Object.prototype;
var SymbolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

// Create quick reference variables for speed access to core prototypes.
var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

// Modern feature detection.
var supportsArrayBuffer = typeof ArrayBuffer !== 'undefined',
    supportsDataView = typeof DataView !== 'undefined';

// All **ECMAScript 5+** native function implementations that we hope to use
// are declared here.
var nativeIsArray = Array.isArray,
    nativeKeys = Object.keys,
    nativeCreate = Object.create,
    nativeIsView = supportsArrayBuffer && ArrayBuffer.isView;

// Create references to these builtin functions because we override them.
var _isNaN = isNaN,
    _isFinite = isFinite;

// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
  'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

// The largest integer that can be represented exactly.
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(163)))

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keys; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);





// Retrieve the names of an object's own properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`.
function keys(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)) return [];
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__[/* nativeKeys */ "m"]) return Object(_setup_js__WEBPACK_IMPORTED_MODULE_1__[/* nativeKeys */ "m"])(obj);
  var keys = [];
  for (var key in obj) if (Object(_has_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj, key)) keys.push(key);
  // Ahem, IE < 9.
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__[/* hasEnumBug */ "h"]) Object(_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(obj, keys);
  return keys;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


// If Underscore is called as a function, it returns a wrapped object that can
// be used OO-style. This wrapper holds altered versions of all functions added
// through `_.mixin`. Wrapped objects may be chained.
function _(obj) {
  if (obj instanceof _) return obj;
  if (!(this instanceof _)) return new _(obj);
  this._wrapped = obj;
}

_.VERSION = _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* VERSION */ "e"];

// Extracts the result from a wrapped and chained object.
_.prototype.value = function() {
  return this._wrapped;
};

// Provide unwrapping proxies for some methods used in engine operations
// such as arithmetic and JSON stringification.
_.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

_.prototype.toString = function() {
  return String(this._wrapped);
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tagTester; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


// Internal function for creating a `toString`-based type tester.
function tagTester(name) {
  var tag = '[object ' + name + ']';
  return function(obj) {
    return _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* toString */ "t"].call(obj) === tag;
  };
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cb; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);




// The function we call internally to generate a callback. It invokes
// `_.iteratee` if overridden, otherwise `baseIteratee`.
function cb(value, context, argCount) {
  if (_underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].iteratee !== _iteratee_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]) return _underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].iteratee(value, context);
  return Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value, context, argCount);
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return restArguments; });
// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".
function restArguments(func, startIndex) {
  startIndex = startIndex == null ? func.length - 1 : +startIndex;
  return function() {
    var length = Math.max(arguments.length - startIndex, 0),
        rest = Array(length),
        index = 0;
    for (; index < length; index++) {
      rest[index] = arguments[index + startIndex];
    }
    switch (startIndex) {
      case 0: return func.call(this, rest);
      case 1: return func.call(this, arguments[0], rest);
      case 2: return func.call(this, arguments[0], arguments[1], rest);
    }
    var args = Array(startIndex + 1);
    for (index = 0; index < startIndex; index++) {
      args[index] = arguments[index];
    }
    args[startIndex] = rest;
    return func.apply(this, args);
  };
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);



var isFunction = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Function');

// Optimize `isFunction` if appropriate. Work around some `typeof` bugs in old
// v8, IE 11 (#1621), Safari 8 (#1929), and PhantomJS (#2236).
var nodelist = _setup_js__WEBPACK_IMPORTED_MODULE_1__[/* root */ "p"].document && _setup_js__WEBPACK_IMPORTED_MODULE_1__[/* root */ "p"].document.childNodes;
if ( true && typeof Int8Array != 'object' && typeof nodelist != 'function') {
  isFunction = function(obj) {
    return typeof obj == 'function' || false;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (isFunction);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



// Internal helper for collection methods to determine whether a collection
// should be iterated as an array or as an object.
// Related: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
// Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
/* harmony default export */ __webpack_exports__["a"] = (Object(_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_getLength_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]));


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);


// Internal helper to obtain the `length` property of an object.
/* harmony default export */ __webpack_exports__["a"] = (Object(_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('length'));


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return each; });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);




// The cornerstone for collection functions, an `each`
// implementation, aka `forEach`.
// Handles raw objects in addition to array-likes. Treats all
// sparse array-likes as if they were dense.
function each(obj, iteratee, context) {
  iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(iteratee, context);
  var i, length;
  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj)) {
    for (i = 0, length = obj.length; i < length; i++) {
      iteratee(obj[i], i, obj);
    }
  } else {
    var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj);
    for (i = 0, length = _keys.length; i < length; i++) {
      iteratee(obj[_keys[i]], _keys[i], obj);
    }
  }
  return obj;
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return has; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


// Internal function to check whether `key` is an own property name of `obj`.
function has(obj, key) {
  return obj != null && _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* hasOwnProperty */ "i"].call(obj, key);
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isObject; });
// Is a given variable an object?
function isObject(obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



// Is a given value an array?
// Delegates to ECMA5's native `Array.isArray`.
/* harmony default export */ __webpack_exports__["a"] = (_setup_js__WEBPACK_IMPORTED_MODULE_0__[/* nativeIsArray */ "k"] || Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('Array'));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return contains; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70);




// Determine if the array or object contains a given item (using `===`).
function contains(obj, item, fromIndex, guard) {
  if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)) obj = Object(_values_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj);
  if (typeof fromIndex != 'number' || guard) fromIndex = 0;
  return Object(_indexOf_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj, item, fromIndex) >= 0;
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);




// Return the results of applying the iteratee to each element.
function map(obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(iteratee, context);
  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj),
      length = (_keys || obj).length,
      results = Array(length);
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return values; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


// Retrieve the values of an object's properties.
function values(obj) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj);
  var length = _keys.length;
  var values = Array(length);
  for (var i = 0; i < length; i++) {
    values[i] = obj[_keys[i]];
  }
  return values;
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flatten; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);





// Internal implementation of a recursive `flatten` function.
function flatten(input, depth, strict, output) {
  output = output || [];
  if (!depth && depth !== 0) {
    depth = Infinity;
  } else if (depth <= 0) {
    return output.concat(input);
  }
  var idx = output.length;
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(input); i < length; i++) {
    var value = input[i];
    if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value) && (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(value))) {
      // Flatten current level of array or arguments object.
      if (depth > 1) {
        flatten(value, depth - 1, strict, output);
        idx = output.length;
      } else {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      }
    } else if (!strict) {
      output[idx++] = value;
    }
  }
  return output;
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filter; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



// Return all the elements that pass a truth test.
function filter(obj, predicate, context) {
  var results = [];
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(predicate, context);
  Object(_each_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj, function(value, index, list) {
    if (predicate(value, index, list)) results.push(value);
  });
  return results;
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return allKeys; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);




// Retrieve all the enumerable property names of an object.
function allKeys(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)) return [];
  var keys = [];
  for (var key in obj) keys.push(key);
  // Ahem, IE < 9.
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__[/* hasEnumBug */ "h"]) Object(_collectNonEnumProps_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj, keys);
  return keys;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasStringTagBug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isIE11; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);



// In IE 10 - Edge 13, `DataView` has string tag `'[object Object]'`.
// In IE 11, the most common among them, this problem also applies to
// `Map`, `WeakMap` and `Set`.
var hasStringTagBug = (
      _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* supportsDataView */ "s"] && Object(_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(new DataView(new ArrayBuffer(8)))
    ),
    isIE11 = (typeof Map !== 'undefined' && Object(_hasObjectTag_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(new Map));


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toPath; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89);



// Internal wrapper for `_.toPath` to enable minification.
// Similar to `cb` for `_.iteratee`.
function toPath(path) {
  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].toPath(path);
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return optimizeCb; });
// Internal function that returns an efficient (for current engines) version
// of the passed-in callback, to be repeatedly applied in other Underscore
// functions.
function optimizeCb(func, context, argCount) {
  if (context === void 0) return func;
  switch (argCount == null ? 3 : argCount) {
    case 1: return function(value) {
      return func.call(context, value);
    };
    // The 2-argument case is omitted because we’re not using it.
    case 3: return function(value, index, collection) {
      return func.call(context, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(context, accumulator, value, index, collection);
    };
  }
  return function() {
    return func.apply(context, arguments);
  };
}


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return matcher; });
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);



// Returns a predicate for checking whether an object has a given set of
// `key:value` pairs.
function matcher(attrs) {
  attrs = Object(_extendOwn_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, attrs);
  return function(obj) {
    return Object(_isMatch_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj, attrs);
  };
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ie11fingerprint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return weakMapMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setMethods; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);




// Since the regular `Object.prototype.toString` type tests don't work for
// some types in IE 11, we use a fingerprinting heuristic instead, based
// on the methods. It's not great, but it's the best we got.
// The fingerprint method lists are defined below.
function ie11fingerprint(methods) {
  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(methods);
  return function(obj) {
    if (obj == null) return false;
    // `Map`, `WeakMap` and `Set` have no enumerable keys.
    var keys = Object(_allKeys_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj);
    if (Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(keys)) return false;
    for (var i = 0; i < length; i++) {
      if (!Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj[methods[i]])) return false;
    }
    // If we are testing against `WeakMap`, we need to ensure that
    // `obj` doesn't have a `forEach` method in order to distinguish
    // it from a regular `Map`.
    return methods !== weakMapMethods || !Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj[forEachName]);
  };
}

// In the interest of compact minification, we write
// each string in the fingerprints only once.
var forEachName = 'forEach',
    hasName = 'has',
    commonInit = ['clear', 'delete'],
    mapTail = ['get', hasName, 'set'];

// `Map`, `WeakMap` and `Set` each have slightly different
// combinations of the above sublists.
var mapMethods = commonInit.concat(forEachName, mapTail),
    weakMapMethods = commonInit.concat(mapTail),
    setMethods = ['add'].concat(commonInit, forEachName, hasName);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);




// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. `_` acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
var partial = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return Object(_executeBound_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(func, bound, this, this, args);
  };
  return bound;
});

partial.placeholder = _underscore_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
/* harmony default export */ __webpack_exports__["a"] = (partial);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// A (possibly faster) way to get the current timestamp as an integer.
/* harmony default export */ __webpack_exports__["a"] = (Date.now || function() {
  return new Date().getTime();
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return group; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);



// An internal function used for aggregate "group by" operations.
function group(behavior, partition) {
  return function(obj, iteratee, context) {
    var result = partition ? [[], []] : {};
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj, function(value, index) {
      var key = iteratee(value, index, obj);
      behavior(result, value, key);
    });
    return result;
  };
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



// Assigns a given object with all the own properties in the passed-in
// object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
/* harmony default export */ __webpack_exports__["a"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_keys_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]));


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);





var isDataView = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('DataView');

// In IE 10 - Edge 13, we need a different heuristic
// to determine whether an object is a `DataView`.
function ie10IsDataView(obj) {
  return obj != null && Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj.getInt8) && Object(_isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj.buffer);
}

/* harmony default export */ __webpack_exports__["a"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_3__[/* hasStringTagBug */ "a"] ? ie10IsDataView : isDataView);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);


// Internal helper to obtain the `byteLength` property of an object.
/* harmony default export */ __webpack_exports__["a"] = (Object(_shallowProperty_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('byteLength'));


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rest; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


// Returns everything but the first entry of the `array`. Especially useful on
// the `arguments` object. Passing an **n** will return the rest N values in the
// `array`.
function rest(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* slice */ "q"].call(array, n == null || guard ? 1 : n);
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return _setup_js__WEBPACK_IMPORTED_MODULE_0__["e"]; });

/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "restArguments", function() { return _restArguments_js__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _isObject_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _isNull_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return _isNull_js__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _isUndefined_js__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _isBoolean_js__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _isElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElement", function() { return _isElement_js__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _isString_js__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _isNumber_js__WEBPACK_IMPORTED_MODULE_8__["a"]; });

/* harmony import */ var _isDate_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _isDate_js__WEBPACK_IMPORTED_MODULE_9__["a"]; });

/* harmony import */ var _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(100);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _isRegExp_js__WEBPACK_IMPORTED_MODULE_10__["a"]; });

/* harmony import */ var _isError_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(101);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return _isError_js__WEBPACK_IMPORTED_MODULE_11__["a"]; });

/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return _isSymbol_js__WEBPACK_IMPORTED_MODULE_12__["a"]; });

/* harmony import */ var _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArrayBuffer", function() { return _isArrayBuffer_js__WEBPACK_IMPORTED_MODULE_13__["a"]; });

/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDataView", function() { return _isDataView_js__WEBPACK_IMPORTED_MODULE_14__["a"]; });

/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _isArray_js__WEBPACK_IMPORTED_MODULE_15__["a"]; });

/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _isFunction_js__WEBPACK_IMPORTED_MODULE_16__["a"]; });

/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArguments", function() { return _isArguments_js__WEBPACK_IMPORTED_MODULE_17__["a"]; });

/* harmony import */ var _isFinite_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(102);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFinite", function() { return _isFinite_js__WEBPACK_IMPORTED_MODULE_18__["a"]; });

/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(54);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNaN", function() { return _isNaN_js__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypedArray", function() { return _isTypedArray_js__WEBPACK_IMPORTED_MODULE_20__["a"]; });

/* harmony import */ var _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(103);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _isEmpty_js__WEBPACK_IMPORTED_MODULE_21__["a"]; });

/* harmony import */ var _isMatch_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMatch", function() { return _isMatch_js__WEBPACK_IMPORTED_MODULE_22__["a"]; });

/* harmony import */ var _isEqual_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(104);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _isEqual_js__WEBPACK_IMPORTED_MODULE_23__["a"]; });

/* harmony import */ var _isMap_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return _isMap_js__WEBPACK_IMPORTED_MODULE_24__["a"]; });

/* harmony import */ var _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(106);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return _isWeakMap_js__WEBPACK_IMPORTED_MODULE_25__["a"]; });

/* harmony import */ var _isSet_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(107);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return _isSet_js__WEBPACK_IMPORTED_MODULE_26__["a"]; });

/* harmony import */ var _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(108);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return _isWeakSet_js__WEBPACK_IMPORTED_MODULE_27__["a"]; });

/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return _keys_js__WEBPACK_IMPORTED_MODULE_28__["a"]; });

/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allKeys", function() { return _allKeys_js__WEBPACK_IMPORTED_MODULE_29__["a"]; });

/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "values", function() { return _values_js__WEBPACK_IMPORTED_MODULE_30__["a"]; });

/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(109);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_31__["a"]; });

/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return _invert_js__WEBPACK_IMPORTED_MODULE_32__["a"]; });

/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "functions", function() { return _functions_js__WEBPACK_IMPORTED_MODULE_33__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "methods", function() { return _functions_js__WEBPACK_IMPORTED_MODULE_33__["a"]; });

/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _extend_js__WEBPACK_IMPORTED_MODULE_34__["a"]; });

/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendOwn", function() { return _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return _extendOwn_js__WEBPACK_IMPORTED_MODULE_35__["a"]; });

/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(60);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return _defaults_js__WEBPACK_IMPORTED_MODULE_36__["a"]; });

/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(110);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create_js__WEBPACK_IMPORTED_MODULE_37__["a"]; });

/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(111);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return _clone_js__WEBPACK_IMPORTED_MODULE_38__["a"]; });

/* harmony import */ var _tap_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(112);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tap", function() { return _tap_js__WEBPACK_IMPORTED_MODULE_39__["a"]; });

/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get_js__WEBPACK_IMPORTED_MODULE_40__["a"]; });

/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(113);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "has", function() { return _has_js__WEBPACK_IMPORTED_MODULE_41__["a"]; });

/* harmony import */ var _mapObject_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(114);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _mapObject_js__WEBPACK_IMPORTED_MODULE_42__["a"]; });

/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return _identity_js__WEBPACK_IMPORTED_MODULE_43__["a"]; });

/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(56);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _constant_js__WEBPACK_IMPORTED_MODULE_44__["a"]; });

/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return _noop_js__WEBPACK_IMPORTED_MODULE_45__["a"]; });

/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(89);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPath", function() { return _toPath_js__WEBPACK_IMPORTED_MODULE_46__["a"]; });

/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "property", function() { return _property_js__WEBPACK_IMPORTED_MODULE_47__["a"]; });

/* harmony import */ var _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(115);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propertyOf", function() { return _propertyOf_js__WEBPACK_IMPORTED_MODULE_48__["a"]; });

/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_49__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_49__["a"]; });

/* harmony import */ var _times_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(116);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "times", function() { return _times_js__WEBPACK_IMPORTED_MODULE_50__["a"]; });

/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "random", function() { return _random_js__WEBPACK_IMPORTED_MODULE_51__["a"]; });

/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _now_js__WEBPACK_IMPORTED_MODULE_52__["a"]; });

/* harmony import */ var _escape_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(117);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return _escape_js__WEBPACK_IMPORTED_MODULE_53__["a"]; });

/* harmony import */ var _unescape_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(118);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unescape", function() { return _unescape_js__WEBPACK_IMPORTED_MODULE_54__["a"]; });

/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(90);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "templateSettings", function() { return _templateSettings_js__WEBPACK_IMPORTED_MODULE_55__["a"]; });

/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(119);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "template", function() { return _template_js__WEBPACK_IMPORTED_MODULE_56__["a"]; });

/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(120);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _result_js__WEBPACK_IMPORTED_MODULE_57__["a"]; });

/* harmony import */ var _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(121);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _uniqueId_js__WEBPACK_IMPORTED_MODULE_58__["a"]; });

/* harmony import */ var _chain_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(122);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _chain_js__WEBPACK_IMPORTED_MODULE_59__["a"]; });

/* harmony import */ var _iteratee_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iteratee", function() { return _iteratee_js__WEBPACK_IMPORTED_MODULE_60__["a"]; });

/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partial", function() { return _partial_js__WEBPACK_IMPORTED_MODULE_61__["a"]; });

/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(64);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _bind_js__WEBPACK_IMPORTED_MODULE_62__["a"]; });

/* harmony import */ var _bindAll_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(123);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bindAll", function() { return _bindAll_js__WEBPACK_IMPORTED_MODULE_63__["a"]; });

/* harmony import */ var _memoize_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(124);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "memoize", function() { return _memoize_js__WEBPACK_IMPORTED_MODULE_64__["a"]; });

/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _delay_js__WEBPACK_IMPORTED_MODULE_65__["a"]; });

/* harmony import */ var _defer_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(125);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return _defer_js__WEBPACK_IMPORTED_MODULE_66__["a"]; });

/* harmony import */ var _throttle_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(126);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _throttle_js__WEBPACK_IMPORTED_MODULE_67__["a"]; });

/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(127);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce_js__WEBPACK_IMPORTED_MODULE_68__["a"]; });

/* harmony import */ var _wrap_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_js__WEBPACK_IMPORTED_MODULE_69__["a"]; });

/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negate", function() { return _negate_js__WEBPACK_IMPORTED_MODULE_70__["a"]; });

/* harmony import */ var _compose_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(129);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _compose_js__WEBPACK_IMPORTED_MODULE_71__["a"]; });

/* harmony import */ var _after_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(130);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "after", function() { return _after_js__WEBPACK_IMPORTED_MODULE_72__["a"]; });

/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "before", function() { return _before_js__WEBPACK_IMPORTED_MODULE_73__["a"]; });

/* harmony import */ var _once_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(131);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "once", function() { return _once_js__WEBPACK_IMPORTED_MODULE_74__["a"]; });

/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findKey", function() { return _findKey_js__WEBPACK_IMPORTED_MODULE_75__["a"]; });

/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(37);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _findIndex_js__WEBPACK_IMPORTED_MODULE_76__["a"]; });

/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findLastIndex", function() { return _findLastIndex_js__WEBPACK_IMPORTED_MODULE_77__["a"]; });

/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortedIndex", function() { return _sortedIndex_js__WEBPACK_IMPORTED_MODULE_78__["a"]; });

/* harmony import */ var _indexOf_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexOf", function() { return _indexOf_js__WEBPACK_IMPORTED_MODULE_79__["a"]; });

/* harmony import */ var _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(132);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastIndexOf", function() { return _lastIndexOf_js__WEBPACK_IMPORTED_MODULE_80__["a"]; });

/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "find", function() { return _find_js__WEBPACK_IMPORTED_MODULE_81__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "detect", function() { return _find_js__WEBPACK_IMPORTED_MODULE_81__["a"]; });

/* harmony import */ var _findWhere_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(133);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findWhere", function() { return _findWhere_js__WEBPACK_IMPORTED_MODULE_82__["a"]; });

/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "each", function() { return _each_js__WEBPACK_IMPORTED_MODULE_83__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _each_js__WEBPACK_IMPORTED_MODULE_83__["a"]; });

/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map_js__WEBPACK_IMPORTED_MODULE_84__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collect", function() { return _map_js__WEBPACK_IMPORTED_MODULE_84__["a"]; });

/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(47);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_85__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldl", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_85__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_85__["a"]; });

/* harmony import */ var _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduceRight", function() { return _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "foldr", function() { return _reduceRight_js__WEBPACK_IMPORTED_MODULE_86__["a"]; });

/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_87__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_87__["a"]; });

/* harmony import */ var _reject_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(134);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reject", function() { return _reject_js__WEBPACK_IMPORTED_MODULE_88__["a"]; });

/* harmony import */ var _every_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _every_js__WEBPACK_IMPORTED_MODULE_89__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _every_js__WEBPACK_IMPORTED_MODULE_89__["a"]; });

/* harmony import */ var _some_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(93);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _some_js__WEBPACK_IMPORTED_MODULE_90__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _some_js__WEBPACK_IMPORTED_MODULE_90__["a"]; });

/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_91__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_91__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "include", function() { return _contains_js__WEBPACK_IMPORTED_MODULE_91__["a"]; });

/* harmony import */ var _invoke_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(135);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invoke", function() { return _invoke_js__WEBPACK_IMPORTED_MODULE_92__["a"]; });

/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(38);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _pluck_js__WEBPACK_IMPORTED_MODULE_93__["a"]; });

/* harmony import */ var _where_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "where", function() { return _where_js__WEBPACK_IMPORTED_MODULE_94__["a"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_95__["a"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_96__["a"]; });

/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(138);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_97__["a"]; });

/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return _sample_js__WEBPACK_IMPORTED_MODULE_98__["a"]; });

/* harmony import */ var _sortBy_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(139);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return _sortBy_js__WEBPACK_IMPORTED_MODULE_99__["a"]; });

/* harmony import */ var _groupBy_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(140);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groupBy", function() { return _groupBy_js__WEBPACK_IMPORTED_MODULE_100__["a"]; });

/* harmony import */ var _indexBy_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(141);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexBy", function() { return _indexBy_js__WEBPACK_IMPORTED_MODULE_101__["a"]; });

/* harmony import */ var _countBy_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(142);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countBy", function() { return _countBy_js__WEBPACK_IMPORTED_MODULE_102__["a"]; });

/* harmony import */ var _partition_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(143);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _partition_js__WEBPACK_IMPORTED_MODULE_103__["a"]; });

/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(73);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return _toArray_js__WEBPACK_IMPORTED_MODULE_104__["a"]; });

/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(144);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "size", function() { return _size_js__WEBPACK_IMPORTED_MODULE_105__["a"]; });

/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(74);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _pick_js__WEBPACK_IMPORTED_MODULE_106__["a"]; });

/* harmony import */ var _omit_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(145);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omit", function() { return _omit_js__WEBPACK_IMPORTED_MODULE_107__["a"]; });

/* harmony import */ var _first_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _first_js__WEBPACK_IMPORTED_MODULE_108__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "head", function() { return _first_js__WEBPACK_IMPORTED_MODULE_108__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "take", function() { return _first_js__WEBPACK_IMPORTED_MODULE_108__["a"]; });

/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initial", function() { return _initial_js__WEBPACK_IMPORTED_MODULE_109__["a"]; });

/* harmony import */ var _last_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(146);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "last", function() { return _last_js__WEBPACK_IMPORTED_MODULE_110__["a"]; });

/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rest", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_111__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tail", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_111__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drop", function() { return _rest_js__WEBPACK_IMPORTED_MODULE_111__["a"]; });

/* harmony import */ var _compact_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(147);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _compact_js__WEBPACK_IMPORTED_MODULE_112__["a"]; });

/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(148);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _flatten_js__WEBPACK_IMPORTED_MODULE_113__["a"]; });

/* harmony import */ var _without_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(149);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "without", function() { return _without_js__WEBPACK_IMPORTED_MODULE_114__["a"]; });

/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniq", function() { return _uniq_js__WEBPACK_IMPORTED_MODULE_115__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return _uniq_js__WEBPACK_IMPORTED_MODULE_115__["a"]; });

/* harmony import */ var _union_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(150);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _union_js__WEBPACK_IMPORTED_MODULE_116__["a"]; });

/* harmony import */ var _intersection_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(151);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _intersection_js__WEBPACK_IMPORTED_MODULE_117__["a"]; });

/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _difference_js__WEBPACK_IMPORTED_MODULE_118__["a"]; });

/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unzip", function() { return _unzip_js__WEBPACK_IMPORTED_MODULE_119__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _unzip_js__WEBPACK_IMPORTED_MODULE_119__["a"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(152);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_120__["a"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(153);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _object_js__WEBPACK_IMPORTED_MODULE_121__["a"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(154);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_122__["a"]; });

/* harmony import */ var _chunk_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(155);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chunk", function() { return _chunk_js__WEBPACK_IMPORTED_MODULE_123__["a"]; });

/* harmony import */ var _mixin_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(156);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixin", function() { return _mixin_js__WEBPACK_IMPORTED_MODULE_124__["a"]; });

/* harmony import */ var _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(157);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _underscore_array_methods_js__WEBPACK_IMPORTED_MODULE_125__["a"]; });

// Named Exports
// =============

//     Underscore.js 1.13.2
//     https://underscorejs.org
//     (c) 2009-2021 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

// Baseline setup.



// Object Functions
// ----------------
// Our most fundamental functions operate on any JavaScript object.
// Most functions in Underscore depend on at least one function in this section.

// A group of functions that check the types of core JavaScript values.
// These are often informally referred to as the "isType" functions.



























// Functions that treat an object as a dictionary of key-value pairs.
















// Utility Functions
// -----------------
// A bit of a grab bag: Predicate-generating functions for use with filters and
// loops, string escaping and templating, create random numbers and unique ids,
// and functions that facilitate Underscore's chaining and iteration conventions.



















// Function (ahem) Functions
// -------------------------
// These functions take a function as an argument and return a new function
// as the result. Also known as higher-order functions.















// Finders
// -------
// Functions that extract (the position of) a single element from an object
// or array based on some criterion.









// Collection Functions
// --------------------
// Functions that work on any collection of elements: either an array, or
// an object of key-value pairs.
























// `_.pick` and `_.omit` are actually object functions, but we put
// them here in order to create a more natural reading order in the
// monolithic build as they depend on `_.contains`.



// Array Functions
// ---------------
// Functions that operate on arrays (and array-likes) only, because they’re
// expressed in terms of operations on an ordered list of values.

















// OOP
// ---
// These modules support the "object-oriented" calling style. See also
// `underscore.js` and `index-default.js`.




/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('String'));


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



var isArguments = Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Arguments');

// Define a fallback version of the method in browsers (ahem, IE < 9), where
// there isn't any inspectable "Arguments" type.
(function() {
  if (!isArguments(arguments)) {
    isArguments = function(obj) {
      return Object(_has_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj, 'callee');
    };
  }
}());

/* harmony default export */ __webpack_exports__["a"] = (isArguments);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return identity; });
// Keep the identity function around for default iteratees.
function identity(value) {
  return value;
}


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return property; });
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);



// Creates a function that, when passed an object, will traverse that object’s
// properties down the given `path`, specified as an array of keys or indices.
function property(path) {
  path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(path);
  return function(obj) {
    return Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj, path);
  };
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return negate; });
// Returns a negated version of the passed-in predicate.
function negate(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);


// Returns the first index on an array-like that passes a truth test.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(1));


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pluck; });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);



// Convenience version of a common use case of `_.map`: fetching a property.
function pluck(obj, key) {
  return Object(_map_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj, Object(_property_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(key));
}


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAssigner; });
// An internal function for creating assigner functions.
function createAssigner(keysFunc, defaults) {
  return function(obj) {
    var length = arguments.length;
    if (defaults) obj = Object(obj);
    if (length < 2 || obj == null) return obj;
    for (var index = 1; index < length; index++) {
      var source = arguments[index],
          keys = keysFunc(source),
          l = keys.length;
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        if (!defaults || obj[key] === void 0) obj[key] = source[key];
      }
    }
    return obj;
  };
}


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepGet; });
// Internal function to obtain a nested property in `obj` along `path`.
function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return functions; });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);


// Return a sorted list of the function names available on the object.
function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj[key])) names.push(key);
  }
  return names.sort();
}


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return find; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _findKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67);




// Return the first value which passes a truth test.
function find(obj, predicate, context) {
  var keyFinder = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) ? _findIndex_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"] : _findKey_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];
  var key = keyFinder(obj, predicate, context);
  if (key !== void 0 && key !== -1) return obj[key];
}


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uniq; });
/* harmony import */ var _isBoolean_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);





// Produce a duplicate-free version of the array. If the array has already
// been sorted, you have the option of using a faster algorithm.
// The faster algorithm will not work with an iteratee if the iteratee
// is not a one-to-one function, so providing an iteratee will disable
// the faster algorithm.
function uniq(array, isSorted, iteratee, context) {
  if (!Object(_isBoolean_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(isSorted)) {
    context = iteratee;
    iteratee = isSorted;
    isSorted = false;
  }
  if (iteratee != null) iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iteratee, context);
  var result = [];
  var seen = [];
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(array); i < length; i++) {
    var value = array[i],
        computed = iteratee ? iteratee(value, i, array) : value;
    if (isSorted && !iteratee) {
      if (!i || seen !== computed) result.push(value);
      seen = computed;
    } else if (iteratee) {
      if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(seen, computed)) {
        seen.push(computed);
        result.push(value);
      }
    } else if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(result, value)) {
      result.push(value);
    }
  }
  return result;
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unzip; });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);




// Complement of zip. Unzip accepts an array of arrays and groups
// each array's elements on shared indices.
function unzip(array) {
  var length = array && Object(_max_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array, _getLength_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]).length || 0;
  var result = Array(length);

  for (var index = 0; index < length; index++) {
    result[index] = Object(_pluck_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(array, index);
  }
  return result;
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return random; });
// Return a random integer between `min` and `max` (inclusive).
function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chainResult; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


// Helper function to continue chaining intermediate results.
function chainResult(instance, obj) {
  return instance._chain ? Object(_underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj).chain() : obj;
}


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);


// **Reduce** builds up a single result from a list of values, aka `inject`,
// or `foldl`.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createReduce_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(1));


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return first; });
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);


// Get the first element of an array. Passing **n** will return the first N
// values in the array. The **guard** check allows it to work with `_.map`.
function first(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[0];
  return Object(_initial_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array, array.length - n);
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isUndefined; });
// Is a given variable undefined?
function isUndefined(obj) {
  return obj === void 0;
}


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isBoolean; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


// Is a given value a boolean?
function isBoolean(obj) {
  return obj === true || obj === false || _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* toString */ "t"].call(obj) === '[object Boolean]';
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Number'));


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Symbol'));


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('ArrayBuffer'));


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNaN; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _isNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);



// Is the given value `NaN`?
function isNaN(obj) {
  return Object(_isNumber_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) && Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__[/* _isNaN */ "g"])(obj);
}


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56);
/* harmony import */ var _isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);





// Is a given value a typed array?
var typedArrayPattern = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function isTypedArray(obj) {
  // `ArrayBuffer.isView` is the most future-proof, so use it when available.
  // Otherwise, fall back on the above regular expression.
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* nativeIsView */ "l"] ? (Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__[/* nativeIsView */ "l"])(obj) && !Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj)) :
                Object(_isBufferLike_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(obj) && typedArrayPattern.test(_setup_js__WEBPACK_IMPORTED_MODULE_0__[/* toString */ "t"].call(obj));
}

/* harmony default export */ __webpack_exports__["a"] = (_setup_js__WEBPACK_IMPORTED_MODULE_0__[/* supportsArrayBuffer */ "r"] ? isTypedArray : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(false));


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constant; });
// Predicate-generating function. Often useful outside of Underscore.
function constant(value) {
  return function() {
    return value;
  };
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMatch; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


// Returns whether an object has a given set of `key:value` pairs.
function isMatch(object, attrs) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(attrs), length = _keys.length;
  if (object == null) return !length;
  var obj = Object(object);
  for (var i = 0; i < length; i++) {
    var key = _keys[i];
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }
  return true;
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return invert; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


// Invert the keys and values of an object. The values must be serializable.
function invert(obj) {
  var result = {};
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj);
  for (var i = 0, length = _keys.length; i < length; i++) {
    result[obj[_keys[i]]] = _keys[i];
  }
  return result;
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



// Extend a given object with all the properties in passed-in object(s).
/* harmony default export */ __webpack_exports__["a"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]));


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);



// Fill in a given object with default properties.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_allKeys_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], true));


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return get; });
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _isUndefined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49);




// Get the value of the (deep) property on `path` from `object`.
// If any property in `path` does not exist or if the value is
// `undefined`, return `defaultValue` instead.
// The `path` is normalized through `_.toPath`.
function get(object, path, defaultValue) {
  var value = Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(object, Object(_toPath_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(path));
  return Object(_isUndefined_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value) ? defaultValue : value;
}


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iteratee; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);



// External wrapper for our callback generator. Users may customize
// `_.iteratee` if they want additional predicate/iteratee shorthand styles.
// This abstraction hides the internal-only `argCount` argument.
function iteratee(value, context) {
  return Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value, context, Infinity);
}
_underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].iteratee = iteratee;


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noop; });
// Predicate-generating function. Often useful outside of Underscore.
function noop(){}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _executeBound_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84);




// Create a function bound to a given object (assigning `this`, and arguments,
// optionally).
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(func, context, args) {
  if (!Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(func)) throw new TypeError('Bind must be called on a function');
  var bound = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(callArgs) {
    return Object(_executeBound_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(func, bound, context, this, args.concat(callArgs));
  });
  return bound;
}));


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
}));


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return before; });
// Returns a function that will only be executed up to (but not including) the
// Nth call.
function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findKey; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



// Returns the first key on an object that passes a truth test.
function findKey(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(predicate, context);
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj), key;
  for (var i = 0, length = _keys.length; i < length; i++) {
    key = _keys[i];
    if (predicate(obj[key], key, obj)) return key;
  }
}


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);


// Returns the last index on an array-like that passes a truth test.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createPredicateIndexFinder_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(-1));


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sortedIndex; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



// Use a comparator function to figure out the smallest index at which
// an object should be inserted so as to maintain order. Uses binary search.
function sortedIndex(array, obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(iteratee, context, 1);
  var value = iteratee(obj);
  var low = 0, high = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(array);
  while (low < high) {
    var mid = Math.floor((low + high) / 2);
    if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
  }
  return low;
}


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _findIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86);




// Return the position of the first occurrence of an item in an array,
// or -1 if the item is not included in the array.
// If the array is large and already in sort order, pass `true`
// for **isSorted** to use binary search.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(1, _findIndex_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _sortedIndex_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return max; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);





// Return the maximum element (or element-based computation).
function max(obj, iteratee, context) {
  var result = -Infinity, lastComputed = -Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) ? obj : Object(_values_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value > result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sample; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _toArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73);






// Sample **n** random values from a collection using the modern version of the
// [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
// If **n** is not specified, returns a single random element.
// The internal `guard` argument allows it to work with `_.map`.
function sample(obj, n, guard) {
  if (n == null || guard) {
    if (!Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)) obj = Object(_values_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj);
    return obj[Object(_random_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(obj.length - 1)];
  }
  var sample = Object(_toArray_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(obj);
  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(sample);
  n = Math.max(Math.min(n, length), 0);
  var last = length - 1;
  for (var index = 0; index < n; index++) {
    var rand = Object(_random_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(index, last);
    var temp = sample[index];
    sample[index] = sample[rand];
    sample[rand] = temp;
  }
  return sample.slice(0, n);
}


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toArray; });
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);








// Safely create a real, live array from anything iterable.
var reStrSymbol = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function toArray(obj) {
  if (!obj) return [];
  if (Object(_isArray_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)) return _setup_js__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "q"].call(obj);
  if (Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj)) {
    // Keep surrogate pair characters together.
    return obj.match(reStrSymbol);
  }
  if (Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(obj)) return Object(_map_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(obj, _identity_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]);
  return Object(_values_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(obj);
}


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _allKeys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(161);
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);







// Return a copy of the object only containing the allowed properties.
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(obj, keys) {
  var result = {}, iteratee = keys[0];
  if (obj == null) return result;
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iteratee)) {
    if (keys.length > 1) iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iteratee, keys[1]);
    keys = Object(_allKeys_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(obj);
  } else {
    iteratee = _keyInObj_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"];
    keys = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(keys, false, false);
    obj = Object(obj);
  }
  for (var i = 0, length = keys.length; i < length; i++) {
    var key = keys[i];
    var value = obj[key];
    if (iteratee(value, key, obj)) result[key] = value;
  }
  return result;
}));


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initial; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


// Returns everything but the last entry of the array. Especially useful on
// the arguments object. Passing **n** will return all the values in
// the array, excluding the last N.
function initial(array, n, guard) {
  return _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* slice */ "q"].call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
}


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);





// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(array, rest) {
  rest = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(rest, true, true);
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(array, function(value){
    return !Object(_contains_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(rest, value);
  });
}));


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSizePropertyCheck; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


// Common internal logic for `isArrayLike` and `isBufferLike`.
function createSizePropertyCheck(getSizeProperty) {
  return function(collection) {
    var sizeProperty = getSizeProperty(collection);
    return typeof sizeProperty == 'number' && sizeProperty >= 0 && sizeProperty <= _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* MAX_ARRAY_INDEX */ "b"];
  }
}


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shallowProperty; });
// Internal helper to generate a function to obtain property `key` from `obj`.
function shallowProperty(key) {
  return function(obj) {
    return obj == null ? void 0 : obj[key];
  };
}


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return collectNonEnumProps; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);




// Internal helper to create a simple lookup structure.
// `collectNonEnumProps` used to depend on `_.contains`, but this led to
// circular imports. `emulatedSet` is a one-off solution that only works for
// arrays of strings.
function emulatedSet(keys) {
  var hash = {};
  for (var l = keys.length, i = 0; i < l; ++i) hash[keys[i]] = true;
  return {
    contains: function(key) { return hash[key] === true; },
    push: function(key) {
      hash[key] = true;
      return keys.push(key);
    }
  };
}

// Internal helper. Checks `keys` for the presence of keys in IE < 9 that won't
// be iterated by `for key in ...` and thus missed. Extends `keys` in place if
// needed.
function collectNonEnumProps(obj, keys) {
  keys = emulatedSet(keys);
  var nonEnumIdx = _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* nonEnumerableProps */ "n"].length;
  var constructor = obj.constructor;
  var proto = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(constructor) && constructor.prototype || _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* ObjProto */ "c"];

  // Constructor is a special case.
  var prop = 'constructor';
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj, prop) && !keys.contains(prop)) keys.push(prop);

  while (nonEnumIdx--) {
    prop = _setup_js__WEBPACK_IMPORTED_MODULE_0__[/* nonEnumerableProps */ "n"][nonEnumIdx];
    if (prop in obj && obj[prop] !== proto[prop] && !keys.contains(prop)) {
      keys.push(prop);
    }
  }
}


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseCreate; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);



// Create a naked function reference for surrogate-prototype-swapping.
function ctor() {
  return function(){};
}

// An internal function for creating a new object that inherits from another.
function baseCreate(prototype) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(prototype)) return {};
  if (_setup_js__WEBPACK_IMPORTED_MODULE_1__[/* nativeCreate */ "j"]) return Object(_setup_js__WEBPACK_IMPORTED_MODULE_1__[/* nativeCreate */ "j"])(prototype);
  var Ctor = ctor();
  Ctor.prototype = prototype;
  var result = new Ctor;
  Ctor.prototype = null;
  return result;
}


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseIteratee; });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);








// An internal function to generate callbacks that can be applied to each
// element in a collection, returning the desired result — either `_.identity`,
// an arbitrary callback, a property matcher, or a property accessor.
function baseIteratee(value, context, argCount) {
  if (value == null) return _identity_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value)) return Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(value, context, argCount);
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value) && !Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(value)) return Object(_matcher_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(value);
  return Object(_property_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(value);
}


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createEscaper; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


// Internal helper to generate functions for escaping and unescaping strings
// to/from HTML interpolation.
function createEscaper(map) {
  var escaper = function(match) {
    return map[match];
  };
  // Regexes for identifying a key that needs to be escaped.
  var source = '(?:' + Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(map).join('|') + ')';
  var testRegexp = RegExp(source);
  var replaceRegexp = RegExp(source, 'g');
  return function(string) {
    string = string == null ? '' : '' + string;
    return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
  };
}


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Internal list of HTML entities for escaping.
/* harmony default export */ __webpack_exports__["a"] = ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return executeBound; });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



// Internal function to execute `sourceFunc` bound to `context` with optional
// `args`. Determines whether to execute a function as a constructor or as a
// normal function.
function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
  if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
  var self = Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(sourceFunc.prototype);
  var result = sourceFunc.apply(self, args);
  if (Object(_isObject_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result)) return result;
  return self;
}


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPredicateIndexFinder; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);



// Internal function to generate `_.findIndex` and `_.findLastIndex`.
function createPredicateIndexFinder(dir) {
  return function(array, predicate, context) {
    predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(predicate, context);
    var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(array);
    var index = dir > 0 ? 0 : length - 1;
    for (; index >= 0 && index < length; index += dir) {
      if (predicate(array[index], index, array)) return index;
    }
    return -1;
  };
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createIndexFinder; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _isNaN_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54);




// Internal function to generate the `_.indexOf` and `_.lastIndexOf` functions.
function createIndexFinder(dir, predicateFind, sortedIndex) {
  return function(array, item, idx) {
    var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array);
    if (typeof idx == 'number') {
      if (dir > 0) {
        i = idx >= 0 ? idx : Math.max(idx + length, i);
      } else {
        length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
      }
    } else if (sortedIndex && idx && length) {
      idx = sortedIndex(array, item);
      return array[idx] === item ? idx : -1;
    }
    if (item !== item) {
      idx = predicateFind(_setup_js__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "q"].call(array, i, length), _isNaN_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
      return idx >= 0 ? idx + i : -1;
    }
    for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
      if (array[idx] === item) return idx;
    }
    return -1;
  };
}


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createReduce; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);




// Internal helper to create a reducing function, iterating left or right.
function createReduce(dir) {
  // Wrap code that reassigns argument variables in a separate function than
  // the one that accesses `arguments.length` to avoid a perf hit. (#1991)
  var reducer = function(obj, iteratee, memo, initial) {
    var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj),
        length = (_keys || obj).length,
        index = dir > 0 ? 0 : length - 1;
    if (!initial) {
      memo = obj[_keys ? _keys[index] : index];
      index += dir;
    }
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = _keys ? _keys[index] : index;
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    return memo;
  };

  return function(obj, iteratee, memo, context) {
    var initial = arguments.length >= 3;
    return reducer(obj, Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iteratee, context, 4), memo, initial);
  };
}


/***/ }),
/* 88 */
/***/ (function(module) {

module.exports = JSON.parse("{\"json\":{\"type\":\"NeuralNetwork\",\"sizes\":[784,16,16,10],\"layers\":[{\"weights\":[],\"biases\":[]},{\"weights\":[[-0.04040849581360817,-0.006435069255530834,0.06719828397035599,0.1471864879131317,-0.18910162150859833,-0.14961247146129608,0.12885966897010803,-0.12649616599082947,0.10011995583772659,-0.21219764649868011,-0.07151541858911514,-0.08758410811424255,-0.08771450817584991,-0.07523380219936371,0.0805722028017044,-0.06397666037082672,-0.02505851909518242,-0.1855907440185547,-0.24651461839675903,-0.1982007473707199,-0.19019192457199097,-0.00003095731881330721,0.04777221009135246,-0.17593134939670563,0.1539645940065384,0.14723747968673706,0.09038971364498138,-0.10933053493499756,0.11215588450431824,-0.16220171749591827,0.13664500415325165,-0.021051853895187378,-0.15595589578151703,0.02136271260678768,-0.13003411889076233,-0.03503561392426491,0.04755668342113495,-0.06676776707172394,0.17832444608211517,0.18814679980278015,-0.20953570306301117,0.05364682525396347,-0.07936125248670578,-0.2848542034626007,-0.082851842045784,-0.11099980771541595,-0.15403582155704498,-0.251424640417099,0.03669802099466324,0.11711686849594116,-0.18269085884094238,0.0005846007261425257,0.09334166347980499,0.08658312261104584,0.19472329318523407,0.06175315007567406,-0.03652140125632286,-0.13824154436588287,0.1257578730583191,0.10826120525598526,-0.1508055329322815,0.1361733376979828,0.025819087401032448,0.12393153458833694,-0.07308322936296463,-0.019208179786801338,-0.07986535131931305,-0.17493537068367004,-0.08526104688644409,-0.3724226951599121,-0.3452759087085724,-0.20848390460014343,-0.481847882270813,-0.2658574879169464,-0.3813294768333435,0.09211243689060211,-0.0884215459227562,-0.1320686936378479,0.11213211715221405,0.01753252185881138,0.044627029448747635,-0.07720346748828888,0.09781631827354431,-0.19336476922035217,-0.15213584899902344,-0.08108124881982803,0.03696667030453682,-0.06137240305542946,0.07897177338600159,0.014165283180773258,0.014873349107801914,0.0954083651304245,0.1195274069905281,-0.044468194246292114,0.05499023199081421,0.03027966059744358,0.531182587146759,0.7536158561706543,0.11002460867166519,-0.6070575714111328,0.07189597934484482,-0.2788308262825012,-0.6068050265312195,-0.13826097548007965,0.11105398088693619,-0.1405140906572342,-0.22224633395671844,-0.36480218172073364,-0.12207121402025223,-0.007391314022243023,0.011548137292265892,-0.11947395652532578,0.19765989482402802,0.09137821942567825,0.12682777643203735,0.11771082133054733,-0.07313978672027588,0.10294632613658905,0.1653657704591751,-0.12000695616006851,0.1529705822467804,0.12475551664829254,0.043370671570301056,0.1075398251414299,0.4155203700065613,0.40006107091903687,0.053236767649650574,0.24209493398666382,-0.4492013156414032,0.010081873275339603,0.6512914896011353,-0.26527369022369385,0.11712777614593506,0.10289495438337326,0.009079093113541603,-0.11875845491886139,-0.1512947976589203,-0.07027324289083481,-0.07418907433748245,0.10834231227636337,-0.09045008569955826,-0.007244525942951441,-0.013484550639986992,-0.04647350311279297,-0.0415373221039772,0.08237010985612869,0.12122141569852829,-0.1212155818939209,0.23993201553821564,-0.10180175304412842,-0.3556263744831085,-0.061362750828266144,-0.35724714398384094,0.32619529962539673,0.19077205657958984,0.5098089575767517,-0.22797444462776184,0.08462563902139664,0.6430215239524841,0.29051756858825684,0.1373833864927292,0.4239514470100403,0.6247888803482056,0.32051244378089905,0.3238820433616638,-0.11995933949947357,-0.0913720354437828,-0.09039109200239182,-0.047874920070171356,0.04201974347233772,0.10667293518781662,0.12937378883361816,0.18509337306022644,0.42470961809158325,0.14919649064540863,-0.37890636920928955,0.15613704919815063,0.14704282581806183,0.0800878182053566,0.2204117476940155,0.20775531232357025,0.6811828017234802,0.5780863165855408,0.45515692234039307,0.010129236616194248,-0.0881449282169342,-0.02652420848608017,0.6317145824432373,0.27916449308395386,0.5825726389884949,0.741417646408081,0.46982142329216003,0.09985741972923279,0.3077407777309418,0.1226971372961998,0.01109219342470169,0.19241374731063843,0.07244861125946045,-0.18042884767055511,0.178658589720726,0.11647634208202362,0.14481103420257568,0.2547042667865753,-0.3403991162776947,-0.19340325891971588,-0.02007969841361046,0.35657909512519836,0.5450067520141602,1.1451140642166138,0.35215890407562256,-0.31225183606147766,-0.372559517621994,0.032226480543613434,0.14965729415416718,0.43944051861763,0.43753209710121155,0.4086010158061981,0.25001394748687744,-0.3034249246120453,-0.004837431944906712,0.18984997272491455,-0.008668879047036171,-0.15858039259910583,-0.08777344226837158,-0.16299115121364594,0.07417046278715134,0.10667888820171356,0.3666324317455292,0.23485830426216125,-0.11587158590555191,0.15768590569496155,0.03566013276576996,-0.29791712760925293,-0.17877303063869476,-0.03351621329784393,-0.03466121479868889,0.7495179176330566,0.06908020377159119,0.661225438117981,0.7239594459533691,0.47782424092292786,0.4086208641529083,0.3823660612106323,-0.13327258825302124,-0.1066107526421547,-0.12637004256248474,-0.547841489315033,-0.22844882309436798,-0.04094293713569641,0.06465044617652893,0.15782980620861053,0.10284564644098282,-0.11813267320394516,-0.009159881621599197,0.09438047558069229,0.31398823857307434,0.3053814172744751,-0.044586148113012314,-0.21927358210086823,0.22506442666053772,0.028815850615501404,0.10870678722858429,-0.07619113475084305,-0.08750994503498077,-0.03788994252681732,-0.26648712158203125,0.11113404482603073,0.38951364159584045,0.36033621430397034,-0.19270318746566772,-0.31517887115478516,-0.191958948969841,0.5009477734565735,-0.037199344485998154,-0.2711091935634613,0.21934346854686737,0.42085590958595276,0.08588241040706635,-0.08114548027515411,0.03521432727575302,0.12713362276554108,-0.04896058142185211,0.3687708377838135,0.29660865664482117,0.41651371121406555,0.07825177907943726,0.09455614537000656,0.15592896938323975,-0.2107631266117096,-0.1906779706478119,-0.23413167893886566,-0.10360834002494812,0.758330225944519,0.42582231760025024,-0.5578089356422424,-0.31760910153388977,0.20111966133117676,0.05394437536597252,0.29755449295043945,-0.41754597425460815,0.540848433971405,0.14747315645217896,0.06711854785680771,0.27589964866638184,0.4291963577270508,0.28512680530548096,0.06966610997915268,0.14997172355651855,-0.14336387813091278,-0.09641307592391968,0.05662721395492554,0.5062741637229919,0.41921937465667725,0.1345769166946411,-0.23066258430480957,-0.23223614692687988,-0.1517682522535324,-0.024320855736732483,0.00838218443095684,-0.0833299532532692,-0.5239125490188599,0.15476416051387787,-0.2665243148803711,-0.5925369262695312,-0.04412181302905083,0.29247385263442993,0.4161984324455261,-0.10494919866323471,0.09975117444992065,-0.3510015904903412,-0.6212924122810364,-0.2886101007461548,0.16594000160694122,0.3465581238269806,0.16278135776519775,0.08094467222690582,-0.1665779948234558,0.044880446046590805,0.1859121322631836,0.4968886971473694,0.21216146647930145,0.4833947420120239,0.20865920186042786,-0.04841655492782593,0.2925700843334198,-0.32013633847236633,0.3383495509624481,-0.4402400255203247,-0.32620882987976074,-0.3443126082420349,-0.7172538638114929,-0.5984032154083252,-0.016616908833384514,-0.4916151165962219,-0.37584957480430603,0.0019851180259138346,0.06485939770936966,-0.45796439051628113,-0.46003907918930054,-0.0792582705616951,-0.016816437244415283,0.03557378798723221,-0.023210885003209114,-0.03930065408349037,0.11399020999670029,0.22811143100261688,-0.07564172148704529,0.2318878173828125,-0.16049347817897797,0.28292131423950195,0.43124493956565857,0.23806408047676086,-0.06258194893598557,-0.36640241742134094,-0.26312291622161865,-0.008039098232984543,-0.023745190352201462,-0.8264800310134888,-0.7412736415863037,-0.7947302460670471,0.12374204397201538,-0.8833999633789062,-0.09141071885824203,-0.11418474465608597,0.2730429768562317,-0.037337642163038254,-0.15786486864089966,-0.35054901242256165,-0.05799642950296402,-0.10188163071870804,0.07011163234710693,-0.014400524087250233,0.08689603209495544,-0.11006629467010498,-0.0007810018141753972,0.2085537165403366,0.3213350474834442,0.24936196208000183,-0.15050970017910004,-0.5142045617103577,-0.3154849708080292,0.24301573634147644,0.086954765021801,-0.6920029520988464,-0.15599356591701508,-0.03303020820021629,-0.04994926229119301,-0.46866676211357117,-0.6746419072151184,-0.2663756012916565,-0.26650211215019226,0.01962975412607193,-0.16149570047855377,0.748943030834198,0.03617554157972336,0.1781909465789795,0.2185955047607422,0.1794550120830536,-0.1556415855884552,-0.006575430743396282,-0.15961982309818268,0.1745227426290512,0.004720347002148628,-0.09305767714977264,0.26698872447013855,-0.005064291413873434,-0.43736594915390015,-0.737828254699707,-0.3887968957424164,-0.17598551511764526,0.13085921108722687,0.026740754023194313,-0.3939325213432312,-0.8037981986999512,-0.8213512897491455,-0.5808535814285278,-0.4414197504520416,-0.12047044187784195,0.29014602303504944,0.0995875671505928,0.5914132595062256,0.11992526054382324,0.02306290902197361,0.038133591413497925,0.46600455045700073,-0.03212178498506546,-0.019934970885515213,0.18813051283359528,-0.024588821455836296,-0.0874982476234436,0.006068804766982794,0.22144140303134918,0.20674946904182434,-0.09365550428628922,-1.2471061944961548,-0.7625285983085632,-0.9153491258621216,-1.0223681926727295,-0.19132521748542786,-0.6368556022644043,-0.03375420346856117,0.29075300693511963,-0.4112769365310669,-0.9768564701080322,-0.7591775059700012,0.35754066705703735,0.5010761618614197,0.4522746205329895,0.5189378261566162,0.374625563621521,0.13742107152938843,0.0880749523639679,0.1935846209526062,-0.0025527069810777903,-0.00786958821117878,-0.0213180985301733,-0.08542852848768234,-0.08741667866706848,0.08008883148431778,0.40650737285614014,0.8058156371116638,0.009350232779979706,-0.6569202542304993,-0.8214333057403564,-1.834924578666687,-2.188931941986084,-1.3158351182937622,-1.1536216735839844,-1.332216501235962,-1.1053013801574707,-1.1803827285766602,-0.962256908416748,-0.19342228770256042,0.3119196593761444,0.5391066074371338,0.1747213453054428,-0.08290193974971771,0.30308106541633606,-0.07594173401594162,-0.2523297369480133,0.0665723979473114,-0.1251966655254364,-0.1706666648387909,-0.0963253304362297,-0.11565791815519333,-0.07093381136655807,0.23570579290390015,0.3700477182865143,0.6171925663948059,-0.10733465850353241,-0.9122511148452759,-1.265443205833435,-1.3942052125930786,-1.5404596328735352,-1.8179699182510376,-1.978669285774231,-2.143768310546875,-2.1908111572265625,-0.8503456115722656,-0.4927006661891937,0.4894639849662781,-0.047113917768001556,0.37428024411201477,-0.3321700096130371,0.11737031489610672,0.43989166617393494,-0.2452245056629181,-0.1810920089483261,0.013222867622971535,-0.14446672797203064,0.13827204704284668,-0.1884171962738037,-0.11424306780099869,0.1438947319984436,-0.11785497516393661,0.43166929483413696,0.8229537606239319,-0.05887843668460846,-0.716604471206665,-0.666178286075592,-0.5119249224662781,-0.7762933373451233,-0.8944207429885864,-0.7482439875602722,-1.229709506034851,-0.5765045881271362,-0.04124704748392105,0.9453401565551758,0.4107307195663452,-0.15730871260166168,-0.03389133885502815,0.035275887697935104,-0.09639693796634674,0.2386007159948349,-0.2684648334980011,0.09168178588151932,-0.1420808732509613,-0.09079603105783463,0.13122223317623138,0.025661027058959007,0.01941978931427002,0.06196514517068863,0.27652424573898315,0.22598637640476227,0.6197265386581421,0.3112719655036926,0.18739759922027588,0.17336368560791016,0.7009336352348328,0.4059361517429352,0.16041962802410126,-0.0037421714514493942,0.08669181168079376,0.7303680777549744,0.8991925716400146,0.33780911564826965,0.07656262814998627,0.18620117008686066,0.12183281779289246,0.026066793128848076,-0.19925875961780548,0.7262862920761108,0.059551239013671875,0.21768997609615326,-0.018829556182026863,0.021331965923309326,-0.015122419223189354,0.0032245581969618797,-0.1009802520275116,-0.06568773835897446,0.32671982049942017,0.45328089594841003,0.38335156440734863,0.42519763112068176,0.3071562945842743,0.26938557624816895,-0.07028606534004211,0.12371107935905457,0.09316929429769516,0.3734493851661682,0.7203670740127563,0.7229304313659668,1.1220113039016724,1.0810185670852661,0.4348330497741699,0.3401845097541809,0.7297937870025635,0.19086341559886932,0.13772138953208923,0.4162510335445404,-0.015495194122195244,-0.25537362694740295,-0.18492646515369415,-0.029585592448711395,-0.11919091641902924,0.0396643728017807,0.08213093876838684,-0.0536889024078846,0.1325756013393402,0.37124261260032654,-0.029346823692321777,-0.18579180538654327,-0.06461276113986969,-0.1812351793050766,-0.12400467693805695,0.49572324752807617,0.08564028143882751,0.48248571157455444,0.8892694711685181,0.7242154479026794,-0.17304906249046326,0.5484389066696167,0.12835191190242767,0.059449173510074615,0.4755571484565735,1.101420521736145,-0.01731048710644245,-0.20878291130065918,0.1717066466808319,0.0005649931845255196,-0.06374669075012207,-0.22044378519058228,-0.15767671167850494,0.12819968163967133,-0.10220535099506378,0.17890693247318268,0.1341913640499115,-0.006691472139209509,0.1534595787525177,0.006420674733817577,0.046158820390701294,-0.3241628110408783,-0.4657592177391052,0.3665724992752075,0.5857746005058289,0.5245450735092163,0.1399870663881302,0.08574072271585464,0.2547503709793091,-0.005132375750690699,-0.29078903794288635,0.0012196365278214216,0.4197354018688202,-0.24966198205947876,-0.3806934058666229,-0.18730512261390686,0.05623571202158928,-0.020684953778982162,0.0707898885011673,-0.17424838244915009,-0.02032347582280636,0.0681283101439476,0.18757356703281403,0.14934296905994415,-0.1276424378156662,0.18788529932498932,0.25356388092041016,0.13086634874343872,0.5860939621925354,1.130759358406067,0.7803459763526917,0.6376066207885742,0.7178736925125122,0.375603049993515,0.44040173292160034,0.27616992592811584,0.31719014048576355,-0.07345262169837952,0.1257641315460205,-0.02492240071296692,-0.3010422885417938,-0.22789889574050903,-0.3877072036266327,-0.005384587682783604,-0.2801027297973633,-0.31563061475753784,0.0810089036822319,-0.04573901370167732,0.11705006659030914,0.15929213166236877,0.12905296683311462,-0.16122259199619293,-0.013724923133850098,0.1123504489660263,-0.02583223022520542,0.08441793918609619,0.19459106028079987,0.22248689830303192,0.3744445741176605,0.6535941958427429,1.0555932521820068,0.9691344499588013,0.7763596773147583,0.4199933707714081,0.3688605725765228,0.3393389582633972,-0.08168057352304459,-0.07681260257959366,-0.06248163804411888,0.04120612516999245,0.0664675310254097,-0.12788276374340057,-0.15533298254013062,0.07946185767650604,-0.15028753876686096,0.09717696160078049,-0.013508791103959084,0.12135949730873108,-0.046818025410175323,-0.06671842932701111,0.059476088732481,-0.009848210960626602,-0.16999034583568573,0.21176326274871826,-0.17239722609519958,-0.03610645607113838,-0.16408269107341766,-0.03402072563767433,0.2834027409553528,0.2594541311264038,0.2430652678012848,-0.03908008337020874,-0.09574440121650696,0.2849265933036804,0.35363203287124634,0.23061463236808777,0.20925679802894592,0.2046828269958496,-0.07020982354879379,0.07314427196979523,0.028786344453692436,-0.02468927949666977,-0.13613474369049072,-0.14737418293952942,-0.1810760796070099,0.1647360473871231,-0.1741868555545807,0.21119478344917297,0.18393824994564056,0.1314924657344818,-0.12245044857263565,-0.05291246250271797,0.09899301081895828,-0.11252736300230026,-0.009540717117488384,0.1119309514760971,0.18446126580238342,-0.08181234449148178,0.06506352126598358,0.1795317679643631,0.180320605635643,0.17936033010482788,0.26061537861824036,-0.03326329588890076,0.10836302489042282,0.20154863595962524,0.0799001082777977,-0.11640416085720062,-0.18585598468780518,-0.19379183650016785,-0.05939843878149986,-0.11782387644052505,-0.08019208908081055,-0.18392600119113922],[-0.02745938114821911,0.0629335418343544,-0.010121524333953857,0.05025063082575798,0.03598775342106819,0.11210677027702332,0.07223242521286011,-0.1713436096906662,-0.003365633077919483,0.13753509521484375,-0.04856018349528313,-0.039615705609321594,0.18230555951595306,-0.04576071724295616,0.1610952466726303,-0.03463313728570938,0.15667623281478882,-0.12468154728412628,0.0033515177201479673,-0.1692434549331665,-0.20286482572555542,-0.02908511273562908,0.13870549201965332,-0.0002378944627707824,-0.05949277803301811,0.11042953282594681,0.06169722229242325,-0.0895552933216095,0.11326675117015839,-0.005929567385464907,-0.039374615997076035,0.19975431263446808,0.11845667660236359,-0.05259939283132553,-0.21103298664093018,-0.04530826583504677,0.00556808989495039,0.005405085161328316,0.23845387995243073,0.011797399260103703,-0.015305614098906517,0.23232460021972656,0.06323905289173126,-0.22207608819007874,-0.06212987005710602,-0.04049266129732132,-0.05383910611271858,0.1910918802022934,0.12856939435005188,-0.028429165482521057,0.145022913813591,-0.04145115241408348,0.024984300136566162,0.12042663991451263,-0.12416624277830124,-0.10514847934246063,0.04572800174355507,-0.06454823166131973,0.13547851145267487,0.12416153401136398,-0.11077923327684402,-0.0064981672912836075,-0.1738298535346985,0.23313112556934357,-0.3246431350708008,-0.18317539989948273,0.16805748641490936,-0.009313142858445644,-0.05862168222665787,-0.15982848405838013,-0.1966131329536438,0.04135391116142273,0.023020457476377487,0.02376803196966648,-0.31333357095718384,-0.27351948618888855,-0.3620099425315857,-0.1393374502658844,0.15892986953258514,-0.05844488739967346,0.08016589283943176,0.1778625249862671,-0.20545423030853271,0.11122198402881622,0.14329244196414948,0.14972877502441406,0.16185425221920013,0.055109258741140366,0.06972568482160568,-0.07958313077688217,0.09922094643115997,0.028748944401741028,-0.07773280888795853,0.03182997182011604,0.11338040232658386,-0.3804742395877838,-0.5887429118156433,-0.2092873752117157,-0.35703280568122864,-0.32754847407341003,-0.08616689592599869,-0.5247213244438171,-0.8523477911949158,-0.627604603767395,-0.37876075506210327,-0.3936659097671509,-0.24811579287052155,-0.19026271998882294,-0.10393264144659042,0.06790988892316818,0.026923956349492073,-0.09866458922624588,0.16409704089164734,-0.13742727041244507,-0.14964903891086578,-0.12667718529701233,-0.1292397826910019,-0.1682642549276352,-0.007514351978898048,-0.1539146900177002,-0.2199208289384842,0.09161383658647537,-0.0643196776509285,-0.7057762742042542,-0.025050610303878784,0.2807314991950989,0.4461515247821808,0.012535220943391323,-0.2580126225948334,-0.004638041369616985,-0.4973023533821106,-0.31986168026924133,-0.14811497926712036,0.2088036984205246,-0.11811666935682297,-0.36366528272628784,-0.21102674305438995,-0.1737678200006485,-0.12083350867033005,-0.21248607337474823,0.08489681035280228,-0.06495548039674759,0.1168956607580185,0.13234516978263855,0.03733115643262863,-0.1030043363571167,0.08682466298341751,-0.14833426475524902,-0.08781223744153976,-0.38522574305534363,-0.30688145756721497,0.15184548497200012,0.4163263142108917,0.03472445532679558,0.08456137776374817,0.3414674401283264,0.1023826152086258,0.7052040100097656,0.6854060888290405,0.18437521159648895,-0.29632413387298584,0.061716433614492416,-0.47518518567085266,-0.6703362464904785,-0.2479899674654007,-0.3006970286369324,-0.18291078507900238,0.10487320274114609,0.18607862293720245,0.026842838153243065,0.07389860600233078,-0.19472725689411163,-0.1029406264424324,-0.1219780445098877,-0.056766752153635025,-0.47529205679893494,0.12118153274059296,-0.008491485379636288,-0.1610724776983261,-0.05280611291527748,-0.7347571849822998,-0.8009085655212402,0.4301014542579651,0.5384551286697388,0.03997721150517464,0.436671644449234,0.8978623747825623,0.09195319563150406,-0.2111588567495346,0.6055697202682495,0.07065433263778687,0.014543691650032997,-0.7261647582054138,-0.5094762444496155,-0.21593929827213287,-0.03134642168879509,0.13409970700740814,-0.029925120994448662,-0.11694831401109695,-0.1337721347808838,0.014691833406686783,0.11102321743965149,0.08165314048528671,0.09912330657243729,-0.43285995721817017,-0.2017621099948883,0.39981362223625183,0.1580079048871994,0.018865246325731277,0.1583372801542282,0.1684892177581787,0.579680860042572,0.09199614822864532,-0.2682814300060272,0.22811836004257202,0.5320087671279907,-0.2351067215204239,0.2873361110687256,0.26485538482666016,-0.20125924050807953,-0.9593337774276733,-0.32105085253715515,-0.13496364653110504,0.07872875779867172,0.10420280694961548,0.25217047333717346,0.03733792528510094,-0.11451216042041779,0.24615132808685303,-0.0792412981390953,-0.3375188410282135,0.009905473329126835,-0.21599255502223969,-0.554374098777771,0.16450068354606628,0.6692308187484741,-0.2815548777580261,-0.1288355588912964,0.1319049596786499,1.1630425453186035,0.8595163822174072,0.8291918635368347,0.858799159526825,0.518002986907959,-0.30668720602989197,0.1199384406208992,0.23974035680294037,0.3801686763763428,-0.9785210490226746,-0.6904540061950684,-0.10361992567777634,-0.3436315357685089,-0.09247907251119614,0.20261156558990479,-0.1243884265422821,-0.024781381711363792,0.21225544810295105,-0.11755891889333725,-0.2991849482059479,-0.17189952731132507,-0.16746211051940918,-0.6511194705963135,-0.08466783165931702,-0.07591134309768677,-0.41033074259757996,-0.2010796219110489,0.032397836446762085,-0.25075864791870117,0.6818324327468872,1.3962596654891968,1.3289082050323486,0.5932480692863464,0.5622618794441223,0.14687639474868774,0.010793031193315983,0.19208042323589325,-0.5733842253684998,-0.7107213139533997,-0.27871885895729065,0.08980251103639603,0.1338108777999878,0.07150720059871674,-0.0985386073589325,0.1226530373096466,-0.014500414952635765,-0.12129247188568115,-0.5033130645751953,-0.7205828428268433,0.14012156426906586,-0.2525307536125183,-0.1390189230442047,-0.4459635317325592,-0.3878791630268097,-0.6892235279083252,-0.5095654129981995,-0.3216703534126282,-0.7405703067779541,0.8037673830986023,0.8787059187889099,0.38805967569351196,0.6024201512336731,0.6293439269065857,0.3300900161266327,-0.02255203016102314,-0.16219496726989746,-0.26341113448143005,-0.4301891326904297,0.05810239911079407,0.058400630950927734,-0.14686979353427887,0.125105082988739,0.010454162023961544,-0.22039897739887238,-0.3799852430820465,-0.7182347774505615,-0.6309146881103516,-0.5164982676506042,-0.5160362720489502,-0.31712496280670166,-0.18811805546283722,-0.34847599267959595,-0.2915543019771576,-0.8732544779777527,-1.4113247394561768,-0.535039484500885,0.35244691371917725,0.5959054231643677,-0.04689152166247368,0.24017073214054108,0.30168041586875916,0.5009375810623169,0.10199736803770065,-0.19721382856369019,-0.4417983591556549,-0.3538757264614105,-0.019030284136533737,0.1256713718175888,0.08608292788267136,-0.14348097145557404,0.21592162549495697,-0.31907427310943604,-0.029450036585330963,-0.6823289394378662,-0.48014920949935913,-0.5419391393661499,-0.40189218521118164,-0.746817946434021,-0.864905595779419,0.19168972969055176,-0.20078524947166443,-1.9656654596328735,-1.218042254447937,-0.6126736998558044,-0.02478228323161602,0.7636806964874268,0.41307035088539124,0.1197972372174263,-0.023289460688829422,0.11183752864599228,0.682041585445404,0.4650791585445404,0.16393037140369415,-0.22998476028442383,-0.1067090779542923,-0.0762568935751915,-0.09443338960409164,0.04655619338154793,0.12693935632705688,-0.188218355178833,0.313609778881073,-0.012291652150452137,-0.27976927161216736,-0.3262827396392822,-0.3706345558166504,-0.9461696147918701,-0.1268826723098755,-0.15825198590755463,-1.0641142129898071,-1.2578213214874268,-1.6215286254882812,-1.055757761001587,-0.02385837957262993,0.2346400022506714,-0.2202170044183731,0.30276137590408325,0.20450103282928467,0.5594115257263184,0.048414092510938644,0.06363574415445328,-0.2254849225282669,-0.009858783334493637,-0.04789094999432564,0.10534246265888214,0.17422500252723694,-0.14517749845981598,0.04974314197897911,0.145980566740036,0.4627152979373932,0.23000647127628326,0.2521165907382965,0.21529455482959747,0.004495980683714151,0.034940242767333984,0.0033990347292274237,-0.28984498977661133,-0.11940386891365051,-0.7556567192077637,-0.9495220184326172,-1.4950804710388184,-0.3596568703651428,-0.38127708435058594,-0.19560007750988007,0.357928603887558,-0.27841562032699585,0.349246084690094,-0.1681421548128128,-0.2945910096168518,-0.05594303831458092,0.082529716193676,-0.17935845255851746,0.1726354956626892,-0.0817846730351448,0.273481160402298,0.1332830935716629,0.27604660391807556,0.5645379424095154,-0.07472869753837585,-0.035284124314785004,0.5557079315185547,0.20521703362464905,0.30941373109817505,-0.6324765086174011,-0.33966296911239624,-0.6924886107444763,-1.0303364992141724,-0.9468435645103455,-0.4943455159664154,-0.1580582708120346,-0.03711976855993271,0.11052611470222473,-0.05835533142089844,-0.20640034973621368,-0.056452520191669464,-0.25861117243766785,-0.4045729637145996,0.20796743035316467,0.004235086962580681,0.13809633255004883,0.024333292618393898,-0.14246401190757751,-0.1411016881465912,0.06772912293672562,0.3499348759651184,0.3183116018772125,0.7490109205245972,0.5492426156997681,0.5961366891860962,-0.018669553101062775,0.419312059879303,0.033325500786304474,-0.0506310798227787,-0.8350138068199158,-0.5892483592033386,-0.8425637483596802,-0.2527864873409271,-0.47348764538764954,-0.25979024171829224,0.28307101130485535,-0.047430071979761124,-0.071576789021492,-0.07535037398338318,-0.57818204164505,-0.36289355158805847,0.27124619483947754,0.037675611674785614,0.10948006808757782,-0.045514561235904694,0.114305779337883,-0.04432898014783859,0.20906396210193634,0.5792097449302673,0.26983898878097534,0.4268050193786621,0.4007933735847473,0.32170814275741577,0.4076044261455536,0.4302428364753723,0.3442562520503998,-0.2680242955684662,-1.3272103071212769,-0.5899144411087036,-0.689365029335022,-0.2700272798538208,0.4680285155773163,0.3700448274612427,0.10929827392101288,-0.4543819725513458,-0.35748091340065,0.032893940806388855,-0.2605801522731781,0.13013389706611633,0.6442206501960754,0.08681724220514297,0.013968473300337791,0.055658552795648575,-0.0763435885310173,0.1167067140340805,-0.1194443553686142,0.40764105319976807,0.35403260588645935,0.024990806356072426,0.005432983860373497,0.7662258744239807,0.04753778502345085,0.5486621856689453,0.34092360734939575,-0.5923018455505371,-0.7982315421104431,0.6670024991035461,-0.02299768663942814,0.7394300699234009,-0.05829088017344475,0.4167117178440094,0.8811123967170715,0.44346123933792114,0.3753887414932251,0.26857906579971313,0.2518443763256073,0.9248472452163696,0.9527327418327332,0.25981542468070984,-0.09450463205575943,-0.08760298788547516,-0.2862135171890259,-0.07174893468618393,-0.19043797254562378,0.7845248579978943,0.32747331261634827,-0.08711285144090652,-0.1762583702802658,0.718075692653656,-0.13460104167461395,0.6994730234146118,1.2375088930130005,0.2108166664838791,0.1594802588224411,0.021009476855397224,0.2073822170495987,0.214013934135437,0.4304632544517517,0.20279544591903687,0.02459448203444481,-0.06146824732422829,0.07357223331928253,0.23463289439678192,0.2545293867588043,0.9860837459564209,0.47851765155792236,0.31174230575561523,-0.04280805587768555,-0.29008814692497253,0.15345819294452667,-0.17807702720165253,-0.10102010518312454,0.47770053148269653,0.42227938771247864,0.08109497278928757,0.6682126522064209,0.3286653161048889,-0.05491357296705246,0.15142709016799927,-0.02171023003757,0.21159832179546356,-0.659453809261322,-0.2531227469444275,0.1952468901872635,-0.00753780547529459,0.3148577809333801,-0.2001187801361084,-0.19844593107700348,0.4294111430644989,0.5949586033821106,-0.021337920799851418,0.5693684816360474,1.088655948638916,0.36700350046157837,0.05149764567613602,-0.052143316715955734,-0.01868741773068905,0.1470842808485031,-0.02857348509132862,-0.13797444105148315,0.005346796941012144,0.39975404739379883,-0.2063387632369995,-0.41842857003211975,-0.35957545042037964,0.0028124654199928045,0.34282350540161133,0.3726692199707031,0.4952295124530792,-0.0476372204720974,-0.253861665725708,-0.28876805305480957,-0.529838502407074,-0.7182812690734863,-0.16780772805213928,0.028331389650702477,0.30313366651535034,0.7017172574996948,0.7863054871559143,0.6028417944908142,0.6892985701560974,0.008512021973729134,0.09242001920938492,-0.13864785432815552,0.019388388842344284,0.006640643812716007,-0.13573461771011353,0.12848861515522003,-0.2908002436161041,0.42194801568984985,-0.012360013090074062,-0.23740555346012115,0.34411418437957764,0.2581139802932739,-0.24648672342300415,0.7665483355522156,0.6268476247787476,0.0017758033936843276,-0.19427891075611115,-0.5177232027053833,0.33630815148353577,0.4146117866039276,0.3376293182373047,0.2400819957256317,0.38912805914878845,0.7573717832565308,0.8566514849662781,0.5434404611587524,0.28428441286087036,0.21660465002059937,0.039469603449106216,-0.11570944637060165,-0.06412307173013687,-0.045223694294691086,-0.087177574634552,-0.24035967886447906,-0.1900937706232071,-0.1641983687877655,-0.2918473184108734,-0.32376888394355774,-0.17112857103347778,0.6364412903785706,0.32926660776138306,0.8535111546516418,0.36576372385025024,0.055681925266981125,-0.9392727613449097,-0.26056763529777527,0.49727508425712585,-0.4599692225456238,-0.17888641357421875,0.15474750101566315,0.3917303681373596,0.6764335036277771,0.45971205830574036,0.15269385278224945,0.21790827810764313,0.2044573724269867,-0.02062489464879036,0.22094032168388367,0.005952749401330948,0.1510193794965744,-0.012157834134995937,-0.07638825476169586,0.04687649384140968,-0.22132962942123413,-0.003912212792783976,-0.4598993957042694,-0.13199995458126068,-0.019604891538619995,0.020375581458210945,0.3051237165927887,0.39528974890708923,-0.16188308596611023,-0.24164597690105438,0.0923192948102951,-0.049755219370126724,-0.29744952917099,-0.5613143444061279,-0.01611471176147461,0.12897197902202606,0.14705099165439606,-0.013625619933009148,-0.1644277423620224,-0.05659986659884453,0.20398513972759247,0.14608968794345856,-0.019120989367365837,0.17919793725013733,-0.15392276644706726,-0.05115433409810066,-0.04904947429895401,-0.17537885904312134,-0.07183930277824402,0.037867892533540726,-0.19198621809482574,-0.5783162713050842,-0.30461379885673523,-0.43097013235092163,-0.20859195291996002,-0.2743980586528778,-0.09164747595787048,-0.14336946606636047,-0.00556898582726717,-0.06290610134601593,-0.12024489045143127,-0.19862927496433258,-0.25700801610946655,-0.229078009724617,-0.24063649773597717,0.012226356193423271,-0.06808240711688995,0.15445338189601898,-0.07967635244131088,-0.1117347925901413,0.07401584088802338,0.15141034126281738,-0.08067266643047333,-0.10004934668540955,-0.05838027223944664,-0.07828287035226822,-0.1266116350889206,-0.12235084176063538,-0.05652659758925438,-0.17362698912620544,-0.19740332663059235,0.08214471489191055,-0.2325124591588974,-0.2414759248495102,-0.08176086097955704,0.06982287764549255,-0.03378649055957794,0.16414092481136322,0.14585255086421967,-0.28119349479675293,-0.1755458414554596,-0.19976533949375153,-0.11778723448514938,0.05228189378976822,0.01535097323358059,-0.09332679957151413,-0.1864706128835678,0.18301686644554138,-0.16568885743618011,0.019046936184167862,-0.06846684217453003,-0.17695645987987518,0.1267794817686081,0.11718450486660004,0.053671304136514664,0.14362947642803192,0.10199873149394989,-0.016769684851169586,-0.1603947877883911,-0.12659293413162231,0.026951149106025696,0.0076743485406041145,-0.1442805826663971,-0.015733296051621437,-0.14496839046478271,-0.1631634384393692,0.18245099484920502,0.08099927008152008,0.061174437403678894,0.14152222871780396,0.06811254471540451,-0.17158323526382446,-0.22841529548168182,0.16026143729686737,0.06346427649259567,-0.11878253519535065,-0.11139381676912308],[0.05624648183584213,0.10793676227331161,-0.1377103328704834,-0.10250478237867355,0.12889249622821808,-0.10176907479763031,-0.0954313799738884,-0.13078872859477997,0.03288557380437851,0.12167471647262573,0.10685481876134872,0.13398036360740662,-0.027300845831632614,0.12895183265209198,0.16430871188640594,-0.04029623046517372,-0.04878741502761841,-0.21119403839111328,-0.15364326536655426,0.043563734740018845,-0.113690085709095,0.11304320394992828,-0.2363956868648529,-0.11145195364952087,-0.03215101733803749,-0.13922281563282013,-0.023689493536949158,0.05905577540397644,-0.1632855385541916,0.023850006982684135,-0.025980791077017784,-0.1830900013446808,-0.008286509662866592,-0.12842877209186554,-0.16182394325733185,-0.047009747475385666,0.1580323874950409,0.1722966730594635,0.09633883833885193,0.05213199555873871,-0.014243773184716702,0.09281351417303085,0.08482008427381516,-0.22081582248210907,0.027434078976511955,-0.06816869974136353,-0.004685687832534313,-0.23406776785850525,-0.1404133290052414,0.17344041168689728,0.14687810838222504,0.15758970379829407,-0.026636699214577675,-0.15006673336029053,-0.07347080856561661,-0.1779230386018753,0.11352667957544327,0.18746283650398254,0.1154639795422554,0.04762167111039162,0.017678115516901016,-0.09035028517246246,0.038655076175928116,-0.012904741801321507,0.02832854725420475,0.029552606865763664,-0.10464314371347427,-0.1992117017507553,-0.08113237470388412,0.10704740881919861,-0.060155656188726425,0.11591744422912598,0.04826560243964195,-0.06473939120769501,0.08350545912981033,-0.11880655586719513,-0.05784173682332039,0.18301329016685486,0.015001553110778332,0.113100066781044,-0.14690247178077698,-0.04161018878221512,0.022581806406378746,0.06391239911317825,-0.053189296275377274,0.1933852732181549,0.025011172518134117,0.07080640643835068,-0.01535762194544077,0.0476267971098423,-0.10944026708602905,0.09151377528905869,0.044636260718107224,0.03370514139533043,-0.31827300786972046,-0.4984167516231537,-0.3191238045692444,-0.6424590349197388,-0.3963536322116852,-0.10048256814479828,-0.551065981388092,-0.0974181666970253,-0.23412534594535828,0.051743652671575546,-0.22962887585163116,-0.016832774505019188,-0.021038854494690895,-0.12072515487670898,-0.19236989319324493,0.10530626028776169,0.04700035974383354,0.1763080358505249,-0.13025572896003723,0.1454850435256958,-0.09439919888973236,-0.09251634776592255,-0.08298960328102112,0.1998244822025299,-0.14940762519836426,-0.016693688929080963,-0.4358905851840973,-0.16915211081504822,-0.258228063583374,-0.2048627883195877,-0.08748818188905716,-0.12129358947277069,-0.14849108457565308,0.10540186613798141,-0.033662132918834686,0.0381845161318779,0.0680539682507515,-0.02633935585618019,-0.12009762972593307,-0.14505605399608612,0.1830383539199829,-0.007944595068693161,-0.127602681517601,-0.011085936799645424,-0.13885830342769623,-0.06846040487289429,0.14708805084228516,0.1269453912973404,0.1247292011976242,-0.13783687353134155,0.2837742567062378,-0.10821854323148727,-0.05120735988020897,-0.24830345809459686,-0.0893445611000061,0.31237587332725525,0.278855562210083,0.026169078424572945,0.28865668177604675,-0.29512202739715576,-0.165461465716362,0.08762585371732712,0.0932139903306961,-0.10190943628549576,-0.39200156927108765,-0.1711016446352005,-0.21750472486019135,0.03406728059053421,-0.26000580191612244,-0.0012930146185681224,-0.0001329292426817119,-0.09372898936271667,-0.11784296482801437,0.023485589772462845,0.1978372484445572,-0.16333456337451935,0.18749788403511047,0.10337390750646591,0.2813267111778259,-0.10786015540361404,0.018965348601341248,0.0735163688659668,0.5603764653205872,0.06113199144601822,0.06288956850767136,0.36144396662712097,0.6069386005401611,-0.28007379174232483,-0.6016215085983276,-0.7910118699073792,-0.43755170702934265,-0.12413766980171204,0.07808703929185867,0.18596214056015015,-0.09896580874919891,-0.02576388604938984,0.08471106737852097,-0.22887232899665833,-0.11375193297863007,-0.08527196943759918,0.15197840332984924,0.022984515875577927,-0.1092425137758255,0.22956575453281403,-0.016264330595731735,-0.16711030900478363,0.22487172484397888,0.1612912267446518,0.526509165763855,0.7978549003601074,0.4689965844154358,0.7451092600822449,0.3338758945465088,0.22512952983379364,-0.11175807565450668,-0.6401976346969604,-1.0701651573181152,-0.7694368958473206,0.09388433396816254,-0.36261847615242004,0.06500066816806793,0.3641650080680847,0.5415784120559692,0.46066346764564514,0.10231165587902069,0.12575706839561462,-0.0008556664688512683,0.10156799852848053,-0.0063978214748203754,-0.014950312674045563,0.08545584976673126,-0.09810996055603027,0.26661616563796997,0.3983957767486572,0.06955965608358383,0.8562940359115601,0.5092287659645081,0.35795027017593384,0.2895733118057251,0.4056842625141144,0.9006707668304443,0.25575828552246094,-0.2591255307197571,-0.0547468401491642,-0.016358939930796623,0.00475719990208745,-0.018271667882800102,-0.017161725088953972,0.490403413772583,0.5885717272758484,0.13319943845272064,0.2910104990005493,0.4206724762916565,-0.028288263827562332,-0.16443856060504913,-0.24932809174060822,-0.054987914860248566,0.03420132398605347,0.15060800313949585,0.23007597029209137,0.1952420473098755,0.5599927306175232,0.4457567632198334,0.7364534735679626,0.5936155319213867,0.4274112582206726,0.42569994926452637,0.37991973757743835,0.4278810918331146,-0.19835110008716583,0.3888983428478241,0.20265161991119385,0.10541152209043503,-0.06600727885961533,0.6660012006759644,0.5804274678230286,0.6245934367179871,0.619580090045929,0.04087906703352928,0.44134560227394104,0.32257080078125,-0.3576231598854065,-0.214767187833786,0.0015880820574238896,-0.12116286903619766,0.13444045186042786,-0.1440807431936264,0.029212292283773422,0.3782372772693634,0.2601940333843231,0.18521711230278015,0.6202232241630554,0.6045089960098267,0.628480851650238,-0.13938067853450775,0.5117900371551514,0.4900711476802826,0.4534895122051239,0.7344621419906616,0.5164268016815186,-0.2640781104564667,-0.05794694274663925,0.3023720979690552,0.46898701786994934,-0.03077751025557518,0.026642687618732452,0.3699935972690582,0.3262934386730194,0.2577071785926819,-0.08258083462715149,0.007685265503823757,-0.16343049705028534,0.16807346045970917,-0.01147027499973774,0.19945167005062103,0.01286471076309681,0.3377152681350708,0.3374664783477783,0.12086701393127441,-0.15764404833316803,-0.091311015188694,0.5541717410087585,-0.34907519817352295,0.5803648233413696,0.35920199751853943,0.5783935785293579,-0.2201778143644333,-0.8324143290519714,-1.4192872047424316,-0.3845158815383911,0.4329519271850586,0.5158298015594482,0.017380686476826668,0.43143853545188904,0.1156058982014656,-0.1198510080575943,-0.2683044373989105,-0.36196038126945496,-0.05398367717862129,-0.07900240272283554,-0.14977383613586426,-0.05279974266886711,0.08247901499271393,0.19371215999126434,0.3403053879737854,0.35321366786956787,0.018670545890927315,-0.19854024052619934,-0.2696741819381714,0.30260977149009705,-0.227361798286438,-0.385586142539978,-0.2238282859325409,0.7950126528739929,-0.3444628119468689,-1.5088058710098267,-2.044435501098633,-0.048910222947597504,0.21836145222187042,0.15367890894412994,-0.29061654210090637,-0.429353803396225,-0.24515491724014282,-0.49515870213508606,-0.488583505153656,-0.4660674035549164,-0.4250751733779907,0.00899596605449915,0.17341764271259308,-0.059474311769008636,0.1679227501153946,-0.0007683990988880396,0.15923388302326202,-0.005471613723784685,0.08188818395137787,0.04757510870695114,-0.0998646542429924,0.13769802451133728,0.586057186126709,0.029782896861433983,-0.1502140909433365,-0.020285993814468384,-1.0245810747146606,-1.5810543298721313,-1.2199815511703491,-0.8172500133514404,-0.027709780260920525,0.17441771924495697,-0.4871165156364441,-0.6520721912384033,-0.7446658611297607,-0.6844985485076904,-0.4084325134754181,-0.7436863780021667,-0.31192049384117126,-0.1370842605829239,0.15523815155029297,0.060587480664253235,0.14753802120685577,0.14973030984401703,0.27655524015426636,-0.15166053175926208,0.21226061880588531,-0.12538191676139832,-0.5504381060600281,-0.06795378029346466,-0.2617500126361847,-0.22170022130012512,-0.6248827576637268,-0.8377168774604797,-1.3599858283996582,-1.3103266954421997,-0.9770259261131287,0.2520297169685364,0.45777449011802673,0.5095107555389404,-0.20193229615688324,0.909311056137085,-0.34326261281967163,0.006102684419602156,0.17285344004631042,-0.29125863313674927,-0.30635038018226624,0.03481549769639969,-0.19606351852416992,-0.06437932699918747,0.09691278636455536,-0.01967913657426834,0.25011008977890015,0.09203001111745834,0.21388603746891022,-0.0077842529863119125,-0.44444477558135986,-0.5614725351333618,-0.4608176648616791,-0.25225749611854553,-0.8202816843986511,-1.057227611541748,-1.9874728918075562,-0.7351391315460205,0.11916299164295197,0.1566764861345291,0.011705287732183933,-0.024640927091240883,0.6995223760604858,0.48153507709503174,0.3653334081172943,-0.0017296966398134828,0.2393438071012497,-0.12012531608343124,0.09836830198764801,-0.1393258422613144,0.052787043154239655,-0.072496198117733,-0.19064493477344513,0.17752446234226227,-0.13365568220615387,0.16888123750686646,0.15066275000572205,-0.6187853217124939,-0.35197702050209045,-0.3678654730319977,-0.6967167854309082,-0.27246662974357605,-0.7675430774688721,-1.403029441833496,-1.240152359008789,-0.5566480159759521,-0.18835163116455078,0.5430298447608948,-0.09311658143997192,-0.11467977613210678,0.14932121336460114,0.3462611734867096,0.36166831851005554,0.47027963399887085,0.11959731578826904,-0.07014886289834976,0.3899780511856079,0.24690809845924377,0.07772980630397797,0.09880435466766357,0.032893113791942596,0.050661973655223846,-0.07016724348068237,0.07823141664266586,-0.3168909251689911,-0.4761243760585785,-0.6709461212158203,-0.6486417651176453,-0.616179883480072,-0.771352231502533,-1.150352954864502,-0.21626849472522736,-0.4194662570953369,-0.489804208278656,-0.251442015171051,0.31592756509780884,-0.2731359302997589,0.021877065300941467,0.1438826620578766,0.29316219687461853,0.2605867087841034,0.1536007523536682,0.0942654237151146,0.31624236702919006,0.18097804486751556,0.2842797636985779,0.15679065883159637,-0.12509965896606445,-0.15680363774299622,-0.029848139733076096,-0.06141497567296028,-0.035210177302360535,-0.4818142354488373,-0.8468042612075806,-0.8765321969985962,-0.3693406581878662,-0.5820075869560242,-0.6944958567619324,-0.3246571719646454,0.26734650135040283,-0.3635232746601105,0.315871924161911,0.12450716644525528,-0.4224584698677063,-0.12554781138896942,-0.18422633409500122,-0.19823133945465088,-0.20293715596199036,-0.5561404228210449,-0.36281487345695496,-0.08777299523353577,0.03790196403861046,0.4232850670814514,-0.00006705574196530506,-0.1272483468055725,-0.15653403103351593,-0.1478937715291977,0.014928705990314484,0.18859726190567017,-0.026153670623898506,-0.29645052552223206,-0.6289804577827454,-0.8154041171073914,-0.683933436870575,-0.36518755555152893,-0.5189346671104431,-0.3372002840042114,0.10951092094182968,0.17988468706607819,0.6702755689620972,-0.057624563574790955,-0.1432495415210724,-0.2450038343667984,-0.21166163682937622,-0.7212116718292236,-0.5609942674636841,-0.3899460732936859,-0.48720115423202515,-0.47493216395378113,0.15749727189540863,0.3033216595649719,0.1473482847213745,0.1659766435623169,0.18693092465400696,-0.013021068647503853,-0.1334111988544464,0.1489230990409851,0.10745655745267868,-0.25670909881591797,-0.2311943620443344,-0.5328460335731506,-0.4834132492542267,-0.08144181966781616,-0.46682894229888916,0.3998168408870697,0.5220552682876587,0.8949316740036011,0.13967454433441162,0.19520138204097748,0.34087276458740234,-0.4979976415634155,-0.4356207251548767,-0.4273715019226074,-0.25486692786216736,-0.33321094512939453,-0.6135280728340149,-0.19523663818836212,0.27971258759498596,0.15552814304828644,-0.052625253796577454,0.08868232369422913,0.04963422939181328,0.028780892491340637,-0.08726273477077484,-0.1383916288614273,-0.2567308843135834,0.07977580279111862,-0.2270679771900177,-0.24235661327838898,0.10350869596004486,-0.3658842146396637,-0.41131097078323364,0.542521059513092,0.5954367518424988,0.09397590160369873,-0.019202210009098053,-0.37707459926605225,0.5051600933074951,-0.33133044838905334,-0.10512328147888184,0.28673335909843445,0.3553135395050049,-0.2484551966190338,-0.2198437750339508,0.10964982956647873,0.31135842204093933,0.19367855787277222,-0.036045994609594345,-0.0462690107524395,0.09356939047574997,-0.009534304961562157,0.06154216080904007,0.14592427015304565,-0.0861227884888649,-0.0071578980423510075,0.23115484416484833,0.48239725828170776,0.2539121210575104,0.1837267428636551,-0.12558172643184662,-0.06855938583612442,-0.22848623991012573,-0.2846117913722992,0.5003990530967712,0.49276816844940186,0.41797614097595215,-0.45582103729248047,-0.12876416742801666,0.058898184448480606,0.1648574024438858,-0.2601146697998047,0.08407402038574219,0.0828389823436737,-0.1206621304154396,0.019352883100509644,-0.06864303350448608,-0.17113985121250153,0.14411216974258423,0.13118916749954224,0.12821778655052185,-0.17296801507472992,-0.09390802681446075,-0.08956851065158844,0.4378586709499359,0.503289520740509,0.29368072748184204,-0.19472631812095642,-0.15251323580741882,-0.08058276027441025,-0.275899201631546,-0.2073986977338791,0.40928754210472107,-0.01780826412141323,0.17331065237522125,-0.26181140542030334,-0.1633082926273346,-0.002122731413692236,0.14154896140098572,-0.288442462682724,-0.06755086034536362,-0.32642030715942383,-0.315463125705719,0.014102340675890446,-0.034584082663059235,-0.05840063467621803,0.2010723203420639,-0.005446473136544228,-0.17568008601665497,0.1076381579041481,-0.011690248735249043,-0.17013634741306305,0.473486065864563,0.3089563846588135,-0.23684009909629822,-0.5903670191764832,0.19636750221252441,0.10471142828464508,-0.08592404425144196,-0.4186524450778961,0.11847960203886032,-0.05559886246919632,0.19987666606903076,-0.015555131249129772,-0.3805529773235321,-0.1436474323272705,-0.055236537009477615,-0.3942839503288269,0.12335590273141861,-0.05796409398317337,-0.2160981446504593,0.22225064039230347,0.10618312656879425,0.07017899304628372,0.020779157057404518,-0.08203864842653275,-0.17323577404022217,0.11818314343690872,0.1651766300201416,-0.034101009368896484,-0.025050334632396698,-0.4443609416484833,-0.3511258661746979,0.22023899853229523,-0.09605961292982101,0.05277404934167862,0.6062095761299133,0.09168516844511032,-0.2950631380081177,0.27805468440055847,0.6206026077270508,-0.002260542009025812,0.27955520153045654,0.16069675981998444,-0.27646318078041077,-0.190217062830925,-0.27520185708999634,0.07877955585718155,-0.35037434101104736,-0.05839509144425392,-0.11735185235738754,0.03526678308844566,-0.09175248444080353,0.016804074868559837,-0.1297791749238968,-0.008311699144542217,-0.024204162880778313,-0.23418502509593964,-0.033502206206321716,-0.1752808392047882,-0.1474904865026474,-0.38803696632385254,-0.08692068606615067,-0.08040042966604233,0.13448111712932587,-0.42594191431999207,-0.251279354095459,-0.0510580912232399,-0.34396791458129883,-0.0498485304415226,0.1764429360628128,0.4414561986923218,0.3803366422653198,0.0180668942630291,-0.13359664380550385,0.12327776104211807,0.0068018012680113316,-0.054901473224163055,0.02023451402783394,-0.16432389616966248,0.08829807490110397,-0.08450920134782791,-0.029349155724048615,0.03963801637291908,0.08308272063732147,0.03305894508957863,-0.027661805972456932,0.11765356361865997,-0.112179696559906,0.04934915155172348,-0.1340649127960205,-0.013629102148115635,-0.0782582238316536,-0.021166900172829628,0.35015392303466797,0.3582110106945038,0.023621514439582825,0.0944918766617775,-0.019479485228657722,0.04928513243794441,0.0789112076163292,0.1988869458436966,-0.007883484475314617,0.1410636007785797,-0.06298698484897614,-0.19657684862613678,0.06487765908241272,0.12009836733341217,-0.18112832307815552],[-0.09482015669345856,-0.12971675395965576,-0.21678641438484192,0.11209258437156677,-0.03988958150148392,-0.1298254132270813,0.1597331464290619,0.053220897912979126,0.19422757625579834,-0.25669804215431213,0.10033368319272995,0.05891875922679901,-0.019670773297548294,0.09540017694234848,-0.029759444296360016,-0.17977523803710938,-0.1265600472688675,0.002530142432078719,-0.11246054619550705,0.020692821592092514,-0.07689017802476883,0.12271101027727127,0.1823122501373291,-0.12532074749469757,0.04122829809784889,-0.0818980410695076,-0.08727779239416122,0.048137366771698,-0.1161891296505928,-0.19144079089164734,0.15546368062496185,0.09902846068143845,0.14461135864257812,-0.09334184974431992,-0.1632121205329895,-0.17988860607147217,-0.16070914268493652,-0.23741964995861053,-0.019580325111746788,-0.2058199942111969,-0.24022535979747772,-0.01725526712834835,-0.21044766902923584,0.16735534369945526,-0.004576663952320814,-0.11899439245462418,-0.004066229332238436,0.09961723536252975,0.07541118562221527,-0.08669396489858627,0.06575064361095428,-0.14530901610851288,0.13251961767673492,-0.178537055850029,0.049335259944200516,0.09322161227464676,0.16754455864429474,0.13519178330898285,-0.0010873435530811548,-0.15474531054496765,-0.05557917058467865,-0.08952055871486664,0.205675408244133,0.15869121253490448,0.09247049689292908,0.02371109090745449,-0.20336663722991943,-0.25093990564346313,-0.4202852249145508,-0.06820398569107056,-0.3018466830253601,-0.05199326574802399,0.0031841762829571962,0.20950230956077576,-0.03693035617470741,0.015942353755235672,-0.17039908468723297,0.06504208594560623,0.059016283601522446,0.04513920098543167,0.16169919073581696,-0.015464888885617256,-0.03707365691661835,0.10450981557369232,0.20134595036506653,-0.03749905899167061,0.039107952266931534,-0.07526107877492905,-0.1652008295059204,-0.13284768164157867,0.03150466829538345,-0.04571275785565376,-0.2693210244178772,-0.061593152582645416,-0.36790531873703003,-0.19947606325149536,-0.5985268354415894,-0.4427066445350647,-0.7401369214057922,-0.7351233959197998,-0.4171200394630432,-0.0992484912276268,-0.21018114686012268,-0.5935705304145813,-0.5471407771110535,-0.09292604774236679,0.0031651128083467484,0.1358427107334137,-0.28060418367385864,0.14074541628360748,-0.014284923672676086,-0.0266962181776762,0.15169070661067963,-0.09572841227054596,0.22805336117744446,0.007666294928640127,0.2111605852842331,-0.2133798450231552,0.20478343963623047,-0.05045492202043533,-0.08355919271707535,-0.27081456780433655,-0.13464149832725525,0.12905673682689667,-0.08829405903816223,0.022313598543405533,-0.021133452653884888,-0.24543561041355133,-0.35190507769584656,-0.44435253739356995,-0.2982950210571289,-0.10751558840274811,-0.024717235937714577,-0.38660040497779846,0.15353600680828094,0.0006730717141181231,-0.12007861584424973,0.12012232840061188,0.12944120168685913,0.1583072394132614,-0.06685134023427963,0.14879220724105835,0.018544452264904976,0.1297515332698822,-0.12352495640516281,0.22493059933185577,-0.026373518630862236,-0.24790999293327332,-0.7489063143730164,-0.7922890186309814,-0.6936136484146118,0.07401015609502792,0.42806491255760193,0.6641871929168701,0.015058917924761772,0.07063988596200943,-0.10937368869781494,0.35085463523864746,0.2714090943336487,-0.1426527202129364,0.061365216970443726,-0.12207717448472977,-0.03290126845240593,-0.3804760277271271,-0.5183375477790833,-0.07963012903928757,0.15178202092647552,-0.020042866468429565,0.19063405692577362,0.18022537231445312,0.1491837501525879,0.05657085403800011,-0.03737838938832283,0.06591246277093887,-0.1376323699951172,-0.5143004059791565,-0.8326291441917419,0.02772274985909462,-0.010557915084064007,-0.12868627905845642,0.26763904094696045,-0.025282761082053185,-0.057089243084192276,-0.22439196705818176,0.601978600025177,0.41712602972984314,-0.3068732023239136,-0.1928652673959732,-0.10723654925823212,0.3897414803504944,0.026600083336234093,-0.5612999796867371,-0.5469142198562622,-0.08604113757610321,0.037562668323516846,-0.0066603790037333965,0.01590672880411148,0.07032870501279831,0.06669590622186661,0.1501452624797821,0.5835434198379517,0.35211294889450073,-0.07140320539474487,-0.3501949906349182,0.4137100577354431,-0.20814946293830872,-0.20523247122764587,-0.8544415831565857,-0.25676706433296204,0.2861286997795105,-0.019742202013731003,0.23509667813777924,-0.6346708536148071,-0.20451520383358002,0.15363150835037231,0.008635732345283031,0.2335008680820465,0.4217472970485687,-0.077607661485672,-0.2536270320415497,-0.1003396213054657,0.18284228444099426,-0.1260865479707718,-0.15552207827568054,-0.15671902894973755,0.11961684376001358,0.07160463184118271,0.06970946490764618,0.30370694398880005,0.182872012257576,0.4685107171535492,0.7657601237297058,0.2126045823097229,0.290995329618454,0.22350458800792694,0.3262477517127991,-0.0788111686706543,0.20710152387619019,0.1790453940629959,0.0638384148478508,-0.4858638048171997,0.05074946954846382,0.6406573057174683,0.1746961623430252,-0.5344244241714478,-0.28329357504844666,0.28466475009918213,-0.7073565125465393,-0.8443641066551208,-0.1289074420928955,-0.14203587174415588,0.13803017139434814,-0.12105724215507507,0.10010309517383575,0.18767446279525757,-0.15832988917827606,0.48469048738479614,0.6273472309112549,1.068146824836731,1.2855076789855957,0.8453081846237183,0.41294968128204346,0.26928550004959106,0.784396767616272,-0.07044094800949097,-0.20124731957912445,-0.751242995262146,-0.013406808488070965,0.7827292680740356,1.1285011768341064,0.07241443544626236,0.2537655532360077,-0.0886760950088501,0.28487852215766907,0.3737981617450714,-0.9018564224243164,-1.101788878440857,-0.7370438575744629,-0.14968854188919067,-0.19957461953163147,0.20993554592132568,0.17327404022216797,-0.11675162613391876,-0.03512216731905937,0.2679779529571533,0.49866077303886414,0.7908238172531128,0.4747992157936096,1.1444967985153198,0.16909079253673553,0.014500223100185394,0.5884979963302612,-0.27748391032218933,-1.2307695150375366,-0.8125104904174805,0.3259206712245941,0.8896210193634033,0.06430196017026901,0.9869264364242554,1.3706986904144287,0.03793424740433693,0.4628487229347229,0.6597811579704285,-0.6340076327323914,-0.6211268305778503,-0.2517569065093994,-0.060048289597034454,-0.16339658200740814,0.07071077078580856,0.030325736850500107,0.2283218652009964,0.01473955437541008,0.3932449221611023,0.19649523496627808,0.36168909072875977,-0.0451907180249691,0.4483514130115509,0.7715959548950195,-0.029513392597436905,-0.16812051832675934,-0.598819375038147,-1.1586716175079346,0.2199898213148117,0.8916381597518921,0.5052176713943481,0.45382121205329895,0.9707238674163818,0.32462799549102783,1.0444998741149902,0.9387573599815369,0.673801064491272,-0.23273512721061707,-0.3742307722568512,-0.09129143506288528,-0.08960698544979095,-0.0640961155295372,-0.014775470830500126,0.09434643387794495,0.2058648020029068,0.3241802453994751,0.2102782279253006,0.1534685492515564,-0.30751675367355347,-0.11205238103866577,-0.8967792391777039,-0.7085901498794556,-1.0030980110168457,-0.8565872311592102,-0.5831789970397949,-0.4279254674911499,0.896894633769989,0.6844438910484314,0.4038882851600647,0.8182542324066162,0.36900219321250916,1.034475564956665,0.7446541786193848,0.5771055817604065,0.48545411229133606,0.490714430809021,0.3005269765853882,0.02756638638675213,0.2164766937494278,0.01722429320216179,0.05880638584494591,0.14564771950244904,-0.1599770486354828,-0.0793270394206047,0.04674500972032547,-0.34316879510879517,-0.49187546968460083,-0.4709722101688385,-0.3595011532306671,-0.39717981219291687,-0.7610481381416321,-0.277583509683609,0.19902701675891876,0.21101060509681702,0.3019026517868042,0.9907065033912659,0.5591859221458435,0.5455642342567444,0.501448929309845,0.9920853972434998,0.6158262491226196,0.1266024261713028,0.36315619945526123,-0.11956937611103058,-0.21298855543136597,0.033696264028549194,-0.1561620533466339,-0.16650260984897614,0.01155930943787098,0.015109576284885406,-0.02483562007546425,-0.051594141870737076,-0.19980180263519287,-0.7570598721504211,-0.4813063144683838,-0.6120982766151428,-0.7118796110153198,-0.8840788006782532,-0.198678657412529,0.23882146179676056,0.21032878756523132,0.9129977822303772,0.956849992275238,0.7164010405540466,0.822084903717041,0.8914139866828918,1.0149871110916138,0.8965094089508057,-0.2827828824520111,0.003068340476602316,-0.5689728856086731,-0.5544480085372925,-0.1582871526479721,0.20432129502296448,-0.1511174887418747,-0.07005967199802399,0.20801977813243866,0.038361579179763794,0.19886143505573273,-0.002570139477029443,-0.01391327939927578,-0.6225622892379761,-0.32570672035217285,-0.8160226345062256,-0.14948321878910065,-0.645512044429779,-0.29277703166007996,0.2926397919654846,0.169049933552742,0.5076556205749512,0.03822188079357147,0.1525379717350006,0.6394265294075012,0.07755853235721588,-0.3895510137081146,-0.39399510622024536,-0.8882394433021545,-0.5949501991271973,-1.1223385334014893,-1.0221848487854004,-0.3638528287410736,-0.03570367768406868,0.09083099663257599,0.14863193035125732,0.16344045102596283,-0.25621268153190613,0.0677497610449791,0.12941314280033112,0.0552937313914299,-0.25378167629241943,-0.18972593545913696,-0.7541674971580505,0.9443116188049316,0.20246995985507965,0.6159487366676331,0.3355758488178253,0.4955064058303833,0.6970537304878235,0.529229462146759,0.40673166513442993,0.6160767674446106,0.27630043029785156,0.03575187548995018,-0.900925874710083,-1.211601972579956,-0.4190201461315155,-0.7011952996253967,-0.3546845316886902,0.13778582215309143,0.42074939608573914,0.03273748978972435,0.07136214524507523,-0.024227820336818695,0.03138769790530205,-0.07874534279108047,0.15394051373004913,0.03006245754659176,-0.34900644421577454,-0.2545444667339325,-0.10254709422588348,0.7377446889877319,-0.341094970703125,0.061658866703510284,0.3492596447467804,0.7430136203765869,0.8726832866668701,0.4887499511241913,-0.0407281219959259,0.3503549098968506,0.014075536280870438,-0.4077621102333069,-0.5383382439613342,-0.7674492597579956,-0.15854237973690033,-0.4780904948711395,-0.20118781924247742,0.5770719647407532,0.4237056374549866,-0.05426555499434471,0.041940849274396896,0.09634838253259659,-0.05611194297671318,-0.20266319811344147,0.2232198715209961,-0.0657007098197937,-0.3376072943210602,-0.5963342189788818,-0.054867781698703766,0.005199583247303963,-0.10974680632352829,-0.26555344462394714,0.7812058925628662,0.4464997351169586,0.6786715388298035,0.13855256140232086,-0.13918064534664154,-0.6398739814758301,-0.4971165060997009,-0.7322604656219482,-0.17366226017475128,-0.6313522458076477,-0.3429010808467865,-0.2565802335739136,-0.08985470980405807,0.39811477065086365,0.20311351120471954,-0.06228053942322731,0.21103167533874512,0.06772144138813019,-0.07979560643434525,-0.16249480843544006,0.18856558203697205,-0.4227713644504547,-0.19921326637268066,-0.4574776887893677,-0.0008838766370899975,0.06529203057289124,0.24884386360645294,-0.42402735352516174,-0.24697214365005493,-0.15131615102291107,-0.7604909539222717,-0.5866115093231201,-0.669942319393158,-0.7597224116325378,-0.2107248306274414,-0.3430832326412201,-0.733687162399292,-0.0806339830160141,-0.15273725986480713,0.0015776049112901092,0.18846389651298523,0.23230509459972382,-0.06692579388618469,-0.06305684894323349,0.061617206782102585,-0.05361128970980644,-0.19502604007720947,-0.05907269939780235,0.33496952056884766,0.006540622562170029,-0.3985154628753662,0.23908616602420807,-0.2143508940935135,-0.09397516399621964,-0.4421038329601288,-0.6125966310501099,-0.6774305105209351,-0.7796066999435425,-0.22613856196403503,-0.654582679271698,-0.45825478434562683,-0.9121445417404175,-0.44676676392555237,-0.065184585750103,-0.29801514744758606,0.21734926104545593,-0.1930372267961502,-0.26596134901046753,0.17051959037780762,0.21371056139469147,0.18658876419067383,0.12867550551891327,0.11020025610923767,-0.06441900879144669,-0.1778654307126999,-0.26110169291496277,-0.0324457548558712,0.1359974890947342,0.014493511989712715,0.28014707565307617,0.213438481092453,-0.008008409291505814,-0.018974807113409042,-0.022254208102822304,-0.28268787264823914,0.01797488145530224,-0.26136934757232666,-0.4405863881111145,-0.11411544680595398,0.008803273551166058,-0.6081892251968384,-0.6571400761604309,-0.05136071518063545,0.08896318823099136,-0.5718954801559448,0.024641022086143494,0.19509856402873993,0.21354243159294128,0.27263715863227844,0.09348498284816742,-0.13438904285430908,0.06718526780605316,0.07789638638496399,0.08433909714221954,0.352710098028183,0.2245597243309021,0.04076710715889931,0.22843453288078308,0.04896766319870949,0.14813072979450226,-0.4785304665565491,0.2971486449241638,-0.5508926510810852,-0.3791082799434662,0.044778332114219666,0.16656166315078735,0.17447663843631744,-0.427859902381897,-0.15179182589054108,-0.202580526471138,-0.005100297275930643,0.021756067872047424,0.02923394925892353,0.00794997438788414,-0.0313052162528038,0.19636176526546478,0.09784451127052307,0.004306316375732422,-0.11454548686742783,-0.027013901621103287,-0.24547740817070007,-0.15195982158184052,0.1090724766254425,-0.34547656774520874,0.09953960031270981,-0.030241740867495537,0.435179203748703,0.2779272794723511,-0.0805589109659195,-0.5059047341346741,0.27243155241012573,0.3477556109428406,-0.11523844301700592,0.06953615695238113,0.35319000482559204,0.2385762482881546,0.0701138898730278,0.4719209671020508,-0.06409845501184464,-0.2236725091934204,0.053978994488716125,0.15446987748146057,-0.048743441700935364,-0.04164188727736473,-0.1742134541273117,0.009279570542275906,-0.14641408622264862,0.14802417159080505,-0.08560041338205338,0.11381971836090088,-0.0035091389436274767,0.07114090770483017,-0.14826171100139618,-0.22071895003318787,-0.22190746665000916,0.04600623622536659,0.0002644859778229147,-0.14478518068790436,-0.5244961380958557,-0.8804113268852234,-0.38903486728668213,-0.455231636762619,-0.4946500062942505,-0.3081476092338562,-0.12989985942840576,-0.17459170520305634,-0.27358609437942505,-0.2572108507156372,-0.14716701209545135,-0.10631071031093597,0.13194483518600464,0.07024051994085312,-0.055446840822696686,0.13116994500160217,-0.15310560166835785,0.14273019134998322,0.01748470589518547,0.020010104402899742,-0.09795305132865906,0.12371442466974258,0.26631465554237366,0.14292317628860474,0.3770003914833069,-0.12265178561210632,0.017715459689497948,-0.2601850628852844,-0.40790367126464844,-0.3396524488925934,-0.24401624500751495,-0.40351614356040955,-0.0759434774518013,-0.4204844832420349,-0.27625206112861633,-0.18682722747325897,-0.10337932407855988,-0.41146838665008545,-0.08274875581264496,-0.035569630563259125,0.018929610028862953,0.09243468940258026,-0.09453780204057693,0.13839605450630188,0.18481478095054626,-0.03870163485407829,-0.07424303889274597,-0.045571208000183105,-0.02049613930284977,0.14889782667160034,-0.1342507004737854,-0.0904085636138916,-0.0827803984284401,0.20384301245212555,-0.003500186838209629,0.3768606185913086,-0.06081885099411011,-0.294817715883255,0.05970153585076332,-0.17075516283512115,-0.03400939702987671,-0.23725080490112305,0.17391864955425262,0.1053670346736908,-0.07261241972446442,-0.022894499823451042,-0.02157902531325817,0.02172737568616867,-0.1747913658618927,-0.0076361289247870445,0.05475039407610893,-0.1324177086353302,0.16107702255249023,0.16774389147758484,-0.16985177993774414,0.1261746883392334,-0.15971986949443817,0.1072777509689331,-0.004722957964986563,0.13963930308818817,0.09661000221967697,0.00163081637583673,0.03269720450043678,-0.07930537313222885,-0.04323265701532364,-0.13957688212394714,-0.12310457229614258,-0.22597642242908478,0.13931222259998322,0.05439983308315277,0.13862428069114685,-0.1150912418961525,0.10326813906431198,0.07743579894304276,0.06705831736326218,0.037263259291648865,-0.015580573119223118,0.19684366881847382,0.07302847504615784,-0.023700496181845665,0.16906790435314178],[0.14135310053825378,-0.16130730509757996,-0.07504741847515106,-0.1544031947851181,-0.19751104712486267,-0.04160957783460617,0.09329187870025635,0.14011357724666595,0.06923014670610428,0.07628607749938965,0.11165043711662292,0.03563418239355087,-0.10126843303442001,-0.2962449789047241,-0.14678391814231873,-0.009066817350685596,-0.10876762866973877,-0.11988022923469543,0.04453347250819206,0.15137730538845062,-0.17431539297103882,-0.10076019912958145,-0.20582698285579681,-0.27248629927635193,0.032274406403303146,-0.05265304073691368,-0.19994457066059113,-0.16807033121585846,0.03340689465403557,0.09320792555809021,-0.009389951825141907,0.11577761918306351,0.039115697145462036,0.02665354683995247,0.08663952350616455,-0.13173945248126984,-0.06259874254465103,-0.25765010714530945,-0.07412867248058319,-0.11064430326223373,-0.24088157713413239,0.1015918105840683,-0.019455552101135254,0.3217529356479645,-0.11287950724363327,-0.25824564695358276,-0.3004700541496277,-0.1787249594926834,-0.3074018359184265,-0.2335335612297058,-0.22513404488563538,-0.1209438219666481,0.11003924161195755,-0.19256281852722168,0.027787594124674797,0.05869671329855919,0.1081978902220726,0.06657417118549347,-0.14844238758087158,0.0774131491780281,0.16544263064861298,0.06930625438690186,-0.12530142068862915,-0.1963486671447754,-0.16144807636737823,-0.2743447721004486,-0.3150830864906311,-0.3879517614841461,-0.24298320710659027,-0.12279129028320312,-0.09065143764019012,0.2540368139743805,-0.06628897041082382,-0.1669028252363205,-0.37437036633491516,-0.10231580585241318,-0.21429865062236786,-0.2211594432592392,-0.24820710718631744,0.01784161478281021,0.00048210113891400397,0.0030057390686124563,0.17923153936862946,-0.1688746213912964,-0.1424977034330368,0.06509049981832504,0.14989884197711945,-0.013628572225570679,0.08132945746183395,-0.12419771403074265,0.059711359441280365,-0.18953414261341095,-0.17011332511901855,-0.13386638462543488,-0.337105393409729,-0.5042718052864075,-0.42414960265159607,-0.49786242842674255,-0.1856471449136734,-0.014402033761143684,-0.3939938247203827,-0.5597996711730957,-0.4581027328968048,-0.37512442469596863,-0.6274641752243042,-0.14944295585155487,0.25556859374046326,0.00394462700933218,0.0836174488067627,0.04778219759464264,-0.08708620071411133,0.12109048664569855,-0.02130461111664772,-0.038446370512247086,-0.1994151473045349,0.14043664932250977,-0.1934257447719574,-0.03149677813053131,-0.14352776110172272,0.10957520455121994,-0.29470396041870117,-0.5094729661941528,-0.6613316535949707,-0.9126958250999451,-0.7081852555274963,-0.4780466854572296,-0.10119226574897766,0.002988181309774518,0.12415388226509094,-0.1453309804201126,-0.1522877961397171,-0.2015099674463272,-0.02892887219786644,0.07783655822277069,0.5543128848075867,0.5267055630683899,0.5963561534881592,0.17884905636310577,0.05687089264392853,0.08083426207304001,0.09944915771484375,-0.04842051491141319,0.15746843814849854,0.01916022226214409,-0.3438508212566376,-0.35611027479171753,-0.3078545928001404,-0.4031262695789337,-0.6655216813087463,-0.7136369943618774,-0.9891310930252075,-0.9946625828742981,-0.9625394344329834,-0.8002318739891052,-1.1598212718963623,-1.6006782054901123,-1.0890045166015625,-1.0084435939788818,-0.7630507946014404,-0.528160810470581,-0.42505699396133423,-0.03623027354478836,0.35346484184265137,-0.05867002159357071,0.09696166217327118,0.11486384272575378,0.076247937977314,-0.13778844475746155,-0.07546522468328476,-0.09074773639440536,-0.1227429211139679,-0.22069844603538513,-0.1151648461818695,0.24629616737365723,-0.1730445772409439,-0.40127310156822205,-0.09990700334310532,-0.19640803337097168,-0.33852818608283997,-0.11162137985229492,-0.1611042022705078,-0.15502677857875824,0.26752644777297974,-0.028055258095264435,-0.01008343230932951,-0.3585253059864044,-0.12508507072925568,-0.16519056260585785,-0.4610719382762909,-0.727939784526825,-0.8106786012649536,-1.0023515224456787,-0.21020807325839996,-0.26397985219955444,0.009655897505581379,-0.035334959626197815,-0.15243715047836304,0.15684960782527924,-0.1611202210187912,0.15150757133960724,-0.018746495246887207,0.090779148042202,-0.20023976266384125,0.3142508268356323,0.16233325004577637,-0.2494518905878067,0.02593419887125492,0.5076714158058167,0.383771687746048,0.30899304151535034,1.0546931028366089,0.6233606338500977,0.6934444308280945,0.8175297975540161,0.20939624309539795,-0.002044632099568844,0.1481393575668335,-0.4021422266960144,-0.5848425030708313,-0.08278672397136688,-0.7200697064399719,-0.49863192439079285,-0.1632775366306305,-0.021404903382062912,-0.06568238139152527,0.027125470340251923,-0.06527325510978699,-0.17216461896896362,-0.2025795876979828,-0.12865358591079712,0.15223786234855652,0.3489893078804016,0.2911268472671509,0.44526243209838867,-0.07331421226263046,0.5134075880050659,0.23995071649551392,0.0609012208878994,0.29388678073883057,0.20715466141700745,0.0477694496512413,0.3805699050426483,-0.26775527000427246,-0.5637273788452148,-0.41600728034973145,-0.28169041872024536,-0.3396953344345093,-0.18453584611415863,-0.6359931826591492,-0.2827529013156891,-0.08570069074630737,0.0075858947820961475,-0.09495648741722107,0.05380409210920334,-0.18811851739883423,0.007717499975115061,0.11320667713880539,-0.10806258022785187,0.39109930396080017,0.3011991083621979,0.02372175082564354,0.20112520456314087,0.1499866247177124,0.12182869017124176,0.6181533932685852,0.758908748626709,0.17394664883613586,0.30546000599861145,0.49328938126564026,0.12584447860717773,-0.2773400843143463,0.3786414563655853,0.4087221324443817,0.04619697481393814,-0.1564621925354004,0.13461823761463165,0.5758699178695679,0.3655391037464142,-0.0343860499560833,-0.09268192946910858,-0.19758886098861694,0.11425144225358963,0.13339856266975403,-0.21607615053653717,0.30746325850486755,0.40687647461891174,0.28824275732040405,-0.467458039522171,-0.47535496950149536,0.3052075207233429,-0.1825738549232483,0.2371632307767868,0.2051411271095276,0.7702457904815674,0.6970191597938538,0.4709312617778778,0.49147745966911316,0.025523418560624123,0.620209276676178,0.3216306269168854,0.8134782910346985,0.16537538170814514,0.03658871352672577,0.06202160567045212,0.6534181833267212,0.3292771577835083,0.1681993007659912,0.07690197229385376,0.06144075468182564,0.04589482396841049,-0.09684427082538605,0.20442070066928864,0.21906626224517822,0.1212456002831459,-0.038409922271966934,0.13017582893371582,0.3805033266544342,0.10830733180046082,0.37424010038375854,-0.052933480590581894,0.640116810798645,1.1809293031692505,0.7485660314559937,0.7014108300209045,0.6111909747123718,0.35311731696128845,0.3982026278972626,0.432943731546402,0.22025161981582642,0.40084511041641235,0.2152204066514969,0.20203915238380432,0.42801767587661743,0.4418730139732361,0.4480861723423004,-0.10801921784877777,-0.15016378462314606,-0.07673836499452591,0.1667017638683319,0.08560576289892197,0.24564120173454285,0.3118021488189697,0.5212867856025696,0.6326630115509033,0.6045398116111755,0.4269026517868042,0.14059916138648987,-0.5798706412315369,-0.14637011289596558,-0.45023655891418457,0.4987505376338959,0.048234131187200546,0.1558689922094345,0.5906386971473694,0.6512718796730042,0.10691208392381668,-0.036583662033081055,-0.1343880146741867,-0.027997000142931938,0.0831436738371849,-0.14553500711917877,0.05031459406018257,0.028651194646954536,0.030234046280384064,0.05255650356411934,0.07035134732723236,0.23721158504486084,0.1801070272922516,0.37656185030937195,-0.19939465820789337,0.20991306006908417,-0.3139221966266632,0.039405737072229385,-0.4993705451488495,-0.5578014850616455,-0.9682335257530212,-0.5850446820259094,-0.13433445990085602,0.16717809438705444,-0.11506206542253494,-0.6130356788635254,-0.5866814255714417,0.03137609362602234,0.4354499280452728,0.217869833111763,-0.162205770611763,-0.2409544438123703,-0.4977189004421234,-0.25380420684814453,0.08100501447916031,0.1579023152589798,-0.021591544151306152,-0.051420506089925766,-0.10201740264892578,0.07409489899873734,0.35962623357772827,0.138080894947052,-0.17285999655723572,-0.24793949723243713,-0.24857784807682037,-0.4399210810661316,-0.5436652898788452,0.21148501336574554,-0.26534831523895264,-0.658222496509552,-0.3171365261077881,0.03451250493526459,-0.2602428197860718,-0.5501332879066467,-0.3248586058616638,-0.14894144237041473,-0.1921195536851883,0.026037776842713356,0.3840462863445282,0.28884223103523254,-0.1877298206090927,-0.13886240124702454,-0.2414451241493225,-0.15725447237491608,0.1621236950159073,-0.07398749887943268,0.07228217273950577,-0.05302631855010986,-0.22617530822753906,0.05697303265333176,0.1859218329191208,0.34997501969337463,0.12314224988222122,0.2734149098396301,-0.40457338094711304,-0.2614886164665222,0.10156138986349106,-0.27353131771087646,-0.3251231014728546,-0.33833757042884827,0.04390003904700279,0.20427367091178894,0.36989885568618774,0.16495110094547272,-0.05743785202503204,0.4107750654220581,0.27433040738105774,-0.25200212001800537,-0.25759363174438477,0.12199699878692627,-0.28480467200279236,-0.17048251628875732,0.21216149628162384,0.10799580812454224,-0.1903831958770752,0.048463188111782074,0.1132013201713562,0.23234528303146362,-0.35448455810546875,-0.3410913646221161,-0.12351939082145691,0.0822083130478859,0.4735267162322998,1.133098840713501,-0.2640873193740845,0.0638597384095192,-0.18079230189323425,-1.1516668796539307,-0.8245902061462402,-0.18241626024246216,-0.3978591859340668,0.04288812726736069,-0.34380069375038147,-1.0340272188186646,-0.7021775841712952,-0.8130536079406738,-0.5555658340454102,-0.36479124426841736,-0.3358498811721802,-0.22831721603870392,0.12405149638652802,-0.051210638135671616,-0.06188445910811424,-0.046338118612766266,0.28787270188331604,-0.04459236189723015,0.06023364141583443,-0.08562648296356201,0.30782684683799744,0.03820400685071945,0.4425552785396576,0.30801084637641907,-0.43207812309265137,-0.45987918972969055,0.05294693633913994,-0.2293044477701187,0.5816072821617126,0.4362894296646118,-0.07316862046718597,0.11696457117795944,-0.19335320591926575,-0.7522464394569397,-0.49539491534233093,-0.9194018840789795,-1.0624759197235107,-0.6858446002006531,-0.43836867809295654,-0.13995471596717834,-0.30234798789024353,0.0001329138467554003,0.18531207740306854,-0.2727466821670532,-0.09036865085363388,-0.4797115623950958,-0.2064618468284607,0.2772901952266693,0.5136670470237732,0.12286604940891266,-0.04771053045988083,0.07173307985067368,0.20802150666713715,-0.14124128222465515,0.0022284677252173424,-0.18094013631343842,0.3371052145957947,-0.4152097702026367,0.12310188263654709,0.17404063045978546,0.36195215582847595,-0.2100054770708084,-0.2663201689720154,-1.0592588186264038,-0.8919134736061096,-0.8077577948570251,-0.34174078702926636,-0.0359586663544178,-0.15067437291145325,-0.007493854034692049,-0.0613492988049984,-0.07291214168071747,-0.34360256791114807,-0.4331681430339813,-0.38846421241760254,-0.3542788624763489,-0.06469770520925522,-0.24664618074893951,-0.4097239375114441,0.022801144048571587,0.033112552016973495,0.3577556908130646,0.0745006874203682,-0.5116583108901978,0.40511229634284973,-0.29187384247779846,-0.3144207000732422,-0.23940344154834747,0.06558388471603394,-0.4335843026638031,-0.8881242275238037,-0.44205978512763977,-0.5991230607032776,-0.3034597337245941,0.0243711918592453,0.18185757100582123,0.0919855609536171,-0.0334654301404953,0.15960490703582764,-0.184138223528862,-0.05372583493590355,-0.673273503780365,-0.8622119426727295,-0.8043770790100098,-0.9423878788948059,-0.26846182346343994,-0.36508458852767944,-0.3041010797023773,-0.24614201486110687,0.39386147260665894,0.6965959668159485,0.5226391553878784,-0.06494579464197159,-0.26684242486953735,-0.5876707434654236,-0.5726640224456787,-0.20959237217903137,-0.4826679229736328,-0.727017879486084,-0.5057501196861267,-0.0801624283194542,-0.16264550387859344,0.00017371802823618054,0.020119359716773033,0.07117066532373428,0.05280130356550217,-0.020255735144019127,0.018248315900564194,0.008051923476159573,-0.19407927989959717,-0.7901149392127991,-0.9165482521057129,-1.008759617805481,-0.5261479020118713,-0.4092586636543274,-0.5131742358207703,-0.6454616785049438,-0.020249681547284126,-0.7627511620521545,-0.7038304209709167,-0.7070273756980896,-0.3385825455188751,-0.6108459830284119,-0.9404670000076294,-0.348268985748291,-0.0536632239818573,-0.5140584111213684,-0.04639459401369095,0.28205835819244385,-0.008614858612418175,0.06552456319332123,0.15068252384662628,-0.18582774698734283,0.06174430623650551,0.18190906941890717,0.1351257860660553,-0.14494487643241882,-0.19441965222358704,-0.15259003639221191,-0.20778584480285645,-0.3087385594844818,-0.31156688928604126,0.07525542378425598,-0.19455809891223907,-0.9411530494689941,-0.48516568541526794,-0.5389821529388428,-0.6327197551727295,-0.36262843012809753,0.20127078890800476,0.04557893052697182,-0.7808110117912292,-0.4657011032104492,-0.12006879597902298,0.03013560175895691,0.2848975956439972,-0.07300406694412231,0.09977088123559952,0.1403360664844513,-0.06025554984807968,0.06632234156131744,0.026362311094999313,0.11367682367563248,-0.03436822071671486,0.08180948346853256,0.07406850904226303,0.2694453001022339,0.4588761329650879,0.43216416239738464,-0.23076677322387695,0.03843441978096962,-0.3027663230895996,-0.5053130388259888,-0.13734331727027893,-0.34392741322517395,-0.682659924030304,-0.9651378989219666,-0.19069118797779083,-0.05398036539554596,-0.5967428088188171,-0.6204879283905029,-0.5733487010002136,-0.00678207678720355,0.3870399594306946,-0.13245277106761932,0.1636888086795807,-0.1514458954334259,-0.005438998341560364,0.02842068299651146,0.013462454080581665,0.20098088681697845,0.1545364111661911,-0.06479274481534958,0.39558690786361694,0.47650665044784546,0.6354292631149292,0.730011522769928,0.41730308532714844,-0.6622292995452881,-0.2174334079027176,-0.17288389801979065,-0.4917328655719757,-0.19254592061042786,-0.45046988129615784,-0.5498453974723816,-0.3707145154476166,0.12988345324993134,0.18481406569480896,-0.5542281270027161,-0.173219233751297,0.14962424337863922,0.4971884787082672,0.34538447856903076,0.29509517550468445,-0.03297828882932663,-0.08542350679636002,-0.018580066040158272,0.016683310270309448,0.18639974296092987,-0.13065515458583832,-0.16521912813186646,0.23720310628414154,0.3184640109539032,0.3361946642398834,0.8608734011650085,0.7945748567581177,0.2053288370370865,0.41196027398109436,0.49147287011146545,1.0617629289627075,0.4177968204021454,0.5734309554100037,0.6197001338005066,0.1110098585486412,0.3935734033584595,0.8238867521286011,0.6686153411865234,0.21128535270690918,0.46498340368270874,0.33552661538124084,0.13340170681476593,0.31255924701690674,-0.01374359242618084,-0.07427310943603516,-0.13214793801307678,0.16564448177814484,-0.08189252018928528,0.118600033223629,0.05526304617524147,0.13505767285823822,0.0942477434873581,0.40135616064071655,0.4861725866794586,0.2459062933921814,0.7095073461532593,0.5481975078582764,0.20476830005645752,0.3775387704372406,0.6191681027412415,0.45326483249664307,0.713226854801178,0.47490522265434265,0.7551858425140381,0.8185550570487976,0.39385470747947693,0.34365594387054443,-0.032742854207754135,0.22876183688640594,0.029565738514065742,-0.015458873473107815,-0.17299258708953857,-0.08750931173563004,-0.029002882540225983,0.012330680154263973,0.1473960429430008,0.02287888713181019,0.08537302166223526,0.16758941113948822,-0.13395696878433228,0.041144803166389465,0.04721398651599884,0.281271755695343,0.27420109510421753,0.19524918496608734,-0.08756890147924423,0.12340308725833893,0.19507525861263275,0.030980700626969337,0.21832670271396637,0.05341941490769386,-0.12835834920406342,0.13294757902622223,-0.12810243666172028,-0.11167579144239426,0.20990930497646332,0.030968084931373596,-0.025449030101299286,-0.1148463785648346,-0.09914516657590866,0.05263476446270943,0.08632144331932068],[-0.13349242508411407,0.173029825091362,-0.20518535375595093,-0.11317268759012222,-0.2079906314611435,-0.1770133525133133,-0.14981774985790253,-0.1262184977531433,0.14968861639499664,-0.018729539588093758,-0.10658451914787292,-0.08623990416526794,0.0710640475153923,-0.047429561614990234,0.1608196496963501,0.16699156165122986,0.1319839209318161,0.09653612971305847,-0.09391412883996964,-0.032497357577085495,-0.0830969288945198,0.1670459359884262,0.23084944486618042,-0.02178994193673134,0.15225112438201904,-0.036217112094163895,0.05325377732515335,-0.20050886273384094,-0.05424948409199715,0.042296964675188065,0.03222830966114998,-0.148806631565094,-0.20780795812606812,-0.020605698227882385,0.16909179091453552,-0.04304186627268791,-0.1623496562242508,-0.16026455163955688,-0.018196143209934235,0.2589760422706604,0.20371222496032715,0.09736909717321396,0.1644967943429947,0.041656095534563065,0.22325073182582855,-0.008068178780376911,-0.05534442514181137,-0.124067522585392,0.03629997372627258,0.037557441741228104,-0.207853764295578,0.0487273633480072,0.03790181875228882,-0.10579369962215424,0.07818807661533356,-0.03660083934664726,-0.10471269488334656,-0.17048604786396027,0.14842526614665985,0.022445619106292725,-0.2274852842092514,-0.13843268156051636,-0.1302281618118286,-0.15361423790454865,0.009025759994983673,0.18374063074588776,-0.0038094492629170418,0.2842234671115875,0.4412209689617157,0.3711490035057068,0.31356561183929443,0.4719350337982178,0.19852608442306519,0.22281858325004578,0.4755793809890747,0.4546244442462921,0.34627869725227356,0.2977423369884491,0.23092961311340332,0.10589912533760071,0.011797042563557625,-0.1792052537202835,0.16908323764801025,-0.08828984946012497,-0.07554316520690918,-0.07868561148643494,0.13187016546726227,0.1242377907037735,0.11486413329839706,-0.07191051542758942,-0.2758408188819885,-0.23737633228302002,-0.21589960157871246,0.1715398132801056,-0.1676609069108963,0.26818421483039856,-0.23919127881526947,-0.09618321806192398,-0.3375122845172882,-0.4337107241153717,-0.6397829651832581,0.025389108806848526,0.11290135979652405,0.3507387936115265,0.32651981711387634,0.15145738422870636,0.04770464077591896,0.17631840705871582,0.2187773585319519,0.14808081090450287,0.17922674119472504,-0.05547356233000755,0.07163766026496887,0.006540949922055006,0.02102976106107235,0.024550648406147957,0.0837826132774353,-0.110305555164814,-0.39298883080482483,-0.546068012714386,-0.4733191430568695,-0.34896305203437805,-0.7625086307525635,-0.016438154503703117,-0.20331941545009613,-0.3069266080856323,-0.2734719216823578,-0.2964925467967987,-0.635299563407898,0.12434355914592743,-0.3105891942977905,-0.10455929487943649,0.12161020189523697,0.19430416822433472,0.3877970576286316,0.5913406014442444,-0.043865226209163666,0.11964605748653412,0.023549387231469154,0.056399133056402206,0.16098497807979584,0.12236002087593079,0.01482459157705307,-0.07005294412374496,-0.09005222469568253,-0.3112033009529114,-0.28058305382728577,-0.5190476775169373,-0.6994420886039734,-0.46794527769088745,-0.7536834478378296,-0.3433012366294861,0.0802430659532547,0.02362232469022274,-0.1251107156276703,-0.2177247852087021,-0.2922317385673523,-0.41042864322662354,-0.2667970657348633,0.025456730276346207,0.21223805844783783,0.29580292105674744,0.2093394696712494,0.31219974160194397,0.20561718940734863,0.0932295024394989,0.1658339649438858,-0.0520339235663414,-0.007731442805379629,-0.17171163856983185,-0.12127823382616043,-0.06475190818309784,-0.23977474868297577,-0.4598884582519531,-0.18567517399787903,0.016916444525122643,0.09737398475408554,-0.14666421711444855,-0.7945092916488647,-0.09557660669088364,-0.2916422188282013,-0.2603735625743866,-0.23310968279838562,0.0009067343198694289,-0.29995033144950867,-0.04408084601163864,-0.0318400114774704,0.31294119358062744,0.23308824002742767,-0.45258888602256775,-0.4263395369052887,0.23920635879039764,0.2299310863018036,0.10034574568271637,-0.047832388430833817,0.16498306393623352,-0.20138250291347504,0.00859775859862566,0.0526704303920269,-0.1127118319272995,-0.47649937868118286,-0.5392369031906128,-0.4788300693035126,-0.263977587223053,-0.09683336317539215,-0.024866806343197823,-0.36382314562797546,0.05188490077853203,0.15486697852611542,0.3672603964805603,-0.2493639886379242,0.08909633010625839,-0.4973965287208557,-0.025658000260591507,0.268598735332489,-0.26278725266456604,0.2503807544708252,0.07646460086107254,-0.38537469506263733,-0.061884555965662,0.3721076548099518,0.19115203619003296,0.14619895815849304,-0.14641344547271729,0.0959290936589241,-0.23376712203025818,-0.30569931864738464,-0.19671374559402466,-0.48054400086402893,-0.21597130596637726,-0.4536769390106201,-0.6996868252754211,0.027573006227612495,-0.4098223149776459,-0.4053586423397064,-0.6523953676223755,-0.8264751434326172,-0.2625337839126587,-0.9222220778465271,0.20908761024475098,0.4564250111579895,0.12103639543056488,-0.2400519847869873,-0.49218645691871643,0.31691116094589233,-0.12384311854839325,-0.3486189544200897,-0.25417381525039673,0.3410664200782776,0.05174456164240837,-0.11074691265821457,0.10206697881221771,-0.1025279313325882,-0.03405209630727768,-0.3040277063846588,-0.5304694771766663,-0.22660385072231293,-0.22459767758846283,-0.0377173013985157,-0.4325556755065918,-0.5092853307723999,-0.7578951120376587,-0.38432326912879944,-0.2516876757144928,-0.6958929896354675,-0.7143217921257019,-0.24600917100906372,-0.10069969296455383,-0.7723860144615173,-0.6141099333763123,-0.35218411684036255,-0.41285309195518494,-0.07087898999452591,-0.18444989621639252,-0.10575422644615173,0.1409348100423813,0.3159538209438324,0.20363138616085052,0.10885266214609146,-0.12464021891355515,-0.22080953419208527,-0.2899278998374939,-0.2860942482948303,-0.21962207555770874,-0.1702064573764801,0.09371586889028549,-0.2543106973171234,-0.00399774219840765,-0.6319053769111633,-0.25075292587280273,-0.06295795738697052,0.5685151815414429,0.6615673303604126,0.35777872800827026,-0.41267263889312744,0.07566846162080765,-0.7093865275382996,-0.5804223418235779,-0.13254624605178833,-0.023694613948464394,-0.34280267357826233,0.25831228494644165,0.3227185010910034,0.7920379638671875,0.17416749894618988,-0.15892036259174347,0.08598531037569046,-0.003457874758169055,0.004666564520448446,-0.248912513256073,0.009498028084635735,-0.354851633310318,-0.05780594050884247,0.7010341286659241,0.8210198879241943,0.6668624877929688,0.8339149355888367,1.0855940580368042,1.2001073360443115,1.5553832054138184,1.8475673198699951,0.7435593605041504,0.24423855543136597,-0.12978911399841309,-0.41752737760543823,0.6471033692359924,0.23758594691753387,0.17129921913146973,0.0025431369431316853,0.45147705078125,0.5253962278366089,1.015885829925537,0.0863538309931755,-0.30732154846191406,0.024533843621611595,-0.16501285135746002,-0.04219422489404678,-0.06839527934789658,0.10135834664106369,-0.19551227986812592,0.4989476501941681,1.2887018918991089,2.325650930404663,1.9124269485473633,2.0759289264678955,1.8100554943084717,0.8207585215568542,0.7115601897239685,0.8024366497993469,0.9475700855255127,0.7796807289123535,0.3212042450904846,-0.47676193714141846,0.3196239173412323,-0.11634261906147003,0.1935139298439026,0.4899804890155792,0.7671469449996948,0.9499882459640503,0.7059372067451477,0.30093884468078613,-0.41538941860198975,0.1446579396724701,0.06071723625063896,-0.1908244490623474,-0.0722774788737297,-0.18156370520591736,0.1866914927959442,0.3934612274169922,1.4806716442108154,2.402435064315796,1.505861520767212,0.7221678495407104,0.9570847153663635,0.30792057514190674,0.07777822017669678,0.38923630118370056,0.35073623061180115,0.017858033999800682,0.3546058237552643,-0.2814248204231262,0.3081779479980469,-0.6508190035820007,0.33830779790878296,0.6558029055595398,0.31032389402389526,0.4852565824985504,0.8701997995376587,0.42826759815216064,-0.10978766530752182,-0.2322450578212738,-0.209108367562294,-0.2278984636068344,-0.08434086292982101,-0.25650691986083984,-0.35508209466934204,0.04457360506057739,1.139449119567871,1.4378607273101807,0.46490371227264404,0.7450015544891357,0.03200617805123329,-0.0691685825586319,0.40233632922172546,-0.49678900837898254,-0.32790812849998474,0.10395403951406479,-0.08597280830144882,-0.2245214730501175,0.18559248745441437,-0.4170325994491577,-0.06467856466770172,-0.14109688997268677,0.12578770518302917,0.04376654326915741,0.4196352958679199,0.21349389851093292,-0.1107247993350029,-0.15360188484191895,-0.1468973606824875,-0.19659706950187683,-0.2701720893383026,-0.07049230486154556,-0.2708240747451782,-0.17546573281288147,0.27491748332977295,0.39915040135383606,0.3621061146259308,0.13073891401290894,-0.11216644197702408,0.028097447007894516,-0.0099961431697011,0.5756860971450806,-0.7724205851554871,0.1279604285955429,-0.6499459743499756,-0.12132299691438675,0.3045737147331238,-0.21600566804409027,-0.2821439504623413,-0.08474726974964142,0.2613992989063263,0.09525959193706512,0.16909177601337433,-0.16064482927322388,-0.4481525719165802,-0.44203075766563416,-0.07594943046569824,-0.10088665038347244,0.002811912214383483,-0.19905364513397217,-0.5392770767211914,-0.48047080636024475,-0.15224726498126984,-0.46866104006767273,-0.1386735886335373,0.49548542499542236,0.43802905082702637,0.5403415560722351,0.23066402971744537,-0.22874684631824493,-0.41344699263572693,0.23693706095218658,-0.034121446311473846,-0.18686363101005554,0.008755490183830261,-0.16265352070331573,-0.014906499534845352,-0.205781489610672,-0.5194230675697327,-0.20391884446144104,-0.4920322597026825,-0.7236855030059814,-0.8325203061103821,-0.5250704288482666,-0.23279553651809692,0.10658816248178482,-0.0991291031241417,0.014311224222183228,-0.1140165850520134,-0.8527379035949707,-0.5216090083122253,-0.5500491261482239,-0.23554052412509918,0.11143292486667633,0.4157726466655731,0.7088713645935059,0.3151313066482544,-0.11148034036159515,0.48471543192863464,0.047388963401317596,-0.024961361661553383,-0.3156755268573761,-0.045803800225257874,-0.4135400056838989,-0.9016099572181702,-0.11748199909925461,-0.09860985726118088,-0.5899244546890259,-0.8537280559539795,-0.699117124080658,-0.6239559054374695,-0.31362083554267883,0.08387771993875504,-0.07121091336011887,-0.07501816004514694,-0.19321298599243164,-0.2002592235803604,-0.8393329977989197,-1.2033010721206665,-0.6949640512466431,-0.702603280544281,-0.172899067401886,-0.020412176847457886,-0.15328821539878845,0.4046548306941986,0.16715605556964874,-0.3325168788433075,-0.3176218271255493,0.07490194588899612,-0.23019295930862427,-0.18814007937908173,-0.1713641732931137,-0.1777534931898117,-0.21408382058143616,-0.08789234608411789,-0.369844913482666,-0.8757432699203491,-0.9054110050201416,-0.34858953952789307,-0.1206556037068367,-0.023252196609973907,-0.09538919478654861,0.005945348646491766,0.12039204686880112,-0.26300695538520813,-0.6891615986824036,-0.6000904440879822,-1.0016690492630005,-0.778266429901123,-0.10772112756967545,-0.09246405214071274,-0.3281114101409912,-0.12531407177448273,0.11945971846580505,-0.3665383756160736,0.26265770196914673,-0.31290173530578613,-0.3305776119232178,0.12812189757823944,-0.04133177548646927,-0.09686630964279175,-0.47686997056007385,-0.08483972400426865,-0.039523474872112274,-0.5127728581428528,-0.5878340005874634,-0.279116690158844,-0.059229347854852676,-0.24086180329322815,-0.053393278270959854,0.07675821334123611,-0.14771433174610138,-0.11862388253211975,-0.635594367980957,0.5097476243972778,-0.2723190486431122,-0.5103771090507507,-0.6087499260902405,-0.35096389055252075,-0.05880117416381836,-0.22585979104042053,0.08080858737230301,0.24344465136528015,-0.16638438403606415,-0.0829683169722557,0.41614243388175964,0.3190242350101471,-0.16802062094211578,-0.17767690122127533,0.04035761579871178,-0.06150538846850395,-0.2905155420303345,-0.6743836402893066,-0.4524032771587372,-0.035081617534160614,0.07253353297710419,0.0681624636054039,0.08179458975791931,0.07222139835357666,0.09894631057977676,-0.1329655945301056,-0.2601945102214813,-0.042868636548519135,0.0711410641670227,0.32132095098495483,-0.515661895275116,0.3485787510871887,0.3130497336387634,0.09160211682319641,-0.1768825352191925,0.28155508637428284,0.4797161817550659,-0.3287331461906433,0.045616813004016876,0.0010519901989027858,0.29024019837379456,-0.3253631591796875,0.4036802649497986,0.32342997193336487,-0.4067543148994446,-0.22770120203495026,-0.17858454585075378,-0.30781927704811096,-0.033415861427783966,0.01895187608897686,-0.10627952963113785,0.041786469519138336,-0.003078161971643567,-0.058765288442373276,-0.053415220230817795,-0.048229847103357315,0.1925385296344757,-0.2980734407901764,-0.34829750657081604,-0.023094873875379562,-0.17295952141284943,0.19905981421470642,-0.036290328949689865,-0.12722188234329224,0.16788101196289062,-0.26095715165138245,-0.21302530169487,0.13686101138591766,-0.3868907392024994,-0.19830790162086487,-0.23878149688243866,-0.1258390098810196,-0.0959467738866806,-0.26459211111068726,-0.13288511335849762,0.035404231399297714,-0.1597498655319214,-0.22805951535701752,-0.012513123452663422,0.09029744565486908,-0.1214996948838234,-0.07004716992378235,-0.01598355546593666,-0.281453013420105,-0.23579815030097961,-0.2993788421154022,0.5673461556434631,-0.053012825548648834,0.24396267533302307,0.603706955909729,1.2511731386184692,0.16858229041099548,-0.11966795474290848,0.1374586969614029,0.2534776031970978,0.7948376536369324,-0.1447596400976181,-0.08161066472530365,0.29311078786849976,0.27641400694847107,0.3197835087776184,0.2574000954627991,-0.09348723292350769,0.09565068036317825,0.0927310362458229,0.11614278703927994,0.07548464834690094,-0.14497961103916168,-0.18076060712337494,-0.2574578523635864,-0.21434639394283295,-0.1611507534980774,-0.05950647592544556,-0.47843655943870544,-0.03944198787212372,0.08948321640491486,-0.3788832128047943,-0.5525113344192505,0.1308003067970276,-0.018539953976869583,-0.027337487787008286,0.5813666582107544,0.3851791024208069,0.48155176639556885,0.18022632598876953,0.1629694551229477,-0.15869271755218506,0.219604954123497,0.1322786509990692,0.09733753651380539,-0.13674908876419067,-0.1465500444173813,0.18204081058502197,-0.08531218022108078,-0.1861325353384018,0.041064899414777756,0.07046365737915039,-0.04454653710126877,-0.2809430956840515,0.019550183787941933,-0.13361750543117523,-0.431149423122406,-0.19362156093120575,-0.445850670337677,-0.2608432173728943,0.15609873831272125,-0.025683242827653885,0.04723942652344704,-0.34033045172691345,0.26305460929870605,0.0902416855096817,-0.269590824842453,0.09140455722808838,0.030389118939638138,0.20620058476924896,0.11624022573232651,0.05116482824087143,-0.13827872276306152,-0.047027572989463806,0.011702606454491615,-0.12831073999404907,0.028584560379385948,0.17157715559005737,0.13611331582069397,0.010215530171990395,0.004906712099909782,0.1366802155971527,0.06390362232923508,0.24630770087242126,-0.1483381986618042,0.23492012917995453,-0.12732943892478943,-0.26065245270729065,-0.09663722664117813,-0.12199888378381729,0.3143986463546753,0.1568099409341812,-0.03689609095454216,-0.30638018250465393,-0.05601083114743233,-0.10072877258062363,0.15960562229156494,0.16516578197479248,0.31930819153785706,0.0016843372723087668,-0.15631601214408875,-0.1385098695755005,-0.1607101559638977,-0.17029882967472076,-0.015425491146743298,0.11703342199325562,-0.054395854473114014,-0.0399024523794651,0.1289808750152588,-0.10612403601408005,0.17967967689037323,-0.17297227680683136,-0.0066606467589735985,-0.016330067068338394,0.13955865800380707,-0.034771550446748734,0.21742109954357147,0.05765761807560921,0.016114016994833946,0.06264609098434448,0.08755092322826385,-0.06668603420257568,0.17174488306045532,0.16904564201831818,-0.19336344301700592,0.08763837069272995,-0.0921066626906395,0.032145336270332336,0.03815298527479172,-0.09469516575336456,0.039430342614650726,0.09388883411884308,-0.07952868193387985],[-0.05680176988244057,-0.018088653683662415,-0.02514667995274067,0.045089948922395706,-0.1590011864900589,0.024573149159550667,-0.182814359664917,-0.06954939663410187,-0.060935620218515396,0.15396346151828766,-0.12857306003570557,-0.14148065447807312,-0.15159183740615845,-0.11740460246801376,0.004947348963469267,0.01531250774860382,0.0955597460269928,-0.1757744550704956,-0.3061046600341797,0.037933554500341415,-0.20358049869537354,0.009378734044730663,0.11254828423261642,0.005049556959420443,-0.1893939971923828,0.04386835917830467,-0.16054870188236237,-0.18685820698738098,-0.10777568072080612,0.02902030758559704,0.17855142056941986,0.13064202666282654,-0.05451817810535431,0.1547633409500122,0.02849425934255123,0.06458345055580139,-0.06557978689670563,0.05432919040322304,-0.12926329672336578,0.036547303199768066,0.11025639623403549,0.15155470371246338,-0.1092468649148941,0.16826248168945312,-0.0036121062003076077,-0.04950163513422012,0.04956744611263275,0.012221944518387318,-0.24753601849079132,0.07991766929626465,-0.12489591538906097,0.02056826651096344,-0.00017379273776896298,0.009984982199966908,0.013659849762916565,0.1776566505432129,-0.1624804586172104,0.03719564527273178,-0.18395347893238068,0.027585379779338837,0.2066812813282013,0.06785222887992859,0.02580430544912815,0.38130927085876465,0.2267264574766159,0.2913958728313446,0.45287302136421204,0.5387696623802185,0.6963077783584595,0.3619050979614258,0.2726985812187195,0.09732787311077118,0.2338872104883194,0.2861572802066803,0.20077911019325256,-0.024728868156671524,0.2636103332042694,0.3746795356273651,0.05067332461476326,0.19826805591583252,0.05073389783501625,0.19067327678203583,-0.09549126029014587,0.01070167776197195,0.006217729300260544,0.08866985142230988,-0.1695765107870102,-0.17025476694107056,0.08028889447450638,0.17730838060379028,0.10922399908304214,0.4067680537700653,0.3183290958404541,0.37097877264022827,0.28483763337135315,0.690305233001709,0.6854885816574097,1.1420221328735352,1.097814679145813,1.3301630020141602,0.3101535737514496,0.2788584232330322,0.06736849248409271,-0.022926779463887215,0.2401861846446991,-0.08448858559131622,-0.24352043867111206,0.26802343130111694,0.08711834251880646,0.11436524987220764,0.003779622493311763,0.1504937708377838,0.0791093111038208,-0.07570374011993408,-0.16493287682533264,0.04913784936070442,0.004741125274449587,-0.0016359429573640227,0.263467401266098,0.4342392385005951,0.5354316234588623,0.08674126863479614,0.5096789598464966,0.26312142610549927,0.4221736788749695,0.9608235955238342,0.9609666466712952,1.034944772720337,0.33637648820877075,0.8808388710021973,0.7444688677787781,0.48977184295654297,0.4080633819103241,0.07569820433855057,0.32866111397743225,-0.09305671602487564,-0.15199770033359528,-0.10251568257808685,0.0330282486975193,-0.12703882157802582,-0.2206282913684845,-0.10607679188251495,0.07650455087423325,0.10245299339294434,-0.08707915991544724,-0.18650512397289276,0.1667381227016449,-0.0015783249400556087,-0.6291170716285706,-0.2849663197994232,-0.08663785457611084,-0.14864322543144226,0.24203404784202576,0.15250703692436218,0.28341996669769287,0.11070913821458817,-0.16673626005649567,0.32288646697998047,0.6033535003662109,0.31318968534469604,0.20650938153266907,0.19690757989883423,0.1052800863981247,-0.3577200770378113,-0.025585943832993507,0.019023170694708824,0.059123605489730835,0.0525641143321991,0.1900227814912796,-0.03883789852261543,0.052179720252752304,-0.11435742676258087,-0.013088788837194443,0.05458997189998627,0.3739253282546997,0.2480345517396927,-0.5933781266212463,-0.2961704134941101,0.16535642743110657,0.029753021895885468,0.3409993648529053,0.3017457127571106,-0.4231598675251007,-0.9451271295547485,-0.30330848693847656,-0.49751514196395874,-0.17350880801677704,0.07605826109647751,0.3730714023113251,0.029125861823558807,0.20638763904571533,0.7272069454193115,0.222593292593956,0.2125643640756607,0.27862438559532166,-0.10350285470485687,0.14146819710731506,0.17522038519382477,-0.23813626170158386,-0.11411172896623611,0.18317021429538727,0.28555822372436523,0.46929505467414856,0.4738391637802124,0.0038554135244339705,-0.4731264114379883,-0.6649332046508789,-0.5066846013069153,-0.604201078414917,-0.31741076707839966,0.1865454912185669,-0.17162233591079712,-0.41472476720809937,0.19621945917606354,-0.03606065735220909,-0.13440068066120148,0.024242546409368515,-0.5979599952697754,-0.4023900330066681,0.2538636326789856,0.5011199116706848,0.4269539713859558,0.30075883865356445,-0.000983593286946416,-0.035824958235025406,0.10163059830665588,0.13458587229251862,0.11515592783689499,-0.07934121042490005,-0.13831670582294464,0.4189617931842804,-0.04104688763618469,-0.057183392345905304,-0.13367335498332977,0.12878751754760742,-0.06597603857517242,0.068465456366539,-0.05938692018389702,0.08744382858276367,-0.13612359762191772,0.3830035328865051,-0.32342055439949036,-0.17862291634082794,0.09256866574287415,0.2915303409099579,-0.5811605453491211,-0.1220855861902237,0.24314840137958527,-0.050960298627614975,0.5172785520553589,0.49408191442489624,0.00812285766005516,-0.0921129360795021,-0.07349985092878342,-0.032784637063741684,0.05230308324098587,-0.2947784662246704,-0.041272155940532684,0.3564518988132477,0.7128264904022217,0.09434282034635544,0.2503714859485626,0.23477980494499207,-0.23749814927577972,0.03928765654563904,-0.5474401712417603,-0.36187973618507385,-0.10255974531173706,-0.1580464243888855,-0.23330113291740417,-0.35533297061920166,-0.040022868663072586,-0.10733339935541153,0.048643216490745544,0.2572705149650574,0.24418962001800537,-0.16807572543621063,0.2653464078903198,0.26099199056625366,0.1249479353427887,0.061524398624897,-0.0366462804377079,-0.14973603188991547,-0.08990167081356049,-0.025487961247563362,0.12466376274824142,0.5408588647842407,0.36392009258270264,0.2855234742164612,0.14601139724254608,0.3473203480243683,0.23088715970516205,-0.10785262286663055,-0.16542261838912964,0.4049977958202362,-0.40632498264312744,-0.17903795838356018,0.15357351303100586,-0.29920756816864014,-0.7190982699394226,-0.19785046577453613,-0.006627078168094158,0.27528318762779236,0.34086719155311584,0.33391791582107544,0.6013572812080383,-0.10362725704908371,0.08803071826696396,-0.045206308364868164,0.17712564766407013,-0.1745326668024063,0.12073707580566406,0.28554853796958923,0.3773456811904907,0.19059684872627258,-0.36719533801078796,-0.08369005471467972,-0.3563098609447479,0.07751792669296265,-0.6750770807266235,-0.5722805857658386,1.251678705215454,0.424136221408844,-0.5207007527351379,-1.286564588546753,-0.7421627640724182,-0.6521299481391907,0.4587825536727905,0.38865968585014343,-0.20922201871871948,-0.14131614565849304,0.506477415561676,0.4439796209335327,0.41032296419143677,-0.2666896879673004,0.060289494693279266,0.17973686754703522,0.20332054793834686,0.046824391931295395,0.14497601985931396,0.3150579333305359,0.7645775675773621,-0.21894562244415283,-0.2930440604686737,-0.42702338099479675,0.35163381695747375,-0.24086256325244904,-0.6096452474594116,0.09196764975786209,0.3861156404018402,0.2153598964214325,-1.1627082824707031,-0.7516241073608398,-0.6968474984169006,-0.4663568139076233,-0.7898850440979004,-0.2374560534954071,-0.23532934486865997,-0.12845635414123535,1.1206068992614746,0.8945654034614563,0.42252761125564575,0.07653743028640747,-0.1416623443365097,-0.16372159123420715,-0.15318278968334198,0.0796896368265152,0.24250900745391846,-0.12934350967407227,-0.07704153656959534,-0.5419091582298279,-0.4678041636943817,-0.49545490741729736,-0.1497257947921753,-0.1543557047843933,0.20050452649593353,0.10790172964334488,0.2692275047302246,-0.3218119144439697,-0.47897592186927795,-0.2883591651916504,-0.5556636452674866,-0.23324178159236908,-0.14437103271484375,0.15235817432403564,-0.47798678278923035,-0.0301133394241333,0.7833724021911621,0.9825648665428162,0.1732606291770935,0.09925919771194458,0.051430925726890564,-0.06735436618328094,0.17033268511295319,0.04613777995109558,-0.15046854317188263,-0.2032315880060196,0.06867413967847824,-0.13391877710819244,-0.36688458919525146,-0.7145807147026062,0.023433731868863106,-0.24474608898162842,-0.38396456837654114,0.22129413485527039,0.7279225587844849,0.07375852763652802,-0.26208892464637756,-1.0621238946914673,-0.6134513020515442,-0.6558470129966736,-0.26235345005989075,-0.5829137563705444,-0.14423157274723053,0.17084969580173492,0.863513171672821,0.536772608757019,-0.02753336727619171,-0.03448053076863289,0.10336436331272125,0.18486270308494568,-0.013862691819667816,0.06691605597734451,0.06248744949698448,-0.4845562279224396,-0.2939002513885498,-0.023294903337955475,-0.48705747723579407,-0.574243426322937,0.21215695142745972,-0.5657868385314941,-0.6570507884025574,0.2055477499961853,0.23681211471557617,0.2577005624771118,0.3667890429496765,-1.0740866661071777,-0.5428121089935303,-0.34420374035835266,-0.31941676139831543,0.19140638411045074,0.4207189977169037,0.03925129026174545,0.2633729577064514,0.29908034205436707,0.05855071172118187,0.09193269163370132,-0.11292556673288345,-0.0913488119840622,0.18225079774856567,-0.07852797955274582,-0.04809463769197464,-0.43077531456947327,-0.04045887663960457,0.022015390917658806,-0.33139756321907043,-0.9222042560577393,0.1634087860584259,0.07404754310846329,0.29034098982810974,0.06221846118569374,-0.008399941958487034,-0.14673027396202087,-0.39590829610824585,-0.5140100121498108,-0.7868800759315491,-0.8377456068992615,-0.4420364201068878,0.20205813646316528,-0.06322989612817764,0.10396675020456314,0.3000330924987793,0.1712331771850586,0.11500734090805054,0.010733152739703655,0.036291804164648056,-0.150619238615036,0.072429358959198,-0.036338333040475845,-0.022139137610793114,-0.11541834473609924,-0.1980375200510025,0.47333282232284546,-0.09537853300571442,-0.4489053189754486,0.13689061999320984,0.011196460574865341,-0.014110187068581581,0.290961891412735,-0.7120401859283447,-0.8652153015136719,-0.5965266227722168,-1.2820988893508911,-0.34384801983833313,0.021615583449602127,0.16098731756210327,0.12489072233438492,-0.26350370049476624,0.33478644490242004,0.09666731208562851,0.16519644856452942,0.1586160808801651,-0.10996071249246597,0.09762655198574066,-0.1456383317708969,-0.03938500955700874,-0.06413188576698303,-0.20825624465942383,0.12312732636928558,0.04295870661735535,0.20473723113536835,-0.06716357916593552,-0.26618072390556335,0.25547733902931213,0.6723013520240784,0.3190597891807556,0.002076077740639448,-0.06237320601940155,-0.4704028069972992,0.35988035798072815,0.3177446126937866,0.7250798344612122,0.02443503588438034,-0.057473961263895035,0.31042495369911194,-0.0904833972454071,0.4308420717716217,0.7902724742889404,0.5520855188369751,0.011037014424800873,0.10876490920782089,-0.10568724572658539,0.07507111877202988,-0.17376717925071716,0.059792835265398026,-0.28882989287376404,-0.06864321976900101,0.09912294149398804,0.6665981411933899,0.13586537539958954,0.763333797454834,0.617567777633667,0.791536271572113,1.3048218488693237,1.123102068901062,0.858630895614624,0.4951682686805725,0.8428413271903992,0.589955747127533,0.44399818778038025,0.6879940032958984,0.8125977516174316,0.5062336921691895,0.8111978769302368,1.0773457288742065,0.642241895198822,0.4287545084953308,-0.040406614542007446,0.01887601986527443,0.15895065665245056,0.17804893851280212,0.09584632515907288,-0.045542459934949875,0.025113118812441826,0.25213858485221863,0.4713013172149658,0.5046894550323486,0.5619729161262512,0.5107714533805847,1.1811715364456177,0.8514389991760254,1.5559219121932983,1.9993304014205933,1.1879149675369263,0.5294986963272095,1.2217512130737305,0.28733134269714355,0.8286058902740479,0.8769108057022095,1.1606851816177368,0.7419129014015198,0.5223387479782104,0.45915883779525757,0.1528068482875824,-0.09439384937286377,0.1374431550502777,-0.06191142648458481,0.07420627772808075,0.15200768411159515,0.03320632129907608,-0.13293875753879547,0.010693819262087345,0.27865222096443176,0.6211366057395935,1.0835837125778198,0.676612377166748,0.2840430736541748,0.34091174602508545,0.08199787139892578,0.4821627736091614,0.648655891418457,1.0384076833724976,1.17571222782135,1.2029753923416138,0.49665167927742004,0.8946605324745178,0.6473091244697571,0.7338268160820007,0.40001046657562256,0.4522857367992401,0.23801591992378235,0.19332066178321838,0.1483149379491806,0.17799246311187744,0.0809820294380188,0.03375714272260666,-0.16373282670974731,0.03310013189911842,-0.0302030760794878,-0.0436374731361866,0.4465191960334778,0.5483881235122681,0.7394795417785645,0.473116397857666,0.3237951397895813,-0.2537386417388916,-0.0810089111328125,0.08852794766426086,0.209848091006279,0.5702695846557617,0.28622591495513916,0.05052036792039871,0.3066406548023224,0.5882361531257629,0.46774983406066895,-0.11268017441034317,0.56885826587677,0.18245115876197815,0.08125265687704086,0.038667790591716766,-0.05506113916635513,0.05364372208714485,0.016828706488013268,0.08571704477071762,0.06162022426724434,0.10413798689842224,-0.11871179938316345,0.3356083929538727,0.3755914270877838,-0.16409379243850708,-0.34939995408058167,-0.30427396297454834,0.45754849910736084,0.9788089394569397,0.6873267889022827,-0.04224678874015808,0.6317558884620667,0.13285976648330688,0.1441323161125183,0.4240833520889282,0.5421398878097534,0.238578200340271,0.4322100579738617,0.07065128535032272,0.633971095085144,-0.21693448722362518,0.029065046459436417,0.13449595868587494,-0.07281215488910675,0.0013198937522247434,-0.0017374539747834206,-0.011834397912025452,0.027232740074396133,0.004181192722171545,0.1410142481327057,0.057205915451049805,-0.2738548219203949,-0.6247052550315857,-0.6266033053398132,-0.26576751470565796,-0.004691613372415304,0.4308851659297943,0.2643873691558838,0.10759401321411133,0.6929346323013306,0.3919413089752197,1.000949501991272,0.4694114923477173,0.4150117337703705,0.38725027441978455,0.8002522587776184,0.1747518926858902,-0.20488177239894867,-0.15907509624958038,0.03547855466604233,0.005126617848873138,-0.03798587992787361,-0.0532461442053318,-0.16095586121082306,-0.12049498409032822,0.04082666337490082,0.14916597306728363,0.005411752965301275,-0.1778179258108139,-0.4077034592628479,-0.19006629288196564,-0.15534907579421997,-0.40650391578674316,0.26475587487220764,0.22832074761390686,0.24275684356689453,-0.07991936057806015,0.8531374335289001,0.22316138446331024,-0.2105248123407364,0.22680030763149261,0.46154993772506714,0.2791184186935425,0.1508028656244278,-0.1933009922504425,-0.16205714643001556,-0.3541560471057892,-0.1053653135895729,0.15518608689308167,0.13027642667293549,0.002531247679144144,0.12025512754917145,-0.16025009751319885,-0.004050074145197868,0.0976547822356224,0.10365189611911774,-0.09354588389396667,-0.06077507883310318,-0.2248210608959198,-0.004837351385504007,-0.018734008073806763,-0.22949808835983276,-0.28206300735473633,-0.1551898717880249,0.3024158775806427,-0.036247242242097855,-0.46197226643562317,-0.388296902179718,0.062157317996025085,0.20281994342803955,-0.124300017952919,-0.24757322669029236,-0.026166606694459915,-0.2587794363498688,-0.18897096812725067,-0.17947697639465332,-0.010716434568166733,0.044154487550258636,-0.007690650410950184,-0.1391429454088211,-0.19754838943481445,-0.08256198465824127,-0.13960391283035278,0.15872609615325928,0.08315301686525345,-0.11942823976278305,-0.20017439126968384,0.025230495259165764,-0.032401446253061295,-0.07622597366571426,-0.07628562301397324,-0.25882744789123535,0.13566745817661285,-0.05466887354850769,-0.2493559569120407,0.08489427715539932,-0.17477335035800934,0.1464245468378067,0.11150898039340973,0.061692170798778534,-0.24884724617004395,-0.16711807250976562,-0.10553064942359924,-0.12098505347967148,0.010051741264760494,-0.18742628395557404,-0.1736118644475937,-0.043135009706020355,0.18542514741420746],[-0.1850680559873581,-0.11250507831573486,-0.11736023426055908,-0.13047181069850922,-0.1980123221874237,0.12797674536705017,0.17380325496196747,-0.22374004125595093,-0.13475778698921204,0.1720113307237625,-0.12042271345853806,-0.2458542287349701,0.04257179796695709,0.17027993500232697,-0.1328301727771759,0.004715799354016781,0.04555432125926018,0.008455924689769745,-0.08966875821352005,-0.10234730690717697,0.06390409916639328,-0.08348225057125092,-0.10395883023738861,0.13061989843845367,-0.11868126690387726,0.17383746802806854,0.16182847321033478,-0.06504083424806595,0.07971930503845215,-0.12110032141208649,-0.09200236946344376,0.03164585679769516,0.09081155806779861,-0.1931256204843521,-0.06706264615058899,-0.20051482319831848,0.02607683837413788,-0.18421703577041626,-0.0787992998957634,0.09470323473215103,0.2610397934913635,0.046823956072330475,-0.07725612819194794,-0.1914510875940323,0.0729944109916687,-0.09705305844545364,0.10699911415576935,0.1778721660375595,0.13933151960372925,0.10725542902946472,0.09183190017938614,0.124700166285038,-0.09392951428890228,0.20813901722431183,-0.11653388291597366,0.08126747608184814,-0.015994403511285782,0.12293872982263565,-0.09972697496414185,-0.09029460698366165,-0.06610427051782608,-0.08506106585264206,-0.0688050165772438,0.11352256685495377,0.2663157284259796,0.33700016140937805,-0.09613008052110672,-0.005457249935716391,0.10674265772104263,0.0565251000225544,-0.10484901070594788,-0.35369959473609924,-0.24292981624603271,0.007136646658182144,0.3711543083190918,0.535325288772583,0.42935383319854736,0.3952740430831909,0.12499461323022842,0.14397594332695007,0.13889841735363007,-0.05615329369902611,0.20330975949764252,-0.11204417049884796,-0.026928510516881943,-0.16512362658977509,0.00008620164589956403,0.08253257721662521,-0.06765671819448471,0.12496877461671829,-0.00639853160828352,-0.18753868341445923,0.12647344172000885,0.0847821906208992,-0.17392496764659882,-0.1860750913619995,-0.8720248937606812,-0.6494057178497314,-0.4935152232646942,-0.3945389986038208,-0.46722349524497986,0.12917974591255188,0.2420414537191391,0.5238999128341675,0.29477131366729736,0.24811622500419617,0.5312053561210632,0.36614155769348145,0.06038133427500725,-0.11415062099695206,-0.001498757628723979,0.005940312519669533,0.15734803676605225,-0.17599505186080933,0.10650807619094849,0.05494054779410362,0.07607262581586838,-0.004150994587689638,-0.4575265049934387,-0.29859480261802673,-0.5910468101501465,-0.6086370944976807,-0.7296947240829468,-0.575640082359314,-0.5056875348091125,-0.5300753116607666,-0.5173187851905823,-0.20979905128479004,-0.3477804958820343,0.3201155662536621,0.10478747636079788,0.09808389097452164,0.17414039373397827,0.35644593834877014,0.6588690876960754,0.5656450390815735,0.2050139307975769,-0.032965581864118576,0.09875220060348511,0.14019466936588287,-0.17689532041549683,-0.16113699972629547,0.08242794871330261,0.07450542598962784,-0.1190667673945427,-0.6918678879737854,-0.9209031462669373,-0.8143880367279053,-0.07040318101644516,-0.288767546415329,-0.2720594108104706,0.03571707755327225,0.08221949636936188,0.3647937476634979,-0.6068640947341919,-0.04860936477780342,-0.027807636186480522,0.10844585299491882,0.3514823913574219,0.04751254990696907,0.3601975440979004,-0.08465927094221115,0.5874043703079224,0.8408166170120239,0.2141983062028885,0.10644756257534027,-0.06309013068675995,0.047349199652671814,0.04838559404015541,-0.14368660748004913,-0.21055851876735687,-0.10309644043445587,-0.30544954538345337,-0.5363188982009888,-0.5938493013381958,-0.4772144854068756,-0.3899152874946594,-0.038845229893922806,-0.08459682762622833,-0.17715980112552643,-0.7519645094871521,-0.714938223361969,-0.3769738972187042,0.28305166959762573,-0.03209637477993965,0.4378204643726349,0.258820503950119,0.09397829324007034,-0.3658830225467682,-0.43291327357292175,0.2318660467863083,1.0354827642440796,0.40626323223114014,0.18543052673339844,-0.13497720658779144,0.016420256346464157,-0.1890847384929657,0.13681237399578094,-0.12826520204544067,-0.2721082270145416,-0.6249709725379944,-0.6957076787948608,-0.141516774892807,0.06073052063584328,0.011637258343398571,-0.21721579134464264,-0.19903148710727692,-0.6722313761711121,-0.41492414474487305,-0.49976393580436707,-0.04984964057803154,0.5648803114891052,-0.1361931711435318,-0.1577853113412857,0.14439690113067627,-0.07719271630048752,-0.29673314094543457,0.2656933069229126,0.8158220648765564,1.1537895202636719,0.4885087013244629,0.31126174330711365,0.16644182801246643,-0.0933738425374031,0.1834990382194519,-0.15176643431186676,-0.055561818182468414,-0.45218712091445923,-1.218199372291565,-0.23990990221500397,0.1659415066242218,-0.7779897451400757,-0.42824772000312805,-0.658405601978302,-0.6829769015312195,0.3283544182777405,-0.04319300502538681,0.21438755095005035,0.2885946035385132,-0.2934904396533966,-0.5776472687721252,-0.7079172134399414,0.06413581222295761,-0.29439598321914673,0.384280800819397,0.08241824805736542,0.9090077877044678,1.5668365955352783,0.5508278608322144,0.3728429079055786,-0.1098431646823883,-0.004592717159539461,-0.06722406297922134,-0.10777436196804047,-0.23380130529403687,-0.46174341440200806,-0.6422768831253052,0.3695664703845978,0.44075673818588257,-0.16772794723510742,0.4431454837322235,0.9435892701148987,1.2539098262786865,2.3825182914733887,2.349029779434204,1.473365068435669,0.4117186367511749,-0.8663803935050964,-1.1585936546325684,-0.1709444522857666,-0.06742116063833237,0.018184630200266838,-0.06655041128396988,-0.042632099241018295,0.963137149810791,1.598915934562683,0.848416268825531,0.11891575902700424,0.016632314771413803,0.1645897775888443,-0.04937063902616501,-0.1685902178287506,-0.003073623636737466,-0.077784962952137,0.15924596786499023,1.0403270721435547,0.9730938673019409,1.5648609399795532,3.02571177482605,3.427680492401123,2.546527147293091,1.4023219347000122,1.0420368909835815,0.6827830076217651,-0.2010282427072525,0.0027170502580702305,-0.149440199136734,-0.2551744878292084,-0.5240924954414368,-0.8939053416252136,-0.26044774055480957,-0.22556793689727783,0.5427088737487793,0.8910056948661804,0.37492576241493225,-0.07715341448783875,-0.08723992109298706,0.158789724111557,0.0610009990632534,-0.10820481181144714,0.1394525170326233,0.08780469745397568,0.2760470509529114,1.3959956169128418,1.6327128410339355,1.8156640529632568,2.6838510036468506,1.665001630783081,0.5792310833930969,-0.3822595477104187,-0.49410268664360046,0.1542539745569229,-0.15646129846572876,-0.4304504990577698,-0.2048550844192505,-0.09176088869571686,0.061842743307352066,-0.7841500043869019,-0.30583056807518005,0.12049956619739532,0.222137451171875,0.7959843873977661,0.0823085680603981,-0.2324698120355606,-0.11676182597875595,0.1098499745130539,0.02222575806081295,-0.09626120328903198,-0.06353171914815903,-0.22033469378948212,0.5006794333457947,0.9823105335235596,1.5284513235092163,0.8992353677749634,0.41449666023254395,-0.38303685188293457,-0.2850280702114105,-0.22409798204898834,-0.5850508213043213,-0.23283030092716217,-0.05110693722963333,0.2796936333179474,-0.22991347312927246,0.3832094371318817,-0.4142757058143616,-0.09108618646860123,0.15573377907276154,0.5937532186508179,0.9663746953010559,0.6371545195579529,0.034585773944854736,-0.15213030576705933,0.054385531693696976,-0.07059100270271301,-0.19815023243427277,0.012785356491804123,-0.0890735313296318,-0.010260945186018944,0.4617879092693329,0.7916695475578308,0.977699339389801,0.04625878855586052,-0.9071713089942932,-0.6285595893859863,-0.5220209360122681,0.3792542815208435,0.0024072222877293825,0.14920155704021454,-0.5472210049629211,-0.11602029949426651,-0.33343183994293213,0.03428008034825325,-0.4098765254020691,0.004791165702044964,-0.16683965921401978,0.3881103992462158,0.6743419766426086,0.31605997681617737,-0.026048162952065468,-0.1972501277923584,-0.04640679433941841,0.08339431881904602,-0.21674083173274994,-0.23499569296836853,-0.003942391369491816,0.11906988173723221,-0.033443670719861984,0.23435050249099731,0.3749276399612427,-0.21793104708194733,0.0885673314332962,-0.15713101625442505,0.5040039420127869,0.2739444673061371,-0.5842846035957336,0.35278448462486267,0.5212289094924927,0.3550596833229065,0.027161361649632454,-0.624871551990509,0.08063361048698425,0.7344465851783752,0.5337081551551819,0.07202266156673431,-0.11532136052846909,-0.09160561114549637,-0.20427098870277405,-0.38947993516921997,0.02571934647858143,0.08411572128534317,-0.20908145606517792,0.08185897767543793,0.10008294135332108,-0.18256261944770813,-0.6781433820724487,-0.35737931728363037,-0.22517944872379303,0.4201072156429291,-0.1976509392261505,-0.5213683247566223,0.35885950922966003,0.33745235204696655,-0.10464923083782196,-0.263869047164917,-0.1903577744960785,-0.5166732668876648,0.02867087908089161,0.3319186270236969,-0.0010620822431519628,0.10386320948600769,-0.10697672516107559,0.18713690340518951,-0.2533077597618103,-0.21253177523612976,-0.12345479428768158,-0.4522365629673004,-0.06541694700717926,-0.08452978730201721,-0.10838453471660614,-0.11287109553813934,0.07554280757904053,-0.6832001209259033,-0.7961384057998657,-0.11634775996208191,-0.5570374131202698,0.3902292847633362,0.057382434606552124,0.3708590865135193,0.3024381101131439,0.21372340619564056,0.3884599506855011,-0.46774083375930786,-0.005245121195912361,0.26495012640953064,0.0659889206290245,0.38225534558296204,0.2654677927494049,0.3105403184890747,-0.17898616194725037,-0.08827091008424759,-0.2706174850463867,-0.342699259519577,-0.23483966290950775,-0.5627724528312683,-0.4409969747066498,-0.1147264689207077,-0.001569099142216146,-0.194875106215477,-0.0809033215045929,-0.7338564991950989,-0.5630207061767578,0.3952957093715668,-0.09327387064695358,-0.2048884630203247,0.6014801859855652,0.6153333783149719,0.061372239142656326,0.8010867238044739,0.5807174444198608,-0.3695334196090698,-0.014930600300431252,0.6329559683799744,0.592297375202179,0.018902793526649475,-0.33114442229270935,-0.5121526718139648,-0.33435651659965515,-0.16278666257858276,-0.5724698305130005,-0.6725866198539734,-0.26270437240600586,-0.13327667117118835,-0.24394570291042328,0.05578002333641052,-0.17962010204792023,-0.11694249510765076,0.07916165888309479,-0.4752640724182129,-0.28503140807151794,-0.13116532564163208,-0.3260292112827301,0.02789417654275894,0.28905820846557617,0.13590842485427856,0.35744479298591614,0.9233850836753845,0.3851063549518585,-0.28445109724998474,-0.30728280544281006,-0.3397756516933441,-0.5314069390296936,-0.9590190649032593,-0.24593661725521088,-0.3917529881000519,-0.2797532081604004,-0.629309356212616,-0.866242527961731,-0.5536264181137085,-0.26539987325668335,-0.42157238721847534,-0.09955397248268127,-0.09257889539003372,-0.0016998921055346727,-0.1422376036643982,0.16116109490394592,-0.7879083156585693,-0.4339563250541687,-0.12968774139881134,-0.5746497511863708,0.2093302458524704,0.42662787437438965,-0.3600943684577942,0.26519978046417236,0.005238325800746679,-0.04274367913603783,-0.5225449800491333,0.09418421983718872,0.2755642235279083,-0.26148727536201477,0.19492360949516296,0.016778962686657906,-0.18553361296653748,-0.28835299611091614,-0.12436649203300476,-0.14632080495357513,-0.14055725932121277,-0.38184812664985657,-0.39160698652267456,-0.27715936303138733,0.10701588541269302,-0.06633923202753067,0.0435342937707901,0.0009196216706186533,-0.46739646792411804,-0.17360614240169525,-0.10596129298210144,-0.5478439331054688,-0.2715255320072174,-0.12018793821334839,0.038350094109773636,0.291329026222229,-0.4071512520313263,0.049046728760004044,0.4743767976760864,-0.20194783806800842,0.15674515068531036,0.5003700256347656,-0.11971800774335861,0.14156219363212585,-0.23799902200698853,-0.6874673366546631,-0.4202050566673279,0.10848936438560486,-0.12365648150444031,-0.4911392033100128,-0.055663514882326126,0.09870802611112595,-0.20919613540172577,-0.06236550584435463,0.05753858759999275,-0.22699475288391113,0.029949216172099113,-0.09176721423864365,0.18898653984069824,-0.3756934106349945,-0.01953805424273014,0.015187899582087994,0.19225654006004333,0.0383988693356514,0.07789798825979233,0.15026071667671204,0.4531710147857666,0.1689428985118866,0.25939226150512695,-0.02144661545753479,-0.3002528250217438,0.3207182288169861,0.18904361128807068,-0.03267378360033035,0.36696508526802063,0.06714639812707901,0.14591915905475616,-0.0103345587849617,-0.0799669474363327,-0.12175769358873367,0.06055134907364845,-0.08143853396177292,-0.16197830438613892,-0.14778965711593628,0.05926615372300148,0.1754811704158783,-0.2338372766971588,-0.24069997668266296,-0.25823530554771423,-0.1615997701883316,0.139027938246727,-0.05113707855343819,0.4256432354450226,0.24011686444282532,0.02314797043800354,-0.19575023651123047,0.2409459948539734,0.3108972907066345,0.34024110436439514,-0.1980278342962265,-0.5545204281806946,-0.4719507098197937,0.033821020275354385,0.10036863386631012,-0.23454688489437103,-0.1410359889268875,0.05947018042206764,-0.012755989097058773,0.17512190341949463,-0.10757900029420853,-0.10186433792114258,0.040916480123996735,-0.23720090091228485,-0.2538141906261444,-0.8534187078475952,-0.3955989480018616,0.07081089913845062,-0.15028966963291168,-0.24581460654735565,-0.35205668210983276,-0.002014301484450698,-0.17950931191444397,-0.06346428394317627,0.5912585854530334,0.04648291692137718,0.07305348664522171,0.5265126824378967,0.22725020349025726,0.020910052582621574,0.17563793063163757,0.5943059921264648,0.40206781029701233,0.0573183111846447,0.10284950584173203,-0.17213569581508636,0.0020383235532790422,-0.10614366829395294,-0.1636473387479782,-0.1268841177225113,0.12477706372737885,0.0866544097661972,-0.05427240952849388,-0.14036628603935242,-0.19363316893577576,0.00013489919365383685,0.39925986528396606,0.3672752380371094,-0.1736399531364441,-0.23379197716712952,-0.2140636444091797,-0.5751712322235107,-0.28077107667922974,0.06471974402666092,0.1851220726966858,0.1475447118282318,0.46317341923713684,0.33158963918685913,0.26809728145599365,0.519109845161438,0.09871359169483185,0.17064665257930756,0.023054897785186768,-0.19270361959934235,-0.1382957398891449,0.17875108122825623,-0.02395031973719597,-0.19162048399448395,-0.11326607316732407,0.16243290901184082,-0.16865308582782745,-0.10115959495306015,0.003985375165939331,0.33360105752944946,0.22852826118469238,-0.0411103256046772,-0.1552232801914215,-0.029158253222703934,-0.29460465908050537,-0.06976112723350525,0.00043424268369562924,-0.011973578482866287,-0.07608504593372345,-0.0426468700170517,0.050225645303726196,-0.13880321383476257,0.1302308440208435,0.195904940366745,0.05040658265352249,-0.08941970765590668,0.0027072879020124674,-0.11178828775882721,-0.17945517599582672,-0.05327426642179489,-0.12429824471473694,0.14261406660079956,-0.04128143936395645,0.16104260087013245,-0.19398240745067596,-0.1865953952074051,0.147222101688385,-0.1538187861442566,0.046956293284893036,-0.06058310344815254,-0.1075185164809227,-0.32465532422065735,0.0973321720957756,-0.09266015142202377,0.1566142737865448,-0.17646023631095886,-0.28524163365364075,-0.01648890972137451,0.0005812973831780255,0.01917288824915886,0.14446398615837097,0.021465077996253967,0.19628003239631653,-0.06909787654876709,-0.01011099386960268,0.04775537922978401,0.020248327404260635,0.18419872224330902,0.13863693177700043,-0.0391453355550766,0.12633031606674194,0.001276971772313118,-0.1947101503610611,0.149831622838974,-0.09491914510726929,-0.11725682020187378,-0.2326589673757553,-0.02760135754942894,0.17698951065540314,0.1258476972579956,-0.05430775135755539,0.007646552287042141,-0.1502198576927185,-0.03978059068322182,0.07641971111297607,-0.0934118926525116,0.03636866435408592,-0.052236706018447876,0.1580139547586441,0.20228877663612366,0.010148226283490658,-0.13969476521015167,0.06036379188299179,0.17877833545207977,0.08650629222393036,-0.010591324418783188],[-0.05744004622101784,0.018270218744874,0.17778615653514862,-0.13044831156730652,0.015273752622306347,-0.1062655821442604,0.13834571838378906,0.1322304606437683,0.15636393427848816,-0.1734602004289627,0.18660908937454224,-0.05411751940846443,0.12880276143550873,0.02999616600573063,-0.09882637858390808,0.14203126728534698,0.09733162075281143,-0.18584996461868286,0.12495766580104828,0.18742497265338898,0.05468842759728432,-0.12515829503536224,0.16519320011138916,0.028376901522278786,0.10452049970626831,-0.10823431611061096,0.08234346657991409,-0.08086129277944565,0.16189588606357574,-0.1645294725894928,0.16040751338005066,0.07116293907165527,0.17142149806022644,-0.13957373797893524,-0.02530508302152157,-0.09850108623504639,-0.19747184216976166,-0.2001057267189026,-0.17682883143424988,0.005835074465721846,-0.018919600173830986,-0.32547804713249207,-0.23069362342357635,-0.031047606840729713,-0.20079663395881653,0.02088215760886669,0.09559430927038193,0.07645172625780106,-0.23965150117874146,0.2704835534095764,-0.1944076269865036,0.1660124957561493,-0.13798217475414276,-0.13272379338741302,0.19064514338970184,-0.02849690243601799,-0.15039540827274323,-0.022919710725545883,0.20134194195270538,0.06475552916526794,-0.0876234918832779,0.10453923791646957,-0.1402093768119812,-0.27538368105888367,-0.14318186044692993,-0.3096790015697479,-0.3692392110824585,-0.2978667616844177,-0.23200510442256927,-0.3176175057888031,-0.6835435032844543,-0.4981711208820343,-0.28044408559799194,-0.12278606742620468,0.006252526771277189,0.04264303669333458,-0.068202443420887,-0.10284841805696487,-0.16178178787231445,0.05337598919868469,-0.15985187888145447,0.2085369974374771,-0.061004508286714554,-0.07077638804912567,0.02582485042512417,0.15977494418621063,-0.09939102083444595,-0.0049016172997653484,0.038398630917072296,0.1582639515399933,0.07804306596517563,-0.2261013686656952,-0.6335775256156921,-0.8032804727554321,-0.5719729065895081,-0.7962538599967957,-0.7520455121994019,-0.9236805438995361,-0.6990979313850403,-0.34558752179145813,-0.0721675455570221,0.09274747222661972,0.6703446507453918,0.326018363237381,0.0025161528028547764,0.2770030200481415,0.12043171375989914,-0.5442162752151489,-0.41338708996772766,-0.15078648924827576,0.1641242802143097,0.14442358911037445,0.13988085091114044,-0.0004847639356739819,-0.1127270758152008,-0.06147671118378639,-0.002994748530909419,-0.1722928285598755,-0.35277697443962097,-0.40407928824424744,-0.7785992622375488,-0.7213749289512634,-0.019404597580432892,0.38316071033477783,-0.11093983054161072,-0.09927806258201599,-0.00620901258662343,0.15150345861911774,0.12853455543518066,-0.25699466466903687,0.475429892539978,-0.032181721180677414,0.04902949929237366,0.17877428233623505,-0.43850278854370117,-0.36556294560432434,0.30898317694664,0.42383497953414917,0.3593173623085022,-0.080307237803936,-0.05248425900936127,0.05298919975757599,0.06925617903470993,-0.0948723778128624,0.10346473008394241,0.19865189492702484,0.12459197640419006,0.33429765701293945,0.5704137086868286,0.1594938486814499,-0.15895946323871613,-0.20866000652313232,-0.19351279735565186,0.18039752542972565,-0.3186253011226654,-0.11787034571170807,-0.4649316370487213,0.35776761174201965,-0.026422929018735886,-0.29067641496658325,0.2678876221179962,-0.07881568372249603,0.5374322533607483,0.0737096518278122,0.5867090225219727,0.4642290771007538,0.21667025983333588,-0.008682350628077984,0.038753025233745575,-0.022799571976065636,-0.15653933584690094,-0.0020704164635390043,-0.03133003041148186,0.18538248538970947,-0.07504013925790787,-0.01657971553504467,0.16557686030864716,0.7054749727249146,0.3567296266555786,-0.03842857852578163,0.12614113092422485,0.11625021696090698,-0.36879342794418335,0.2776688039302826,0.02148783951997757,0.4729352593421936,0.12495951354503632,0.5978037118911743,0.16987060010433197,0.34882378578186035,0.4244194030761719,0.7405536770820618,0.932993471622467,0.3966587781906128,0.06382931023836136,0.14023461937904358,-0.12002777308225632,0.02227136492729187,-0.20252878963947296,0.10035309195518494,0.1287633627653122,0.12304747849702835,-0.17019875347614288,-0.05803842097520828,0.34585773944854736,0.6565223932266235,0.04524778947234154,-0.09913444519042969,0.14636041224002838,0.26022469997406006,-0.13839411735534668,-0.02410501427948475,0.6609799861907959,0.11333724111318588,0.2759787142276764,0.03992718458175659,0.6608297824859619,0.5436757206916809,0.6967684030532837,1.2548549175262451,1.1973185539245605,0.24112066626548767,0.12065897136926651,-0.14612838625907898,-0.19050443172454834,0.10528389364480972,0.08871819823980331,0.21296869218349457,-0.025929158553481102,-0.010686586610972881,0.3463636338710785,0.3426215350627899,0.11553223431110382,0.8228393793106079,0.12182822823524475,-0.0910368263721466,-0.11355198174715042,0.05636201053857803,0.16386958956718445,0.35345542430877686,-0.1887700855731964,-0.2629590928554535,0.35752347111701965,0.21220120787620544,0.1561424881219864,0.50342857837677,1.0606679916381836,0.9086732864379883,0.9491544961929321,0.4870786666870117,0.2534787952899933,0.31416597962379456,0.026005268096923828,-0.1288059651851654,-0.084630087018013,0.08455568552017212,0.15417036414146423,-0.071185402572155,0.526050865650177,0.06894266605377197,-0.21883606910705566,-0.06973335891962051,-0.23187023401260376,0.03972448408603668,-0.5668466687202454,-0.5916630029678345,-0.7878251671791077,-0.5592933297157288,-0.3080802261829376,0.3033248484134674,0.7619310617446899,0.6406117081642151,0.6390440464019775,0.6143531203269958,0.6608676314353943,0.3703642785549164,0.8723861575126648,0.6551160216331482,0.18145181238651276,0.26088953018188477,-0.0550357885658741,-0.021729514002799988,-0.018550023436546326,0.25573086738586426,0.16668134927749634,0.04936005175113678,-0.11416634172201157,0.2029612958431244,-0.09932101517915726,0.4990622103214264,0.09538819640874863,0.07859018445014954,0.23826439678668976,-0.0009096111170947552,-0.5447154641151428,-0.35275065898895264,0.6907032132148743,0.3411065340042114,0.5842018127441406,0.20062896609306335,-0.13067342340946198,0.5926066040992737,0.10998424142599106,-0.37277525663375854,0.6023082733154297,0.7381770610809326,0.4934324324131012,0.10060632973909378,0.11346277594566345,0.03306056186556816,-0.20686188340187073,-0.22733604907989502,0.46404093503952026,0.3825923204421997,0.19172784686088562,0.6439846754074097,0.6229622960090637,0.5318235158920288,0.910637378692627,0.4371877908706665,0.290075421333313,0.7220745086669922,1.1732524633407593,0.5113868117332458,0.5526590347290039,0.5417264699935913,0.09610341489315033,-0.5836226940155029,-0.15837423503398895,0.20416581630706787,-0.14412084221839905,-0.28001290559768677,0.23860938847064972,0.31632521748542786,0.0928572565317154,-0.03220584988594055,-0.12767837941646576,-0.2115430384874344,-0.22456081211566925,-0.004044034518301487,0.42231470346450806,0.29458069801330566,0.534225344657898,0.6731460690498352,0.020759062841534615,0.5958660840988159,0.847011148929596,0.6624987125396729,0.7151721715927124,0.41520264744758606,1.4052048921585083,0.4821920692920685,0.289608895778656,0.7918781638145447,0.1718611866235733,0.5794473886489868,0.24422527849674225,-0.25472015142440796,-0.44196444749832153,-0.5049461126327515,-0.3956865072250366,0.010546168312430382,-0.04590177908539772,0.23240067064762115,0.17917178571224213,-0.06818516552448273,-0.1657828688621521,-0.15786920487880707,0.3590598404407501,0.38363832235336304,0.7257805466651917,0.59522944688797,0.40451815724372864,0.44423988461494446,0.049809958785772324,0.4363526999950409,0.9403534531593323,0.5989784598350525,0.16801075637340546,0.42083603143692017,0.3710509240627289,0.5944774150848389,-0.04486830532550812,-0.5398975014686584,0.4277544319629669,-0.36572185158729553,-0.784672200679779,-0.6633845567703247,-0.597572386264801,-0.16733939945697784,0.2471877485513687,0.062048036605119705,0.03315112367272377,-0.07863330841064453,0.05857238918542862,-0.22560730576515198,0.35925137996673584,0.12493960559368134,0.5564935803413391,-0.4252214729785919,-0.12863320112228394,-0.24961702525615692,-0.355332612991333,-0.5099087953567505,0.20088140666484833,0.1907486468553543,0.7250495553016663,-0.12308993190526962,-0.15845732390880585,0.8903121948242188,0.15664884448051453,0.10743843764066696,0.06778832525014877,-0.1239691898226738,0.03851086646318436,-0.6127204895019531,-0.48332297801971436,-0.0894664078950882,0.03939544036984444,-0.05180134251713753,-0.19044946134090424,-0.09183922410011292,0.020532332360744476,-0.24544933438301086,0.21335533261299133,-0.11134521663188934,-0.16353508830070496,-0.583045244216919,-0.674203634262085,-0.5109516978263855,-0.4434494078159332,-0.7200219631195068,0.10155480355024338,0.3060651421546936,0.2604198157787323,-0.03866737335920334,0.16914275288581848,0.8347556591033936,0.02485913783311844,-0.02865215390920639,0.47125279903411865,0.24729476869106293,0.031224675476551056,0.11355902999639511,-0.039999764412641525,-0.17281000316143036,-0.33954891562461853,-0.16852536797523499,0.09652123600244522,0.056972336024045944,0.07172694802284241,0.08576679229736328,0.3047630190849304,-0.215580016374588,-0.7317523956298828,-0.8453114628791809,0.21036474406719208,-0.7165386080741882,-0.6683477163314819,-1.1698477268218994,0.13409949839115143,0.7600529193878174,0.08133202791213989,-0.09375029057264328,0.22988395392894745,0.2992527484893799,0.19464340806007385,-0.03671051934361458,-0.4370291829109192,0.4240485727787018,-0.030936220660805702,0.2186688333749771,-0.23160099983215332,-0.6172326803207397,-0.44980719685554504,0.0895555168390274,0.09031206369400024,-0.12558230757713318,-0.06437995284795761,0.5569718480110168,0.06057971343398094,-0.49283847212791443,-0.18229736387729645,-0.4346315860748291,-0.5781273245811462,-0.43743687868118286,-0.7189547419548035,-0.5957785844802856,-0.4071637690067291,0.758621096611023,0.10203584283590317,0.4841955900192261,0.3917219936847687,-0.24276778101921082,0.08573378622531891,-0.10039152204990387,-0.5955400466918945,0.665239691734314,-0.5947806239128113,-0.18934033811092377,0.02406221441924572,-0.6615924835205078,-0.16952694952487946,-0.04631568863987923,0.19832134246826172,0.12891554832458496,-0.26398205757141113,0.5377700328826904,-0.18855129182338715,0.16616687178611755,-0.03795662522315979,-0.6346267461776733,-1.098175048828125,-0.05974375829100609,-0.32568907737731934,-0.26780927181243896,-0.422614723443985,0.11053290963172913,-0.07017059624195099,0.16008804738521576,-0.5992873311042786,-0.3406723737716675,-0.4071016013622284,0.002554327016696334,0.11877890676259995,0.03318902850151062,-0.528279185295105,-0.3740294277667999,-1.038587212562561,-0.4631040394306183,0.05359483137726784,-0.22421981394290924,0.16504530608654022,0.24481338262557983,0.1498119831085205,0.5379412770271301,-0.02910725772380829,-0.36564967036247253,-0.4705337882041931,-0.18869496881961823,-0.7895940542221069,-0.2640365958213806,-0.6776304244995117,-1.0490103960037231,-1.7985868453979492,-0.4680582880973816,-0.26292330026626587,-0.1303359419107437,-0.4376380443572998,-0.3879506289958954,0.009178032167255878,0.45647066831588745,-0.2186971753835678,-0.4965977966785431,-0.812954843044281,-1.1774603128433228,-0.7298188805580139,-0.3723022937774658,-0.18034443259239197,0.13305310904979706,-0.02793661318719387,0.12996864318847656,-0.02197163552045822,0.11014261096715927,-0.5759968161582947,-0.8350712656974792,-0.27335822582244873,-0.6333281397819519,0.09501221776008606,-0.44856539368629456,-1.1463031768798828,-0.8945627212524414,-0.7797156572341919,-0.5143740773200989,-0.3149435520172119,0.08362936973571777,-0.29742634296417236,-0.06739205867052078,-0.7165020108222961,-0.261823445558548,-0.42574313282966614,0.03192056715488434,-0.4674294888973236,-0.4222215712070465,-0.5494093298912048,-0.02217598631978035,-0.23509763181209564,-0.21029722690582275,0.08942876756191254,-0.0647389218211174,0.25805899500846863,0.15503862500190735,0.01247129775583744,-0.7386438250541687,-0.21866251528263092,-0.026098957285284996,0.22880849242210388,-0.6312458515167236,-1.1022882461547852,-0.1458689421415329,-0.013573618605732918,-0.694979727268219,-0.2264910638332367,-0.23410214483737946,0.11319006979465485,-0.5205336809158325,-0.7400580048561096,-0.640384316444397,-0.028721511363983154,0.09872523695230484,-0.5310529470443726,-0.4765382409095764,-0.6012627482414246,-0.017606597393751144,-0.049135323613882065,-0.10975919663906097,0.16218847036361694,0.06548497825860977,0.22686824202537537,0.06511876732110977,-0.4836672842502594,-1.0193744897842407,0.2163553535938263,-0.15004394948482513,-0.4771682024002075,0.3228397071361542,-0.4881556034088135,-0.3909643888473511,0.19362162053585052,-0.42448362708091736,-0.10071858763694763,0.33637556433677673,-0.49057987332344055,-0.22544515132904053,-0.1158883199095726,-0.10785848647356033,-0.4249948561191559,-0.07403784245252609,-0.4710371196269989,-0.4785482585430145,-0.22794920206069946,-0.16418123245239258,0.09184824675321579,-0.17076082527637482,-0.013385827653110027,0.0856478214263916,-0.0018766582943499088,0.13518305122852325,-0.3811584711074829,-0.38168245553970337,-0.07801280915737152,0.12099099904298782,0.1260734498500824,0.17803765833377838,0.12523365020751953,0.3996050953865051,-0.22867317497730255,-0.7644814848899841,0.44362547993659973,1.060807466506958,0.7600467801094055,0.9462688565254211,0.6511414647102356,0.4360591471195221,0.2816350758075714,0.21306559443473816,-0.11653191596269608,-0.22193880379199982,-0.07653490453958511,0.11844681203365326,-0.13694898784160614,0.018994582816958427,-0.15135110914707184,0.1581939309835434,-0.06562098860740662,0.20178532600402832,0.08776389807462692,0.002034650184214115,0.21164175868034363,0.35365548729896545,0.15739239752292633,0.010924494825303555,0.29657337069511414,0.47134625911712646,0.0794251561164856,0.5377166271209717,0.7246116995811462,0.6123566031455994,0.826094388961792,0.9039295315742493,0.9046421051025391,0.8796990513801575,0.5668165683746338,0.3339196741580963,0.3438204824924469,0.22769419848918915,-0.11721209436655045,-0.21263387799263,-0.015746910125017166,-0.044529546052217484,-0.17407099902629852,-0.16158120334148407,-0.17959648370742798,0.12924200296401978,-0.014723547734320164,0.3380454182624817,0.2516084611415863,0.46817657351493835,0.461824893951416,0.5974602103233337,0.8395227789878845,0.6064082384109497,0.8056396842002869,0.7568879723548889,0.8759577870368958,0.49414703249931335,0.6651861071586609,0.2514723539352417,0.5968972444534302,0.7156541347503662,0.5260958671569824,0.30777379870414734,0.32535451650619507,-0.06043780967593193,-0.09168555587530136,0.14275816082954407,-0.11944133043289185,-0.07894105464220047,0.0068379174917936325,-0.11326045542955399,-0.08561310917139053,-0.06503690779209137,0.1720227599143982,-0.15496324002742767,-0.07262833416461945,0.21192671358585358,0.16689954698085785,0.05679383501410484,0.22023169696331024,0.3110508620738983,0.20922255516052246,0.22674044966697693,-0.0296225156635046,0.23180131614208221,-0.013734357431530952,-0.10303547978401184,0.051096219569444656,0.04216986894607544,0.08937989175319672,0.14814946055412292,-0.07217416167259216,0.15243680775165558,0.08331964910030365,-0.0027952163945883512,0.055300332605838776,-0.07381480932235718,-0.10463659465312958,-0.04404757171869278,-0.06591007113456726,-0.15078359842300415,-0.07621292769908905,-0.09075254201889038,-0.024846773594617844,-0.020258678123354912,0.2377307116985321,-0.026144014671444893,0.16211152076721191,-0.11429322510957718,-0.019008059054613113,-0.033061087131500244,0.050479091703891754,0.03979790583252907,-0.09901690483093262,-0.09082430601119995,0.10631858557462692,-0.07490610331296921,-0.03405351564288139,-0.02661786787211895,-0.12842898070812225,0.10514327138662338,-0.05810334533452988,-0.15491700172424316,0.10301534831523895,-0.013404183089733124],[-0.17164826393127441,-0.1103048175573349,0.2133668214082718,0.1271677315235138,0.027275122702121735,-0.1040901467204094,-0.05936276912689209,-0.1764923632144928,0.18448148667812347,0.15909285843372345,-0.09169038385152817,0.25075310468673706,0.08679831773042679,0.04155818372964859,0.13152895867824554,-0.02256960980594158,0.10420780628919601,0.02498033456504345,0.19473141431808472,0.016118744388222694,0.33068910241127014,0.17560382187366486,0.1380411684513092,0.16885510087013245,0.07734782248735428,0.002983385231345892,0.18782474100589752,-0.10767512768507004,-0.14077554643154144,0.14925166964530945,0.222946897149086,-0.18744564056396484,0.06850916892290115,0.09263908863067627,-0.1322244256734848,-0.1348457932472229,-0.07863440364599228,0.03742118552327156,-0.02006668783724308,0.30524203181266785,0.2496452033519745,0.35282614827156067,0.11534547805786133,0.011398853734135628,-0.10031832754611969,0.3455512225627899,0.04749293625354767,-0.06352520734071732,0.21023498475551605,0.03192898631095886,-0.06870580464601517,0.0032126244623214006,0.004396866075694561,-0.033338796347379684,0.15918394923210144,-0.09624633193016052,-0.09469495713710785,-0.05880977585911751,0.15970999002456665,0.2219749093055725,-0.10081944614648819,0.02276029996573925,-0.04348267987370491,-0.19420881569385529,-0.010729744099080563,0.04488915577530861,0.29467976093292236,0.2834496796131134,0.20566526055335999,0.08097542822360992,0.21072624623775482,0.2932179272174835,0.0033865603618323803,0.061757855117321014,0.17210637032985687,0.4554372727870941,0.2527051568031311,-0.0144086554646492,0.3222370743751526,0.1106657013297081,0.0981132760643959,-0.0004493871529120952,0.0936114490032196,0.06855561584234238,-0.022781753912568092,0.0992923155426979,0.06626707315444946,-0.03711646422743797,0.0038032853044569492,0.03336991369724274,0.13879521191120148,0.021220216527581215,0.020995449274778366,0.08266384899616241,-0.009093809872865677,-0.0467824712395668,-0.14767363667488098,0.07165190577507019,0.11979015171527863,0.2345534861087799,-0.20448608696460724,0.4671817719936371,0.928446352481842,0.6546275019645691,0.18177945911884308,0.4084474742412567,0.14890170097351074,0.06042127683758736,-0.04062242433428764,0.1276804655790329,0.037758611142635345,0.07449913769960403,0.03028457798063755,-0.09165075421333313,0.005906828213483095,-0.20649179816246033,0.14675554633140564,-0.1275891661643982,0.09486011415719986,-0.005132373422384262,0.014419796876609325,0.21391475200653076,0.3255878686904907,0.3204019069671631,-0.21751587092876434,-0.6474931836128235,-1.0456843376159668,-0.7649964094161987,-0.5587608814239502,-0.0016974583268165588,0.12688419222831726,0.16980794072151184,0.17684325575828552,-0.03615284338593483,0.011466030031442642,0.1044677346944809,-0.27198895812034607,0.11818306893110275,-0.009150092490017414,0.18521636724472046,-0.10543768107891083,0.011684996075928211,0.1824440211057663,-0.07589241117238998,0.3011561334133148,0.1930861920118332,-0.14636042714118958,-0.1039130762219429,0.12407904863357544,0.12391921132802963,0.19103026390075684,0.010795198380947113,-0.23647138476371765,-1.2137168645858765,-0.4674646258354187,-0.4341616928577423,-0.32496994733810425,0.2089456468820572,-0.07865744829177856,-0.38980886340141296,-0.11745081841945648,-0.24310258030891418,-0.41069647669792175,0.019877731800079346,0.06306186318397522,0.10848821699619293,-0.1809028685092926,-0.16770806908607483,-0.024934912100434303,-0.12069736421108246,-0.006387032102793455,-0.24253319203853607,0.24864624440670013,-0.12291578203439713,0.09021422266960144,0.40723133087158203,0.11998479813337326,-0.40010732412338257,-0.6185254454612732,-1.0686278343200684,-0.9946154952049255,-0.7134824991226196,-1.1228864192962646,-1.312005639076233,-1.5157394409179688,-0.9343087673187256,-1.1576378345489502,-0.6143361330032349,-0.47395139932632446,-0.4303419291973114,0.4230983555316925,0.4306377172470093,-0.16883067786693573,-0.09939628094434738,0.040861375629901886,-0.06083858385682106,-0.06645328551530838,-0.12042605876922607,0.2084401547908783,0.06202555075287819,-0.07706327736377716,-0.04297740012407303,0.22386591136455536,0.41342893242836,-0.5553207397460938,-0.6802282333374023,-0.44200047850608826,-1.0789430141448975,-1.2861238718032837,-0.8851271867752075,-1.294179916381836,-1.032244086265564,-2.0516602993011475,-0.6962927579879761,-1.0422309637069702,-0.6857095956802368,-1.2231625318527222,-0.9637362957000732,0.05728694424033165,-0.25528720021247864,-0.1734585016965866,-0.32465553283691406,-0.0010468681575730443,0.028821095824241638,-0.06805029511451721,0.1415303647518158,0.093694306910038,-0.03005143813788891,-0.14663666486740112,-0.04811316356062889,0.2011696696281433,0.6269523501396179,-0.42478594183921814,-0.4539896845817566,-0.36471027135849,-0.9172942638397217,-0.9330987334251404,-0.9312765002250671,-1.4576976299285889,-1.1676515340805054,-1.0913076400756836,-0.7482680678367615,-0.7831194996833801,-0.5034364461898804,0.33160361647605896,-0.42060983180999756,-0.1829523742198944,-0.386844664812088,0.10012677311897278,-0.13564392924308777,-0.37600502371788025,0.18940679728984833,0.05763988569378853,0.03502262383699417,-0.1131306141614914,-0.12207727879285812,0.03994579613208771,0.024114690721035004,-0.314097136259079,0.0987180769443512,-0.4477873742580414,-0.8429639935493469,-0.6513408422470093,-0.655612051486969,-0.6155645847320557,-1.3202805519104004,-1.3641258478164673,-0.6597713232040405,-0.4687226116657257,-0.13067568838596344,0.019154774025082588,-0.25564125180244446,0.49947983026504517,0.6486989855766296,-0.05870113521814346,-0.217132106423378,-0.14707040786743164,-0.39976435899734497,-0.12427584081888199,0.06194395571947098,-0.08953116089105606,-0.010460169054567814,0.05605696886777878,0.2338959127664566,0.041096411645412445,-0.46372777223587036,-1.1129554510116577,0.14910192787647247,-0.22949035465717316,0.04036005213856697,0.23222903907299042,-0.33590200543403625,0.4504454433917999,-1.0392836332321167,-0.7465865015983582,1.5520501136779785,0.6417571306228638,0.9852966070175171,0.13908134400844574,0.24584992229938507,0.32238444685935974,0.34149235486984253,0.028886597603559494,-0.3524878919124603,-0.13514497876167297,-0.14846889674663544,-0.017179731279611588,0.012536074034869671,0.13839758932590485,0.011408554390072823,-0.06901172548532486,0.13172701001167297,0.020109564065933228,-0.1585727334022522,-0.641539990901947,-0.0089840954169631,-0.24734912812709808,0.22268502414226532,0.17629843950271606,0.22214475274085999,0.4254056513309479,-0.7571428418159485,0.08036527037620544,0.9011978507041931,0.26172104477882385,-0.7458266615867615,-0.039454828947782516,0.3781838119029999,-0.5713698863983154,-0.46187663078308105,-0.27743810415267944,0.0410182811319828,-0.18449968099594116,-0.12219705432653427,-0.06748506426811218,-0.0484834648668766,0.055676259100437164,0.0630069151520729,-0.05796824395656586,0.13116241991519928,-0.11153639853000641,-0.09936195611953735,-0.025910573080182076,0.19145768880844116,0.444019079208374,0.8206748366355896,0.35098010301589966,0.44098764657974243,0.9159257411956787,0.3924965262413025,-0.23967045545578003,0.15469209849834442,0.2659110128879547,-0.39244750142097473,-0.6738530397415161,-0.12191582471132278,-0.6559553742408752,0.006317837629467249,0.06961226463317871,0.43316224217414856,0.2927910089492798,0.035356953740119934,0.060941312462091446,-0.023447664454579353,0.12369995564222336,0.014968957751989365,0.20901839435100555,-0.020350050181150436,0.030480481684207916,0.5068210363388062,0.555946409702301,0.11408781260251999,0.9743592739105225,0.7497916221618652,1.0848057270050049,1.7368830442428589,0.8617005944252014,-0.020579349249601364,-0.12429482489824295,0.016885943710803986,0.13898958265781403,0.2329682856798172,-0.18899919092655182,-0.255584716796875,-0.07371281087398529,0.49445483088493347,0.4116170406341553,0.6720883250236511,0.2901594340801239,-0.027963262051343918,0.07982386648654938,0.06071123108267784,-0.13498787581920624,-0.07710233330726624,-0.08850143849849701,0.06560784578323364,0.2513180077075958,0.5803815722465515,0.7803460955619812,0.27251172065734863,1.2881505489349365,1.0819547176361084,0.5559623837471008,1.3980355262756348,1.518599510192871,-0.03942817822098732,-0.7057589292526245,-0.006992086302489042,0.43305182456970215,0.3870649039745331,0.8878982067108154,0.13542303442955017,0.6781949400901794,0.23380710184574127,0.5726533532142639,0.4069739282131195,0.6930803060531616,0.39326944947242737,0.02624441497027874,-0.011299737729132175,0.06934059411287308,-0.16761712729930878,-0.1715475171804428,0.20339888334274292,0.2577380836009979,0.4309961795806885,0.9976591467857361,0.8255391120910645,0.3442893624305725,0.5993636250495911,1.075929880142212,0.6866543292999268,0.4164973497390747,-0.024413902312517166,-0.036019738763570786,0.19354021549224854,0.7907776832580566,-0.14540506899356842,0.3040417730808258,0.4013029932975769,-0.2538752853870392,-0.19269686937332153,0.8882074952125549,0.9777587652206421,0.39641672372817993,0.46474775671958923,0.1531105488538742,-0.13804365694522858,-0.03964676707983017,-0.220965176820755,-0.18572022020816803,0.04621678590774536,0.03350183367729187,0.7024324536323547,0.9870047569274902,0.6321141719818115,0.5083860158920288,0.06274842470884323,0.024442007765173912,0.4588369131088257,0.5171902775764465,0.7856647968292236,0.46312570571899414,1.2277028560638428,0.46618181467056274,0.26243019104003906,0.20646612346172333,0.603141188621521,0.18144963681697845,-0.02850848063826561,0.3911297023296356,0.9636410474777222,0.7968093752861023,0.5407702922821045,0.11295081675052643,0.2191200852394104,-0.07820311933755875,0.1554197072982788,0.14123691618442535,0.05168568715453148,0.06634435057640076,0.441680371761322,0.708974301815033,0.25950148701667786,0.7041517496109009,0.09618143737316132,0.06185602396726608,0.2638068199157715,0.10834825783967972,-0.03129458427429199,0.12209749966859818,0.5609740614891052,0.6610845327377319,0.979063093662262,0.5776347517967224,0.06069296970963478,-0.1258428394794464,0.12512245774269104,0.07589379698038101,1.032537817955017,0.6753808856010437,0.400377094745636,0.04157591983675957,-0.03874297812581062,0.17724984884262085,0.16662006080150604,0.08731056749820709,-0.17239612340927124,-0.18010295927524567,-0.08873835951089859,0.0792805626988411,0.09056849777698517,-0.204159215092659,-0.10252555459737778,0.2366708517074585,0.5452130436897278,0.09566988795995712,0.4145602583885193,0.7659855484962463,0.7034091353416443,0.9522382616996765,0.3630145788192749,0.8635990619659424,-0.5427330136299133,-0.29206734895706177,-0.28999844193458557,-0.24952971935272217,0.4444282054901123,0.5960270762443542,0.30589258670806885,-0.02511301077902317,-0.06586237996816635,-0.03999508172273636,-0.05649680644273758,0.15417201817035675,-0.6130382418632507,-0.4108924865722656,-0.26693883538246155,0.07123389095067978,-0.34262239933013916,-0.3135428726673126,-0.5931795239448547,-0.0073071252554655075,0.22292156517505646,0.28397396206855774,0.9215540885925293,1.0758416652679443,0.002056931611150503,0.44152623414993286,0.17064638435840607,0.5046495199203491,-0.4621909558773041,-0.554044783115387,-0.6370540857315063,-0.9746966361999512,0.10861201584339142,0.13425563275814056,-0.0014461076352745295,-0.00669313408434391,-0.08779768645763397,-0.1852959841489792,-0.13747861981391907,-0.18225868046283722,-0.6326576471328735,-0.7201748490333557,-0.5846701264381409,-0.7024530172348022,-0.7297382354736328,-1.033247709274292,0.09958751499652863,0.745972752571106,0.14505615830421448,0.09287179261445999,0.12680211663246155,-0.27707308530807495,-0.2605339586734772,0.2701791226863861,-0.2838144898414612,0.41022661328315735,-0.5369078516960144,-0.8231528997421265,-0.49731507897377014,-0.5633971691131592,-0.22612808644771576,-0.21675482392311096,0.04048936069011688,0.1558656543493271,-0.030780768021941185,0.06689279526472092,0.0067594535648822784,-0.17573541402816772,0.04540884867310524,-0.08447487652301788,-0.5078202486038208,-0.751605749130249,-0.4592704474925995,-1.0152502059936523,-0.4574219584465027,-0.3132653534412384,-0.4147317409515381,-0.37763711810112,0.3454538583755493,-0.7998849153518677,-1.010327696800232,-0.5402635931968689,-0.6815491318702698,-0.03944180905818939,-0.48885494470596313,-0.5102629065513611,-0.18479879200458527,-0.3119973838329315,-0.22973743081092834,-0.36698320508003235,0.12196841835975647,-0.13954907655715942,0.10953711718320847,-0.1968308687210083,0.17826630175113678,-0.03572848439216614,-0.17100876569747925,-0.21455985307693481,-0.2774350941181183,-0.19632279872894287,-0.40507394075393677,-0.4402466118335724,-0.4053937792778015,-0.8418046236038208,-0.31059470772743225,-0.7029123306274414,-0.3589940667152405,-0.6296590566635132,-0.6306787729263306,-0.48946401476860046,-0.8529160618782043,-0.08975385874509811,-0.11645191162824631,-0.4233846962451935,-0.0689522847533226,-0.34083542227745056,-0.07868817448616028,0.23689629137516022,0.2717355191707611,0.07689747959375381,0.14809992909431458,0.0250528696924448,-0.014774272218346596,0.0008203224861063063,-0.003127194009721279,-0.4399949312210083,-0.5125970244407654,-0.4298219680786133,-0.037502799183130264,-0.3058176338672638,-0.27520468831062317,-0.9117663502693176,-0.7127228379249573,-0.9867990016937256,-0.4881588816642761,-0.157737597823143,0.2043270468711853,-0.5857437252998352,-0.22444584965705872,-0.8155889511108398,-0.05366453528404236,-0.012430584989488125,-0.318269282579422,-0.5357171297073364,-0.23972618579864502,0.04410321265459061,0.07762297242879868,-0.054995760321617126,-0.1882859468460083,-0.11119506508111954,-0.1674482822418213,-0.14384666085243225,0.10364136099815369,-0.06956769526004791,-0.32737997174263,-0.046198755502700806,-0.35043302178382874,-0.16227521002292633,-0.3737829029560089,-0.4171234369277954,-0.16032737493515015,-0.28192591667175293,-0.3028735816478729,-0.15528815984725952,-0.3759399950504303,-0.415755957365036,-0.17058797180652618,-0.8654917478561401,0.08064340054988861,-0.5084710717201233,-0.7395932674407959,-0.562332808971405,-0.6342936158180237,-0.29514944553375244,-0.15745529532432556,0.030205801129341125,0.0466582365334034,-0.006608510855585337,0.1786632090806961,0.1270323395729065,-0.02738441899418831,0.16793721914291382,-0.15443915128707886,-0.16615746915340424,-0.4724685251712799,-0.8062173128128052,-0.3498515486717224,-0.4444446265697479,-0.7758376002311707,-0.6035137176513672,-0.9611837863922119,-1.424137830734253,-1.1258503198623657,-0.8611169457435608,-0.9721616506576538,-0.8594890236854553,-0.02675807848572731,-0.03360864520072937,-0.20320306718349457,-0.4694746732711792,-0.2440701127052307,-0.19912497699260712,-0.029521675780415535,0.05257764831185341,-0.09075509756803513,0.08075177669525146,-0.11392053961753845,0.19005590677261353,-0.04419214650988579,0.02939792163670063,-0.005619090981781483,-0.2853059768676758,-0.18003278970718384,-0.620740532875061,-0.6752657890319824,-0.9072062373161316,-0.6134952902793884,-0.9264092445373535,-0.49957579374313354,-0.9149330258369446,-0.516119658946991,-0.610888659954071,-0.8321804404258728,-1.2602972984313965,-0.29211002588272095,-0.17639094591140747,0.03284488245844841,-0.10604580491781235,-0.17356327176094055,-0.01594540663063526,-0.018948936834931374,-0.05807700753211975,-0.08157166838645935,0.14681264758110046,0.1558808535337448,-0.1710323542356491,0.18740805983543396,-0.030682658776640892,0.14499227702617645,0.14693857729434967,-0.08478973060846329,0.11175056546926498,-0.10023263096809387,-0.029201192781329155,0.04576421156525612,-0.1339617222547531,0.1002916693687439,-0.10371498018503189,-0.07140091061592102,0.1905636340379715,-0.14562292397022247,-0.07834494858980179,-0.19139118492603302,-0.22159846127033234,-0.005288207437843084,0.06895582377910614,-0.012599964626133442,0.15256202220916748,0.035134207457304,0.11999889463186264,-0.18676967918872833],[0.1737397164106369,-0.0990879237651825,0.14515377581119537,0.1507585048675537,-0.00815972127020359,-0.04859889671206474,-0.16821078956127167,-0.2076340615749359,-0.08580491691827774,0.18054558336734772,0.20651856064796448,-0.045312993228435516,0.21638551354408264,-0.09065002202987671,0.06638791412115097,-0.2008703649044037,0.053366973996162415,-0.078291155397892,0.22876191139221191,-0.101039357483387,0.07393036782741547,0.21992075443267822,0.12277689576148987,-0.028976207599043846,-0.0168140958994627,0.18836699426174164,-0.06293418258428574,0.08277861028909683,-0.119504913687706,-0.025142395868897438,0.10858611017465591,0.09232145547866821,0.18220148980617523,0.009378353133797646,-0.006074322387576103,-0.03057645820081234,-0.1808614581823349,0.1246151328086853,-0.12579117715358734,0.17972445487976074,0.26065000891685486,0.18724405765533447,0.13384586572647095,0.0589621439576149,0.1152677834033966,-0.0572412833571434,0.24758461117744446,-0.1396583765745163,0.1668367236852646,-0.13759295642375946,0.33419880270957947,0.1872316151857376,-0.08694744110107422,-0.09506241977214813,0.1952936053276062,0.1465255469083786,-0.07556628435850143,-0.16455017030239105,0.20669248700141907,0.1229824647307396,0.1626928746700287,0.17176589369773865,0.12306033819913864,-0.0012261465890333056,0.25083744525909424,0.42741912603378296,0.12653934955596924,0.22786636650562286,0.10475309938192368,0.160953089594841,0.2710203230381012,0.1158401146531105,0.5082758665084839,0.25350093841552734,0.2832145392894745,0.3914942145347595,0.28069397807121277,0.014377365820109844,0.0913730040192604,-0.1057460829615593,0.10121099650859833,-0.08045703172683716,0.14300081133842468,-0.12928688526153564,0.12582680583000183,-0.17832045257091522,-0.14730338752269745,0.031873274594545364,-0.007808784022927284,0.2355349063873291,0.18641924858093262,0.20234140753746033,0.3033113181591034,0.6685324907302856,-0.030712110921740532,-0.4041292369365692,-0.3488767743110657,0.011271161027252674,-0.2923986613750458,0.29932504892349243,-0.06883788853883743,0.17420227825641632,0.8935403823852539,0.48101183772087097,0.42753782868385315,0.14459186792373657,0.36761435866355896,0.12133778631687164,0.07741536945104599,-0.13512568175792694,-0.1545897126197815,-0.07220596075057983,-0.08833210170269012,0.023966465145349503,-0.17500101029872894,-0.01849854551255703,0.0997200757265091,0.03095339611172676,-0.20354406535625458,0.2442200481891632,-0.014549115672707558,-0.36187371611595154,-0.16965267062187195,-0.16883909702301025,-0.42218276858329773,-0.7033948302268982,-0.0808275118470192,-0.145636647939682,-0.29818248748779297,0.09008219838142395,-0.04478256404399872,0.3100961446762085,0.6921195983886719,0.5518739223480225,0.3977169990539551,0.6561148166656494,-0.0894823670387268,0.13836196064949036,-0.22327451407909393,0.01583803817629814,-0.021226495504379272,-0.11084964871406555,0.11213011294603348,-0.10196882486343384,0.2021951824426651,-0.21528100967407227,-0.09751162678003311,-0.0010601419489830732,0.24375952780246735,-0.04401469975709915,-0.003363832365721464,-0.012327034957706928,-0.16999006271362305,-0.3301975727081299,0.385964035987854,0.13724981248378754,-0.20398639142513275,0.7679521441459656,0.5218091607093811,0.5668559670448303,0.7595917582511902,0.9983872771263123,0.6033399105072021,0.7961782813072205,0.3016243278980255,-0.0071274214424192905,-0.049776457250118256,0.16775430738925934,-0.02570231445133686,0.16853836178779602,-0.16081242263317108,-0.19733838737010956,0.027392636984586716,-0.49222493171691895,-0.21529003977775574,0.5011084675788879,0.09790057688951492,-0.109623022377491,0.19416970014572144,-0.4504294693470001,-0.16214263439178467,-0.336724191904068,-0.2279912233352661,0.6192193627357483,0.11053063720464706,0.6557496190071106,0.14788922667503357,-0.4693128764629364,0.20962433516979218,-0.13341572880744934,0.3053348958492279,0.41770580410957336,0.049631956964731216,-0.2304454892873764,-0.12239407002925873,-0.1331484168767929,-0.12529951333999634,0.09448309987783432,0.031209303066134453,-0.16533339023590088,-0.06281983852386475,0.029456118121743202,0.33689218759536743,0.6555802226066589,0.4868793189525604,0.3716440796852112,0.36392834782600403,-0.03530866280198097,-0.3383707106113434,-0.44098907709121704,-0.7293540835380554,-0.04583936557173729,-0.13031063973903656,-1.0507409572601318,-0.8436576128005981,-0.44345536828041077,-0.4906350076198578,-0.9834573268890381,-0.46243178844451904,-0.5300783514976501,-0.28919556736946106,-0.07580814510583878,-0.21589702367782593,-0.1665468066930771,0.006680445279926062,0.12083984911441803,-0.069964200258255,-0.22802627086639404,-0.13791102170944214,0.04846814274787903,0.1347058117389679,-0.15956833958625793,0.2815588116645813,0.2768721580505371,-0.08347538858652115,0.19049441814422607,-0.7407547831535339,-0.7322770357131958,-1.4154757261276245,-1.0917059183120728,-1.0453768968582153,-0.864245593547821,-0.5983675122261047,-0.7746080160140991,-0.3499804139137268,-0.9479164481163025,-0.0726025328040123,-0.2497766762971878,-0.0404665507376194,-0.06708180159330368,-0.25645315647125244,0.12267650663852692,0.12579630315303802,0.17750461399555206,-0.04529843106865883,0.011779027059674263,0.15090397000312805,0.16355589032173157,0.16919003427028656,-0.2994576096534729,-0.4604503810405731,-0.29567939043045044,-0.19919684529304504,-0.4042104482650757,0.437126487493515,-0.6797983050346375,-1.231032371520996,-1.3410977125167847,-2.016087293624878,-1.0208146572113037,-0.8212077617645264,-1.0779374837875366,-0.9912918210029602,-0.33557745814323425,-0.17875227332115173,-0.13103535771369934,0.017010293900966644,-0.24011288583278656,-0.21659836173057556,-0.19090932607650757,-0.03160950168967247,0.12730617821216583,0.17777615785598755,0.08847809582948685,0.387236088514328,0.16812826693058014,-0.4630122482776642,0.563297688961029,-0.29098838567733765,-0.08436435461044312,0.370258092880249,0.31511902809143066,-0.10249418020248413,-0.14688783884048462,-1.0935556888580322,-0.6368196606636047,-0.6637411117553711,-0.08600208163261414,0.1208115816116333,-0.18199430406093597,-0.5074495077133179,-0.25016170740127563,-0.027447422966361046,0.06516624242067337,0.2542436420917511,-0.3132597506046295,0.0430728904902935,0.18917544186115265,-0.05444446951150894,0.04421352595090866,0.15554413199424744,-0.08282136172056198,0.3075610101222992,0.09233897179365158,-0.05762751027941704,0.572303295135498,0.09843314439058304,-0.041262175887823105,-0.14826145768165588,-0.07988600432872772,-0.033326406031847,-0.33409184217453003,-0.29363763332366943,0.4065791964530945,0.7142364382743835,0.11957946419715881,0.3641732633113861,0.18356721103191376,-0.5080881714820862,-0.18374425172805786,-0.11007826775312424,-0.015020609833300114,0.22134847939014435,0.00940912589430809,0.1222279816865921,0.1693839728832245,-0.11977630108594894,0.08149585127830505,-0.015879979357123375,0.1744394451379776,0.2566288411617279,-0.12808267772197723,-0.2675967812538147,-0.025586551055312157,-0.24651475250720978,-0.3175164461135864,-0.15206411480903625,0.11853694170713425,-0.23052209615707397,0.24733884632587433,-0.012803632766008377,0.2719314396381378,0.0882597416639328,-0.1208484023809433,0.2393507957458496,0.06603661924600601,0.07617451250553131,-0.05494627729058266,-0.2842530608177185,0.00484544038772583,0.5796293020248413,0.13676893711090088,-0.10620283335447311,-0.11492294818162918,0.01830350048840046,0.18429096043109894,0.06583554297685623,-0.08841712027788162,0.08881373703479767,0.14263701438903809,-0.08427827805280685,-0.45168352127075195,-0.14202937483787537,-0.09750271588563919,-0.1525692641735077,0.6195987462997437,-0.2701520621776581,-0.158135324716568,0.05270267277956009,0.36731356382369995,0.154661163687706,-0.13493794202804565,-0.2854028046131134,0.03560365363955498,-0.0010315878316760063,-0.06459121406078339,-0.023905474692583084,0.25749221444129944,0.21510231494903564,0.0009225236135534942,0.04736725240945816,-0.032129865139722824,-0.13792651891708374,-0.09145147353410721,0.1815142184495926,-0.0018539698794484138,0.0378740094602108,-0.029343806207180023,0.42773061990737915,-0.0026145735755562782,-0.4509616792201996,0.4128114581108093,0.019140802323818207,0.6845768094062805,0.2286662608385086,-0.06085298955440521,0.5302636623382568,0.135576993227005,0.027515241876244545,0.20165938138961792,-0.11882305145263672,-0.06350263953208923,0.34822365641593933,-0.7427446842193604,0.44874122738838196,0.003474216675385833,-0.26610952615737915,-0.09521745145320892,0.0008545946911908686,-0.050395429134368896,0.12039656937122345,0.12842418253421783,-0.050494059920310974,0.19840925931930542,-0.1553717702627182,-0.15867964923381805,0.25536230206489563,-0.09772168844938278,0.07241277396678925,0.24745365977287292,0.301485538482666,0.7641833424568176,0.6564110517501831,1.2842260599136353,0.3970850110054016,0.04840070754289627,-0.005988667253404856,-0.10288053750991821,-0.15543608367443085,-0.2876136004924774,-0.3039116859436035,-0.22943377494812012,0.055283766239881516,0.14784952998161316,-0.07570440322160721,0.2672678232192993,-0.010652773082256317,-0.04929249733686447,0.12847787141799927,-0.16306570172309875,-0.026518389582633972,0.08632464706897736,-0.4193519353866577,0.16967028379440308,0.2901914417743683,0.7660617828369141,0.4815405607223511,0.3578227162361145,0.0973382517695427,0.5257406234741211,0.6815295815467834,1.3640199899673462,1.2912979125976562,0.5595740675926208,-0.02313469909131527,-0.023301515728235245,-0.6659455299377441,-0.18228082358837128,0.20959129929542542,-0.060568589717149734,-0.28814828395843506,-0.04991995915770531,0.16332365572452545,0.21432116627693176,-0.01870737224817276,0.005161556880921125,-0.1836802363395691,-0.007921701297163963,0.2099919617176056,0.1681222915649414,-0.33740028738975525,-0.02000925876200199,0.05609792843461037,0.00240531750023365,0.7123303413391113,0.35556989908218384,-0.23477588593959808,0.2769988775253296,1.181367039680481,1.3628506660461426,0.8399655818939209,0.4860003590583801,0.3038165867328644,0.16690708696842194,-0.7197522521018982,-0.33350780606269836,0.15402334928512573,-0.11480361223220825,0.21993912756443024,0.09641274064779282,0.3957115411758423,0.16314135491847992,0.13649162650108337,-0.07708433270454407,0.0009090547100640833,0.05911005660891533,0.2532379627227783,0.03199067711830139,-0.107801154255867,0.10406748205423355,0.02331005223095417,0.44627124071121216,0.33163800835609436,-0.3905946612358093,-0.2637099027633667,0.38000744581222534,1.0182595252990723,0.9195660948753357,0.9303998947143555,0.28164902329444885,0.49950918555259705,0.18312811851501465,-0.00799423735588789,-0.03214640915393829,0.12414435297250748,-0.43247970938682556,0.022400720044970512,0.3557948172092438,0.41935139894485474,0.2377414107322693,-0.017978966236114502,0.1390642672777176,0.014796947129070759,0.2008741796016693,0.0020868713036179543,-0.37850552797317505,0.2971121370792389,0.3496526777744293,0.033946286886930466,-0.19460240006446838,0.04811358079314232,-0.08046647906303406,-0.3940477967262268,-0.24152857065200806,-0.6698440909385681,-0.09024623036384583,0.527896523475647,0.2706040143966675,0.5773850679397583,0.8068005442619324,0.4253489077091217,0.3101471960544586,0.4362949728965759,-0.003987669479101896,-0.38903820514678955,0.6281383633613586,0.4023991823196411,0.3356732130050659,0.15250135958194733,0.10598162561655045,0.13064967095851898,0.14354075491428375,-0.17012828588485718,-0.5490668416023254,-0.41514137387275696,-0.044530004262924194,0.04592183604836464,-0.5570870637893677,-0.06491115689277649,0.1291266828775406,-0.05508584529161453,-0.26770099997520447,0.1610906720161438,-0.35797837376594543,0.16506025195121765,0.36440518498420715,0.6871978640556335,-0.014252359047532082,-0.03908650949597359,-0.4218239188194275,-0.1102963238954544,-0.1914466768503189,0.04017293080687523,0.40103206038475037,0.40489429235458374,0.046744685620069504,-0.0021316094789654016,0.13640196621418,-0.07582148909568787,-0.17979493737220764,0.002462503733113408,-0.23479194939136505,-0.37921464443206787,-0.005744497757405043,0.16602687537670135,0.23646123707294464,-0.17888911068439484,0.1967250257730484,0.6672600507736206,-0.10671327263116837,0.5327221155166626,0.009880977682769299,0.3246496021747589,0.34998783469200134,0.29897594451904297,0.3969588279724121,0.29317694902420044,-0.28092461824417114,-0.1626053750514984,0.24152472615242004,0.39202389121055603,0.47504928708076477,0.3541363775730133,0.023484252393245697,0.20316557586193085,0.1711307317018509,-0.015084926038980484,-0.19169199466705322,-0.13979002833366394,-0.09180149435997009,-0.03603687509894371,0.3532520830631256,0.1744108647108078,0.0839448943734169,0.10473202168941498,0.14830102026462555,0.2974616587162018,-0.06189040467143059,0.010943002067506313,0.025659332051873207,0.0160854309797287,0.5174252390861511,-0.15600699186325073,0.2229599952697754,-0.02559640444815159,0.10356790572404861,0.2048868089914322,0.525651216506958,-0.11445648968219757,0.06957120448350906,0.06388044357299805,0.14695611596107483,0.044313400983810425,0.0015714693581685424,0.20157968997955322,-0.10605062544345856,0.050573691725730896,-0.3784819543361664,0.30748626589775085,0.1494051069021225,0.6145046353340149,0.34047549962997437,-0.010275758802890778,0.026794711127877235,-0.0901864767074585,0.04942919313907623,0.22486211359500885,0.10537373274564743,0.4407370686531067,0.4187878966331482,-0.09388861805200577,0.32361361384391785,0.31061193346977234,0.39311158657073975,0.379361629486084,-0.28049182891845703,-0.3295716345310211,-0.09025134146213531,-0.0774277001619339,-0.15671248733997345,-0.17704927921295166,-0.11048752069473267,0.12205415219068527,-0.19836542010307312,0.05600735545158386,-0.252407044172287,-0.1898430734872818,0.24662204086780548,0.07337237894535065,-0.3141583204269409,0.09958689659833908,0.0716778114438057,-0.24041123688220978,-0.017322789877653122,0.32225650548934937,0.10499996691942215,0.2366437017917633,0.25283244252204895,-0.35561883449554443,-0.051196131855249405,-0.0859115719795227,0.15439552068710327,-0.07242179661989212,-0.38561761379241943,-0.5383614301681519,-0.39705294370651245,0.08285422623157501,0.23207414150238037,0.14365129172801971,0.11558837443590164,0.14802221953868866,-0.10577713698148727,0.1309710294008255,-0.07936597615480423,0.08622260391712189,-0.15771284699440002,-0.4794168770313263,-0.4481460750102997,-0.3732930123806,-0.18155537545681,-0.7561953663825989,-0.5616877675056458,-0.3503601551055908,-0.2744520604610443,-0.3481890559196472,-0.617161214351654,-0.7715624570846558,-0.4277856647968292,-0.5716956257820129,-0.41524678468704224,-0.29616865515708923,-0.2725234031677246,-0.2299681007862091,-0.18747276067733765,-0.12767808139324188,0.13386289775371552,-0.18533951044082642,-0.13604605197906494,-0.18083150684833527,0.07383742928504944,-0.06395547091960907,-0.11561062932014465,0.11825766414403915,-0.10917442291975021,-0.13315831124782562,-0.12690317630767822,-0.12135475873947144,-0.029689917340874672,-0.008550593629479408,-0.32505562901496887,-0.35754427313804626,-0.5167909860610962,-0.6137228012084961,-0.5826400518417358,-0.7483682632446289,-0.6336410641670227,-0.24071046710014343,-0.3922303318977356,-0.03635602444410324,-0.10072717815637589,0.05912872776389122,-0.10799872130155563,0.13199663162231445,-0.09823116660118103,0.18777698278427124,0.16057859361171722,-0.03627671301364899,0.006947455927729607,0.14661911129951477,-0.10655613988637924,-0.06407351046800613,-0.16034884750843048,0.018639815971255302,0.035606905817985535,-0.10202507674694061,0.03602540120482445,0.026174388825893402,-0.18835961818695068,-0.18301552534103394,0.13352487981319427,-0.2534930109977722,0.058933284133672714,0.12988083064556122,-0.025662902742624283,-0.14393964409828186,-0.02911696396768093,0.0774322897195816,-0.015439631417393684,-0.07315932959318161,-0.084401935338974,0.1487678736448288,0.08212344348430634,-0.18967266380786896,0.19005201756954193],[0.12913870811462402,0.15049803256988525,0.2025456577539444,-0.0892830640077591,-0.09526461362838745,0.11722629517316818,-0.06318996101617813,0.18158654868602753,0.0193687304854393,0.10887694358825684,-0.21087941527366638,0.10618402808904648,-0.2634206712245941,0.11372265219688416,0.06716497242450714,-0.07764750719070435,0.015147868543863297,-0.17086277902126312,-0.028383329510688782,0.03886626288294792,-0.17168597877025604,-0.031008116900920868,-0.032284270972013474,-0.09239333868026733,-0.07303278148174286,0.1332264542579651,-0.09726431220769882,0.091702401638031,0.06506571173667908,-0.1385057419538498,-0.06024336814880371,-0.1924511045217514,0.0016512367874383926,0.11699199676513672,0.20391710102558136,-0.09240847080945969,0.2711236774921417,-0.11356927454471588,-0.026280872523784637,0.14694766700267792,-0.25975799560546875,-0.22339366376399994,-0.3161618709564209,0.06748034805059433,-0.13747334480285645,-0.1341816484928131,-0.051479969173669815,0.18079055845737457,-0.29673072695732117,0.0019392209360376,-0.013988940976560116,-0.2015487104654312,0.05914119631052017,0.17670084536075592,-0.08152074366807938,0.18071384727954865,-0.08864374458789825,-0.09470231831073761,0.01207372359931469,-0.05476925149559975,0.10652875900268555,-0.12870723009109497,-0.033503737300634384,0.07276276499032974,-0.06399179250001907,-0.09506970643997192,-0.24444580078125,-0.1337837278842926,-0.03976810351014137,-0.1517753005027771,-0.44844669103622437,-0.3969660997390747,-0.3605542480945587,-0.1685669869184494,-0.07801926881074905,-0.24933700263500214,-0.04355805367231369,-0.20909829437732697,-0.34446632862091064,-0.13405995070934296,0.07581892609596252,0.11448168754577637,0.09672050178050995,0.12214820832014084,0.011044489219784737,-0.16818444430828094,0.16080638766288757,-0.12995855510234833,-0.095784991979599,0.0345635786652565,-0.029537620022892952,0.023731237277388573,0.1617385745048523,0.014215745031833649,0.1712251603603363,0.45094040036201477,0.4069439172744751,-0.09359193593263626,0.018854763358831406,-0.009938637726008892,0.13793636858463287,-0.3265882134437561,-0.6443564295768738,-0.8145269751548767,-0.3246918022632599,-0.08938732743263245,-0.21581482887268066,-0.522351086139679,-0.341555118560791,0.125902459025383,0.1976291835308075,-0.15845690667629242,0.14793625473976135,0.05461500957608223,-0.17230412364006042,-0.053866416215896606,-0.032173071056604385,0.05122034624218941,0.1618625670671463,0.34461548924446106,-0.21152395009994507,0.1890115886926651,0.12505267560482025,-0.06446998566389084,-0.013740036636590958,0.3216102719306946,0.17997443675994873,-0.3078041672706604,-0.17741362750530243,0.3070346713066101,0.3713715076446533,-0.46865400671958923,-0.34900611639022827,-0.38956543803215027,-0.41281643509864807,-0.41913315653800964,-0.05641297623515129,0.1754174530506134,0.3221552073955536,-0.15736345946788788,-0.03432503342628479,0.019809924066066742,0.20051750540733337,-0.12285687774419785,0.057786859571933746,0.13925325870513916,0.4963373839855194,0.584973156452179,0.468207985162735,0.33349257707595825,0.23916541039943695,0.3531605899333954,0.8328009247779846,1.059079885482788,-0.009304383769631386,0.22180531919002533,0.2190500944852829,0.71650230884552,0.6190990209579468,-0.0955427885055542,0.18498064577579498,-0.07686833292245865,0.16633838415145874,-0.012470599263906479,-0.08223171532154083,0.38907137513160706,0.234538272023201,0.15380610525608063,-0.08464314788579941,0.17486825585365295,0.13053114712238312,-0.03779521584510803,0.20137614011764526,0.34772729873657227,0.4041176438331604,-0.08911777287721634,-0.10650684684515,-0.22829623520374298,0.10958961397409439,0.9695236682891846,0.953425943851471,0.8101392984390259,0.16481013596057892,0.16340047121047974,0.32246869802474976,0.7416199445724487,0.490543395280838,0.3143438398838043,0.3194478452205658,0.3217298090457916,0.4654911458492279,0.3530435562133789,0.33632636070251465,0.4161257743835449,0.002982350531965494,-0.048607632517814636,-0.2110515981912613,0.18763601779937744,0.07712983340024948,0.011216669343411922,0.1931871920824051,0.088722825050354,0.33885520696640015,-0.19452032446861267,0.2839692234992981,-0.3940434753894806,-0.6082951426506042,-0.003304563695564866,0.16232457756996155,0.013986526988446712,0.30026084184646606,-0.15435966849327087,0.5182676315307617,-0.15384435653686523,-0.2613731324672699,0.5112046599388123,0.1888611763715744,0.21966588497161865,0.7438991665840149,0.6547580361366272,0.47516104578971863,0.5622037649154663,0.27140310406684875,0.07425360381603241,-0.11907389014959335,-0.1679917573928833,0.19538941979408264,0.07955438643693924,0.08623813092708588,0.15758678317070007,0.20203112065792084,-0.13531972467899323,0.5470008850097656,0.5445312261581421,0.15140338242053986,0.04975941777229309,0.23033538460731506,-0.020574495196342468,0.5118535757064819,0.28263992071151733,0.1343051642179489,-0.27422189712524414,-0.33306947350502014,0.6452070474624634,0.5128276348114014,0.3381575644016266,0.458240270614624,0.7635941505432129,0.8418782949447632,0.662596583366394,0.5942057371139526,0.07447437196969986,-0.0894545391201973,0.060667734593153,-0.04444199800491333,0.067725270986557,0.06435860693454742,0.031618282198905945,0.0221245139837265,0.2780810594558716,0.10462328046560287,0.5838801860809326,-0.19971974194049835,0.07653582841157913,0.00023038580548018217,0.034130752086639404,-0.10631956160068512,0.0909300222992897,-0.2295324057340622,0.29657456278800964,0.14209190011024475,0.38227447867393494,0.747063159942627,0.644515872001648,0.8754761219024658,0.9681036472320557,0.8642863035202026,1.1268004179000854,0.3372459411621094,0.03300182893872261,-0.097934789955616,0.045878078788518906,0.07061821222305298,0.0052450657822191715,-0.26223990321159363,-0.05537082254886627,-0.22482018172740936,0.11850614100694656,-0.11930430680513382,0.22760212421417236,-0.44737040996551514,-0.39059707522392273,-0.1200709119439125,-0.0678049772977829,-0.5334702134132385,-0.6921418309211731,-0.3150666356086731,0.061664242297410965,0.15296897292137146,-0.1521396040916443,-0.15427879989147186,0.49355578422546387,0.7381961345672607,0.8612297773361206,1.189500093460083,0.9995666742324829,0.3274381756782532,0.10060779005289078,0.21078018844127655,-0.0293570663779974,-0.11466148495674133,-0.13560040295124054,-0.2594040632247925,-0.32099562883377075,-0.3837239146232605,-0.6297935843467712,0.02172868140041828,-0.21695303916931152,-0.06267236918210983,0.0902760699391365,-0.04824785888195038,0.358431339263916,-0.2094520777463913,-0.13482505083084106,-0.42601171135902405,-0.09484319388866425,-0.45551326870918274,-0.53075110912323,-0.22370415925979614,-0.1713409572839737,0.0701250284910202,0.9663321375846863,1.1406501531600952,0.7455172538757324,0.33975815773010254,0.22180119156837463,0.04099578782916069,0.10532911866903305,0.06206034868955612,-0.1257241666316986,-0.1476021111011505,-0.05276770517230034,-0.17147785425186157,-0.5194773077964783,-0.11883596330881119,-0.6393874287605286,0.40316978096961975,0.20843574404716492,0.31043541431427,0.8393388986587524,0.35521528124809265,-0.11547577381134033,0.05365633964538574,-0.11525467783212662,-0.24697287380695343,0.0675804615020752,-0.44150784611701965,-0.7705520987510681,-0.6021080613136292,-0.37184208631515503,0.42801353335380554,0.36247503757476807,0.273347407579422,0.17300072312355042,-0.15534144639968872,0.22067749500274658,0.11258115619421005,0.17369741201400757,-0.22931255400180817,-0.27285003662109375,-0.07489129900932312,-0.3291964828968048,-0.29157641530036926,-0.07628243416547775,-0.5846468806266785,-0.17247579991817474,0.38148757815361023,0.7633879780769348,-0.25685685873031616,-0.059295374900102615,-0.43377378582954407,-0.8290759921073914,0.007697500754147768,-0.556416928768158,-0.7361983060836792,-0.8114035725593567,-0.5907022356987,-0.22601263225078583,-0.15021927654743195,0.0721355527639389,0.13355377316474915,0.2748793661594391,0.09197726100683212,-0.12698489427566528,0.12523287534713745,0.03984272480010986,-0.0014092809287831187,-0.48381391167640686,-0.14267951250076294,-0.07411558926105499,-0.1339137703180313,0.22813421487808228,-0.629797637462616,0.01031496748328209,0.3726321756839752,0.5715495944023132,-0.20907559990882874,-0.6954709887504578,-0.7667354941368103,0.11976643651723862,-0.39330679178237915,-0.9031633734703064,-0.9834345579147339,-0.4385283589363098,-0.1931772083044052,-0.28132563829421997,-0.24547208845615387,-0.11820732802152634,0.1448688954114914,0.15558575093746185,-0.09817052632570267,0.02435329370200634,0.20810778439044952,-0.10778503119945526,0.03684962913393974,-0.3988651931285858,-0.22208598256111145,-0.014981933869421482,0.06196359917521477,-0.18979108333587646,0.4015190899372101,0.09146823734045029,0.405683308839798,0.12722738087177277,-0.6912639141082764,-0.6543330550193787,-0.03569571673870087,-0.5620700716972351,-0.753818929195404,0.014066600240767002,-0.21941418945789337,-0.6481637358665466,-0.29826265573501587,-0.4218344986438751,0.0569707490503788,0.35804104804992676,0.3013862669467926,0.09384673088788986,0.021525537595152855,-0.10533429682254791,0.15373672544956207,0.21140846610069275,0.018587995320558548,-0.21063922345638275,-0.41741761565208435,-0.37904563546180725,-0.3228902518749237,-0.49360191822052,0.10976067930459976,-0.057975415140390396,0.31436529755592346,0.28737330436706543,-0.6631247401237488,-0.5502098798751831,-0.0545729361474514,-0.3161868453025818,-0.6261091232299805,0.1692570298910141,-0.26179808378219604,-0.18026477098464966,0.05928304046392441,-0.21403896808624268,0.3498493432998657,0.029124213382601738,0.12273012101650238,0.06409487128257751,0.18263834714889526,0.019633494317531586,0.20805518329143524,0.5012256503105164,0.16146019101142883,0.5993887186050415,-0.10157731175422668,-0.11429913341999054,-0.22100725769996643,-0.04998776689171791,-0.3336627185344696,-0.32537615299224854,-0.5709400773048401,-0.7324497103691101,-0.6130501627922058,-0.7637640833854675,-0.12449728697538376,-0.3812115490436554,-0.036744341254234314,0.007008528336882591,0.03764158859848976,0.045372623950242996,-0.11273455619812012,-0.06576158851385117,0.1304827779531479,0.2927277386188507,0.02553808130323887,0.053658850491046906,0.0023189166095107794,-0.08457387983798981,-0.1339065432548523,0.2814103066921234,0.29394954442977905,0.7791080474853516,0.7245489954948425,0.015795746818184853,-0.15058362483978271,0.125527024269104,0.2043863832950592,-0.014400499872863293,-0.043727222830057144,0.3676290214061737,-0.15916909277439117,-0.09455689042806625,0.23942478001117706,0.41320517659187317,-0.0908375158905983,0.0510035939514637,0.36538025736808777,-0.18633882701396942,0.08024507761001587,0.8113161325454712,0.1150798425078392,0.14323833584785461,-0.039126817137002945,-0.11137408018112183,0.07645924389362335,0.10372965782880783,0.04091363400220871,0.20209170877933502,0.2832835614681244,0.46115636825561523,0.507347583770752,0.4817531108856201,0.8954029679298401,0.37428414821624756,-0.3229997158050537,-0.03829948231577873,-0.0416906364262104,-0.16136430203914642,-0.65306156873703,-0.6604761481285095,0.045303888618946075,-0.1567564308643341,0.21644316613674164,0.40948328375816345,-0.033413805067539215,-0.056335609406232834,0.796544075012207,0.7337501645088196,0.29193997383117676,0.16132697463035583,-0.10492700338363647,0.1549767553806305,0.15362992882728577,0.13074876368045807,0.2817371189594269,0.2509680390357971,0.42972514033317566,0.832595944404602,0.8111674189567566,0.7954747676849365,1.0258209705352783,0.9667967557907104,0.28328201174736023,0.03789892420172691,-0.6342711448669434,-0.5045458078384399,-0.7191120386123657,-0.3498704135417938,-0.2705249488353729,-0.5878685712814331,-0.04567642882466316,0.2718113660812378,0.06384434551000595,0.49982380867004395,1.2665846347808838,0.435171902179718,-0.13013358414173126,-0.19368770718574524,-0.1775025874376297,-0.1978348195552826,0.18907959759235382,0.1823621690273285,0.08178434520959854,0.09800700098276138,0.4402903914451599,0.7533754110336304,1.0159958600997925,0.6244833469390869,0.557246208190918,0.3712533712387085,0.03354737162590027,0.10344159603118896,-0.2197582721710205,0.3152610957622528,0.31703850626945496,-0.015504487790167332,0.10963810980319977,-0.007904792204499245,0.17742137610912323,0.6892876625061035,0.16846270859241486,0.7991876602172852,0.6105661392211914,-0.17913620173931122,-0.45508378744125366,0.08176100254058838,-0.11422114819288254,-0.11122652143239975,0.10166479647159576,0.0035856240428984165,0.22375179827213287,0.3472227156162262,0.29709726572036743,0.3864676356315613,0.6505813002586365,0.3749130070209503,-0.02832093834877014,0.0008317301981151104,0.5476080179214478,0.892906904220581,1.2144335508346558,0.4498255252838135,-0.17858143150806427,0.10452333092689514,0.10270700603723526,-0.032538142055273056,0.18712836503982544,0.13892191648483276,0.4860689342021942,0.020047174766659737,0.21264785528182983,-0.1255422979593277,0.0009799175895750523,-0.11425487697124481,-0.1510716825723648,0.10484461486339569,0.17223455011844635,-0.11585842818021774,0.13654300570487976,0.04248138889670372,0.4920825660228729,0.2061583250761032,-0.07354502379894257,0.1469597965478897,0.2574659287929535,-0.02735157497227192,0.08524680882692337,0.8002341389656067,0.5484126806259155,0.3437848687171936,0.46536657214164734,1.5797615051269531,1.0092952251434326,0.3605184853076935,-0.19989481568336487,-0.3876796066761017,0.007337984628975391,-0.15538707375526428,0.2883795499801636,0.05144920572638512,-0.1021338701248169,0.1830081343650818,-0.12080508470535278,-0.09809078276157379,-0.1336919665336609,0.19682787358760834,-0.13574737310409546,0.1624424010515213,0.3229871094226837,0.2108483612537384,-0.15873292088508606,0.11310538649559021,0.37752410769462585,-0.3105563819408417,-0.3480875790119171,-0.0019125831313431263,0.12820804119110107,-0.09452778100967407,0.650660514831543,0.2900538146495819,0.3824223279953003,0.31428757309913635,0.6588848829269409,0.519609272480011,0.22188381850719452,0.02328331395983696,-0.013043830171227455,-0.12586040794849396,-0.11779621988534927,0.14776189625263214,0.04706345871090889,-0.16977675259113312,-0.17386730015277863,-0.18183836340904236,-0.07724028080701828,-0.005315660033375025,-0.19801896810531616,-0.1029716208577156,-0.012819323688745499,-0.15178637206554413,-0.3378635048866272,0.4579913020133972,-0.00316908722743392,0.15580400824546814,0.3165122866630554,0.11846233159303665,-0.44897332787513733,0.26849833130836487,-0.01114809699356556,0.20908766984939575,0.22141945362091064,0.23378607630729675,0.1353285163640976,-0.18915891647338867,-0.2625015377998352,0.19721171259880066,0.016027865931391716,0.016054809093475342,0.147477924823761,0.056458979845047,-0.20166219770908356,0.1983279585838318,0.10500861704349518,0.16178005933761597,-0.12501190602779388,-0.1671900898218155,-0.057125650346279144,-0.07955699414014816,-0.09550701826810837,-0.2403031438589096,0.02962234802544117,-0.02977011911571026,-0.1356258988380432,-0.2940778434276581,0.06386227905750275,0.014876214787364006,-0.05321937054395676,0.016937527805566788,-0.14694739878177643,-0.1678188294172287,-0.2150769680738449,-0.04573105275630951,-0.19754710793495178,-0.17979758977890015,-0.08886105567216873,0.07637064903974533,0.0796993300318718,0.03667176514863968,0.09126074612140656,0.03510782867670059,0.0325884073972702,-0.11753566563129425,-0.10389400273561478,0.042847346514463425,0.18090082705020905,0.06443343311548233,0.08927785605192184,-0.20797282457351685,-0.13284847140312195,-0.20810915529727936,-0.21852870285511017,-0.17688386142253876,-0.0561973974108696,0.060143303126096725,-0.17831362783908844,0.04939747601747513,0.08806855976581573,0.09321662783622742,-0.03078797087073326,-0.12669987976551056,-0.12050092220306396,0.11926106363534927,-0.19795863330364227,0.0984724834561348,0.17447124421596527,0.13535231351852417],[-0.1483231484889984,0.1394696682691574,0.07802179455757141,0.10154028981924057,-0.1767171025276184,0.04484846815466881,-0.14830981194972992,0.09664694219827652,-0.18577797710895538,-0.2253701388835907,-0.13297614455223083,0.11884167790412903,-0.18660856783390045,0.046754419803619385,-0.1781347543001175,-0.11521103978157043,-0.1529332548379898,0.028980322182178497,0.14995744824409485,-0.05033865198493004,-0.0002812050224747509,-0.057600025087594986,0.05062366649508476,0.12567701935768127,-0.1821187287569046,0.18638846278190613,0.10305812954902649,-0.08943822979927063,0.09869715571403503,0.016000766307115555,0.17312200367450714,0.0350341834127903,0.08991902321577072,-0.06329257041215897,0.20312121510505676,-0.1032450720667839,0.04194492846727371,0.18763306736946106,0.0500083863735199,0.1327890306711197,-0.17146846652030945,-0.14154551923274994,-0.08855628967285156,-0.005427840631455183,0.1495569944381714,-0.07853055745363235,0.09655333310365677,0.04111829027533531,-0.07232022285461426,0.11703668534755707,-0.02114192023873329,0.0199600663036108,0.1579824537038803,-0.14250950515270233,0.008312913589179516,-0.13586105406284332,-0.0837022066116333,-0.1446383148431778,0.08254467695951462,0.1502302885055542,0.07459136098623276,-0.11518548429012299,0.1462506353855133,-0.06548068672418594,-0.2728457748889923,-0.051679160445928574,-0.1005857065320015,-0.0844612717628479,-0.006036067847162485,-0.1791277378797531,-0.183182030916214,-0.0372188538312912,-0.13726948201656342,-0.2503631114959717,-0.21031498908996582,-0.18562573194503784,-0.20536530017852783,-0.014988239854574203,0.008827835321426392,-0.15613344311714172,-0.14814376831054688,-0.07396669685840607,-0.12297266721725464,-0.1427692174911499,0.05086003616452217,-0.06851199269294739,-0.09032825380563736,0.1638553887605667,0.0674518272280693,-0.02812272496521473,0.10701526701450348,-0.11491873115301132,0.17930050194263458,-0.01803090237081051,-0.02583586983382702,-0.3213132619857788,0.23999834060668945,0.3205864429473877,0.32687556743621826,0.05397876352071762,-0.25135448575019836,-0.4541812539100647,-0.04935958608984947,-0.2967716455459595,0.13874214887619019,-0.029483109712600708,0.12271813303232193,-0.1081588938832283,-0.1642095148563385,-0.13018055260181427,-0.008951866999268532,-0.14322417974472046,-0.15900243818759918,0.1396263837814331,0.04045727103948593,0.15036369860172272,-0.22731709480285645,0.18975171446800232,0.16735173761844635,-0.11750815808773041,0.0879528671503067,0.05417134240269661,0.21731965243816376,0.3341061472892761,0.20551057159900665,0.5414542555809021,0.05284404009580612,-0.12149559706449509,-0.5152316093444824,-0.9978046417236328,-0.5797097086906433,-0.3347468674182892,-0.0457281693816185,0.2076733410358429,0.2009267657995224,0.004136702977120876,-0.1770971417427063,-0.16735972464084625,-0.13524870574474335,-0.13060903549194336,0.1003112718462944,-0.03881093114614487,0.14360451698303223,0.11993353068828583,-0.12660658359527588,0.28728145360946655,0.2368762195110321,0.06335952877998352,0.19668330252170563,0.3363943099975586,0.2871530055999756,0.5722805857658386,0.2682065963745117,0.31192800402641296,0.5533202886581421,0.0723152905702591,-0.2195461541414261,-0.8233256340026855,-0.8311690092086792,-0.5471905469894409,-0.5614150762557983,-0.3196011483669281,-0.07779766619205475,-0.03907749429345131,-0.13628268241882324,-0.15731611847877502,-0.021219955757260323,0.02233893610537052,0.05122542008757591,0.12643317878246307,-0.00189147237688303,-0.10565336793661118,-0.12221310287714005,0.13449279963970184,0.3637882471084595,0.13218247890472412,-0.02517717517912388,-0.10737168043851852,-0.12141302973031998,0.3237045705318451,0.5369093418121338,-0.33685579895973206,-0.3465137779712677,-0.15683776140213013,0.09822136163711548,-0.572712779045105,-0.4648643434047699,-0.5313048958778381,-0.1999291479587555,-0.036126598715782166,-0.2601461112499237,-0.21475549042224884,-0.35403043031692505,-0.2751722037792206,0.15965722501277924,-0.05902833491563797,-0.09854555875062943,0.10930361598730087,0.13560740649700165,0.018086284399032593,0.29245293140411377,-0.088817298412323,0.11212635040283203,0.18913398683071136,-0.4173618257045746,-0.5160554051399231,-0.4841379225254059,0.017041221261024475,-0.6029953956604004,-0.5379510521888733,-0.26492008566856384,-0.3003489673137665,0.1480366289615631,-0.5837458372116089,-0.7688032984733582,-0.13902248442173004,0.10602394491434097,0.2973018288612366,-0.3547549545764923,-0.4306331276893616,-0.2170366644859314,-0.16989870369434357,-0.2088031768798828,-0.13057157397270203,0.029880613088607788,0.1588505357503891,0.2410927563905716,0.3798035681247711,0.13153840601444244,0.16267870366573334,-0.03904736414551735,0.16959232091903687,-0.20071528851985931,-0.6501516699790955,0.21047554910182953,0.015462344512343407,0.1665578931570053,0.35778647661209106,0.6314061284065247,0.5869829058647156,-0.02380979433655739,-0.4800379276275635,-0.400495707988739,-0.02341737225651741,-0.38794198632240295,-0.07736922055482864,0.017176050692796707,-0.13718168437480927,-0.1192026436328888,-0.2756842374801636,0.045495860278606415,-0.10451702773571014,0.14935697615146637,0.02800712361931801,0.3547533452510834,0.16251415014266968,0.19146236777305603,0.5414118766784668,0.5086631774902344,0.27527475357055664,0.6387882828712463,0.055021077394485474,-0.2618843615055084,-0.09359004348516464,0.3349423110485077,0.4492766261100769,1.0422110557556152,-0.27994614839553833,-0.19110417366027832,0.04416986554861069,-0.017767515033483505,0.15269531309604645,0.027588164433836937,0.32252413034439087,0.018831096589565277,-0.039165642112493515,-0.20340894162654877,-0.016576528549194336,0.10311450064182281,0.09508519619703293,-0.05198700353503227,-0.00920888315886259,0.21109890937805176,0.24711143970489502,0.5320335030555725,0.6800631880760193,0.3318476676940918,0.48440778255462646,0.2984984815120697,0.296600341796875,0.4262933135032654,0.12968462705612183,0.11561023443937302,0.9611530303955078,0.7827836871147156,-0.10026352107524872,-0.2642776370048523,0.018695509061217308,0.23455242812633514,0.08695925772190094,0.3095748722553253,0.3753698766231537,0.40994951128959656,0.14407142996788025,-0.26021236181259155,-0.07573152333498001,-0.03269656375050545,-0.17076122760772705,-0.07895293831825256,0.114866703748703,0.1603025496006012,0.5099186301231384,0.39955222606658936,0.21044394373893738,-0.34980592131614685,0.4464894235134125,-0.3649091124534607,0.47304439544677734,0.7220315337181091,-0.10972046852111816,0.4647563099861145,0.7936795949935913,0.47920724749565125,0.0793774425983429,-0.7864482402801514,-0.32589441537857056,0.2669086754322052,0.14657022058963776,0.22135034203529358,0.11605116724967957,-0.13307279348373413,-0.4388311505317688,-0.154510036110878,-0.20701844990253448,-0.20853908360004425,0.13806383311748505,-0.1429152935743332,0.03550377115607262,0.5190393924713135,0.5320307612419128,0.13006949424743652,0.4561890959739685,0.060767609626054764,0.17464634776115417,-0.2788296043872833,0.32551485300064087,-0.05760432034730911,0.052440088242292404,0.4257707893848419,0.2246408760547638,0.26507627964019775,-0.31438568234443665,-0.6680068969726562,0.04479426518082619,-0.0863305851817131,-0.046830516308546066,-0.11907545477151871,-0.10149018466472626,-0.10070223361253738,-0.37460410594940186,-0.3154059946537018,-0.15647734701633453,0.17468465864658356,0.1456889808177948,-0.11824431270360947,0.10156923532485962,0.02381541207432747,0.15996190905570984,0.000374955969164148,0.37823155522346497,-0.2969590723514557,0.08751295506954193,-0.08188806474208832,-0.43197354674339294,-0.005526535678654909,-0.27846860885620117,-0.3285274803638458,-0.7381011247634888,0.1724037528038025,-0.6794769167900085,-0.3424093723297119,-0.13869081437587738,-0.11440139263868332,-0.472476989030838,-0.21309269964694977,-0.16282883286476135,-0.01869489997625351,-0.41113710403442383,-0.3371070921421051,0.15316618978977203,0.0005903601413592696,-0.06341826915740967,-0.07600826025009155,-0.04586738720536232,0.04607545956969261,0.2837173640727997,0.026246370747685432,0.16613544523715973,-0.5724676847457886,-0.24455276131629944,-0.45670047402381897,-0.3631090223789215,0.2558442950248718,-0.44699984788894653,-1.000215768814087,-0.5853721499443054,0.25732773542404175,0.2608048915863037,-0.2921696603298187,-0.16750550270080566,-0.02367938496172428,0.1321047842502594,-0.05085906386375427,0.5762686729431152,-0.08268723636865616,-0.37842899560928345,-0.22362929582595825,-0.023596400395035744,-0.08607102185487747,-0.16688868403434753,-0.107425257563591,0.2104261964559555,-0.04690705984830856,-0.019236799329519272,0.29339879751205444,-0.29973265528678894,-0.39299556612968445,-0.07281934469938278,0.026099827140569687,0.19378195703029633,0.28164955973625183,-0.7124105095863342,-1.5215027332305908,-0.794197142124176,0.23769813776016235,-0.24960394203662872,-0.3341774344444275,0.3907310366630554,0.28477808833122253,0.4721726179122925,0.0002600843145046383,0.3609772026538849,0.08398181945085526,-0.028244836255908012,-0.30216488242149353,-0.0101679228246212,-0.16865617036819458,-0.07475940883159637,-0.041899122297763824,-0.1318035125732422,-0.020012322813272476,0.16335700452327728,0.09547749161720276,-0.2459535002708435,-0.07268806546926498,0.1871144026517868,0.2628151476383209,0.22481609880924225,-0.3337506949901581,-1.1270557641983032,-1.3813849687576294,-0.42207303643226624,0.2988958954811096,-0.053076766431331635,-0.41246268153190613,-0.338326096534729,-0.04188410937786102,0.590287983417511,0.31461241841316223,0.27322688698768616,0.0882226899266243,-0.17887188494205475,0.29472026228904724,-0.18137134611606598,-0.06544297933578491,-0.06451506912708282,-0.14522352814674377,-0.11327929049730301,-0.19336482882499695,-0.07353544235229492,0.07535680383443832,-0.3062816262245178,-0.05668475106358528,0.005402110517024994,-0.13283215463161469,-0.3496447503566742,-0.8919672966003418,-1.0358507633209229,-1.1216166019439697,-0.3100435435771942,0.1354992389678955,0.5202463269233704,-0.19164343178272247,-0.12978218495845795,0.2467302829027176,0.9731569290161133,0.5717396140098572,0.20736108720302582,0.5139452815055847,0.26687291264533997,0.5255247950553894,0.058763034641742706,0.1844816356897354,0.07382689416408539,-0.08560016006231308,0.16878409683704376,-0.061292633414268494,-0.08564352989196777,0.026082193478941917,-0.2651806175708771,-0.6370558142662048,-0.2696587145328522,-0.3810774087905884,-1.0684759616851807,-0.6929223537445068,-0.371745765209198,-0.4244176149368286,0.157240629196167,0.2065904438495636,-0.08533022552728653,0.20142899453639984,0.05491511523723602,-0.03494921699166298,-0.22128145396709442,-0.20316843688488007,-0.03701367601752281,0.3710516095161438,-0.155384361743927,-0.019761955365538597,0.2298060953617096,-0.10939524322748184,0.15572944283485413,-0.009200130589306355,-0.052258189767599106,0.06301593035459518,-0.14747139811515808,-0.15655426681041718,-0.5839025378227234,-0.6400787830352783,-0.3790382146835327,-0.37604469060897827,-1.2737574577331543,-1.0123828649520874,-0.6233474016189575,-0.2710307836532593,0.27000662684440613,0.32026785612106323,0.1557917445898056,0.02422720193862915,0.008560236543416977,-0.3156549036502838,-0.19972781836986542,-0.32133275270462036,-0.45689088106155396,-0.26353541016578674,-0.18971842527389526,0.04491567611694336,-0.03922523558139801,0.06681827455759048,0.06954986602067947,0.01824788562953472,0.17288872599601746,-0.029573312029242516,-0.20521484315395355,-0.35732096433639526,-0.405688613653183,-0.39714041352272034,-0.3858245313167572,-0.576495349407196,-0.8716117739677429,-0.14868474006652832,-0.14380908012390137,-0.0710073783993721,-0.16376341879367828,0.44722262024879456,0.17811653017997742,-0.04900422692298889,0.09071030467748642,-0.4806104004383087,-0.03976069763302803,-0.04434683173894882,-0.5344986319541931,-0.37896570563316345,-0.12591011822223663,-0.11797196418046951,0.15173354744911194,-0.021883592009544373,-0.1855347603559494,0.1199074238538742,0.12871892750263214,0.0721650943160057,-0.11417120695114136,-0.2747251093387604,-0.1962088942527771,-0.6296953558921814,-0.6155009865760803,-0.28365379571914673,-0.21835438907146454,0.09510612487792969,0.057814426720142365,-0.2246280461549759,-0.17270466685295105,-0.6194255948066711,0.46098607778549194,0.42225995659828186,0.6729954481124878,-0.2864639461040497,-0.08423762023448944,-0.11256230622529984,-0.5036861300468445,-0.16123412549495697,-0.013761190697550774,-0.19541126489639282,-0.18854445219039917,0.1554543823003769,0.17193490266799927,0.03008149564266205,0.1723325252532959,0.02416124939918518,-0.134006068110466,-0.2738502621650696,-0.4673788249492645,-0.4241045415401459,-0.6240536570549011,-0.166331484913826,0.15842008590698242,-0.034207891672849655,-0.09584526717662811,-0.37039387226104736,0.13993166387081146,0.2133176475763321,0.22377130389213562,0.14458557963371277,0.31146448850631714,0.028993189334869385,0.27909305691719055,-0.29066479206085205,-0.5467010140419006,-0.17056767642498016,-0.1590728461742401,-0.07747232168912888,-0.126435786485672,-0.15547658503055573,-0.03676861152052879,0.09826832264661789,0.006614209618419409,-0.13501565158367157,-0.036432038992643356,-0.016733946278691292,0.11978757381439209,-0.16843831539154053,-0.360563725233078,-0.30783262848854065,-0.00015153038839343935,0.06444860249757767,-0.46946313977241516,-0.18182814121246338,0.16339662671089172,-0.11919733136892319,-0.06937406212091446,0.03310006856918335,-0.002218229230493307,-0.2798331081867218,-0.30406495928764343,-0.13536189496517181,-0.4762061536312103,-0.26456883549690247,-0.20362170040607452,0.15109184384346008,0.09984904527664185,-0.1323249340057373,-0.16113673150539398,-0.06927810609340668,-0.0775269865989685,-0.0951184332370758,-0.2167966365814209,-0.1817004531621933,0.33265432715415955,0.15109361708164215,0.05869268625974655,-0.3148757219314575,0.06758543848991394,0.12403798848390579,-0.11255117505788803,-0.15560919046401978,0.1543596237897873,-0.46998703479766846,0.03984275832772255,0.1000853031873703,0.1020723432302475,-0.4490066170692444,-0.2750343680381775,-0.293658971786499,-0.12016060203313828,-0.22048281133174896,-0.055162545293569565,0.004223844036459923,-0.16126778721809387,-0.19290083646774292,0.055832091718912125,0.14947746694087982,-0.1663719266653061,-0.09700927138328552,0.16194429993629456,-0.18544286489486694,0.22961805760860443,0.18482257425785065,0.272763192653656,0.14324158430099487,0.21260862052440643,0.15105298161506653,-0.2312716543674469,0.18713310360908508,-0.06776358187198639,-0.006984113249927759,0.04369569197297096,0.5919454097747803,0.5183370113372803,-0.17100833356380463,0.16042014956474304,0.1351083368062973,0.02739229053258896,-0.032457586377859116,0.002618292812258005,-0.010299532674252987,0.07098926603794098,0.062074724584817886,-0.03903970494866371,-0.12902306020259857,0.0425928458571434,-0.011048957705497742,0.09508859366178513,0.013652880676090717,0.12235171347856522,-0.010207218118011951,0.16959820687770844,0.016476275399327278,-0.035635314881801605,-0.0538158044219017,-0.025008857250213623,-0.3583943545818329,-0.38785693049430847,-0.5653966665267944,-0.44519996643066406,0.022147292271256447,0.0984271839261055,0.12246864289045334,0.15549646317958832,0.03003118932247162,-0.2687609791755676,0.12418662011623383,0.16802366077899933,0.15113221108913422,0.12066175043582916,-0.09014029055833817,-0.03696666285395622,-0.0979262962937355,-0.09214086085557938,-0.1564975380897522,0.0006428025662899017,0.13252386450767517,0.133473202586174,-0.16235357522964478,0.14526841044425964,-0.10050609707832336,0.13407421112060547,-0.015920322388410568,-0.044941991567611694,-0.2806956470012665,-0.01895221322774887,0.026917479932308197,0.0665557011961937,-0.09205213189125061,0.19002166390419006,0.004822959657758474,0.29955822229385376,0.19039329886436462,-0.15027162432670593,0.00397191708907485,-0.06421563774347305,-0.15166305005550385,0.18375614285469055,0.16617435216903687,-0.17274504899978638],[-0.12729258835315704,0.06287310272455215,0.09816942363977432,0.1712835431098938,-0.08301407843828201,0.14444689452648163,0.031316328793764114,-0.1916181594133377,-0.057619497179985046,-0.14018051326274872,0.05797129124403,-0.07249265164136887,0.02198541723191738,-0.13799315690994263,-0.19841822981834412,-0.010767619125545025,-0.21683576703071594,0.16687490046024323,-0.02360520325601101,0.15807855129241943,-0.07177019864320755,0.06305007636547089,-0.07740312069654465,-0.21434326469898224,-0.1023775041103363,0.17995226383209229,0.058858759701251984,0.17577297985553741,-0.05047142878174782,-0.14374971389770508,-0.18496136367321014,-0.1777856945991516,0.14962993562221527,-0.06710678339004517,0.19451814889907837,-0.11698628216981888,-0.13364513218402863,0.08944224566221237,-0.17042995989322662,0.24943985044956207,0.047848109155893326,-0.22515803575515747,0.05139492079615593,0.2652866244316101,-0.08591308444738388,0.11625601351261139,-0.17621098458766937,0.08078406006097794,0.04265282675623894,0.06281357258558273,0.0162518247961998,0.10891828685998917,-0.04938284680247307,0.052815672010183334,-0.10715235024690628,0.1403801441192627,-0.19025573134422302,0.07201531529426575,0.07582872360944748,-0.11519002914428711,0.1369720697402954,0.014334590174257755,-0.1363348811864853,0.12793803215026855,-0.2560403048992157,-0.1669846922159195,0.07909335941076279,-0.07126174122095108,0.0043494259007275105,-0.17235051095485687,0.155772402882576,0.16605959832668304,0.10269676148891449,-0.1258866935968399,-0.13747482001781464,-0.055288173258304596,-0.1287207305431366,0.09877654165029526,0.01582050882279873,-0.16143697500228882,-0.04133902117609978,-0.029888292774558067,-0.09706459194421768,-0.0014769135741516948,0.016822190955281258,-0.0856151208281517,-0.0440099835395813,-0.17099760472774506,-0.09807240962982178,-0.03063686564564705,0.126340851187706,-0.033171396702528,-0.08625509589910507,-0.3052428662776947,0.07159382849931717,-0.2766949236392975,-0.4615485668182373,-0.6021417379379272,-0.29294124245643616,-0.4824000895023346,-0.47375738620758057,-0.40555340051651,-0.5197111964225769,-0.28945818543434143,-0.09239326417446136,0.15841130912303925,-0.11505167186260223,-0.07546393573284149,-0.1231658011674881,0.08449507504701614,0.12717360258102417,-0.08023391664028168,0.12691041827201843,-0.18213988840579987,0.04427715390920639,0.1408783197402954,-0.09162662923336029,-0.036243949085474014,-0.04734402522444725,0.05964622274041176,-0.4374185800552368,-0.1666537970304489,0.038563985377550125,-0.1330462545156479,-0.6780129075050354,-0.6385253071784973,-0.21332737803459167,-0.327522337436676,0.09669008105993271,-0.31071436405181885,-0.19612833857536316,0.0718659982085228,0.21485036611557007,0.08802761882543564,-0.27589330077171326,-0.2364567369222641,-0.11250900477170944,0.07474496960639954,-0.2077517956495285,0.04885290190577507,-0.02567393146455288,-0.01676701009273529,-0.11125743389129639,0.0848735049366951,-0.15282310545444489,-0.1064222902059555,-0.22100356221199036,-0.10145527869462967,-0.878006100654602,-0.667978823184967,-0.7386988997459412,-0.4358433187007904,-0.8323945999145508,-0.7169522643089294,0.18413175642490387,-0.16223134100437164,-0.2708883285522461,-0.5368162393569946,-0.3879707455635071,-0.1482197344303131,-0.41105812788009644,-0.058292314410209656,0.12615425884723663,0.056365374475717545,-0.11520252376794815,-0.11491106450557709,0.03219699114561081,0.1588827669620514,0.1700214445590973,-0.06499966979026794,-0.07227511703968048,-0.022312404587864876,0.0625799298286438,-0.30531299114227295,-0.4624321162700653,-0.619106113910675,-0.767295241355896,-0.8946183919906616,-1.1873846054077148,-0.41235342621803284,-0.782045304775238,-0.5902937650680542,-0.11368318647146225,-0.5360985398292542,0.17671656608581543,-0.5507113337516785,-0.41119247674942017,-0.24339182674884796,-0.17677092552185059,0.17340581119060516,0.22054967284202576,-0.20235303044319153,-0.07086619734764099,-0.2798442542552948,0.10655040293931961,0.018520357087254524,0.08345238119363785,0.07923828065395355,-0.1698068082332611,-0.1507001519203186,-0.09405742585659027,-0.2664357125759125,-0.47185108065605164,-0.5925009250640869,-0.7142576575279236,-0.7057616710662842,-0.7945993542671204,-0.006881235167384148,0.21660660207271576,-0.38086289167404175,-0.23680739104747772,-1.0661497116088867,-0.19224882125854492,-0.46739330887794495,-0.3156919479370117,0.15914960205554962,0.5379320383071899,0.015302024781703949,-0.20941422879695892,-0.07750339061021805,-0.09049420058727264,-0.27845630049705505,0.06376563757658005,0.01290938165038824,0.06144503131508827,-0.12979663908481598,-0.0048977104015648365,0.14255130290985107,-0.17395299673080444,-0.1698436737060547,-0.3884715437889099,-0.41104239225387573,-0.9372266530990601,-0.6036710143089294,-0.22868891060352325,-0.6464362740516663,0.14992696046829224,0.19452758133411407,-0.22001011669635773,-0.48585912585258484,-0.20550115406513214,-0.03431640565395355,-0.01041951309889555,0.1598237007856369,-0.19330982863903046,-0.38672733306884766,-0.14649592339992523,-0.3831019699573517,-0.38890737295150757,-0.19397485256195068,-0.17829231917858124,-0.18842463195323944,0.18652191758155823,0.16706423461437225,0.16307620704174042,0.04847458750009537,-0.1272890269756317,0.07451870292425156,-0.3781357705593109,-0.41694027185440063,-0.885076105594635,-0.8994305729866028,-0.31363752484321594,-0.5649635791778564,0.03783522918820381,0.3813669979572296,0.006049638148397207,0.4275527000427246,0.742854118347168,-0.8142674565315247,-0.36897537112236023,0.05435241758823395,-0.5670782923698425,-0.16641461849212646,-0.6847636103630066,-0.8984339237213135,-0.6793501973152161,-0.32526957988739014,-0.007819338701665401,-0.010082216933369637,0.06306920200586319,-0.05248183757066727,-0.21843981742858887,0.06267222762107849,-0.07836080342531204,-0.1864960938692093,-0.3249862790107727,-0.3002742528915405,-0.8942151665687561,-0.6765362024307251,-0.7067678570747375,0.17456568777561188,0.5741068720817566,0.07593666017055511,0.5215089917182922,1.0958703756332397,0.7561958432197571,-0.17578721046447754,-0.3161373734474182,-0.08865061402320862,-0.4247879981994629,-0.4558437764644623,-0.6993733644485474,-0.41957294940948486,-0.2504456639289856,-0.2998841404914856,-0.006669244728982449,0.06190525367856026,0.14616721868515015,-0.17717736959457397,0.09271696954965591,-0.13268859684467316,0.12646788358688354,-0.10961610823869705,-0.2580147683620453,-0.31015104055404663,-0.9783068895339966,-0.7759420871734619,-0.885185718536377,-0.41623392701148987,-0.0833512544631958,0.4864542782306671,0.4174983501434326,0.9174793362617493,0.5362708568572998,-0.2527775168418884,-0.2536240816116333,0.08470402657985687,-0.3524704873561859,-0.4146818220615387,-0.12226492911577225,-0.2267850786447525,-0.004411659203469753,0.15627220273017883,-0.20105382800102234,0.07821249216794968,-0.10360635071992874,-0.03151297569274902,0.10021548718214035,-0.08106105774641037,-0.11646008491516113,-0.036965128034353256,0.02266300842165947,-0.31939437985420227,-0.468378484249115,-0.2262788712978363,-0.8425359725952148,-1.1511151790618896,0.0675768330693245,0.5518516302108765,0.8715305328369141,0.6730794906616211,0.48090776801109314,-0.21512722969055176,-0.8967174887657166,-0.37935954332351685,-0.42057886719703674,-0.2298463135957718,-0.15652208030223846,-0.30130696296691895,0.03997291624546051,-0.21986933052539825,-0.10201858729124069,-0.16402514278888702,-0.20040194690227509,0.07459428906440735,0.14791107177734375,0.06109321862459183,0.2077970653772354,0.031024357303977013,-0.03547656908631325,-0.295312762260437,-0.15045838057994843,-0.42635369300842285,-0.8256115317344666,-0.21868447959423065,-0.04377782344818115,0.6541761755943298,1.1651510000228882,0.5165483951568604,0.6732437014579773,0.027742663398385048,-0.43131160736083984,-0.6758821606636047,-0.2843634784221649,-0.24200820922851562,-0.09474452584981918,-0.14215092360973358,-0.24441520869731903,-0.11071193963289261,0.027296222746372223,0.03556930273771286,-0.10985200852155685,0.10093270242214203,-0.15655595064163208,-0.07172784954309464,-0.15845134854316711,-0.1964840590953827,0.06081939861178398,-0.24205385148525238,-0.476584792137146,-0.6171354055404663,-0.5048348903656006,0.18474292755126953,0.48627251386642456,-0.12055841833353043,0.20077702403068542,-0.08217538893222809,0.9616963863372803,-0.41260725259780884,-0.993567168712616,-0.48418521881103516,-0.4819464087486267,-0.15496662259101868,-0.2949550449848175,-0.22221821546554565,-0.14030130207538605,0.18930669128894806,-0.016462577506899834,0.014908748678863049,0.12055405229330063,-0.0641958937048912,0.05034615471959114,0.17656642198562622,0.017332768067717552,-0.06183309480547905,-0.3083871006965637,-0.15061305463314056,-0.3844298720359802,-0.7788161635398865,-0.6345604658126831,0.0639476627111435,-0.07572835683822632,0.11428304761648178,0.40368691086769104,0.5209270119667053,0.3024290204048157,-0.7139913439750671,-0.9568913578987122,-0.5508502125740051,-0.3653027415275574,0.03772221878170967,-0.181381493806839,0.05404702574014664,-0.06997615844011307,-0.037820734083652496,0.06503720581531525,-0.19344200193881989,0.18124331533908844,-0.020377267152071,-0.07428263872861862,0.09214702248573303,-0.095668263733387,-0.35179829597473145,-0.2928743064403534,-0.4831518530845642,-0.4985460340976715,-0.06976299732923508,-0.05652729794383049,-0.03563327714800835,0.308914452791214,0.4396481215953827,0.2249479740858078,0.15381820499897003,0.01704753376543522,-0.9540414810180664,-1.2199345827102661,-0.424179345369339,-0.20750337839126587,-0.2599658966064453,-0.0052328635938465595,-0.21229812502861023,-0.18952932953834534,-0.10884519666433334,0.05487360805273056,0.1819474846124649,0.1738906353712082,-0.14300334453582764,-0.18280477821826935,0.1254512220621109,0.037535637617111206,-0.29389050602912903,-0.874430775642395,-0.47138917446136475,-0.1696019023656845,-0.2389082908630371,0.042927395552396774,-0.11714751273393631,0.17503252625465393,0.7224490642547607,0.43273866176605225,0.012584629468619823,-0.4164438545703888,-0.6244561076164246,-0.5130928158760071,-0.1701132357120514,-0.16398310661315918,-0.25296351313591003,-0.11760225892066956,-0.41680246591567993,-0.12392807006835938,-0.2121182233095169,-0.0651998370885849,-0.012411030940711498,-0.06791969388723373,-0.15031179785728455,-0.08066697418689728,0.159946471452713,-0.27027270197868347,-0.6430050134658813,-1.2195888757705688,-0.9119279980659485,-0.12406806647777557,-0.31097927689552307,-0.364111065864563,-0.15795350074768066,-0.05829192325472832,0.36893177032470703,0.22235648334026337,-0.5605425238609314,-0.9651232361793518,-0.3966163098812103,-0.3199858069419861,-0.15252730250358582,-0.3409886956214905,-0.3013654947280884,-0.39223578572273254,0.08831241726875305,-0.1569933146238327,0.07192901521921158,0.1040777936577797,-0.02733457088470459,0.003164355643093586,0.046788785606622696,-0.16264335811138153,0.11187568306922913,-0.17160022258758545,-0.3482561409473419,-0.7985566258430481,-0.4483935832977295,-0.6423307657241821,-0.1773824542760849,-0.30108344554901123,-0.14104610681533813,0.04675483703613281,0.09752066433429718,0.34598875045776367,-0.3295648992061615,-0.2175968587398529,-0.05887817591428757,-0.646304190158844,0.3758862316608429,-0.2586865723133087,-0.21408604085445404,-0.39100325107574463,-0.04498903453350067,-0.1459025740623474,0.10075317323207855,0.3651657998561859,-0.1816813349723816,0.15590544044971466,-0.1716671735048294,0.09424791485071182,0.18702444434165955,-0.14518308639526367,-0.25670138001441956,0.22581908106803894,-0.18085353076457977,0.020452216267585754,0.1209791973233223,0.5517166256904602,0.31976357102394104,0.2379286289215088,-0.22476017475128174,-0.21361151337623596,-0.16084794700145721,0.28393861651420593,0.2164100855588913,-0.09227161109447479,0.24869763851165771,-0.42018547654151917,-0.7031458616256714,-0.5090475082397461,-0.11785929650068283,-0.026535015553236008,-0.0158615093678236,-0.04960187152028084,0.1167970672249794,-0.1928827464580536,-0.10241074115037918,0.050834305584430695,-0.18318705260753632,-0.13309124112129211,0.07691234350204468,0.3139979839324951,0.0877789631485939,-0.23953495919704437,-0.043116435408592224,0.3654610514640808,-0.4387725293636322,-0.2692435681819916,-0.6155311465263367,-0.3537253141403198,0.044710226356983185,-0.24180492758750916,0.025196680799126625,0.13982973992824554,-0.25260183215141296,-0.6202509999275208,-0.7096790671348572,-0.08601687103509903,-0.11401642858982086,-0.17838899791240692,-0.08540930598974228,-0.031469494104385376,0.11518409848213196,-0.03241803124547005,0.05397791042923927,0.16961993277072906,0.1669575273990631,-0.010324770584702492,0.574834406375885,0.4496123194694519,0.07836786657571793,0.007674240041524172,-0.8050965070724487,-0.45498722791671753,-0.5831168293952942,-1.0247668027877808,-0.2795421779155731,0.29288649559020996,-0.2352561056613922,-0.09667465835809708,0.8033641576766968,0.07410846650600433,-0.28947779536247253,-0.29074349999427795,-0.09384585916996002,-0.15939201414585114,0.004300657194107771,0.12911811470985413,0.15246643126010895,-0.027350544929504395,-0.03156416863203049,0.09153246879577637,-0.0846400186419487,0.1562141627073288,0.029514295980334282,-0.09484252333641052,0.5829586386680603,0.4758152365684509,0.5792244672775269,0.11500313133001328,-0.20059005916118622,-0.5060045719146729,0.06230054423213005,-0.1369229257106781,-0.25604063272476196,-0.23761335015296936,0.6163097023963928,0.8207496404647827,1.0785361528396606,0.3333858847618103,-0.40687310695648193,-0.636347234249115,-0.5086681246757507,-0.003093658946454525,0.007953972555696964,-0.17294946312904358,0.09008951485157013,0.30903300642967224,0.13155947625637054,-0.15946678817272186,0.1904887557029724,-0.07968132197856903,-0.17068885266780853,-0.04042751342058182,0.12481827288866043,0.558252215385437,0.5356507301330566,-0.36673426628112793,-0.08853965252637863,-0.19839613139629364,-0.29397064447402954,-0.6586325168609619,-0.7628309726715088,-0.3873543441295624,-0.23312793672084808,-0.26324811577796936,0.01618671417236328,0.18667924404144287,-0.3221401572227478,-0.16550660133361816,-0.036269936710596085,-0.2578566372394562,0.15105940401554108,-0.1969199925661087,0.07465898245573044,-0.13334302604198456,-0.010809089057147503,-0.17014776170253754,0.14345937967300415,-0.02301775850355625,-0.17206890881061554,0.3319531977176666,0.23783569037914276,0.1516108512878418,-0.28530818223953247,-0.19722062349319458,-0.7539465427398682,-0.478133887052536,-0.35688528418540955,-0.4843266010284424,-0.762233316898346,-0.18718649446964264,-0.6411362886428833,-0.1557689607143402,-0.33421218395233154,-0.009564612060785294,-0.06043906509876251,0.007488924544304609,-0.1271946132183075,-0.17142733931541443,-0.10576986521482468,0.0650983452796936,0.05219380185008049,0.04093074053525925,-0.007922499440610409,0.08927328884601593,0.13534663617610931,-0.15118467807769775,0.09783047437667847,-0.15156732499599457,0.16647395491600037,-0.12433043122291565,0.11015301942825317,-0.059474386274814606,0.18826965987682343,-0.10463379323482513,-0.24086183309555054,-0.028285739943385124,-0.2449444830417633,-0.24822410941123962,-0.3252534866333008,-0.0553266815841198,0.04132425785064697,0.05015893653035164,-0.03335585072636604,0.022510433569550514,-0.0024708411656320095,0.14509640634059906,0.03839336708188057,-0.011776704341173172,-0.07069013267755508,-0.012516206130385399,-0.155086949467659,0.167068749666214,0.05187703296542168,-0.16252924501895905,0.17392556369304657,-0.0830850899219513,-0.02061716839671135,-0.14879626035690308,-0.07239256799221039,0.034770168364048004,0.026524284854531288,0.07093355804681778,-0.04643254354596138,0.1519780158996582,-0.00244239903986454,0.19233421981334686,0.14878495037555695,-0.012501061893999577,-0.013965340331196785,-0.15129058063030243,-0.005065843928605318,0.10812339186668396,-0.14395052194595337,-0.1600922793149948,-0.10087227076292038,-0.030995359644293785,0.08211571723222733,0.11684691905975342,0.08941222727298737],[0.1450723558664322,-0.01871418207883835,-0.03611305356025696,0.19745087623596191,0.09600827097892761,-0.14862105250358582,-0.12547695636749268,-0.19915644824504852,0.13791432976722717,0.0001541480014566332,-0.06698247790336609,-0.20826616883277893,-0.06257691979408264,0.07910606265068054,-0.24446286261081696,-0.16717791557312012,0.0404941625893116,-0.0730285719037056,-0.15318219363689423,-0.027772225439548492,0.013887175358831882,0.05843768268823624,-0.04570360854268074,-0.2779783606529236,0.04135581851005554,0.03331261873245239,-0.2066739946603775,-0.1735483705997467,-0.10133305191993713,0.033246561884880066,0.08436714112758636,0.002008748473599553,0.04808097705245018,-0.00799461267888546,0.06819932907819748,0.09125078469514847,0.14949412643909454,0.1439548134803772,0.14638841152191162,0.044330764561891556,0.041903406381607056,-0.01057800929993391,0.13754062354564667,0.14970608055591583,0.12951116263866425,0.10023590177297592,-0.11087372899055481,-0.05711720138788223,0.007830513641238213,-0.1821112036705017,-0.24008920788764954,-0.14383023977279663,-0.1289682686328888,-0.06233900785446167,-0.05466977506875992,-0.20781710743904114,-0.191839337348938,0.08175496011972427,-0.09785367548465729,-0.06736142933368683,-0.0245929304510355,-0.01813877560198307,-0.049146879464387894,-0.10309824347496033,-0.09526053816080093,0.0901654064655304,0.2711220681667328,0.07732325792312622,0.073225237429142,0.05752776190638542,0.06806119531393051,0.32862263917922974,0.15514451265335083,0.09729279577732086,0.1987610012292862,0.14872579276561737,0.07539120316505432,0.22845129668712616,0.07441255450248718,0.20540215075016022,0.10675560683012009,-0.13286182284355164,-0.12806756794452667,0.08468831330537796,0.016897721216082573,0.1825052946805954,0.030177077278494835,-0.046350013464689255,-0.16577017307281494,0.20103290677070618,0.0270156841725111,0.08326603472232819,0.4443877339363098,0.5164909362792969,0.1518872231245041,0.46972009539604187,0.48727279901504517,0.549999475479126,0.5303003787994385,0.26536640524864197,0.26044589281082153,0.5475762486457825,0.21777355670928955,0.15751437842845917,0.04583670571446419,0.0966535434126854,0.10786990821361542,0.26160651445388794,0.12670721113681793,0.05843701586127281,-0.11065090447664261,0.1346033811569214,0.0609249584376812,-0.15601320564746857,0.09605525434017181,0.00802671443670988,-0.08649572730064392,0.26942798495292664,0.3564303517341614,0.3818299174308777,0.17708677053451538,0.5764724612236023,0.5215873122215271,0.401298463344574,0.42150354385375977,0.5467756986618042,0.4380537271499634,0.05957901477813721,0.3191838264465332,0.4113101363182068,0.6597112417221069,0.3872486650943756,-0.17615365982055664,-0.13914845883846283,0.12432999163866043,-0.3942401707172394,-0.351106733083725,-0.0029517789371311665,0.06637196242809296,0.18193116784095764,0.07231879979372025,0.1250971108675003,-0.1857989877462387,0.18980170786380768,-0.26226696372032166,0.2547331750392914,0.48842817544937134,0.4159257709980011,-0.16397160291671753,0.1616188883781433,-0.11149144917726517,-0.48401010036468506,-0.0048641785979270935,0.47091689705848694,0.09334515035152435,0.10811345279216766,0.6492950916290283,0.25357121229171753,0.38514426350593567,0.18223421275615692,-0.019812429323792458,0.0052370913326740265,-0.06582006067037582,-0.4203523099422455,-0.34175148606300354,-0.12124735862016678,-0.11546896398067474,0.051874518394470215,-0.14838837087154388,0.05429575964808464,0.19104483723640442,-0.011130678467452526,-0.28611698746681213,-0.03977623209357262,0.10577695816755295,-0.29043835401535034,-0.3605351448059082,0.2627578377723694,0.4773483872413635,0.38355010747909546,0.5444861650466919,0.07809346169233322,0.11405834555625916,0.5609452724456787,1.0034760236740112,0.37786394357681274,-0.08180620521306992,-0.12700727581977844,-0.6089208126068115,-0.39600738883018494,-0.49472182989120483,-0.7823874354362488,-0.5645283460617065,-0.0012011101935058832,0.12265535444021225,0.09673845022916794,-0.1172250285744667,0.14324039220809937,0.05370614677667618,0.0041789948008954525,0.02630598098039627,0.22988642752170563,-0.15644900500774384,-0.4737836420536041,0.062040623277425766,-0.20071932673454285,-0.5706090331077576,-0.0753794014453888,0.2473512589931488,0.026673607528209686,0.31901687383651733,0.5203713178634644,0.3694303333759308,-0.5414924621582031,-0.9268760681152344,-0.9902350306510925,-0.7731955647468567,-0.5727984309196472,-0.5134742259979248,-0.6293697357177734,-0.49314069747924805,-0.2983042597770691,0.05363984778523445,0.14463908970355988,0.09456323832273483,0.014000662602484226,0.19956089556217194,0.07073061913251877,0.3321780860424042,0.10683899372816086,-0.07471579313278198,0.01257715467363596,-0.2540567219257355,-0.6332626938819885,-0.7302011251449585,-0.44398611783981323,-0.0008754454902373254,0.08184713870286942,0.24238543212413788,-0.25190380215644836,-0.9197404980659485,-0.5507059097290039,-0.2578440308570862,-0.2140110731124878,-0.6667333841323853,0.048841867595911026,0.004328418523073196,-1.2328829765319824,-1.3504688739776611,-0.5612270832061768,0.19094905257225037,0.1552409678697586,-0.08211814612150192,-0.05062609910964966,-0.11509870737791061,-0.10242519527673721,-0.10300164669752121,0.08467574417591095,-0.10869821906089783,0.16670061647891998,0.3513646721839905,-0.06676004827022552,-0.45667600631713867,-0.47080546617507935,0.5536710619926453,0.6147871017456055,0.14735116064548492,-0.12116862088441849,-0.4475477933883667,-0.6833208203315735,-0.3661276400089264,-0.33850908279418945,-0.7441440224647522,-0.29105687141418457,-0.26772746443748474,-1.3365846872329712,-0.9687942862510681,-0.49317997694015503,0.04247542470693588,0.10086666792631149,-0.0965471863746643,-0.09402234852313995,0.0796334445476532,-0.09761634469032288,-0.037008725106716156,-0.19698366522789001,0.05900814011693001,0.06586457043886185,0.16493459045886993,-0.3044918477535248,-0.34687817096710205,-0.08416853845119476,-0.6341414451599121,-0.09749257564544678,0.9449169039726257,0.0848945826292038,-0.5124140381813049,-0.9244580864906311,0.051096074283123016,-0.20283952355384827,-0.22592474520206451,0.2095390260219574,0.06975583732128143,-0.46306392550468445,-0.31168168783187866,-0.23554718494415283,-0.10783234983682632,0.020374679937958717,-0.11516927182674408,-0.04241901636123657,-0.09917455166578293,0.25430652499198914,-0.07102499157190323,-0.4929267466068268,0.017740318551659584,-0.10116639733314514,-0.35921943187713623,-0.017221225425601006,-0.4562698006629944,-0.39100995659828186,-0.7533130645751953,0.21584202349185944,1.4455429315567017,0.5084230303764343,-0.574630618095398,-0.1394588202238083,0.40851837396621704,0.3218826353549957,0.31658676266670227,0.32518506050109863,0.2707924246788025,-0.3060760200023651,0.34037548303604126,0.1787596493959427,-0.20505282282829285,0.026685182005167007,-0.09589793533086777,0.21156898140907288,-0.04371834173798561,0.06977532058954239,-0.21524129807949066,-0.3785792291164398,-0.24779707193374634,-0.15788288414478302,-0.8142319917678833,0.024584265425801277,-0.20738887786865234,-1.4729375839233398,-1.4281799793243408,0.1790497750043869,0.9738607406616211,0.6189152598381042,0.22154609858989716,0.09816239774227142,0.34336939454078674,0.2045505791902542,-0.46462857723236084,0.061370063573122025,0.10453295707702637,0.362692266702652,0.365570604801178,0.11137200891971588,-0.0247093103826046,-0.09962751716375351,0.10021266341209412,-0.05134056508541107,0.05735334753990173,0.10608714073896408,-0.25078096985816956,-0.7777586579322815,-0.6251357793807983,-0.19140657782554626,0.030007682740688324,-0.3044837713241577,-0.6059682369232178,-0.8214574456214905,-0.32199472188949585,0.6982147097587585,1.046023964881897,0.38171324133872986,0.4355437159538269,-0.31135761737823486,0.04398653283715248,-0.4581161439418793,-0.2631109952926636,-0.15829595923423767,-0.12478657811880112,0.40118545293807983,0.5743215680122375,0.24401523172855377,0.07356268167495728,-0.004063556902110577,0.1564844697713852,-0.08036313205957413,-0.059984464198350906,0.1350899040699005,-0.48312583565711975,-0.5218242406845093,-0.3227251172065735,0.21110039949417114,0.09161829948425293,-0.09288639575242996,-0.4434596598148346,0.386968731880188,0.3302590548992157,0.5012800097465515,0.3720378577709198,0.23437310755252838,0.11651261150836945,0.48740729689598083,0.2397596389055252,0.11403193324804306,-0.11109692603349686,0.1415494829416275,-0.24387598037719727,0.1870560497045517,0.04806903004646301,0.2768414318561554,0.0905221477150917,0.010878944769501686,-0.02268863283097744,-0.07156436145305634,0.043927840888500214,0.2061617076396942,-0.2420794516801834,0.039394110441207886,-0.012026902288198471,0.01714423857629299,-0.2583375573158264,-0.023925118148326874,-0.4499652087688446,0.16190102696418762,-0.2815348207950592,1.1582409143447876,0.6300570368766785,0.7916714549064636,0.3937141001224518,-0.05794648453593254,-0.6391795873641968,-0.15541458129882812,0.08876484632492065,-0.08879727870225906,0.13765835762023926,-0.45285388827323914,0.11331813037395477,0.015457683242857456,0.0496789813041687,-0.00639339629560709,0.18677107989788055,-0.16071434319019318,-0.15417100489139557,0.421977162361145,0.12929955124855042,-0.31748485565185547,-0.2744515836238861,-0.4195972979068756,-0.7948291897773743,-0.32305994629859924,-0.3100900650024414,0.4980022609233856,0.4416583180427551,0.7452272772789001,0.5956279039382935,0.2885095477104187,-0.06895086169242859,-0.47545909881591797,-0.3092762529850006,-0.04646899923682213,0.34375545382499695,-0.02594832330942154,-0.08215729892253876,0.1915166676044464,0.06148945912718773,0.42057064175605774,0.3007630407810211,0.13334773480892181,0.13087475299835205,-0.11657533794641495,-0.04151379317045212,0.540425181388855,0.035428836941719055,-0.5766281485557556,-0.13876134157180786,-0.028569435700774193,0.16403380036354065,-0.006167554296553135,-0.08590063452720642,0.5753068923950195,0.8381019830703735,0.6302852034568787,0.35575762391090393,-0.19816705584526062,-0.6694511771202087,-0.04287116229534149,0.4197947382926941,0.21401087939739227,0.6680920124053955,0.35691314935684204,0.45799410343170166,-0.16586127877235413,0.2357548326253891,0.10006804764270782,-0.08218176662921906,0.03240801393985748,-0.006307302508503199,0.0007460522465407848,-0.021738436073064804,0.5710669159889221,0.15056098997592926,-0.17249993979930878,-0.6414713263511658,-0.28919529914855957,-0.007765224203467369,0.24518437683582306,0.236906498670578,0.6881398558616638,0.7015156149864197,0.1272231787443161,-0.4923099875450134,-0.20899592339992523,-0.20329079031944275,0.48035934567451477,0.35497376322746277,-0.18800802528858185,0.18787501752376556,0.1471989005804062,0.3307957053184509,0.07307825982570648,0.375946968793869,0.2785719037055969,0.05871826782822609,0.033009957522153854,-0.177719846367836,0.1241573840379715,-0.042492978274822235,0.11315298080444336,0.0900861993432045,-0.0798904150724411,-0.2799503207206726,-0.6772350072860718,0.1435820460319519,0.40188270807266235,0.3121128976345062,0.37857571244239807,0.17094947397708893,0.23280318081378937,0.21786926686763763,-0.1740300953388214,0.2597261071205139,0.6965567469596863,0.06775392591953278,0.0003970594552811235,0.1527007818222046,-0.1044338196516037,-0.01818292774260044,0.1705087274312973,0.17412683367729187,0.03005356341600418,-0.07096300274133682,-0.05777624249458313,0.14959852397441864,-0.0813252404332161,0.006330682430416346,0.610317587852478,0.39308488368988037,0.175344780087471,0.5961107611656189,-0.2723022997379303,-0.06577007472515106,0.2939256727695465,0.18557637929916382,0.08111542463302612,0.3456628918647766,0.46544164419174194,0.5343736410140991,0.6141728758811951,0.5035344362258911,0.10440593212842941,-0.265498548746109,0.17759887874126434,0.29291537404060364,0.23058143258094788,-0.21744398772716522,0.22564886510372162,0.2858189344406128,0.21832670271396637,-0.08683653920888901,0.017930543050169945,-0.14385181665420532,0.15220220386981964,-0.1507645547389984,0.01931058242917061,0.2942180335521698,0.10660893470048904,0.8414486646652222,0.5970619916915894,0.39844754338264465,0.2781106233596802,-0.2771138846874237,-0.3160376250743866,-0.11522592604160309,0.38375332951545715,0.40901246666908264,0.15227928757667542,-0.08152557909488678,-0.37769830226898193,-0.20725005865097046,0.6779080629348755,0.17825691401958466,-0.07857108116149902,0.18033672869205475,-0.04601748660206795,-0.018368687480688095,0.14056764543056488,-0.060243912041187286,0.018031520769000053,-0.04629688709974289,-0.14589045941829681,0.005544469226151705,0.020217450335621834,0.14954577386379242,0.7054184675216675,0.3730904459953308,0.43153807520866394,0.11458919197320938,-0.10785902291536331,0.18123392760753632,-0.28600314259529114,-0.43081769347190857,0.21610870957374573,-0.1383630633354187,-0.27769604325294495,-0.12015130370855331,-0.01846344769001007,-0.09585971385240555,0.07664962857961655,-0.33697012066841125,-0.6038162112236023,-0.2733823359012604,-0.025595199316740036,0.03544843569397926,-0.051131583750247955,0.07404691725969315,0.04649727791547775,-0.23011796176433563,0.14361312985420227,-0.023928362876176834,0.030521266162395477,0.2493329495191574,0.6926737427711487,0.1596037745475769,0.2561841905117035,0.02629140578210354,0.40191590785980225,0.20306535065174103,-0.09525942802429199,0.1445271521806717,0.36345064640045166,0.31109705567359924,0.5928466320037842,0.13845260441303253,0.23724055290222168,0.025913262739777565,0.1455598920583725,-0.3074418604373932,-0.13682405650615692,-0.10083282738924026,0.1023794561624527,0.14251025021076202,0.19177275896072388,0.18099698424339294,0.030836235731840134,0.13805831968784332,0.17759570479393005,-0.13377133011817932,-0.043540552258491516,-0.021224556490778923,0.26033058762550354,0.10735151916742325,0.5381208062171936,0.2657063603401184,0.17038029432296753,0.0035164805594831705,-0.020324014127254486,-0.029780283570289612,0.5142971277236938,0.30962398648262024,0.09066814929246902,0.3006567656993866,0.2620994746685028,0.28195691108703613,0.2773011028766632,0.02928663231432438,0.25811970233917236,0.19307006895542145,0.07300256937742233,0.20701034367084503,0.14493490755558014,0.0405200719833374,0.09399541467428207,-0.1881195306777954,-0.08588474988937378,0.06067667156457901,-0.050818558782339096,-0.08812806755304337,0.1136743426322937,0.051993630826473236,-0.03905123844742775,0.11535178869962692,0.3319442570209503,0.44812753796577454,-0.28583452105522156,-0.5056714415550232,-0.2686693072319031,0.2733616530895233,0.32330986857414246,-0.08703596144914627,-0.1456620991230011,0.016298096626996994,0.35680893063545227,0.4149411618709564,0.33943381905555725,0.16086743772029877,0.007191689684987068,0.12369995564222336,-0.03750988468527794,0.12489292770624161,0.1361449807882309,-0.00656121177598834,0.10633420199155807,-0.17896661162376404,0.08164141327142715,0.026114916428923607,-0.23456692695617676,0.13400769233703613,0.1610691249370575,0.10802698880434036,-0.001934490050189197,0.0072404770180583,-0.11152874678373337,0.07437554746866226,-0.09496060013771057,0.015308200381696224,0.10148980468511581,0.004813044797629118,0.20093590021133423,0.322038471698761,0.1660982072353363,-0.007739837747067213,0.0004187821177765727,0.13981954753398895,-0.11856298893690109,0.0068784295581281185,-0.08781056106090546,-0.1360083520412445,-0.1921873390674591,-0.18962658941745758,0.17889836430549622,0.07868872582912445,0.21613261103630066,0.07194691151380539,0.16950997710227966,0.02586326375603676,0.0897296592593193,-0.04090471938252449,0.06846240907907486,-0.22269600629806519,-0.05246599018573761,-0.0051283929497003555,0.12556171417236328,0.13128452003002167,0.18590286374092102,0.15448212623596191,-0.19506977498531342,-0.0721774771809578,0.19236181676387787,-0.15050511062145233,0.12897734344005585,0.15712708234786987,-0.11765456199645996,-0.18050436675548553,0.14641791582107544,-0.1783915013074875,0.19066236913204193],[0.10638274997472763,0.17473427951335907,-0.060626011341810226,-0.04427333548665047,-0.11829489469528198,0.20794667303562164,0.01435452327132225,-0.16006644070148468,-0.08561024814844131,-0.029546722769737244,0.1281527727842331,-0.10906796902418137,-0.15079133212566376,-0.10707768052816391,0.14628371596336365,-0.11215098947286606,0.13785989582538605,-0.045281242579221725,-0.026487823575735092,0.025022204965353012,0.11670083552598953,0.023214731365442276,-0.12154232710599899,-0.0009054326801560819,-0.012698019854724407,0.10170911997556686,-0.015968896448612213,0.21079689264297485,-0.0968707725405693,-0.08147810399532318,0.08460032194852829,-0.015270217321813107,0.07157041877508163,-0.15866707265377045,-0.04785477742552757,0.19387535750865936,0.07369665801525116,-0.1666075438261032,0.04039663076400757,0.11260981112718582,-0.16520808637142181,0.1093834787607193,-0.014018820598721504,-0.09332157671451569,-0.04763178527355194,0.08427464216947556,-0.07489743828773499,0.03508617356419563,-0.08202517032623291,-0.14185161888599396,0.13583894073963165,-0.01625922881066799,0.02131880261003971,-0.08118283748626709,0.10834825038909912,-0.15660473704338074,-0.02615875005722046,0.031436800956726074,0.1835223138332367,-0.06334321945905685,-0.15019884705543518,-0.2110295593738556,0.099312923848629,0.16405116021633148,-0.17970487475395203,0.08259569108486176,0.2841532826423645,0.12462661415338516,-0.1672559231519699,-0.09027321636676788,-0.214363694190979,-0.4046151340007782,-0.041567038744688034,-0.12582573294639587,-0.005328748375177383,-0.22872473299503326,-0.16251732409000397,0.02719121426343918,-0.18551112711429596,0.10497807711362839,0.04883353039622307,-0.0798480361700058,-0.16599027812480927,0.09008212387561798,0.12208634614944458,0.10307708382606506,0.11694152653217316,-0.2150929868221283,-0.02001204900443554,-0.1763213723897934,0.02485061064362526,0.1637318730354309,-0.21934610605239868,0.18436510860919952,0.08687750995159149,-0.051896266639232635,-0.23714128136634827,-0.32880088686943054,-0.605794370174408,-0.47111761569976807,-0.3274391293525696,-0.285421758890152,-0.15913359820842743,-0.5109710693359375,-0.5709378719329834,-0.31153029203414917,0.08818478137254715,-0.14922787249088287,-0.14641933143138885,-0.13365896046161652,-0.10468592494726181,0.06013811007142067,0.10091274976730347,0.16068683564662933,0.05345281958580017,0.03489634022116661,-0.046286679804325104,0.044341668486595154,0.09530656784772873,0.3134889602661133,0.26495063304901123,-0.3275722861289978,-0.07705195248126984,0.084171824157238,-0.2861599326133728,0.020334169268608093,0.020532380789518356,-0.22323212027549744,-0.4008462727069855,-0.1408897042274475,-0.04625764116644859,-0.23166176676750183,-0.19098584353923798,-0.25302186608314514,-0.2366454303264618,-0.0823029950261116,0.056834880262613297,0.23912201821804047,0.235360249876976,0.18097557127475739,0.012206744402647018,0.1288880556821823,0.13105954229831696,-0.04208947345614433,-0.028206810355186462,0.0368959866464138,-0.009068421088159084,-0.05097931995987892,-0.15079861879348755,-0.21178510785102844,0.04023384675383568,0.2169519066810608,0.20426633954048157,0.26083531975746155,-0.10217425972223282,0.13842928409576416,-0.2969127893447876,0.01581079326570034,-0.36977705359458923,-0.10517268627882004,0.11048861593008041,0.15845443308353424,-0.30087193846702576,-0.12517456710338593,0.19716617465019226,0.21257010102272034,-0.1099645122885704,0.008995946496725082,0.05490740016102791,-0.043725527822971344,-0.12138210982084274,-0.14753508567810059,0.1785554438829422,-0.17072279751300812,-0.12332548946142197,-0.1729566901922226,-0.29009678959846497,-0.3249901533126831,-0.005047111306339502,0.057168442755937576,-0.22499878704547882,-0.07817903161048889,0.214848592877388,-0.06868232041597366,0.1398620754480362,-0.1363380253314972,-0.2396298050880432,-0.22784225642681122,0.20622214674949646,0.5126562714576721,0.21260873973369598,0.24434001743793488,0.4402048587799072,0.28603246808052063,0.19415751099586487,-0.04702463001012802,-0.04768471047282219,0.11753614991903305,-0.04975828155875206,-0.07299729436635971,0.11910326033830643,-0.008918977342545986,-0.01291345339268446,0.06411769986152649,0.08601070940494537,0.15680444240570068,0.3101429045200348,-0.2805771827697754,0.03805999457836151,0.37772178649902344,0.27232807874679565,-0.35964182019233704,0.446516215801239,-0.22191345691680908,0.0608663409948349,0.5123519897460938,0.4900147616863251,0.25150009989738464,0.6903672814369202,0.8324587941169739,0.803435206413269,0.17675898969173431,0.028051244094967842,-0.0799921378493309,-0.01773144118487835,-0.012652646750211716,-0.053391434252262115,-0.19700320065021515,0.022160038352012634,-0.07849898934364319,-0.340303510427475,-0.19165407121181488,0.2206054925918579,-0.13999004662036896,-0.1851087510585785,-0.23523056507110596,-0.031240342184901237,0.4859033524990082,0.41705045104026794,0.26023629307746887,0.3506484925746918,1.0871293544769287,0.5569624304771423,0.7494943737983704,0.8781900405883789,0.9924780130386353,0.3479486107826233,0.9432037472724915,0.8872146606445312,0.449282169342041,0.09549188613891602,0.05966338515281677,0.1037723496556282,0.0009107289952225983,0.1399313360452652,0.031215017661452293,-0.09153785556554794,0.08874388784170151,-0.28446653485298157,-0.18049608170986176,-0.058101389557123184,0.15045806765556335,0.1711454689502716,-0.23508591949939728,0.4602968990802765,0.06259201467037201,0.1593971699476242,0.49648523330688477,0.19349727034568787,0.7513562440872192,0.2733061909675598,0.3518168330192566,0.21560724079608917,0.526432991027832,0.016262056306004524,0.15593422949314117,0.5315871238708496,0.6014986038208008,0.013854358345270157,0.19046205282211304,0.12099722027778625,-0.05329813435673714,-0.1373143047094345,-0.11447133123874664,-0.2741166353225708,0.041537806391716,-0.3288559913635254,0.03725295886397362,-0.026689894497394562,0.41457685828208923,0.5050966143608093,-0.4766984283924103,-0.4212927222251892,-0.0920502245426178,0.06907324492931366,0.044087573885917664,0.0074511258862912655,-0.20248837769031525,-0.05273716524243355,-0.428288072347641,-0.4125072956085205,-0.3032551407814026,0.24139998853206635,-0.3259148895740509,-0.0807044580578804,0.0795753002166748,-0.006472042296081781,0.09586018323898315,0.20137381553649902,0.10215341299772263,0.05301437899470329,-0.23656702041625977,-0.3413693606853485,-0.36668893694877625,-0.18408678472042084,-0.025889411568641663,0.15424557030200958,-0.15776553750038147,-0.041872039437294006,-0.7108138203620911,-0.61675626039505,-0.7238561511039734,-0.8019664883613586,-0.0853726714849472,-0.3787814676761627,-0.8848617672920227,-0.9191158413887024,-0.9007412195205688,-0.8801222443580627,-0.5874860882759094,-0.9179766774177551,-0.9633790850639343,-0.2193329781293869,-0.06321734189987183,-0.0636586844921112,-0.013218553736805916,-0.028980985283851624,-0.026227224618196487,-0.18219999969005585,-0.02901357412338257,-0.19776418805122375,-0.2661716341972351,-0.23547133803367615,-0.061396095901727676,-0.7000508904457092,-0.12863872945308685,-0.3671533167362213,-0.9299017190933228,-0.7190473079681396,-0.8142576813697815,-0.993330717086792,-0.8379634618759155,-1.1464383602142334,-0.9985001683235168,-0.9634003639221191,-0.9777930378913879,-0.3630776107311249,-0.7145480513572693,-1.1251455545425415,-1.234540343284607,-0.7737085819244385,0.028973324224352837,0.07471982389688492,0.16491886973381042,-0.07592440396547318,-0.09898509830236435,0.05260074511170387,0.039531707763671875,-0.15450206398963928,-0.4671470820903778,-0.5407159328460693,-0.5014661550521851,-0.23600360751152039,-0.228626549243927,-0.6424181461334229,-0.5512073040008545,-0.4955455958843231,-0.45498448610305786,0.209167018532753,-0.16379468142986298,-0.6361950635910034,-0.6060400605201721,-0.0786128044128418,-0.22085580229759216,-0.5376063585281372,-0.672455906867981,-0.9967963695526123,-1.105912446975708,-0.564596951007843,-0.10329993814229965,0.04152476042509079,0.010893833823502064,0.14789436757564545,0.1369330883026123,0.07486581802368164,-0.2215815782546997,-0.48428788781166077,-0.595923125743866,-0.5766973495483398,-0.19678741693496704,-0.450833261013031,-0.041715580970048904,-0.5333104729652405,-0.3630656599998474,-0.22024551033973694,0.015160609036684036,0.1321725994348526,0.154562845826149,0.11453002691268921,-0.4750290811061859,0.07148820906877518,0.2912822663784027,-0.08059622347354889,-0.31477510929107666,-0.5330676436424255,-0.5767280459403992,-0.5867441296577454,0.03277656435966492,0.0009601188939996064,-0.11842630803585052,0.07955225557088852,-0.012910477817058563,0.0491921566426754,0.03645540028810501,-0.331773966550827,-0.4282025098800659,-0.17281654477119446,-0.2583269774913788,-0.09996234625577927,0.206701397895813,0.27257296442985535,0.056175798177719116,0.04224210977554321,0.14440791308879852,-0.15772904455661774,0.082038015127182,0.02845439687371254,0.29069486260414124,0.5036728382110596,-0.214347705245018,-0.3972034752368927,-0.6503585577011108,-0.4107148051261902,-0.7356607913970947,-0.3719545304775238,0.1750919371843338,0.043153949081897736,-0.14345858991146088,0.1460355967283249,0.086848683655262,-0.16077880561351776,0.11452815681695938,-0.3731432259082794,-0.18912801146507263,-0.12193549424409866,-0.19095200300216675,-0.8465527296066284,-0.20635095238685608,0.20670342445373535,0.3357481062412262,0.2311585694551468,0.3354286253452301,0.03239155188202858,0.047426413744688034,-0.453619122505188,0.16307012736797333,-0.12837843596935272,-0.20318849384784698,-0.3435042202472687,-0.15707485377788544,-0.17207619547843933,-0.6675475835800171,-0.1787705272436142,0.05802096053957939,-0.09162990748882294,0.008586190640926361,0.13028083741664886,-0.06497328728437424,0.03114423155784607,0.051549218595027924,-0.0220405962318182,-0.1950475424528122,-0.17771515250205994,-0.058994825929403305,-0.4203472435474396,0.46505746245384216,-0.08549538254737854,0.504097044467926,0.6331424713134766,0.23361429572105408,0.09912143647670746,0.14772209525108337,0.015713781118392944,-0.17639955878257751,-0.3075888752937317,-0.30123528838157654,-0.29275983572006226,-0.4337563216686249,0.1366056501865387,0.021962903439998627,0.05308537185192108,0.14403283596038818,0.005058197770267725,0.23890796303749084,-0.13711276650428772,0.013794304803013802,-0.03102901577949524,0.1937255710363388,0.08156725764274597,0.05637533217668533,-0.5501982569694519,0.4040926694869995,0.0519421324133873,0.24945072829723358,0.5477468371391296,0.9568029046058655,1.1348834037780762,0.05785997584462166,0.28883296251296997,-0.5792678594589233,0.02393067069351673,-0.18534930050373077,-0.4034315049648285,0.3336936831474304,-0.08861295878887177,-0.19471794366836548,0.2594780921936035,0.3392311930656433,0.059354256838560104,0.1790841966867447,0.31702521443367004,0.2599049508571625,0.12879545986652374,0.1849983036518097,0.1536506712436676,-0.19479253888130188,0.08495169132947922,0.045851513743400574,0.07953488081693649,0.1409774273633957,0.47747257351875305,0.38830170035362244,0.026987401768565178,0.5210079550743103,0.6995590329170227,0.5002560615539551,0.09886390715837479,-0.17520132660865784,-0.44220656156539917,-0.14830277860164642,-0.07368101924657822,0.21052955090999603,0.22526752948760986,0.07755971699953079,0.1760580986738205,0.608849287033081,0.14914768934249878,-0.01632057875394821,0.23623313009738922,-0.03803371265530586,-0.15061978995800018,0.05355043336749077,-0.011148881167173386,-0.14877374470233917,-0.20567308366298676,0.04950205236673355,0.10718808323144913,-0.008325884118676186,1.2116889953613281,0.22293002903461456,-0.07809813320636749,0.45297741889953613,0.62702876329422,0.15262535214424133,-0.15081949532032013,-0.8043732643127441,-0.2410680204629898,-0.4048975706100464,-0.018153967335820198,0.1197674423456192,-0.025926044210791588,0.2864150106906891,0.2702166438102722,0.5337924361228943,0.47480401396751404,0.24187351763248444,0.14932328462600708,-0.055850379168987274,-0.16090518236160278,-0.025245217606425285,0.183672234416008,-0.19842800498008728,0.05564545467495918,0.02760385349392891,-0.41057515144348145,-0.21717579662799835,0.45251554250717163,0.4987987279891968,-0.2204025238752365,-0.052792537957429886,0.06833376735448837,0.3077210783958435,0.02229631133377552,-0.15412870049476624,0.00827074609696865,-0.14930935204029083,-0.12137421220541,0.41096293926239014,0.16169314086437225,0.4688010513782501,0.5755736231803894,0.46235042810440063,0.09466991573572159,0.1877557933330536,-0.04022767022252083,0.03909550979733467,0.040013138204813004,-0.015154019929468632,0.18737821280956268,-0.08450435101985931,0.32923784852027893,0.13100723922252655,0.17630575597286224,-0.11995470523834229,0.11382078379392624,0.18864838778972626,-0.24988332390785217,0.5726650357246399,0.36016297340393066,0.34606078267097473,-0.23358610272407532,-0.02268047071993351,-0.06589072197675705,0.15145492553710938,-0.38084906339645386,-0.0639750063419342,0.36902445554733276,0.46817710995674133,0.5743973851203918,0.12220366299152374,0.19531702995300293,0.021139325574040413,-0.015974072739481926,-0.09347893297672272,-0.05402148514986038,-0.2032984495162964,0.10231106728315353,-0.11221277713775635,0.13916951417922974,0.14231063425540924,-0.020213574171066284,0.2082357406616211,0.10842008888721466,-0.07834295928478241,-0.11584346741437912,0.3299913704395294,-0.07484922558069229,-0.2550249695777893,-0.12758228182792664,-0.21205675601959229,0.0008926809532567859,-0.09711647033691406,-0.46724051237106323,-0.4441627264022827,0.04540063813328743,-0.10069264471530914,-0.041441578418016434,0.01966009847819805,0.1736290156841278,-0.11648383736610413,0.19687633216381073,0.14701151847839355,0.12168900668621063,0.08893570303916931,-0.1807784140110016,-0.2332475781440735,-0.05907963216304779,0.1611214578151703,-0.2771542966365814,-0.25288084149360657,-0.3803224265575409,0.14075368642807007,-0.07586336880922318,0.2251795530319214,0.08023826032876968,-0.031440287828445435,0.11603712290525436,0.18991534411907196,-0.19098107516765594,-0.28260916471481323,-0.1752094030380249,-0.17707249522209167,-0.28917089104652405,0.18171077966690063,0.022302092984318733,0.11594326049089432,0.2176717221736908,-0.04038287699222565,-0.15271103382110596,-0.02015569433569908,0.08597639948129654,0.17666767537593842,-0.19712881743907928,0.020022708922624588,-0.18308822810649872,-0.1469096839427948,-0.17018285393714905,-0.44056937098503113,-0.47975802421569824,-0.47640299797058105,-0.5595319271087646,-0.26596033573150635,0.1417851746082306,0.37449392676353455,0.7123536467552185,0.8040414452552795,0.18888723850250244,0.4045015275478363,0.1980590522289276,-0.08555124700069427,-0.12097615003585815,-0.2684083580970764,-0.26602303981781006,-0.11615122109651566,-0.1483377069234848,0.0906982421875,0.009127059020102024,-0.04958290979266167,0.13798098266124725,0.13099423050880432,0.13410738110542297,-0.20603010058403015,-0.05086556449532509,-0.16736575961112976,-0.04264923557639122,-0.2640232741832733,0.05611877888441086,0.04432281106710434,-0.2647298574447632,-0.05418647825717926,-0.04005096107721329,-0.27906718850135803,-0.18584580719470978,-0.1380605399608612,-0.28196045756340027,-0.14790786802768707,-0.25710079073905945,-0.08770053088665009,-0.19369639456272125,-0.062051210552453995,0.1119300127029419,0.15077830851078033,0.11530441045761108,-0.1624373197555542,-0.17966939508914948,-0.10318730771541595,0.0379459410905838,0.0785902664065361,-0.1446910947561264,0.0522768460214138,0.028203612193465233,-0.12008600682020187,-0.18087230622768402,-0.16961726546287537,-0.181375652551651,-0.0850553959608078,0.06784311681985855,-0.044662583619356155,0.0314028263092041,-0.18089976906776428,0.014764728955924511,-0.140227809548378,-0.11748506873846054,0.05516844987869263,0.09980449080467224,-0.01570294238626957,0.08116205781698227,0.03525849059224129,0.011752472259104252,0.049497175961732864,0.022859342396259308,0.19199718534946442,-0.031565405428409576,-0.11994963884353638]],\"biases\":[0.9731972217559814,-1.9280390739440918,-0.7410762906074524,-2.6441173553466797,0.24451567232608795,1.4258897304534912,-0.8684638738632202,1.755835771560669,0.4758636951446533,0.2044600248336792,0.3792957663536072,-0.8690217137336731,-0.7122098803520203,-0.7515477538108826,-1.5765239000320435,-0.9605354070663452]},{\"weights\":[[0.6454938054084778,-2.621263265609741,-1.121777892112732,-0.3590259253978729,3.3552606105804443,-1.178193211555481,1.2274754047393799,-0.15884645283222198,3.1443326473236084,-2.9767446517944336,-2.207686424255371,1.8951492309570312,0.991970956325531,0.21119028329849243,-0.2484418898820877,-0.2621029317378998],[-1.152476191520691,-0.4481619894504547,1.6343334913253784,-2.0402262210845947,-2.240347146987915,-0.057231806218624115,1.314515233039856,1.9151347875595093,-2.014382839202881,3.918353319168091,2.2824535369873047,2.2031898498535156,-1.693940281867981,-1.8690015077590942,-1.653260588645935,1.3428399562835693],[-3.5940725803375244,-1.459710955619812,-0.5636449456214905,1.919674038887024,-2.3131847381591797,3.2751777172088623,-0.28142809867858887,2.4399096965789795,0.10504195839166641,-0.9976610541343689,0.4930059313774109,-3.5196235179901123,-0.04146493598818779,0.8060129284858704,0.5858162641525269,-0.7841773629188538],[3.374631881713867,2.0967164039611816,0.007514870725572109,-1.3555209636688232,3.2180583477020264,-0.5405063033103943,-3.204113006591797,0.5840306878089905,2.6496787071228027,1.2240771055221558,-1.1690257787704468,-0.05613759160041809,-1.029382348060608,-0.8333488702774048,-2.029848098754883,-0.04382999241352081],[1.1368416547775269,-3.659339189529419,1.1433205604553223,-4.3437819480896,-0.47739866375923157,1.0156077146530151,-1.0180230140686035,3.133822441101074,-0.24108850955963135,2.235719680786133,1.792468547821045,-1.2584491968154907,-0.16327758133411407,1.0665589570999146,-1.1384063959121704,1.1653895378112793],[-1.083063006401062,-2.6936709880828857,3.0629656314849854,-0.21377742290496826,0.9244846105575562,-2.9550204277038574,3.4990832805633545,-1.5530216693878174,0.14208601415157318,0.14886614680290222,1.2528481483459473,1.5143593549728394,1.2479628324508667,-0.8411018252372742,0.767803966999054,2.3770570755004883],[-0.15735751390457153,1.6225594282150269,1.4269150495529175,1.0172921419143677,2.0213096141815186,-0.28054115176200867,-1.2718814611434937,-1.044647216796875,-1.4939874410629272,-1.4446417093276978,1.3618520498275757,-2.4500656127929688,1.4644314050674438,1.7127151489257812,0.5819489359855652,2.115168809890747],[1.8440489768981934,1.365404486656189,-0.8080670237541199,0.20519611239433289,-1.846277117729187,-1.9860116243362427,1.5285718441009521,-2.908557891845703,-1.362575888633728,-0.32834503054618835,-0.022099625319242477,2.0124311447143555,1.1057732105255127,2.8505589962005615,0.7336341738700867,0.10160646587610245],[1.5790185928344727,1.5159016847610474,2.9253740310668945,1.8618181943893433,1.460483431816101,-2.8844082355499268,-1.0684341192245483,-4.152894496917725,-0.6759968400001526,-0.1751573532819748,-0.1437906175851822,-0.2646101415157318,3.6299221515655518,-1.683297872543335,3.184938907623291,-0.09460757672786713],[-0.5893815755844116,1.2886600494384766,-2.309197187423706,0.22762331366539001,-0.7901381850242615,2.1196811199188232,-0.137267604470253,2.447093963623047,-2.0062477588653564,1.0088812112808228,0.33593785762786865,0.568856418132782,-3.721604824066162,-1.6484745740890503,-1.0474936962127686,0.1213851049542427],[0.33013463020324707,1.8721002340316772,-0.7306950092315674,-1.706687331199646,-1.3143529891967773,0.6115087866783142,2.8360178470611572,-1.8144253492355347,-3.251453399658203,0.7035515904426575,-0.2244240790605545,-0.5990902185440063,-0.22395610809326172,3.868922710418701,1.8252699375152588,-0.43821054697036743],[-2.515470266342163,1.7128301858901978,1.014865756034851,1.9785512685775757,-3.3647642135620117,-0.045459795743227005,1.6602970361709595,-0.20111465454101562,-0.8273918032646179,1.7633686065673828,0.14539268612861633,0.4488067924976349,-0.3762521743774414,-3.308462142944336,-1.2337775230407715,0.07809264957904816],[-0.15691402554512024,-0.8688835501670837,-4.138845920562744,0.7244130373001099,0.3590094745159149,1.5925041437149048,0.44083115458488464,-0.0007186130387708545,0.7694386839866638,-2.0660295486450195,-3.3310205936431885,1.853583812713623,-2.3963751792907715,-1.3827604055404663,0.8374006748199463,-4.540112018585205],[0.10356220602989197,-1.7539256811141968,-2.189709424972534,1.3222455978393555,0.036124709993600845,0.6762597560882568,0.7817649245262146,-0.813605546951294,1.6753464937210083,-3.8454251289367676,-1.4799177646636963,0.31093674898147583,0.0819634199142456,2.4575090408325195,0.5361366868019104,-1.6540653705596924],[-0.5459776520729065,0.6004489064216614,1.052370548248291,-0.5320437550544739,0.12597955763339996,0.1385626196861267,-2.561361789703369,-0.17448054254055023,2.9392614364624023,-0.5341638922691345,0.974736213684082,-2.554110288619995,1.3828043937683105,3.3240370750427246,-2.0366110801696777,1.4744876623153687],[-0.17468474805355072,2.9351229667663574,1.6101899147033691,-1.1292222738265991,-1.8351303339004517,2.283846855163574,-0.8377944231033325,1.8959261178970337,-1.9167715311050415,1.5993139743804932,-0.16594798862934113,-2.1362946033477783,-0.009534801356494427,-0.3597617745399475,-2.6518776416778564,-3.5672895908355713]],\"biases\":[-0.0366639569401741,-0.5910753011703491,-1.407513976097107,1.921845555305481,-1.169421911239624,-0.2571086883544922,0.3157917857170105,-0.2419171780347824,1.4890769720077515,-0.5874590873718262,0.00815889984369278,-0.6052712798118591,0.1416534185409546,-1.1987138986587524,0.18010751903057098,-0.3366571366786957]},{\"weights\":[[-1.0208407640457153,0.3607867658138275,-2.5087382793426514,1.2042523622512817,-3.2228376865386963,-4.308916091918945,-2.412299394607544,0.7099148631095886,-3.0518834590911865,0.3641377091407776,1.9696723222732544,0.31831997632980347,2.826993703842163,-2.4317591190338135,-3.2000041007995605,2.7008605003356934],[0.06844570487737656,-1.8781644105911255,0.8825663328170776,-4.463724136352539,0.20880483090877533,0.462610125541687,0.619533896446228,1.6873233318328857,-2.022789239883423,-2.075251340866089,2.305138111114502,-3.532090187072754,-3.8100392818450928,2.3051211833953857,1.2995975017547607,-1.9614861011505127],[-4.0231733322143555,2.127131700515747,-0.8176921606063843,-0.6491987109184265,-3.461548089981079,-0.3317790925502777,1.1859437227249146,1.2628544569015503,4.303138256072998,0.969163715839386,-1.2988617420196533,2.0262129306793213,-3.6570394039154053,-3.3284924030303955,-2.952686309814453,-2.6533796787261963],[0.6750746369361877,-2.5852274894714355,-3.231358766555786,-0.6601212024688721,-2.8641815185546875,0.036625947803258896,-3.885840654373169,1.7610806226730347,3.737454414367676,-2.9407460689544678,-0.12725593149662018,-2.3852453231811523,3.897106170654297,0.4617632031440735,-3.1266396045684814,-3.0199224948883057],[-5.404402732849121,0.758880078792572,1.0571467876434326,1.2517037391662598,1.152899146080017,-3.0152945518493652,-2.478013277053833,-2.899425745010376,-2.365860939025879,-0.04956803843379021,-4.0409255027771,1.2073603868484497,-2.5436086654663086,-2.4783051013946533,3.296525478363037,0.3656385540962219],[2.2431161403656006,3.5490901470184326,-5.473600387573242,1.8694846630096436,3.356785535812378,1.0034191608428955,-2.6858644485473633,-1.4483554363250732,-4.088120460510254,0.8186998963356018,-2.218841552734375,-3.066480875015259,-1.2363545894622803,-2.512864589691162,-1.466148853302002,-5.363622665405273],[-3.165109634399414,0.3881258964538574,1.4700967073440552,-5.406260967254639,3.731640100479126,0.19445167481899261,-1.1866949796676636,-2.4077951908111572,-3.361032724380493,0.2432381957769394,2.5309391021728516,-1.0306755304336548,-0.8471978902816772,-0.8333326578140259,-4.004927635192871,0.5447117686271667],[0.5512614250183105,-2.7014849185943604,-1.6891783475875854,1.4857378005981445,-0.4490104019641876,1.6754075288772583,1.6682140827178955,-3.3249919414520264,1.5221893787384033,-4.525331020355225,-3.7182867527008057,-1.2577073574066162,-3.3487679958343506,-2.5097475051879883,1.7853655815124512,1.635074496269226],[1.6884233951568604,-0.5224723219871521,2.365432024002075,-4.586065769195557,-3.819622278213501,2.069479465484619,-2.3303816318511963,-2.504749059677124,-3.0030388832092285,1.1572163105010986,-3.840853452682495,1.9898781776428223,0.5450239181518555,1.1816504001617432,-2.1373443603515625,-2.9494760036468506],[-0.3557071089744568,-4.750857830047607,2.093163251876831,1.8424804210662842,-1.4840589761734009,-5.22628116607666,0.4487994611263275,-2.050654172897339,-2.681337594985962,1.6964081525802612,-0.5699640512466431,-2.8760364055633545,2.533525228500366,0.3768722414970398,1.4064632654190063,-2.7357118129730225]],\"biases\":[-1.646733283996582,-1.4574898481369019,-1.5629737377166748,-1.934397578239441,-1.571146845817566,-1.4159609079360962,-1.809198260307312,-1.4074777364730835,-1.8089241981506348,-1.6210262775421143]}],\"inputLookup\":null,\"inputLookupLength\":0,\"outputLookup\":null,\"outputLookupLength\":0,\"options\":{\"inputSize\":0,\"outputSize\":0,\"binaryThresh\":0.5,\"hiddenLayers\":[16,16],\"activation\":\"sigmoid\"},\"trainOpts\":{\"activation\":\"sigmoid\",\"iterations\":10,\"errorThresh\":0.005,\"log\":true,\"logPeriod\":1,\"leakyReluAlpha\":0.01,\"learningRate\":0.1,\"momentum\":0.1,\"callbackPeriod\":10,\"timeout\":\"Infinity\",\"beta1\":0.9,\"beta2\":0.999,\"epsilon\":1e-8}}}");

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toPath; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



// Normalize a (deep) property `path` to array.
// Like `_.iteratee`, this function can be customized.
function toPath(path) {
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(path) ? path : [path];
}
_underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].toPath = toPath;


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


// By default, Underscore uses ERB-style template delimiters. Change the
// following template settings to use alternative delimiters.
/* harmony default export */ __webpack_exports__["a"] = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
});


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createReduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);


// The right-associative version of reduce, also known as `foldr`.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createReduce_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(-1));


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return every; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);




// Determine whether all of the elements pass a truth test.
function every(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(predicate, context);
  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (!predicate(obj[currentKey], currentKey, obj)) return false;
  }
  return true;
}


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return some; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);




// Determine if at least one element in the object passes a truth test.
function some(obj, predicate, context) {
  predicate = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(predicate, context);
  var _keys = !Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) && Object(_keys_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj),
      length = (_keys || obj).length;
  for (var index = 0; index < length; index++) {
    var currentKey = _keys ? _keys[index] : index;
    if (predicate(obj[currentKey], currentKey, obj)) return true;
  }
  return false;
}


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Object'));


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toBufferView; });
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);


// Internal function to wrap or shallow-copy an ArrayBuffer,
// typed array or DataView to a new view, reusing the buffer.
function toBufferView(bufferSource) {
  return new Uint8Array(
    bufferSource.buffer || bufferSource,
    bufferSource.byteOffset || 0,
    Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(bufferSource)
  );
}


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
// Default Export
// ==============
// In this module, we mix our bundled exports into the `_` object and export
// the result. This is analogous to setting `module.exports = _` in CommonJS.
// Hence, this module is also the entry point of our UMD bundle and the package
// entry point for CommonJS and AMD users. In other words, this is (the source
// of) the module you are interfacing with when you do any of the following:
//
// ```js
// // CommonJS
// var _ = require('underscore');
//
// // AMD
// define(['underscore'], function(_) {...});
//
// // UMD in the browser
// // _ is available as a global variable
// ```



// Add all of the Underscore functions to the wrapper object.
var _ = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["mixin"])(_index_js__WEBPACK_IMPORTED_MODULE_0__);
// Legacy Node.js API.
_._ = _;
// Export the Underscore API.
/* harmony default export */ __webpack_exports__["a"] = (_);


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isNull; });
// Is a given value equal to null?
function isNull(obj) {
  return obj === null;
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isElement; });
// Is a given value a DOM element?
function isElement(obj) {
  return !!(obj && obj.nodeType === 1);
}


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Date'));


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('RegExp'));


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Error'));


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isFinite; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);



// Is a given object a finite number?
function isFinite(obj) {
  return !Object(_isSymbol_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) && Object(_setup_js__WEBPACK_IMPORTED_MODULE_0__[/* _isFinite */ "f"])(obj) && !isNaN(parseFloat(obj));
}


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isEmpty; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _isString_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);






// Is a given array, string, or object empty?
// An "empty" object has no enumerable own-properties.
function isEmpty(obj) {
  if (obj == null) return true;
  // Skip the more expensive `toString`-based type checks if `obj` has no
  // `.length`.
  var length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj);
  if (typeof length == 'number' && (
    Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) || Object(_isString_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj) || Object(_isArguments_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(obj)
  )) return length === 0;
  return Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_keys_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(obj)) === 0;
}


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isEqual; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _isDataView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
/* harmony import */ var _toBufferView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95);











// We use this string twice, so give it a name for minification.
var tagDataView = '[object DataView]';

// Internal recursive comparison function for `_.isEqual`.
function eq(a, b, aStack, bStack) {
  // Identical objects are equal. `0 === -0`, but they aren't identical.
  // See the [Harmony `egal` proposal](https://wiki.ecmascript.org/doku.php?id=harmony:egal).
  if (a === b) return a !== 0 || 1 / a === 1 / b;
  // `null` or `undefined` only equal to itself (strict comparison).
  if (a == null || b == null) return false;
  // `NaN`s are equivalent, but non-reflexive.
  if (a !== a) return b !== b;
  // Exhaust primitive checks
  var type = typeof a;
  if (type !== 'function' && type !== 'object' && typeof b != 'object') return false;
  return deepEq(a, b, aStack, bStack);
}

// Internal recursive comparison function for `_.isEqual`.
function deepEq(a, b, aStack, bStack) {
  // Unwrap any wrapped objects.
  if (a instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) a = a._wrapped;
  if (b instanceof _underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) b = b._wrapped;
  // Compare `[[Class]]` names.
  var className = _setup_js__WEBPACK_IMPORTED_MODULE_1__[/* toString */ "t"].call(a);
  if (className !== _setup_js__WEBPACK_IMPORTED_MODULE_1__[/* toString */ "t"].call(b)) return false;
  // Work around a bug in IE 10 - Edge 13.
  if (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_5__[/* hasStringTagBug */ "a"] && className == '[object Object]' && Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(a)) {
    if (!Object(_isDataView_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(b)) return false;
    className = tagDataView;
  }
  switch (className) {
    // These types are compared by value.
    case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
    case '[object String]':
      // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
      // equivalent to `new String("5")`.
      return '' + a === '' + b;
    case '[object Number]':
      // `NaN`s are equivalent, but non-reflexive.
      // Object(NaN) is equivalent to NaN.
      if (+a !== +a) return +b !== +b;
      // An `egal` comparison is performed for other numeric values.
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      // Coerce dates and booleans to numeric primitive values. Dates are compared by their
      // millisecond representations. Note that invalid dates with millisecond representations
      // of `NaN` are not equivalent.
      return +a === +b;
    case '[object Symbol]':
      return _setup_js__WEBPACK_IMPORTED_MODULE_1__[/* SymbolProto */ "d"].valueOf.call(a) === _setup_js__WEBPACK_IMPORTED_MODULE_1__[/* SymbolProto */ "d"].valueOf.call(b);
    case '[object ArrayBuffer]':
    case tagDataView:
      // Coerce to typed array so we can fall through.
      return deepEq(Object(_toBufferView_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(a), Object(_toBufferView_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(b), aStack, bStack);
  }

  var areArrays = className === '[object Array]';
  if (!areArrays && Object(_isTypedArray_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(a)) {
      var byteLength = Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(a);
      if (byteLength !== Object(_getByteLength_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(b)) return false;
      if (a.buffer === b.buffer && a.byteOffset === b.byteOffset) return true;
      areArrays = true;
  }
  if (!areArrays) {
    if (typeof a != 'object' || typeof b != 'object') return false;

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    var aCtor = a.constructor, bCtor = b.constructor;
    if (aCtor !== bCtor && !(Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(aCtor) && aCtor instanceof aCtor &&
                             Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(bCtor) && bCtor instanceof bCtor)
                        && ('constructor' in a && 'constructor' in b)) {
      return false;
    }
  }
  // Assume equality for cyclic structures. The algorithm for detecting cyclic
  // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

  // Initializing stack of traversed objects.
  // It's done here since we only need them for objects and arrays comparison.
  aStack = aStack || [];
  bStack = bStack || [];
  var length = aStack.length;
  while (length--) {
    // Linear search. Performance is inversely proportional to the number of
    // unique nested structures.
    if (aStack[length] === a) return bStack[length] === b;
  }

  // Add the first object to the stack of traversed objects.
  aStack.push(a);
  bStack.push(b);

  // Recursively compare objects and arrays.
  if (areArrays) {
    // Compare array lengths to determine if a deep comparison is necessary.
    length = a.length;
    if (length !== b.length) return false;
    // Deep compare the contents, ignoring non-numeric properties.
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false;
    }
  } else {
    // Deep compare objects.
    var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(a), key;
    length = _keys.length;
    // Ensure that both objects contain the same number of properties before comparing deep equality.
    if (Object(_keys_js__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(b).length !== length) return false;
    while (length--) {
      // Deep compare each member
      key = _keys[length];
      if (!(Object(_has_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
    }
  }
  // Remove the first object from the stack of traversed objects.
  aStack.pop();
  bStack.pop();
  return true;
}

// Perform a deep comparison to check if two objects are equal.
function isEqual(a, b) {
  return eq(a, b);
}


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);




/* harmony default export */ __webpack_exports__["a"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__[/* isIE11 */ "b"] ? Object(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__[/* ie11fingerprint */ "a"])(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__[/* mapMethods */ "b"]) : Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Map'));


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);




/* harmony default export */ __webpack_exports__["a"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__[/* isIE11 */ "b"] ? Object(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__[/* ie11fingerprint */ "a"])(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__[/* weakMapMethods */ "d"]) : Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('WeakMap'));


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);




/* harmony default export */ __webpack_exports__["a"] = (_stringTagBug_js__WEBPACK_IMPORTED_MODULE_1__[/* isIE11 */ "b"] ? Object(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__[/* ie11fingerprint */ "a"])(_methodFingerprint_js__WEBPACK_IMPORTED_MODULE_2__[/* setMethods */ "c"]) : Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('Set'));


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _tagTester_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (Object(_tagTester_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('WeakSet'));


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pairs; });
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


// Convert an object into a list of `[key, value]` pairs.
// The opposite of `_.object` with one argument.
function pairs(obj) {
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj);
  var length = _keys.length;
  var pairs = Array(length);
  for (var i = 0; i < length; i++) {
    pairs[i] = [_keys[i], obj[_keys[i]]];
  }
  return pairs;
}


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return create; });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _extendOwn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);



// Creates an object that inherits from the given prototype object.
// If additional properties are provided then they will be added to the
// created object.
function create(prototype, props) {
  var result = Object(_baseCreate_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(prototype);
  if (props) Object(_extendOwn_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result, props);
  return result;
}


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clone; });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _extend_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);




// Create a (shallow-cloned) duplicate of an object.
function clone(obj) {
  if (!Object(_isObject_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj)) return obj;
  return Object(_isArray_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) ? obj.slice() : Object(_extend_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({}, obj);
}


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tap; });
// Invokes `interceptor` with the `obj` and then returns `obj`.
// The primary purpose of this method is to "tap into" a method chain, in
// order to perform operations on intermediate results within the chain.
function tap(obj, interceptor) {
  interceptor(obj);
  return obj;
}


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return has; });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);



// Shortcut function for checking if an object has a given property directly on
// itself (in other words, not on a prototype). Unlike the internal `has`
// function, this public version can also traverse nested properties.
function has(obj, path) {
  path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(path);
  var length = path.length;
  for (var i = 0; i < length; i++) {
    var key = path[i];
    if (!Object(_has_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj, key)) return false;
    obj = obj[key];
  }
  return !!length;
}


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapObject; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



// Returns the results of applying the `iteratee` to each element of `obj`.
// In contrast to `_.map` it returns an object.
function mapObject(obj, iteratee, context) {
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(iteratee, context);
  var _keys = Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj),
      length = _keys.length,
      results = {};
  for (var index = 0; index < length; index++) {
    var currentKey = _keys[index];
    results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
  }
  return results;
}


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return propertyOf; });
/* harmony import */ var _noop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);



// Generates a function for a given object that returns a given property.
function propertyOf(obj) {
  if (obj == null) return _noop_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
  return function(path) {
    return Object(_get_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj, path);
  };
}


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return times; });
/* harmony import */ var _optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);


// Run a function **n** times.
function times(n, iteratee, context) {
  var accum = Array(Math.max(0, n));
  iteratee = Object(_optimizeCb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(iteratee, context, 1);
  for (var i = 0; i < n; i++) accum[i] = iteratee(i);
  return accum;
}


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);



// Function for escaping strings to HTML interpolation.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]));


/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createEscaper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);



// Function for unescaping strings from HTML interpolation.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createEscaper_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_unescapeMap_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]));


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return template; });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _templateSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90);




// When customizing `_.templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var noMatch = /(.)^/;

// Certain characters need to be escaped so that they can be put into a
// string literal.
var escapes = {
  "'": "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};

var escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g;

function escapeChar(match) {
  return '\\' + escapes[match];
}

// In order to prevent third-party code injection through
// `_.templateSettings.variable`, we test it against the following regular
// expression. It is intentionally a bit more liberal than just matching valid
// identifiers, but still prevents possible loopholes through defaults or
// destructuring assignment.
var bareIdentifier = /^\s*(\w|\$)+\s*$/;

// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
function template(text, settings, oldSettings) {
  if (!settings && oldSettings) settings = oldSettings;
  settings = Object(_defaults_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, settings, _underscore_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].templateSettings);

  // Combine delimiters into one regular expression via alternation.
  var matcher = RegExp([
    (settings.escape || noMatch).source,
    (settings.interpolate || noMatch).source,
    (settings.evaluate || noMatch).source
  ].join('|') + '|$', 'g');

  // Compile the template source, escaping string literals appropriately.
  var index = 0;
  var source = "__p+='";
  text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
    index = offset + match.length;

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }

    // Adobe VMs need the match returned to produce the correct offset.
    return match;
  });
  source += "';\n";

  var argument = settings.variable;
  if (argument) {
    // Insure against third-party code injection. (CVE-2021-23358)
    if (!bareIdentifier.test(argument)) throw new Error(
      'variable is not a bare identifier: ' + argument
    );
  } else {
    // If a variable is not specified, place data values in local scope.
    source = 'with(obj||{}){\n' + source + '}\n';
    argument = 'obj';
  }

  source = "var __t,__p='',__j=Array.prototype.join," +
    "print=function(){__p+=__j.call(arguments,'');};\n" +
    source + 'return __p;\n';

  var render;
  try {
    render = new Function(argument, '_', source);
  } catch (e) {
    e.source = source;
    throw e;
  }

  var template = function(data) {
    return render.call(this, data, _underscore_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
  };

  // Provide the compiled source as a convenience for precompilation.
  template.source = 'function(' + argument + '){\n' + source + '}';

  return template;
}


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return result; });
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);



// Traverses the children of `obj` along `path`. If a child is a function, it
// is invoked with its parent as context. Returns the value of the final
// child, or `fallback` if any child is undefined.
function result(obj, path, fallback) {
  path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(path);
  var length = path.length;
  if (!length) {
    return Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(fallback) ? fallback.call(obj) : fallback;
  }
  for (var i = 0; i < length; i++) {
    var prop = obj == null ? void 0 : obj[path[i]];
    if (prop === void 0) {
      prop = fallback;
      i = length; // Ensure we don't continue iterating.
    }
    obj = Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(prop) ? prop.call(obj) : prop;
  }
  return obj;
}


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return uniqueId; });
// Generate a unique integer id (unique within the entire client session).
// Useful for temporary DOM ids.
var idCounter = 0;
function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chain; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


// Start chaining a wrapped Underscore object.
function chain(obj) {
  var instance = Object(_underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj);
  instance._chain = true;
  return instance;
}


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _bind_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);




// Bind a number of an object's methods to that object. Remaining arguments
// are the method names to be bound. Useful for ensuring that all callbacks
// defined on an object belong to it.
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(obj, keys) {
  keys = Object(_flatten_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(keys, false, false);
  var index = keys.length;
  if (index < 1) throw new Error('bindAll must be passed function names');
  while (index--) {
    var key = keys[index];
    obj[key] = Object(_bind_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj[key], obj);
  }
  return obj;
}));


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memoize; });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


// Memoize an expensive function by storing its results.
function memoize(func, hasher) {
  var memoize = function(key) {
    var cache = memoize.cache;
    var address = '' + (hasher ? hasher.apply(this, arguments) : key);
    if (!Object(_has_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(cache, address)) cache[address] = func.apply(this, arguments);
    return cache[address];
  };
  memoize.cache = {};
  return memoize;
}


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _delay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);




// Defers a function, scheduling it to run after the current call stack has
// cleared.
/* harmony default export */ __webpack_exports__["a"] = (Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_delay_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _underscore_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], 1));


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return throttle; });
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);


// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
  var timeout, context, args, result;
  var previous = 0;
  if (!options) options = {};

  var later = function() {
    previous = options.leading === false ? 0 : Object(_now_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };

  var throttled = function() {
    var _now = Object(_now_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
    if (!previous && options.leading === false) previous = _now;
    var remaining = wait - (_now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = _now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };

  throttled.cancel = function() {
    clearTimeout(timeout);
    previous = 0;
    timeout = context = args = null;
  };

  return throttled;
}


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _now_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);



// When a sequence of calls of the returned function ends, the argument
// function is triggered. The end of a sequence is defined by the `wait`
// parameter. If `immediate` is passed, the argument function will be
// triggered at the beginning of the sequence instead of at the end.
function debounce(func, wait, immediate) {
  var timeout, previous, args, result, context;

  var later = function() {
    var passed = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])() - previous;
    if (wait > passed) {
      timeout = setTimeout(later, wait - passed);
    } else {
      timeout = null;
      if (!immediate) result = func.apply(context, args);
      // This check is needed because `func` can recursively invoke `debounced`.
      if (!timeout) args = context = null;
    }
  };

  var debounced = Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(_args) {
    context = this;
    args = _args;
    previous = Object(_now_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
    if (!timeout) {
      timeout = setTimeout(later, wait);
      if (immediate) result = func.apply(context, args);
    }
    return result;
  });

  debounced.cancel = function() {
    clearTimeout(timeout);
    timeout = args = context = null;
  };

  return debounced;
}


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wrap; });
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);


// Returns the first function passed as an argument to the second,
// allowing you to adjust arguments, run code before and after, and
// conditionally execute the original function.
function wrap(func, wrapper) {
  return Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(wrapper, func);
}


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compose; });
// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.
function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments);
    while (i--) result = args[i].call(this, result);
    return result;
  };
}


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return after; });
// Returns a function that will only be executed on and after the Nth call.
function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _partial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _before_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);



// Returns a function that will be executed at most one time, no matter how
// often you call it. Useful for lazy initialization.
/* harmony default export */ __webpack_exports__["a"] = (Object(_partial_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_before_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 2));


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);
/* harmony import */ var _createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);



// Return the position of the last occurrence of an item in an array,
// or -1 if the item is not included in the array.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createIndexFinder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(-1, _findLastIndex_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]));


/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findWhere; });
/* harmony import */ var _find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);



// Convenience version of a common use case of `_.find`: getting the first
// object containing specific `key:value` pairs.
function findWhere(obj, attrs) {
  return Object(_find_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj, Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(attrs));
}


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reject; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




// Return all the elements for which a truth test fails.
function reject(obj, predicate, context) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj, Object(_negate_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(predicate)), context);
}


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _deepGet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _toPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);






// Invoke a method (with arguments) on every item in a collection.
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(obj, path, args) {
  var contextPath, func;
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(path)) {
    func = path;
  } else {
    path = Object(_toPath_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(path);
    contextPath = path.slice(0, -1);
    path = path[path.length - 1];
  }
  return Object(_map_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj, function(context) {
    var method = func;
    if (!method) {
      if (contextPath && contextPath.length) {
        context = Object(_deepGet_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(context, contextPath);
      }
      if (context == null) return void 0;
      method = context[path];
    }
    return method == null ? method : method.apply(context, args);
  });
}));


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return where; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);



// Convenience version of a common use case of `_.filter`: selecting only
// objects containing specific `key:value` pairs.
function where(obj, attrs) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj, Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(attrs));
}


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return min; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);





// Return the minimum element (or element-based computation).
function min(obj, iteratee, context) {
  var result = Infinity, lastComputed = Infinity,
      value, computed;
  if (iteratee == null || typeof iteratee == 'number' && typeof obj[0] != 'object' && obj != null) {
    obj = Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) ? obj : Object(_values_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj);
    for (var i = 0, length = obj.length; i < length; i++) {
      value = obj[i];
      if (value != null && value < result) {
        result = value;
      }
    }
  } else {
    iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iteratee, context);
    Object(_each_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(obj, function(v, index, list) {
      computed = iteratee(v, index, list);
      if (computed < lastComputed || computed === Infinity && result === Infinity) {
        result = v;
        lastComputed = computed;
      }
    });
  }
  return result;
}


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shuffle; });
/* harmony import */ var _sample_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);


// Shuffle a collection.
function shuffle(obj) {
  return Object(_sample_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj, Infinity);
}


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sortBy; });
/* harmony import */ var _cb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _pluck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);




// Sort the object's values by a criterion produced by an iteratee.
function sortBy(obj, iteratee, context) {
  var index = 0;
  iteratee = Object(_cb_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(iteratee, context);
  return Object(_pluck_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_map_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj, function(value, key, list) {
    return {
      value: value,
      index: index++,
      criteria: iteratee(value, key, list)
    };
  }).sort(function(left, right) {
    var a = left.criteria;
    var b = right.criteria;
    if (a !== b) {
      if (a > b || a === void 0) return 1;
      if (a < b || b === void 0) return -1;
    }
    return left.index - right.index;
  }), 'value');
}


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



// Groups the object's values by a criterion. Pass either a string attribute
// to group by, or a function that returns the criterion.
/* harmony default export */ __webpack_exports__["a"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(result, value, key) {
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result, key)) result[key].push(value); else result[key] = [value];
}));


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


// Indexes the object's values by a criterion, similar to `_.groupBy`, but for
// when you know that your index values will be unique.
/* harmony default export */ __webpack_exports__["a"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(result, value, key) {
  result[key] = value;
}));


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
/* harmony default export */ __webpack_exports__["a"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(result, value, key) {
  if (Object(_has_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result, key)) result[key]++; else result[key] = 1;
}));


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


// Split a collection into two arrays: one whose elements all pass the given
// truth test, and one whose elements all do not pass the truth test.
/* harmony default export */ __webpack_exports__["a"] = (Object(_group_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(result, value, pass) {
  result[pass ? 0 : 1].push(value);
}, true));


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return size; });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);



// Return the number of elements in a collection.
function size(obj) {
  if (obj == null) return 0;
  return Object(_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(obj) ? obj.length : Object(_keys_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj).length;
}


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _negate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _pick_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74);








// Return a copy of the object without the disallowed properties.
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(obj, keys) {
  var iteratee = keys[0], context;
  if (Object(_isFunction_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(iteratee)) {
    iteratee = Object(_negate_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(iteratee);
    if (keys.length > 1) context = keys[1];
  } else {
    keys = Object(_map_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_flatten_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(keys, false, false), String);
    iteratee = function(value, key) {
      return !Object(_contains_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(keys, key);
    };
  }
  return Object(_pick_js__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(obj, iteratee, context);
}));


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return last; });
/* harmony import */ var _rest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);


// Get the last element of an array. Passing **n** will return the last N
// values in the array.
function last(array, n, guard) {
  if (array == null || array.length < 1) return n == null || guard ? void 0 : [];
  if (n == null || guard) return array[array.length - 1];
  return Object(_rest_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array, Math.max(0, array.length - n));
}


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compact; });
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);


// Trim out all falsy values from an array.
function compact(array) {
  return Object(_filter_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array, Boolean);
}


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return flatten; });
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.
function flatten(array, depth) {
  return Object(_flatten_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array, depth, false);
}


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);



// Return a version of the array that does not contain the specified value(s).
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(array, otherArrays) {
  return Object(_difference_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(array, otherArrays);
}));


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _uniq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony import */ var _flatten_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);




// Produce an array that contains the union: each distinct element from all of
// the passed-in arrays.
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function(arrays) {
  return Object(_uniq_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_flatten_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(arrays, true, true));
}));


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return intersection; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _contains_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



// Produce an array that contains every item shared between all the
// passed-in arrays.
function intersection(array) {
  var result = [];
  var argsLength = arguments.length;
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(array); i < length; i++) {
    var item = array[i];
    if (Object(_contains_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(result, item)) continue;
    var j;
    for (j = 1; j < argsLength; j++) {
      if (!Object(_contains_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(arguments[j], item)) break;
    }
    if (j === argsLength) result.push(item);
  }
  return result;
}


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _restArguments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _unzip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



// Zip together multiple lists into a single array -- elements that share
// an index go together.
/* harmony default export */ __webpack_exports__["a"] = (Object(_restArguments_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_unzip_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]));


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return object; });
/* harmony import */ var _getLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


// Converts lists into objects. Pass either a single array of `[key, value]`
// pairs, or two parallel arrays of the same length -- one of keys, and one of
// the corresponding values. Passing by pairs is the reverse of `_.pairs`.
function object(list, values) {
  var result = {};
  for (var i = 0, length = Object(_getLength_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(list); i < length; i++) {
    if (values) {
      result[list[i]] = values[i];
    } else {
      result[list[i][0]] = list[i][1];
    }
  }
  return result;
}


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return range; });
// Generate an integer Array containing an arithmetic progression. A port of
// the native Python `range()` function. See
// [the Python documentation](https://docs.python.org/library/functions.html#range).
function range(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  if (!step) {
    step = stop < start ? -1 : 1;
  }

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
}


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chunk; });
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


// Chunk a single array into multiple arrays, each containing `count` or fewer
// items.
function chunk(array, count) {
  if (count == null || count < 1) return [];
  var result = [];
  var i = 0, length = array.length;
  while (i < length) {
    result.push(_setup_js__WEBPACK_IMPORTED_MODULE_0__[/* slice */ "q"].call(array, i, i += count));
  }
  return result;
}


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mixin; });
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);






// Add your own custom functions to the Underscore object.
function mixin(obj) {
  Object(_each_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Object(_functions_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(obj), function(name) {
    var func = _underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"][name] = obj[name];
    _underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].prototype[name] = function() {
      var args = [this._wrapped];
      _setup_js__WEBPACK_IMPORTED_MODULE_3__[/* push */ "o"].apply(args, arguments);
      return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(this, func.apply(_underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], args));
    };
  });
  return _underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];
}


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _underscore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _chainResult_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46);





// Add all mutator `Array` functions to the wrapper.
Object(_each_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__[/* ArrayProto */ "a"][name];
  _underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) {
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) {
        delete obj[0];
      }
    }
    return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, obj);
  };
});

// Add all accessor `Array` functions to the wrapper.
Object(_each_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['concat', 'join', 'slice'], function(name) {
  var method = _setup_js__WEBPACK_IMPORTED_MODULE_2__[/* ArrayProto */ "a"][name];
  _underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].prototype[name] = function() {
    var obj = this._wrapped;
    if (obj != null) obj = method.apply(obj, arguments);
    return Object(_chainResult_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(this, obj);
  };
});

/* harmony default export */ __webpack_exports__["a"] = (_underscore_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _index_default_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
// ESM Exports
// ===========
// This module is the package entry point for ES module users. In other words,
// it is the module they are interfacing with when they import from the whole
// package instead of from a submodule, like this:
//
// ```js
// import { map } from 'underscore';
// ```
//
// The difference with `./index-default`, which is the package entry point for
// CommonJS, AMD and UMD users, is purely technical. In ES modules, named and
// default exports are considered to be siblings, so when you have a default
// export, its properties are not automatically available as named exports. For
// this reason, we re-export the named exports in addition to providing the same
// default export as in `./index-default`.




/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _getByteLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);



// Internal helper to determine whether we should spend extensive checks against
// `ArrayBuffer` et al.
/* harmony default export */ __webpack_exports__["a"] = (Object(_createSizePropertyCheck_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_getByteLength_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]));


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _invert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _escapeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);



// Internal list of HTML entities for unescaping.
/* harmony default export */ __webpack_exports__["a"] = (Object(_invert_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_escapeMap_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]));


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return keyInObj; });
// Internal `_.pick` helper function to determine whether `key` is an enumerable
// property name of `obj`.
function keyInObj(value, key, obj) {
  return key in obj;
}


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "id", function() { return id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prev_id", function() { return prev_id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer_size", function() { return layer_size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weighted_sum", function() { return weighted_sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activation", function() { return activation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return n; });
/* harmony import */ var _from_brain_mnist_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
var _from_brain_mnist_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(88, 1);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);



// neurons by layer and id within a layer
const layer = ({ layer_in }) => layer_in; // e.g. 0 = input layer, 1 = hidden layer, 2 = output layer
const id = ({ id_in }) => id_in;
const prev_id = ({ prev_id_in }) => prev_id_in;
const input = ({ input_in }) => input_in; // e.g. [1,0]

const layer_size = ({ layer_in }) => _from_brain_mnist_json__WEBPACK_IMPORTED_MODULE_0__.json.sizes[layer({ layer_in })];

const w = ({ layer_in, id_in, prev_id_in }) => {
  // layer, id, prev id
  if (layer({ layer_in }) == 0) {
    return 1;
    /*console.error("layer_in should be > 0");
    console.trace();
    debugger;
    return;*/
  }
  return _from_brain_mnist_json__WEBPACK_IMPORTED_MODULE_0__.json.layers[layer({ layer_in })].weights[id({ id_in })][prev_id({ prev_id_in })];
};

const b = ({ layer_in, id_in }) => {
  if (layer({ layer_in }) == 0) {
    return 0;
    /*console.error("layer_in should be > 0");
    console.trace();
    debugger;
    return;*/
  }
  return _from_brain_mnist_json__WEBPACK_IMPORTED_MODULE_0__.json.layers[layer({ layer_in })].biases[id({ id_in })];
};

const weighted_sum = ({ layer_in, input_in, id_in }) => {
  return underscore__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].range(0, layer_size({ layer_in: layer({ layer_in }) - 1 })).reduce(
  (acc, prev_id_in) =>
  acc + n({ input_in, layer_in: layer({ layer_in }) - 1, id_in: prev_id({ prev_id_in }) /* !! */ }) * w({ layer_in, id_in, prev_id_in }),
  0);

};

const x = ({ x_in }) => x_in;

const activation = ({ x_in }) => {
  //console.log(x(), JSON.stringify(arguments));
  return 1 / (1 + Math.pow(Math.E, -1 * x({ x_in })));
};

const n = ({ layer_in, input_in, id_in }) => {
  if (layer({ layer_in }) == 0) return input({ input_in })[id({ id_in })];
  //else return activation({ x_in: weighted_sum() + b() }); // calculang not picking up summarisation of x
  else return 1 / (1 + Math.pow(Math.E, -1 * (weighted_sum({ layer_in, input_in, id_in }) + b({ layer_in, id_in }))));
};

/***/ }),
/* 163 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
});
//# sourceMappingURL=from-brain-mnist.js.map