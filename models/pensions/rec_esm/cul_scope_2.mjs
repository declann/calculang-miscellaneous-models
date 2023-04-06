import { unit_growth_rate } from "./cul_scope_0.mjs";import { empee_contribution_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate_actual_co } from "./cul_scope_0.mjs";import { rec_step } from "./cul_scope_0.mjs";import { age_closing } from "./cul_scope_0.mjs";import { age_opening } from "./cul_scope_0.mjs";import { fund_value_0 } from "./cul_scope_1.mjs";import { unit_growth_rate_projected } from "./cul_scope_1.mjs";import { empee_contribution_rate_projected } from "./cul_scope_1.mjs";import { salary_inflation_rate_projected } from "./cul_scope_1.mjs";import { annual_salary_0 } from "./cul_scope_1.mjs";import { retirement_age } from "./cul_scope_1.mjs";import { age_0 } from "./cul_scope_1.mjs";import { age } from "./cul_scope_1.mjs";import { projected_fund_value } from "./cul_scope_1.mjs";import { annual_salary } from "./cul_scope_1.mjs";import { annual_premium } from "./cul_scope_1.mjs";import { unit_price } from "./cul_scope_1.mjs";import { unit_allocation } from "./cul_scope_1.mjs";import { unit_balance } from "./cul_scope_1.mjs";import { fund_value } from "./cul_scope_1.mjs"; //import {
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

export const age_0_ = ({}) => 20;
export const retirement_age_ = ({}) => 65;
export const annual_salary_0_ = ({}) => 30000;
export const salary_inflation_rate_ = ({ age_in }) => [0.02, 0.01, 0.01][age({ age_in }) - age_0({})];
export const empee_contribution_rate_ = ({ age_in }) => [0.1, 0.1, 0.08][age({ age_in }) - age_0({})];
export const unit_growth_rate_ = ({ age_in }) => [0.06, 0.04, 0.04][age({ age_in }) - age_0({})];
export const fund_value_0_ = ({}) => 0;