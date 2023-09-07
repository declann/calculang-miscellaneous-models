"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.fund_value_0 = exports.fund_value = exports.emper_contribution_rate = exports.emper_contribution = exports.empee_contribution_tax_relief = exports.empee_contribution_rate = exports.empee_contribution = exports.contribution_charge = exports.age_0 = exports.age = exports.accumulated_empee_contributions = exports.accumulated_empee_contribution_tax_relief = void 0;Object.defineProperty(exports, "income_tax", { enumerable: true, get: function get() {return _cul_scope_.income_tax;} });exports.unit_price = exports.unit_growth_rate = exports.unit_balance = exports.unit_allocation = exports.salary_inflation_rate = exports.salary_0 = exports.salary = exports.salaries_per_projected_fund = exports.retirement_age = exports.projected_fund_value = exports.pension_tax_relief_ratio = void 0;





var _cul_scope_ = require("./cul_scope_1.mjs"); // disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.
// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models
// todo add timing comments
var fund_value = function fund_value(_ref) {var age_in = _ref.age_in,age_0_in = _ref.age_0_in,fund_value_0_in = _ref.fund_value_0_in,unit_growth_rate_in = _ref.unit_growth_rate_in,retirement_age_in = _ref.retirement_age_in,salary_0_in = _ref.salary_0_in,salary_inflation_rate_in = _ref.salary_inflation_rate_in,empee_contribution_rate_in = _ref.empee_contribution_rate_in,emper_contribution_rate_in = _ref.emper_contribution_rate_in,contribution_charge_in = _ref.contribution_charge_in;return unit_balance({ age_in: age_in, age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in }) * unit_price({ age_in: age_in, age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in });}; // not allowing for multiple funds now
exports.fund_value = fund_value;
var unit_balance = function unit_balance(_ref2) {var age_in = _ref2.age_in,age_0_in = _ref2.age_0_in,fund_value_0_in = _ref2.fund_value_0_in,unit_growth_rate_in = _ref2.unit_growth_rate_in,retirement_age_in = _ref2.retirement_age_in,salary_0_in = _ref2.salary_0_in,salary_inflation_rate_in = _ref2.salary_inflation_rate_in,empee_contribution_rate_in = _ref2.empee_contribution_rate_in,emper_contribution_rate_in = _ref2.emper_contribution_rate_in,contribution_charge_in = _ref2.contribution_charge_in;
  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1) return fund_value_0({ fund_value_0_in: fund_value_0_in }) / unit_price({ age_in: age_in, age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in });else
  return unit_balance({ age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in, age_in: age({ age_in: age_in }) - 1 }) + unit_allocation({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in, unit_growth_rate_in: unit_growth_rate_in });
  // timing = premium received at start of year and allocated immediately
};exports.unit_balance = unit_balance;

var unit_allocation = function unit_allocation(_ref3) {var age_in = _ref3.age_in,age_0_in = _ref3.age_0_in,retirement_age_in = _ref3.retirement_age_in,salary_0_in = _ref3.salary_0_in,salary_inflation_rate_in = _ref3.salary_inflation_rate_in,empee_contribution_rate_in = _ref3.empee_contribution_rate_in,emper_contribution_rate_in = _ref3.emper_contribution_rate_in,contribution_charge_in = _ref3.contribution_charge_in,unit_growth_rate_in = _ref3.unit_growth_rate_in;return (
    (empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }) + emper_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, emper_contribution_rate_in: emper_contribution_rate_in })) * (
    1 - contribution_charge({ contribution_charge_in: contribution_charge_in })) /
    unit_price({ age_in: age_in, age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in }));}; // todo, AVCs?
exports.unit_allocation = unit_allocation;
var unit_price = function unit_price(_ref4) {var age_in = _ref4.age_in,age_0_in = _ref4.age_0_in,unit_growth_rate_in = _ref4.unit_growth_rate_in;
  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in })) return 1;else
  return unit_price({ age_0_in: age_0_in, unit_growth_rate_in: unit_growth_rate_in, age_in: age({ age_in: age_in }) - 1 }) * (1 + unit_growth_rate({ unit_growth_rate_in: unit_growth_rate_in }));
};exports.unit_price = unit_price;

var empee_contribution = function empee_contribution(_ref5) {var age_in = _ref5.age_in,age_0_in = _ref5.age_0_in,retirement_age_in = _ref5.retirement_age_in,salary_0_in = _ref5.salary_0_in,salary_inflation_rate_in = _ref5.salary_inflation_rate_in,empee_contribution_rate_in = _ref5.empee_contribution_rate_in;
  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1 || age({ age_in: age_in }) == retirement_age({ retirement_age_in: retirement_age_in })) return 0;else
  return salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }) * empee_contribution_rate({ empee_contribution_rate_in: empee_contribution_rate_in });
};exports.empee_contribution = empee_contribution;

var accumulated_empee_contributions = function accumulated_empee_contributions(_ref6) {var age_in = _ref6.age_in,age_0_in = _ref6.age_0_in,retirement_age_in = _ref6.retirement_age_in,salary_0_in = _ref6.salary_0_in,salary_inflation_rate_in = _ref6.salary_inflation_rate_in,empee_contribution_rate_in = _ref6.empee_contribution_rate_in;
  if (age({ age_in: age_in }) == age_0({ age_0_in: age_0_in }) - 1) return 0;else

  return (
    accumulated_empee_contributions({ age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, age_in: age({ age_in: age_in }) - 1 }) +
    empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }));

};exports.accumulated_empee_contributions = accumulated_empee_contributions;

var accumulated_empee_contribution_tax_relief = function accumulated_empee_contribution_tax_relief(_ref7) {var age_in = _ref7.age_in,age_0_in = _ref7.age_0_in,paye_band_id_in = _ref7.paye_band_id_in,gross_salary_in = _ref7.gross_salary_in,pension_contribution_in = _ref7.pension_contribution_in,tax_credits_in = _ref7.tax_credits_in,usc_band_id_in = _ref7.usc_band_id_in,salary_0_in = _ref7.salary_0_in,retirement_age_in = _ref7.retirement_age_in,salary_inflation_rate_in = _ref7.salary_inflation_rate_in,empee_contribution_rate_in = _ref7.empee_contribution_rate_in;
  if (age({ age_in: age_in }) == age_0({ age_0_in: age_0_in }) - 1) return 0;else

  return (
    accumulated_empee_contribution_tax_relief({ age_0_in: age_0_in, paye_band_id_in: paye_band_id_in, gross_salary_in: gross_salary_in, pension_contribution_in: pension_contribution_in, tax_credits_in: tax_credits_in, usc_band_id_in: usc_band_id_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, age_in: age({ age_in: age_in }) - 1 }) +
    empee_contribution_tax_relief({ age_in: age_in, age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }));

};exports.accumulated_empee_contribution_tax_relief = accumulated_empee_contribution_tax_relief;

var pension_tax_relief_ratio = function pension_tax_relief_ratio(_ref8) {var age_in = _ref8.age_in,age_0_in = _ref8.age_0_in,salary_0_in = _ref8.salary_0_in,retirement_age_in = _ref8.retirement_age_in,salary_inflation_rate_in = _ref8.salary_inflation_rate_in,empee_contribution_rate_in = _ref8.empee_contribution_rate_in;return (
    empee_contribution_tax_relief({ age_in: age_in, age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }) / empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }));};exports.pension_tax_relief_ratio = pension_tax_relief_ratio;

var empee_contribution_tax_relief = function empee_contribution_tax_relief(_ref9) {var age_in = _ref9.age_in,age_0_in = _ref9.age_0_in,salary_0_in = _ref9.salary_0_in,retirement_age_in = _ref9.retirement_age_in,salary_inflation_rate_in = _ref9.salary_inflation_rate_in,empee_contribution_rate_in = _ref9.empee_contribution_rate_in;return (
    (0, _cul_scope_.income_tax)({ age_in: age_in,
      gross_salary_in: salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }),
      tax_credits_in: 3000,
      pension_contribution_in: 0 }) -

    (0, _cul_scope_.income_tax)({ age_in: age_in,
      gross_salary_in: salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }),
      tax_credits_in: 3000,
      pension_contribution_in: empee_contribution({ age_in: age_in, age_0_in: age_0_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in }) }));};


// affected by bug: depends on gross_salary_in, for some reason
// issue #102
/*export const accumulated_empee_contribution_tax_relief = () => {
  if (age() == age_0() - 1) return 0;
  else
    return (
      accumulated_empee_contribution_tax_relief({ age_in: age() - 1 }) +
      empee_contribution_tax_relief()
    );
};*/exports.empee_contribution_tax_relief = empee_contribution_tax_relief;

var emper_contribution = function emper_contribution(_ref10) {var age_in = _ref10.age_in,age_0_in = _ref10.age_0_in,retirement_age_in = _ref10.retirement_age_in,salary_0_in = _ref10.salary_0_in,salary_inflation_rate_in = _ref10.salary_inflation_rate_in,emper_contribution_rate_in = _ref10.emper_contribution_rate_in;
  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1 || age({ age_in: age_in }) == retirement_age({ retirement_age_in: retirement_age_in })) return 0;else
  return salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }) * emper_contribution_rate({ emper_contribution_rate_in: emper_contribution_rate_in });
};exports.emper_contribution = emper_contribution;

var salary = function salary(_ref11) {var age_in = _ref11.age_in,age_0_in = _ref11.age_0_in,salary_0_in = _ref11.salary_0_in,retirement_age_in = _ref11.retirement_age_in,salary_inflation_rate_in = _ref11.salary_inflation_rate_in;
  // at end of year
  if (age({ age_in: age_in }) <= age_0({ age_0_in: age_0_in }) - 1) return salary_0({ salary_0_in: salary_0_in });else
  if (age({ age_in: age_in }) >= retirement_age({ retirement_age_in: retirement_age_in })) return 0;else
  return salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: age({ age_in: age_in }) - 1 }) * (1 + salary_inflation_rate({ salary_inflation_rate_in: salary_inflation_rate_in })); // < age_0 = undefined, any way/use to capture this statically?
};exports.salary = salary;

var projected_fund_value = function projected_fund_value(_ref12) {var age_0_in = _ref12.age_0_in,fund_value_0_in = _ref12.fund_value_0_in,unit_growth_rate_in = _ref12.unit_growth_rate_in,retirement_age_in = _ref12.retirement_age_in,salary_0_in = _ref12.salary_0_in,salary_inflation_rate_in = _ref12.salary_inflation_rate_in,empee_contribution_rate_in = _ref12.empee_contribution_rate_in,emper_contribution_rate_in = _ref12.emper_contribution_rate_in,contribution_charge_in = _ref12.contribution_charge_in;return (
    // at retirement:
    fund_value({ age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in, age_in: retirement_age({ retirement_age_in: retirement_age_in }) }));};exports.projected_fund_value = projected_fund_value;

var salaries_per_projected_fund = function salaries_per_projected_fund(_ref13) {var age_0_in = _ref13.age_0_in,fund_value_0_in = _ref13.fund_value_0_in,unit_growth_rate_in = _ref13.unit_growth_rate_in,retirement_age_in = _ref13.retirement_age_in,salary_0_in = _ref13.salary_0_in,salary_inflation_rate_in = _ref13.salary_inflation_rate_in,empee_contribution_rate_in = _ref13.empee_contribution_rate_in,emper_contribution_rate_in = _ref13.emper_contribution_rate_in,contribution_charge_in = _ref13.contribution_charge_in;return (
    projected_fund_value({ age_0_in: age_0_in, fund_value_0_in: fund_value_0_in, unit_growth_rate_in: unit_growth_rate_in, retirement_age_in: retirement_age_in, salary_0_in: salary_0_in, salary_inflation_rate_in: salary_inflation_rate_in, empee_contribution_rate_in: empee_contribution_rate_in, emper_contribution_rate_in: emper_contribution_rate_in, contribution_charge_in: contribution_charge_in }) / salary({ age_0_in: age_0_in, salary_0_in: salary_0_in, retirement_age_in: retirement_age_in, salary_inflation_rate_in: salary_inflation_rate_in, age_in: retirement_age({ retirement_age_in: retirement_age_in }) - 1 }));};

// explicit inputs ::

// using age and age_0 (starting age) as inputs, rather than year/time and age_0.
exports.salaries_per_projected_fund = salaries_per_projected_fund;var age = function age(_ref14) {var age_in = _ref14.age_in;return age_in;}; // input
exports.age = age;var age_0 = function age_0(_ref15) {var age_0_in = _ref15.age_0_in;return age_0_in;};exports.age_0 = age_0;

var retirement_age = function retirement_age(_ref16) {var retirement_age_in = _ref16.retirement_age_in;return retirement_age_in;};exports.retirement_age = retirement_age;
var salary_0 = function salary_0(_ref17) {var salary_0_in = _ref17.salary_0_in;return salary_0_in;};exports.salary_0 = salary_0;
var salary_inflation_rate = function salary_inflation_rate(_ref18) {var salary_inflation_rate_in = _ref18.salary_inflation_rate_in;return salary_inflation_rate_in;};exports.salary_inflation_rate = salary_inflation_rate;
var empee_contribution_rate = function empee_contribution_rate(_ref19) {var empee_contribution_rate_in = _ref19.empee_contribution_rate_in;return empee_contribution_rate_in;};exports.empee_contribution_rate = empee_contribution_rate;
var emper_contribution_rate = function emper_contribution_rate(_ref20) {var emper_contribution_rate_in = _ref20.emper_contribution_rate_in;return emper_contribution_rate_in;};exports.emper_contribution_rate = emper_contribution_rate;

var unit_growth_rate = function unit_growth_rate(_ref21) {var unit_growth_rate_in = _ref21.unit_growth_rate_in;return unit_growth_rate_in;};exports.unit_growth_rate = unit_growth_rate;

var fund_value_0 = function fund_value_0(_ref22) {var fund_value_0_in = _ref22.fund_value_0_in;return fund_value_0_in;};exports.fund_value_0 = fund_value_0;

var contribution_charge = function contribution_charge(_ref23) {var contribution_charge_in = _ref23.contribution_charge_in;return contribution_charge_in;};exports.contribution_charge = contribution_charge;

//# sourceMappingURL=cul_scope_0-babeled.js.map