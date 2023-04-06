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
age_0,
retirement_age,
annual_salary_0,
salary_inflation_rate_ as salary_inflation_rate_projected, // how come I didn't put _ here and it worked?
empee_contribution_rate_ as empee_contribution_rate_projected,
unit_growth_rate_ as unit_growth_rate_projected,
fund_value_0 } from
"./cul_scope_1.mjs";

/*import {
  salary_inflation_rate as salary_inflation_rate_actual,
  empee_contribution_rate as empee_contribution_rate_actual,
  unit_growth_rate as unit_growth_rate_actual,
} from "./actual.cul";*/


export const salary_inflation_rate_actual = ({ age_in }) => [0.02, 0.01, 0.01][age({ age_in }) - age_0({})];
export const empee_contribution_rate_actual = ({ age_in }) => [0.1, 0.1, 0.08][age({ age_in }) - age_0({})];
export const unit_growth_rate_actual = ({ age_in }) => [0.06, 0.04, 0.04][age({ age_in }) - age_0({})];

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
annual_salary_0,
fund_value_0,
//salary_inflation_rate_actual,
//empee_contribution_rate_actual,
//unit_growth_rate_actual,
salary_inflation_rate_projected,
empee_contribution_rate_projected,
unit_growth_rate_projected };


export const age_opening = ({ age_opening_in }) => age_opening_in;
export const age_closing = ({ age_closing_in }) => age_closing_in;
export const rec_step = ({ rec_step_in }) => rec_step_in; // 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)

export const salary_inflation_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 1) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const salary_inflation_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > salary_inflation_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return salary_inflation_rate_projected({});else
  return salary_inflation_rate_actual({ age_in });
};

export const empee_contribution_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 2) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const empee_contribution_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > empee_contribution_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return empee_contribution_rate_projected({});else
  return empee_contribution_rate_actual({ age_in });
};

export const unit_growth_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 3) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const unit_growth_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > unit_growth_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return unit_growth_rate_projected({});else
  return unit_growth_rate_actual({ age_in });
};

//export const empee_contribution_rate = () => empee_contribution_rate_projected();
//export const unit_growth_rate = () => unit_growth_rate_projected();