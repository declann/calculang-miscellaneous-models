// a reconciliation pattern (automate-able)

import {
fund_value,
unit_balance,
unit_allocation,
unit_price,
annual_premium,
annual_salary,
projected_fund_value,
age,
age_0_ as age_0,
retirement_age_ as retirement_age,
annual_salary_0_ as annual_salary_0,
salary_inflation_rate_ as salary_inflation_rate_projected,
empee_contribution_rate_ as empee_contribution_rate_projected,
unit_growth_rate_ as unit_growth_rate_projected,
fund_value_0_ as fund_value_0 } from
"./cul_scope_1.mjs";

import {
salary_inflation_rate_ as salary_inflation_rate_actual,
empee_contribution_rate_ as empee_contribution_rate_actual,
unit_growth_rate_ as unit_growth_rate_actual } from
"./cul_scope_2.mjs";

export {
fund_value,
unit_balance,
unit_allocation,
unit_price,
annual_premium,
annual_salary,
projected_fund_value,
age,
age_0,
retirement_age,
annual_salary_0 };


export const age_opening = ({ age_opening_in }) => age_opening_in;
export const age_closing = ({ age_closing_in }) => age_closing_in;
export const rec_step = ({ rec_step_in }) => rec_step_in; // 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)

export const salary_inflation_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 1) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

// logic on age op/closing, age, rec step
export const salary_inflation_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > salary_inflation_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return salary_inflation_rate_projected({});else
  return salary_inflation_rate_actual({ age_in });
};

export const empee_contribution_rate = ({}) => empee_contribution_rate_projected({});
export const unit_growth_rate = ({}) => unit_growth_rate_projected({});