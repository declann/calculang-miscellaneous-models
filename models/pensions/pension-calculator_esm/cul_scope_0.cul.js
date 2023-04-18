
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    import { net_salary_ as net_salary$, fund_value_ as fund_value$, unit_balance_ as unit_balance$, unit_allocation_ as unit_allocation$, unit_price_ as unit_price$, empee_contribution_ as empee_contribution$, accumulated_empee_contributions_ as accumulated_empee_contributions$, empee_contribution_tax_relief_ as empee_contribution_tax_relief$, emper_contribution_ as emper_contribution$, salary_ as salary$, projected_fund_value_ as projected_fund_value$, age_ as age$, age_0_ as age_0$, retirement_age_ as retirement_age$, salary_0_ as salary_0$, salary_inflation_rate_ as salary_inflation_rate$, empee_contribution_rate_ as empee_contribution_rate$, emper_contribution_rate_ as emper_contribution_rate$, unit_growth_rate_ as unit_growth_rate$, fund_value_0_ as fund_value_0$ } from './pension-calculator.cul.js?+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!
    
    

////////// start net_salary memo-loader code //////////
//const net_salary$m = memoize(999999, isEqual)(net_salary$);
export const net_salary$m = memoize(net_salary$, JSON.stringify);
export const net_salary = (a) => {
  return net_salary$m(a);
  // eslint-disable-next-line no-undef
  net_salary$(); // never run, but here to "trick" calculang graph logic
};
////////// end net_salary memo-loader code //////////



////////// start fund_value memo-loader code //////////
//const fund_value$m = memoize(999999, isEqual)(fund_value$);
export const fund_value$m = memoize(fund_value$, JSON.stringify);
export const fund_value = (a) => {
  return fund_value$m(a);
  // eslint-disable-next-line no-undef
  fund_value$(); // never run, but here to "trick" calculang graph logic
};
////////// end fund_value memo-loader code //////////



////////// start unit_balance memo-loader code //////////
//const unit_balance$m = memoize(999999, isEqual)(unit_balance$);
export const unit_balance$m = memoize(unit_balance$, JSON.stringify);
export const unit_balance = (a) => {
  return unit_balance$m(a);
  // eslint-disable-next-line no-undef
  unit_balance$(); // never run, but here to "trick" calculang graph logic
};
////////// end unit_balance memo-loader code //////////



////////// start unit_allocation memo-loader code //////////
//const unit_allocation$m = memoize(999999, isEqual)(unit_allocation$);
export const unit_allocation$m = memoize(unit_allocation$, JSON.stringify);
export const unit_allocation = (a) => {
  return unit_allocation$m(a);
  // eslint-disable-next-line no-undef
  unit_allocation$(); // never run, but here to "trick" calculang graph logic
};
////////// end unit_allocation memo-loader code //////////



////////// start unit_price memo-loader code //////////
//const unit_price$m = memoize(999999, isEqual)(unit_price$);
export const unit_price$m = memoize(unit_price$, JSON.stringify);
export const unit_price = (a) => {
  return unit_price$m(a);
  // eslint-disable-next-line no-undef
  unit_price$(); // never run, but here to "trick" calculang graph logic
};
////////// end unit_price memo-loader code //////////



////////// start empee_contribution memo-loader code //////////
//const empee_contribution$m = memoize(999999, isEqual)(empee_contribution$);
export const empee_contribution$m = memoize(empee_contribution$, JSON.stringify);
export const empee_contribution = (a) => {
  return empee_contribution$m(a);
  // eslint-disable-next-line no-undef
  empee_contribution$(); // never run, but here to "trick" calculang graph logic
};
////////// end empee_contribution memo-loader code //////////



////////// start accumulated_empee_contributions memo-loader code //////////
//const accumulated_empee_contributions$m = memoize(999999, isEqual)(accumulated_empee_contributions$);
export const accumulated_empee_contributions$m = memoize(accumulated_empee_contributions$, JSON.stringify);
export const accumulated_empee_contributions = (a) => {
  return accumulated_empee_contributions$m(a);
  // eslint-disable-next-line no-undef
  accumulated_empee_contributions$(); // never run, but here to "trick" calculang graph logic
};
////////// end accumulated_empee_contributions memo-loader code //////////



////////// start empee_contribution_tax_relief memo-loader code //////////
//const empee_contribution_tax_relief$m = memoize(999999, isEqual)(empee_contribution_tax_relief$);
export const empee_contribution_tax_relief$m = memoize(empee_contribution_tax_relief$, JSON.stringify);
export const empee_contribution_tax_relief = (a) => {
  return empee_contribution_tax_relief$m(a);
  // eslint-disable-next-line no-undef
  empee_contribution_tax_relief$(); // never run, but here to "trick" calculang graph logic
};
////////// end empee_contribution_tax_relief memo-loader code //////////



////////// start emper_contribution memo-loader code //////////
//const emper_contribution$m = memoize(999999, isEqual)(emper_contribution$);
export const emper_contribution$m = memoize(emper_contribution$, JSON.stringify);
export const emper_contribution = (a) => {
  return emper_contribution$m(a);
  // eslint-disable-next-line no-undef
  emper_contribution$(); // never run, but here to "trick" calculang graph logic
};
////////// end emper_contribution memo-loader code //////////



////////// start salary memo-loader code //////////
//const salary$m = memoize(999999, isEqual)(salary$);
export const salary$m = memoize(salary$, JSON.stringify);
export const salary = (a) => {
  return salary$m(a);
  // eslint-disable-next-line no-undef
  salary$(); // never run, but here to "trick" calculang graph logic
};
////////// end salary memo-loader code //////////



////////// start projected_fund_value memo-loader code //////////
//const projected_fund_value$m = memoize(999999, isEqual)(projected_fund_value$);
export const projected_fund_value$m = memoize(projected_fund_value$, JSON.stringify);
export const projected_fund_value = (a) => {
  return projected_fund_value$m(a);
  // eslint-disable-next-line no-undef
  projected_fund_value$(); // never run, but here to "trick" calculang graph logic
};
////////// end projected_fund_value memo-loader code //////////



////////// start age memo-loader code //////////
//const age$m = memoize(999999, isEqual)(age$);
export const age$m = memoize(age$, JSON.stringify);
export const age = (a) => {
  return age$m(a);
  // eslint-disable-next-line no-undef
  age$(); // never run, but here to "trick" calculang graph logic
};
////////// end age memo-loader code //////////



////////// start age_0 memo-loader code //////////
//const age_0$m = memoize(999999, isEqual)(age_0$);
export const age_0$m = memoize(age_0$, JSON.stringify);
export const age_0 = (a) => {
  return age_0$m(a);
  // eslint-disable-next-line no-undef
  age_0$(); // never run, but here to "trick" calculang graph logic
};
////////// end age_0 memo-loader code //////////



////////// start retirement_age memo-loader code //////////
//const retirement_age$m = memoize(999999, isEqual)(retirement_age$);
export const retirement_age$m = memoize(retirement_age$, JSON.stringify);
export const retirement_age = (a) => {
  return retirement_age$m(a);
  // eslint-disable-next-line no-undef
  retirement_age$(); // never run, but here to "trick" calculang graph logic
};
////////// end retirement_age memo-loader code //////////



////////// start salary_0 memo-loader code //////////
//const salary_0$m = memoize(999999, isEqual)(salary_0$);
export const salary_0$m = memoize(salary_0$, JSON.stringify);
export const salary_0 = (a) => {
  return salary_0$m(a);
  // eslint-disable-next-line no-undef
  salary_0$(); // never run, but here to "trick" calculang graph logic
};
////////// end salary_0 memo-loader code //////////



////////// start salary_inflation_rate memo-loader code //////////
//const salary_inflation_rate$m = memoize(999999, isEqual)(salary_inflation_rate$);
export const salary_inflation_rate$m = memoize(salary_inflation_rate$, JSON.stringify);
export const salary_inflation_rate = (a) => {
  return salary_inflation_rate$m(a);
  // eslint-disable-next-line no-undef
  salary_inflation_rate$(); // never run, but here to "trick" calculang graph logic
};
////////// end salary_inflation_rate memo-loader code //////////



////////// start empee_contribution_rate memo-loader code //////////
//const empee_contribution_rate$m = memoize(999999, isEqual)(empee_contribution_rate$);
export const empee_contribution_rate$m = memoize(empee_contribution_rate$, JSON.stringify);
export const empee_contribution_rate = (a) => {
  return empee_contribution_rate$m(a);
  // eslint-disable-next-line no-undef
  empee_contribution_rate$(); // never run, but here to "trick" calculang graph logic
};
////////// end empee_contribution_rate memo-loader code //////////



////////// start emper_contribution_rate memo-loader code //////////
//const emper_contribution_rate$m = memoize(999999, isEqual)(emper_contribution_rate$);
export const emper_contribution_rate$m = memoize(emper_contribution_rate$, JSON.stringify);
export const emper_contribution_rate = (a) => {
  return emper_contribution_rate$m(a);
  // eslint-disable-next-line no-undef
  emper_contribution_rate$(); // never run, but here to "trick" calculang graph logic
};
////////// end emper_contribution_rate memo-loader code //////////



////////// start unit_growth_rate memo-loader code //////////
//const unit_growth_rate$m = memoize(999999, isEqual)(unit_growth_rate$);
export const unit_growth_rate$m = memoize(unit_growth_rate$, JSON.stringify);
export const unit_growth_rate = (a) => {
  return unit_growth_rate$m(a);
  // eslint-disable-next-line no-undef
  unit_growth_rate$(); // never run, but here to "trick" calculang graph logic
};
////////// end unit_growth_rate memo-loader code //////////



////////// start fund_value_0 memo-loader code //////////
//const fund_value_0$m = memoize(999999, isEqual)(fund_value_0$);
export const fund_value_0$m = memoize(fund_value_0$, JSON.stringify);
export const fund_value_0 = (a) => {
  return fund_value_0$m(a);
  // eslint-disable-next-line no-undef
  fund_value_0$(); // never run, but here to "trick" calculang graph logic
};
////////// end fund_value_0 memo-loader code //////////


    