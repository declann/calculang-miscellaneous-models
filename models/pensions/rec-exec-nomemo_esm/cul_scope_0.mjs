
import {
//age, // important
fund_value, unit_balance, unit_allocation, unit_price, empee_contribution, salary, projected_fund_value, age,
age_0_ as age_0_projected,
retirement_age_ as retirement_age_projected,
salary_0_ as salary_0_projected,
salary_inflation_rate_ as salary_inflation_rate_projected,
empee_contribution_rate_ as empee_contribution_rate_projected,
unit_growth_rate_ as unit_growth_rate_projected,
fund_value_0_ as fund_value_0_projected // how come I didn't put _ here and it worked?
} from "./cul_scope_1.mjs";


// actual data todo add flexibility

export const actuals = ({ actuals_in }) => actuals_in;

// TODO generalise
export const salary_inflation_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].salary_inflation_rate_in;
export const empee_contribution_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].empee_contribution_rate_in;
export const unit_growth_rate_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].unit_growth_rate_in;
export const age_0_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].age_0_in;
export const fund_value_0_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].fund_value_0_in;
export const retirement_age_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].retirement_age_in;
export const salary_0_actual = ({ actuals_in, age_in }) => actuals({ actuals_in })[age({ age_in }) - 30 + 1].salary_0_in;

export {
fund_value, unit_balance, unit_allocation, unit_price, empee_contribution, salary, projected_fund_value, age,
age_0_projected,
retirement_age_projected,
salary_0_projected,
salary_inflation_rate_projected,
empee_contribution_rate_projected,
unit_growth_rate_projected,
fund_value_0_projected };


// TODO generalise
export const age_opening = ({ age_opening_in, age_opening_closing_offset_in }) => age_opening_in + age_opening_closing_offset({ age_opening_closing_offset_in }); // todo offset in terms of closing-opening?
export const age_closing = ({ age_closing_in, age_opening_closing_offset_in }) => age_closing_in + age_opening_closing_offset({ age_opening_closing_offset_in });
export const age_opening_closing_offset = ({ age_opening_closing_offset_in }) => age_opening_closing_offset_in;
export const rec_step = ({ rec_step_in }) => rec_step_in; // wrong: 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)


// neater if I merge these 2 blocks together:

export const age_0_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 1) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

export const retirement_age_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 2) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

export const salary_0_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 3) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

export const salary_inflation_rate_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 4) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

export const empee_contribution_rate_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 5) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

export const unit_growth_rate_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 6) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};

export const fund_value_0_actual_co = ({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 7) return age_opening({ age_opening_in, age_opening_closing_offset_in });else
  return age_closing({ age_closing_in, age_opening_closing_offset_in });
};;

export const age_0 = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) > age_0_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return age_0_projected({});else
  return age_0_actual({ actuals_in, age_in });
};

export const retirement_age = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) > retirement_age_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return retirement_age_projected({});else
  return retirement_age_actual({ actuals_in, age_in });
};

export const salary_0 = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) > salary_0_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return salary_0_projected({});else
  return salary_0_actual({ actuals_in, age_in });
};

export const salary_inflation_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) > salary_inflation_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return salary_inflation_rate_projected({});else
  return salary_inflation_rate_actual({ actuals_in, age_in });
};

export const empee_contribution_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) > empee_contribution_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return empee_contribution_rate_projected({});else
  return empee_contribution_rate_actual({ actuals_in, age_in });
};

export const unit_growth_rate = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) > unit_growth_rate_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return unit_growth_rate_projected({});else
  return unit_growth_rate_actual({ actuals_in, age_in });
};

export const fund_value_0 = ({ age_in, rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in, actuals_in }) => {
  if (age({ age_in }) > fund_value_0_actual_co({ rec_step_in, age_opening_in, age_opening_closing_offset_in, age_closing_in }))
  return fund_value_0_projected({});else
  return fund_value_0_actual({ actuals_in, age_in });
};;

export const rec_order = ['age_0', 'retirement_age', 'salary_0', 'salary_inflation_rate', 'empee_contribution_rate', 'unit_growth_rate', 'fund_value_0'];