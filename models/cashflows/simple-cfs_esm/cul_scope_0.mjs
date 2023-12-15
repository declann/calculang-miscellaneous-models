
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

// import/export non-to memo?

import { mrr_cf_ as mrr_cf$, vc_cf_ as vc_cf$, rent_cf_ as rent_cf$, employees_ as employees$, payroll_cf_ as payroll_cf$, total_cf_ as total_cf$, npv_ as npv$, mrr_ as mrr$, month_ as month$, mrr_growth_ as mrr_growth$, vc_1_ as vc_1$, vc_2_ as vc_2$, rent_ as rent$, employees_0_ as employees_0$, new_employees_per_month_ as new_employees_per_month$, salary_per_employee_ as salary_per_employee$, last_month_ as last_month$, npv_i_ as npv_i$ } from "./cul_scope_1.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!





////////// start mrr_cf memo-loader code //////////
//const mrr_cf$m = memoize(999999, isEqual)(mrr_cf$);
export const mrr_cf$m = memoize(mrr_cf$, JSON.stringify);
export const mrr_cf = (a) => {
  return mrr_cf$m(a);
  // eslint-disable-next-line no-undef
  mrr_cf$({ month_in, mrr_in, mrr_growth_in }); // never run, but here to "trick" calculang graph logic
};
////////// end mrr_cf memo-loader code //////////



////////// start vc_cf memo-loader code //////////
//const vc_cf$m = memoize(999999, isEqual)(vc_cf$);
export const vc_cf$m = memoize(vc_cf$, JSON.stringify);
export const vc_cf = (a) => {
  return vc_cf$m(a);
  // eslint-disable-next-line no-undef
  vc_cf$({ month_in, vc_1_in, vc_2_in }); // never run, but here to "trick" calculang graph logic
};
////////// end vc_cf memo-loader code //////////



////////// start rent_cf memo-loader code //////////
//const rent_cf$m = memoize(999999, isEqual)(rent_cf$);
export const rent_cf$m = memoize(rent_cf$, JSON.stringify);
export const rent_cf = (a) => {
  return rent_cf$m(a);
  // eslint-disable-next-line no-undef
  rent_cf$({ month_in, rent_in }); // never run, but here to "trick" calculang graph logic
};
////////// end rent_cf memo-loader code //////////



////////// start employees memo-loader code //////////
//const employees$m = memoize(999999, isEqual)(employees$);
export const employees$m = memoize(employees$, JSON.stringify);
export const employees = (a) => {
  return employees$m(a);
  // eslint-disable-next-line no-undef
  employees$({ month_in, employees_0_in, new_employees_per_month_in }); // never run, but here to "trick" calculang graph logic
};
////////// end employees memo-loader code //////////



////////// start payroll_cf memo-loader code //////////
//const payroll_cf$m = memoize(999999, isEqual)(payroll_cf$);
export const payroll_cf$m = memoize(payroll_cf$, JSON.stringify);
export const payroll_cf = (a) => {
  return payroll_cf$m(a);
  // eslint-disable-next-line no-undef
  payroll_cf$({ salary_per_employee_in, month_in, employees_0_in, new_employees_per_month_in }); // never run, but here to "trick" calculang graph logic
};
////////// end payroll_cf memo-loader code //////////



////////// start total_cf memo-loader code //////////
//const total_cf$m = memoize(999999, isEqual)(total_cf$);
export const total_cf$m = memoize(total_cf$, JSON.stringify);
export const total_cf = (a) => {
  return total_cf$m(a);
  // eslint-disable-next-line no-undef
  total_cf$({ month_in, mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in }); // never run, but here to "trick" calculang graph logic
};
////////// end total_cf memo-loader code //////////



////////// start npv memo-loader code //////////
//const npv$m = memoize(999999, isEqual)(npv$);
export const npv$m = memoize(npv$, JSON.stringify);
export const npv = (a) => {
  return npv$m(a);
  // eslint-disable-next-line no-undef
  npv$({ month_in, last_month_in, mrr_in, mrr_growth_in, rent_in, vc_1_in, vc_2_in, salary_per_employee_in, employees_0_in, new_employees_per_month_in, npv_i_in }); // never run, but here to "trick" calculang graph logic
};
////////// end npv memo-loader code //////////



////////// start mrr memo-loader code //////////
//const mrr$m = memoize(999999, isEqual)(mrr$);
export const mrr$m = memoize(mrr$, JSON.stringify);
export const mrr = (a) => {
  return mrr$m(a);
  // eslint-disable-next-line no-undef
  mrr$({ mrr_in }); // never run, but here to "trick" calculang graph logic
};
////////// end mrr memo-loader code //////////



////////// start month memo-loader code //////////
//const month$m = memoize(999999, isEqual)(month$);
export const month$m = memoize(month$, JSON.stringify);
export const month = (a) => {
  return month$m(a);
  // eslint-disable-next-line no-undef
  month$({ month_in }); // never run, but here to "trick" calculang graph logic
};
////////// end month memo-loader code //////////



////////// start mrr_growth memo-loader code //////////
//const mrr_growth$m = memoize(999999, isEqual)(mrr_growth$);
export const mrr_growth$m = memoize(mrr_growth$, JSON.stringify);
export const mrr_growth = (a) => {
  return mrr_growth$m(a);
  // eslint-disable-next-line no-undef
  mrr_growth$({ mrr_growth_in }); // never run, but here to "trick" calculang graph logic
};
////////// end mrr_growth memo-loader code //////////



////////// start vc_1 memo-loader code //////////
//const vc_1$m = memoize(999999, isEqual)(vc_1$);
export const vc_1$m = memoize(vc_1$, JSON.stringify);
export const vc_1 = (a) => {
  return vc_1$m(a);
  // eslint-disable-next-line no-undef
  vc_1$({ vc_1_in }); // never run, but here to "trick" calculang graph logic
};
////////// end vc_1 memo-loader code //////////



////////// start vc_2 memo-loader code //////////
//const vc_2$m = memoize(999999, isEqual)(vc_2$);
export const vc_2$m = memoize(vc_2$, JSON.stringify);
export const vc_2 = (a) => {
  return vc_2$m(a);
  // eslint-disable-next-line no-undef
  vc_2$({ vc_2_in }); // never run, but here to "trick" calculang graph logic
};
////////// end vc_2 memo-loader code //////////



////////// start rent memo-loader code //////////
//const rent$m = memoize(999999, isEqual)(rent$);
export const rent$m = memoize(rent$, JSON.stringify);
export const rent = (a) => {
  return rent$m(a);
  // eslint-disable-next-line no-undef
  rent$({ rent_in }); // never run, but here to "trick" calculang graph logic
};
////////// end rent memo-loader code //////////



////////// start employees_0 memo-loader code //////////
//const employees_0$m = memoize(999999, isEqual)(employees_0$);
export const employees_0$m = memoize(employees_0$, JSON.stringify);
export const employees_0 = (a) => {
  return employees_0$m(a);
  // eslint-disable-next-line no-undef
  employees_0$({ employees_0_in }); // never run, but here to "trick" calculang graph logic
};
////////// end employees_0 memo-loader code //////////



////////// start new_employees_per_month memo-loader code //////////
//const new_employees_per_month$m = memoize(999999, isEqual)(new_employees_per_month$);
export const new_employees_per_month$m = memoize(new_employees_per_month$, JSON.stringify);
export const new_employees_per_month = (a) => {
  return new_employees_per_month$m(a);
  // eslint-disable-next-line no-undef
  new_employees_per_month$({ new_employees_per_month_in }); // never run, but here to "trick" calculang graph logic
};
////////// end new_employees_per_month memo-loader code //////////



////////// start salary_per_employee memo-loader code //////////
//const salary_per_employee$m = memoize(999999, isEqual)(salary_per_employee$);
export const salary_per_employee$m = memoize(salary_per_employee$, JSON.stringify);
export const salary_per_employee = (a) => {
  return salary_per_employee$m(a);
  // eslint-disable-next-line no-undef
  salary_per_employee$({ salary_per_employee_in }); // never run, but here to "trick" calculang graph logic
};
////////// end salary_per_employee memo-loader code //////////



////////// start last_month memo-loader code //////////
//const last_month$m = memoize(999999, isEqual)(last_month$);
export const last_month$m = memoize(last_month$, JSON.stringify);
export const last_month = (a) => {
  return last_month$m(a);
  // eslint-disable-next-line no-undef
  last_month$({ last_month_in }); // never run, but here to "trick" calculang graph logic
};
////////// end last_month memo-loader code //////////



////////// start npv_i memo-loader code //////////
//const npv_i$m = memoize(999999, isEqual)(npv_i$);
export const npv_i$m = memoize(npv_i$, JSON.stringify);
export const npv_i = (a) => {
  return npv_i$m(a);
  // eslint-disable-next-line no-undef
  npv_i$({ npv_i_in }); // never run, but here to "trick" calculang graph logic
};
////////// end npv_i memo-loader code //////////