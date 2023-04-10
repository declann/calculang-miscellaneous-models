
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

export const salary_inflation_rate_actual = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in }) < 0 ? 0 : [0.019, 0.01, 0.01][age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in })];
export const empee_contribution_rate_actual = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in }) < 0 ? 0 : [0.1, 0.1, 0.08][age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in })];
export const unit_growth_rate_actual = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in }) < 0 ? 0 : [0.06, 0.04, 0.04][age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in })];
export const age_0_actual = ({}) => 20; //[20,20,20][age() - age_0()]; // silly?
export const fund_value_0_actual = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in }) < 0 ? 0 : [0, 0, 0][age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in })];
export const retirement_age_actual = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in }) < 0 ? 0 : [65, 65, 65][age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in })];
export const salary_0_actual = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in }) < 0 ? 0 : [30000, 30000, 30000][age({ age_in }) - age_0({ age_in, rec_step_in, age_opening_in, age_closing_in })];

export {
fund_value, unit_balance, unit_allocation, unit_price, empee_contribution, salary, projected_fund_value, age,
age_0_projected,
retirement_age_projected,
salary_0_projected,
salary_inflation_rate_projected,
empee_contribution_rate_projected,
unit_growth_rate_projected,
fund_value_0_projected };


// TODO
export const age_opening = ({ age_opening_in }) => age_opening_in;
export const age_closing = ({ age_closing_in }) => age_closing_in;
export const rec_step = ({ rec_step_in }) => rec_step_in; // wrong: 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)


// neater if I merge these 2 blocks together:

export const age_0_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 1) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const retirement_age_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 2) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const salary_0_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 3) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const salary_inflation_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 4) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const empee_contribution_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 5) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const unit_growth_rate_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 6) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};

export const fund_value_0_actual_co = ({ rec_step_in, age_opening_in, age_closing_in }) => {
  if (rec_step({ rec_step_in }) >= 7) return age_opening({ age_opening_in });else
  return age_closing({ age_closing_in });
};;

export const age_0 = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > age_0_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return age_0_projected({});else
  return age_0_actual({});
};

export const retirement_age = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > retirement_age_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return retirement_age_projected({});else
  return retirement_age_actual({ age_in, rec_step_in, age_opening_in, age_closing_in });
};

export const salary_0 = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > salary_0_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return salary_0_projected({});else
  return salary_0_actual({ age_in, rec_step_in, age_opening_in, age_closing_in });
};

export const salary_inflation_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > salary_inflation_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return salary_inflation_rate_projected({});else
  return salary_inflation_rate_actual({ age_in, rec_step_in, age_opening_in, age_closing_in });
};

export const empee_contribution_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > empee_contribution_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return empee_contribution_rate_projected({});else
  return empee_contribution_rate_actual({ age_in, rec_step_in, age_opening_in, age_closing_in });
};

export const unit_growth_rate = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > unit_growth_rate_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return unit_growth_rate_projected({});else
  return unit_growth_rate_actual({ age_in, rec_step_in, age_opening_in, age_closing_in });
};

export const fund_value_0 = ({ age_in, rec_step_in, age_opening_in, age_closing_in }) => {
  if (age({ age_in }) > fund_value_0_actual_co({ rec_step_in, age_opening_in, age_closing_in }))
  return fund_value_0_projected({});else
  return fund_value_0_actual({ age_in, rec_step_in, age_opening_in, age_closing_in });
};;