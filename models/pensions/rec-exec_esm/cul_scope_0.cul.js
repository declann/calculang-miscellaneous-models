
import {
  //age, // important
  fund_value,unit_balance,unit_allocation,unit_price,empee_contribution,salary,projected_fund_value,age,
  age_0 as age_0_projected,
retirement_age as retirement_age_projected,
salary_0 as salary_0_projected,
salary_inflation_rate as salary_inflation_rate_projected,
empee_contribution_rate as empee_contribution_rate_projected,
unit_growth_rate as unit_growth_rate_projected,
fund_value_0 as fund_value_0_projected // how come I didn't put _ here and it worked?
} from "./projected.cul";


// actual data todo add flexibility

export const salary_inflation_rate_actual = () => [0.019, 0.01, 0.01][age() - age_0()];
export const empee_contribution_rate_actual = () => [0.1, 0.1, 0.08][age() - age_0()];
export const unit_growth_rate_actual = () => [0.06, 0.04, 0.04][age() - age_0()];
export const age_0_actual = () => [age_0(),age_0(),age_0(),][age() - age_0()]; // silly?
export const fund_value_0_actual = () => [fund_value_0(),fund_value_0(),fund_value_0()][age() - age_0()];
export const retirement_age_actual = () => [retirement_age(),retirement_age(),retirement_age(),][age() - age_0()];
export const salary_0_actual = () => [salary_0(),salary_0(),salary_0(),][age() - age_0()];

export {
  fund_value,unit_balance,unit_allocation,unit_price,empee_contribution,salary,projected_fund_value,age,
  age_0_projected,
retirement_age_projected,
salary_0_projected,
salary_inflation_rate_projected,
empee_contribution_rate_projected,
unit_growth_rate_projected,
fund_value_0_projected
};

// TODO
export const age_opening = () => age_opening_in;
export const age_closing = () => age_closing_in;
export const rec_step = () => rec_step_in; // wrong: 0 = AAA, 1 = E salary inflation, 2 = E empee contribution, 3 = E unit growth rate (=EEE)


// neater if I merge these 2 blocks together:

export const age_0_actual_co = () => {
  if (rec_step() >= 1) return age_opening();
  else return age_closing();
};

export const retirement_age_actual_co = () => {
  if (rec_step() >= 2) return age_opening();
  else return age_closing();
};

export const salary_0_actual_co = () => {
  if (rec_step() >= 3) return age_opening();
  else return age_closing();
};

export const salary_inflation_rate_actual_co = () => {
  if (rec_step() >= 4) return age_opening();
  else return age_closing();
};

export const empee_contribution_rate_actual_co = () => {
  if (rec_step() >= 5) return age_opening();
  else return age_closing();
};

export const unit_growth_rate_actual_co = () => {
  if (rec_step() >= 6) return age_opening();
  else return age_closing();
};

export const fund_value_0_actual_co = () => {
  if (rec_step() >= 7) return age_opening();
  else return age_closing();
};;

export const age_0 = () => {
  if(age() > age_0_actual_co())
    return age_0_projected()
  else return age_0_actual();
};

export const retirement_age = () => {
  if(age() > retirement_age_actual_co())
    return retirement_age_projected()
  else return retirement_age_actual();
};

export const salary_0 = () => {
  if(age() > salary_0_actual_co())
    return salary_0_projected()
  else return salary_0_actual();
};

export const salary_inflation_rate = () => {
  if(age() > salary_inflation_rate_actual_co())
    return salary_inflation_rate_projected()
  else return salary_inflation_rate_actual();
};

export const empee_contribution_rate = () => {
  if(age() > empee_contribution_rate_actual_co())
    return empee_contribution_rate_projected()
  else return empee_contribution_rate_actual();
};

export const unit_growth_rate = () => {
  if(age() > unit_growth_rate_actual_co())
    return unit_growth_rate_projected()
  else return unit_growth_rate_actual();
};

export const fund_value_0 = () => {
  if(age() > fund_value_0_actual_co())
    return fund_value_0_projected()
  else return fund_value_0_actual();
};;


