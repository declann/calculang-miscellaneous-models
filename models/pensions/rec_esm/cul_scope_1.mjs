import { unit_growth_rate } from "./cul_scope_0.mjs";import { unit_growth_rate_actual_co } from "./cul_scope_0.mjs";import { empee_contribution_rate } from "./cul_scope_0.mjs";import { empee_contribution_rate_actual_co } from "./cul_scope_0.mjs";import { salary_inflation_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate_actual_co } from "./cul_scope_0.mjs";import { rec_step } from "./cul_scope_0.mjs";import { age_closing } from "./cul_scope_0.mjs";import { age_opening } from "./cul_scope_0.mjs";import { unit_growth_rate_actual } from "./cul_scope_0.mjs";import { empee_contribution_rate_actual } from "./cul_scope_0.mjs";import { salary_inflation_rate_actual } from "./cul_scope_0.mjs";export const age = ({ age_in }) => age_in;
export const age_0 = ({}) => 20;
export const retirement_age = ({}) => 65;
export const annual_salary_0 = ({}) => 30000;
export const salary_inflation_rate_ = ({}) => 0.02;
export const empee_contribution_rate_ = ({}) => 0.1;
export const unit_growth_rate_ = ({}) => 0.05;
export const fund_value_0 = ({}) => 0;

// disclaimer: This is a work-in-progress model released for some calculang/tooling demonstration purposes and numbers shouldn't be relied upon; there are known model issues.

// this model should prob. be broken into some modular pieces, but it isn't because it definitely needs memoisation, which is currently only working for non-modular models

// todo add timing comments

export const fund_value = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => unit_balance({ age_in, rec_step_in, age_opening_in, age_closing_in }) * unit_price({ age_in, rec_step_in, age_opening_in, age_closing_in }); // not allowing for multiple funds now

export const unit_balance = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) <= age_0({}) - 1) return fund_value_0({}) / unit_price({ age_in, rec_step_in, age_opening_in, age_closing_in });else
  return unit_balance({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) + unit_allocation({ age_in, rec_step_in, age_opening_in, age_closing_in });
  // timing = premium received at start of year and allocated immediately
};

export const unit_allocation = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => empee_contribution({ age_in, rec_step_in, age_opening_in, age_closing_in }) / unit_price({ age_in, rec_step_in, age_opening_in, age_closing_in }); // todo emper contribution, AVCs?

export const unit_price = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) <= age_0({})) return 1;else
  return unit_price({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) * (1 + unit_growth_rate({ age_in, rec_step_in, age_opening_in, age_closing_in }));
};

export const empee_contribution = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) <= age_0({}) - 1 || age({ age_in }) == retirement_age({})) return 0;else
  return salary({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) * empee_contribution_rate({ age_in, rec_step_in, age_opening_in, age_closing_in });
};

export const salary = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  // at end of year
  if (age({ age_in }) <= age_0({}) - 1) return salary_0();else
  if (age({ age_in }) >= retirement_age({})) return 0;else
  return salary({ rec_step_in, age_opening_in, age_closing_in, age_in: age({ age_in }) - 1 }) * (1 + salary_inflation_rate({ age_in, rec_step_in, age_opening_in, age_closing_in })); // < age_0 = undefined, any way/use to capture this statically?
};

export const projected_fund_value = ({ rec_step_in, age_opening_in, age_closing_in }) =>
// at retirement:
fund_value({ rec_step_in, age_opening_in, age_closing_in, age_in: retirement_age({}) });

// explicit inputs ::