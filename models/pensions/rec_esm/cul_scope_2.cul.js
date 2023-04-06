//import {
  /*fund_value,
  unit_balance,
  unit_allocation,
  unit_price,
  annual_premium,
  annual_salary,
  projected_fund_value,
  age,*/
  /*age_0,
  retirement_age,
  annual_salary_0,
  salary_inflation_rate,
  empee_contribution_rate,
  unit_growth_rate,
  fund_value_0,*/
//} from "./pensions-calculator.cul";
//export {
  /*fund_value,
  unit_balance,
  unit_allocation,
  unit_price,
  annual_premium,
  annual_salary,
  projected_fund_value,
  age,*/
  /*age_0,
  retirement_age,
  annual_salary_0,
  salary_inflation_rate,
  empee_contribution_rate,
  unit_growth_rate,
  fund_value_0,*/
//};

// just reconciling on 3 inputs now: salary_inflation_rate, empee_contribution_rate, unit_growth_rate

export const age_0 = () => 20;
export const retirement_age = () => 65;
export const annual_salary_0 = () => 30000;
export const salary_inflation_rate = () => [0.02, 0.01, 0.01][age() - age_0()];
export const empee_contribution_rate = () => [0.1, 0.1, 0.08][age() - age_0()];
export const unit_growth_rate = () => [0.06, 0.04, 0.04][age() - age_0()];
export const fund_value_0 = () => 0;

// NOTE: actual.cul.js is not a complete model now (no import of calculator.cul.js)
