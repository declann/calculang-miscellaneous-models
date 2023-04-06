import { fund_value_0 } from "./cul_scope_1.mjs";import { annual_salary_0 } from "./cul_scope_1.mjs";import { retirement_age } from "./cul_scope_1.mjs";import { age_0 } from "./cul_scope_1.mjs";import { unit_growth_rate } from "./cul_scope_0.mjs";import { empee_contribution_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate_actual_co } from "./cul_scope_0.mjs";import { rec_step } from "./cul_scope_0.mjs";import { age_closing } from "./cul_scope_0.mjs";import { age_opening } from "./cul_scope_0.mjs";import { unit_growth_rate_actual } from "./cul_scope_2.mjs";import { empee_contribution_rate_actual } from "./cul_scope_2.mjs";import { salary_inflation_rate_actual } from "./cul_scope_2.mjs"; // disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

export const fund_value = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => unit_balance({ age_in, rec_step_in, age_opening_in, age_closing_in }) * unit_price({ age_in }); // not allowing for multiple funds now

export const unit_balance = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) <= age_0({}) - 1) return fund_value_0({}) / unit_price({ age_in }); // was caught by stack error because of no lower bound! static analysis!
  else return unit_balance({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, rec_step_in, age_opening_in, age_closing_in });
  // timing = premium received at start of year and allocated immediately
};

export const unit_allocation = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => annual_premium({ age_in, rec_step_in, age_opening_in, age_closing_in }) / unit_price({ age_in }); // TODO model a contribution charge
export const unit_price = ({ age_in }) => {// no b/o spread. Should this part be in terms of age ?
  if (age({ age_in }) <= age_0({})) return 1;else
  return unit_price({ age_in: age({ age_in }) - 1 }) * (1 + unit_growth_rate({}));
};

export const annual_premium = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) <= age_0({}) - 1 || age({ age_in }) == retirement_age({})) return 0;else
  return annual_salary({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) * empee_contribution_rate({});
};

// at end of year
export const annual_salary = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) <= age_0({}) - 1) return annual_salary_0({});else
  if (age({ age_in }) >= retirement_age({}))
  return 0;else

  return annual_salary({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) * (1 + salary_inflation_rate({ age_in, rec_step_in, age_opening_in, age_closing_in })); // < age_0 = undefined, any way/use to capture this statically?
};


// at retirement:
export const projected_fund_value = ({ rec_step_in, age_opening_in, age_closing_in }) =>
fund_value({ rec_step_in, age_opening_in, age_closing_in, age_in: retirement_age({}) });

// explicit inputs ::

// using age and age_0 (starting age) as inputs, rather than year/time and age_0.
export const age = ({ age_in }) => age_in; // input
export const age_0_ = ({ age_0_in }) => age_0_in;

export const retirement_age_ = ({ retirement_age_in }) => retirement_age_in;
export const annual_salary_0_ = ({ annual_salary_0_in }) => annual_salary_0_in;
export const salary_inflation_rate_ = ({ salary_inflation_rate_in }) => salary_inflation_rate_in;
export const empee_contribution_rate_ = ({ empee_contribution_rate_in }) => empee_contribution_rate_in;
//export const emper_contribution_rate = () => (emper_contribution_rate_in) not modelling employer contributions yet

export const unit_growth_rate_ = ({ unit_growth_rate_in }) => unit_growth_rate_in;

export const fund_value_0_ = ({ fund_value_0_in }) => fund_value_0_in;