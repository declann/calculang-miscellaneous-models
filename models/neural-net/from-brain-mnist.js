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

module.exports = JSON.parse("{\"json\":{\"type\":\"NeuralNetwork\",\"sizes\":[784,16,16,10],\"layers\":[{\"weights\":[],\"biases\":[]},{\"weights\":[[-0.03416456654667854,-0.003235612064599991,0.08041612058877945,0.1355748176574707,-0.19235859811306,-0.14382852613925934,0.14719133079051971,-0.12544076144695282,0.13122817873954773,-0.24549998342990875,-0.09478805959224701,-0.09536425769329071,-0.12337100505828857,-0.1532777100801468,0.09258430451154709,-0.054512377828359604,-0.023141367360949516,-0.2695145010948181,-0.28505846858024597,-0.18796147406101227,-0.2474181205034256,-0.032937634736299515,0.026488814502954483,-0.23606780171394348,0.1549740731716156,0.15150503814220428,0.10030128806829453,-0.1068478375673294,0.12561944127082825,-0.1648167222738266,0.13513216376304626,-0.021167872473597527,-0.14404818415641785,0.014053529128432274,-0.12803177535533905,-0.028278136625885963,0.02560972049832344,-0.10041110962629318,0.10593487322330475,0.22449643909931183,-0.24076642096042633,0.021126754581928253,-0.10725654661655426,-0.270143061876297,-0.1566503494977951,-0.11313921958208084,-0.17911562323570251,-0.31727731227874756,-0.015011630021035671,0.13671062886714935,-0.19411952793598175,0.0211704783141613,0.10525042563676834,0.09182178974151611,0.20047397911548615,0.057712070643901825,-0.021523963660001755,-0.12769290804862976,0.11740447580814362,0.10743672400712967,-0.14459820091724396,0.15776512026786804,0.03821960836648941,0.14293570816516876,-0.06759049743413925,-0.07928678393363953,-0.13443253934383392,-0.1976131945848465,-0.12670724093914032,-0.34997111558914185,-0.46902191638946533,-0.3460092842578888,-0.6207944750785828,-0.4906935691833496,-0.5053200125694275,0.18004585802555084,-0.13569127023220062,-0.19955748319625854,0.11651267111301422,-0.010881699621677399,0.056126490235328674,-0.06049029156565666,0.11150122433900833,-0.1932232677936554,-0.15097619593143463,-0.0837756022810936,0.051716431975364685,-0.06298290193080902,0.08158334344625473,0.01400740910321474,-0.004051959607750177,0.10875915735960007,0.176402747631073,-0.15390005707740784,-0.006656321231275797,-0.10677944868803024,0.5696977376937866,0.9382937550544739,0.158591166138649,-0.7123547196388245,0.2471015453338623,-0.0711420327425003,-0.3686946928501129,0.030682196840643883,0.13392557203769684,-0.2933204174041748,-0.3787689507007599,-0.4417918920516968,-0.11495670676231384,0.0032626076135784388,0.014495328068733215,-0.11042986065149307,0.19603273272514343,0.07991494983434677,0.12794286012649536,0.11076788604259491,-0.034902386367321014,0.16491647064685822,0.2079153060913086,-0.04294094443321228,0.09220385551452637,-0.12882761657238007,-0.4030521810054779,-0.016896095126867294,0.22856223583221436,0.5090199112892151,-0.0708472803235054,0.3680722117424011,-0.5964553952217102,-0.09337570518255234,0.6665632128715515,-0.3298240602016449,0.2104906439781189,0.2609209418296814,-0.007599272299557924,0.07245141267776489,0.04476615786552429,0.011566880159080029,-0.0527007058262825,0.10999671369791031,-0.07462058216333389,-0.0020761683117598295,-0.0069543952122330666,-0.04789388179779053,0.0005789537681266665,0.20591618120670319,0.2171192616224289,-0.14779900014400482,0.2419847697019577,0.18584959208965302,-0.4233061969280243,0.10067614167928696,-0.37872567772865295,-0.05715144798159599,0.056677598506212234,1.0194034576416016,-0.043842609971761703,-0.17169705033302307,0.6727676391601562,0.16316458582878113,0.27531927824020386,0.2832182049751282,0.31865713000297546,0.44584745168685913,0.5516890287399292,-0.05606035143136978,-0.07227936387062073,-0.08785354346036911,-0.041737914085388184,0.06315194815397263,0.13124455511569977,0.1516120433807373,0.18786613643169403,0.41317155957221985,-0.04794670268893242,-0.7100526690483093,-0.011975640431046486,0.27650922536849976,-0.05866953730583191,0.3919481337070465,-0.05662763491272926,0.38565754890441895,0.13601766526699066,0.1599520891904831,-0.20144391059875488,-0.608829915523529,-0.2948633134365082,0.26729297637939453,-0.22149381041526794,0.5705333352088928,0.768904983997345,0.5740013122558594,0.3666417598724365,0.4224521517753601,0.16218021512031555,0.0250905342400074,0.186151385307312,0.08305678516626358,-0.12200991064310074,0.2435113489627838,0.12705156207084656,0.13815884292125702,0.14419308304786682,-0.16367192566394806,0.02322155237197876,-0.11654572188854218,0.4663507640361786,0.17676997184753418,0.950680136680603,0.5362840294837952,-0.30679479241371155,-0.4762384295463562,0.33784016966819763,0.9015364050865173,0.9327924847602844,0.0571938194334507,0.6107666492462158,0.7870140671730042,-0.4855508804321289,-0.4618358314037323,0.2225847691297531,0.06044486537575722,-0.1085604578256607,-0.0745500698685646,-0.1691173017024994,0.08555067330598831,0.09325467795133591,0.4237600564956665,0.22866608202457428,0.08128172159194946,0.2915758192539215,0.015036484226584435,-0.6077455282211304,-0.2200591117143631,0.06602572649717331,-0.06892351806163788,0.6316337585449219,0.475145161151886,1.0038310289382935,0.6281812787055969,0.36143192648887634,0.5589128732681274,0.3625679016113281,-0.9200039505958557,0.37971070408821106,0.07923325151205063,-1.033995509147644,-0.4970228374004364,0.01165427640080452,0.08189700543880463,0.17842242121696472,0.11167643219232559,-0.15778066217899323,-0.006085414905101061,0.054439667612314224,0.3272000253200531,0.5842911005020142,0.2074543684720993,0.05186522379517555,0.1207011342048645,-0.2582145929336548,0.32511836290359497,0.04454638063907623,0.07874085009098053,0.21607235074043274,-0.19479423761367798,0.13837336003780365,0.3999524414539337,0.696164071559906,-0.3249566853046417,-0.5486498475074768,-0.78758704662323,0.2861217260360718,-0.08799627423286438,-0.36720025539398193,0.08659525960683823,0.5961658954620361,0.06456319987773895,-0.10960955172777176,0.022882208228111267,0.15210463106632233,-0.06527013331651688,0.33793583512306213,0.42443424463272095,0.586126983165741,-0.05904451757669449,0.21226473152637482,0.2832399308681488,0.28130456805229187,0.12252090126276016,0.08320096135139465,-0.3262699544429779,0.8155012130737305,0.6070537567138672,-0.8939154148101807,-0.8964418768882751,0.2538064420223236,-0.026795469224452972,0.3243883550167084,-0.8818249702453613,0.2932800054550171,-0.13560456037521362,-0.09370797127485275,0.2557355463504791,0.7139739394187927,0.39366450905799866,0.12896741926670074,0.15303906798362732,-0.14307630062103271,-0.11160138994455338,0.1354043185710907,0.6446722745895386,0.5289607048034668,-0.27067407965660095,-0.5149168968200684,0.07043994218111038,-0.331572026014328,-0.6350721716880798,-0.03432066738605499,-0.2434949427843094,-0.6755262613296509,0.29934272170066833,-0.43537479639053345,-0.8449057936668396,-0.06178567185997963,0.5573088526725769,1.0461523532867432,-0.10709663480520248,-0.4220110774040222,-0.40006953477859497,-0.5828468203544617,-0.15124908089637756,0.287764310836792,0.4791683852672577,0.24839864671230316,0.09233503043651581,-0.2090841382741928,0.052145764231681824,0.2545758783817291,0.5832309126853943,0.4644988179206848,0.357848584651947,-0.24307624995708466,0.06863446533679962,0.2559124231338501,-0.6949719786643982,0.18064160645008087,-0.3170059323310852,-0.5164036750793457,-0.08542545884847641,-0.18793483078479767,-0.15144677460193634,0.021375326439738274,-0.5651256442070007,0.10492724180221558,0.11068879067897797,-0.08033790439367294,-0.9179098606109619,-0.4469977021217346,0.050970111042261124,-0.14603981375694275,0.05895797908306122,0.017968246713280678,-0.03399990126490593,0.14148840308189392,0.22250746190547943,-0.06610316038131714,0.1771005392074585,0.11850178241729736,0.44521743059158325,0.6973400712013245,0.6281984448432922,-0.08277461677789688,-0.24977579712867737,0.04819405451416969,-0.35210952162742615,0.24059689044952393,-0.9745343327522278,-0.725592851638794,-0.5753723978996277,0.4420669674873352,-1.1613860130310059,0.24073439836502075,-0.35850661993026733,0.017636051401495934,-0.28387996554374695,-0.42131391167640686,-0.132838174700737,-0.23713628947734833,-0.12879948318004608,0.07060328125953674,-0.02779415249824524,0.09071588516235352,-0.13264240324497223,0.018720073625445366,0.22974832355976105,0.434566468000412,0.03339098021388054,-0.02934963069856167,-0.5104419589042664,0.23762191832065582,0.08898534625768661,-0.04780610650777817,-0.6966668963432312,0.17369064688682556,0.3873055577278137,0.41476258635520935,-0.38790351152420044,-0.8603630065917969,-0.7576009035110474,-0.5079366564750671,-0.162101149559021,-0.05896971747279167,0.35977980494499207,-0.18273216485977173,0.4533928632736206,0.15611788630485535,0.1594173163175583,-0.2016046643257141,-0.00636712834239006,-0.16406899690628052,0.1655612736940384,0.03866821900010109,-0.12981946766376495,0.3351675271987915,-0.10475786030292511,-0.5712907910346985,-1.336674690246582,-0.6103976368904114,-0.22447407245635986,0.2159508466720581,0.24913479387760162,-0.014205052517354488,-1.1356488466262817,-0.9244175553321838,-0.544611930847168,-0.47867122292518616,-0.6474125981330872,0.22253437340259552,0.5661399364471436,0.9304041266441345,-0.18581949174404144,-0.11897540837526321,-0.1323539912700653,0.5057017207145691,-0.09888436645269394,-0.032402168959379196,0.1827186793088913,0.0207673292607069,-0.08498133718967438,0.039515212178230286,0.23951412737369537,0.3248024880886078,-0.19433698058128357,-1.6745692491531372,-0.9913563132286072,-1.5095610618591309,-0.783103883266449,-0.17254707217216492,-0.5639582872390747,0.02106497623026371,0.37325453758239746,-0.6076722741127014,-0.8776450753211975,-1.199497103691101,0.5017482042312622,0.24183693528175354,1.0305513143539429,0.8561109900474548,0.268402099609375,0.1884114146232605,0.19881539046764374,0.4469376504421234,-0.11223071813583374,-0.03536331653594971,-0.02544771507382393,-0.07003570348024368,-0.02428891323506832,0.11825371533632278,0.4775792956352234,1.0461220741271973,-0.2606630027294159,-1.07004976272583,-1.0868507623672485,-2.322089433670044,-2.602264404296875,-1.4750797748565674,-1.3979390859603882,-1.3895000219345093,-1.162681221961975,-2.0592687129974365,-0.7592034339904785,-0.05635892227292061,0.765418291091919,0.8872049450874329,0.19794458150863647,0.09592122584581375,0.8781525492668152,-0.29453104734420776,0.012231554836034775,0.2860867381095886,-0.1562628597021103,-0.1722874641418457,-0.12133835256099701,-0.08607622236013412,-0.006138932425528765,0.27191466093063354,0.42549607157707214,0.6661685109138489,-0.3019983172416687,-1.3141049146652222,-1.8916629552841187,-1.9625895023345947,-2.171942710876465,-2.655301332473755,-2.6947901248931885,-2.3445487022399902,-2.8638792037963867,-1.2202396392822266,-0.34185341000556946,0.4905540943145752,-0.16015058755874634,0.5615496039390564,-0.5347355008125305,-0.15712815523147583,0.5201345086097717,-0.37448349595069885,-0.017202328890562057,0.08658252656459808,-0.18001878261566162,0.12030582875013351,-0.21892206370830536,-0.05232861265540123,0.18605904281139374,-0.10785401612520218,0.5425389409065247,0.6396622061729431,0.13699187338352203,-0.9030423164367676,-0.7652159929275513,-0.2524314224720001,-0.9901622533798218,-1.373110055923462,-1.035820484161377,-1.3097220659255981,-0.9621834754943848,0.016932472586631775,1.0586369037628174,0.18605734407901764,-0.7178979516029358,-0.22104649245738983,-0.18331685662269592,-0.5901954770088196,0.1757165789604187,-0.2265741378068924,0.3893374502658844,0.005983696319162846,-0.10101521015167236,0.11715640872716904,0.006237087305635214,0.06640534847974777,0.055611807852983475,0.33596739172935486,0.3577054440975189,0.4246583580970764,0.5129218697547913,0.4178656339645386,0.3596058487892151,0.658847451210022,0.4279797375202179,0.6354058980941772,0.05526115372776985,0.2097695767879486,0.994557797908783,0.9593234658241272,-0.21173973381519318,-0.20204418897628784,0.6095647215843201,0.579940676689148,-0.14393703639507294,-0.19028054177761078,1.0889378786087036,0.17636366188526154,0.2239546924829483,-0.018625248223543167,-0.01556729432195425,-0.02582894265651703,0.0007372798281721771,-0.07832840830087662,-0.0032450794242322445,0.3834957480430603,0.566582202911377,0.43872523307800293,0.40500301122665405,0.6215677857398987,0.4301912784576416,0.08170518279075623,0.22163453698158264,0.5232816934585571,0.30469512939453125,1.0535085201263428,1.038715124130249,0.9757636785507202,1.0157861709594727,0.6310956478118896,0.17014513909816742,0.8981402516365051,0.18291965126991272,0.554991602897644,0.40904316306114197,0.07724614441394806,-0.26291438937187195,-0.21023297309875488,-0.04323898255825043,-0.13078664243221283,0.018540574237704277,0.11260728538036346,0.01148954313248396,0.16254030168056488,0.4127454459667206,0.11301430314779282,-0.2962414026260376,0.10717371851205826,0.14725609123706818,-0.16301244497299194,0.5254952907562256,0.004918310325592756,0.8448681831359863,0.2805512249469757,0.47590717673301697,-0.20125536620616913,0.8724883794784546,0.43534019589424133,-0.12422491610050201,0.6668418049812317,1.3009454011917114,-0.01126236841082573,-0.35927027463912964,0.15357071161270142,-0.07216151803731918,-0.13155235350131989,-0.2203732430934906,-0.17298699915409088,0.11381254345178604,-0.04667370021343231,0.19236810505390167,0.17827428877353668,0.07788997143507004,0.40204209089279175,0.055303964763879776,0.30717113614082336,-0.3149970769882202,-0.6366398930549622,0.6255691647529602,0.11062756925821304,0.26856663823127747,0.10853961855173111,0.2888633608818054,0.497909814119339,-0.0014243022305890918,-0.48006191849708557,-0.0028990532737225294,0.19256071746349335,-0.41113004088401794,-0.45562466979026794,-0.2714170515537262,-0.05331140384078026,-0.10281021893024445,-0.03915474936366081,-0.18285386264324188,-0.026790862902998924,0.06402481347322464,0.19289672374725342,0.15967023372650146,-0.11241661757230759,0.25311198830604553,0.3568004071712494,0.2517678737640381,0.8575299382209778,1.6153571605682373,1.1453709602355957,1.0017894506454468,0.767699122428894,0.06497949361801147,0.19598333537578583,0.23291216790676117,0.5236804485321045,0.21408699452877045,-0.07491622865200043,0.08064734190702438,-0.3424566984176636,-0.33019745349884033,-0.4258473813533783,-0.04030666500329971,-0.3172385096549988,-0.3456607758998871,0.060113534331321716,-0.03751632943749428,0.11567044258117676,0.15973523259162903,0.13735605776309967,-0.1476355493068695,-0.013253958895802498,0.13280440866947174,-0.0046462430618703365,0.09311357140541077,0.16870978474617004,0.19866980612277985,0.2917107343673706,0.9599665403366089,1.3776583671569824,1.2401602268218994,1.1055763959884644,0.38693737983703613,0.2508227527141571,0.22682134807109833,-0.3462926149368286,-0.11383198946714401,0.05018755421042442,0.08649159222841263,0.04878624528646469,-0.158951073884964,-0.16957487165927887,0.08087249100208282,-0.15143932402133942,0.10748865455389023,-0.013550898991525173,0.12061543762683868,-0.03094402700662613,-0.06181367114186287,0.05790087580680847,0.001990948338061571,-0.16722193360328674,0.2175254225730896,-0.19866622984409332,-0.057748943567276,-0.25002583861351013,-0.06879697740077972,0.306352823972702,0.3298145830631256,0.3775815963745117,0.04007386416196823,0.025915488600730896,0.10853942483663559,0.2622931897640228,0.2300545871257782,0.198046013712883,0.09306371212005615,-0.10001008212566376,0.11534564197063446,0.059096962213516235,0.0056115323677659035,-0.13626737892627716,-0.14576859772205353,-0.18137530982494354,0.1644512116909027,-0.1661136895418167,0.21279631555080414,0.19174382090568542,0.14518135786056519,-0.11441513150930405,-0.04979727417230606,0.11062511056661606,-0.06406823545694351,0.008215880952775478,0.11924085021018982,0.21253563463687897,-0.1022823303937912,0.023029567673802376,0.1696954220533371,0.2128034234046936,0.12524984776973724,0.30642855167388916,-0.05797511711716652,0.1253984570503235,0.18135367333889008,0.07746798545122147,-0.11242806911468506,-0.19101102650165558,-0.19165916740894318,-0.06046253442764282,-0.11830097436904907,-0.07944083958864212,-0.18410278856754303],[-0.008805247023701668,0.06279005110263824,-0.012901249341666698,0.06281759589910507,0.04885053262114525,0.10822165012359619,0.07350968569517136,-0.17587286233901978,-0.004525117576122284,0.17373409867286682,-0.057896073907613754,-0.09051685035228729,0.15127988159656525,-0.07353001832962036,0.18988271057605743,-0.05287373438477516,0.23707565665245056,-0.1271355003118515,0.046751756221055984,-0.1861911118030548,-0.20620955526828766,0.026527639478445053,0.13611724972724915,0.028295129537582397,-0.06039317697286606,0.11115607619285583,0.055387575179338455,-0.09746651351451874,0.11515399813652039,0.009274710901081562,-0.032882168889045715,0.20213237404823303,0.12696687877178192,-0.045986566692590714,-0.20042730867862701,-0.01007489487528801,-0.007483174558728933,-0.002642732812091708,0.24505002796649933,0.045517824590206146,-0.04422110691666603,0.21867237985134125,0.07584225386381149,-0.3082590401172638,-0.12850689888000488,-0.05121469125151634,0.047491878271102905,0.17733770608901978,0.22747208178043365,0.0005689577665179968,0.1946411281824112,-0.021144917234778404,0.017632780596613884,0.10922425240278244,-0.1252966672182083,-0.10872367024421692,0.043305110186338425,-0.056637126952409744,0.1364596039056778,0.1361406445503235,-0.10899125039577484,-0.006662379950284958,-0.19114944338798523,0.29085052013397217,-0.4144558906555176,-0.32974088191986084,0.04507957771420479,-0.09990683197975159,-0.26361793279647827,-0.357311874628067,-0.4915313720703125,-0.19539792835712433,-0.08783207088708878,0.02227707952260971,-0.34066352248191833,-0.32770153880119324,-0.5368137955665588,-0.3437051475048065,0.1052398830652237,-0.1538204848766327,0.07258213311433792,0.16687476634979248,-0.21080446243286133,0.10960307717323303,0.14819957315921783,0.15548160672187805,0.1710059493780136,0.07147383689880371,0.069919154047966,-0.09461616724729538,0.010726731270551682,-0.03480542451143265,-0.32396239042282104,-0.15987904369831085,-0.005141208413988352,-0.42828139662742615,-0.998386025428772,-0.007416096515953541,-0.3790702819824219,-0.4331657588481903,0.0012500721495598555,-0.2986510097980499,-0.6527262330055237,-0.47167614102363586,-0.29832035303115845,-0.8540234565734863,-0.6623439788818359,-0.14160695672035217,-0.027441374957561493,0.06006287410855293,0.011566093191504478,-0.11260378360748291,0.1461399793624878,-0.12882477045059204,-0.15357966721057892,-0.12281161546707153,-0.12631432712078094,-0.25077956914901733,-0.22431379556655884,-0.5310537815093994,-0.6045612096786499,-0.09134335070848465,-0.2419188767671585,-1.0132403373718262,0.028440507128834724,0.4623950719833374,0.3110957443714142,0.11852029711008072,-0.05996149405837059,0.2912900447845459,-0.45893487334251404,-0.4424562156200409,0.17288661003112793,0.12226179987192154,-0.11146369576454163,-0.2151666134595871,-0.24758970737457275,-0.2473883032798767,-0.12804169952869415,-0.22560854256153107,0.08958017826080322,-0.04489433020353317,0.12677185237407684,0.1455935537815094,-0.014570360071957111,-0.3552558720111847,-0.21868179738521576,-0.4588293433189392,-0.27195778489112854,-0.5047743916511536,-0.4380185604095459,0.2825658917427063,0.8086568117141724,0.35917583107948303,0.4145885705947876,0.7616968750953674,0.5070476531982422,0.3500681519508362,0.4084596335887909,0.36685070395469666,-0.3549317419528961,0.0023969945032149553,-0.614507257938385,-0.7195811867713928,-0.2700002193450928,-0.3701847195625305,-0.20560568571090698,0.10504666715860367,0.1896853893995285,0.05640884116292,0.08970547467470169,-0.14625965058803558,-0.11534889787435532,-0.27564069628715515,-0.07751680165529251,-0.5701942443847656,0.09192904829978943,-0.20210961997509003,-0.2634572684764862,-0.21396781504154205,-1.127313494682312,-1.0335564613342285,0.4631348252296448,0.17248786985874176,0.004733918700367212,0.5766569375991821,1.2211332321166992,0.6762265563011169,0.050442006438970566,0.2213594764471054,0.1931924819946289,0.2845882773399353,-0.8519273996353149,-0.6371310949325562,-0.31426599621772766,-0.05572887137532234,0.13863292336463928,-0.027464181184768677,-0.09400606155395508,0.07155680656433105,0.2028675079345703,0.11429294943809509,0.223510280251503,-0.05805975943803787,-0.4752751886844635,-0.4582497179508209,0.3813437521457672,0.05573347583413124,0.35283103585243225,0.12057778239250183,-0.23116762936115265,0.6718557476997375,-0.13547278940677643,-0.45326846837997437,0.21280518174171448,0.9340737462043762,-0.07171126455068588,0.38112297654151917,0.5035658478736877,0.2401987612247467,-1.1436845064163208,-0.43725478649139404,-0.21064844727516174,0.061666350811719894,0.10907032340765,0.23359136283397675,0.14406117796897888,0.16110074520111084,0.38764268159866333,0.02680262178182602,-0.3131237328052521,-0.12089214473962784,-0.2990429103374481,-0.885549783706665,0.4533766806125641,0.7020601630210876,0.07328435033559799,-0.44028639793395996,-0.058238327503204346,1.5751005411148071,1.076187252998352,1.102831482887268,0.7228043079376221,0.14365290105342865,-0.22525745630264282,0.39753296971321106,0.28167083859443665,0.7757980227470398,-0.9662258625030518,-0.9300618767738342,-0.15796472132205963,-0.3522064983844757,-0.03884001076221466,0.21371132135391235,-0.07514122128486633,0.14023789763450623,0.21890084445476532,-0.03077891282737255,-0.5107908248901367,-0.2944135069847107,-0.06215620040893555,-0.8321910500526428,-0.31617647409439087,0.23656757175922394,-0.6524070501327515,-0.449294775724411,-0.02645917795598507,-0.263843297958374,1.077125072479248,1.9249695539474487,1.2419911623001099,0.8713660836219788,0.9045619964599609,0.12976481020450592,-0.2082989662885666,0.5043904781341553,-0.436892032623291,-1.1400240659713745,-0.3591431975364685,0.04436686262488365,0.16709201037883759,0.08781851083040237,-0.09347448498010635,0.17819969356060028,-0.1270609200000763,-0.06003266200423241,-0.8589255809783936,-0.666128933429718,0.46977946162223816,-0.43467977643013,-0.4087899923324585,-0.2896232306957245,-0.41980206966400146,-1.1654599905014038,-0.9264639019966125,-0.4820687770843506,-0.983802080154419,0.40450578927993774,1.0392979383468628,1.4081835746765137,0.8438535928726196,0.5005835294723511,0.11261585354804993,-0.17579776048660278,-0.16267302632331848,-0.8361111879348755,-0.6123612523078918,0.020640594884753227,0.06651416420936584,-0.18419532477855682,0.194942444562912,-0.09775232523679733,-0.5247966051101685,-0.33098554611206055,-0.6435731053352356,-0.2759775221347809,-1.112281084060669,-0.8581897616386414,-0.1423361599445343,-0.6673269867897034,-0.8693802952766418,-0.9193928837776184,-0.9005609154701233,-1.5956591367721558,-1.066612720489502,-0.08009806275367737,0.7450629472732544,-0.12879207730293274,0.7557350993156433,0.334291934967041,0.5524616241455078,0.10709816962480545,-0.3253466486930847,-0.8083401322364807,-0.4894920289516449,-0.03416414558887482,0.16035927832126617,0.09755150973796844,-0.1153554916381836,0.25661158561706543,-0.3325585424900055,-0.13139572739601135,-0.7439171671867371,-0.25115662813186646,-1.0774574279785156,-0.44575443863868713,-0.6531428694725037,-1.160431981086731,0.26986804604530334,-0.6614350080490112,-2.078746795654297,-1.529508352279663,-1.1379162073135376,-0.39420267939567566,0.4463464021682739,0.5591514110565186,0.8233053088188171,0.07834019511938095,-0.09864399582147598,0.8794407844543457,0.7471811771392822,0.17088963091373444,-0.2777459919452667,-0.14611896872520447,-0.08833033591508865,-0.08839741349220276,0.05176286771893501,0.11951155960559845,-0.32169288396835327,0.18705257773399353,-0.1078684851527214,0.05845615267753601,-0.49986642599105835,0.1607847958803177,-1.087551236152649,-0.2793688178062439,0.027999164536595345,-1.0664743185043335,-0.8711551427841187,-1.8101454973220825,-1.3490986824035645,-0.1917317807674408,0.17118774354457855,-0.15739277005195618,0.2755718231201172,0.5393959283828735,0.1829894334077835,0.22832424938678741,0.17867417633533478,-0.27594664692878723,-0.00810359138995409,-0.10751985013484955,0.10199941694736481,0.20101530849933624,-0.14968301355838776,0.023843875154852867,0.141225203871727,0.45490607619285583,0.37379923462867737,0.9167901277542114,0.3872223198413849,0.06705363839864731,-0.2573220729827881,-0.37058907747268677,-0.06473512202501297,-0.17391586303710938,-0.9507375359535217,-1.4557545185089111,-2.001358985900879,-0.3147697448730469,-0.6218612790107727,-0.4202190041542053,0.13700087368488312,0.05554722994565964,0.6778919100761414,0.024875186383724213,-0.19685615599155426,-0.12596432864665985,0.1311604082584381,-0.18584217131137848,0.15143658220767975,0.0077998945489525795,0.253349632024765,0.09514804929494858,0.7705051302909851,0.7245526313781738,0.46931084990501404,0.17366091907024384,0.6604887843132019,0.579965353012085,0.21638190746307373,-1.164673089981079,-0.31200799345970154,-0.6966932415962219,-0.8838079571723938,-1.4939610958099365,-0.26993528008461,-0.0912182629108429,-0.14772073924541473,0.09892834722995758,0.037648554891347885,0.09674567729234695,0.3804680407047272,-0.5500730276107788,-0.048526253551244736,0.2260565459728241,-0.012250765226781368,0.1037316843867302,0.03318198397755623,-0.14646175503730774,-0.2831067442893982,-0.10776790231466293,0.7183032631874084,0.2817888855934143,0.9935570955276489,0.17239169776439667,0.30100584030151367,0.25426003336906433,0.6476269364356995,-0.2883738577365875,-0.1452309787273407,-0.6713826656341553,-1.0231658220291138,-0.9653311371803284,0.06360174715518951,-0.6845760941505432,-0.3027479350566864,0.46851375699043274,0.33089280128479004,0.02344636432826519,0.09369184821844101,-0.7092500925064087,-0.221836119890213,0.3638332486152649,0.0879051685333252,0.13835075497627258,-0.09661798179149628,0.08888480067253113,-0.1835968941450119,0.11642058938741684,0.9123623967170715,0.12148284912109375,0.8061953783035278,0.7783019542694092,-0.07899991422891617,0.30465540289878845,0.3909352719783783,0.38542288541793823,-0.6468722224235535,-1.9815582036972046,-0.977997899055481,-0.5162793397903442,0.040124259889125824,0.5479394197463989,0.25399452447891235,0.24254173040390015,-0.884928822517395,0.17813973128795624,0.21979032456874847,0.09986469149589539,0.22594350576400757,0.7395121455192566,0.12471883744001389,0.04691341146826744,-0.02321295440196991,-0.1711903214454651,0.025330405682325363,-0.421161413192749,0.41761961579322815,0.009059515781700611,0.3681148588657379,0.1897149235010147,0.6965416073799133,0.30360299348831177,1.323315143585205,0.585727334022522,-0.672836422920227,-0.8048602342605591,0.5513328313827515,0.15656834840774536,0.6205537915229797,0.11971519887447357,1.1454449892044067,1.0748207569122314,0.4023045301437378,0.06828424334526062,0.4202342629432678,0.9078199863433838,1.1445420980453491,1.091294288635254,0.2826631963253021,-0.09260863065719604,-0.10856292396783829,-0.31249621510505676,-0.2715453803539276,-0.5725632905960083,0.5691330432891846,0.0288665983825922,0.040582045912742615,-0.1376412808895111,0.5107038617134094,0.40327009558677673,1.16974675655365,0.933415949344635,-0.4102448523044586,-0.024022098630666733,0.47346317768096924,0.21926788985729218,-0.522739589214325,0.0885646790266037,-0.05028080940246582,-0.18304771184921265,0.08189886808395386,-0.2599642276763916,0.1124194860458374,0.09145461767911911,1.0840414762496948,0.6288538575172424,0.3691098093986511,-0.027744274586439133,-0.34002605080604553,0.13954783976078033,-0.23654617369174957,-0.19314609467983246,0.4029954969882965,0.544848620891571,0.17859752476215363,0.9452769160270691,0.22216029465198517,-0.36880746483802795,0.2579685151576996,-0.5413225293159485,-0.21972425282001495,-0.37858250737190247,0.04511953145265579,0.7426607608795166,0.05582224577665329,0.533727765083313,-0.3751544952392578,-0.4254651963710785,0.1880807876586914,0.4941730499267578,-0.38193970918655396,0.15626296401023865,1.1302835941314697,0.43363964557647705,0.07693009823560715,-0.03694853186607361,-0.09511270374059677,0.16472508013248444,0.003968670964241028,-0.07125970721244812,0.022550120949745178,0.6142197847366333,0.09087160974740982,-0.49402832984924316,-0.42132964730262756,0.3110678195953369,0.41017982363700867,0.453900545835495,0.47265127301216125,-0.4112474322319031,-0.11414311826229095,-0.11994551122188568,-0.7192010879516602,-1.0790702104568481,-0.06618271768093109,0.19356021285057068,0.45543172955513,0.44477105140686035,0.3886287808418274,0.4187915325164795,0.7866886854171753,0.063408263027668,0.11391118168830872,-0.14552855491638184,-0.00014887284487485886,-0.03374292328953743,-0.18050448596477509,0.21105994284152985,-0.3248167932033539,0.7042856216430664,0.41106829047203064,-0.004255428910255432,0.46969810128211975,0.7646615505218506,-0.6258795857429504,0.009713205508887768,0.3179762363433838,-0.4430343508720398,-0.10030598193407059,-0.4551376402378082,0.2601167857646942,0.13974149525165558,0.2942047715187073,0.6605222821235657,0.8685358166694641,0.47714704275131226,0.6653293967247009,0.5292451977729797,0.315785676240921,0.22780850529670715,0.04778680577874184,-0.11367469280958176,-0.10239500552415848,-0.10436112433671951,-0.14469827711582184,-0.21079905331134796,-0.4661429524421692,-0.22926868498325348,0.04008862376213074,-0.1338588148355484,-0.0020733261480927467,1.1167566776275635,0.33798423409461975,1.2466671466827393,0.30452924966812134,-0.21636320650577545,-0.8427751660346985,-0.01959240436553955,0.8549323081970215,-0.7506747841835022,-0.2849166691303253,0.15496963262557983,0.40269970893859863,0.9645280838012695,0.5522043704986572,-0.0077606928534805775,0.23685075342655182,0.2097579836845398,0.003015817841514945,0.23450720310211182,0.00786075834184885,0.17424367368221283,-0.015516776591539383,-0.09004174917936325,-0.05543234944343567,-0.4070654809474945,-0.003621581709012389,-0.23604433238506317,-0.1256871074438095,-0.14844156801700592,-0.15185849368572235,0.3671536147594452,0.2774195969104767,-0.5183641314506531,-0.6919746994972229,-0.1593714952468872,-0.092943474650383,-0.5567541718482971,-0.7957893013954163,0.052621401846408844,0.38762950897216797,0.4707544445991516,-0.05584551766514778,-0.3263936936855316,-0.0489678829908371,0.21090339124202728,0.14685776829719543,-0.01911018230021,0.17741665244102478,-0.15599563717842102,-0.07616883516311646,-0.01789378561079502,-0.20559947192668915,-0.16548600792884827,-0.11417732387781143,-0.3737650215625763,-0.7907776236534119,-0.7313897013664246,-0.5451006889343262,-0.34605690836906433,-0.6690054535865784,-0.3139108121395111,-0.26317447423934937,-0.13986611366271973,-0.2811582088470459,-0.26924073696136475,-0.18049107491970062,-0.18449760973453522,-0.04227070510387421,-0.0030279497150331736,0.11672995239496231,-0.09653609246015549,0.1531454473733902,-0.07917821407318115,-0.11178715527057648,0.07433846592903137,0.1551252156496048,-0.06479375064373016,-0.10941522568464279,-0.0634271427989006,-0.0653107762336731,-0.13399316370487213,-0.11794737726449966,-0.0580732561647892,-0.1764102727174759,-0.2878062129020691,0.08292920887470245,-0.2553417980670929,-0.24057692289352417,-0.07044052332639694,0.03754560276865959,-0.05038627237081528,0.1935662478208542,0.24433542788028717,-0.19253461062908173,-0.10359332710504532,-0.06516050547361374,0.010127192363142967,0.14397859573364258,0.010259082540869713,-0.09375034272670746,-0.18646879494190216,0.18301421403884888,-0.16505371034145355,0.00012642491492442787,-0.044595181941986084,-0.16675487160682678,0.13033971190452576,0.11065376549959183,0.05103117600083351,0.16699138283729553,0.1234070435166359,-0.009290345013141632,-0.16124890744686127,-0.13455000519752502,-0.007319214753806591,0.02408020943403244,-0.12854744493961334,0.0023234845139086246,-0.17495182156562805,-0.18013891577720642,0.18017679452896118,0.0816451907157898,0.06453920155763626,0.1584824174642563,0.062118932604789734,-0.17205291986465454,-0.24316804111003876,0.1610203981399536,0.06363788992166519,-0.11836188286542892,-0.11062568426132202],[0.05618952959775925,0.130778506398201,-0.10676843672990799,-0.09488914161920547,0.14408418536186218,-0.09664955735206604,-0.0907445102930069,-0.10802978277206421,0.03933601453900337,0.07716844975948334,0.12006709724664688,0.09224526584148407,-0.04921738803386688,0.1296108067035675,0.15849629044532776,-0.07222380489110947,-0.0415193997323513,-0.2943814992904663,-0.15773120522499084,0.06392417103052139,-0.1332208663225174,0.11156672239303589,-0.26473429799079895,-0.10989612340927124,-0.03345595672726631,-0.14073537290096283,-0.02702123299241066,0.057695627212524414,-0.1515740603208542,0.03988312929868698,-0.04365444555878639,-0.17692242562770844,0.03657469525933266,-0.12612904608249664,-0.15343019366264343,-0.05509781464934349,0.11584455519914627,0.16354306042194366,0.09581300616264343,0.047179196029901505,0.008763757534325123,0.12432804703712463,0.051591403782367706,-0.20555251836776733,0.018560927361249924,-0.1072692722082138,0.00228091306053102,-0.23124568164348602,-0.14473086595535278,0.16250309348106384,0.11029081046581268,0.17934691905975342,-0.026143230497837067,-0.1488146334886551,-0.07262873649597168,-0.17893771827220917,0.10526901483535767,0.2069517970085144,0.11438305675983429,0.06645272672176361,0.01602092571556568,-0.11025829613208771,0.05777950957417488,0.0025811544619500637,0.014935802668333054,-0.01637493260204792,-0.12627296149730682,-0.2666727900505066,-0.1394103467464447,0.06168882176280022,-0.11449814587831497,0.07564862072467804,0.01814488135278225,-0.03024383634328842,0.06475091725587845,-0.10974369198083878,-0.041749145835638046,0.1984686255455017,0.016755037009716034,0.1055704727768898,-0.15049903094768524,-0.04182964190840721,0.022908948361873627,0.06378937512636185,-0.05546129122376442,0.19718529284000397,0.0486559234559536,0.09524200111627579,0.009169772267341614,0.09080368280410767,-0.07617506384849548,-0.042421407997608185,-0.17957912385463715,-0.047098308801651,-0.3686889410018921,-0.6838743090629578,-0.44995754957199097,-0.8390393257141113,-0.7042679190635681,-0.12047480791807175,-0.7158750295639038,-0.15417759120464325,-0.3206482231616974,-0.10746155679225922,-0.28501269221305847,0.026455795392394066,-0.027533773332834244,-0.24584059417247772,-0.1929728388786316,0.09920033067464828,0.0455021858215332,0.17568597197532654,-0.13429255783557892,0.16142170131206512,-0.10367106646299362,-0.0848354622721672,-0.0428038090467453,0.25218379497528076,-0.12138286978006363,-0.1677745133638382,-0.6490528583526611,-0.2412833422422409,-0.0795016884803772,-0.06551064550876617,0.014162854291498661,-0.18170066177845,-0.12290597707033157,0.2998102605342865,-0.057894956320524216,0.024968190118670464,0.056216854602098465,-0.16772297024726868,-0.21765245497226715,-0.20599812269210815,0.2206021547317505,-0.029937302693724632,-0.12317051738500595,-0.011824803426861763,-0.14120198786258698,-0.06898634135723114,0.15005256235599518,0.14562545716762543,0.11748716980218887,-0.12974894046783447,0.3397664427757263,-0.13174080848693848,0.046593524515628815,-0.26873189210891724,0.026936395093798637,0.48270195722579956,0.3290351927280426,-0.12034658342599869,-0.2949894964694977,-0.9304054379463196,-0.10799628496170044,0.25989142060279846,-0.05226793885231018,-0.37674960494041443,-0.42398160696029663,-0.4116745591163635,-0.2467537373304367,-0.16849634051322937,-0.31148919463157654,-0.0026588879991322756,-0.001510762725956738,-0.0922602191567421,-0.11866750568151474,0.01950942352414131,0.207617849111557,-0.15583452582359314,0.23011234402656555,0.1382356882095337,0.3399925231933594,-0.22007443010807037,0.043208904564380646,0.09486091881990433,0.831573486328125,0.01661207154393196,0.005075701046735048,0.07395850121974945,0.34111645817756653,-0.32986122369766235,-0.6778932213783264,-1.1440199613571167,-0.5870038866996765,0.11900400370359421,0.5676136612892151,0.08820465207099915,-0.030956780537962914,0.22084766626358032,0.2620524764060974,-0.23251745104789734,-0.1305454820394516,-0.09110776335000992,0.14533507823944092,0.015621339902281761,-0.07989118248224258,0.2596150040626526,0.03251611068844795,-0.15299563109874725,0.3484310507774353,0.12944628298282623,0.5204253792762756,1.4369874000549316,0.11623077094554901,0.4524191617965698,0.5039600133895874,0.272309809923172,-0.2103024274110794,-0.03481847420334816,-1.1218806505203247,-0.9936063885688782,0.11321672797203064,-0.377800315618515,0.31240564584732056,0.49748969078063965,0.4679064452648163,0.5872899889945984,0.20181283354759216,0.4377005696296692,-0.03350816294550896,0.03491295129060745,-0.012978204526007175,-0.012920467182993889,0.03286765143275261,-0.02130449190735817,0.2581290602684021,0.4425364136695862,0.06166914477944374,1.0703378915786743,0.3392203152179718,0.5795744061470032,0.13805356621742249,0.20800194144248962,1.1873809099197388,0.45758292078971863,-0.33935075998306274,-0.09710553288459778,-0.5139034390449524,0.139395609498024,-0.0957038551568985,-0.37188076972961426,0.5248174667358398,0.3214670717716217,0.1192857176065445,0.21394900977611542,0.4922083020210266,0.16742751002311707,-0.1861380934715271,-0.30629733204841614,-0.08314358443021774,0.022696619853377342,0.13150560855865479,0.23494723439216614,0.17245818674564362,0.4923798739910126,0.35689064860343933,1.013404369354248,0.5392045378684998,0.5424125790596008,0.47240954637527466,0.4740821123123169,0.7786101698875427,-0.02650311402976513,0.2580435574054718,-0.22702933847904205,-0.1594589352607727,0.11606837064027786,0.4342377483844757,0.9659262895584106,0.6305360198020935,0.4206840693950653,0.103382907807827,0.2724780738353729,0.6682148575782776,-0.148274764418602,-0.22538305819034576,-0.03424146771430969,-0.1298838108778,0.13612161576747894,-0.14469963312149048,0.03507700935006142,0.36795392632484436,0.043136995285749435,-0.03845754638314247,0.8551670908927917,0.9811495542526245,1.1962062120437622,-0.3197142481803894,0.6665500402450562,0.9522905945777893,0.5629429221153259,0.968743085861206,0.5314598083496094,-0.3572937250137329,0.07975883036851883,0.40654420852661133,0.5585124492645264,0.4787701666355133,0.08966886252164841,0.6563830971717834,0.529254138469696,0.43386712670326233,-0.06286121159791946,-0.020704135298728943,-0.2562139928340912,0.12522445619106293,-0.005792913492769003,0.21528050303459167,0.02114720456302166,0.3821769952774048,0.21065689623355865,0.007665248122066259,-0.3493044078350067,0.050368163734674454,1.3246872425079346,-0.7280312180519104,1.0392423868179321,0.17247578501701355,1.3405894041061401,-0.1571047157049179,-0.9885541200637817,-1.5972126722335815,-0.21987803280353546,-0.12978076934814453,0.2643395960330963,0.32307976484298706,0.7460806965827942,0.21268196403980255,0.49322327971458435,0.0750255286693573,-0.3315509855747223,-0.18063947558403015,-0.22235848009586334,-0.22130882740020752,-0.05351345241069794,0.11269626766443253,0.18534572422504425,0.372079998254776,0.23649823665618896,-0.13784697651863098,-0.5424148440361023,-0.6397736072540283,0.34799933433532715,-0.42465952038764954,-0.2698037326335907,-0.41274598240852356,0.9458982348442078,-0.11833231896162033,-1.8823565244674683,-2.3654937744140625,0.14860224723815918,0.025226522237062454,-0.09078105539083481,0.2245875597000122,-0.9112775325775146,-0.23269355297088623,-0.2659665048122406,-0.2831922173500061,-0.3904073238372803,-0.3371961712837219,0.10978380590677261,0.21451708674430847,-0.05757005512714386,0.20299752056598663,0.031049879267811775,0.22084487974643707,-0.22931575775146484,0.06620080024003983,0.061102982610464096,-0.36706361174583435,-0.4124963581562042,0.27458950877189636,0.12166901677846909,0.2817824184894562,-0.1540907919406891,-1.6913808584213257,-2.2614810466766357,-2.044259786605835,-1.071094274520874,-0.19740159809589386,0.5226362943649292,-0.23593966662883759,-0.9315576553344727,-0.3444739282131195,-0.5661735534667969,-0.6592593193054199,-0.951004683971405,-0.271064817905426,-0.03992532938718796,0.17771309614181519,0.0684247612953186,0.1222367212176323,0.15104332566261292,0.34145358204841614,-0.4092438519001007,0.3063476085662842,0.04208321124315262,-0.6333663463592529,-0.08418302237987518,-0.3433223068714142,-0.2355625033378601,-0.4436967968940735,-1.2702751159667969,-2.497917890548706,-1.729188084602356,-1.32463538646698,-0.027804719284176826,-0.008732800371944904,0.7211795449256897,-0.12892219424247742,1.0978480577468872,-0.09989365935325623,0.15175758302211761,-0.17616310715675354,-0.334364116191864,-0.30993518233299255,0.11909130960702896,-0.19976529479026794,-0.05761517956852913,0.0980931892991066,-0.023345306515693665,0.2277112901210785,-0.027130085974931717,0.1680791676044464,-0.18782095611095428,-0.49770161509513855,-0.5459936857223511,-0.2514788508415222,0.046765632927417755,-0.7926884293556213,-1.420532464981079,-2.719977378845215,-0.4592684805393219,0.44225698709487915,0.32574063539505005,-0.47683802247047424,-0.3746129870414734,1.0088835954666138,0.25289836525917053,0.4080897867679596,0.06199410930275917,0.34121039509773254,-0.05802066624164581,0.18603220582008362,-0.05572480335831642,0.06325258314609528,-0.05633843317627907,-0.16354092955589294,0.1861201524734497,-0.1256205439567566,0.17497853934764862,-0.09354221820831299,-1.0754852294921875,-0.3629562258720398,-0.5050826072692871,-0.8079644441604614,-0.5655356645584106,-1.996026873588562,-2.2613413333892822,-0.8979352116584778,-0.28236010670661926,-0.029327910393476486,0.402493953704834,0.043756164610385895,0.04518311470746994,0.04670397937297821,-0.09822580963373184,0.2784883975982666,1.0202189683914185,0.3130449652671814,-0.043210532516241074,0.5143643617630005,0.32759344577789307,0.08879755437374115,0.09791649878025055,0.03212931007146835,0.022315358743071556,-0.07341612875461578,0.14847396314144135,-0.5566532015800476,-0.9653791785240173,-0.7698948979377747,-0.8016405701637268,-0.7444341778755188,-1.2884365320205688,-1.9499552249908447,-0.09302578866481781,-0.32075268030166626,-0.3311978280544281,-0.01834317483007908,0.47220441699028015,-0.11792560666799545,0.05890502408146858,0.5322197675704956,0.3913109004497528,0.4111114740371704,0.2870131731033325,0.13102053105831146,0.2804497182369232,0.15360257029533386,0.29684528708457947,0.16636121273040771,-0.11447976529598236,-0.1471189260482788,0.006203684024512768,-0.06593307852745056,-0.06985751539468765,-0.7967188954353333,-1.229724645614624,-0.9879972338676453,-0.31362032890319824,-0.9800645709037781,-1.2306394577026367,-0.5153742432594299,0.18637029826641083,-0.5062234401702881,0.585583508014679,0.10831479728221893,-0.3463102877140045,-0.383331835269928,-0.3534749150276184,0.07598064839839935,-0.4025948941707611,-1.2160601615905762,-0.8800656199455261,-0.1213870719075203,-0.2476913332939148,0.2322774976491928,-0.03625950962305069,-0.13678930699825287,-0.15090909600257874,-0.1555653065443039,0.003214154625311494,0.2090602070093155,-0.09654785692691803,-0.45863160490989685,-0.8426601886749268,-1.1065953969955444,-0.8002495765686035,-0.42636287212371826,-0.8559067249298096,-0.5476415753364563,0.30624425411224365,-0.16639108955860138,0.8120211958885193,0.3366125822067261,-0.0986001193523407,-0.7569366693496704,-0.19659465551376343,-0.8979085087776184,-0.9080066084861755,-0.9220067262649536,-0.668290913105011,-0.544340968132019,0.011134742759168148,0.21095207333564758,0.17079956829547882,0.17040979862213135,0.18288317322731018,-0.0004172027693130076,-0.12692594528198242,0.1569390892982483,0.03683654963970184,-0.19661638140678406,-0.19597941637039185,-0.7980371117591858,-0.7333270311355591,-0.3441178798675537,-0.7428471446037292,0.5837337970733643,0.8220053911209106,0.7523720264434814,0.503030002117157,0.6290957927703857,0.31025761365890503,-0.3831786513328552,-0.19702358543872833,-0.46142494678497314,-0.5702221393585205,-0.38497573137283325,-0.6742387413978577,-0.14835461974143982,0.29862523078918457,0.04775271192193031,-0.03858776390552521,0.08953657001256943,0.051533784717321396,0.010135484859347343,-0.0997682437300682,-0.12270299345254898,-0.2945631444454193,0.2566549479961395,0.06267748773097992,-0.12032943964004517,0.0877964049577713,-0.2703203558921814,-0.21773478388786316,0.8815576434135437,0.8587141036987305,-0.1856028288602829,0.157304584980011,-0.31070780754089355,0.6997538208961487,-0.016703790053725243,-0.15725643932819366,0.4592783451080322,0.5783538818359375,-0.0840005874633789,0.022041654214262962,0.1901720017194748,0.3855797350406647,0.11388370394706726,-0.027425207197666168,-0.043836161494255066,0.09754708409309387,-0.005432363133877516,0.0617651604115963,0.128202423453331,-0.10339577496051788,0.06271447241306305,0.662733793258667,0.7384193539619446,0.16065849363803864,0.44860604405403137,0.22105304896831512,0.12585791945457458,-0.27571311593055725,-0.3214482069015503,0.4054788053035736,0.38539090752601624,1.0585416555404663,-0.12336532771587372,-0.4530159831047058,0.22443491220474243,0.4643446207046509,-0.21852810680866241,0.27786844968795776,0.14662626385688782,-0.06841851025819778,-0.007977010682225227,-0.05764227733016014,-0.16396784782409668,0.151277557015419,0.13102221488952637,0.1318833976984024,-0.14342176914215088,-0.14114834368228912,0.17265483736991882,0.7546676397323608,0.7355844378471375,0.29425281286239624,-0.27839821577072144,-0.3020622730255127,0.20134733617305756,-0.07259485125541687,-0.19267457723617554,0.26040199398994446,-0.15281140804290771,0.5170717835426331,0.17376592755317688,-0.15475715696811676,0.2717911899089813,0.41269031167030334,-0.4549397826194763,-0.016812985762953758,-0.32391729950904846,-0.349770724773407,0.02191641367971897,-0.033541787415742874,-0.060888729989528656,0.20030561089515686,0.0025696451775729656,-0.18241342902183533,0.12450525164604187,-0.02154676802456379,-0.11275135725736618,0.6963919401168823,0.3078749179840088,-0.4976089596748352,-1.0465670824050903,-0.2452041655778885,0.374501496553421,-0.10238765180110931,-0.904159426689148,0.0593978688120842,-0.2391514778137207,-0.10321544855833054,-0.19141727685928345,-0.19342514872550964,-0.3476790487766266,-0.2901543974876404,-0.44361916184425354,0.32772132754325867,0.03653676062822342,-0.2901540696620941,0.22984015941619873,0.10761067271232605,0.070180743932724,0.020585305988788605,-0.08164966851472855,-0.18120147287845612,0.10624028742313385,0.16415651142597198,-0.09281527251005173,-0.05157974362373352,-0.527437150478363,-0.4594849646091461,0.3921814560890198,-0.1525408923625946,0.05919632315635681,0.5377171039581299,0.03332165256142616,-0.396237850189209,0.5685935616493225,0.8453426957130432,-0.14015735685825348,0.8609088063240051,0.27314913272857666,-0.1842712163925171,-0.19940190017223358,-0.3382250666618347,0.1432715505361557,-0.3588879406452179,-0.05303273722529411,-0.1153343990445137,0.03623495623469353,-0.08996403217315674,0.018523728474974632,-0.11468175053596497,0.002026546513661742,-0.024548353627324104,-0.27990928292274475,-0.044465236365795135,-0.11573807150125504,-0.11186395585536957,-0.21392492949962616,0.09279081225395203,-0.21636733412742615,-0.4975581169128418,-0.5608412623405457,0.030419034883379936,0.28026363253593445,-0.29019108414649963,-0.10073315352201462,0.7124857902526855,0.6092449426651001,0.5961096286773682,-0.05016870051622391,-0.30581074953079224,0.21856769919395447,-0.03352079540491104,-0.05229200795292854,0.020480846986174583,-0.16421698033809662,0.08887691795825958,-0.09407185018062592,-0.014745506457984447,0.03701730817556381,0.08162817358970642,0.041892070323228836,-0.01702095940709114,0.11202546954154968,-0.12555237114429474,0.06320105493068695,-0.15491779148578644,0.02108956128358841,-0.14133034646511078,-0.004396428819745779,0.3062669336795807,0.46868187189102173,0.04333817586302757,0.02571452222764492,-0.039368439465761185,-0.15591125190258026,0.1296742707490921,0.2655729055404663,0.005609486717730761,0.22276687622070312,-0.08831822872161865,-0.19641190767288208,0.06503085792064667,0.12020651996135712,-0.1817118525505066],[-0.10170722007751465,-0.11823434382677078,-0.23107601702213287,0.12659968435764313,-0.04848356544971466,-0.17283479869365692,0.14903312921524048,0.030722204595804214,0.1768042892217636,-0.34587275981903076,0.1413750946521759,0.030284713953733444,0.0009572222479619086,0.01874944195151329,0.006391710601747036,-0.24867330491542816,-0.19194142520427704,-0.013434774242341518,-0.07604919373989105,0.03348798304796219,-0.07993267476558685,0.12350071966648102,0.2496117800474167,-0.08405909687280655,0.02573445625603199,-0.07338834553956985,-0.09775836020708084,0.04369407892227173,-0.13134434819221497,-0.20699049532413483,0.13998989760875702,0.10020037740468979,0.14765219390392303,-0.09140507876873016,-0.16772474348545074,-0.18223360180854797,-0.16673925518989563,-0.19244101643562317,-0.12681813538074493,-0.2750723659992218,-0.3191755712032318,-0.11397235840559006,-0.24595776200294495,0.14782220125198364,0.06594955921173096,-0.16098855435848236,0.023434968665242195,0.0215024221688509,0.13789793848991394,-0.03237803652882576,0.059736911207437515,-0.14713139832019806,0.123556949198246,-0.16570159792900085,0.02095947600901127,0.0797233060002327,0.1689281165599823,0.13995613157749176,-0.0053471834398806095,-0.1677691787481308,-0.06046213209629059,-0.06852469593286514,0.19473247230052948,0.1135481670498848,0.12010237574577332,0.035704679787158966,-0.3761385679244995,-0.40154239535331726,-0.428553968667984,-0.019810782745480537,-0.49212446808815,-0.1935374140739441,-0.13293661177158356,0.2685806155204773,0.10958896577358246,-0.07728226482868195,-0.16145087778568268,0.028449194505810738,0.12741521000862122,-0.0003473107935860753,0.17067241668701172,-0.029963292181491852,-0.05038633197546005,0.0996551439166069,0.18786941468715668,-0.03293097764253616,0.05890285223722458,-0.08196336776018143,-0.18459227681159973,-0.14360186457633972,-0.002984799211844802,-0.029923072084784508,-0.33574172854423523,-0.14112785458564758,-0.4099711775779724,-0.31715795397758484,-1.0043660402297974,-1.048491358757019,-1.4107811450958252,-1.3745880126953125,-0.811508297920227,-0.5671994686126709,-0.4976242184638977,-0.8232800960540771,-0.8950175046920776,-0.5029212832450867,0.030719609931111336,0.13356240093708038,-0.26814135909080505,0.13872933387756348,-0.02450239285826683,-0.02246149443089962,0.1427239030599594,-0.14517256617546082,0.21397718787193298,0.003523516468703747,0.18916873633861542,-0.2575279176235199,0.19903859496116638,0.015198251232504845,-0.13176412880420685,-0.3490828275680542,-0.11474785953760147,-0.048656247556209564,-0.3232913613319397,-0.022665873169898987,0.122338205575943,-0.321908563375473,-0.17045339941978455,-0.014645989052951336,0.03051101602613926,0.008570901118218899,0.08877139538526535,-0.5661830306053162,0.21671797335147858,-0.14896497130393982,-0.2551981508731842,0.02379465661942959,0.11941837519407272,0.15740172564983368,-0.05642269179224968,0.1485859751701355,0.03381941467523575,0.12616099417209625,-0.137879878282547,0.21410466730594635,-0.13083717226982117,-0.41109707951545715,-0.7122350931167603,-0.5108152627944946,-0.7595732808113098,-0.041377630084753036,0.5848138928413391,0.6091522574424744,0.2246856987476349,-0.15102851390838623,-0.14874446392059326,0.05269387736916542,0.2113010585308075,-0.46958187222480774,0.08761503547430038,-0.3906332850456238,-0.017446933314204216,-0.35267019271850586,-0.6465200185775757,-0.12294008582830429,0.1640166938304901,-0.010801643133163452,0.18531440198421478,0.1699025183916092,0.16025595366954803,0.04752769321203232,-0.05030589550733566,0.0050636837258934975,-0.3904770016670227,-0.869282066822052,-0.8416084051132202,0.021297477185726166,-0.12125350534915924,-0.09749313443899155,0.373814195394516,0.3104529082775116,-0.02270633913576603,-0.7775604128837585,0.919285237789154,0.527295708656311,0.03863585740327835,-0.2590923309326172,0.2714156210422516,0.33625757694244385,-0.10879900306463242,-0.3865545094013214,-0.6781683564186096,-0.1720428317785263,0.04473203420639038,0.005234995391219854,0.020789438858628273,0.07015834003686905,0.07796116173267365,0.15102268755435944,0.5638102889060974,0.41087788343429565,-0.014697275124490261,-0.3886232078075409,0.7149540781974792,0.014564653858542442,-0.6975067257881165,-0.6055557131767273,0.023149870336055756,0.09283224493265152,-0.3363790214061737,0.2705856263637543,0.06496115773916245,-0.30087175965309143,-0.012705393135547638,-0.12499501556158066,0.299437552690506,0.08874056488275528,-0.09540972858667374,-0.23377862572669983,-0.3644693195819855,-0.024725915864109993,-0.1476881355047226,-0.15382453799247742,-0.1618475317955017,0.17875385284423828,0.09653423726558685,0.046716708689928055,0.4435940980911255,0.40530455112457275,0.488987535238266,0.7949178814888,0.08720064163208008,0.8052065968513489,0.16517871618270874,0.5279492139816284,-0.44257572293281555,0.08815426379442215,0.8746100068092346,-0.4143628180027008,-0.6910814046859741,-0.2563304007053375,0.6269282102584839,0.4645411968231201,-0.8217867016792297,-0.28797417879104614,0.2375973016023636,-1.3165253400802612,-1.3425811529159546,-0.6016982793807983,-0.05982254818081856,0.19306974112987518,-0.0817645788192749,0.13940399885177612,0.21013277769088745,-0.13342276215553284,0.568342387676239,0.8287887573242188,1.3273190259933472,1.4932126998901367,1.7226840257644653,0.35998648405075073,-0.01679336465895176,1.2223308086395264,-0.504443347454071,0.5317795872688293,-1.1782793998718262,0.18142686784267426,1.082125186920166,1.8826183080673218,-0.04951246827840805,0.15422524511814117,-0.14865852892398834,0.028100764378905296,0.3324480950832367,-0.9436711072921753,-1.540911316871643,-1.122387409210205,-0.12110233306884766,-0.22120505571365356,0.27771520614624023,0.23513077199459076,-0.08961506932973862,0.01471979171037674,0.11879441142082214,0.7786784768104553,1.404176115989685,0.5153524875640869,1.3591840267181396,0.167799711227417,-0.31464695930480957,0.7772802710533142,-0.5780244469642639,-1.3567794561386108,-1.4354053735733032,0.8620516061782837,1.109961986541748,0.47495296597480774,1.293376088142395,1.9699081182479858,0.18296274542808533,0.6074873805046082,0.7365388870239258,-0.7306042313575745,-1.359541416168213,-0.6633785963058472,-0.06596610695123672,-0.17983117699623108,0.04261096939444542,0.02716979570686817,0.3421410620212555,0.1615322083234787,0.2614555358886719,-0.027246827259659767,0.6394235491752625,-0.23404823243618011,0.0005099882837384939,1.178564190864563,0.4877285063266754,-0.26463475823402405,-0.8654698133468628,-1.0483059883117676,0.603523313999176,1.2214250564575195,0.6154469847679138,0.5725634098052979,0.8913949728012085,0.643195629119873,1.7853211164474487,1.1596400737762451,0.9939074516296387,0.055829815566539764,-0.46583205461502075,-0.19422809779644012,-0.08416327089071274,-0.08428668230772018,0.04601890221238136,0.16746987402439117,0.30208179354667664,0.4053889214992523,0.19368860125541687,-0.4183804988861084,-0.3103717267513275,-0.32776522636413574,-1.0142765045166016,-0.46541014313697815,-1.4163341522216797,-1.087957501411438,-0.7555612325668335,0.5651707053184509,1.0629478693008423,0.09862609207630157,0.39489486813545227,1.6781116724014282,0.33607056736946106,1.2289822101593018,0.6988101005554199,1.2047699689865112,1.216002345085144,1.1730594635009766,0.6041250228881836,0.23134249448776245,0.1918468028306961,0.02771211788058281,0.061948832124471664,0.1997690051794052,-0.13817641139030457,-0.10739084333181381,0.07137071341276169,-0.5020996332168579,-0.452841192483902,-0.3373301029205322,0.1946420520544052,-0.9726647734642029,-1.2890472412109375,-0.15105842053890228,0.000606121844612062,0.857082188129425,0.3611411452293396,0.4170389175415039,0.6199976801872253,1.1967458724975586,0.5292899012565613,0.8110029697418213,1.0286706686019897,0.5546189546585083,0.6763381958007812,0.055951911956071854,-0.15071061253547668,0.4344305098056793,-0.16753147542476654,-0.1704687774181366,0.05520719662308693,0.04548836126923561,-0.03835822269320488,-0.0668637827038765,-0.08563369512557983,-0.7077233195304871,-0.6602458953857422,-1.1946972608566284,-0.6875683665275574,-1.405462384223938,-0.7304762005805969,0.6587947010993958,0.7610761523246765,1.0239146947860718,0.9818530082702637,1.43735671043396,1.0785200595855713,0.8633126616477966,0.7774516940116882,0.7701837420463562,-0.4704101085662842,0.2942643463611603,-0.7064236998558044,-0.7415942549705505,-0.23441220819950104,0.5673232674598694,-0.06378617137670517,-0.07628507167100906,0.2070344090461731,0.11137087643146515,0.2024654895067215,0.03123454563319683,0.09217019379138947,-0.22846780717372894,-0.4074072241783142,-1.6202572584152222,-0.18204624950885773,-0.35691583156585693,0.10704030841588974,0.5322605967521667,0.07748079299926758,0.782040536403656,0.2826271951198578,0.5130753517150879,0.8957488536834717,0.4268553555011749,-0.01667744480073452,-0.010311116464436054,-1.476942777633667,-0.6336060762405396,-1.042574405670166,-1.258395791053772,-0.47659024596214294,0.07657945156097412,0.21694880723953247,0.15474730730056763,0.15711890161037445,-0.2764164209365845,0.045190900564193726,0.12994764745235443,-0.03424566984176636,0.30661872029304504,-0.03468725457787514,-0.7459567189216614,0.8023757934570312,0.021490706130862236,0.5631343722343445,0.1822272390127182,1.3126559257507324,1.320712685585022,1.0459117889404297,0.27053821086883545,0.5327579975128174,-0.0770469382405281,0.13959336280822754,-0.7108659744262695,-1.700844645500183,-0.6322269439697266,-0.4914710223674774,-0.4731484651565552,0.12464597821235657,0.6211186051368713,0.1742420494556427,0.13665366172790527,-0.05015187710523605,-0.03481854498386383,-0.05534977465867996,0.07557258754968643,-0.22963188588619232,-0.06328927725553513,-0.11183469742536545,-0.12667731940746307,0.7932961583137512,-0.7317395210266113,-0.20741918683052063,0.5301785469055176,0.8059731125831604,0.9143674373626709,0.7041489481925964,-0.1763174682855606,0.5693723559379578,-0.024409376084804535,-0.9118931889533997,-0.625718355178833,-0.7078065276145935,-0.30297696590423584,-0.1139402762055397,-0.38296645879745483,0.2788984775543213,0.5398613214492798,-0.0261205043643713,0.060817085206508636,0.09873205423355103,-0.10410478711128235,-0.21397517621517181,0.09425003081560135,-0.344508558511734,-0.0849653109908104,-0.6041494607925415,0.22883449494838715,0.20493610203266144,0.27358245849609375,-0.12618142366409302,1.5440374612808228,1.1908361911773682,1.069998025894165,0.1312440186738968,-0.19740301370620728,-0.702040433883667,-0.9168289303779602,-1.3944337368011475,-0.01562751643359661,-0.3816981911659241,-0.42970195412635803,0.051957570016384125,-0.39255544543266296,-0.16978757083415985,0.2964257299900055,-0.05903668701648712,0.23746219277381897,0.03597182035446167,-0.08347752690315247,-0.19157622754573822,0.021580345928668976,-0.38402608036994934,-0.5636523962020874,-0.934146523475647,0.024323226884007454,-0.27542221546173096,0.6144065260887146,-0.27903708815574646,-0.5339184403419495,-0.038147974759340286,-0.8221926689147949,-1.3203980922698975,-0.5996583104133606,-0.6502194404602051,-0.033781327307224274,-0.036685019731521606,-0.4525224268436432,-0.02559260092675686,-0.21616439521312714,-0.051862046122550964,-0.589992880821228,-0.21106605231761932,-0.04287661612033844,-0.07807999104261398,0.06560567766427994,-0.1054907962679863,-0.1733611822128296,-0.10395503044128418,0.33523112535476685,0.2583724558353424,-1.0790613889694214,-0.40666666626930237,-0.3055626153945923,-0.5242881178855896,-0.9656202793121338,-0.6693005561828613,-1.327506422996521,-0.5597996115684509,-0.20455171167850494,-0.9795550107955933,-0.6706816554069519,-0.3011137545108795,-0.36781224608421326,-0.3936555087566376,-0.12622779607772827,0.0752299353480339,-0.49109798669815063,-0.5245872735977173,-0.2401716113090515,0.0710780918598175,0.2211507260799408,0.12459409981966019,0.11197826266288757,-0.05680042877793312,-0.23732741177082062,-0.26573413610458374,0.033474188297986984,0.15146449208259583,-0.3495902717113495,-0.2895073890686035,-0.05709747225046158,-0.3205818831920624,-0.14843901991844177,-0.0992431715130806,-0.7456892132759094,-0.035457488149404526,-0.25195541977882385,-0.069617860019207,-0.3794080913066864,0.07002883404493332,-0.7512779235839844,-1.200426697731018,-0.3714204728603363,-0.493810772895813,-0.5122946500778198,0.027720801532268524,0.19679510593414307,0.20592638850212097,0.296810507774353,0.09216772019863129,-0.1252395063638687,0.04424788057804108,0.036350149661302567,0.0220097154378891,0.49573585391044617,0.4473321735858917,0.18601469695568085,0.46777498722076416,0.27495577931404114,0.3372710943222046,-0.6617719531059265,0.6207963824272156,-0.3372913897037506,-0.36316144466400146,0.08139058202505112,0.14623084664344788,0.04412667825818062,-0.578691303730011,-0.1787424385547638,-0.7532027959823608,-0.007529877591878176,-0.08519108593463898,0.45334282517433167,0.3700777590274811,0.17666548490524292,0.27626675367355347,0.12486042082309723,0.01086543407291174,-0.10626845806837082,-0.049267686903476715,-0.25601518154144287,-0.18370604515075684,0.09633973985910416,-0.3261248767375946,-0.11549846082925797,0.2266208529472351,1.0740270614624023,0.7150404453277588,-0.44659069180488586,-1.0776517391204834,0.14891764521598816,0.9398398399353027,-0.17220695316791534,0.09118635207414627,-0.1734057515859604,-0.05469600483775139,0.23535479605197906,0.5502113103866577,-0.2819799780845642,-0.02287185750901699,0.3346070945262909,0.3727736175060272,0.1792128086090088,0.06381499022245407,-0.1546614170074463,0.0009958597365766764,-0.13637115061283112,0.14843793213367462,-0.08548545092344284,0.10799503326416016,-0.015542854554951191,0.06502462178468704,-0.34758299589157104,-0.4261466860771179,-0.4346092641353607,-0.14130017161369324,-0.48863646388053894,-0.37880203127861023,-0.47656047344207764,-0.984747588634491,-0.34166136384010315,-0.09926731139421463,-0.4121186435222626,-0.7361703515052795,-0.689363420009613,-0.6482815146446228,-0.41559433937072754,-0.07827349007129669,0.032350052148103714,0.016208484768867493,0.44025370478630066,0.12258842587471008,-0.042819391936063766,0.1324448436498642,-0.15213443338871002,0.14691124856472015,0.025851646438241005,0.0037241538520902395,-0.12415877729654312,0.11144234985113144,0.1790780872106552,0.056361161172389984,0.2535933256149292,-0.4994438886642456,-0.2107173353433609,-0.36084672808647156,-0.5026379823684692,-0.6320750713348389,0.1264553815126419,0.2044440507888794,-0.13378514349460602,-0.7641071677207947,-0.8022730946540833,-0.865407407283783,-0.4778473973274231,-0.5660488605499268,-0.07836546748876572,-0.1293434500694275,0.09474712610244751,0.10888657718896866,-0.09072159975767136,0.1391180008649826,0.18716895580291748,-0.04212479293346405,-0.06943706423044205,-0.052057553082704544,-0.035034604370594025,0.1547379493713379,-0.12850716710090637,-0.07835653424263,-0.07362400740385056,0.2566234767436981,-0.0767211765050888,0.3929659128189087,0.2435372918844223,-0.13259844481945038,0.0941242203116417,-0.11612790822982788,-0.09688391536474228,-0.3855317234992981,0.05720696598291397,0.09306158125400543,-0.03926599398255348,0.004971934948116541,-0.012684824876487255,-0.01577858254313469,-0.1763426661491394,-0.004498631693422794,0.056309886276721954,-0.13016252219676971,0.16144433617591858,0.15949039161205292,-0.16799898445606232,0.13638503849506378,-0.16589108109474182,0.10244996845722198,-0.000591083662584424,0.14894753694534302,0.11421641707420349,-0.017207959666848183,0.06739892810583115,-0.06590165942907333,-0.0406787134706974,-0.07093404978513718,-0.1282198131084442,-0.29413536190986633,0.12065329402685165,-0.0036353643517941236,0.14727883040905,-0.1215539425611496,0.06528189778327942,0.058387354016304016,0.0657428577542305,0.01371839176863432,-0.04811825603246689,0.19851060211658478,0.07358253747224808,-0.023479269817471504,0.16980871558189392],[0.13225437700748444,-0.17035219073295593,-0.07008711993694305,-0.16851793229579926,-0.16937775909900665,-0.05826719477772713,0.11179758608341217,0.1534966677427292,0.03482332080602646,-0.014256658963859081,0.0361923947930336,-0.05430933088064194,-0.1871972233057022,-0.4026348888874054,-0.19150573015213013,-0.04702362045645714,-0.16229897737503052,-0.2575831711292267,-0.011296315118670464,0.10294226557016373,-0.23533356189727783,-0.11288102716207504,-0.2117788940668106,-0.3662642240524292,0.034554410725831985,-0.06272628158330917,-0.212759867310524,-0.15539681911468506,0.0507255494594574,0.09758803248405457,-0.01903769001364708,0.10440880805253983,0.03450661152601242,0.027157751843333244,0.07325679808855057,-0.13787226378917694,-0.08297988772392273,-0.40462908148765564,-0.19586041569709778,-0.2646869421005249,-0.33640408515930176,0.06925730407238007,-0.08941063284873962,0.3099690079689026,-0.13454435765743256,-0.3725129961967468,-0.39852991700172424,-0.21762079000473022,-0.3922538161277771,-0.4330270290374756,-0.34654778242111206,-0.13830292224884033,0.09093368053436279,-0.19974356889724731,0.011057700030505657,0.04240402951836586,0.10473185777664185,0.06148691102862358,-0.14418001472949982,0.08641456812620163,0.15673938393592834,0.08939632773399353,-0.10232435166835785,-0.18260514736175537,-0.19401729106903076,-0.4264281392097473,-0.5371989607810974,-0.6164125204086304,-0.33775854110717773,-0.1724555790424347,-0.15708482265472412,0.262063205242157,-0.21884490549564362,-0.33352333307266235,-0.4680587351322174,-0.23977325856685638,-0.3180018961429596,-0.3025054931640625,-0.44164401292800903,-0.11575242131948471,-0.09104879945516586,-0.043570782989263535,0.18219976127147675,-0.17615407705307007,-0.14198780059814453,0.07083839178085327,0.17236225306987762,-0.0035051312297582626,0.08949079364538193,-0.13862384855747223,0.04982595518231392,-0.2502865493297577,-0.15640610456466675,-0.17763565480709076,-0.6147816181182861,-0.6771411895751953,-0.44806137681007385,-0.5732988119125366,-0.33514872193336487,-0.1675059050321579,-0.5131809711456299,-0.8146055340766907,-0.5770516991615295,-0.5774941444396973,-0.7269394993782043,-0.28827646374702454,0.18645475804805756,0.016941335052251816,-0.06886053085327148,-0.019006673246622086,-0.10660921037197113,0.11495492607355118,-0.006619556806981564,-0.04780348390340805,-0.19166050851345062,0.13044947385787964,-0.18984052538871765,-0.049320388585329056,-0.27186119556427,-0.015399666503071785,-0.3280458450317383,-0.657550573348999,-1.0016196966171265,-1.0204380750656128,-0.8817978501319885,-0.7001913189888,-0.5131047368049622,-0.39933985471725464,-0.22466591000556946,-0.4076877236366272,-0.23723091185092926,-0.14836034178733826,-0.008378191851079464,0.0728539228439331,0.7246353030204773,0.6683016419410706,0.6598541140556335,0.21810105443000793,0.08844750374555588,0.05062524229288101,0.09157562255859375,-0.05747723579406738,0.16552431881427765,0.01945689506828785,-0.412372887134552,-0.41249600052833557,-0.7104508280754089,-0.6978887319564819,-0.9729035496711731,-1.0633609294891357,-1.4465322494506836,-1.194871187210083,-1.2748994827270508,-1.0884268283843994,-1.6613943576812744,-2.384180784225464,-2.0684189796447754,-2.1216015815734863,-1.225816249847412,-0.6361437439918518,-0.5432175993919373,-0.27818983793258667,0.4705328345298767,-0.07434389740228653,0.08068998903036118,0.12692531943321228,0.12705734372138977,-0.1485169678926468,-0.06235410273075104,-0.0889085903763771,-0.04283660277724266,-0.1438675969839096,-0.15027785301208496,0.1356220692396164,-0.6641823053359985,-0.5981529355049133,-0.2352716028690338,-0.24869035184383392,-0.5070846080780029,0.14433522522449493,-0.00831681489944458,-0.22290419042110443,-0.019174454733729362,-0.255180686712265,-0.13606461882591248,-0.8730767965316772,-0.5981380343437195,-0.4094013571739197,-0.5427311658859253,-1.0514744520187378,-0.9393272399902344,-1.3014781475067139,-0.4787512421607971,-0.46223029494285583,0.03515573590993881,-0.0083685964345932,-0.15191756188869476,0.18119797110557556,0.03833155706524849,0.4756122827529907,0.14913956820964813,0.006030876189470291,-0.4210857152938843,0.7167722582817078,0.5681776404380798,-0.37089937925338745,-0.2671854496002197,0.13795888423919678,0.6691101789474487,0.08914176374673843,1.1983661651611328,0.7200305461883545,0.46752414107322693,0.9255984425544739,0.2614109218120575,0.1326206624507904,0.5621290802955627,-0.6347370147705078,-0.9425014853477478,0.07160121202468872,-1.0884705781936646,-0.822618305683136,-0.16307267546653748,0.003996424842625856,-0.024231569841504097,-0.040957335382699966,-0.05449419096112251,0.08671687543392181,-0.1593756079673767,-0.3256474435329437,0.34169039130210876,0.6016619205474854,0.37363940477371216,0.7350717186927795,-0.1757301539182663,0.7390861511230469,0.6408732533454895,0.30736538767814636,0.22394520044326782,0.003510938724502921,-0.12404939532279968,0.5286187529563904,0.21040047705173492,-0.6695562601089478,-0.21482060849666595,-0.01186016108840704,-0.6002047061920166,0.0604979433119297,-0.866472601890564,-0.34695369005203247,-0.0791751891374588,0.027385804802179337,-0.09647221863269806,0.04352188855409622,-0.2681182324886322,-0.032163944095373154,0.24948865175247192,-0.1383308619260788,0.6091428995132446,0.5171902775764465,-0.41048187017440796,0.2499319612979889,0.19735421240329742,0.0012961114989593625,0.9852449893951416,0.8810521960258484,0.4185532033443451,0.6858378052711487,0.2621324360370636,0.3394075632095337,-0.19834329187870026,0.6331937909126282,0.6198345422744751,-0.10263397544622421,-0.21845965087413788,0.1983194500207901,0.6130044460296631,0.38252875208854675,0.038691647350788116,-0.08774138987064362,-0.27151817083358765,0.1614534854888916,0.12891969084739685,-0.2986249625682831,0.6521890759468079,0.5035292506217957,0.14006400108337402,-0.6675053834915161,-0.914436936378479,0.6210689544677734,-0.04163730889558792,0.6320552229881287,0.10427305847406387,1.0331506729125977,1.0922126770019531,0.5483232140541077,0.8672560453414917,0.2397283911705017,0.5384964942932129,0.08159127831459045,0.7716301679611206,-0.573145866394043,0.0818629115819931,-0.11857324093580246,0.34125369787216187,0.2152371108531952,0.35915428400039673,0.10570481419563293,0.05088040232658386,0.09258881211280823,0.008693656884133816,0.28619006276130676,0.5631283521652222,-0.028776424005627632,-0.35608869791030884,0.3423571288585663,0.8606155514717102,0.26755285263061523,0.04512513056397438,-0.03675369545817375,0.6917563676834106,1.7128058671951294,0.5366513729095459,0.9460827708244324,0.5298418402671814,0.3630160391330719,0.3907216489315033,0.32210880517959595,-0.20624499022960663,0.41518712043762207,0.3846663236618042,0.2610039710998535,0.17824098467826843,0.5179506540298462,0.7733845114707947,-0.07314620167016983,-0.12369632720947266,-0.12576863169670105,0.1458747684955597,0.11400596052408218,0.33271247148513794,0.22891826927661896,0.8136269450187683,0.6330923438072205,0.5025038719177246,0.22716179490089417,-0.45326146483421326,-0.9621676802635193,-0.8354594707489014,-0.6576671004295349,0.7701590657234192,-0.10789904743432999,0.2847742438316345,0.806386411190033,0.6964475512504578,0.4456031024456024,-0.33867692947387695,-0.5399433374404907,-0.307863712310791,-0.1615622639656067,-0.7540582418441772,0.1413542926311493,0.24980589747428894,0.0853983536362648,0.04309694841504097,0.0970957949757576,0.19360566139221191,0.10438276082277298,0.6217945218086243,-0.12783348560333252,0.23804911971092224,-0.5468765497207642,-0.3643285036087036,-0.9103327989578247,-0.3186146318912506,-0.8899089097976685,-0.2141067236661911,0.9674836993217468,0.08461758494377136,-0.30555135011672974,-0.5722352266311646,-0.46669071912765503,0.044833406805992126,0.8929274678230286,0.5120795369148254,0.06498916447162628,-0.32781702280044556,-0.704651951789856,-0.2542961537837982,0.48046883940696716,0.42761483788490295,0.1482294350862503,0.02378678321838379,-0.0882657840847969,0.10769464820623398,0.44384345412254333,0.3441397249698639,-0.5266507863998413,-0.46089354157447815,-0.5675152540206909,-0.38463371992111206,-0.23482130467891693,0.1982090175151825,-0.29396718740463257,-0.840480387210846,-0.39878663420677185,-0.40183207392692566,-0.4974571466445923,-0.806347668170929,-0.5379834175109863,0.131200909614563,-0.32100361585617065,0.10844863951206207,0.24038885533809662,0.40116608142852783,-0.40360522270202637,0.1815538853406906,-0.039394404739141464,-0.22616934776306152,0.15271401405334473,-0.12320256978273392,0.13152042031288147,-0.1254170536994934,-0.3272981643676758,0.2914648950099945,0.33014217019081116,0.6850847601890564,0.5296671390533447,0.7271035313606262,-0.32836198806762695,-0.19929176568984985,0.1649894267320633,-0.4658433198928833,-0.9048081636428833,-0.3979073762893677,0.5747016072273254,0.35517483949661255,0.9199097752571106,0.5709720253944397,0.4124442934989929,0.5111603736877441,-0.19574066996574402,-0.6179450154304504,-0.3954114317893982,0.25662320852279663,-0.442449688911438,-0.32322052121162415,0.21197310090065002,0.10398217290639877,-0.20556709170341492,0.12044798582792282,0.04699915647506714,0.1788361668586731,0.15213946998119354,0.19115960597991943,0.5031302571296692,-0.08317853510379791,-0.171734020113945,0.7659489512443542,0.16205793619155884,0.052732594311237335,-0.714900016784668,-1.2690372467041016,-1.2918988466262817,-0.3013709783554077,-0.19360512495040894,-0.4041884243488312,-0.33878469467163086,-0.8518355488777161,-0.8900450468063354,-1.1707663536071777,-0.7224184274673462,-0.8243053555488586,-0.5560364127159119,-0.2990133762359619,0.10268651694059372,0.009008185006678104,-0.02875538170337677,-0.046025581657886505,0.3992553949356079,-0.14386345446109772,0.36203861236572266,0.5040597915649414,0.6409056782722473,-0.12574154138565063,0.14977437257766724,0.18238209187984467,-0.4645143449306488,-0.30558672547340393,0.3991320729255676,-0.16382119059562683,0.4069864749908447,0.12023179978132248,-0.6427000761032104,-0.36834248900413513,-0.07321986556053162,-0.4659022092819214,-0.16563749313354492,-0.8669895529747009,-1.1047207117080688,-0.7956356406211853,-0.5263835191726685,-0.24287107586860657,-0.31258490681648254,0.08687940984964371,0.18203163146972656,-0.26816892623901367,-0.2856247127056122,-0.8497130870819092,0.3002549111843109,0.7167378664016724,0.38404592871665955,0.46562859416007996,-0.0788341611623764,-0.023855671286582947,0.08794871717691422,-0.1166599690914154,-0.09200027585029602,0.0956467017531395,0.23523320257663727,-0.40670090913772583,0.3444015383720398,-0.16993671655654907,0.5061503052711487,-0.449693500995636,-0.21136124432086945,-1.051540493965149,-0.967221736907959,-0.8709892630577087,-0.37532666325569153,-0.105343759059906,-0.1541828215122223,0.03876212239265442,-0.07021700590848923,-0.03852950036525726,-0.5316489934921265,-0.7336198687553406,-0.1414719671010971,-0.295221745967865,0.02493658848106861,0.16589480638504028,-0.32986193895339966,-0.1621323972940445,-0.5236222147941589,0.14447814226150513,-0.030870581045746803,-0.5090988874435425,0.0073376926593482494,-0.21620012819766998,-0.45583102107048035,-0.427185595035553,0.026809172704815865,-0.4362344443798065,-0.860274612903595,-0.541400134563446,-0.7885856628417969,-0.5443640947341919,-0.13003037869930267,0.0636264979839325,0.10255750268697739,-0.02708013541996479,0.15100893378257751,-0.20708590745925903,-0.2380175143480301,-1.0649893283843994,-1.0889726877212524,-0.9289610385894775,-0.8559633493423462,0.11594618111848831,-0.5017983913421631,-0.33436325192451477,-0.21584627032279968,0.5969506502151489,0.7867292761802673,0.7179483771324158,-0.14816157519817352,-0.4207010865211487,-0.7290260195732117,-0.3667561411857605,-0.03171326965093613,-0.19978438317775726,-0.820444643497467,-0.41880181431770325,0.16375266015529633,-0.14258278906345367,-0.011876371689140797,-0.0655120238661766,0.060534585267305374,0.08237913250923157,0.013895312324166298,0.01788572408258915,-0.11454948037862778,-0.46096107363700867,-0.8526670932769775,-0.9092376828193665,-1.0204250812530518,-0.5393477082252502,-0.39066851139068604,-0.46684643626213074,-0.3654597997665405,-0.44919461011886597,-0.6616131067276001,-0.9568601250648499,-0.6081857681274414,-0.9369212985038757,-0.5247104167938232,-0.612943708896637,-0.37974539399147034,-0.07353740185499191,-0.7544854879379272,0.25567054748535156,0.5459001660346985,0.24157112836837769,0.11797033250331879,0.11169210821390152,-0.18240608274936676,0.09861980378627777,0.18594694137573242,0.09157940745353699,-0.1951543390750885,-0.3099716603755951,-0.10916539281606674,-0.14110444486141205,-0.48230162262916565,-0.21294718980789185,0.225549578666687,0.06943491101264954,-1.1436381340026855,-0.4571475088596344,-0.2931908369064331,-0.4752594530582428,-0.010236465372145176,0.23889987170696259,0.5232807993888855,-0.7094359993934631,-0.4879791736602783,-0.07156841456890106,-0.09850779920816422,0.5139670372009277,0.04430199787020683,0.2964419424533844,0.2612664997577667,-0.04993009939789772,0.0641777515411377,0.039650868624448776,0.08367704600095749,0.03848066180944443,0.0810098648071289,0.15510910749435425,0.3020821511745453,0.354750394821167,0.08329323679208755,-0.1427232176065445,0.3437367379665375,-0.12559369206428528,-1.0364489555358887,-0.5322204828262329,-0.521170437335968,-0.46375811100006104,-1.2230937480926514,-0.4931824803352356,0.12796398997306824,-0.758074164390564,-0.6235525012016296,-0.7915461659431458,-0.3546381890773773,0.30803924798965454,0.17935910820960999,0.24494044482707977,-0.19952908158302307,-0.010608386248350143,0.011233484372496605,0.023429544642567635,0.19256708025932312,0.17119045555591583,-0.044245392084121704,0.5385855436325073,0.6907233595848083,0.551393985748291,0.6264545321464539,0.09640354663133621,-0.8914947509765625,-0.3849915862083435,-0.15565869212150574,-0.32225945591926575,-0.49987295269966125,-0.7588499188423157,-0.9950789213180542,-0.3406502604484558,-0.006910092197358608,-0.07982827723026276,-0.5287131667137146,-0.0297712292522192,0.029205352067947388,0.5605047345161438,0.4978044927120209,0.3232302665710449,-0.03321526572108269,-0.08491937071084976,-0.018726002424955368,0.0016770112561061978,0.18856579065322876,-0.10932297259569168,-0.14204281568527222,0.43774282932281494,0.5842017531394958,0.4460136294364929,1.0345096588134766,0.8105767369270325,0.37731000781059265,0.6435480117797852,0.49055638909339905,1.317047357559204,0.35248303413391113,0.6936002969741821,0.5459821224212646,0.5805942416191101,0.39113709330558777,0.30902549624443054,0.8093180060386658,0.5511000156402588,0.6227147579193115,0.43000298738479614,0.2921822667121887,0.3585006594657898,-0.00595275079831481,-0.0734248235821724,-0.13751578330993652,0.1830824315547943,-0.071632519364357,0.11280730366706848,0.041169680655002594,0.1510213166475296,0.11778127402067184,0.4714476764202118,0.6832234263420105,0.6639528274536133,1.2574163675308228,0.6188042759895325,0.06821993738412857,0.6383727788925171,1.1287987232208252,0.8823618292808533,0.7921211123466492,0.6408922672271729,1.040618896484375,1.0263972282409668,0.5180845260620117,0.4568983018398285,0.09205330163240433,0.2658357322216034,-0.021955033764243126,-0.00695809256285429,-0.17172403633594513,-0.08974826335906982,-0.026215355843305588,-0.0016920056659728289,0.15060701966285706,0.02245698682963848,0.11292435973882675,0.19296801090240479,-0.12368864566087723,0.02072661742568016,0.05053703114390373,0.3014052212238312,0.2975577712059021,0.18669472634792328,-0.14433826506137848,0.07133149355649948,0.30152636766433716,0.1826288253068924,0.2359958291053772,0.09577799588441849,-0.12215087562799454,0.09513325244188309,-0.200181245803833,-0.15451586246490479,0.22691363096237183,0.028922831639647484,-0.04959972947835922,-0.11886913329362869,-0.09452955424785614,0.05686546862125397,0.08909076452255249],[-0.13207371532917023,0.1513708382844925,-0.21067199110984802,-0.10527660697698593,-0.20540164411067963,-0.18022538721561432,-0.1503400355577469,-0.1316422075033188,0.1470527946949005,0.02660220116376877,-0.04980890080332756,-0.09399813413619995,0.08169453591108322,-0.014188217930495739,0.17607268691062927,0.18683436512947083,0.1679670363664627,0.05738263949751854,-0.08790837228298187,-0.0012187592219561338,-0.07561955600976944,0.1723547875881195,0.3527805507183075,-0.055475447326898575,0.1598682701587677,-0.045282382518053055,0.0648626759648323,-0.18890263140201569,-0.052043717354536057,0.04765278846025467,0.034862060099840164,-0.17001894116401672,-0.23538003861904144,-0.0029443777166306973,0.1450691521167755,-0.06255125254392624,-0.036321017891168594,-0.11348181217908859,0.0018655246822163463,0.33949270844459534,0.17553411424160004,0.04796838015317917,0.3061467707157135,0.06736717373132706,0.24283011257648468,0.030499596148729324,-0.008450405672192574,-0.11976147443056107,0.08917377889156342,0.08149208873510361,-0.2681093215942383,-0.01714792288839817,0.049132272601127625,-0.09850101172924042,0.07764746248722076,-0.01693492941558361,-0.10554210096597672,-0.1878116875886917,0.13020196557044983,0.04768756404519081,-0.19519592821598053,-0.15480686724185944,-0.1370299756526947,-0.14789536595344543,0.07422267645597458,0.3315393328666687,0.3162015974521637,0.6583590507507324,0.857944130897522,0.6785668730735779,0.6960267424583435,0.7644152045249939,0.1544213891029358,0.2948080003261566,0.5476825833320618,0.4348144233226776,0.41409575939178467,0.3045809268951416,0.3417656719684601,0.238515704870224,-0.03083082288503647,-0.1772044599056244,0.1628001481294632,-0.09115844964981079,-0.0666925236582756,-0.06723816692829132,0.09459605813026428,0.0982620120048523,0.10087239742279053,-0.08984220027923584,-0.25657474994659424,-0.15900740027427673,-0.3053920269012451,0.397819459438324,0.16360913217067719,0.5066319704055786,-0.013617160730063915,0.1733621209859848,-0.7737644910812378,-0.4692726135253906,-0.5847558975219727,0.3527880311012268,0.030916310846805573,0.14387759566307068,0.20838050544261932,0.045314013957977295,0.1362832486629486,0.31465911865234375,0.19692806899547577,0.13478222489356995,0.20729532837867737,-0.05551275610923767,0.05575516074895859,0.00766956340521574,0.0526372529566288,0.01530445832759142,0.07668557018041611,-0.06475947052240372,-0.1687636375427246,-0.5170671939849854,-0.46693629026412964,-0.478433758020401,-1.10122549533844,-0.38294094800949097,-0.7362579703330994,-0.5377763509750366,0.0633593425154686,0.007806433830410242,-0.8465508222579956,0.29452505707740784,-0.46514424681663513,-0.28679826855659485,-0.19308820366859436,-0.07327190786600113,0.2456134408712387,0.853728175163269,0.021123826503753662,0.10798469930887222,0.031743258237838745,0.06232140213251114,0.16009025275707245,0.10694193094968796,0.02033121883869171,-0.08715144544839859,-0.10670560598373413,-0.05306302011013031,0.1236126497387886,0.015567826107144356,-0.4479222595691681,-0.1789165586233139,-0.6445980668067932,-0.4486544728279114,0.15218552947044373,0.0914323478937149,-0.35949206352233887,0.028563126921653748,-0.47244054079055786,-0.3073081374168396,-0.39726346731185913,0.13145330548286438,-0.023972852155566216,0.4332389533519745,0.049448300153017044,0.5542401671409607,0.5193457007408142,0.24479889869689941,0.17132362723350525,-0.047947950661182404,0.008094198070466518,-0.2077629417181015,-0.13516691327095032,-0.0587141178548336,-0.2194056510925293,-0.12422725558280945,0.12284263968467712,0.4400617778301239,0.5029622316360474,0.08305945247411728,-0.7947849631309509,-0.2833584249019623,-0.3133513629436493,-0.37343499064445496,-0.6916804909706116,0.5412266850471497,-0.08309859037399292,0.4804164171218872,-0.20669864118099213,0.3733353316783905,0.04811651259660721,-0.3135301470756531,-0.33490464091300964,0.6127554774284363,0.5786175727844238,0.3814939856529236,-0.036913275718688965,0.18480832874774933,-0.19955608248710632,0.004991268739104271,0.05731732025742531,-0.14431659877300262,-0.5341411232948303,-0.29121485352516174,-0.4134645164012909,-0.30527013540267944,-0.25950443744659424,-0.20837822556495667,-0.6640641093254089,0.19484838843345642,0.09593605995178223,0.27387943863868713,-0.5539401769638062,-0.07490698993206024,-0.7813283801078796,-0.2273634672164917,0.0031899448949843645,-0.30727261304855347,0.2740476429462433,0.9990881085395813,0.2704169452190399,0.3311825692653656,0.6242345571517944,0.2839312255382538,0.11439085006713867,-0.13849209249019623,0.07981941103935242,-0.2188740074634552,-0.35140931606292725,-0.15611226856708527,-0.4995754361152649,-0.13964088261127472,0.1624983251094818,-0.9831193685531616,-0.09544091671705246,-0.5642304420471191,-0.2801516652107239,-0.8575056195259094,-0.614946186542511,-0.4226113259792328,-1.2313801050186157,-0.09576573222875595,0.587348997592926,0.11457319557666779,-0.08112626522779465,0.09200336039066315,0.28755122423171997,-0.12941007316112518,-0.441549152135849,-0.28294044733047485,0.2913718819618225,0.10410479456186295,-0.16338378190994263,0.05990405008196831,-0.15147000551223755,-0.019571969285607338,-0.32834702730178833,-0.4895375072956085,-0.3728786110877991,-0.4013561010360718,-0.41568800806999207,-1.1806052923202515,-0.9324802160263062,-0.7907748222351074,-0.41805052757263184,-0.853329598903656,-0.5351464152336121,-0.6729507446289062,-0.6647650003433228,-0.27732354402542114,-0.7324649095535278,-0.4918549358844757,0.18074341118335724,-0.32126665115356445,-0.12448263168334961,0.05319759249687195,-0.32466578483581543,-0.11721628904342651,0.25881215929985046,0.23175464570522308,0.1685648411512375,-0.10942002385854721,-0.26073306798934937,-0.34710586071014404,-0.30306723713874817,-0.2811158299446106,-0.17253132164478302,0.0402727872133255,-0.8850323557853699,-0.9676306247711182,-1.3139022588729858,-0.6849120855331421,-0.2081729769706726,0.2710152268409729,0.4128970801830292,1.0378305912017822,-0.09519463777542114,0.24005573987960815,-1.0482168197631836,-0.6736394762992859,0.2951775789260864,0.10048900544643402,-0.32782337069511414,0.6595823764801025,0.43252888321876526,0.5423422455787659,-0.04428697004914284,-0.3951028287410736,0.018455741927027702,-0.03701990842819214,-0.014049941673874855,-0.25819462537765503,-0.02800343558192253,-0.4309675693511963,0.09344813972711563,0.883800208568573,0.5615488290786743,0.6542304158210754,0.8300685286521912,1.400346279144287,1.64163339138031,1.625617504119873,2.0458779335021973,1.4253562688827515,0.9904944896697998,0.08613491803407669,0.18240517377853394,0.3539143204689026,-0.16071879863739014,0.3435171842575073,0.28268229961395264,0.66519695520401,0.10408264398574829,0.738300621509552,-0.23218683898448944,-0.5067936182022095,-0.004954493138939142,-0.1829773336648941,-0.09816226363182068,-0.0875212773680687,0.10061031579971313,-0.002927586203441024,1.0655900239944458,1.6334360837936401,2.629263162612915,2.9220168590545654,3.3409311771392822,2.740201473236084,1.4544427394866943,0.8649342060089111,0.5281472206115723,0.9587920308113098,0.8169080018997192,-0.28735587000846863,0.10808581113815308,0.24087126553058624,-0.07707536965608597,0.06635250896215439,0.05079476535320282,0.9137442708015442,1.1890195608139038,0.4648635685443878,0.25180888175964355,-0.7117108702659607,-0.028141776099801064,0.0442366749048233,-0.2355731874704361,-0.11986397206783295,-0.20278781652450562,0.349289208650589,0.9802988767623901,1.9869507551193237,2.8632051944732666,2.729382276535034,2.1050493717193604,1.2663029432296753,0.017955753952264786,0.2249814122915268,0.8035370707511902,0.5872638821601868,-0.06372761726379395,-0.08798553049564362,-0.6830915808677673,0.44872191548347473,-0.6792841553688049,0.7923837900161743,0.8151094317436218,0.2809646427631378,1.170850396156311,0.973069965839386,0.3718918263912201,-0.3946423828601837,-0.28841474652290344,-0.18211527168750763,-0.23567070066928864,-0.13951438665390015,-0.2945599853992462,-0.3569462299346924,0.4219047427177429,1.6386445760726929,1.814581036567688,0.9503366947174072,1.0707429647445679,-0.25341883301734924,0.2669289708137512,0.9698527455329895,-0.37825796008110046,-0.3600802719593048,0.6442365050315857,0.1897318959236145,-0.11772958934307098,0.7624076008796692,-0.7242676615715027,-0.19833503663539886,0.30555716156959534,0.03827272728085518,0.07989613711833954,0.06130058318376541,-0.17830897867679596,-0.4295966625213623,-0.2008538693189621,-0.18785741925239563,-0.22727137804031372,-0.347299188375473,-0.07988818734884262,-0.2794807553291321,-0.17513474822044373,0.19877320528030396,0.2919062376022339,0.5962729454040527,-0.3202844262123108,-0.3989469110965729,-0.08713061362504959,-0.3485211431980133,0.3193471431732178,-0.455125629901886,0.33561772108078003,-0.696591317653656,0.38136014342308044,0.10673300921916962,-0.3394734561443329,-0.5126325488090515,-0.1647891402244568,-0.004116070456802845,0.08381084352731705,0.09392692148685455,-0.3653702139854431,-0.621461033821106,-0.48485681414604187,-0.08932854235172272,-0.1069938912987709,-0.027376148849725723,-0.3117733299732208,-0.5874807834625244,-0.40685003995895386,-0.0563465915620327,-0.6250216960906982,-0.5245558619499207,0.4893144369125366,0.022036081179976463,0.2871704697608948,0.17406217753887177,-0.35522347688674927,-0.4098830223083496,-0.20556116104125977,-0.10467135906219482,0.28862264752388,-0.268826961517334,-0.538288414478302,0.10269203782081604,-0.12349680066108704,-0.44064754247665405,-0.27947700023651123,-0.4352550506591797,-0.7779703736305237,-0.9397810101509094,-0.6003541946411133,-0.26662689447402954,0.08082469552755356,-0.1379500925540924,-0.09284280985593796,-0.1434970498085022,-0.7125434279441833,-0.016648976132273674,-0.4705403745174408,-0.09257938712835312,0.027202850207686424,0.12898153066635132,0.8747169971466064,1.0267322063446045,-0.07733134180307388,0.059552837163209915,-0.002775276079773903,-0.5007018446922302,-0.2470804899930954,-0.4880704879760742,-0.48778679966926575,-0.8306764364242554,0.28008395433425903,0.012296910397708416,-0.24682305753231049,-0.7164048552513123,-0.6911221146583557,-0.7189272046089172,-0.3339814841747284,0.06009259447455406,-0.09575449675321579,-0.1080099493265152,-0.33166104555130005,-0.28803908824920654,-1.0205134153366089,-1.262479543685913,-0.8639761805534363,-0.5783026218414307,0.04558033123612404,0.0730847641825676,-0.2631477415561676,0.8281095623970032,-0.2321147918701172,-0.5620097517967224,-0.6875792741775513,-0.2536787688732147,-0.37007442116737366,0.06244877725839615,-0.03346632793545723,-0.06325255334377289,-0.2620235085487366,-0.03143005445599556,0.11494152247905731,-1.1525566577911377,-1.1760516166687012,-0.5545722246170044,-0.13125155866146088,-0.050033967941999435,-0.14060811698436737,-0.03257985785603523,0.021168585866689682,-0.4774426817893982,-0.9234867095947266,-0.9030576944351196,-1.0224037170410156,-0.5190386772155762,0.010576538741588593,-0.37048786878585815,-0.03181876242160797,0.13118869066238403,0.33319345116615295,-0.22337119281291962,0.16404955089092255,-0.1869734823703766,-0.4986981153488159,0.026978779584169388,-0.21159152686595917,0.4519355595111847,-0.4643020033836365,-0.3190702497959137,-0.27508026361465454,-1.107795000076294,-0.7653788328170776,-0.4782331883907318,-0.157837375998497,-0.2909168004989624,-0.10409991443157196,0.039539556950330734,-0.22337710857391357,-0.44552528858184814,-1.256348967552185,0.22748412191867828,-0.29559198021888733,-0.18319420516490936,-1.3039451837539673,-0.9628637433052063,-0.40474045276641846,-0.6648326516151428,-0.05075681954622269,0.626944363117218,0.05343221500515938,0.29068848490715027,0.08333199471235275,-0.13944463431835175,-0.16741260886192322,-0.00022994779283180833,0.006655259523540735,0.07874152064323425,-0.4639011025428772,-0.9043968319892883,-0.37590929865837097,-0.12694713473320007,0.019011784344911575,0.05597678944468498,0.03144955262541771,-0.013371123000979424,0.016298403963446617,-0.6249841451644897,-0.9955828785896301,-0.573493480682373,0.2620724141597748,0.6818315386772156,-0.8474212288856506,0.39978376030921936,0.11073683947324753,0.1820715069770813,-0.46575531363487244,0.34308740496635437,0.5865488052368164,-0.36457812786102295,-0.06567832827568054,0.4681341052055359,0.3499615490436554,-0.6603453755378723,0.7520479559898376,0.5041919946670532,-0.7720862030982971,-0.3079774081707001,-0.07730195671319962,-0.35101673007011414,-0.050815898925065994,0.010534149594604969,-0.17799977958202362,-0.014862928539514542,-0.02897450141608715,-0.2933659255504608,-0.7454212307929993,-0.43243542313575745,-0.3726455867290497,-0.49138355255126953,-0.1721777319908142,0.11262264847755432,0.07601116597652435,-0.08069577813148499,0.010688266716897488,0.02016609162092209,0.26478323340415955,-0.27445629239082336,-0.28983113169670105,0.20414388179779053,-0.2130088210105896,-0.18798179924488068,-0.26829269528388977,-0.15649598836898804,-0.02087980881333351,-0.06783712655305862,-0.1127060204744339,0.02160423994064331,-0.1613917350769043,-0.25829800963401794,-0.030310295522212982,0.027930714190006256,-0.20133382081985474,-0.09324957430362701,-0.42625805735588074,-0.8551895618438721,-0.8288227915763855,-0.6314952969551086,0.4845437705516815,0.10923512279987335,0.6654131412506104,0.4419654905796051,1.3822672367095947,0.18516716361045837,0.40642228722572327,0.35456985235214233,0.2638176679611206,0.8724856376647949,-0.05716435983777046,0.3692976236343384,0.6418148279190063,0.35739946365356445,0.33561980724334717,0.3814862072467804,-0.1616687923669815,0.07171661406755447,0.08708067983388901,0.11184396594762802,0.07066024839878082,-0.14199599623680115,-0.17742905020713806,-0.2459740787744522,-0.1944408118724823,-0.2343561351299286,-0.25945597887039185,-0.9954743981361389,-0.3145408034324646,0.23210231959819794,-0.2433367371559143,-0.5586904287338257,-0.04496504366397858,0.10979746282100677,-0.01272230688482523,0.20361894369125366,0.1649922877550125,0.47105950117111206,0.46734198927879333,0.4372732639312744,0.16491569578647614,0.26144546270370483,0.09084191173315048,0.025684764608740807,-0.16786758601665497,-0.14975322782993317,0.1818159967660904,-0.08613670617341995,-0.1750001609325409,0.019211241975426674,0.08221364766359329,-0.06600365042686462,-0.3423919677734375,-0.026697512716054916,-0.09251675009727478,-0.4894603490829468,-0.32081276178359985,-0.672479510307312,-0.3196899890899658,-0.02207101136445999,-0.1298505961894989,0.45692670345306396,0.02431502938270569,0.014484238810837269,-0.006920573767274618,-0.5030595064163208,0.17462091147899628,0.24826328456401825,0.4518719017505646,0.2766493260860443,0.042044106870889664,-0.1533820927143097,-0.06566862761974335,0.010995556600391865,-0.12920930981636047,0.027055472135543823,0.15514196455478668,0.10233233869075775,0.019161643460392952,0.016978643834590912,0.14598119258880615,0.08339369297027588,0.2426910698413849,-0.19409285485744476,0.38244545459747314,0.12202738225460052,-0.036497507244348526,-0.262786328792572,-0.4314832091331482,0.1346106231212616,0.11029388755559921,0.00014398529310710728,-0.2449311912059784,-0.03881509602069855,0.019359782338142395,0.3006070852279663,0.32407400012016296,0.4096023440361023,0.002673389157280326,-0.1469925194978714,-0.14355003833770752,-0.16071194410324097,-0.1704646646976471,-0.015749050304293633,0.1228831484913826,-0.06000621244311333,-0.05379495397210121,0.12238661199808121,-0.10846524685621262,0.18753132224082947,-0.17260946333408356,-0.035552721470594406,-0.011674665845930576,0.18033084273338318,-0.06848866492509842,0.23468980193138123,0.08157603442668915,0.041716646403074265,0.005510143004357815,0.05526098981499672,-0.09367314726114273,0.19847118854522705,0.2003331035375595,-0.19769689440727234,0.18044118583202362,-0.03626198694109917,0.013154491782188416,0.05464599281549454,-0.09490333497524261,0.039209943264722824,0.09367112070322037,-0.08020427823066711],[-0.04837092012166977,-0.015941916033625603,-0.007798841223120689,0.052900299429893494,-0.16427241265773773,0.03110322169959545,-0.18603666126728058,-0.08601043373346329,-0.07676432281732559,0.18056149780750275,-0.1890595406293869,-0.09082432091236115,-0.16154970228672028,-0.18929457664489746,-0.00785095151513815,-0.033981502056121826,0.06537018716335297,-0.25840651988983154,-0.3493693470954895,0.035228993743658066,-0.22237998247146606,-0.0014880377566441894,0.0863543301820755,-0.057682108134031296,-0.1863846778869629,0.03882884979248047,-0.1638244241476059,-0.18385520577430725,-0.09781554341316223,0.02041643112897873,0.17707808315753937,0.1217195987701416,-0.0738290399312973,0.1644929051399231,0.037870895117521286,0.09343406558036804,0.0014553706860169768,0.043782055377960205,-0.02264782413840294,0.049859728664159775,0.27322766184806824,0.09173963963985443,-0.15694499015808105,0.13527260720729828,-0.009254139848053455,-0.0861474946141243,0.04322756081819534,0.023364070802927017,-0.30035200715065,-0.004350530449301004,-0.17306292057037354,0.04821224510669708,0.013043660670518875,0.026799090206623077,0.019811682403087616,0.17071017622947693,-0.14321988821029663,0.026546679437160492,-0.18224087357521057,0.026119515299797058,0.21457336843013763,0.04187799617648125,0.005028694402426481,0.4124630093574524,0.3365435302257538,0.3354279696941376,0.6448462009429932,0.6586476564407349,0.8800017833709717,0.4786037504673004,0.2116321474313736,0.1767406463623047,0.2783454656600952,0.23155704140663147,0.23722292482852936,0.12431130558252335,0.2545941472053528,0.45172595977783203,-0.003937893081456423,0.18244300782680511,0.023831509053707123,0.18161465227603912,-0.09832333028316498,-0.003766406560316682,0.005003441125154495,0.07308289408683777,-0.16869008541107178,-0.15875844657421112,0.08413568884134293,0.16032016277313232,0.18257804214954376,0.4778393507003784,0.478048712015152,0.5939781069755554,0.5989431142807007,0.8856193423271179,0.8113465309143066,1.435388207435608,1.348644495010376,1.7373627424240112,0.5166260004043579,0.4048267900943756,0.30240073800086975,0.3081139624118805,0.4482015371322632,-0.08806277811527252,-0.2917638123035431,0.2048746645450592,0.11488715559244156,0.13309748470783234,-0.004913028329610825,0.14749489724636078,0.08077606558799744,-0.06950899213552475,-0.18528638780117035,0.03650835156440735,-0.0011045486899092793,-0.020543264225125313,0.3581685423851013,0.45647647976875305,0.5955076217651367,0.3066842555999756,1.0424330234527588,0.6781453490257263,0.6520087718963623,1.143173336982727,1.2736254930496216,1.457126498222351,0.6341060996055603,1.2751461267471313,1.1492116451263428,0.8257948160171509,0.5540052056312561,0.009044584818184376,0.2730627655982971,-0.3898423910140991,-0.2992514371871948,-0.10242126882076263,0.038245998322963715,-0.13793739676475525,-0.2434350550174713,-0.10472362488508224,0.09266889095306396,0.11056267470121384,-0.10265885293483734,-0.1491004228591919,0.02654576115310192,-0.23292087018489838,-0.7999762296676636,-0.4204302430152893,-0.15752527117729187,-1.0735926628112793,-0.02249053120613098,0.38742387294769287,0.3468090891838074,-0.1496305614709854,-0.1720106601715088,0.6662099361419678,0.7264037132263184,0.4585902690887451,0.23035159707069397,0.22730335593223572,-0.20772376656532288,-0.6706991791725159,-0.10040966421365738,0.0046938336454331875,0.06323511898517609,0.06497495621442795,0.18379679322242737,-0.02552058733999729,0.06991543620824814,-0.0601675808429718,0.108735091984272,0.36875587701797485,0.5162349343299866,0.2134571671485901,-0.5958531498908997,0.0544116385281086,0.43581604957580566,-0.5504456162452698,-0.4906904399394989,0.05444224923849106,-0.6821815371513367,-0.5716953277587891,-0.7318748235702515,-0.9347307682037354,-0.37185460329055786,-0.15441806614398956,0.5595331788063049,-0.0586482435464859,-0.032554253935813904,0.8889995217323303,0.5176257491111755,0.23680104315280914,0.24075105786323547,-0.08155994862318039,0.12624742090702057,0.18026603758335114,-0.22020259499549866,-0.08291242271661758,0.2699853479862213,0.6242892742156982,0.6787848472595215,0.4935494661331177,0.03250601142644882,-0.4236256182193756,-0.6084719300270081,-0.7095233798027039,-1.01981782913208,0.16547919809818268,0.49066680669784546,-0.8963454961776733,-0.9585117101669312,-0.03626913204789162,-0.1042141243815422,0.08323103934526443,0.03674498572945595,-0.39055272936820984,-0.5397245287895203,0.4062090218067169,1.0427168607711792,0.4548434913158417,0.23676201701164246,0.008846461772918701,-0.010613853111863136,0.0961562991142273,0.15130013227462769,0.1361653059720993,0.1612924486398697,-0.09803169965744019,0.6341916918754578,-0.36310508847236633,-0.11278440058231354,0.022170446813106537,0.5030786991119385,-0.2717618942260742,0.29070714116096497,-0.05639977008104324,-0.05985519662499428,-0.4496830105781555,0.4467775523662567,0.09347269684076309,0.14734254777431488,0.24794751405715942,0.18220093846321106,-0.6024979948997498,0.029655341058969498,0.3544914424419403,0.07327900826931,0.5769985318183899,0.5197460055351257,0.021853435784578323,-0.060600023716688156,-0.07804890722036362,-0.002084281062707305,0.08862785995006561,-0.13446158170700073,-0.09979549050331116,0.21082408726215363,0.520275354385376,-0.13487663865089417,0.00927984993904829,0.31310731172561646,-0.1228519007563591,0.24187251925468445,-0.4175626337528229,-0.5462765097618103,0.07799239456653595,0.10423914343118668,-0.2311447411775589,-0.4051748514175415,0.3723594546318054,-0.16061757504940033,0.24298809468746185,0.515449583530426,-0.01255858689546585,-0.41505101323127747,0.3107350468635559,0.31644177436828613,0.1479162573814392,0.12253503501415253,-0.017989207059144974,-0.160298153758049,-0.024752270430326462,-0.12095393240451813,0.1351047158241272,0.15225714445114136,0.39109334349632263,0.5102542638778687,-0.16802023351192474,0.23146028816699982,0.31547778844833374,0.31962865591049194,0.09927939623594284,0.46014702320098877,-0.545263409614563,0.12901227176189423,-0.43926742672920227,0.004155151080340147,-0.7594418525695801,-0.28081876039505005,-0.050408318638801575,0.6434651017189026,0.5413672924041748,0.33345112204551697,0.7993206977844238,-0.019696520641446114,0.10035647451877594,-0.012133586220443249,0.2633383274078369,-0.2387208193540573,0.17244817316532135,0.292247474193573,0.1837172508239746,0.016546564176678658,-0.4550454318523407,-0.1277928203344345,-0.7635270953178406,0.09132421761751175,-0.6081384420394897,-1.563310146331787,1.5461145639419556,0.4297052025794983,-0.9077225923538208,-1.6432613134384155,-1.0389058589935303,-0.5565569996833801,0.0822584480047226,0.3594641387462616,-0.24730314314365387,0.5233358144760132,1.088575839996338,1.0711796283721924,0.7686483860015869,-0.20291876792907715,0.04528497904539108,0.18450820446014404,0.22111444175243378,-0.011078805662691593,0.23704871535301208,0.21719351410865784,0.822786808013916,-0.3351215720176697,-0.5376988649368286,-0.3428766131401062,0.35958030819892883,-0.35965418815612793,-0.8607990145683289,-0.09552592784166336,0.7366595268249512,0.7970203757286072,-1.1518137454986572,-0.679504930973053,-0.2810181677341461,-0.6868010759353638,-0.8741492629051208,0.04037619009613991,-0.0410459041595459,0.07378123700618744,1.7996307611465454,1.448164463043213,0.5017532110214233,0.042361266911029816,-0.12382100522518158,-0.15460452437400818,-0.14339260756969452,0.1564369946718216,0.23339948058128357,-0.39580896496772766,-0.042320504784584045,-0.7228145599365234,-0.6667737364768982,-0.24618661403656006,-0.29880639910697937,-0.5998328328132629,0.5955216884613037,-0.06471714377403259,0.22501784563064575,-0.5458241105079651,-0.7628902196884155,-0.5596910715103149,-0.4145810604095459,-0.5080832839012146,-0.11567778885364532,0.11871881037950516,-0.8571121692657471,-0.126116082072258,1.2004094123840332,1.3197040557861328,0.084370918571949,0.0551791675388813,0.026544971391558647,-0.005616270005702972,0.17298682034015656,0.04837137833237648,-0.3478010594844818,-0.49601978063583374,0.14139607548713684,-0.04800427332520485,-0.4033777117729187,-0.45529869198799133,-0.24472323060035706,-0.33870354294776917,-0.5730429887771606,0.07663053274154663,0.5651246905326843,-0.16009578108787537,-0.4161617159843445,-1.1819369792938232,-0.9550461173057556,-1.0570995807647705,-0.30738088488578796,-1.1351358890533447,-0.25692328810691833,0.2859334647655487,1.0504310131072998,0.7829371690750122,-0.10895539820194244,-0.01943327486515045,0.10787077248096466,0.16303807497024536,0.03236619755625725,0.08434532582759857,-0.08141392469406128,-0.7246803045272827,-0.34829065203666687,-0.20236524939537048,-0.6099200248718262,-0.3561011850833893,-0.19670717418193817,-0.40810108184814453,-0.3471604883670807,0.3686882555484772,1.0019173622131348,0.5937981605529785,0.10207250714302063,-1.5626318454742432,-0.657101571559906,-0.2571023106575012,-0.6929775476455688,-0.30756330490112305,0.42873385548591614,-0.03698756545782089,0.17173977196216583,0.4772014617919922,0.05093275010585785,0.12061523646116257,-0.12473271042108536,-0.10385501384735107,0.15751758217811584,-0.0934753343462944,-0.12949225306510925,-0.5460644960403442,0.14141370356082916,-0.027135107666254044,-0.7201720476150513,-1.287610411643982,0.5213091373443604,0.14319564402103424,0.2679354250431061,-0.0748433768749237,0.2702430784702301,-0.18031257390975952,-1.1354130506515503,-0.41760316491127014,-1.141780138015747,-0.5096685290336609,-0.8052894473075867,0.06715784221887589,0.06562912464141846,0.058974940329790115,0.11536794155836105,0.12208595871925354,0.2629048228263855,0.06380558013916016,0.042030662298202515,-0.18428094685077667,0.0564313642680645,-0.009068839251995087,-0.08053991198539734,-0.10705862194299698,0.07053912431001663,0.8502466082572937,0.1220434308052063,-0.40031421184539795,0.16261257231235504,-0.1724841296672821,-0.11178845912218094,0.19591820240020752,-0.27254024147987366,-0.5164110064506531,-0.7057970762252808,-1.276129961013794,-0.473492294549942,-0.24369210004806519,0.1741313338279724,0.29756948351860046,-0.23372097313404083,0.28467312455177307,-0.1507994383573532,-0.030325716361403465,0.2277221828699112,-0.06024859845638275,0.10594949871301651,-0.18213167786598206,-0.024388574063777924,-0.06876089423894882,-0.18859116733074188,0.2266526073217392,0.0007420245092362165,0.19547826051712036,0.073731429874897,-0.08224830031394958,0.14068321883678436,0.2717816233634949,0.17750059068202972,-0.23634444177150726,-0.03436295688152313,-0.328093022108078,0.028546234592795372,0.6048263907432556,1.1051325798034668,0.058769457042217255,0.05267859622836113,-0.027470624074339867,-0.13732384145259857,0.45330601930618286,0.903417706489563,0.5531734824180603,0.0827319547533989,0.13914437592029572,-0.0900668278336525,0.05913048982620239,-0.19166865944862366,0.03687581792473793,-0.28420454263687134,0.08807273209095001,0.021725287660956383,0.506280243396759,0.13918210566043854,0.6761249899864197,0.3254943788051605,0.9847702980041504,1.597421646118164,1.3221681118011475,1.3883289098739624,0.39966627955436707,0.42468205094337463,1.326001763343811,0.6422473788261414,0.5201202630996704,1.2526028156280518,0.7546414136886597,1.2795321941375732,1.7957637310028076,0.9495025873184204,0.4955890476703644,-0.021971238777041435,0.012813296169042587,0.16174541413784027,0.17642441391944885,0.09849851578474045,-0.01576043665409088,0.21028077602386475,0.49672457575798035,0.480097234249115,0.2994423508644104,0.9855244159698486,0.7062847018241882,1.3710746765136719,0.9609508514404297,2.3857829570770264,2.457909107208252,2.0194718837738037,0.724018931388855,1.3349664211273193,0.5278955101966858,0.8518789410591125,0.7233080863952637,1.4172345399856567,0.9714099764823914,0.9738314151763916,0.8475897908210754,0.016855841502547264,-0.28391262888908386,0.09206254035234451,-0.05456879362463951,0.06642653793096542,0.137997567653656,-0.005959592293947935,-0.21143068373203278,0.2766672670841217,0.6575326919555664,0.8347730040550232,1.202697515487671,0.8391185998916626,0.21795004606246948,0.10566043853759766,-0.20790883898735046,0.6944372653961182,0.2851566672325134,1.0747231245040894,1.7650996446609497,1.695037603378296,0.7779480814933777,1.2833205461502075,0.5795294642448425,1.115549921989441,0.8638418912887573,0.7456818222999573,0.5149500966072083,-0.03458019345998764,-0.09367077797651291,0.12597352266311646,0.09310803562402725,0.02344694919884205,-0.2002543956041336,0.05440700799226761,-0.029118657112121582,0.05782024934887886,0.7778331637382507,1.0583001375198364,0.8636873960494995,0.3003173768520355,0.5808800458908081,-0.09057710319757462,-0.1309245228767395,0.16900786757469177,-0.22573600709438324,0.3292570412158966,0.21843937039375305,-0.1487811803817749,0.008399917744100094,1.3733854293823242,0.6766217947006226,0.27472537755966187,1.237366795539856,0.4554237127304077,-0.07802402973175049,-0.3670960068702698,-0.23953887820243835,-0.009724275209009647,0.013616893440485,0.10062339156866074,0.037261851131916046,0.11801452189683914,-0.08500455319881439,0.30309394001960754,0.45259785652160645,0.15624210238456726,-0.44037869572639465,-0.4828733205795288,0.7803577184677124,1.013858675956726,0.8269340991973877,0.15099464356899261,0.6628929376602173,0.557214617729187,0.3995148241519928,0.7571539878845215,1.0170495510101318,0.643574059009552,0.893990159034729,-0.23124119639396667,0.788480281829834,0.023129429668188095,-0.2093183398246765,-0.13214993476867676,-0.10965676605701447,-0.03216486796736717,-0.007519818376749754,-0.013247744180262089,0.024882961064577103,-0.008903556503355503,0.13422444462776184,0.004140098113566637,-0.4075786769390106,-0.7861562967300415,-0.5817973613739014,-0.490286648273468,-0.7778860926628113,0.01260153017938137,0.31429511308670044,0.5967204570770264,1.1791999340057373,0.3828458786010742,2.123950242996216,0.8785538673400879,0.2561943531036377,-0.06626295298337936,0.7463345527648926,0.3128998875617981,-0.10523580759763718,-0.05230085179209709,-0.1946536898612976,-0.2624943256378174,0.017885399982333183,-0.061214856803417206,-0.15837401151657104,-0.1216655746102333,0.062471456825733185,0.1200464740395546,-0.010612858459353447,-0.17067280411720276,-0.43513351678848267,-0.10789645463228226,0.3210834562778473,0.08483566343784332,0.012085216119885445,-0.009774344973266125,0.055043626576662064,0.355396032333374,1.0486111640930176,0.2157725989818573,0.020297465845942497,0.2764660120010376,0.3122428059577942,0.23979365825653076,0.46044862270355225,0.0734916403889656,-0.17268192768096924,-0.5020411014556885,-0.3094489574432373,-0.08758196979761124,0.12303194403648376,-0.02766064740717411,0.11642297357320786,-0.16019581258296967,-0.014226363971829414,0.08852078765630722,0.09593711793422699,-0.08919090777635574,-0.04188410937786102,-0.20325596630573273,0.13152138888835907,0.07746443897485733,-0.3306293487548828,-0.462449312210083,-0.21297135949134827,0.017925521358847618,-0.47958430647850037,-0.6231714487075806,-0.5116122961044312,-0.3536473512649536,0.003992612939327955,-0.2519165277481079,-0.33149453997612,0.009439904242753983,-0.30454879999160767,-0.21995636820793152,-0.2120649218559265,-0.04879286512732506,0.03457905724644661,-0.016699718311429024,-0.14071962237358093,-0.19665969908237457,-0.08050090819597244,-0.14198416471481323,0.17654778063297272,0.05804530531167984,-0.12125065922737122,-0.1861315220594406,0.03603571280837059,-0.05099662020802498,-0.11311999708414078,-0.16677556931972504,-0.2601999044418335,0.13796506822109222,-0.10877766460180283,-0.2805888056755066,0.02834462746977806,-0.21031108498573303,0.1537819355726242,0.12197058647871017,0.03223986551165581,-0.2631954252719879,-0.2480974644422531,-0.15622203052043915,-0.16038547456264496,-0.015656951814889908,-0.18522097170352936,-0.171094611287117,-0.044039271771907806,0.1858370304107666],[-0.17735256254673004,-0.1227710098028183,-0.11082775890827179,-0.14117607474327087,-0.2006962150335312,0.11666961759328842,0.19060711562633514,-0.21414190530776978,-0.1352023035287857,0.20426015555858612,-0.08982814848423004,-0.33754652738571167,-0.0020237958524376154,0.17001013457775116,-0.1752999722957611,0.03457048535346985,0.12878669798374176,-0.014600888825953007,-0.03455928713083267,-0.07685364782810211,0.020961422473192215,-0.14511443674564362,-0.0006519117741845548,0.1195988655090332,-0.11167584359645844,0.17694877088069916,0.16226409375667572,-0.058036454021930695,0.07706376910209656,-0.14294672012329102,-0.11636018007993698,0.01714926026761532,0.09207209944725037,-0.18567612767219543,-0.06818036735057831,-0.23203454911708832,-0.030902108177542686,-0.16348552703857422,-0.14634448289871216,0.13118256628513336,0.23856908082962036,0.030215255916118622,-0.12859319150447845,-0.24147847294807434,0.07713484764099121,-0.02483304962515831,0.19165284931659698,0.12528835237026215,0.1524292379617691,0.1520649641752243,0.18832620978355408,0.09049030393362045,-0.09228803962469101,0.2141980677843094,-0.11199595034122467,0.08867169171571732,-0.05016336962580681,0.09676538407802582,-0.09815768897533417,-0.08030033111572266,-0.06923174858093262,-0.09527544677257538,-0.050568703562021255,0.06809543073177338,0.1681477427482605,0.38744285702705383,-0.05777566879987717,-0.06768278777599335,0.047383226454257965,-0.19650259613990784,-0.020283296704292297,-0.3336573839187622,-0.17444154620170593,-0.052206505089998245,0.4610852301120758,0.716633677482605,0.48089316487312317,0.4494308531284332,0.19484077394008636,0.26620158553123474,0.14799019694328308,-0.0436209999024868,0.20509658753871918,-0.11211519688367844,-0.04093369096517563,-0.16610758006572723,-0.0275686364620924,0.04662661999464035,-0.12346825748682022,0.15041698515415192,0.05724962800741196,-0.07485075294971466,0.15297479927539825,-0.04206577688455582,-0.45263808965682983,-0.6140177249908447,-1.4382445812225342,-1.1486735343933105,-0.3873768150806427,-0.22739791870117188,-0.9230058789253235,0.2348351627588272,0.6060615181922913,0.768194854259491,0.4714575707912445,0.637834906578064,0.8295742869377136,0.5819399356842041,0.10393897444009781,-0.11224956810474396,0.0010250103659927845,0.016069766134023666,0.13849882781505585,-0.17901121079921722,0.09900576621294022,0.014794093556702137,0.08386944979429245,0.11147573590278625,-0.2844464182853699,-0.023733895272016525,-0.6947644948959351,-0.4933994710445404,-0.41892480850219727,-0.30281203985214233,-0.6132564544677734,-0.8987972736358643,-0.6118396520614624,-0.03120354190468788,-0.5959689617156982,0.405010461807251,-0.1211971789598465,0.03764231130480766,0.004826623946428299,0.37487778067588806,0.9206719398498535,1.0090843439102173,0.36243388056755066,-0.005112551152706146,0.10201283544301987,0.14765392243862152,-0.1934620589017868,-0.21359124779701233,0.05145788565278053,0.0706886425614357,-0.1422790139913559,-0.5764797925949097,-0.8120452165603638,-0.60671067237854,0.3081390857696533,-0.2617514729499817,-0.4396118223667145,-0.12380054593086243,0.5950766205787659,0.0811242163181305,-0.6880577206611633,0.12700557708740234,-0.4108683466911316,-0.019391609355807304,0.14016814529895782,0.5456300973892212,0.4997875988483429,0.2437966912984848,1.0300215482711792,1.20548677444458,0.43771085143089294,0.16117490828037262,-0.05805958807468414,0.04497666656970978,0.03849989175796509,-0.21133507788181305,-0.21660703420639038,-0.1027066558599472,-0.4225701689720154,-0.7847211360931396,-0.8120279312133789,-0.7465681433677673,-0.5295307040214539,-0.43523189425468445,0.1651894599199295,-0.2843315601348877,-0.6170763373374939,-0.9706336259841919,-0.6767005920410156,0.1665254384279251,0.14431948959827423,0.3971598446369171,-0.3832199275493622,0.10020580142736435,-0.571280837059021,-0.42360493540763855,0.4800092875957489,1.4269843101501465,0.4677707850933075,0.21635177731513977,-0.12535610795021057,0.03215498477220535,-0.16534416377544403,0.09845297783613205,-0.1493435800075531,-0.3563503921031952,-0.8766797184944153,-1.1165754795074463,-0.35423246026039124,-0.19050446152687073,-0.4834405183792114,-1.1948965787887573,-0.2643674612045288,-1.251800775527954,-0.2942717969417572,-0.23249392211437225,-0.2516389489173889,0.2979412376880646,-0.1584930419921875,-0.49651622772216797,-0.22667407989501953,-0.43454068899154663,-0.46011605858802795,0.12005241215229034,0.7085070610046387,1.4604904651641846,0.5020671486854553,0.32510897517204285,0.17292584478855133,-0.09234202653169632,0.16839900612831116,-0.1626739203929901,-0.07529431581497192,-0.4411100745201111,-1.3722234964370728,-0.49560052156448364,0.3299373388290405,-1.096852421760559,-0.5158242583274841,-0.7813401818275452,-0.7641363143920898,0.6509165167808533,0.13980232179164886,0.9086784720420837,0.5350990295410156,-0.4568521976470947,-0.2967170476913452,-0.6025335192680359,0.4681449234485626,-0.6181252598762512,0.14326201379299164,0.01668469049036503,0.8880078792572021,2.124164581298828,1.055222988128662,0.5960567593574524,-0.08955404907464981,-0.003571252105757594,-0.07485365867614746,-0.053970471024513245,-0.17824070155620575,-0.41685256361961365,-0.8509395718574524,0.5259459614753723,1.265342116355896,0.29487407207489014,0.8952020406723022,1.4408677816390991,1.7249951362609863,3.426391124725342,2.5759730339050293,1.7864484786987305,0.5802813172340393,-1.0934877395629883,-1.3078718185424805,-0.964682936668396,-0.8080213069915771,-0.0988355204463005,-0.290894478559494,-0.19044095277786255,0.9467601180076599,1.9604142904281616,1.1179611682891846,0.23767952620983124,0.03283165767788887,0.18063116073608398,-0.07458970695734024,-0.2044258713722229,0.05804147571325302,-0.015061194077134132,0.18783393502235413,1.6535643339157104,1.9738938808441162,2.355062484741211,4.282119274139404,4.798035144805908,3.4483187198638916,1.797322154045105,0.8230635523796082,1.0379213094711304,0.08965945988893509,0.02643369510769844,-0.4781671166419983,-0.47497183084487915,-1.043903112411499,-0.7256828546524048,-0.2711603343486786,-0.535629153251648,0.7415609955787659,1.251333475112915,0.5263148546218872,-0.17554354667663574,-0.12448584288358688,0.17142699658870697,0.06991034746170044,-0.11340849846601486,0.13085345923900604,0.17239947617053986,0.5180015563964844,2.0218687057495117,2.3712124824523926,2.6445491313934326,3.302123785018921,1.7202712297439575,0.536100447177887,-0.5310986638069153,-0.6754133105278015,0.2112480103969574,-0.21206998825073242,-0.6103637218475342,-0.124244824051857,-0.8257612586021423,0.04052872583270073,-0.6433451175689697,-0.41321825981140137,0.1482234001159668,0.3995825946331024,0.8920814394950867,-0.08778874576091766,-0.4530985951423645,-0.11048121005296707,0.11373849958181381,-0.0004809659149032086,-0.11495038121938705,-0.04481228440999985,-0.05159221962094307,0.8782594203948975,1.2453019618988037,1.7846860885620117,1.4892593622207642,0.4703711271286011,-1.307578206062317,-0.9150430560112,-0.2500428557395935,-0.5014727115631104,-0.4346832036972046,0.29868754744529724,0.17592190206050873,-0.6007319092750549,0.5276116132736206,-0.5846969485282898,-0.0034655362833291292,0.32356885075569153,0.6725347638130188,1.237663984298706,0.7061302065849304,-0.14166168868541718,-0.2535918951034546,0.06375069916248322,-0.07294655591249466,-0.23110947012901306,0.003931252285838127,-0.09080527722835541,0.13792283833026886,0.8597310185432434,1.0487319231033325,0.9103663563728333,-0.02580699324607849,-1.3195815086364746,-0.7298396825790405,-0.916963517665863,0.700158417224884,0.15526868402957916,-0.17235958576202393,-0.7504827976226807,-0.0334719754755497,-0.23910309374332428,0.20516011118888855,-0.32592058181762695,-0.5988422632217407,-0.3331774175167084,0.6270951628684998,1.0323048830032349,0.5721519589424133,0.12248031049966812,-0.21801716089248657,-0.044118739664554596,0.08035773038864136,-0.2198953926563263,-0.22699907422065735,-0.03905165567994118,0.09384370595216751,-0.007386383600533009,0.1926957070827484,0.017053673043847084,-0.47225987911224365,-0.23747043311595917,-0.008178206160664558,0.7715452313423157,0.2842983901500702,-0.6901333928108215,0.1761406660079956,0.40216055512428284,0.5837143063545227,0.19450262188911438,-1.0635225772857666,-0.22297567129135132,0.5284641981124878,0.6369209289550781,0.1380012333393097,-0.19649289548397064,-0.17121551930904388,-0.052721936255693436,-0.4188586175441742,-0.06324969977140427,0.08337395638227463,-0.2591126263141632,0.04446406289935112,0.043375164270401,-0.21539048850536346,-0.9273117780685425,-0.8737565279006958,-0.5838496088981628,0.6655648946762085,0.30944567918777466,-0.7727152705192566,0.10621866583824158,-0.12068634480237961,0.04009798541665077,0.1510084569454193,0.17338615655899048,-0.6256333589553833,-0.4083649516105652,0.7043327689170837,-0.09889286756515503,0.19072535634040833,0.024631546810269356,0.21386972069740295,-0.3666275441646576,-0.37938979268074036,0.10116004943847656,-0.44126957654953003,-0.1314466893672943,-0.10522475838661194,-0.10638495534658432,-0.11618401110172272,0.021311689168214798,-0.7643288969993591,-1.024908185005188,0.009796400554478168,-0.4518652558326721,1.0766994953155518,0.8090102672576904,0.09515880048274994,0.940973162651062,0.4260323643684387,0.810736358165741,-0.3616519272327423,-0.3891717493534088,-0.00593983568251133,-0.01832582801580429,0.14619123935699463,0.5571805238723755,0.3926742970943451,-0.2841925621032715,-0.21690523624420166,0.1185697391629219,-0.5239513516426086,-0.1133330762386322,-0.5706547498703003,-0.5468248128890991,-0.1546962410211563,-0.00620668288320303,-0.19163115322589874,-0.17226941883563995,-0.5305020809173584,0.09217708557844162,0.7553005218505859,-0.20548579096794128,-0.07750831544399261,0.6494477391242981,0.48515307903289795,0.49962684512138367,0.8979009985923767,0.3729676306247711,-0.10323543846607208,0.26073572039604187,0.6125309467315674,0.800334632396698,0.15358354151248932,-0.06562462449073792,-0.28061622381210327,0.19079862534999847,-0.17352521419525146,-0.2915455102920532,-0.8249624967575073,-0.39277032017707825,-0.20210851728916168,-0.28749459981918335,0.014662554487586021,-0.19752269983291626,-0.10183477401733398,0.03323647007346153,-0.13876298069953918,0.5415772795677185,-0.1094847247004509,-0.4643670618534088,-0.23691706359386444,0.165555939078331,-0.14754699170589447,0.13706843554973602,0.5497393012046814,0.17782261967658997,-0.03807837888598442,-0.3865015208721161,-0.5408263802528381,-0.05546487122774124,-0.6607385873794556,-0.5703091621398926,-0.4027022421360016,0.33123111724853516,-0.5921894311904907,-0.32294291257858276,-0.8646702766418457,-0.3921632766723633,-0.49726396799087524,-0.10843625664710999,-0.10487589985132217,0.013435104861855507,-0.14020422101020813,0.2179708182811737,-0.8806151747703552,-0.3875443935394287,-0.008149952627718449,-0.2810802757740021,0.3074556887149811,0.708651065826416,-0.08982476592063904,0.21918971836566925,-0.6240785717964172,-0.09471408277750015,-0.2947894334793091,-0.02278207428753376,0.779194712638855,-0.6184096336364746,-0.16445805132389069,-0.17647448182106018,-0.42382651567459106,-0.24602960050106049,-0.1271914392709732,0.03570890426635742,-0.25538119673728943,-0.49386322498321533,-0.5367974042892456,-0.3547898828983307,0.09727939963340759,-0.020514557138085365,-0.02758663520216942,0.050517257302999496,-0.9106810092926025,-0.473349928855896,0.23102806508541107,-0.014380657114088535,-0.09447219967842102,0.09352363646030426,0.1678786277770996,0.5444369912147522,0.09120043367147446,0.2813171446323395,-0.11126367747783661,-0.45572972297668457,-0.6013901829719543,0.1370527446269989,-0.08214189112186432,-0.19572269916534424,-0.8922333717346191,-1.3910526037216187,-0.8339371085166931,-0.06229458004236221,-0.1395261138677597,-0.6558847427368164,-0.11717673391103745,0.06188433989882469,-0.2134954184293747,-0.08750912547111511,0.009927066043019295,-0.2572318911552429,-0.17047196626663208,-0.2732289135456085,0.33883678913116455,0.024982616305351257,0.16174432635307312,-0.07855224609375,0.6569547057151794,-0.17150823771953583,0.19767513871192932,0.11589690297842026,0.35942137241363525,0.5008813738822937,0.7461844086647034,-0.13776449859142303,-0.19645348191261292,-0.07749214768409729,0.2052745819091797,-0.0043724230490624905,0.6983380913734436,-0.15788313746452332,0.046821724623441696,-0.059095364063978195,-0.07575471699237823,-0.13671071827411652,0.06789157539606094,-0.10539841651916504,-0.09776902198791504,-0.12027241289615631,0.04380500316619873,0.448204904794693,-0.2769787609577179,-0.30397358536720276,-0.21119901537895203,-0.24567359685897827,0.4547561705112457,-0.5138788819313049,0.629213809967041,0.9366746544837952,0.36210522055625916,-0.2590842545032501,-0.12449836730957031,0.25218966603279114,0.0941263809800148,-0.23865485191345215,-0.7273208498954773,-0.7290078401565552,0.3641490042209625,0.0016670816112309694,-0.36048927903175354,-0.13561728596687317,0.060012154281139374,-0.023147989064455032,0.17452087998390198,-0.10641945153474808,-0.10577256232500076,0.008050935342907906,-0.19647446274757385,-0.09705233573913574,-0.8619068264961243,-0.36316514015197754,0.21472787857055664,0.1375153809785843,0.24723663926124573,-0.4613921642303467,0.13883204758167267,-0.5699745416641235,-0.4266757369041443,0.6599162817001343,0.2524009644985199,0.6153322458267212,0.7043219804763794,0.5162888169288635,0.08233782649040222,0.07529755681753159,0.6477749347686768,0.4869462549686432,0.04537651687860489,0.08875831216573715,-0.18454965949058533,0.019805239513516426,-0.12117327004671097,-0.16383859515190125,-0.11259211599826813,0.13950328528881073,0.034399863332509995,-0.11319900304079056,-0.2538357675075531,-0.3133094608783722,-0.034549541771411896,0.5148777365684509,0.24558430910110474,-0.37848711013793945,-0.07553784549236298,0.2233155071735382,-0.29126331210136414,0.022956782951951027,0.7175651788711548,0.4038512408733368,0.03685910627245903,0.6554072499275208,0.38817667961120605,0.2967284023761749,0.5553737878799438,0.050601646304130554,0.16642938554286957,0.016685135662555695,-0.19471366703510284,-0.13816028833389282,0.17875340580940247,-0.03233882039785385,-0.20130500197410583,-0.10492165386676788,0.1571774035692215,-0.09062057733535767,-0.06940297037363052,0.038939181715250015,0.4134939908981323,0.13505402207374573,-0.421424001455307,-0.705427885055542,-0.4004676043987274,-0.7214653491973877,-0.3659803867340088,-0.04298504814505577,0.09897714853286743,-0.11136889457702637,-0.08731125295162201,0.06279811263084412,-0.29285603761672974,0.16166914999485016,0.3007516860961914,0.08720844984054565,-0.06325423717498779,-0.0003972988051827997,-0.11220769584178925,-0.17942795157432556,-0.05322781950235367,-0.12678398191928864,0.14283756911754608,-0.035085685551166534,0.16492024064064026,-0.18735557794570923,-0.17744657397270203,0.1363215148448944,-0.17163030803203583,0.09752468764781952,-0.05122668668627739,-0.2114362120628357,-0.5493913888931274,-0.07152553647756577,0.007708551362156868,0.3373347520828247,-0.11175286024808884,-0.29159015417099,-0.022137200459837914,0.12237274646759033,0.03747999668121338,0.16038885712623596,0.013420128263533115,0.18827423453330994,-0.07883832603693008,-0.010019837878644466,0.0478171780705452,0.02025729790329933,0.18364916741847992,0.14165429770946503,-0.03631085902452469,0.11344299465417862,0.001310736290179193,-0.1983553022146225,0.15163308382034302,-0.08733993768692017,-0.10818828642368317,-0.23614269495010376,-0.049443092197179794,0.25757890939712524,0.1542792171239853,-0.0767407938838005,-0.03461733087897301,-0.18772275745868683,-0.07872670143842697,0.10534130781888962,-0.08507848531007767,0.10756839066743851,-0.029370639473199844,0.1759696751832962,0.20868264138698578,-0.008233770728111267,-0.13057157397270203,0.060458749532699585,0.1788109391927719,0.08593221753835678,-0.011914881877601147],[-0.0588616244494915,0.045560747385025024,0.16362899541854858,-0.15433810651302338,0.026973159983754158,-0.09857047349214554,0.14363452792167664,0.13193340599536896,0.1790848970413208,-0.28434062004089355,0.23531918227672577,-0.04637850821018219,0.1953705996274948,-0.01225387491285801,-0.039917219430208206,0.14374804496765137,0.05958046391606331,-0.21658921241760254,0.14881259202957153,0.2658216655254364,0.06789283454418182,-0.1414012759923935,0.2480577677488327,0.05058456212282181,0.113058902323246,-0.12513777613639832,0.09799913316965103,-0.05508969724178314,0.17848505079746246,-0.18942928314208984,0.1352301985025406,0.061976999044418335,0.18286581337451935,-0.17759813368320465,0.0006573590217158198,-0.13233448565006256,-0.38491156697273254,-0.3431512713432312,-0.3869088590145111,-0.15148457884788513,-0.144710972905159,-0.3841606080532074,-0.272061824798584,-0.035418394953012466,-0.24683234095573425,0.062493808567523956,0.059223443269729614,0.1409987509250641,-0.32031628489494324,0.33957234025001526,-0.10026788711547852,0.24926914274692535,-0.11252589523792267,-0.11440262198448181,0.1739443838596344,-0.0513947494328022,-0.16604313254356384,-0.0186136607080698,0.21137267351150513,0.08211761713027954,-0.06896570324897766,0.11131738126277924,-0.11582237482070923,-0.28625088930130005,-0.42056065797805786,-0.5319353938102722,-0.5427530407905579,-0.6133050322532654,-0.5205315947532654,-0.46027857065200806,-0.7532512545585632,-0.6617269515991211,-0.5091557502746582,-0.24801509082317352,-0.09167708456516266,0.25247618556022644,0.0664873793721199,-0.09408822655677795,-0.206155464053154,0.08918511867523193,-0.16017913818359375,0.23346322774887085,-0.040889982134103775,-0.0655328780412674,0.04664338752627373,0.18296903371810913,-0.08397660404443741,-0.03613908216357231,0.030255788937211037,0.13048291206359863,0.12715816497802734,-0.23330806195735931,-1.158852219581604,-1.2672377824783325,-0.939501166343689,-1.169157862663269,-1.0327290296554565,-1.484980821609497,-1.3716639280319214,-0.642253577709198,-0.12550576031208038,-0.01769372634589672,1.3800359964370728,0.5680159330368042,-0.11079280823469162,0.29410791397094727,0.06393235921859741,-0.8265706896781921,-0.7550207376480103,-0.21170486509799957,0.04036708176136017,0.13585442304611206,0.13659317791461945,0.021267002448439598,-0.08614268898963928,-0.08888783305883408,0.12896013259887695,-0.08246882259845734,-0.27171847224235535,-0.16755031049251556,-1.2532224655151367,-1.3082127571105957,-0.11790842562913895,0.3371163308620453,-0.14288660883903503,-0.32780030369758606,-0.02293705753982067,0.49609529972076416,0.10530388355255127,-0.6010751128196716,0.6891425848007202,0.18026494979858398,0.5237894058227539,0.6673526167869568,-0.5662196278572083,-0.4909912347793579,0.39791789650917053,0.4400142729282379,0.5545819401741028,-0.058198150247335434,-0.039011117070913315,0.04353220760822296,0.09712458401918411,-0.05944715812802315,0.2973799705505371,0.35840359330177307,0.5946439504623413,0.9212580323219299,0.6801835894584656,0.27820950746536255,0.07920622825622559,0.01368775311857462,-0.22798733413219452,-0.23692050576210022,-0.15882213413715363,-0.006984929088503122,-0.5663397908210754,0.29969358444213867,-0.16329175233840942,-0.4049859344959259,0.4566167891025543,-0.20449435710906982,0.5228911638259888,0.2707555592060089,1.078302025794983,0.6991867423057556,0.30967622995376587,-0.003575402544811368,0.04284820333123207,-0.021751966327428818,-0.09337855130434036,0.05774993449449539,0.1771574765443802,0.37383732199668884,-0.09794691205024719,-0.10068099945783615,-0.4075498580932617,0.3555368483066559,0.9405378103256226,0.16824622452259064,0.373833030462265,0.356929212808609,0.12132646143436432,0.8484166264533997,-0.18896007537841797,0.5244625210762024,0.2955467700958252,1.2760200500488281,-0.02362772263586521,0.5652287006378174,0.8873308300971985,1.3749333620071411,1.5628560781478882,0.6703125238418579,0.12145620584487915,0.15564730763435364,-0.12207202613353729,-0.0020503029227256775,-0.1909264177083969,0.18260373175144196,0.18654054403305054,0.01872560940682888,-0.2919687330722809,0.13807544112205505,0.25999167561531067,0.5052728652954102,-0.047194793820381165,-0.12483832985162735,-0.19442668557167053,-0.5230180025100708,-0.711534857749939,-0.4434373080730438,1.1575846672058105,-0.03154473379254341,0.337374210357666,0.2895527482032776,0.6255942583084106,0.5974500179290771,1.0280494689941406,1.4761722087860107,1.389655351638794,0.2896946966648102,0.16834093630313873,-0.11714381724596024,-0.25129517912864685,0.08470015972852707,0.039574287831783295,0.20021340250968933,0.24983333051204681,0.36718741059303284,0.18877999484539032,0.830435574054718,0.31024107336997986,1.166581153869629,0.13136029243469238,-0.41364312171936035,-0.1524166315793991,0.06068499758839607,-0.2228606790304184,0.06429047137498856,-0.5015502572059631,-0.5141749978065491,0.8999747633934021,0.20150315761566162,0.4104279577732086,0.5460873246192932,1.0486953258514404,0.4210796058177948,1.0861194133758545,0.6715754866600037,0.3113574683666229,0.3643030822277069,0.014016163535416126,-0.1898328959941864,-0.17243286967277527,0.10991016030311584,0.696114182472229,0.2873954772949219,0.4656471908092499,0.5766333341598511,-0.6270269155502319,0.24263375997543335,-0.15007705986499786,0.17164374887943268,-0.08026164770126343,-0.0306569691747427,-0.8419572710990906,-0.4242727756500244,-0.9103063941001892,0.6531091928482056,1.2832846641540527,0.4960063397884369,0.9375256896018982,0.7374153137207031,0.7462509274482727,0.40934234857559204,1.1095597743988037,1.0225436687469482,0.3228382170200348,0.35070356726646423,-0.0942642018198967,-0.05373133718967438,-0.06845572590827942,0.18868106603622437,0.4661061465740204,-0.2096392959356308,-0.145486518740654,0.2518664598464966,-0.15482759475708008,0.5623859763145447,-0.2024538815021515,0.2168883979320526,0.045412179082632065,-0.752324104309082,-0.33067959547042847,-0.21385417878627777,1.0035191774368286,0.4720246493816376,0.6252028346061707,0.09129510819911957,0.2089529037475586,0.9510034918785095,0.5140190124511719,-0.3411625325679779,0.5785423517227173,1.0371689796447754,0.6267263293266296,0.17314517498016357,0.08384103327989578,-0.02344357594847679,-0.2410881668329239,-0.48233845829963684,0.5390909314155579,-0.018329419195652008,0.13294444978237152,0.5307745933532715,0.7013988494873047,0.6227940320968628,1.1276946067810059,0.8444065451622009,0.4463520348072052,0.5261552333831787,1.6870778799057007,0.8291528224945068,0.4954935908317566,0.5036625266075134,0.09432738274335861,-0.48053044080734253,-0.1690770536661148,0.20730243623256683,0.48703834414482117,0.05171351879835129,-0.03945329040288925,0.3457666039466858,0.22298170626163483,-0.03844102472066879,-0.19117635488510132,-0.24872452020645142,-0.21174126863479614,-0.11725848913192749,0.27091681957244873,0.016999561339616776,0.1676536202430725,0.7139171361923218,-0.1061115637421608,0.5387982726097107,0.857112467288971,1.1128556728363037,0.9472361207008362,0.5410038232803345,1.5204510688781738,0.9601463079452515,0.36853206157684326,0.15169957280158997,-0.14613743126392365,0.9204767942428589,0.011295745149254799,-0.3907319903373718,-0.0011595633113756776,-0.7789244651794434,-1.2742542028427124,-0.14069128036499023,0.04542772099375725,0.25478821992874146,0.15686295926570892,-0.1146407201886177,-0.16988347470760345,-0.3092612624168396,0.39253681898117065,0.27002859115600586,0.6136658191680908,0.9485510587692261,1.189898133277893,0.3813020586967468,-0.012652197852730751,0.5781434774398804,0.6240209937095642,0.3818872272968292,0.3653534948825836,0.40463986992836,0.7917424440383911,0.7347543239593506,-0.06941612809896469,-0.8521890640258789,0.34412094950675964,-0.4556361436843872,-0.8099387884140015,-1.3609064817428589,-1.3920704126358032,-0.1531662493944168,0.14360007643699646,-0.13349534571170807,-0.028456857427954674,-0.15092942118644714,0.03993197903037071,-0.37155455350875854,0.400841623544693,-0.1436343640089035,0.8868436217308044,-0.2319837510585785,0.0950879380106926,0.2534778118133545,-0.033152393996715546,-0.4291646182537079,0.061005815863609314,0.3165186643600464,0.9301584362983704,-0.21170169115066528,-0.14381980895996094,0.9416306614875793,0.13678814470767975,0.592648983001709,0.08748192340135574,-0.3255396783351898,-0.1238037720322609,-0.8634916543960571,-1.0567169189453125,-0.008067652583122253,-0.005085031036287546,-0.04535941779613495,-0.18492519855499268,-0.173015758395195,-0.0072069186717271805,-0.3807308077812195,0.07168325781822205,-0.574392557144165,-0.2661302089691162,-0.42206838726997375,-0.6841810941696167,-0.5810258984565735,-0.29145970940589905,-1.1885322332382202,-0.03590716794133186,0.42729464173316956,-0.03648735582828522,0.4663267731666565,0.3258529007434845,0.6478404998779297,-0.10485933721065521,-0.06403280794620514,0.45426610112190247,0.09094302356243134,0.5600643157958984,0.44920629262924194,-0.40746185183525085,-0.2973420321941376,-0.3648660480976105,-0.10296936333179474,0.1300072968006134,0.1409703493118286,0.32194089889526367,0.10441630333662033,0.10646261274814606,-0.18938255310058594,-0.7745485305786133,-0.5868380665779114,0.0655052438378334,-0.8441305160522461,-0.6291404366493225,-1.6990938186645508,0.3907281160354614,0.7613382935523987,0.4445185363292694,0.4174182116985321,0.09429236501455307,0.3943233788013458,-0.0907403826713562,-0.4378475248813629,-0.5199550986289978,0.5329239964485168,0.22396522760391235,-0.05047818273305893,-1.0140397548675537,-1.0716748237609863,-0.5548955202102661,0.06273641437292099,0.13669677078723907,-0.08260992914438248,0.057610221207141876,0.8037096261978149,-0.18101131916046143,-0.6272909045219421,-0.13512027263641357,-0.24373774230480194,-0.42026978731155396,-0.24846352636814117,-0.8254504799842834,-0.7615774273872375,-0.5842404365539551,0.5530909299850464,-0.006423355545848608,0.013235632330179214,-0.2118287831544876,0.2401019036769867,0.6068124175071716,-0.2186456322669983,-0.8085715770721436,0.9858807921409607,-0.789310097694397,-0.14006967842578888,-0.3804697096347809,-0.9111083745956421,-0.2513796091079712,-0.08562495559453964,0.29961007833480835,0.18288350105285645,-0.22588509321212769,0.6228394508361816,-0.4073794484138489,0.03135913982987404,-0.11575476080179214,-0.4309709966182709,-1.5279184579849243,-0.2918715178966522,-0.5659835934638977,-0.2569681704044342,-0.14384685456752777,-0.03147029131650925,-0.3230591416358948,0.35907018184661865,-0.54328453540802,0.05730925872921944,-0.4327247142791748,0.19364018738269806,-0.15263445675373077,-0.16658800840377808,-0.19621789455413818,-0.17945237457752228,-1.4653533697128296,-0.6014881134033203,-0.007544707972556353,-0.2724556624889374,0.22271841764450073,0.29434865713119507,0.22086411714553833,0.672851026058197,-0.07273352146148682,-0.19012755155563354,-0.1867436170578003,-0.04388246685266495,-0.9636350870132446,-0.38217633962631226,-0.4096197485923767,-0.9198756814002991,-1.5285923480987549,0.18755853176116943,-0.37771305441856384,0.3487910330295563,-0.11836526542901993,-0.41867780685424805,0.31326159834861755,0.5891777276992798,-0.38268062472343445,-0.5908359885215759,-0.6285418272018433,-0.8169206976890564,-1.0511863231658936,-0.4770754277706146,-0.21857839822769165,0.11693772673606873,0.06638635694980621,0.17155687510967255,0.07231264561414719,0.04744955897331238,-0.836529552936554,-0.9602447748184204,0.09803342819213867,-1.2157059907913208,0.05844079330563545,-0.441129595041275,-1.788932204246521,-1.1371814012527466,-0.5446144938468933,-0.6040660738945007,-0.6121481657028198,0.07350499927997589,-0.48214009404182434,0.04360164329409599,-1.0289642810821533,0.1686485856771469,-0.40729600191116333,-0.019348252564668655,-0.2633613646030426,-0.04251324012875557,-0.5387296676635742,-0.11780896037817001,-0.29109567403793335,-0.20175424218177795,0.12122666090726852,0.00009717948705656454,0.31001582741737366,0.03668559342622757,-0.09504874795675278,-0.91379314661026,-0.15231336653232574,-0.5730154514312744,0.2287966012954712,-0.2169516533613205,-1.6399301290512085,-0.24933204054832458,-0.22341646254062653,-0.8273141980171204,-0.21826590597629547,-0.29083961248397827,-0.5933347344398499,-0.7377985119819641,-0.5111775398254395,-0.8049790263175964,-0.47568848729133606,0.29829955101013184,-0.5294213891029358,-0.49144837260246277,-0.5390788316726685,-0.12208648025989532,-0.10916686803102493,-0.15188933908939362,0.24312962591648102,0.11758945882320404,0.25025439262390137,-0.013530352152884007,-0.3747720420360565,-1.1319513320922852,0.22897149622440338,-0.06694835424423218,-0.7438898086547852,-0.07669704407453537,-1.387282371520996,-0.5294080376625061,0.49918675422668457,-0.9200479984283447,-0.23791931569576263,0.41522085666656494,-0.5099068880081177,-0.3256107568740845,0.25237834453582764,-0.07854943722486496,-0.7455888986587524,-0.04219180718064308,-0.37337741255760193,-0.7712878584861755,-0.4698701798915863,-0.3143860995769501,0.06575123965740204,-0.19318851828575134,0.03163120895624161,0.10355173051357269,0.06073281913995743,0.2006022036075592,-0.21253396570682526,-0.09180200099945068,0.10403407365083694,0.4057738482952118,-0.024815216660499573,0.13063853979110718,0.08684775233268738,0.6533496975898743,-0.16520805656909943,-0.926967203617096,0.69402676820755,1.2503666877746582,0.7064831256866455,1.117547631263733,0.4814227223396301,0.16251377761363983,0.43617773056030273,0.108319953083992,-0.4413207173347473,-0.47009509801864624,-0.32672321796417236,-0.016294516623020172,-0.16221527755260468,-0.0009250573348253965,-0.14263351261615753,0.15932822227478027,-0.04492540657520294,0.22075620293617249,0.2026270180940628,0.10351263731718063,0.34812232851982117,0.6232706904411316,0.37621191143989563,0.04779593273997307,0.16837598383426666,0.5969013571739197,0.4375132620334625,1.0666086673736572,1.3381685018539429,1.1705498695373535,1.2322607040405273,1.3185615539550781,0.9580758213996887,0.7022433280944824,0.6633449792861938,0.2320995330810547,0.2709227502346039,0.1651029735803604,-0.25793975591659546,-0.2562399208545685,-0.015751302242279053,-0.04704408720135689,-0.16540127992630005,-0.15334349870681763,-0.15439587831497192,0.1299320012331009,0.031906407326459885,0.41867968440055847,0.37534910440444946,0.6681705713272095,0.7399812936782837,0.9365131855010986,1.3626136779785156,1.1452343463897705,1.5456990003585815,1.0572104454040527,1.1893906593322754,0.751768946647644,0.7179530262947083,0.19778335094451904,0.5659083127975464,0.6012632250785828,0.39406341314315796,-0.02352425456047058,0.1299397349357605,-0.10959101468324661,-0.09125852584838867,0.14472047984600067,-0.11949659138917923,-0.08929561823606491,0.008367124013602734,-0.11486950516700745,-0.06466882675886154,-0.0677933320403099,0.18348585069179535,-0.14371620118618011,-0.03326691314578056,0.31074684858322144,0.23853565752506256,0.1289004385471344,0.2774544358253479,0.3813205659389496,0.28191161155700684,0.23408150672912598,-0.026241762563586235,0.2582307457923889,-0.050011664628982544,-0.21170447766780853,0.03889995440840721,0.06336385011672974,0.1688113957643509,0.17171922326087952,-0.06867311894893646,0.1605704128742218,0.08471140265464783,-0.003918803762644529,0.04914456233382225,-0.07375633716583252,-0.09387581050395966,-0.037911307066679,-0.06182936578989029,-0.14734119176864624,-0.07408785820007324,-0.08214651048183441,-0.011251864023506641,0.007130274083465338,0.2571217119693756,-0.018534354865550995,0.16870014369487762,-0.1282394528388977,0.010993761010468006,0.012098505161702633,0.10711026191711426,0.09084951877593994,-0.09709387272596359,-0.10726752132177353,0.07604937255382538,-0.08271857351064682,-0.04468518868088722,-0.024591103196144104,-0.14171671867370605,0.1110876277089119,-0.06623031198978424,-0.15622270107269287,0.10336243361234665,-0.012768934480845928],[-0.1655496507883072,-0.1121845543384552,0.22571249306201935,0.14272426068782806,0.025001229718327522,-0.10142870247364044,-0.04587344825267792,-0.18349719047546387,0.23825663328170776,0.17608754336833954,-0.004628391936421394,0.4092561602592468,0.06215858832001686,0.09263322502374649,0.23994140326976776,-0.04131919518113136,0.10811284184455872,0.09112850576639175,0.3319775462150574,0.05998418107628822,0.38765615224838257,0.1620287001132965,0.16689123213291168,0.2327985018491745,0.08417921513319016,0.012074673548340797,0.20465074479579926,-0.10263638943433762,-0.14737588167190552,0.15465299785137177,0.2218027412891388,-0.18155765533447266,0.04875481501221657,0.09752440452575684,-0.12875987589359283,-0.10101248323917389,-0.16797403991222382,0.11990705132484436,-0.007652461063116789,0.3643956780433655,0.3446281850337982,0.3963581323623657,0.12678764760494232,-0.0683194026350975,-0.07428459078073502,0.47487205266952515,-0.037174370139837265,-0.07310818135738373,0.17320455610752106,0.09725326299667358,-0.023349497467279434,0.029349127784371376,-0.005831585265696049,-0.022705260664224625,0.18539279699325562,-0.09036915004253387,-0.08032238483428955,-0.05608857795596123,0.1540413349866867,0.25252991914749146,-0.08973857015371323,0.02198578044772148,-0.0686032623052597,-0.2031710296869278,0.10629680007696152,0.19337581098079681,0.33941400051116943,0.3696410357952118,0.23190078139305115,-0.07120668888092041,0.27902811765670776,0.3679198920726776,0.18986643850803375,0.21711118519306183,0.28313249349594116,0.5756278038024902,0.3660210967063904,0.06369395554065704,0.31218138337135315,0.1588226556777954,0.1983317732810974,0.07177635282278061,0.10706576704978943,0.08583186566829681,-0.008173797279596329,0.09664081782102585,0.06547267735004425,-0.01926848106086254,0.0009420110145583749,0.04371181130409241,0.1359853893518448,0.028724675998091698,0.15325579047203064,0.07856666296720505,0.07419946789741516,0.2738867998123169,-0.1021442860364914,0.09096936136484146,0.06700695306062698,0.18231244385242462,-0.548389732837677,0.5383895039558411,1.4199036359786987,1.068258285522461,0.4886050224304199,0.5988472104072571,0.3148672580718994,0.21259470283985138,0.13912181556224823,0.21563602983951569,0.03872312232851982,0.08337240666151047,0.02579335682094097,-0.07876221090555191,0.01922830007970333,-0.20503798127174377,0.14198864996433258,-0.08736445754766464,0.10703092813491821,-0.04394223168492317,0.041958414018154144,0.21918778121471405,0.4137817919254303,0.2486053705215454,-0.7194275259971619,-1.3486461639404297,-1.685863733291626,-1.242722511291504,-0.9057252407073975,-0.26597416400909424,0.17303533852100372,0.6001356244087219,0.457258939743042,0.29741930961608887,0.1969686597585678,0.21203342080116272,-0.003957930952310562,0.2119884341955185,-0.19584240019321442,0.20476758480072021,-0.10352642834186554,0.029060732573270798,0.19698232412338257,-0.08498360216617584,0.3665408194065094,0.282861590385437,-0.1867406815290451,-0.27023687958717346,0.19713541865348816,0.06290818750858307,0.29123610258102417,-0.1777956485748291,-0.3683147430419922,-1.96917724609375,-0.43286338448524475,0.02738288789987564,-0.12088952213525772,-0.010129489004611969,0.6332677006721497,0.014758778735995293,-0.006048531737178564,-0.1450442373752594,-0.5166336894035339,0.28791728615760803,0.1440751701593399,-0.03171601891517639,-0.30756309628486633,-0.156934916973114,-0.021503189578652382,-0.11670014262199402,-0.016074644401669502,-0.23278960585594177,0.37820786237716675,-0.008297796361148357,-0.01331490557640791,0.207232266664505,-0.11653553694486618,-0.6558833718299866,-0.8275827169418335,-1.0863609313964844,-0.8399455547332764,-0.30139970779418945,-1.2734217643737793,-1.5618441104888916,-1.7066223621368408,-1.245353102684021,-1.6698025465011597,-0.9728725552558899,-0.5767736434936523,-0.181332066655159,0.3845342993736267,0.9593338966369629,-0.18102960288524628,-0.3364892899990082,-0.054887209087610245,-0.059435613453388214,-0.05248264968395233,-0.09588059037923813,0.21111755073070526,0.0685606598854065,-0.04093242809176445,-0.24022269248962402,-0.2652968764305115,0.08762209862470627,-0.7326736450195312,-0.7331714034080505,-0.13908468186855316,-1.0981863737106323,-1.5256646871566772,-0.9188539385795593,-1.9483963251113892,-1.302633285522461,-2.4921650886535645,-0.8345193862915039,-0.9373366236686707,-0.3254436254501343,-1.529360294342041,-0.7839889526367188,0.17931367456912994,0.2964473366737366,-0.02634626440703869,-0.30717307329177856,0.0776490643620491,0.040463533252477646,-0.1210097223520279,0.203781396150589,0.10826212912797928,0.049085717648267746,-0.26925191283226013,-0.31928184628486633,-0.210826113820076,0.7057199478149414,-0.568243682384491,-0.08876185864210129,-0.7623392343521118,-1.4548898935317993,-1.0152887105941772,-0.8327836394309998,-1.6908284425735474,-1.7010213136672974,-1.44143545627594,-0.41015511751174927,-0.8089218139648438,-0.4518298804759979,0.6125001311302185,-0.2352212369441986,-0.2528345584869385,-0.2910816967487335,0.28388333320617676,0.02411375567317009,-0.35917869210243225,0.21440336108207703,0.08633500337600708,-0.017282143235206604,-0.12703843414783478,-0.23239819705486298,-0.2568770945072174,-0.06802669912576675,-0.4177367389202118,0.2169399857521057,-0.4232327342033386,-1.1215828657150269,-0.7381008267402649,-0.6306790709495544,-0.9348434209823608,-1.27251398563385,-1.6327711343765259,-0.7693555355072021,-0.10059886425733566,-0.4195730686187744,0.4102626144886017,0.035671696066856384,0.8323709964752197,0.8202072381973267,0.06686478853225708,0.012853920459747314,-0.11475766450166702,-0.3988289535045624,-0.29237785935401917,0.0036572818644344807,-0.0760834813117981,-0.04163062199950218,0.049315646290779114,0.0501876100897789,-0.15545731782913208,-0.41705650091171265,-1.2092714309692383,0.09037510305643082,-0.20920330286026,0.38902828097343445,0.42186498641967773,-0.2899794280529022,0.8177185654640198,-1.0950652360916138,-0.4325084090232849,2.348038911819458,0.953303337097168,1.4492875337600708,0.9283671975135803,0.3166179656982422,0.3501836955547333,0.6503813862800598,0.38833609223365784,-0.35873943567276,-0.009421645663678646,-0.06477165222167969,-0.08520916849374771,0.010251711122691631,0.13246968388557434,0.00591859919950366,-0.08683675527572632,0.03638603165745735,-0.19936934113502502,0.09050359576940536,-0.3754734992980957,0.40513375401496887,-0.24927784502506256,0.3850763738155365,0.6997847557067871,0.08783013373613358,0.2510431706905365,-0.7102792859077454,0.4877042770385742,0.30675217509269714,-0.18984480202198029,-0.7439939379692078,0.08767306059598923,0.05461014434695244,-0.5467224717140198,-0.09420459717512131,-0.4212550222873688,0.08980565518140793,-0.03616459295153618,-0.08669237792491913,-0.09347456693649292,-0.039564669132232666,0.0436384379863739,0.07933390885591507,-0.05740706995129585,0.04232855886220932,-0.36251935362815857,0.19846521317958832,0.4918688237667084,0.48707449436187744,0.6436834335327148,0.5893392562866211,0.9959794878959656,0.29975011944770813,1.4695985317230225,1.3373081684112549,-0.9110260009765625,-0.16292303800582886,0.6969671845436096,-0.4859641492366791,-0.7914774417877197,-0.3500683307647705,-0.7237020134925842,-0.6860073804855347,-0.11466572433710098,0.580345869064331,0.5577421188354492,0.12594060599803925,0.05443192273378372,-0.044430479407310486,0.09988904744386673,-0.0073233055882155895,0.19690491259098053,-0.09539394825696945,0.07527158409357071,1.107528567314148,0.8396029472351074,-0.31413277983665466,1.1619045734405518,0.30191799998283386,1.2393423318862915,2.143601894378662,1.5013725757598877,-0.022506315261125565,-1.0220831632614136,0.23052801191806793,0.2993163764476776,0.5305346846580505,-0.05028459057211876,-0.1954515278339386,-0.5457217693328857,0.05681140720844269,0.5433650016784668,1.484864354133606,0.7077574729919434,-0.0018553284462541342,0.07294788211584091,0.07169996947050095,-0.1539800465106964,-0.050111811608076096,-0.0583789236843586,0.02888382412493229,0.6022838354110718,0.9859258532524109,0.5993894338607788,0.2590915858745575,1.3978550434112549,0.9658684730529785,0.31888505816459656,1.5100630521774292,2.260533094406128,-0.17761757969856262,-0.7074558734893799,0.3888404667377472,0.6231074929237366,0.33194801211357117,0.700083315372467,0.10753858089447021,0.6698532700538635,0.26775357127189636,0.9926117062568665,0.9079287648200989,0.994324803352356,0.37398600578308105,0.056108031421899796,0.018505152314901352,0.08804721385240555,-0.2157684862613678,-0.17011745274066925,0.34275609254837036,0.6115681529045105,0.5063241124153137,0.6700501441955566,0.6923726201057434,0.6422116756439209,0.7784653306007385,0.8501705527305603,0.6689960956573486,0.8153972029685974,0.18164564669132233,-0.04707957059144974,-0.1693841516971588,0.6743970513343811,0.1686079353094101,0.4172634482383728,0.5007002949714661,-0.33445411920547485,-0.1335398107767105,0.905948281288147,1.3114780187606812,0.6661533117294312,0.5751429796218872,0.20445141196250916,-0.13368183374404907,-0.029935328289866447,-0.2898569405078888,-0.2055477350950241,0.2857151925563812,0.2075159102678299,0.6245682239532471,0.7457825541496277,0.20160160958766937,0.6656811237335205,-0.4341699779033661,-0.004162794444710016,-0.026034582406282425,-0.13620418310165405,0.9019137024879456,1.2697222232818604,1.4147796630859375,0.525059700012207,0.7755504846572876,0.8964115977287292,1.2208094596862793,0.15882036089897156,0.04482065886259079,0.4653012752532959,1.225097417831421,1.0439558029174805,0.6931836605072021,0.1437402218580246,0.23184774816036224,-0.08770030736923218,0.17427703738212585,0.1397881805896759,0.17916551232337952,0.3639775514602661,0.6149792671203613,0.9199885129928589,0.7438147664070129,0.7825813889503479,0.12124202400445938,0.32430291175842285,0.014136402867734432,-0.37385499477386475,-0.07334226369857788,0.1514144241809845,0.7417381405830383,0.48094645142555237,0.7062505483627319,0.7377374172210693,0.24443207681179047,0.09466453641653061,0.6032877564430237,0.6098034977912903,1.1833237409591675,0.8446642756462097,0.4909623861312866,0.072844959795475,-0.03701680153608322,0.15345068275928497,0.1242464929819107,0.13251735270023346,-0.15244948863983154,0.017342668026685715,0.06577818095684052,0.3869660198688507,0.2658829391002655,-0.22945021092891693,-0.12944354116916656,0.16893638670444489,0.13634908199310303,-0.05966312438249588,0.8114849328994751,0.6015310287475586,1.1982667446136475,0.6091198921203613,0.02408590167760849,1.3522669076919556,-0.08122296631336212,0.04800725355744362,0.3073050379753113,-0.0013505216920748353,0.580293595790863,0.9041783809661865,0.40845587849617004,0.008960754610598087,-0.05519700422883034,-0.031622570008039474,-0.10687271505594254,0.19935131072998047,-0.7660661339759827,-0.42965805530548096,0.001444655703380704,0.5446544289588928,-0.4588879644870758,-0.4141373634338379,-0.8024100065231323,-0.3624681532382965,0.5555395483970642,0.6629050970077515,0.9908275604248047,1.0900530815124512,0.5562316179275513,0.27999910712242126,0.22658534348011017,0.046148303896188736,-0.8672826886177063,-0.6576798558235168,-0.5711294412612915,-0.918786883354187,0.24403485655784607,0.4053962528705597,0.11482449620962143,0.04855167865753174,-0.08348896354436874,-0.1962323933839798,-0.1631392389535904,-0.16342316567897797,-0.7518211007118225,-0.8513311147689819,-0.5427852272987366,-0.49712225794792175,-0.8803490400314331,-1.3166825771331787,-0.07963819056749344,0.8210264444351196,0.496724396944046,-0.3992326557636261,-0.21756911277770996,-0.20324866473674774,-0.6608930230140686,0.4399752616882324,-0.39584770798683167,-0.1127241998910904,-1.4289958477020264,-1.4159202575683594,-0.9322755336761475,-0.9103330373764038,-0.31846439838409424,-0.25766685605049133,0.07871155440807343,0.20193499326705933,-0.034067630767822266,0.029735229909420013,-0.0037853573448956013,-0.1822853982448578,0.08578610420227051,-0.1809670478105545,-0.7241774201393127,-0.7635767459869385,-0.8580619096755981,-1.8077867031097412,-0.4825087785720825,-0.06490612775087357,-0.4428591728210449,-0.49664849042892456,0.501252293586731,-0.7868049740791321,-1.1999694108963013,-0.534024715423584,-1.0250271558761597,-0.8385388255119324,-1.200373649597168,-0.859658420085907,-0.6999210119247437,-0.7971251010894775,-0.2793601155281067,-0.38508209586143494,0.1424611359834671,-0.0887804850935936,0.1181006133556366,-0.21572360396385193,0.21888995170593262,-0.026172075420618057,-0.20393399894237518,-0.5749077796936035,-0.6319791078567505,-0.24702905118465424,-0.7755048274993896,-1.220152735710144,-0.4428268373012543,-0.7998431324958801,-0.40588390827178955,-0.9822697639465332,-0.6267925500869751,-0.9354163408279419,-1.0322175025939941,-0.49117565155029297,-1.2178268432617188,-0.44752827286720276,-0.13945600390434265,-0.7385106682777405,0.056177325546741486,-0.4855569899082184,-0.22006195783615112,0.4610617756843567,0.3713255822658539,0.0952426940202713,0.15592502057552338,0.01992730051279068,-0.07817094027996063,-0.0392962247133255,-0.02071274071931839,-0.8120203614234924,-1.0863455533981323,-0.8778821229934692,-0.4293384850025177,-0.6625736355781555,-0.5629312992095947,-0.8317573666572571,-0.7405376434326172,-0.8055102229118347,-0.6372255682945251,-0.5389412045478821,0.4403335452079773,0.03823054954409599,0.2962980270385742,-0.46150290966033936,0.13992635905742645,-0.0176575668156147,0.05181249976158142,-0.6194574236869812,-0.5270529389381409,0.14519968628883362,0.25040075182914734,-0.043095577508211136,-0.18808336555957794,-0.11462040990591049,-0.17935320734977722,-0.15095478296279907,0.08503197133541107,-0.2140362411737442,-0.5704819560050964,-0.2539328634738922,-0.5143463015556335,-0.36466196179389954,-0.728183388710022,-0.3457276523113251,-0.02614877186715603,-0.04500114172697067,-0.21524009108543396,-0.5853788256645203,0.0026781647466123104,-0.5094804167747498,0.022294124588370323,-0.8706499934196472,0.26383575797080994,-0.9362835884094238,-0.8454089164733887,-0.6488522291183472,-0.7575187087059021,-0.31693708896636963,-0.16628192365169525,0.030077271163463593,0.045737992972135544,-0.013883908279240131,0.17214056849479675,0.11582589149475098,-0.031247997656464577,0.13368558883666992,-0.21346686780452728,-0.24997873604297638,-0.633380651473999,-0.975028395652771,-0.7319058775901794,-1.0425423383712769,-1.614141583442688,-1.2676377296447754,-1.0382533073425293,-1.1468720436096191,-0.7409929633140564,-1.4960261583328247,-1.131068468093872,-1.0546492338180542,-0.31182876229286194,-0.28257453441619873,-0.5074524283409119,-0.5993046760559082,-0.37056294083595276,-0.21596042811870575,-0.03794300928711891,0.05319758877158165,-0.08972718566656113,0.0666656643152237,-0.1159285455942154,0.18371059000492096,-0.056928277015686035,-0.0027580028399825096,-0.047238875180482864,-0.33554673194885254,-0.2963283360004425,-0.7999317646026611,-0.8768566846847534,-0.9707503318786621,-1.0493577718734741,-1.6445220708847046,-0.7739590406417847,-1.3816152811050415,-0.5644397735595703,-0.9134267568588257,-1.2534401416778564,-1.6777701377868652,-0.5974224209785461,-0.30736613273620605,-0.1701032519340515,-0.15283018350601196,-0.19166475534439087,-0.019146881997585297,-0.020955795422196388,-0.0582570806145668,-0.08287303149700165,0.14231516420841217,0.1563708782196045,-0.17320387065410614,0.18120098114013672,-0.03893080726265907,0.11772507429122925,0.1349385529756546,-0.09121744334697723,0.06413983553647995,-0.09922657161951065,-0.03165281563997269,0.17027492821216583,-0.05775734782218933,0.0707816481590271,-0.204352468252182,0.002522536553442478,0.3038000464439392,-0.08853460103273392,-0.14941458404064178,-0.19715631008148193,-0.2317817658185959,-0.00392967090010643,0.07353705167770386,-0.03791702166199684,0.15256039798259735,0.03366466239094734,0.11858027428388596,-0.1899346262216568],[0.18356922268867493,-0.09928963333368301,0.14209626615047455,0.17022079229354858,-0.013806410133838654,-0.03748025372624397,-0.14615939557552338,-0.2002386599779129,-0.10142224282026291,0.23350347578525543,0.2664008140563965,-0.06417349725961685,0.20139376819133759,-0.07794065028429031,0.07090572267770767,-0.16602838039398193,0.11920654773712158,-0.039961885660886765,0.24663947522640228,-0.09609650075435638,0.1374245285987854,0.20791897177696228,0.13900530338287354,0.000013110010513628367,-0.017422255128622055,0.19015906751155853,-0.06194614991545677,0.08584722131490707,-0.11411041766405106,0.000023097767552826554,0.11935537308454514,0.0983278825879097,0.1866419017314911,0.012968694791197777,-0.023846101015806198,-0.04947274923324585,-0.1548020839691162,0.12733246386051178,-0.03366714343428612,0.17564208805561066,0.3492014706134796,0.2873685359954834,0.17708976566791534,0.05477109178900719,0.18241320550441742,0.012814773246645927,0.3025900721549988,-0.08746311813592911,0.19332429766654968,-0.12649115920066833,0.38235506415367126,0.24288074672222137,-0.09885232150554657,-0.09435942769050598,0.19993305206298828,0.14950339496135712,-0.07927491515874863,-0.1571931391954422,0.20214980840682983,0.11570651829242706,0.15038716793060303,0.1673448085784912,0.14156688749790192,0.011258968152105808,0.25386834144592285,0.6049252152442932,0.25862452387809753,0.3067379295825958,0.17144893109798431,0.22505365312099457,0.38370028138160706,0.23755186796188354,0.6702160835266113,0.4012483060359955,0.3430904746055603,0.4530227780342102,0.4394703507423401,0.1209293082356453,0.18308928608894348,-0.0827694907784462,0.10617812722921371,-0.07133694738149643,0.14170919358730316,-0.12773220241069794,0.1220562607049942,-0.19079528748989105,-0.1513749063014984,0.026231799274683,0.043035004287958145,0.27564847469329834,0.20833523571491241,0.13704827427864075,0.3334725797176361,0.7418907880783081,-0.14504432678222656,-0.5917908549308777,-0.5037347674369812,0.002667164197191596,-0.4912746548652649,0.4777328670024872,-0.04181600734591484,-0.023590682074427605,0.5242782235145569,0.4867280423641205,0.44720780849456787,0.2670011818408966,0.48336583375930786,0.2370443046092987,0.1431683897972107,-0.13275882601737976,-0.1447053700685501,-0.0729832649230957,-0.09812901169061661,0.04763231799006462,-0.1848185807466507,-0.001933074090629816,0.14697502553462982,0.03044184297323227,-0.3652956485748291,0.07842624932527542,0.012420786544680595,-0.25745633244514465,-0.08327557891607285,-0.12240464985370636,-0.13902591168880463,-0.8419111371040344,0.28500667214393616,0.25345316529273987,-0.3075416684150696,0.1657155156135559,-0.376158207654953,0.1176053136587143,0.7839431762695312,0.788009524345398,0.48674607276916504,0.7610307335853577,-0.005990490783005953,0.10616175830364227,-0.3609372079372406,0.02191372774541378,-0.02887469157576561,-0.10376722365617752,0.09707129001617432,-0.10059960186481476,0.22980672121047974,-0.33867985010147095,-0.2182563692331314,-0.130218043923378,0.032604020088911057,-0.08343014121055603,0.08377894014120102,0.12092385441064835,-0.32318374514579773,-0.8647829294204712,0.14539560675621033,-0.2280912697315216,-0.33064964413642883,0.9863647818565369,0.8199200630187988,0.9965922832489014,0.537106454372406,0.9829993844032288,0.8026049137115479,0.9455925226211548,0.2700977623462677,-0.129571795463562,-0.13536180555820465,0.16577163338661194,-0.011205148883163929,0.15486665070056915,-0.14828549325466156,-0.17908962070941925,-0.011983388103544712,-0.7675755620002747,-0.3186413645744324,0.6240985989570618,0.4971749782562256,0.240180104970932,0.26187023520469666,-0.7064409852027893,0.2962777316570282,-0.29728037118911743,-0.017958864569664,0.6777558326721191,0.12259221822023392,0.5187017917633057,-0.04485785961151123,-0.2753745913505554,0.04145706444978714,-0.27534008026123047,0.21371351182460785,0.4316307306289673,-0.11047330498695374,-0.3892178237438202,-0.17378975450992584,-0.14584854245185852,-0.12813091278076172,0.0957915410399437,0.05509686842560768,-0.1890004277229309,-0.08213786780834198,-0.022671805694699287,0.7768226861953735,1.421244502067566,0.813744068145752,0.42054763436317444,0.07460563629865646,0.2789912819862366,-0.30863112211227417,-0.7475053071975708,-0.4360041320323944,0.3294319212436676,-0.527549147605896,-1.073752999305725,-0.6916101574897766,-0.13488411903381348,-0.7191614508628845,-1.163832426071167,-0.4379022717475891,-0.5537877678871155,-0.4424671232700348,-0.11009673774242401,-0.22807441651821136,-0.2029993087053299,-0.014110559597611427,0.14174218475818634,-0.020664500072598457,-0.21510820090770721,-0.2900083661079407,0.08794817328453064,0.4428805112838745,-0.1109592616558075,-0.023176753893494606,0.06750602275133133,-0.33414191007614136,0.44589364528656006,-0.6087188720703125,-0.9862931966781616,-1.708801031112671,-1.0277434587478638,-1.6802529096603394,-1.1595865488052368,-1.0159639120101929,-1.1894936561584473,-1.0664044618606567,-1.2280765771865845,-0.5647587180137634,-0.4022262990474701,-0.2105441838502884,-0.14571231603622437,-0.34106379747390747,0.02665252797305584,0.14371289312839508,0.17097444832324982,-0.004277762491255999,-0.14070218801498413,-0.0768115222454071,-0.01945679634809494,-0.030678754672408104,-0.6440017819404602,-0.8081637024879456,-0.29774582386016846,-0.3302841782569885,-0.37477508187294006,0.11802107095718384,-1.1491116285324097,-1.3637809753417969,-1.7967947721481323,-2.4950222969055176,-1.4930938482284546,-0.9713461995124817,-1.5741703510284424,-1.3103238344192505,0.22667457163333893,-0.6691505908966064,-0.7994840741157532,-0.3022752106189728,-0.3248170018196106,-0.20560650527477264,-0.20885974168777466,0.02457820624113083,0.13150480389595032,0.20882807672023773,-0.1797216832637787,0.2350538969039917,0.06315150856971741,-0.8481449484825134,0.4251076877117157,-0.6753333210945129,-0.12619216740131378,0.0071105072274804115,0.00726010836660862,-0.2917802035808563,-0.8851019144058228,-1.5401312112808228,-0.8933454751968384,-1.1166659593582153,-0.09439180046319962,0.3827407658100128,0.1486329734325409,-0.38381844758987427,-0.019714662805199623,-0.43813422322273254,-0.24872343242168427,0.2595688998699188,-0.31449946761131287,0.03964637219905853,0.18792971968650818,-0.05573522672057152,0.04200128838419914,0.11805203557014465,-0.3032628893852234,0.26281917095184326,0.15278112888336182,-0.14232254028320312,0.7358279228210449,-0.017061693593859673,-0.42708098888397217,-0.3700968027114868,-0.4423796236515045,0.1254071742296219,-0.2062571942806244,-0.15661294758319855,0.4570167362689972,0.7859567403793335,0.4451400339603424,1.038482427597046,0.014578674919903278,-0.8522460460662842,-0.2768705189228058,-0.24770571291446686,-0.39850738644599915,0.17987045645713806,-0.13215968012809753,0.04779966175556183,0.16303227841854095,-0.14478832483291626,0.11524806171655655,-0.020887605845928192,0.17585931718349457,0.4022779166698456,-0.115933358669281,-0.33260855078697205,0.22099439799785614,0.06890049576759338,-0.2215467244386673,-0.2553946077823639,-0.21853531897068024,-0.3815535604953766,0.27948302030563354,0.2233949899673462,1.0528866052627563,0.34539416432380676,-0.31825679540634155,0.24123257398605347,0.024804262444376945,0.12422400712966919,-0.2382316291332245,-0.5697814226150513,-0.21723878383636475,0.632040798664093,0.10066058486700058,-0.1111096739768982,-0.13907387852668762,0.08950101584196091,0.1694585084915161,0.08438761532306671,0.00666699418798089,0.11190766841173172,0.018121566623449326,-0.172285795211792,-0.35236993432044983,0.4228030741214752,0.25341761112213135,-0.2822972536087036,0.9656227827072144,-0.07894132286310196,-0.10204034298658371,0.23152120411396027,0.4440461993217468,-0.2886134684085846,-0.29052403569221497,0.247300386428833,0.01840728335082531,0.32562318444252014,-0.16847781836986542,-0.4438346028327942,0.41502925753593445,0.44736248254776,-0.046144332736730576,0.03174302726984024,-0.016784347593784332,-0.12679652869701385,-0.09068294614553452,0.2090337574481964,0.0563957504928112,0.1446680873632431,0.35739243030548096,0.5875481367111206,0.2577865719795227,-0.34005358815193176,0.6278381943702698,0.15601246058940887,0.8192223310470581,0.32542359828948975,-0.20544974505901337,0.4125041663646698,0.14113786816596985,0.6519678831100464,0.7334304451942444,0.12380675971508026,0.0868297889828682,0.7237356901168823,-0.6554758548736572,0.5894875526428223,0.08550315350294113,-0.05216095596551895,-0.05836151912808418,0.06236720830202103,-0.032731980085372925,0.13676293194293976,0.1682606041431427,-0.0386495515704155,0.4158592224121094,-0.1209229901432991,0.27681049704551697,0.7266245484352112,-0.14325527846813202,0.17664562165737152,0.34477394819259644,1.2525990009307861,1.1424760818481445,0.4545813500881195,0.92786705493927,0.15481361746788025,0.26495084166526794,0.9090387225151062,-0.1996525079011917,0.0006131765549071133,-0.4995262026786804,-0.11793672293424606,0.17687907814979553,0.32360437512397766,0.12879331409931183,-0.0589350089430809,0.4022584557533264,0.05897413194179535,-0.05034453049302101,0.10661758482456207,-0.16861243546009064,-0.11920607089996338,0.2940033972263336,-0.5822028517723083,0.3140069842338562,0.405055433511734,0.507604718208313,0.14294663071632385,0.3576776087284088,0.286546915769577,0.6397978067398071,0.5240249037742615,1.517284870147705,1.507421612739563,0.6034145951271057,0.07664467394351959,-0.26280567049980164,-0.25449517369270325,-0.02742469683289528,0.5550655126571655,0.3579524755477905,0.02030791901051998,-0.085596963763237,0.2794496417045593,0.4014050364494324,0.001715546939522028,-0.020848345011472702,-0.1977718323469162,-0.005366898607462645,0.286558598279953,0.21856717765331268,-0.44296056032180786,-0.024321597069501877,0.0305055920034647,-0.2717066705226898,0.36052578687667847,0.23215797543525696,-0.2746453583240509,0.6404427289962769,1.817526936531067,1.8937550783157349,1.4127243757247925,1.0350452661514282,0.42310649156570435,-0.14001347124576569,-0.5724022388458252,-0.5245652794837952,0.5074262619018555,-0.24888432025909424,0.3482784330844879,-0.068940170109272,0.5541567206382751,0.28913185000419617,0.17774273455142975,-0.06226199492812157,-0.018059924244880676,0.028796259313821793,0.3610452711582184,0.18796193599700928,0.16679181158542633,0.21179768443107605,0.013011649250984192,0.5040487051010132,0.2052648812532425,-0.25795847177505493,-0.13766904175281525,0.2938014566898346,1.3397927284240723,1.558026671409607,1.4468802213668823,0.5378192663192749,0.57573002576828,0.10482142120599747,0.11694736778736115,0.5191160440444946,0.26616066694259644,-0.7173489332199097,0.0291138868778944,0.5901200771331787,0.6093444228172302,0.2194700688123703,0.018537497147917747,0.15822149813175201,-0.019324608147144318,0.19698910415172577,0.10762036591768265,-0.2338775098323822,0.6074255704879761,0.32319924235343933,0.19079892337322235,-0.12358945608139038,0.010119977407157421,-0.01631464809179306,-0.6655949354171753,-0.5841695666313171,-1.5418487787246704,-0.23342789709568024,0.4824737310409546,0.37849849462509155,0.403438925743103,0.8164694905281067,0.37754085659980774,0.7732435464859009,0.5605093240737915,0.0036177735310047865,-0.16007691621780396,0.5675768256187439,0.19113098084926605,0.22924751043319702,0.16897504031658173,0.13072746992111206,0.11151188611984253,0.15862369537353516,-0.10020526498556137,-0.47815436124801636,-0.6168692111968994,-0.23404276371002197,0.0196269229054451,-0.34275248646736145,0.34240004420280457,0.2295898199081421,-0.2654639482498169,-0.3255709409713745,-0.3011833429336548,-0.5266783237457275,0.132870152592659,0.4740633964538574,0.26962000131607056,-0.08710478991270065,0.14716069400310516,0.06297633796930313,-0.03372085466980934,-0.6158148646354675,-0.06775832176208496,-0.003058313624933362,0.0276819858700037,-0.08860935270786285,0.012467865832149982,0.13468986749649048,-0.05318762734532356,-0.2605670094490051,0.04366707056760788,-0.2500365376472473,-0.7693002223968506,0.019688626751303673,0.00546659342944622,-0.03504160791635513,-0.13232961297035217,0.0761728286743164,0.6487728953361511,0.06768767535686493,0.26745837926864624,-0.18507200479507446,0.6780834794044495,0.6267878413200378,0.3498300611972809,0.3219086229801178,0.02195458486676216,-0.34669917821884155,0.012570575810968876,-0.08521316945552826,0.004410196095705032,0.3958800137042999,0.2668713629245758,0.043191585689783096,0.22420209646224976,0.19139063358306885,-0.009219196625053883,-0.21740376949310303,-0.11128866672515869,-0.09758075326681137,-0.28115904331207275,0.40098536014556885,0.09939265251159668,-0.23558838665485382,-0.0918639674782753,-0.044980455189943314,-0.1299184262752533,-0.5164978504180908,-0.22458086907863617,-0.131735160946846,0.08043024688959122,0.09854450821876526,-0.25555986166000366,-0.03236043080687523,-0.2712059020996094,-0.037392713129520416,0.12851546704769135,0.28855547308921814,-0.3792562484741211,-0.03329141065478325,0.2598113417625427,0.22907114028930664,0.05141532048583031,0.031025772914290428,0.21831122040748596,-0.09360266476869583,0.006968983449041843,-0.42526140809059143,0.2573096454143524,0.20383234322071075,0.8455406427383423,0.2787729501724243,0.50297611951828,0.37499454617500305,-0.0432574599981308,0.298515647649765,0.17458495497703552,0.16462261974811554,0.18056651949882507,0.2254607379436493,0.42288458347320557,0.36573168635368347,0.9145057797431946,0.9253101348876953,0.87165766954422,-0.018701640889048576,-0.08556859940290451,-0.13821402192115784,0.08149360120296478,-0.0014007093850523233,-0.1600998342037201,-0.10476922988891602,0.11629804968833923,-0.19402357935905457,0.04712390527129173,-0.2789390981197357,-0.19439831376075745,0.3272879421710968,0.09969022125005722,-0.2695567309856415,0.28862902522087097,0.23067228496074677,-0.33069178462028503,0.11979112029075623,0.2250141203403473,-0.15244506299495697,-0.19672925770282745,-0.25550130009651184,-0.4063166677951813,0.0914812833070755,0.08883873373270035,0.6364675760269165,0.34568527340888977,-0.0443829782307148,-0.27207866311073303,-0.17202159762382507,0.16827306151390076,0.27174821496009827,0.14936897158622742,0.11609220504760742,0.14114218950271606,-0.1052294448018074,0.12481106072664261,-0.08508055657148361,0.07127149403095245,-0.18092823028564453,-0.5979414582252502,-0.5948926210403442,-0.47171488404273987,-0.1740988790988922,-0.7709174752235413,-0.4629761576652527,-0.5353718996047974,-0.2607048749923706,-0.1647774577140808,-0.052938804030418396,-0.7776904106140137,-0.39357706904411316,-0.556359052658081,-0.5125492811203003,-0.4804951548576355,-0.2857739329338074,-0.1230720803141594,-0.13458287715911865,-0.1183372437953949,0.13246403634548187,-0.1838248074054718,-0.13168111443519592,-0.18012309074401855,0.07543111592531204,-0.0664462298154831,-0.12028233706951141,0.11617615818977356,-0.1258784830570221,-0.1625794917345047,-0.2056598961353302,-0.2293815016746521,-0.0521390363574028,-0.010620318353176117,-0.3588942289352417,-0.3504607677459717,-0.6914049983024597,-1.0716233253479004,-0.6627615094184875,-1.0313060283660889,-1.0190106630325317,-0.6337226033210754,-0.7071386575698853,-0.2247137576341629,-0.20699769258499146,0.05704977735877037,-0.134670689702034,0.13740284740924835,-0.09856721013784409,0.18806377053260803,0.1607969105243683,-0.03371197730302811,0.004916730336844921,0.14830051362514496,-0.11095906049013138,-0.07262789458036423,-0.16396529972553253,0.016030648723244667,0.031064128503203392,-0.08884897828102112,0.02166527509689331,0.033878426998853683,-0.1634744554758072,-0.16257144510746002,0.003377987304702401,-0.34694528579711914,0.0802299827337265,0.08785982429981232,-0.08675524592399597,-0.25361937284469604,-0.13906793296337128,0.06138916686177254,-0.03094627521932125,-0.09995492547750473,-0.07177769392728806,0.15332458913326263,0.08386874943971634,-0.190662682056427,0.18937304615974426],[0.12285733968019485,0.15882623195648193,0.22118109464645386,-0.10668773204088211,-0.09657446295022964,0.12500585615634918,-0.11048537492752075,0.18510833382606506,-0.008891748264431953,0.02842952311038971,-0.21441686153411865,0.13950586318969727,-0.34688088297843933,0.07978682965040207,-0.031033921986818314,-0.11235718429088593,0.02632269449532032,-0.24104274809360504,0.006417939905077219,0.05703555420041084,-0.15562570095062256,-0.02605871483683586,-0.01268769707530737,-0.1476522982120514,-0.07547621428966522,0.14463311433792114,-0.1051415503025055,0.09400726109743118,0.06484566628932953,-0.1424257904291153,-0.03677604719996452,-0.20112305879592896,-0.030022302642464638,0.1107984408736229,0.20634205639362335,-0.09481196850538254,0.29134148359298706,-0.16156572103500366,-0.04848414659500122,0.14582692086696625,-0.2879160940647125,-0.2956460416316986,-0.34667879343032837,0.09373456239700317,-0.08622750639915466,-0.1749097853899002,-0.04191363975405693,0.14996065199375153,-0.32857343554496765,-0.08084137737751007,0.018346423283219337,-0.1398240476846695,0.05950423330068588,0.18215759098529816,-0.09677808731794357,0.17643465101718903,-0.05873370170593262,-0.11471574008464813,0.018601594492793083,-0.04931553080677986,0.1414063274860382,-0.12205541133880615,-0.07480745017528534,0.03881383687257767,-0.10255531966686249,-0.05524521321058273,-0.3842090368270874,-0.35312336683273315,-0.22302161157131195,-0.31470414996147156,-0.7626184225082397,-0.6776419281959534,-0.49372997879981995,-0.2267252653837204,-0.1452920138835907,-0.1587669551372528,-0.1287827044725418,-0.2881927490234375,-0.39561620354652405,-0.18859989941120148,0.06308796256780624,0.10873732715845108,0.0994722917675972,0.10893569886684418,0.03001668117940426,-0.17817530035972595,0.16300281882286072,-0.14727245271205902,-0.08708077669143677,0.039298251271247864,-0.055368758738040924,-0.019506288692355156,0.2355455607175827,0.010773634538054466,-0.09806116670370102,0.4250349998474121,0.3950895667076111,-0.3064005970954895,0.2033952921628952,0.1526535451412201,0.2724080979824066,-0.5130162239074707,-0.8769204616546631,-1.123238205909729,-0.4108380973339081,-0.23494349420070648,-0.3617721199989319,-0.7557263374328613,-0.40186578035354614,0.1761869192123413,0.20836329460144043,-0.17119425535202026,0.15045425295829773,0.0661693662405014,-0.17106974124908447,-0.06068427115678787,-0.03912382945418358,0.10042594373226166,0.16590221226215363,0.33850082755088806,-0.2654060125350952,0.24479880928993225,0.39937350153923035,0.26232439279556274,-0.18966782093048096,0.0013916018651798368,-0.05209263414144516,-0.4836606979370117,-0.37122878432273865,0.24647635221481323,0.2824486196041107,-0.5936414003372192,-0.025334874168038368,-0.2401525378227234,-0.39485108852386475,-0.6193478107452393,-0.021897677332162857,0.3413403332233429,0.3552777171134949,-0.15934675931930542,-0.054645560681819916,0.028269566595554352,0.21261121332645416,-0.13925985991954803,0.09921897202730179,0.19640842080116272,0.20293356478214264,0.45787882804870605,0.44100522994995117,0.5498397946357727,0.6144251823425293,0.7514359951019287,0.9832119345664978,0.7189658880233765,-0.07635825127363205,0.3064098358154297,0.3771623969078064,0.8881807923316956,1.127820611000061,0.2007681280374527,0.9661049842834473,0.19028782844543457,0.1287449151277542,-0.2898319363594055,-0.20976725220680237,0.4445335865020752,0.2632303535938263,0.16677172482013702,-0.09803164005279541,0.19054526090621948,0.18154653906822205,-0.0030813238117843866,0.2997581362724304,0.4814963638782501,0.09663619101047516,-0.47211799025535583,-0.3558712899684906,-0.3832574188709259,0.2203207165002823,1.1932984590530396,0.8623448610305786,0.4683825969696045,0.1229667142033577,-0.2655600607395172,-0.2650577127933502,0.4902085065841675,0.5385972261428833,0.5854879021644592,0.6740301847457886,0.6420956254005432,0.44579675793647766,0.39078471064567566,0.4492424726486206,0.4976663291454315,0.11873208731412888,-0.037806931883096695,-0.22504711151123047,0.17773455381393433,0.06229199096560478,-0.16503725945949554,-0.0029710426460951567,0.13535937666893005,0.48727333545684814,0.0019116302719339728,0.4458703398704529,-0.5905084609985352,-0.9308326840400696,-0.08809227496385574,-0.27973270416259766,0.20878031849861145,0.5359625220298767,-0.17849653959274292,0.12244045734405518,0.1394321471452713,0.12317497283220291,0.1439809948205948,-0.055023860186338425,0.4694085121154785,0.628588080406189,0.4080076813697815,0.6099604368209839,0.6025803685188293,0.28618699312210083,0.07726101577281952,-0.09891561418771744,-0.1599881798028946,0.09288628399372101,-0.09734181314706802,0.029964743182063103,0.2158580869436264,0.5721778869628906,0.021553950384259224,0.898554265499115,0.7232885360717773,0.1280508190393448,0.3090344965457916,0.27928081154823303,0.05182405933737755,0.3373229503631592,0.30914074182510376,0.1700405329465866,0.2039216160774231,-0.044837433844804764,0.4631679654121399,-0.17653053998947144,0.18001361191272736,0.618521511554718,0.6137086749076843,1.1323274374008179,1.0032877922058105,0.6406548619270325,0.10229235142469406,-0.053552400320768356,0.07638776302337646,0.02922123298048973,0.2519345283508301,0.13875354826450348,0.19373174011707306,-0.0279073603451252,0.237508162856102,0.31616559624671936,0.3805740177631378,-0.53718101978302,0.4985145032405853,-0.11652914434671402,-0.39597100019454956,-0.4970861077308655,0.06894312798976898,-0.17522893846035004,0.42739513516426086,0.39316490292549133,0.5450392961502075,0.7511915564537048,0.6533609628677368,0.8450801372528076,1.0209214687347412,1.0255173444747925,1.3450020551681519,0.46264761686325073,0.11206845939159393,-0.07998569309711456,0.0907057672739029,0.11103352159261703,0.21136613190174103,-0.023335952311754227,0.1599578857421875,-0.35221850872039795,-0.11800951510667801,-0.16983681917190552,0.3165668845176697,-0.5092840194702148,-0.4858914017677307,-0.6211846470832825,0.09369383752346039,-0.2156582921743393,-0.30080071091651917,-0.569297194480896,-0.35775595903396606,-0.301729291677475,0.038815971463918686,0.04952740669250488,0.8034737706184387,0.6784490346908569,1.2022616863250732,1.6496105194091797,1.2856183052062988,0.48438745737075806,0.17997318506240845,0.25759240984916687,-0.008500364609062672,-0.0365733839571476,-0.10828235745429993,-0.26053112745285034,-0.5510894060134888,-0.12807202339172363,-0.6117414236068726,-0.018647370859980583,-0.3376133441925049,-0.3530181050300598,0.7265799045562744,0.140354186296463,0.2934211194515228,-0.6087906360626221,0.37070682644844055,-0.7372524738311768,-0.5976945757865906,-0.5798971652984619,-0.22936448454856873,-0.6825282573699951,-0.4068744480609894,-0.1320084184408188,1.2871086597442627,1.8602900505065918,1.0724655389785767,0.512406587600708,0.2592441737651825,0.05779897794127464,0.13201260566711426,0.11899763345718384,-0.12983769178390503,-0.21891403198242188,-0.2221701294183731,0.01914811134338379,-0.9067226648330688,-0.25613081455230713,-0.37660807371139526,0.43745943903923035,0.5501741170883179,0.2979358434677124,1.033460259437561,0.3866821825504303,-0.2878401279449463,0.39430850744247437,-0.13145142793655396,-0.7392930388450623,0.2059742659330368,-0.4850425124168396,-1.1604843139648438,-1.172917366027832,-0.19811134040355682,0.672217607498169,0.5829140543937683,0.4137486517429352,0.22428396344184875,-0.14982527494430542,0.27475422620773315,0.15696345269680023,0.12408461421728134,-0.47151023149490356,-0.536770761013031,0.037549033761024475,-0.39969390630722046,-0.5338613986968994,-0.06710349768400192,-0.46879252791404724,-0.3116483688354492,0.5405543446540833,0.7870727181434631,-0.3800250291824341,-0.42610248923301697,-0.39899808168411255,-0.7709534168243408,0.020665982738137245,-0.8454275727272034,-0.3041136562824249,-1.3647302389144897,-0.9052509665489197,-0.5414016246795654,-0.3266591429710388,0.16625431180000305,0.18801254034042358,0.29686740040779114,0.12430722266435623,-0.09708970040082932,0.1400146484375,0.0024154502898454666,-0.2906094789505005,-0.6665840148925781,0.02217298373579979,-0.22842499613761902,-0.3305363655090332,0.15209466218948364,-0.5485934615135193,0.3466552495956421,0.9746829271316528,0.26445743441581726,-0.38578203320503235,-0.44632741808891296,-0.916145384311676,0.16848593950271606,-0.3985169231891632,-0.6983503103256226,-0.7746003270149231,-0.5854843258857727,-0.41116079688072205,-0.7040391564369202,-0.4883611500263214,-0.1419256031513214,0.14977751672267914,0.18502797186374664,-0.0794985219836235,0.04887944087386131,0.24091243743896484,-0.07053864747285843,0.015427978709340096,-0.27250248193740845,0.17627786099910736,-0.15617814660072327,0.1461297571659088,0.11370337754487991,0.18100106716156006,0.08374673873186111,1.0766191482543945,0.5749360918998718,-0.3984437882900238,-0.5479620695114136,0.03206977993249893,-0.7850801348686218,-0.6795159578323364,-0.2343653291463852,-0.48013004660606384,-0.5443729758262634,-0.08489002287387848,-0.7379139065742493,-0.11779717355966568,0.3669894337654114,0.3012734353542328,0.09844918549060822,0.05261612311005592,-0.09980849921703339,0.22715838253498077,0.3791602551937103,0.14531052112579346,0.4302577078342438,-0.049982935190200806,-0.5029246807098389,-0.27840927243232727,-0.002776878420263529,-0.18585380911827087,-0.07295722514390945,0.951296865940094,0.6843770742416382,-1.14759361743927,-0.958747923374176,-0.2418578714132309,-0.47576209902763367,-0.4606536030769348,0.2445230484008789,-0.5146917700767517,-0.5136905312538147,0.25293755531311035,-0.4287252426147461,0.0746258795261383,-0.11203190684318542,0.12568069994449615,0.054466839879751205,0.1952701210975647,0.040829770267009735,0.3183203339576721,0.788730800151825,0.4738103449344635,1.1115409135818481,0.08436843752861023,-0.29080846905708313,0.11203397810459137,0.4993915855884552,-0.1569940745830536,-0.21355554461479187,-0.7538368105888367,-1.1987043619155884,-0.9357143640518188,-1.0400700569152832,-0.845967710018158,-0.6713061928749084,-0.1651168018579483,0.20392322540283203,-0.02927241101861,-0.06682130694389343,0.05168541520833969,0.05810179561376572,-0.09414584934711456,0.16360749304294586,0.025869078934192657,0.06643544882535934,0.05448851361870766,-0.04710648953914642,-0.12704430520534515,0.5296023488044739,0.5099877119064331,1.077528715133667,0.7698312401771545,-0.12904979288578033,0.23375044763088226,0.09877609461545944,0.6093975901603699,0.28329068422317505,0.27867037057876587,0.1369476020336151,-0.1340269297361374,-0.14614959061145782,-0.10824432969093323,0.6249516010284424,0.034596748650074005,0.2680450975894928,0.2347930669784546,-0.543145477771759,-0.14192458987236023,0.9269278049468994,-0.07706452906131744,0.054594289511442184,-0.053402379155159,-0.11237750947475433,0.1282329261302948,0.10411249846220016,0.09263812750577927,0.18935805559158325,0.5525810718536377,0.8883681893348694,0.6015198230743408,0.4753459393978119,1.2284015417099,0.8026068806648254,-0.400177001953125,-0.6851710081100464,-0.0563008189201355,0.07147601246833801,-0.7855437994003296,-0.5368912220001221,0.04622209072113037,-0.3156587481498718,0.3141390085220337,0.10236352682113647,-0.03250826895236969,-0.4555779695510864,0.8491498827934265,0.8100401163101196,0.20287208259105682,0.13321806490421295,-0.11783906072378159,0.15004828572273254,0.17439347505569458,0.10354018956422806,0.37662723660469055,0.35149088501930237,0.8169989585876465,1.2886706590652466,1.073912262916565,1.0827243328094482,0.8552271127700806,1.6345007419586182,0.42543303966522217,-0.17399780452251434,-0.5113455057144165,-0.48697227239608765,-0.8565850257873535,-0.11222215741872787,0.06149757280945778,-0.9934066534042358,-0.36994925141334534,0.27837613224983215,0.21791322529315948,0.8985915184020996,1.6658978462219238,0.4303834140300751,-0.21167494356632233,-0.24184659123420715,-0.17100346088409424,-0.1970648169517517,0.20762529969215393,0.19314344227313995,0.15012730658054352,0.3107224702835083,0.8085215091705322,1.0960010290145874,1.4851305484771729,0.6733249425888062,0.04646867886185646,0.848084568977356,0.3450488746166229,-0.06660687178373337,-0.42083480954170227,0.5836885571479797,0.6879253387451172,-0.1645916849374771,-0.2929668426513672,0.036670587956905365,0.32972779870033264,1.2500801086425781,0.24587982892990112,1.1208560466766357,1.007767677307129,-0.2614939212799072,-0.5486726760864258,-0.03898044303059578,-0.10777665674686432,-0.11731364578008652,0.11009897291660309,0.06831219792366028,0.2427910417318344,0.3787623643875122,0.47407156229019165,0.5137312412261963,0.9965710043907166,0.5140674114227295,-0.029992995783686638,0.13703417778015137,1.0311225652694702,1.7484402656555176,0.8851968050003052,0.6710131764411926,-0.3637898564338684,-0.0506298765540123,0.1566540151834488,0.23422229290008545,0.5813055038452148,0.40237659215927124,0.6559882164001465,0.07084047794342041,0.2550933063030243,0.016807083040475845,-0.047424864023923874,-0.17638996243476868,-0.1454019546508789,0.09781181067228317,0.21199165284633636,-0.08235464990139008,0.17691360414028168,0.07736873626708984,0.6777819991111755,0.41774195432662964,-0.2615712881088257,-0.17919132113456726,0.5247771739959717,0.24009406566619873,0.403877317905426,1.0938279628753662,0.5816869139671326,0.7927476167678833,0.9989494681358337,1.4767920970916748,0.9405510425567627,0.8267443776130676,-0.11373504251241684,-0.5931218266487122,-0.13353891670703888,0.15709586441516876,0.7330935001373291,0.3395368158817291,-0.098287433385849,0.15903615951538086,-0.12340732663869858,-0.10380944609642029,-0.14428724348545074,0.19525481760501862,-0.1388808637857437,0.17084774374961853,0.336944580078125,0.09832711517810822,-0.355890154838562,-0.09571505337953568,0.334562748670578,-0.37069812417030334,-0.18774935603141785,0.3222806453704834,0.6200854182243347,0.34253036975860596,1.2433383464813232,0.36151137948036194,0.4589030146598816,0.25913283228874207,0.942649781703949,0.329032301902771,0.25311484932899475,0.4316031038761139,0.3307214081287384,-0.04131658747792244,-0.10691575706005096,0.1456747055053711,0.04687216505408287,-0.1693211793899536,-0.1665259450674057,-0.17602983117103577,-0.09350956231355667,-0.010265425778925419,-0.2524946630001068,-0.17785052955150604,-0.1497669219970703,-0.14091484248638153,-0.12246188521385193,0.47170743346214294,0.0055268085561692715,0.23746460676193237,1.0374058485031128,0.45891687273979187,-0.6641955375671387,0.5860490202903748,0.0870724692940712,0.21572573482990265,0.613774299621582,0.46807870268821716,0.3713676929473877,0.04888651892542839,-0.02399924024939537,0.27152350544929504,0.0184157881885767,0.011494764126837254,0.1466018110513687,0.056526411324739456,-0.20555388927459717,0.2041330486536026,0.09885391592979431,0.1642911583185196,-0.11485292762517929,-0.16173142194747925,-0.12321101874113083,-0.07828689366579056,-0.4511512517929077,-0.7588399648666382,-0.04383709281682968,0.2520909011363983,-0.25976574420928955,-0.39051106572151184,0.06848282366991043,-0.05664052814245224,-0.0696074590086937,-0.07873247563838959,-0.2561524212360382,-0.03546379506587982,0.020504742860794067,0.12101880460977554,-0.1546141654253006,-0.21297764778137207,-0.09038890898227692,0.07405007630586624,0.07953748852014542,0.03664097934961319,0.09114363044500351,0.029349885880947113,0.026232540607452393,-0.1329018473625183,-0.10795941948890686,0.057770874351263046,0.16670362651348114,0.03780221939086914,0.15456043183803558,-0.24259160459041595,-0.2040225863456726,-0.19936645030975342,-0.2806167006492615,-0.2826439142227173,-0.06464628130197525,0.0003452818200457841,-0.13794749975204468,0.020299796015024185,0.019847910851240158,0.040775030851364136,-0.08514416217803955,-0.11026609688997269,-0.12641531229019165,0.09959575533866882,-0.19789986312389374,0.09870287775993347,0.1744384765625,0.13534268736839294],[-0.13970239460468292,0.13923846185207367,0.104752317070961,0.11066681146621704,-0.16340552270412445,0.053567420691251755,-0.1350477635860443,0.0926373153924942,-0.22301128506660461,-0.19947311282157898,-0.19614307582378387,0.09133023768663406,-0.15973226726055145,-0.0028745587915182114,-0.1821424812078476,-0.13092415034770966,-0.20533597469329834,0.0019877469167113304,0.16207486391067505,-0.062174636870622635,-0.032426781952381134,-0.11131469905376434,-0.001989771146327257,0.13636165857315063,-0.18266986310482025,0.1783810406923294,0.09971986711025238,-0.08963260799646378,0.12732721865177155,0.021056601777672768,0.16561327874660492,0.030282434076070786,0.11668868362903595,-0.037039123475551605,0.21422134339809418,-0.10235127806663513,0.005276711191982031,0.20446717739105225,-0.009212967939674854,0.14403298497200012,-0.190728560090065,-0.17298980057239532,-0.01642105169594288,-0.02255883440375328,0.17378762364387512,-0.08527138084173203,0.08072742074728012,0.029353218153119087,-0.12943358719348907,0.12192749232053757,-0.06290008872747421,-0.06716437637805939,0.13962681591510773,-0.14177022874355316,-0.002621474675834179,-0.14489313960075378,-0.09973958134651184,-0.11068445444107056,0.09660810232162476,0.16649679839611053,0.08655890822410583,-0.09801261872053146,0.13001076877117157,-0.17190761864185333,-0.34345781803131104,-0.1424351930618286,-0.14711204171180725,-0.11141054332256317,-0.17304779589176178,-0.37917613983154297,-0.2899019718170166,-0.099504753947258,-0.2189176082611084,-0.32478412985801697,-0.25362005829811096,-0.2526809871196747,-0.2676042318344116,-0.029805932193994522,-0.020715367048978806,-0.20302055776119232,-0.152505561709404,-0.0740956962108612,-0.124411441385746,-0.14433258771896362,0.05497968941926956,-0.04329027608036995,-0.0589323528110981,0.17221738398075104,0.08480971306562424,-0.021540656685829163,0.01128797885030508,-0.24898143112659454,0.2692568302154541,0.0793495923280716,0.0853138342499733,-0.22917599976062775,0.3482193648815155,0.22476895153522491,0.3625529110431671,0.4946310222148895,-0.39161428809165955,-0.8392117023468018,-0.24301163852214813,-0.4456195831298828,0.09525708109140396,-0.10641191899776459,0.08380556106567383,-0.1456780880689621,-0.1671416312456131,-0.14641337096691132,-0.013557735830545425,-0.1450498402118683,-0.14320138096809387,0.13475202023983002,0.049899108707904816,0.14999361336231232,-0.20610181987285614,0.14421778917312622,-0.035548850893974304,-0.10961369425058365,0.3576885461807251,-0.04670349508523941,0.20342564582824707,0.20016534626483917,0.5059322118759155,0.8080187439918518,0.06735438108444214,-0.30051055550575256,-0.9245687127113342,-1.8285248279571533,-1.0054430961608887,-0.44006386399269104,-0.09228560328483582,0.19007547199726105,0.15085744857788086,-0.010738815180957317,-0.18022421002388,-0.16778302192687988,-0.13856515288352966,-0.14356999099254608,0.11002762615680695,-0.034528862684965134,0.16277314722537994,0.134858176112175,-0.12205210328102112,0.2759481370449066,0.20277926325798035,0.352229505777359,0.557848334312439,0.6633691191673279,0.7109048366546631,0.9564631581306458,0.15582509338855743,0.09354793280363083,0.8880417943000793,0.6669703125953674,0.20961153507232666,-0.8857210278511047,-1.3195492029190063,-0.8443924188613892,-0.6771370768547058,-0.465807169675827,-0.1599654108285904,-0.14284493029117584,-0.1416648030281067,-0.16658452153205872,-0.029993297532200813,0.017312223091721535,0.04433638975024223,0.16533851623535156,0.05278051644563675,-0.038423288613557816,0.00552582461386919,0.21341532468795776,0.7284536361694336,0.7047710418701172,0.04306632652878761,-0.14854171872138977,-0.07537925988435745,0.3588956296443939,0.5361596941947937,-0.1705709844827652,-0.1511097252368927,-0.21483927965164185,-0.021536357700824738,-0.844538152217865,-0.9881371259689331,-1.1695524454116821,-0.4315236210823059,-0.051101576536893845,-0.2570042610168457,-0.26033589243888855,-0.40386420488357544,-0.3491525948047638,0.1392032355070114,-0.08294962346553802,-0.09113379567861557,0.14790461957454681,0.3132805824279785,0.2671704888343811,0.8248652219772339,0.08586737513542175,0.15947861969470978,0.45323267579078674,-0.4146370589733124,-0.7990099191665649,-0.5111980438232422,-0.2013261318206787,-0.6419297456741333,-0.5143016576766968,-0.6259008646011353,-0.6775125861167908,-0.2384789139032364,-0.8450047969818115,-1.088877558708191,-0.5313518643379211,-0.22450870275497437,0.13692492246627808,-0.47526854276657104,-0.33576202392578125,-0.2863105535507202,-0.19280868768692017,-0.214617058634758,-0.1857161670923233,0.021906917914748192,0.1862209588289261,0.32381704449653625,0.6061497330665588,0.5347732901573181,0.6318434476852417,-0.04861561954021454,0.657133936882019,0.11086693406105042,-0.874201774597168,0.1257917881011963,-0.02907312475144863,0.6375861763954163,0.47472435235977173,0.9953473806381226,1.1701281070709229,0.4436229169368744,-1.0350059270858765,-1.0279805660247803,-0.16750384867191315,-0.34955355525016785,-0.10945845395326614,0.18954558670520782,0.14666511118412018,-0.21217606961727142,-0.36152932047843933,0.015870554372668266,-0.11342699080705643,0.19348563253879547,0.024787381291389465,0.37420931458473206,0.21339181065559387,0.21321703493595123,0.971036434173584,0.6524599194526672,0.39264005422592163,0.5491434931755066,-0.11940646916627884,-0.25220707058906555,0.18273498117923737,0.18867304921150208,0.847364604473114,1.7008702754974365,0.4348568618297577,0.05773404240608215,-0.5945954322814941,-0.21978023648262024,-0.10679497569799423,-0.1824917495250702,0.3868142068386078,0.0928596630692482,0.13101400434970856,-0.3262338638305664,-0.11016937345266342,0.08487249165773392,0.086354561150074,-0.053328223526477814,0.015097491443157196,0.2663329243659973,0.21385295689105988,0.2834298610687256,0.7292232513427734,0.21752679347991943,0.133427232503891,-0.2120402604341507,-0.051729965955019,0.6120656728744507,0.12284300476312637,0.04719538241624832,1.5000988245010376,1.3549243211746216,-0.2630765438079834,-0.6005712747573853,-0.37825217843055725,0.5266783237457275,0.1174226924777031,0.10233903676271439,0.11281922459602356,0.48005303740501404,0.24210523068904877,-0.48976996541023254,-0.2007988542318344,-0.050951696932315826,-0.16979707777500153,-0.08300194889307022,0.18169011175632477,0.474458247423172,0.5778196454048157,0.3734157085418701,0.4675520658493042,-0.4705204963684082,0.5566239356994629,-0.6998093724250793,-0.21396876871585846,0.5140986442565918,-0.3341327905654907,0.2908264100551605,1.3317852020263672,0.9491144418716431,0.6087213754653931,-1.1699422597885132,-0.6876527070999146,0.1171686127781868,0.279813289642334,-0.024179596453905106,-0.02089434489607811,-0.18047161400318146,-0.6253865957260132,-0.2675166130065918,-0.2733023762702942,-0.2281387746334076,0.13346712291240692,-0.11425194144248962,0.07098130881786346,0.7509075403213501,0.5637144446372986,0.10964077711105347,0.7074397802352905,0.1086849793791771,0.39613059163093567,0.21337969601154327,0.4959096610546112,0.1905893087387085,0.3340785503387451,0.4765075147151947,0.17047958076000214,0.18904124200344086,-0.39006102085113525,-0.6509503126144409,0.08532378822565079,0.43287941813468933,-0.18601356446743011,-0.35762888193130493,0.1660449206829071,-0.11748563498258591,-0.8819129467010498,-0.4415593147277832,-0.17053930461406708,0.16911879181861877,0.15275098383426666,-0.11907367408275604,0.09963557869195938,0.06180625781416893,-0.1908418983221054,-0.14819753170013428,0.6668643951416016,0.015507024712860584,-0.05607755109667778,-0.328675776720047,-0.24562875926494598,-0.05496273934841156,-0.26281997561454773,0.24970652163028717,-0.90647953748703,0.2615009546279907,-0.7022689580917358,-0.3069777488708496,-0.8083084225654602,0.3757847249507904,-0.7498520016670227,-0.32268625497817993,0.23516012728214264,-0.3173673748970032,-0.7546888589859009,-0.5420014262199402,0.20404788851737976,0.013033364899456501,-0.05684530362486839,-0.08041508495807648,-0.020091377198696136,0.08564886450767517,0.007021091412752867,-0.01809723488986492,-0.008345367386937141,-0.7382681965827942,-0.7271371483802795,-0.5123655200004578,-0.5113034248352051,0.11612625420093536,-0.4337129294872284,-1.1226181983947754,-0.6153523921966553,0.39708200097084045,0.11878896504640579,-0.7896275520324707,-0.49560898542404175,0.0920119658112526,-0.17491622269153595,-0.0400482602417469,0.8608934879302979,-0.20818477869033813,-0.3008369207382202,-0.6298253536224365,0.013751932419836521,-0.10046800971031189,-0.17538177967071533,-0.08287391066551208,0.2055179923772812,-0.022998007014393806,-0.19631749391555786,0.08135528862476349,-0.5599284768104553,-0.20822075009346008,0.005041494965553284,0.44607582688331604,0.8528681397438049,0.6342369318008423,-0.9166719317436218,-1.8393079042434692,-0.8136910796165466,0.39993077516555786,-0.17575529217720032,-0.4619643986225128,0.8671010732650757,0.47356194257736206,0.23681066930294037,-0.024832135066390038,0.3979620933532715,0.09229763597249985,-0.42141106724739075,-0.6742063760757446,0.040964528918266296,-0.17830854654312134,-0.07025348395109177,-0.0401686355471611,-0.11668535321950912,-0.036159537732601166,0.18160411715507507,0.015777522698044777,-0.08210334926843643,0.5566312670707703,0.294763445854187,0.39126765727996826,0.5013170838356018,-0.18729782104492188,-1.3667162656784058,-1.6318836212158203,-0.35556885600090027,0.5413535833358765,-0.1731729507446289,-0.6497365236282349,-0.49353843927383423,-0.12435904890298843,-0.12042353302240372,0.1754971146583557,0.49713096022605896,0.03816060721874237,-0.31646525859832764,0.35707181692123413,-0.09538424760103226,-0.006252134218811989,-0.011207268573343754,-0.15145480632781982,-0.10731806606054306,-0.1769968420267105,-0.0396793894469738,0.1059873104095459,-0.1239338293671608,0.45536932349205017,-0.15841127932071686,-0.058866266161203384,-0.10249955207109451,-1.1400665044784546,-1.8133116960525513,-1.1560890674591064,-0.1419312059879303,0.40981927514076233,0.34140074253082275,0.015435399487614632,-0.11060844361782074,0.030144086107611656,0.37899741530418396,0.6602794528007507,0.47871190309524536,0.5064500570297241,0.5920748114585876,0.7741008400917053,0.20593437552452087,0.2718345820903778,0.13174667954444885,-0.058066226541996,0.18401478230953217,-0.04725774750113487,-0.16178284585475922,-0.017632076516747475,-0.08062461018562317,-0.5226271152496338,-0.49160394072532654,-0.29148179292678833,-0.9339593648910522,-1.079971194267273,-0.8054129481315613,-0.10064633190631866,0.6167009472846985,-0.08195119351148605,-0.14521515369415283,0.3872111439704895,-0.2129763960838318,0.2732492983341217,-0.586473286151886,0.24413982033729553,0.10986543446779251,-0.07563361525535583,0.13806788623332977,0.22886009514331818,0.27256569266319275,-0.10630352050065994,0.16296324133872986,-0.000850579293910414,-0.05083264037966728,0.0641123354434967,-0.19198980927467346,-0.22412770986557007,-0.389805406332016,-0.859906017780304,-0.45897966623306274,-0.13684624433517456,-1.6013401746749878,-1.2283997535705566,-0.757021427154541,-0.11489439010620117,0.5824205875396729,-0.006792822387069464,-0.33720460534095764,0.08331593871116638,0.202377051115036,0.18486928939819336,-0.18800824880599976,-0.3769364655017853,-0.3635893166065216,-0.4973740875720978,0.3020124137401581,0.39847442507743835,0.10552620142698288,0.1732977032661438,0.08381278067827225,-0.021615931764245033,0.16506947576999664,-0.04014882445335388,-0.24576863646507263,-0.39832237362861633,-0.3003237843513489,-0.49329856038093567,-0.4942193031311035,-0.47950536012649536,-1.0999397039413452,-0.17282883822917938,-0.1854790449142456,-0.0073507376946508884,0.1534557342529297,0.8487952351570129,-0.13983027637004852,0.18117468059062958,0.6676000356674194,-0.25163087248802185,-0.1233285591006279,-0.22610671818256378,-0.461233526468277,-0.49666762351989746,0.26722413301467896,0.0891786739230156,0.20848903059959412,0.01572529412806034,-0.17596790194511414,0.11124414950609207,0.13307107985019684,0.08169686049222946,-0.14763948321342468,-0.24727590382099152,-0.12636698782444,-0.7572000622749329,-0.9590592384338379,-0.5790797472000122,-0.38076096773147583,0.14737987518310547,0.14395293593406677,-0.24019715189933777,0.137518972158432,-0.8350349068641663,0.19358250498771667,0.18487800657749176,0.3493488132953644,-0.3482700288295746,-0.09810071438550949,-0.08363930135965347,-0.6005811095237732,-0.2757874131202698,0.01288547646254301,-0.18926678597927094,-0.19436874985694885,0.16100500524044037,0.17899905145168304,0.026994619518518448,0.17762254178524017,0.0028153189923614264,-0.1205122321844101,-0.19991031289100647,-0.35701984167099,-0.39251887798309326,-0.9859458804130554,-0.4765358865261078,0.07194428145885468,-0.004858650732785463,-0.5605339407920837,-0.063332200050354,0.6481720209121704,-0.24099616706371307,0.16698484122753143,-0.1117560863494873,0.3716695010662079,0.1922171711921692,0.6412544250488281,-0.13061021268367767,-0.5784964561462402,-0.4533471167087555,-0.2569710612297058,-0.04063313081860542,-0.1251784712076187,-0.15076957643032074,-0.029339952394366264,0.07687356323003769,0.03283257409930229,-0.13031139969825745,-0.019098490476608276,0.1522369533777237,0.32561057806015015,-0.0974065288901329,-0.28883668780326843,-0.42497873306274414,0.21062114834785461,0.03896281495690346,-0.8564231991767883,0.16821807622909546,0.2951882481575012,-0.03470126911997795,0.050319425761699677,-0.33644017577171326,-0.40021809935569763,-0.705828845500946,-0.11137553304433823,-0.06997929513454437,-0.35394707322120667,-0.4536299407482147,-0.3500552475452423,0.16267956793308258,0.1026318147778511,-0.12858165800571442,-0.16338881850242615,-0.07002449780702591,-0.07509820908308029,-0.08629056066274643,-0.19477646052837372,-0.14832255244255066,0.4176155924797058,0.2657718360424042,0.20622244477272034,-0.41645100712776184,0.05361698567867279,0.0827961340546608,-0.16887573897838593,0.2858918607234955,0.4524996876716614,-0.30354374647140503,0.1508249044418335,-0.05572744086384773,-0.022046290338039398,-0.7215886116027832,-0.35870927572250366,-0.3802538514137268,0.0024742011446505785,-0.22621119022369385,-0.16197927296161652,0.0018337322399020195,-0.1745469570159912,-0.19469012320041656,0.05565565079450607,0.15583355724811554,-0.15551158785820007,-0.09888174384832382,0.1396333873271942,-0.276902437210083,0.1613219976425171,0.1800210028886795,0.25592896342277527,-0.1698327660560608,0.036291252821683884,0.11650370806455612,-0.2283743917942047,0.6870708465576172,-0.04166637361049652,0.39330270886421204,0.37984323501586914,0.7800314426422119,0.6935297846794128,-0.3529193103313446,0.14005184173583984,-0.0002632348914630711,0.03090812638401985,0.08129166811704636,-0.013209030963480473,0.003459394443780184,0.07157744467258453,0.06255783140659332,-0.03934807330369949,-0.1302710324525833,0.049796875566244125,-0.005882562138140202,0.09637141972780228,0.011838176287710667,0.10884171724319458,-0.03659075126051903,0.12694387137889862,-0.041450463235378265,-0.10678020864725113,-0.05124426633119583,-0.19443441927433014,-0.34552597999572754,-0.3509616255760193,-0.3021499514579773,-0.3558045029640198,0.053001079708337784,0.20551273226737976,0.07558222115039825,0.17758606374263763,-0.05430033057928085,-0.3041854798793793,0.26789340376853943,0.14749906957149506,0.15383844077587128,0.12072831392288208,-0.09009868651628494,-0.036991361528635025,-0.09656503796577454,-0.0831003189086914,-0.15500508248806,0.005655146669596434,0.13467416167259216,0.12784837186336517,-0.17252318561077118,0.14681899547576904,-0.07713703066110611,0.13580560684204102,-0.1007765382528305,-0.12650686502456665,-0.3162956237792969,-0.05720141530036926,0.01674499362707138,0.017744559794664383,-0.04184983670711517,0.19938357174396515,-0.05384474992752075,0.3608764410018921,0.22982977330684662,-0.08276908844709396,0.21401990950107574,-0.006324188783764839,-0.15339069068431854,0.18391500413417816,0.16622696816921234,-0.17289358377456665],[-0.1255386620759964,0.06265215575695038,0.1000441461801529,0.17303255200386047,-0.08404964953660965,0.1483977884054184,0.03071199357509613,-0.1955837458372116,-0.11558734625577927,-0.19111798703670502,-0.07733172178268433,-0.057507921010255814,-0.018819887191057205,-0.24304118752479553,-0.173005148768425,-0.04892599582672119,-0.2497849464416504,0.2378193587064743,-0.1134796142578125,0.1530866175889969,-0.03279285132884979,0.021296273916959763,-0.08261974900960922,-0.18887859582901,-0.11059983819723129,0.18051016330718994,0.051494136452674866,0.1748645007610321,-0.05348998308181763,-0.14354240894317627,-0.1746353656053543,-0.1770855039358139,0.1552431881427765,-0.0680009126663208,0.19665883481502533,-0.11774027347564697,-0.21875949203968048,-0.021260259672999382,-0.18012358248233795,0.2024887204170227,0.03624842315912247,-0.2997211515903473,0.064118891954422,0.3432794213294983,0.022211303934454918,0.002618079772219062,-0.09427494555711746,0.05729807913303375,0.07504571229219437,0.08153502643108368,-0.08285334706306458,0.08817220479249954,-0.048966728150844574,0.056169889867305756,-0.09772016108036041,0.14193236827850342,-0.18399222195148468,0.07343527674674988,0.07280635833740234,-0.1187988743185997,0.13351942598819733,0.015758035704493523,-0.13890543580055237,0.1289036124944687,-0.34801897406578064,-0.3342049717903137,0.05393765866756439,-0.08970469236373901,-0.1714865118265152,-0.10319172590970993,0.2246009111404419,0.19877439737319946,0.11640755832195282,-0.14517854154109955,-0.16189593076705933,0.02515949308872223,-0.21359188854694366,0.041364822536706924,0.008768266066908836,-0.19390936195850372,-0.06820898503065109,-0.026403512805700302,-0.11712577939033508,-0.009510720148682594,0.017115434631705284,-0.08571746200323105,-0.034861017018556595,-0.17392389476299286,-0.07788170129060745,-0.05112585797905922,0.12271706759929657,-0.03565298020839691,-0.15151281654834747,-0.5762576460838318,-0.08074475079774857,-0.6357064843177795,-0.8920965790748596,-0.9807567596435547,-0.7052544951438904,-0.7433435916900635,-0.48590049147605896,-0.450924813747406,-1.0163880586624146,-0.3418178856372833,-0.055675800889730453,0.22741365432739258,-0.16281366348266602,-0.07547837495803833,-0.05747722089290619,0.028771329671144485,0.13253933191299438,-0.0729280635714531,0.1225656047463417,-0.18181736767292023,0.04516119882464409,0.14124137163162231,-0.09041443467140198,-0.12079211324453354,-0.061579253524541855,0.08919555693864822,-0.5344077348709106,-0.3428018093109131,-0.36697742342948914,-0.6967716813087463,-0.9654670357704163,-0.8478596806526184,-0.17554815113544464,-0.12528494000434875,0.5013346076011658,-0.3737994432449341,-0.30730903148651123,0.4523683190345764,0.35651472210884094,0.014342512004077435,-0.5605641603469849,-0.2834455668926239,-0.00558870704844594,0.0020124996080994606,-0.30772119760513306,0.03447721526026726,-0.024762913584709167,-0.023181313648819923,-0.11058762669563293,0.08225799351930618,-0.15014009177684784,-0.2117733508348465,-0.22864197194576263,-0.05645306780934334,-0.9564163684844971,-0.8523587584495544,-1.0097187757492065,-0.4543629288673401,-0.8443560004234314,-0.9367660284042358,0.4300917387008667,-0.5438740253448486,-0.629605233669281,-0.42744746804237366,-0.4221988916397095,-0.6214437484741211,-0.12982399761676788,0.043290380388498306,0.14219598472118378,0.024760598316788673,-0.1944980025291443,-0.3763531446456909,-0.03630829602479935,0.14379680156707764,0.17137587070465088,-0.06882092356681824,-0.03364557400345802,-0.019445931538939476,0.13393044471740723,-0.3574272096157074,-0.4800693392753601,-0.6922568678855896,-1.028928518295288,-1.124799132347107,-1.2591887712478638,-0.5381477475166321,-1.507034182548523,-0.8764132857322693,-0.2832326889038086,-1.0134435892105103,-0.015704859048128128,-0.6347308158874512,-0.3201844394207001,-0.6105034947395325,-0.3270752727985382,0.05829372629523277,0.4916335344314575,-0.3401489555835724,-0.3308161497116089,-0.4904664158821106,0.08232612907886505,0.018465839326381683,0.07944569736719131,0.07985970377922058,-0.1677011102437973,-0.13988375663757324,-0.08893552422523499,-0.26776549220085144,-0.5027453899383545,-0.7085164785385132,-1.1072540283203125,-1.1231164932250977,-0.9274085164070129,-0.13234008848667145,0.3362181782722473,-0.16183125972747803,-0.3025813400745392,-1.317121148109436,-0.7283396124839783,-0.39621490240097046,-0.27387914061546326,0.2735646665096283,0.6644856333732605,-0.06258969753980637,-0.2416587769985199,0.07438020408153534,-0.3059977889060974,-0.412188321352005,0.04288388043642044,0.020055776461958885,0.0571306087076664,-0.13567818701267242,-0.022968534380197525,0.14095619320869446,-0.17787741124629974,-0.24357359111309052,-0.5312917828559875,-0.6108385920524597,-1.325299859046936,-1.0158843994140625,-0.4367806017398834,-0.5496931672096252,-0.0027041989378631115,0.1607767641544342,0.00538305938243866,-0.1434934139251709,-0.1894754022359848,-0.2593209445476532,0.09539935737848282,0.2160869985818863,-0.25468435883522034,-0.46546274423599243,-0.10250819474458694,-0.24726602435112,-0.6459232568740845,-0.3326168954372406,-0.19876860082149506,-0.1835440695285797,0.18812277913093567,0.16129536926746368,0.17528095841407776,0.039565179497003555,-0.1724998652935028,-0.1893218755722046,-0.6705384850502014,-0.7852872610092163,-1.3004578351974487,-1.202449917793274,0.04405883699655533,0.029533617198467255,-0.20797035098075867,0.4375401735305786,0.081673264503479,1.031511902809143,1.7602243423461914,-0.7219603061676025,0.022502552717924118,-0.41329824924468994,-0.6596302390098572,-0.09064716100692749,-0.6205150485038757,-0.9488611817359924,-0.8349856734275818,-0.4168454706668854,-0.06545408070087433,-0.029282957315444946,0.07068558782339096,-0.05905253440141678,-0.2191842794418335,-0.038870953023433685,-0.17513681948184967,-0.45221686363220215,-0.5727978348731995,-0.40632110834121704,-0.9309751987457275,-0.6849039793014526,-0.17788834869861603,1.107856035232544,0.6166734099388123,0.5844044089317322,0.6719514727592468,2.2106921672821045,1.1580289602279663,-0.42293262481689453,-0.07791869342327118,-0.5375389456748962,-0.7636382579803467,-0.639117419719696,-0.749897301197052,-0.6018218398094177,-0.29875728487968445,-0.33073437213897705,-0.031988296657800674,0.05407368764281273,0.1339758187532425,-0.1736314743757248,0.08575419336557388,-0.21787004172801971,0.053908128291368484,-0.197640061378479,-0.3026137351989746,-0.2901463806629181,-1.1363919973373413,-0.9737342000007629,-0.7715336084365845,-0.29830238223075867,-0.19900564849376678,0.5853440761566162,0.42753422260284424,1.2788397073745728,0.6122509241104126,-0.1720365732908249,0.22423279285430908,0.13324402272701263,-0.41951248049736023,-0.5187229514122009,-0.3136709928512573,-0.2650764584541321,0.0246539656072855,0.19643579423427582,-0.19837777316570282,0.07534634321928024,-0.10825061053037643,-0.036254871636629105,0.0953473225235939,-0.09663853794336319,-0.13001979887485504,-0.06847342848777771,-0.034002915024757385,-0.3562202751636505,-0.6811837553977966,-0.130075141787529,-0.7022994160652161,-1.321144938468933,0.01280280016362667,0.1659102588891983,0.7982993721961975,0.961621105670929,0.2655573785305023,0.21312695741653442,-0.43794697523117065,-0.49195778369903564,-0.6691873669624329,-0.14732249081134796,-0.20356255769729614,-0.42255306243896484,0.04594923183321953,-0.21513819694519043,-0.10150917619466782,-0.1707792729139328,-0.19528348743915558,0.063485287129879,0.13618357479572296,0.06453171372413635,0.192814901471138,0.017081746831536293,-0.0409216582775116,-0.34325653314590454,0.05358752980828285,-0.33153846859931946,-0.6257557272911072,-0.16921420395374298,0.026941098272800446,0.7745913863182068,1.0473839044570923,0.02379276603460312,0.250481516122818,0.21346941590309143,-0.499542236328125,-0.8807106614112854,-0.3892928659915924,-0.24091891944408417,-0.20723672211170197,-0.1775897741317749,-0.29874107241630554,-0.23005558550357819,-0.13365817070007324,-0.016207389533519745,-0.11785281449556351,0.09634891897439957,-0.16643846035003662,-0.07019766420125961,-0.16563764214515686,-0.258762001991272,-0.012975681573152542,-0.34115809202194214,-0.38253912329673767,-0.28416529297828674,-0.5152595043182373,0.11302350461483002,0.7947943210601807,0.02032231166958809,-0.1663351207971573,-0.11912193894386292,1.1542304754257202,-0.5240407586097717,-1.0648483037948608,-0.4082419276237488,-0.48618027567863464,-0.20855656266212463,-0.47561338543891907,-0.22541570663452148,-0.06998336315155029,0.16855281591415405,-0.03166709095239639,0.016761932522058487,0.11044872552156448,-0.06659385561943054,0.04960669204592705,0.17089051008224487,0.01946333795785904,-0.1927000880241394,-0.4178983271121979,-0.2911740243434906,-0.30242475867271423,-0.8721550703048706,-0.7332583665847778,-0.07088052481412888,0.25439876317977905,0.21043384075164795,0.14075638353824615,0.34691086411476135,0.7095265984535217,-0.4546535313129425,-1.0528559684753418,-0.9118766188621521,-0.5039997100830078,0.13680759072303772,-0.28615134954452515,-0.013917673379182816,-0.09221664816141129,-0.04311729967594147,0.0872991606593132,-0.1860039234161377,0.18906544148921967,-0.03452673181891441,-0.04894780367612839,0.0909784808754921,-0.09739404171705246,-0.49020883440971375,-0.358827143907547,-0.5275356769561768,-0.471718966960907,-0.3211210370063782,-0.14501284062862396,0.2096966952085495,0.057619571685791016,0.605625569820404,0.13746462762355804,-0.26813068985939026,0.23117494583129883,-1.7038167715072632,-1.5278232097625732,-0.6609209179878235,-0.2710917592048645,-0.15112031996250153,-0.10587459057569504,-0.29148727655410767,-0.30102452635765076,-0.1405326873064041,0.08700040727853775,0.17761678993701935,0.16756047308444977,-0.1398826390504837,-0.19728700816631317,0.1362098753452301,0.03629205375909805,-0.3616935908794403,-0.7929567694664001,-0.2468297779560089,-0.20382921397686005,-0.49653133749961853,0.36654505133628845,-0.42951083183288574,0.34389248490333557,1.0174357891082764,0.28636911511421204,0.18740861117839813,-0.30543646216392517,-0.9630071520805359,-0.5971951484680176,-0.030552785843610764,-0.14888602495193481,-0.18901358544826508,-0.1995779573917389,-0.5387231111526489,-0.23251168429851532,-0.23099327087402344,-0.030431872233748436,-0.017991406843066216,-0.09910550713539124,-0.1104217916727066,-0.06721485406160355,0.17924101650714874,-0.26490119099617004,-0.7539380192756653,-1.4802531003952026,-1.0820387601852417,-0.25161319971084595,-0.6820961236953735,-1.4498467445373535,-0.4558255672454834,-0.011322135105729103,0.24872459471225739,0.2774086892604828,-0.6646230220794678,-1.1304926872253418,-0.25625431537628174,-0.2559319734573364,-0.009954061359167099,-0.14136448502540588,-0.28686535358428955,-0.6213342547416687,-0.06695771962404251,-0.338248074054718,0.04748524725437164,0.14400383830070496,-0.03838179633021355,0.0031665072310715914,0.059213582426309586,-0.18879401683807373,0.06685439497232437,-0.2221282720565796,-0.5698657631874084,-0.7374222278594971,-0.2802433967590332,-0.9664504528045654,-0.13455849885940552,-0.9744202494621277,-0.261525422334671,-0.19827915728092194,0.24599239230155945,0.05591430515050888,-0.6186522245407104,-0.059199802577495575,0.31138309836387634,-0.38390302658081055,0.7638397812843323,-0.1075957715511322,-0.4739453196525574,-0.7837526798248291,-0.18551672995090485,-0.24315600097179413,0.11368268728256226,0.4331892430782318,-0.1842026710510254,0.12903855741024017,-0.16936273872852325,0.10195137560367584,0.13827963173389435,-0.26585954427719116,-0.5568771958351135,0.2378317415714264,-0.16371673345565796,0.4613606035709381,0.25802963972091675,0.4320548474788666,0.48202085494995117,-0.024882491677999496,-0.3146994411945343,-0.10533256828784943,-0.19573694467544556,0.0868920385837555,0.35029029846191406,0.2793314456939697,0.5908429026603699,-0.28512662649154663,-0.970424473285675,-0.8811479806900024,-0.20501135289669037,-0.0373089537024498,-0.001741959829814732,-0.004747217055410147,0.11373501271009445,-0.1831808090209961,-0.10135620832443237,0.07744735479354858,-0.2204345017671585,-0.16547206044197083,0.2909674048423767,0.19166040420532227,0.04897991940379143,-0.21100680530071259,-0.12280409038066864,0.3667981028556824,-0.09647563099861145,-0.481644868850708,-0.21865563094615936,0.14317455887794495,0.05984321981668472,-0.42682531476020813,0.17237423360347748,0.10072577744722366,-0.25447794795036316,-0.4190964698791504,-0.6729332804679871,-0.027570508420467377,-0.15671847760677338,-0.2041448950767517,-0.09933725744485855,-0.020673999562859535,0.10673771798610687,-0.019557081162929535,0.0817355290055275,0.15615321695804596,0.1701267510652542,0.11805965006351471,0.9513330459594727,0.42309796810150146,0.06854817271232605,0.4171973168849945,-0.13944505155086517,0.025784960016608238,-0.23482494056224823,-1.340415120124817,-0.20038659870624542,-0.028751464560627937,-0.42206013202667236,-0.30035221576690674,0.9207173585891724,0.05967847257852554,0.047412000596523285,-0.12156853824853897,0.28078582882881165,0.2004849910736084,0.2617068290710449,0.1271417886018753,0.14032739400863647,-0.0333070233464241,-0.03303880617022514,0.08988244831562042,-0.10391519218683243,0.17149615287780762,0.05736740306019783,-0.08302953094244003,0.7135715484619141,0.6434006094932556,0.5512157082557678,0.05100598931312561,-0.6029782891273499,-0.08404099196195602,0.34898748993873596,-0.2704455256462097,-0.38662487268447876,-0.48967352509498596,0.7836900949478149,1.006300926208496,1.0723354816436768,0.36612826585769653,-0.21964509785175323,-0.5495192408561707,-0.43264099955558777,-0.03878388926386833,0.03361455351114273,-0.18184322118759155,0.0915558710694313,0.3087369501590729,0.1267067790031433,-0.16091592609882355,0.19052956998348236,-0.0787617489695549,-0.16134077310562134,0.04158632829785347,0.17343738675117493,0.3662148416042328,0.5442436933517456,-0.44049695134162903,-0.006232609041035175,0.26315805315971375,0.023986440151929855,-0.4963494539260864,-0.5460143089294434,-0.4164344370365143,-0.6727909445762634,-0.6814576983451843,-0.08882273733615875,0.18337857723236084,-0.2938770651817322,-0.2184692621231079,-0.08728986978530884,-0.28263184428215027,0.144611656665802,-0.19615373015403748,0.07467878609895706,-0.13333387672901154,-0.010809163562953472,-0.16519767045974731,0.13561677932739258,-0.006157692521810532,-0.17580097913742065,0.3902669847011566,0.29434099793434143,0.11685548722743988,-0.3385481834411621,-0.2925226092338562,-0.9229288697242737,-0.37935322523117065,-0.17994387447834015,-0.3683144748210907,-0.5151718854904175,0.08555731177330017,-0.695669949054718,-0.2704000771045685,-0.36082953214645386,-0.04098359867930412,-0.041498977690935135,0.016562357544898987,-0.1359330266714096,-0.190543070435524,-0.08711066097021103,0.06684254854917526,0.053316231817007065,0.0413084402680397,-0.007677028886973858,0.08917026221752167,0.13060258328914642,-0.13754549622535706,0.08881598711013794,-0.1638881415128708,0.19721531867980957,-0.10145065188407898,0.13244350254535675,-0.03298545628786087,0.24817074835300446,-0.007697467692196369,-0.26771804690361023,0.004713960457593203,-0.2973663806915283,-0.368528813123703,-0.38000208139419556,-0.05985972657799721,0.09176763892173767,0.09589110314846039,-0.011666188947856426,0.023424236103892326,-0.007580948062241077,0.13887141644954681,0.04750450327992439,-0.010531410574913025,-0.06994391232728958,-0.012389665469527245,-0.155086949467659,0.17168787121772766,0.0488155335187912,-0.16206859052181244,0.18628521263599396,-0.08782290667295456,-0.03518008440732956,-0.1444547027349472,-0.07872015982866287,0.03283466398715973,0.0748545452952385,0.0662345215678215,-0.010240222327411175,0.14603227376937866,0.08971861749887466,0.1762464940547943,0.20188111066818237,-0.021883370354771614,-0.011893060058355331,-0.09523267298936844,-0.00006111695256549865,0.10310188680887222,-0.14833272993564606,-0.15951626002788544,-0.09973996877670288,-0.03099168837070465,0.08211570978164673,0.11684691905975342,0.08941222727298737],[0.13172000646591187,-0.004320684354752302,-0.025339236482977867,0.2068464159965515,0.1008952334523201,-0.14413848519325256,-0.1280214637517929,-0.19712156057357788,0.18427038192749023,-0.05501911789178848,-0.09424643218517303,-0.2158736288547516,-0.07439180463552475,-0.012579122558236122,-0.2473822832107544,-0.23797057569026947,0.007768858224153519,-0.1312931925058365,-0.15931881964206696,-0.07966350764036179,-0.03686467930674553,0.08253266662359238,-0.06397506594657898,-0.3692467212677002,0.030401263386011124,0.032165542244911194,-0.2153599113225937,-0.19320794939994812,-0.09319134056568146,0.049300484359264374,0.07592833042144775,-0.01673506759107113,0.056642621755599976,-0.0004851169651374221,0.11394944787025452,0.10938818752765656,0.19683600962162018,0.13280300796031952,0.12588989734649658,0.027238603681325912,-0.008669126778841019,0.03537997603416443,0.09028684347867966,0.19223250448703766,0.1477496474981308,-0.009591762907803059,-0.19734103977680206,-0.07305826991796494,0.020290182903409004,-0.27218571305274963,-0.2830382287502289,-0.18622331321239471,-0.14536650478839874,-0.07348650693893433,-0.06721464544534683,-0.20617066323757172,-0.2115815132856369,0.10300663113594055,-0.08351331949234009,-0.05794616416096687,-0.030558813363313675,-0.030085258185863495,-0.049971695989370346,-0.0863969549536705,-0.04031356796622276,0.11893943697214127,0.30048200488090515,0.14727038145065308,0.13259874284267426,0.1824628710746765,0.02471296116709709,0.36266279220581055,0.34858250617980957,0.2860133647918701,0.2950439155101776,0.19602321088314056,0.04740595445036888,0.2653862535953522,0.15227022767066956,0.08711030334234238,0.08199986070394516,-0.13845299184322357,-0.13240285217761993,0.06881120055913925,0.010506822727620602,0.18814559280872345,0.03673861175775528,-0.036984700709581375,-0.1584353893995285,0.23982739448547363,0.03536563739180565,0.20409081876277924,0.7378278970718384,0.765615701675415,0.2912140190601349,0.4944762885570526,0.6949233412742615,0.5222864747047424,0.4428190588951111,0.205927774310112,-0.035796113312244415,0.33374541997909546,0.20755557715892792,0.2585372030735016,0.04383550584316254,0.04102320969104767,0.11510419845581055,0.27750658988952637,0.1382712870836258,0.06291913241147995,-0.07475937902927399,0.12746168673038483,0.0802258849143982,-0.17054744064807892,0.06935848295688629,0.027875304222106934,-0.11679300665855408,0.27296891808509827,0.3322923183441162,0.515440046787262,0.32116028666496277,0.4005001187324524,0.40359610319137573,0.36050552129745483,0.5351131558418274,0.26576554775238037,0.3730391263961792,0.233694389462471,0.3823775053024292,0.8239694237709045,1.0746136903762817,0.44345855712890625,-0.17821964621543884,-0.1868019998073578,0.0733567327260971,-0.5411542654037476,-0.46468254923820496,0.03372970223426819,0.055075567215681076,0.16062399744987488,0.08902688324451447,0.12333635240793228,-0.15934588015079498,0.1836661547422409,-0.37930598855018616,0.08659449964761734,0.3397921323776245,0.6325674653053284,0.1905864030122757,0.40383490920066833,-0.11552394926548004,-0.6908974051475525,-0.11280639469623566,0.8960719108581543,-0.008418385870754719,0.06645102053880692,0.42436087131500244,0.46098315715789795,0.5605962872505188,0.31178492307662964,0.08950170129537582,0.4845544695854187,0.2825692594051361,-0.5099221467971802,-0.4157487750053406,-0.10774682462215424,-0.1279667466878891,0.04424525797367096,-0.14109985530376434,0.052357252687215805,0.19270646572113037,-0.05991421267390251,-0.4516060948371887,-0.13301998376846313,0.32441356778144836,0.23408521711826324,-0.06591742485761642,0.12083365768194199,0.5473620295524597,0.658629298210144,0.6061133146286011,0.29895880818367004,-0.07371296733617783,0.575372576713562,1.2090481519699097,0.9338130950927734,0.5780895352363586,0.5680190324783325,-0.3821074068546295,-0.30304017663002014,-0.49744829535484314,-1.1164504289627075,-0.7196841239929199,0.013842751272022724,0.12987622618675232,0.07554683089256287,-0.11627530306577682,0.1544337123632431,0.05085047706961632,-0.04464007914066315,-0.07727634906768799,0.3207707405090332,-0.03296103700995445,-0.6238665580749512,0.035176657140254974,-0.4133322834968567,-0.8476726412773132,-0.40567272901535034,0.36547327041625977,0.365325391292572,0.08813131600618362,0.7491278648376465,0.7634729146957397,-0.9523159265518188,-1.558109998703003,-1.0502040386199951,-0.8604875802993774,-1.092466115951538,-0.8845701217651367,-1.1084315776824951,-0.7822831869125366,-0.4112732410430908,0.03430545702576637,0.12564899027347565,0.17107999324798584,0.025879358872771263,0.14966730773448944,-0.030029430985450745,0.26341894268989563,-0.07798828929662704,-0.08215902000665665,-0.050983719527721405,-0.10088513046503067,-0.9586378335952759,-0.9878308176994324,-0.4365086853504181,0.41834768652915955,0.0631919801235199,0.468400239944458,-0.20076259970664978,-1.5753321647644043,-0.5996560454368591,-0.11313550919294357,-0.2136700600385666,-1.0077269077301025,-0.2649748623371124,0.045157138258218765,-1.6777540445327759,-1.8804140090942383,-0.8084688186645508,0.12600921094417572,0.1117987185716629,-0.06114013493061066,-0.021274691447615623,-0.10103662312030792,-0.16930630803108215,-0.2466762512922287,-0.04073070362210274,-0.24951057136058807,0.15829098224639893,0.9016159176826477,0.011999672278761864,-0.42336079478263855,-0.24985076487064362,0.8158590793609619,0.547208309173584,0.27401959896087646,-0.21472516655921936,-0.927994966506958,-0.1712641716003418,0.13575799763202667,-0.7606993913650513,-0.4595242440700531,-0.1172160655260086,-0.4158512055873871,-1.6961106061935425,-1.3816388845443726,-0.6669381856918335,0.03840932995080948,0.07043718546628952,-0.12269546091556549,-0.0326741598546505,0.09901125729084015,-0.09703907370567322,-0.21146392822265625,-0.2631054222583771,0.052617236971855164,-0.32048383355140686,-0.3787323236465454,-0.15240871906280518,-0.5142092704772949,0.2669658958911896,-0.7358577847480774,-0.28309565782546997,1.1051446199417114,0.41525760293006897,-0.47976985573768616,-1.6061503887176514,-0.19713625311851501,-0.6188603043556213,-0.36818602681159973,0.2201739102602005,-0.01904957741498947,-0.43864038586616516,-0.44074511528015137,-0.3044091463088989,-0.108477883040905,-0.0042531914077699184,-0.10512587428092957,0.000570287462323904,-0.07253005355596542,0.32916831970214844,-0.14372050762176514,-0.6633931994438171,0.046617839485406876,-0.35330042243003845,-0.8031646609306335,0.19979408383369446,-1.3485194444656372,-1.008246898651123,-0.7000956535339355,0.3828349709510803,2.308626890182495,1.2390257120132446,-0.8043732643127441,-0.10700169205665588,0.2139354646205902,0.5019925236701965,0.31066566705703735,0.11542069911956787,0.006258153356611729,-0.7119476199150085,0.48657944798469543,0.1978042870759964,-0.2492220252752304,-0.0018011498032137752,-0.052733518183231354,0.22928915917873383,-0.018324870616197586,-0.024975555017590523,-0.2623012363910675,-0.5959962010383606,-0.31751981377601624,-0.3616143465042114,-0.9324826598167419,0.37632668018341064,-0.48301011323928833,-2.0261495113372803,-1.70380437374115,-0.096063993871212,1.5248677730560303,1.108876347541809,0.15049265325069427,0.1525486260652542,0.3277502655982971,0.5608543157577515,-0.5068626999855042,-0.15262557566165924,-0.28811725974082947,0.20630988478660583,0.6213381886482239,0.28912293910980225,0.09656959027051926,-0.07300110906362534,0.09946435689926147,0.048586323857307434,0.050104010850191116,0.04625174030661583,-0.2634333074092865,-0.8073715567588806,-0.5784013867378235,-0.35480964183807373,0.10739230364561081,-0.30202415585517883,-0.2476540207862854,-0.5525318384170532,-0.27925482392311096,1.554813027381897,1.2361444234848022,0.4092308282852173,0.4678240418434143,-0.4115372598171234,0.08366304636001587,-0.6907653212547302,-0.18538494408130646,-0.14861823618412018,-0.5118240714073181,0.37708088755607605,0.7492797374725342,0.575965404510498,0.31233933568000793,0.22664935886859894,0.20660452544689178,-0.04456062987446785,-0.028187433257699013,0.13939857482910156,-0.5562940835952759,-0.6767185926437378,-0.22252292931079865,-0.17830075323581696,0.13642197847366333,0.13011929392814636,-0.8741609454154968,0.26631221175193787,-0.04262598231434822,0.1745486557483673,0.34304776787757874,0.38749170303344727,-0.22701945900917053,-0.16070549190044403,0.04113812372088432,-0.14492692053318024,-0.20633234083652496,0.42235055565834045,-0.1255585253238678,0.2923286259174347,0.059180084615945816,0.4806048572063446,0.11625047028064728,0.016380494460463524,0.008141997270286083,0.006922964937984943,0.07292346656322479,0.06437938660383224,-0.3882971405982971,-0.1509757936000824,0.15201272070407867,-0.054940465837717056,-0.1777111142873764,-0.2050875425338745,-1.1328129768371582,-0.22337913513183594,-0.2351580113172531,1.3260583877563477,0.5761308073997498,1.5345369577407837,0.570095956325531,0.05468175932765007,-0.1716730296611786,0.583091139793396,0.2569868564605713,0.3654324412345886,0.3852429687976837,-0.6257997155189514,-0.28985321521759033,0.018699033185839653,0.05132149159908295,-0.027149969711899757,0.19444335997104645,-0.18422511219978333,-0.16693760454654694,0.3386607766151428,0.09859258681535721,-0.5483729839324951,-0.37087365984916687,-0.5503624677658081,-1.2084883451461792,-0.5255072116851807,-0.6344953179359436,0.36574244499206543,0.9177000522613525,0.4314323365688324,1.061767578125,0.8263095021247864,0.2515277862548828,-0.3749743700027466,-0.22843274474143982,-0.048773229122161865,0.2969430088996887,0.06276800483465195,0.05175454169511795,0.011346676386892796,-0.04590946063399315,0.7587673664093018,0.36477091908454895,0.17326690256595612,0.11262795329093933,-0.11212483048439026,-0.05857141315937042,0.4974885582923889,-0.3331892490386963,-0.876480221748352,0.2672000527381897,-0.04088985174894333,0.47182363271713257,0.37945398688316345,-0.1543537676334381,0.20123831927776337,0.6832090020179749,0.6033730506896973,0.828276515007019,-0.0602414570748806,-0.11686867475509644,0.21300186216831207,0.309856653213501,0.12567965686321259,0.6871574521064758,0.5505109429359436,0.8600155115127563,-0.1530819535255432,0.13847161829471588,0.3448616862297058,-0.000019447039449005388,0.11235864460468292,-0.007811833638697863,0.025882460176944733,-0.054988402873277664,0.41341373324394226,-0.18503834307193756,-0.07799199223518372,-0.2045203149318695,-0.3639311194419861,-0.23932617902755737,0.18637152016162872,0.25995880365371704,0.2530190944671631,0.1126248836517334,-0.06814213842153549,-0.3394833207130432,-0.46524578332901,0.1465098112821579,0.682349443435669,0.388365238904953,-0.10395992547273636,0.10100147128105164,0.128704234957695,0.34980982542037964,0.14244398474693298,0.13424967229366302,0.3721586763858795,0.07856836169958115,0.048458732664585114,-0.2151211053133011,0.15757106244564056,-0.08942808955907822,0.11224762350320816,0.20014294981956482,-0.02677001804113388,-0.11515305936336517,-0.7393118143081665,0.32221078872680664,0.260621577501297,0.6678633689880371,0.8079065680503845,-0.16012118756771088,0.31685465574264526,0.6801713109016418,-0.4359469413757324,0.8196119666099548,0.5703610181808472,0.33127298951148987,0.05238054692745209,0.3147711455821991,0.014258102513849735,0.027295418083667755,0.2633052170276642,-0.09799693524837494,0.05266252160072327,-0.050873953849077225,-0.04766906425356865,0.14859618246555328,-0.0735238716006279,-0.025035863742232323,0.8175318241119385,0.6971895694732666,0.4618482291698456,0.8876134753227234,-0.26149019598960876,0.2335256189107895,0.44378527998924255,0.5426267981529236,-0.03217114880681038,0.23017209768295288,0.8676143884658813,0.697701096534729,0.5308079123497009,0.5214629173278809,0.08305109292268753,0.16343773901462555,0.44017839431762695,0.1326964646577835,0.16259083151817322,0.015376371331512928,0.2858096659183502,0.20883679389953613,0.21563448011875153,-0.10211184620857239,0.029323101043701172,-0.10667525231838226,0.14239375293254852,-0.1207336038351059,0.131108820438385,0.39265426993370056,0.2806001603603363,1.0692275762557983,0.7736045122146606,0.5072694420814514,0.23093146085739136,-0.12219856679439545,-0.4472518861293793,-0.28381434082984924,0.3906509578227997,0.3246324062347412,0.024085836485028267,0.2857156991958618,0.04680812731385231,0.23846417665481567,0.9037292003631592,-0.3656873404979706,-0.0988512635231018,0.7427731156349182,0.23929822444915771,0.04598917067050934,0.17454653978347778,-0.06545229256153107,0.03003198653459549,-0.025271490216255188,-0.1718137413263321,0.044888291507959366,0.030958252027630806,0.3108796179294586,0.8412978053092957,0.638388991355896,0.39617154002189636,0.22335290908813477,0.28590530157089233,0.3501795828342438,-0.33532607555389404,-0.5960653424263,0.10398055613040924,-0.5536818504333496,-0.4472847282886505,-0.31923505663871765,0.21665091812610626,-0.009177612140774727,0.14502482116222382,-0.4531744420528412,-0.8422713279724121,-0.29322391748428345,-0.08391693979501724,0.06882587820291519,0.04653650149703026,0.09764724969863892,0.048397377133369446,-0.20972497761249542,0.14401713013648987,0.033283498138189316,0.026238981634378433,0.4017817974090576,0.7222385406494141,0.3657417297363281,0.34987419843673706,-0.022576233372092247,0.5162242650985718,-0.08400186151266098,-0.24822218716144562,0.05714661255478859,0.10204191505908966,0.035140249878168106,0.5735273957252502,-0.3312694728374481,0.07697140425443649,-0.2827562391757965,-0.017704980447888374,-0.12589912116527557,-0.19726435840129852,-0.38032278418540955,0.0346640981733799,0.21920548379421234,0.21992866694927216,0.1566547453403473,0.040881235152482986,0.14825822412967682,0.17541469633579254,-0.13801509141921997,-0.03461619094014168,0.012540138326585293,0.2775515019893646,0.2882167398929596,0.9612690210342407,0.5794874429702759,0.49084576964378357,0.12765388190746307,0.32689276337623596,-0.02266537956893444,-0.007053016219288111,0.38792797923088074,0.3231133818626404,0.7479052543640137,0.09421873837709427,-0.02560265362262726,0.48379263281822205,0.4014279246330261,0.4686127007007599,0.3020108640193939,0.14162041246891022,0.25734764337539673,0.15693716704845428,0.04087004065513611,0.0954328402876854,-0.19499517977237701,-0.088180772960186,0.06393808126449585,-0.031415462493896484,-0.03681063652038574,0.17034345865249634,0.19441638886928558,0.2121667116880417,0.26817166805267334,0.5267285108566284,0.785146951675415,0.09258514642715454,-0.18615485727787018,-0.3307856023311615,0.41843846440315247,0.26210495829582214,0.25764212012290955,-0.15246599912643433,0.008686930872499943,0.8527677059173584,0.7431874871253967,0.5340476036071777,0.1821441948413849,0.07052364945411682,0.135410338640213,-0.03657032176852226,0.12437557429075241,0.13955850899219513,0.012685313820838928,0.11894195526838303,-0.18464906513690948,0.08085943013429642,0.03511472046375275,-0.206583634018898,0.15982753038406372,0.18847613036632538,0.12396065890789032,-0.028856052085757256,-0.06290960311889648,-0.1554039865732193,0.12105515599250793,-0.10934732109308243,0.27324408292770386,0.11549647897481918,-0.015096317045390606,0.2595687210559845,0.529249370098114,0.40630650520324707,0.01898280158638954,-0.0009465653565712273,0.15989384055137634,-0.10275273025035858,0.008449375629425049,-0.08784640580415726,-0.13414153456687927,-0.18936197459697723,-0.1940232813358307,0.1749035120010376,0.08651585876941681,0.22480334341526031,0.08269477635622025,0.19227121770381927,0.04806795343756676,0.11311118304729462,-0.06785101443529129,0.08513028174638748,-0.259924054145813,-0.11782629787921906,0.0429081991314888,0.16415075957775116,0.12439978867769241,0.16918371617794037,0.16383586823940277,-0.19190293550491333,-0.04854724183678627,0.23104362189769745,-0.1353732794523239,0.12739790976047516,0.15624819695949554,-0.13225054740905762,-0.17763669788837433,0.14914897084236145,-0.17583386600017548,0.19256113469600677],[0.10599131882190704,0.16125163435935974,-0.06230323761701584,-0.06153375655412674,-0.11366648972034454,0.1965554803609848,0.01035736221820116,-0.1509377509355545,-0.08093512803316116,-0.03434567525982857,0.07908791303634644,-0.14773790538311005,-0.18483249843120575,-0.11802427470684052,0.16447864472866058,-0.08358399569988251,0.14355528354644775,-0.006833266466856003,-0.03577949106693268,0.020808599889278412,0.051571354269981384,0.024930573999881744,-0.17938706278800964,0.020474256947636604,-0.007678493391722441,0.09616624563932419,-0.013547459617257118,0.20977693796157837,-0.10813360661268234,-0.08230318874120712,0.07370352745056152,-0.0077349841594696045,0.09694764763116837,-0.17687316238880157,-0.06655346602201462,0.16629764437675476,0.04726583883166313,-0.1958754062652588,0.08180168271064758,0.12409466505050659,-0.09828220307826996,0.15653391182422638,0.04930000752210617,-0.07011466473340988,-0.0689321830868721,0.011935667134821415,-0.053165264427661896,0.019387880340218544,-0.07190811634063721,-0.20933149755001068,0.13749586045742035,-0.06362103670835495,0.015053543262183666,-0.08990410715341568,0.11372414976358414,-0.15821626782417297,-0.05813132971525192,0.036429550498723984,0.16585074365139008,-0.07867153733968735,-0.1924181431531906,-0.20529742538928986,0.11166037619113922,0.15155625343322754,-0.18065375089645386,0.087264783680439,0.27664366364479065,0.16950730979442596,-0.19721773266792297,-0.0032285351771861315,-0.07790227979421616,-0.3471626043319702,-0.015697315335273743,-0.15140573680400848,-0.14084886014461517,-0.3706798255443573,-0.20462729036808014,-0.10740013420581818,-0.2301366925239563,0.11326885223388672,0.08445532619953156,-0.03332569822669029,-0.16779838502407074,0.09122997522354126,0.11669573932886124,0.10007057338953018,0.1147809699177742,-0.22837990522384644,-0.03600950539112091,-0.17655374109745026,0.040642984211444855,0.07982401549816132,-0.45415961742401123,0.17970533668994904,0.24199505150318146,0.13535740971565247,0.023908410221338272,-0.042543794959783554,-0.6655247807502747,-0.28341999650001526,-0.5537718534469604,-0.5636966824531555,-0.22393405437469482,-0.7757783532142639,-1.012590765953064,-0.5254572033882141,-0.16095472872257233,-0.3706139922142029,-0.1645619422197342,-0.12259359657764435,-0.09079893678426743,0.06209857016801834,0.11147298663854599,0.148947611451149,-0.003771683666855097,0.029017601162195206,-0.04706800356507301,0.02970709651708603,0.08750444650650024,0.18966615200042725,-0.12829548120498657,-0.46072137355804443,-0.0415739007294178,0.004147009924054146,-0.23108746111392975,0.11844010651111603,0.06826331466436386,0.12206440418958664,-0.3540233075618744,0.07182803004980087,0.02496681734919548,-0.39989158511161804,-0.5986736416816711,-0.3681885004043579,-0.4823612868785858,-0.297014057636261,0.1405961513519287,0.3818824887275696,0.1796688735485077,0.17575955390930176,-0.0026969159953296185,0.10499587655067444,0.09648553282022476,-0.04347686097025871,-0.08908379077911377,-0.09424145519733429,0.13334442675113678,-0.17928490042686462,-0.24565032124519348,-0.2832707464694977,0.35868993401527405,0.352424681186676,0.6915948390960693,0.3372252285480499,-0.10379248112440109,0.22370114922523499,-0.5141168832778931,-0.14695240557193756,-0.24107059836387634,0.08589782565832138,-0.1366005539894104,-0.28856360912323,-0.5046066045761108,-0.3588169813156128,0.2703187167644501,0.2106138914823532,-0.171100452542305,0.00021500153525266796,0.06163790822029114,-0.06614125519990921,-0.21006803214550018,-0.25479018688201904,0.06081361696124077,-0.3806591331958771,-0.14412376284599304,-0.44653719663619995,-0.5573244690895081,-0.4379144310951233,0.06750026345252991,-0.0472957119345665,-0.43223318457603455,-0.18850703537464142,0.21420925855636597,0.28594350814819336,0.18453529477119446,-0.49730661511421204,-0.5976992249488831,-0.340669721364975,0.36540934443473816,0.5707975625991821,0.11727308481931686,0.4840724766254425,0.45368993282318115,0.3076874613761902,0.15939392149448395,-0.047432463616132736,-0.03947598859667778,0.1040685847401619,-0.10491267591714859,-0.10411033779382706,0.13448914885520935,-0.26862508058547974,-0.37998130917549133,0.058299094438552856,-0.13355663418769836,-0.16393662989139557,0.4557010233402252,0.3009807765483856,0.017475973814725876,0.5318120718002319,-0.20476177334785461,-0.5477652549743652,0.7562220096588135,-0.21507921814918518,-0.05124771222472191,0.17953823506832123,0.7285860180854797,0.39619240164756775,0.7508814334869385,1.0190856456756592,0.793654203414917,0.1435997635126114,0.04499993100762367,-0.08483462780714035,-0.005777857266366482,-0.025115670636296272,-0.03392481058835983,-0.1336519718170166,0.16064022481441498,-0.05978478863835335,-0.5163595080375671,-0.18505796790122986,0.2041785717010498,-0.5405261516571045,-0.3234640061855316,0.24636444449424744,0.12263070046901703,0.6820052266120911,0.5070367455482483,0.10450592637062073,0.16147944331169128,1.440860390663147,0.6869969964027405,0.8020514249801636,1.2985624074935913,1.0736569166183472,0.44181954860687256,1.136518955230713,1.0360599756240845,0.4369668960571289,0.027591560035943985,0.02403690665960312,0.12420110404491425,0.028257019817829132,0.16034315526485443,0.06369846314191818,-0.07637471705675125,0.19679804146289825,0.07957032322883606,0.015437889844179153,-0.24708522856235504,0.35001444816589355,-0.0036018770188093185,-0.42176905274391174,0.4176451861858368,0.26002126932144165,0.6570689678192139,1.1819562911987305,0.06276798993349075,1.0483121871948242,0.39491063356399536,0.6907967329025269,0.7401540875434875,0.338608980178833,-0.03413497284054756,0.1834867298603058,0.5343712568283081,0.4607838988304138,-0.15509946644306183,0.14240863919258118,0.16609393060207367,-0.04331964999437332,-0.13750825822353363,-0.15482881665229797,-0.3754981756210327,-0.006089376751333475,-0.10422185808420181,-0.18213559687137604,-0.030371610075235367,0.3531123995780945,0.29389655590057373,-0.8158044815063477,-0.7923266887664795,-0.4803764522075653,0.5757632255554199,0.8097959756851196,-0.25043657422065735,-0.004075373988598585,0.19731202721595764,-0.5059704780578613,-0.053665902465581894,-0.4008777439594269,0.4462258815765381,-0.2455795556306839,0.07689908891916275,0.09441516548395157,-0.059676606208086014,0.1061650887131691,0.1954524964094162,0.10823733359575272,0.0886770486831665,-0.27362170815467834,-0.5113549828529358,-0.719001054763794,-0.21465420722961426,-0.26432672142982483,0.27070170640945435,0.13435547053813934,-0.6752045154571533,-0.3532010614871979,-0.3888601064682007,-0.9768993854522705,-0.9321770071983337,0.23954281210899353,-0.23349285125732422,-1.0028166770935059,-1.1867725849151611,-1.5185811519622803,-1.4370055198669434,-0.5774810314178467,-1.12712562084198,-1.3256739377975464,-0.3215801417827606,-0.03273744508624077,-0.04013589769601822,0.005694980267435312,0.011438505724072456,-0.0031627558637410402,-0.2099941074848175,-0.05986102670431137,-0.4414774477481842,-0.7217332720756531,-0.39896342158317566,-0.2153262197971344,-0.881161093711853,-0.14244279265403748,-0.5544043183326721,-0.6300394535064697,-0.7199915647506714,-1.490604043006897,-2.107309579849243,-1.1515259742736816,-1.3835922479629517,-1.2053556442260742,-1.8622819185256958,-1.5808435678482056,-0.5922554135322571,-0.9154207110404968,-1.685909390449524,-1.6338108777999878,-0.9560960531234741,0.047735072672367096,0.11446163058280945,0.16350382566452026,-0.0822949931025505,-0.08480549603700638,0.08522780984640121,-0.01566699519753456,-0.358378529548645,-0.8089323043823242,-0.8803646564483643,-0.8483433723449707,-0.582533061504364,-0.5276356935501099,-0.657957911491394,-0.5574741363525391,-0.42278987169265747,-0.6324005722999573,0.008007527329027653,-0.3904983401298523,-0.644572913646698,-0.4326091706752777,-0.014414656907320023,-0.490685373544693,-0.7603443264961243,-0.6250840425491333,-1.4610419273376465,-1.450595498085022,-0.545707106590271,0.035754818469285965,0.12590304017066956,0.048288408666849136,0.17213551700115204,0.1682230532169342,0.1092020645737648,-0.32120031118392944,-0.7470551133155823,-0.7056384682655334,-0.8366419672966003,-0.5812188982963562,-0.9490364789962769,-0.24258367717266083,-0.391411691904068,-0.44277122616767883,-0.08181662857532501,0.07211456447839737,-0.320579469203949,0.29468464851379395,0.5802692770957947,-0.8745258450508118,0.015083213336765766,0.3676341772079468,-0.02436102367937565,-0.2853367030620575,-0.5263634920120239,-0.45969313383102417,-0.6646892428398132,0.013113506138324738,0.03549579903483391,-0.09890536218881607,0.09404553472995758,-0.022416898980736732,0.05987733229994774,0.010377852246165276,-0.5911607146263123,-0.4445808231830597,-0.14540354907512665,-0.33045944571495056,0.11931706219911575,0.2631894648075104,0.07236207276582718,-0.25783050060272217,0.009720583446323872,0.2907272279262543,-0.29789140820503235,0.3299452066421509,0.07469639927148819,-0.07146327197551727,0.13200964033603668,-0.4679182469844818,-0.4433905780315399,-0.39133715629577637,-0.5979599356651306,-0.9792976379394531,-0.4732711613178253,0.14965786039829254,0.1151585802435875,-0.12546919286251068,0.14923948049545288,0.10130056738853455,-0.16953042149543762,0.06059378758072853,-0.7790130972862244,-0.0706527829170227,0.2501611113548279,0.26993808150291443,-0.9267883896827698,-0.43750327825546265,0.26452505588531494,0.12789499759674072,0.1637391299009323,0.51154625415802,0.4107663035392761,-0.176334410905838,-0.9867329001426697,-0.18799877166748047,-0.04710140824317932,-0.747534453868866,-0.7152771949768066,-0.19198861718177795,-0.1863873153924942,-0.6301306486129761,-0.08666382730007172,0.28646913170814514,0.012565112672746181,0.03808727487921715,0.11111607402563095,-0.025979770347476006,0.06396730244159698,0.06422385573387146,0.008652128279209137,-0.16354790329933167,0.10415739566087723,0.185214102268219,-0.2352859377861023,1.0349823236465454,0.3382563292980194,0.8405736684799194,1.0957337617874146,0.23832868039608002,0.3655867278575897,0.524730920791626,-0.05270860716700554,-0.22180670499801636,-0.16260595619678497,-0.3492642939090729,-0.09762769192457199,-0.4250248372554779,0.1319996565580368,0.26932376623153687,0.3071430027484894,0.4190826117992401,0.06936804205179214,0.28351157903671265,-0.15325649082660675,-0.022972073405981064,0.04091797024011612,0.36235511302948,0.640472412109375,0.3376255929470062,-0.42756617069244385,0.8044015765190125,0.009843268431723118,0.18629732728004456,0.9698250889778137,0.6719024181365967,1.249857783317566,0.1679791510105133,0.241011843085289,-1.1403926610946655,-0.019750850275158882,0.1042504608631134,-0.4397645890712738,0.5072805881500244,0.284612238407135,-0.21914032101631165,0.46572721004486084,0.6708481907844543,0.3449682891368866,0.4200722575187683,0.3538498282432556,0.2785312235355377,0.1307690292596817,0.21411582827568054,0.19702383875846863,-0.36484891176223755,0.33807677030563354,0.7365489602088928,0.10829031467437744,-0.12272027879953384,0.4500364065170288,0.7443314790725708,-0.20020000636577606,0.5250813364982605,0.6692687273025513,0.9360861778259277,-0.2715505361557007,-0.4232681691646576,-0.5654587149620056,-0.309544175863266,-0.11627992242574692,0.12373508512973785,0.33798131346702576,0.376779705286026,0.40532806515693665,0.6641831994056702,0.23378726840019226,0.10943520814180374,0.27840572595596313,0.0005243427585810423,-0.16612868010997772,0.08938924968242645,0.0023502649273723364,-0.21067234873771667,-0.3558245897293091,0.534950852394104,0.4086022675037384,-0.4293491840362549,1.4933067560195923,0.5342329144477844,-0.03769782558083534,0.4726264476776123,0.7170265316963196,0.7092245817184448,-0.1506534367799759,-0.7842841744422913,-0.24249494075775146,-0.1366339474916458,0.11680544912815094,0.13870416581630707,0.06298118829727173,0.15658123791217804,0.6746578812599182,0.7691212892532349,0.6500216722488403,0.39132824540138245,0.2021506428718567,-0.049069758504629135,-0.1285066455602646,-0.037906527519226074,0.22384214401245117,0.11844547837972641,0.24829363822937012,0.19103959202766418,-0.2644045054912567,-0.5511837601661682,0.12516389787197113,0.5355321764945984,0.09981552511453629,-0.06327036023139954,0.3891158401966095,0.3495083749294281,-0.1226324811577797,-0.10736808180809021,-0.06056984141469002,-0.08164811879396439,0.38388463854789734,0.8152232766151428,0.2569388747215271,0.7896979451179504,1.1417019367218018,0.6975229382514954,0.1344790756702423,0.3033193349838257,-0.011553219519555569,0.047406069934368134,0.012831923551857471,0.04560376703739166,0.1437353640794754,0.1079922690987587,0.8843257427215576,0.765171468257904,0.5078277587890625,-0.10767768323421478,0.21010808646678925,0.2829209268093109,-0.1725645810365677,0.40842270851135254,0.6024680137634277,0.3401969373226166,-0.3590816855430603,-0.06982529163360596,-0.29593122005462646,-0.14171378314495087,-0.37139856815338135,-0.2781461179256439,0.38285955786705017,0.5248457789421082,0.6305394768714905,0.1447150707244873,0.1527910679578781,0.04691121354699135,0.015377429313957691,-0.07904724776744843,-0.07568448036909103,-0.18407678604125977,0.094610296189785,-0.19347485899925232,0.221413716673851,0.22425894439220428,0.16075138747692108,0.2943587005138397,0.20807155966758728,0.2855607569217682,-0.08821075409650803,0.5514958500862122,-0.2916301190853119,-0.2399265021085739,-0.03073102794587612,-0.19773297011852264,-0.17670577764511108,-0.20531408488750458,-0.42794105410575867,-0.20074313879013062,-0.0037880814634263515,-0.16734693944454193,-0.1991090178489685,-0.1816057413816452,0.13342814147472382,-0.11328364163637161,0.2063823789358139,0.15412095189094543,0.12152419239282608,0.08518562465906143,-0.1986004114151001,-0.39566031098365784,-0.2257770150899887,-0.02844511717557907,-0.40391793847084045,-0.30101266503334045,-0.46982720494270325,0.7833333611488342,-0.02039274200797081,0.2139054387807846,0.335977166891098,0.4841609001159668,0.2263566553592682,-0.08618123084306717,-0.5440447330474854,-0.2534577250480652,0.24064572155475616,0.028901617974042892,-0.5131760239601135,0.013396969996392727,-0.11934327334165573,-0.05491560697555542,0.19066040217876434,-0.03916513919830322,-0.152653768658638,-0.021148962900042534,0.07678187638521194,0.1682068556547165,-0.2048679143190384,0.005547780077904463,-0.22365842759609222,-0.14125953614711761,-0.11430324614048004,-0.4062245190143585,-0.6932974457740784,-0.7290341258049011,-1.0424329042434692,-0.2903106212615967,0.3200385570526123,0.4143044054508209,0.623086154460907,0.8512638807296753,-0.1639966368675232,0.46594980359077454,0.36913415789604187,-0.4322430491447449,-0.3296603262424469,-0.388155996799469,-0.2751554548740387,-0.1784997135400772,-0.17240199446678162,0.08678596466779709,0.008711989969015121,-0.0498163066804409,0.13629983365535736,0.1322605460882187,0.13621175289154053,-0.21203547716140747,-0.08389010280370712,-0.20476080477237701,-0.10410379618406296,-0.3272286653518677,-0.0748828798532486,-0.09121758490800858,-0.4988093078136444,-0.1602032631635666,0.0010796096175909042,-0.19184160232543945,-0.4771255552768707,-0.38036906719207764,-0.38901326060295105,-0.24144451320171356,-0.4923792779445648,-0.19912879168987274,-0.259281188249588,-0.11759218573570251,0.12008138000965118,0.13045787811279297,0.11180329322814941,-0.16325096786022186,-0.18067395687103271,-0.10346505790948868,0.029760053381323814,0.07196866720914841,-0.13633912801742554,0.053043000400066376,0.017178315669298172,-0.13018417358398438,-0.18425685167312622,-0.1552972048521042,-0.17282715439796448,-0.12297950685024261,0.138663187623024,0.026674829423427582,0.02475973777472973,-0.14124812185764313,0.08083902299404144,-0.17650611698627472,-0.11994601786136627,-0.028453629463911057,-0.11525896191596985,-0.005633930675685406,0.07497964054346085,0.007707313168793917,0.006673805415630341,0.03799867257475853,0.023344479501247406,0.19181877374649048,-0.03257380425930023,-0.12083839625120163]],\"biases\":[0.5583251118659973,-2.7117526531219482,-1.083146333694458,-3.987469434738159,-0.2522367238998413,2.3207852840423584,-1.3451366424560547,2.6480214595794678,0.29839277267456055,0.7847561836242676,1.2565648555755615,-0.8882761597633362,-1.7889670133590698,-0.6759004592895508,-1.8967859745025635,-1.0888280868530273]},{\"weights\":[[1.1411936283111572,-2.5011086463928223,-1.6053857803344727,-0.3261273503303528,3.549886703491211,-1.5347745418548584,1.0871503353118896,0.1014639362692833,3.4991812705993652,-3.726968765258789,-2.7736430168151855,1.9444658756256104,1.5079988241195679,0.6497082114219666,0.035317398607730865,-0.38388267159461975],[-1.9157235622406006,-0.8608248829841614,2.2564616203308105,-2.4258480072021484,-2.2721309661865234,0.2707621455192566,1.9044016599655151,2.1724090576171875,-2.6432957649230957,4.270192623138428,2.159655809402466,3.7722532749176025,-2.3617489337921143,-0.43125680088996887,-2.0152337551116943,1.2387073040008545],[-4.01696252822876,-1.2473156452178955,-0.7853999137878418,2.907306671142578,-2.3917667865753174,4.279717445373535,-1.0925296545028687,3.598562240600586,-0.7949118614196777,-1.642354965209961,0.5508233904838562,-3.7861554622650146,-0.0807126984000206,0.9372521638870239,0.6008361577987671,-0.7943350672721863],[3.5116350650787354,2.4367458820343018,-0.06996144354343414,-1.6963399648666382,3.252777338027954,-0.916179895401001,-3.0766124725341797,0.2670021653175354,3.0361342430114746,1.0507901906967163,-1.3572357892990112,-0.08311150223016739,-1.9467676877975464,-0.571137547492981,-2.073192834854126,-0.46461227536201477],[1.449291706085205,-4.256525993347168,0.8283259868621826,-4.833001136779785,-0.5917748808860779,0.5125338435173035,-1.4772838354110718,4.240647315979004,-1.147572636604309,2.9814021587371826,2.847430467605591,-1.0581268072128296,-1.177111029624939,1.8390012979507446,-0.18337292969226837,1.8879460096359253],[-1.4621098041534424,-3.0139083862304688,4.0397796630859375,-0.07023537158966064,1.2563472986221313,-3.45121431350708,4.0725417137146,-1.8469090461730957,0.7067974805831909,0.2693523168563843,1.474697470664978,1.5287977457046509,1.0878316164016724,-1.7892909049987793,0.4868583083152771,2.1955769062042236],[-0.34016698598861694,1.7500240802764893,2.2816343307495117,0.9612789750099182,2.4972963333129883,-0.4185405671596527,-2.0111520290374756,-1.696711778640747,-1.6585062742233276,-2.045217752456665,1.1506999731063843,-2.7903285026550293,1.2593927383422852,1.6974331140518188,1.163765788078308,3.3477187156677246],[2.5590670108795166,1.3236271142959595,-0.41019895672798157,-0.24905520677566528,-1.5491113662719727,-2.976813793182373,1.4948270320892334,-4.138620376586914,-1.115584135055542,-0.0882001742720604,0.6560783386230469,2.110848903656006,2.628761053085327,2.92893123626709,1.523380160331726,0.7168357968330383],[0.8936209082603455,1.3610808849334717,4.133643627166748,1.3279328346252441,1.4411677122116089,-3.74051570892334,-1.216881275177002,-5.348182201385498,-0.3318741023540497,0.549557626247406,0.3822917640209198,0.07912849634885788,3.9475457668304443,-3.05985426902771,3.768435478210449,0.672579824924469],[-0.47912630438804626,1.594698190689087,-2.779284954071045,0.4639987051486969,0.07426726073026657,2.648209571838379,0.3731793463230133,2.409632444381714,-3.2624268531799316,1.1632673740386963,1.2516975402832031,0.5988876223564148,-4.964074611663818,-1.4254404306411743,-1.4099080562591553,0.6366562843322754],[0.16362881660461426,1.5358150005340576,-0.5125970244407654,-2.1724839210510254,-2.49320387840271,1.9397908449172974,3.0104877948760986,-2.1439554691314697,-3.254171848297119,0.19565144181251526,-0.6180400848388672,-1.3380156755447388,0.2377854436635971,3.9613373279571533,2.3982093334198,-0.6123464107513428],[-3.139765501022339,2.2928624153137207,1.089982271194458,1.8331806659698486,-3.8933963775634766,0.16737517714500427,2.496548891067505,-0.4338100850582123,-1.08122718334198,1.5129497051239014,0.35871976613998413,0.4680779278278351,-0.09912066161632538,-4.266407489776611,-2.05544114112854,0.5489969849586487],[0.8912408947944641,-0.7628048062324524,-5.331807613372803,0.8403246998786926,0.4068966507911682,2.182588815689087,0.08518677949905396,-0.4628819227218628,0.7064672112464905,-2.1121904850006104,-3.2743427753448486,2.027691602706909,-2.1465492248535156,-1.466181755065918,0.7241782546043396,-5.797037124633789],[0.3377667963504791,-1.5794775485992432,-2.2585599422454834,1.5253536701202393,0.43461817502975464,0.6592785120010376,0.7228798270225525,-0.6152302026748657,1.9479925632476807,-4.684953689575195,-1.5924272537231445,0.7711654305458069,0.4561530649662018,2.8738269805908203,0.3699192702770233,-2.052190065383911],[-0.4926501512527466,1.5303387641906738,1.0796986818313599,-0.37701231241226196,-0.23774778842926025,-0.638388991355896,-2.939439058303833,-0.42157238721847534,3.6948094367980957,-0.4307236671447754,0.6019823551177979,-3.363957405090332,1.7974148988723755,4.106606960296631,-2.1880154609680176,1.9284337759017944],[0.2640696167945862,3.718972682952881,1.0118741989135742,-1.267831563949585,-1.8600842952728271,2.4315035343170166,-0.8599110841751099,2.845454216003418,-2.2216973304748535,1.8845539093017578,-0.517205536365509,-2.5872771739959717,-0.11678893119096756,-0.08933328092098236,-3.056346893310547,-4.316236972808838]],\"biases\":[0.8457193374633789,-0.9047232270240784,-2.373645067214966,2.3587839603424072,-2.101457357406616,0.3639112710952759,0.44764673709869385,0.02876097336411476,2.405130624771118,-1.0972850322723389,-0.3153945207595825,-0.890902042388916,0.2840016782283783,-1.8050827980041504,0.1924385130405426,-0.6029143929481506]},{\"weights\":[[-0.24176108837127686,0.9856425523757935,-2.6583991050720215,0.7507753968238831,-4.164797782897949,-4.0362677574157715,-2.751945972442627,-0.004296318162232637,-3.6844773292541504,0.07677692174911499,1.8152025938034058,1.6450700759887695,2.4968433380126953,-2.3324835300445557,-4.011571884155273,2.739938974380493],[0.24945573508739471,-1.386157512664795,1.47209632396698,-5.2973713874816895,1.0605285167694092,0.17439186573028564,0.6082373857498169,2.3886961936950684,-2.508601427078247,-2.533707618713379,2.3124842643737793,-3.944563388824463,-4.593746185302734,2.4309849739074707,1.0463758707046509,-1.986222743988037],[-4.487019062042236,2.3385863304138184,-0.9417519569396973,-0.38344281911849976,-3.1014952659606934,-1.2993813753128052,1.4270350933074951,1.252261996269226,5.711862087249756,2.3004510402679443,-2.113136053085327,1.0204532146453857,-4.1485915184021,-3.059906005859375,-4.3588995933532715,-3.0536088943481445],[0.29651176929473877,-2.647951602935791,-3.4625704288482666,-1.5865342617034912,-3.4502644538879395,0.7993786334991455,-4.732375621795654,2.036377191543579,4.471344947814941,-2.5968568325042725,0.24583737552165985,-2.4574038982391357,4.525354862213135,-0.022250033915042877,-3.0304462909698486,-3.268608570098877],[-5.598158359527588,1.5770541429519653,1.2904930114746094,1.417406678199768,1.8073374032974243,-3.7043676376342773,-3.6544597148895264,-2.7203729152679443,-2.4004456996917725,-0.9985407590866089,-3.769657611846924,1.3052592277526855,-2.470630168914795,-2.6479134559631348,3.798076629638672,-0.31170907616615295],[3.2682759761810303,3.704603910446167,-5.550515651702881,1.732142448425293,3.8821022510528564,0.6393159031867981,-3.1458053588867188,-1.5108407735824585,-4.783552646636963,1.0900288820266724,-1.8793785572052002,-4.225959300994873,-1.6762620210647583,-2.6104934215545654,-1.2324672937393188,-6.636714458465576],[-4.165986061096191,-0.012650192715227604,1.2161465883255005,-6.0212602615356445,4.038430690765381,0.1380462646484375,-1.535736083984375,-3.3189327716827393,-4.000908851623535,0.3369770646095276,3.2257001399993896,-0.6818050146102905,-0.5913944840431213,-1.3348394632339478,-4.516086101531982,0.4920221269130707],[0.9266605973243713,-3.2892775535583496,-1.8299616575241089,1.442215919494629,-0.5489842295646667,2.4355106353759766,1.724629521369934,-3.361600399017334,1.380247950553894,-5.465372085571289,-4.420766830444336,-1.306056022644043,-3.232328176498413,-2.640221118927002,2.8481857776641846,2.127830743789673],[1.5198875665664673,-0.21108734607696533,2.82147216796875,-4.865908145904541,-4.676614284515381,2.8319952487945557,-2.1617982387542725,-3.1281721591949463,-3.9738216400146484,0.7522220611572266,-4.217584133148193,2.1747164726257324,0.6416487693786621,1.640103816986084,-1.8628759384155273,-3.038259744644165],[-0.5305321216583252,-5.558206558227539,2.349175453186035,2.279322862625122,-1.517582654953003,-5.764729022979736,0.5086864233016968,-1.9370142221450806,-2.8547449111938477,2.7203209400177,-0.5247086882591248,-3.297985792160034,2.73300838470459,-0.7603136897087097,0.9981794953346252,-3.02520489692688]],\"biases\":[-2.175382614135742,-2.087883949279785,-1.8777188062667847,-2.1499438285827637,-1.8874822854995728,-1.9833152294158936,-2.481130599975586,-1.7140856981277466,-2.4078149795532227,-2.4163992404937744]}],\"inputLookup\":null,\"inputLookupLength\":0,\"outputLookup\":null,\"outputLookupLength\":0,\"options\":{\"inputSize\":0,\"outputSize\":0,\"binaryThresh\":0.5,\"hiddenLayers\":[16,16],\"activation\":\"sigmoid\"},\"trainOpts\":{\"activation\":\"sigmoid\",\"iterations\":10,\"errorThresh\":0.005,\"log\":true,\"logPeriod\":1,\"leakyReluAlpha\":0.01,\"learningRate\":0.1,\"momentum\":0.1,\"callbackPeriod\":10,\"timeout\":\"Infinity\",\"beta1\":0.9,\"beta2\":0.999,\"epsilon\":1e-8}}}");

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