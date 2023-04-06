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
  salary_inflation_rate as salary_inflation_rate_projected, // how come I didn't put _ here and it worked?
  empee_contribution_rate as empee_contribution_rate_projected,
  unit_growth_rate as unit_growth_rate_projected,
  fund_value_0,
} from "./projected.cul";

import {
  salary_inflation_rate as salary_inflation_rate_actual,
  empee_contribution_rate as empee_contribution_rate_actual,
  unit_growth_rate as unit_growth_rate_actual,
} from "./actual.cul";

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
  salary_inflation_rate_actual,
  empee_contribution_rate_actual,
  unit_growth_rate_actual,
  salary_inflation_rate_projected,
  empee_contribution_rate_projected,
  unit_growth_rate_projected
};

export const age_opening = () => age_opening_in;
export const age_closing = () => age_closing_in;
export const rec_step = () => rec_step_in; // 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)

export const salary_inflation_rate_actual_co = () => {
  if (rec_step() >= 1) return age_opening();
  else return age_closing();
};

// logic on age op/closing, age, rec step
export const salary_inflation_rate = () => {
  if (age() > salary_inflation_rate_actual_co())
    return salary_inflation_rate_projected();
  else return salary_inflation_rate_actual();
};

export const empee_contribution_rate = () => empee_contribution_rate_projected();
export const unit_growth_rate = () => unit_growth_rate_projected();
