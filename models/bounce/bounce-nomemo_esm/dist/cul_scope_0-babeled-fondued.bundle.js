(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!****************************************!*\
  !*** ./cul_scope_0-babeled-fondued.js ***!
  \****************************************/
Object.defineProperty(exports, "__esModule", ({ value: true }));exports.y = exports.x = exports.t = exports.dy = exports.dx = exports.dampener = exports.compressed = void 0; // the floor is at y=190 so the ball will start falling until it reaches 190, and then bounce.
// dy calculates the change to y in each time step (except where the "floor rule" bites).
// dy is 3 at t_in=0 and is influenced by a dampener input

/////////// model ///////////

// explicit inputs (by convention):
var t = function t(_ref) {var t_in = _ref.t_in;return t_in;};exports.t = t;
var dx = function dx(_ref2) {var dx_in = _ref2.dx_in;return dx_in;};exports.dx = dx;
var dampener = function dampener(_ref3) {var dampener_in = _ref3.dampener_in;return dampener_in;};

// functions:

// calculang determines x function dependent on inputs t_in, dx_in
exports.dampener = dampener;var x = function x(_ref4) {var t_in = _ref4.t_in,dx_in = _ref4.dx_in;
  if (t({ t_in: t_in }) == 0) return 100 + dx({ dx_in: dx_in });else
  return x({ dx_in: dx_in, t_in: t({ t_in: t_in }) - 1 }) + dx({ dx_in: dx_in });
};

// calculang determines y function dependent on inputs t_in, dampener_in
exports.x = x;var y = function y(_ref5) {var t_in = _ref5.t_in,dampener_in = _ref5.dampener_in;
  if (t({ t_in: t_in }) == 0) return 50;else
  if (y({ dampener_in: dampener_in, t_in: t({ t_in: t_in }) - 1 }) + dy({ dampener_in: dampener_in, t_in: t({ t_in: t_in }) - 1 }) > 185) return 190; // "floor rule"
  else return y({ dampener_in: dampener_in, t_in: t({ t_in: t_in }) - 1 }) + dy({ dampener_in: dampener_in, t_in: t({ t_in: t_in }) - 1 });
};

// calculang determines dy function dependent on inputs t_in, dampener_in
exports.y = y;var dy = function dy(_ref6) {var t_in = _ref6.t_in,dampener_in = _ref6.dampener_in;
  if (t({ t_in: t_in }) == 0) return 0 * dampener({ dampener_in: dampener_in }) + 3;else
  if (y({ dampener_in: dampener_in, t_in: t({ t_in: t_in }) }) > 185) return -dy({ dampener_in: dampener_in, t_in: t({ t_in: t_in }) - 1 }); // bounce at the floor by negating dy
  else return dy({ dampener_in: dampener_in, t_in: t({ t_in: t_in }) - 1 }) * dampener({ dampener_in: dampener_in }) + 3;
}; // if expressions vs statements would really help make this more concise

// ball gets compressed on the ground before bouncing upwards
exports.dy = dy;var compressed = function compressed(_ref7) {var t_in = _ref7.t_in,dampener_in = _ref7.dampener_in;return y({ t_in: t_in, dampener_in: dampener_in }) == 190 ? true : false;};exports.compressed = compressed;

//# sourceMappingURL=cul_scope_0-babeled.js.map
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=cul_scope_0-babeled-fondued.bundle.js.map