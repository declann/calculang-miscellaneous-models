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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fund_value", function() { return fund_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_balance", function() { return unit_balance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_allocation", function() { return unit_allocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_price", function() { return unit_price; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution", function() { return empee_contribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accumulated_empee_contributions", function() { return accumulated_empee_contributions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pension_tax_relief_ratio", function() { return pension_tax_relief_ratio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_tax_relief", function() { return empee_contribution_tax_relief; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emper_contribution", function() { return emper_contribution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary", function() { return salary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projected_fund_value", function() { return projected_fund_value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age", function() { return age; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "age_0", function() { return age_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retirement_age", function() { return retirement_age; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_0", function() { return salary_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salary_inflation_rate", function() { return salary_inflation_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empee_contribution_rate", function() { return empee_contribution_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emper_contribution_rate", function() { return emper_contribution_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit_growth_rate", function() { return unit_growth_rate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fund_value_0", function() { return fund_value_0; });
/* harmony import */ var _simple_incometax_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "income_tax", function() { return _simple_incometax_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__["a"]; });

// disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

// todo add timing comments




const fund_value = ({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) => unit_balance({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) * unit_price({ age_in, age_0_in, unit_growth_rate_in }); // not allowing for multiple funds now

const unit_balance = ({ age_in, age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1) return fund_value_0({ fund_value_0_in }) / unit_price({ age_in, age_0_in, unit_growth_rate_in });else
  return unit_balance({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, unit_growth_rate_in });
  // timing = premium received at start of year and allocated immediately
};

const unit_allocation = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, unit_growth_rate_in }) =>
(empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) + emper_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, emper_contribution_rate_in })) / unit_price({ age_in, age_0_in, unit_growth_rate_in }); // todo, AVCs?

const unit_price = ({ age_in, age_0_in, unit_growth_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in })) return 1;else
  return unit_price({ age_0_in, unit_growth_rate_in, age_in: age({ age_in }) - 1 }) * (1 + unit_growth_rate({ unit_growth_rate_in }));
};

const empee_contribution = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1 || age({ age_in }) == retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * empee_contribution_rate({ empee_contribution_rate_in });
};

const accumulated_empee_contributions = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) => {
  if (age({ age_in }) == age_0({ age_0_in }) - 1) return 0;else

  return (
    accumulated_empee_contributions({ age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, age_in: age({ age_in }) - 1 }) +
    empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }));

};
//_.range(age_0(), retirement_age()).reduce((acc, val) => acc + val);

//export const gross_salary = () => salary({ age_in: age() - 1 });

const pension_tax_relief_ratio = ({ age_in, age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, empee_contribution_rate_in }) =>
Object(_simple_incometax_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* pension_tax_relief_ratio_ */ "b"])({ age_in,
  gross_salary_in: salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }),
  tax_credits_in: 3000,
  pension_contribution_in: empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) });


const empee_contribution_tax_relief = ({ age_in, age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, empee_contribution_rate_in }) =>
Object(_simple_incometax_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* income_tax */ "a"])({ age_in,
  gross_salary_in: salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }),
  tax_credits_in: 3000,
  pension_contribution_in: 0 }) -

Object(_simple_incometax_cul_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* income_tax */ "a"])({ age_in,
  gross_salary_in: salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }),
  tax_credits_in: 3000,
  pension_contribution_in: empee_contribution({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in }) });


// affected by bug: depends on gross_salary_in, for some reason
// issue #102
/*export const accumulated_empee_contribution_tax_relief = () => {
  if (age() == age_0() - 1) return 0;
  else
    return (
      accumulated_empee_contribution_tax_relief({ age_in: age() - 1 }) +
      empee_contribution_tax_relief()
    );
};*/

const emper_contribution = ({ age_in, age_0_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, emper_contribution_rate_in }) => {
  if (age({ age_in }) <= age_0({ age_0_in }) - 1 || age({ age_in }) == retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * emper_contribution_rate({ emper_contribution_rate_in });
};

const salary = ({ age_in, age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in }) => {
  // at end of year
  if (age({ age_in }) <= age_0({ age_0_in }) - 1) return salary_0({ salary_0_in });else
  if (age({ age_in }) >= retirement_age({ retirement_age_in })) return 0;else
  return salary({ age_0_in, salary_0_in, retirement_age_in, salary_inflation_rate_in, age_in: age({ age_in }) - 1 }) * (1 + salary_inflation_rate({ salary_inflation_rate_in })); // < age_0 = undefined, any way/use to capture this statically?
};

const projected_fund_value = ({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in }) =>
// at retirement:
fund_value({ age_0_in, fund_value_0_in, unit_growth_rate_in, retirement_age_in, salary_0_in, salary_inflation_rate_in, empee_contribution_rate_in, emper_contribution_rate_in, age_in: retirement_age({ retirement_age_in }) });

// explicit inputs ::

// using age and age_0 (starting age) as inputs, rather than year/time and age_0.
const age = ({ age_in }) => age_in; // input
const age_0 = ({ age_0_in }) => age_0_in;

const retirement_age = ({ retirement_age_in }) => retirement_age_in;
const salary_0 = ({ salary_0_in }) => salary_0_in;
const salary_inflation_rate = ({ salary_inflation_rate_in }) => salary_inflation_rate_in;
const empee_contribution_rate = ({ empee_contribution_rate_in }) => empee_contribution_rate_in;
const emper_contribution_rate = ({ emper_contribution_rate_in }) => emper_contribution_rate_in;

const unit_growth_rate = ({ unit_growth_rate_in }) => unit_growth_rate_in;

const fund_value_0 = ({ fund_value_0_in }) => fund_value_0_in;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export gross_salary */
/* unused harmony export tax_credits */
/* unused harmony export pension_contribution */
/* unused harmony export net_salary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return income_tax; });
/* unused harmony export effective_rate */
/* unused harmony export prsi_taxable_salary */
/* unused harmony export prsi */
/* unused harmony export prsi_rate */
/* unused harmony export usc_table */
/* unused harmony export usc_band_id */
/* unused harmony export usc_band_end */
/* unused harmony export usc_band_start */
/* unused harmony export usc_rate */
/* unused harmony export usc_taxable_salary */
/* unused harmony export usc_by_band_id */
/* unused harmony export usc */
/* unused harmony export paye_table */
/* unused harmony export paye_band_id */
/* unused harmony export paye_band_end */
/* unused harmony export paye_band_start */
/* unused harmony export paye_rate */
/* unused harmony export age_ */
/* unused harmony export percentage_limit */
/* unused harmony export paye_taxable_salary */
/* unused harmony export pension_tax_relief */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pension_tax_relief_ratio_; });
/* unused harmony export paye_by_band_id */
/* unused harmony export paye_over_bands */
/* unused harmony export paye */
/* unused harmony export net_salary_plus_pension_contribution */
/* harmony import */ var _pension_calculator_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
 // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters, single person. Many limitations
// work in progress. See README.md

// inputs:
const gross_salary = ({ gross_salary_in }) => gross_salary_in;
const tax_credits = ({ tax_credits_in }) => tax_credits_in;
const pension_contribution = ({ pension_contribution_in }) => pension_contribution_in;

// functions:
const net_salary = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) =>
gross_salary({ gross_salary_in }) - pension_contribution({ pension_contribution_in }) - income_tax({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in });

const income_tax = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) => paye({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) + prsi({ gross_salary_in }) + usc({ gross_salary_in });

const effective_rate = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) => 1 - net_salary({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) / gross_salary({ gross_salary_in });

const prsi_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in });

const prsi = ({ gross_salary_in }) =>
prsi_taxable_salary({ gross_salary_in }) * prsi_rate({}) * (gross_salary({ gross_salary_in }) > 352 * 52 ? 1 : 0); // todo feature flag RE threshold

const prsi_rate = ({}) => 0.04;

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
const usc_table = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 21295, rate: 0.02 },
{
  band_id: 3,
  band_co: 70144,
  rate: 0.045
},
{ band_id: 4, band_co: 0, rate: 0.08 }];


const usc_band_id = ({ usc_band_id_in }) => usc_band_id_in;

const usc_band_end = ({ usc_band_id_in }) => {
  if (usc_band_id({ usc_band_id_in }) == usc_table({}).length) return 999999999;
  return usc_table({})[usc_band_id({ usc_band_id_in }) - 1].band_co;
};

const usc_band_start = ({ usc_band_id_in }) => {
  if (usc_band_id({ usc_band_id_in }) == 1) return 0;
  return usc_table({})[usc_band_id({ usc_band_id_in }) - 2].band_co;
};

const usc_rate = ({ usc_band_id_in }) => usc_table({})[usc_band_id({ usc_band_id_in }) - 1].rate;

const usc_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in }); // pay usc on pension contribution

const usc_by_band_id = ({ usc_band_id_in, gross_salary_in }) =>
usc_rate({ usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in }) - usc_band_start({ usc_band_id_in }),
Math.max(usc_taxable_salary({ gross_salary_in }) - usc_band_start({ usc_band_id_in }), 0));


const usc = ({ gross_salary_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ gross_salary_in, usc_band_id_in: v.band_id }),
0) * (
gross_salary({ gross_salary_in }) > 13000 ? 1 : 0);

// PAYE, "
const paye_table = ({}) => [
{ band_id: 1, band_co: 36800, rate: 0.2 },
{ band_id: 2, band_co: 100000, rate: 0.4 },
{
  band_id: 3,
  band_co: 0,
  rate: 0.4
}];


const paye_band_id = ({ paye_band_id_in }) => paye_band_id_in;

const paye_band_end = ({ paye_band_id_in }) => {
  if (paye_band_id({ paye_band_id_in }) == paye_table({}).length) return 999999999;
  return paye_table({})[paye_band_id({ paye_band_id_in }) - 1].band_co;
};

const paye_band_start = ({ paye_band_id_in }) => {
  if (paye_band_id({ paye_band_id_in }) == 1) return 0;
  return paye_table({})[paye_band_id({ paye_band_id_in }) - 2].band_co;
};

const paye_rate = ({ paye_band_id_in }) => paye_table({})[paye_band_id({ paye_band_id_in }) - 1].rate;

const age_ = ({ age_in }) => age_in;

const percentage_limit = ({ age_in }) => {
  if (Object(_pension_calculator_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age"])({ age_in }) < 30) return 0.15;else
  if (Object(_pension_calculator_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age"])({ age_in }) < 40) return 0.2;else
  if (Object(_pension_calculator_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age"])({ age_in }) < 50) return 0.25;else
  if (Object(_pension_calculator_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age"])({ age_in }) < 55) return 0.3;else
  if (Object(_pension_calculator_nomemo_cul_js__WEBPACK_IMPORTED_MODULE_0__["age"])({ age_in }) < 60) return 0.35;else
  return 0.4;
};

// pensions_tax_relief = impact of contribution on paye calc with 115k,gross salary limit
// then use full gross_salary for paye_taxable_salary and create a deduction in summary
// approach below is different, but I think result is the same, todo prove

const paye_taxable_salary = ({ gross_salary_in, pension_contribution_in, age_in }) =>
Math.max(0, gross_salary({ gross_salary_in }) - pension_tax_relief({ pension_contribution_in, age_in, gross_salary_in }));

const pension_tax_relief = ({ pension_contribution_in, age_in, gross_salary_in }) =>
// following is the tax relief. "The maximum amount of earnings taken into account for calculating tax relief is 115k per year". (?)for the limits only? See also 26.3 https://www.revenue.ie/en/tax-professionals/tdm/pensions/chapter-26.pdf
Math.min(
pension_contribution({ pension_contribution_in }),
percentage_limit({ age_in }) * Math.min(115000, gross_salary({ gross_salary_in })));


const pension_tax_relief_ratio_ = ({ pension_contribution_in, age_in, gross_salary_in }) =>
pension_tax_relief({ pension_contribution_in, age_in, gross_salary_in }) / pension_contribution({ pension_contribution_in });

const paye_by_band_id = ({ paye_band_id_in, gross_salary_in, pension_contribution_in, age_in }) =>
paye_rate({ paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in }) - paye_band_start({ paye_band_id_in }),
Math.max(paye_taxable_salary({ gross_salary_in, pension_contribution_in, age_in }) - paye_band_start({ paye_band_id_in }), 0));


const paye_over_bands = ({ gross_salary_in, pension_contribution_in, age_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ gross_salary_in, pension_contribution_in, age_in, paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here => placed outside. Issue #95
);

const paye = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) => Math.max(paye_over_bands({ gross_salary_in, pension_contribution_in, age_in }) - tax_credits({ tax_credits_in }), 0);

const net_salary_plus_pension_contribution = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) =>
net_salary({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) + pension_contribution({ pension_contribution_in });

/***/ })
/******/ ]);
});
//# sourceMappingURL=pension-calculator-nomemo.js.map