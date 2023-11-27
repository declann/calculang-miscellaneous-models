
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { usc_table_ as usc_table$, usc_band_id_ as usc_band_id$, usc_band_end_ as usc_band_end$, usc_band_start_ as usc_band_start$, usc_rate_ as usc_rate$, usc_taxable_salary_ as usc_taxable_salary$, usc_by_band_id_ as usc_by_band_id$, usc_taxable_by_band_id_ as usc_taxable_by_band_id$, usc_ as usc$, pay_period_ as pay_period$, pay_period_duration_ as pay_period_duration$, op_gross_salary_ as op_gross_salary$, pay_period_gross_salary_ as pay_period_gross_salary$, fut_gross_salary_ as fut_gross_salary$, gross_salary_ as gross_salary$, usc_payable_ as usc_payable$, paye_table_ as paye_table$, paye_band_id_ as paye_band_id$, paye_band_end_ as paye_band_end$, paye_band_start_ as paye_band_start$, paye_rate_ as paye_rate$, paye_taxable_salary_ as paye_taxable_salary$, op_pension_contribution_ as op_pension_contribution$, pay_period_pension_contribution_ as pay_period_pension_contribution$, fut_pension_contribution_ as fut_pension_contribution$, pension_contribution_ as pension_contribution$, paye_by_band_id_ as paye_by_band_id$, paye_taxable_by_band_id_ as paye_taxable_by_band_id$, paye_exempt_ as paye_exempt$, paye_over_bands_ as paye_over_bands$, tax_credits_pa_ as tax_credits_pa$, tax_credits_ as tax_credits$, tax_credits_deducted_ as tax_credits_deducted$, paye_ as paye$, paye_payable_ as paye_payable$, time_ as time$, factor_for_credits_and_bands_ as factor_for_credits_and_bands$, income_tax_ as income_tax$, prsi_taxable_salary_ as prsi_taxable_salary$, prsi_ as prsi$, prsi_rate_ as prsi_rate$, prsi_payable_ as prsi_payable$, net_salary_ as net_salary$, net_salary_pay_period_ as net_salary_pay_period$ } from "./cul_scope_1.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start usc_table memo-loader code //////////
//const usc_table$m = memoize(999999, isEqual)(usc_table$);
export const usc_table$m = memoize(usc_table$, JSON.stringify);
export const usc_table = (a) => {
  return usc_table$m(a);
  // eslint-disable-next-line no-undef
  usc_table$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_table memo-loader code //////////



////////// start usc_band_id memo-loader code //////////
//const usc_band_id$m = memoize(999999, isEqual)(usc_band_id$);
export const usc_band_id$m = memoize(usc_band_id$, JSON.stringify);
export const usc_band_id = (a) => {
  return usc_band_id$m(a);
  // eslint-disable-next-line no-undef
  usc_band_id$({ usc_band_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_band_id memo-loader code //////////



////////// start usc_band_end memo-loader code //////////
//const usc_band_end$m = memoize(999999, isEqual)(usc_band_end$);
export const usc_band_end$m = memoize(usc_band_end$, JSON.stringify);
export const usc_band_end = (a) => {
  return usc_band_end$m(a);
  // eslint-disable-next-line no-undef
  usc_band_end$({ usc_band_id_in, pay_period_duration_in, time_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_band_end memo-loader code //////////



////////// start usc_band_start memo-loader code //////////
//const usc_band_start$m = memoize(999999, isEqual)(usc_band_start$);
export const usc_band_start$m = memoize(usc_band_start$, JSON.stringify);
export const usc_band_start = (a) => {
  return usc_band_start$m(a);
  // eslint-disable-next-line no-undef
  usc_band_start$({ usc_band_id_in, pay_period_duration_in, time_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_band_start memo-loader code //////////



////////// start usc_rate memo-loader code //////////
//const usc_rate$m = memoize(999999, isEqual)(usc_rate$);
export const usc_rate$m = memoize(usc_rate$, JSON.stringify);
export const usc_rate = (a) => {
  return usc_rate$m(a);
  // eslint-disable-next-line no-undef
  usc_rate$({ usc_band_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_rate memo-loader code //////////



////////// start usc_taxable_salary memo-loader code //////////
//const usc_taxable_salary$m = memoize(999999, isEqual)(usc_taxable_salary$);
export const usc_taxable_salary$m = memoize(usc_taxable_salary$, JSON.stringify);
export const usc_taxable_salary = (a) => {
  return usc_taxable_salary$m(a);
  // eslint-disable-next-line no-undef
  usc_taxable_salary$({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_taxable_salary memo-loader code //////////



////////// start usc_by_band_id memo-loader code //////////
//const usc_by_band_id$m = memoize(999999, isEqual)(usc_by_band_id$);
export const usc_by_band_id$m = memoize(usc_by_band_id$, JSON.stringify);
export const usc_by_band_id = (a) => {
  return usc_by_band_id$m(a);
  // eslint-disable-next-line no-undef
  usc_by_band_id$({ usc_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_band_id memo-loader code //////////



////////// start usc_taxable_by_band_id memo-loader code //////////
//const usc_taxable_by_band_id$m = memoize(999999, isEqual)(usc_taxable_by_band_id$);
export const usc_taxable_by_band_id$m = memoize(usc_taxable_by_band_id$, JSON.stringify);
export const usc_taxable_by_band_id = (a) => {
  return usc_taxable_by_band_id$m(a);
  // eslint-disable-next-line no-undef
  usc_taxable_by_band_id$({ usc_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_taxable_by_band_id memo-loader code //////////



////////// start usc memo-loader code //////////
//const usc$m = memoize(999999, isEqual)(usc$);
export const usc$m = memoize(usc$, JSON.stringify);
export const usc = (a) => {
  return usc$m(a);
  // eslint-disable-next-line no-undef
  usc$({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc memo-loader code //////////



////////// start pay_period memo-loader code //////////
//const pay_period$m = memoize(999999, isEqual)(pay_period$);
export const pay_period$m = memoize(pay_period$, JSON.stringify);
export const pay_period = (a) => {
  return pay_period$m(a);
  // eslint-disable-next-line no-undef
  pay_period$({ pay_period_in }); // never run, but here to "trick" calculang graph logic
};
////////// end pay_period memo-loader code //////////



////////// start pay_period_duration memo-loader code //////////
//const pay_period_duration$m = memoize(999999, isEqual)(pay_period_duration$);
export const pay_period_duration$m = memoize(pay_period_duration$, JSON.stringify);
export const pay_period_duration = (a) => {
  return pay_period_duration$m(a);
  // eslint-disable-next-line no-undef
  pay_period_duration$({ pay_period_duration_in }); // never run, but here to "trick" calculang graph logic
};
////////// end pay_period_duration memo-loader code //////////



////////// start op_gross_salary memo-loader code //////////
//const op_gross_salary$m = memoize(999999, isEqual)(op_gross_salary$);
export const op_gross_salary$m = memoize(op_gross_salary$, JSON.stringify);
export const op_gross_salary = (a) => {
  return op_gross_salary$m(a);
  // eslint-disable-next-line no-undef
  op_gross_salary$({ op_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end op_gross_salary memo-loader code //////////



////////// start pay_period_gross_salary memo-loader code //////////
//const pay_period_gross_salary$m = memoize(999999, isEqual)(pay_period_gross_salary$);
export const pay_period_gross_salary$m = memoize(pay_period_gross_salary$, JSON.stringify);
export const pay_period_gross_salary = (a) => {
  return pay_period_gross_salary$m(a);
  // eslint-disable-next-line no-undef
  pay_period_gross_salary$({ pay_period_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end pay_period_gross_salary memo-loader code //////////



////////// start fut_gross_salary memo-loader code //////////
//const fut_gross_salary$m = memoize(999999, isEqual)(fut_gross_salary$);
export const fut_gross_salary$m = memoize(fut_gross_salary$, JSON.stringify);
export const fut_gross_salary = (a) => {
  return fut_gross_salary$m(a);
  // eslint-disable-next-line no-undef
  fut_gross_salary$({ fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end fut_gross_salary memo-loader code //////////



////////// start gross_salary memo-loader code //////////
//const gross_salary$m = memoize(999999, isEqual)(gross_salary$);
export const gross_salary$m = memoize(gross_salary$, JSON.stringify);
export const gross_salary = (a) => {
  return gross_salary$m(a);
  // eslint-disable-next-line no-undef
  gross_salary$({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end gross_salary memo-loader code //////////



////////// start usc_payable memo-loader code //////////
//const usc_payable$m = memoize(999999, isEqual)(usc_payable$);
export const usc_payable$m = memoize(usc_payable$, JSON.stringify);
export const usc_payable = (a) => {
  return usc_payable$m(a);
  // eslint-disable-next-line no-undef
  usc_payable$({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_payable memo-loader code //////////



////////// start paye_table memo-loader code //////////
//const paye_table$m = memoize(999999, isEqual)(paye_table$);
export const paye_table$m = memoize(paye_table$, JSON.stringify);
export const paye_table = (a) => {
  return paye_table$m(a);
  // eslint-disable-next-line no-undef
  paye_table$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_table memo-loader code //////////



////////// start paye_band_id memo-loader code //////////
//const paye_band_id$m = memoize(999999, isEqual)(paye_band_id$);
export const paye_band_id$m = memoize(paye_band_id$, JSON.stringify);
export const paye_band_id = (a) => {
  return paye_band_id$m(a);
  // eslint-disable-next-line no-undef
  paye_band_id$({ paye_band_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_band_id memo-loader code //////////



////////// start paye_band_end memo-loader code //////////
//const paye_band_end$m = memoize(999999, isEqual)(paye_band_end$);
export const paye_band_end$m = memoize(paye_band_end$, JSON.stringify);
export const paye_band_end = (a) => {
  return paye_band_end$m(a);
  // eslint-disable-next-line no-undef
  paye_band_end$({ paye_band_id_in, pay_period_duration_in, time_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_band_end memo-loader code //////////



////////// start paye_band_start memo-loader code //////////
//const paye_band_start$m = memoize(999999, isEqual)(paye_band_start$);
export const paye_band_start$m = memoize(paye_band_start$, JSON.stringify);
export const paye_band_start = (a) => {
  return paye_band_start$m(a);
  // eslint-disable-next-line no-undef
  paye_band_start$({ paye_band_id_in, pay_period_duration_in, time_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_band_start memo-loader code //////////



////////// start paye_rate memo-loader code //////////
//const paye_rate$m = memoize(999999, isEqual)(paye_rate$);
export const paye_rate$m = memoize(paye_rate$, JSON.stringify);
export const paye_rate = (a) => {
  return paye_rate$m(a);
  // eslint-disable-next-line no-undef
  paye_rate$({ paye_band_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_rate memo-loader code //////////



////////// start paye_taxable_salary memo-loader code //////////
//const paye_taxable_salary$m = memoize(999999, isEqual)(paye_taxable_salary$);
export const paye_taxable_salary$m = memoize(paye_taxable_salary$, JSON.stringify);
export const paye_taxable_salary = (a) => {
  return paye_taxable_salary$m(a);
  // eslint-disable-next-line no-undef
  paye_taxable_salary$({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_taxable_salary memo-loader code //////////



////////// start op_pension_contribution memo-loader code //////////
//const op_pension_contribution$m = memoize(999999, isEqual)(op_pension_contribution$);
export const op_pension_contribution$m = memoize(op_pension_contribution$, JSON.stringify);
export const op_pension_contribution = (a) => {
  return op_pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  op_pension_contribution$({ op_pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end op_pension_contribution memo-loader code //////////



////////// start pay_period_pension_contribution memo-loader code //////////
//const pay_period_pension_contribution$m = memoize(999999, isEqual)(pay_period_pension_contribution$);
export const pay_period_pension_contribution$m = memoize(pay_period_pension_contribution$, JSON.stringify);
export const pay_period_pension_contribution = (a) => {
  return pay_period_pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  pay_period_pension_contribution$({ pay_period_pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end pay_period_pension_contribution memo-loader code //////////



////////// start fut_pension_contribution memo-loader code //////////
//const fut_pension_contribution$m = memoize(999999, isEqual)(fut_pension_contribution$);
export const fut_pension_contribution$m = memoize(fut_pension_contribution$, JSON.stringify);
export const fut_pension_contribution = (a) => {
  return fut_pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  fut_pension_contribution$({ fut_pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end fut_pension_contribution memo-loader code //////////



////////// start pension_contribution memo-loader code //////////
//const pension_contribution$m = memoize(999999, isEqual)(pension_contribution$);
export const pension_contribution$m = memoize(pension_contribution$, JSON.stringify);
export const pension_contribution = (a) => {
  return pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  pension_contribution$({ time_in, pay_period_in, op_pension_contribution_in, pay_period_pension_contribution_in, pay_period_duration_in, fut_pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end pension_contribution memo-loader code //////////



////////// start paye_by_band_id memo-loader code //////////
//const paye_by_band_id$m = memoize(999999, isEqual)(paye_by_band_id$);
export const paye_by_band_id$m = memoize(paye_by_band_id$, JSON.stringify);
export const paye_by_band_id = (a) => {
  return paye_by_band_id$m(a);
  // eslint-disable-next-line no-undef
  paye_by_band_id$({ paye_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_band_id memo-loader code //////////



////////// start paye_taxable_by_band_id memo-loader code //////////
//const paye_taxable_by_band_id$m = memoize(999999, isEqual)(paye_taxable_by_band_id$);
export const paye_taxable_by_band_id$m = memoize(paye_taxable_by_band_id$, JSON.stringify);
export const paye_taxable_by_band_id = (a) => {
  return paye_taxable_by_band_id$m(a);
  // eslint-disable-next-line no-undef
  paye_taxable_by_band_id$({ paye_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_taxable_by_band_id memo-loader code //////////



////////// start paye_exempt memo-loader code //////////
//const paye_exempt$m = memoize(999999, isEqual)(paye_exempt$);
export const paye_exempt$m = memoize(paye_exempt$, JSON.stringify);
export const paye_exempt = (a) => {
  return paye_exempt$m(a);
  // eslint-disable-next-line no-undef
  paye_exempt$({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_exempt memo-loader code //////////



////////// start paye_over_bands memo-loader code //////////
//const paye_over_bands$m = memoize(999999, isEqual)(paye_over_bands$);
export const paye_over_bands$m = memoize(paye_over_bands$, JSON.stringify);
export const paye_over_bands = (a) => {
  return paye_over_bands$m(a);
  // eslint-disable-next-line no-undef
  paye_over_bands$({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_over_bands memo-loader code //////////



////////// start tax_credits_pa memo-loader code //////////
//const tax_credits_pa$m = memoize(999999, isEqual)(tax_credits_pa$);
export const tax_credits_pa$m = memoize(tax_credits_pa$, JSON.stringify);
export const tax_credits_pa = (a) => {
  return tax_credits_pa$m(a);
  // eslint-disable-next-line no-undef
  tax_credits_pa$({ tax_credits_pa_in }); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credits_pa memo-loader code //////////



////////// start tax_credits memo-loader code //////////
//const tax_credits$m = memoize(999999, isEqual)(tax_credits$);
export const tax_credits$m = memoize(tax_credits$, JSON.stringify);
export const tax_credits = (a) => {
  return tax_credits$m(a);
  // eslint-disable-next-line no-undef
  tax_credits$({ tax_credits_pa_in, pay_period_duration_in, time_in }); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credits memo-loader code //////////



////////// start tax_credits_deducted memo-loader code //////////
//const tax_credits_deducted$m = memoize(999999, isEqual)(tax_credits_deducted$);
export const tax_credits_deducted$m = memoize(tax_credits_deducted$, JSON.stringify);
export const tax_credits_deducted = (a) => {
  return tax_credits_deducted$m(a);
  // eslint-disable-next-line no-undef
  tax_credits_deducted$({ tax_credits_pa_in, pay_period_duration_in, time_in }); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credits_deducted memo-loader code //////////



////////// start paye memo-loader code //////////
//const paye$m = memoize(999999, isEqual)(paye$);
export const paye$m = memoize(paye$, JSON.stringify);
export const paye = (a) => {
  return paye$m(a);
  // eslint-disable-next-line no-undef
  paye$({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye memo-loader code //////////



////////// start paye_payable memo-loader code //////////
//const paye_payable$m = memoize(999999, isEqual)(paye_payable$);
export const paye_payable$m = memoize(paye_payable$, JSON.stringify);
export const paye_payable = (a) => {
  return paye_payable$m(a);
  // eslint-disable-next-line no-undef
  paye_payable$({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_payable memo-loader code //////////



////////// start time memo-loader code //////////
//const time$m = memoize(999999, isEqual)(time$);
export const time$m = memoize(time$, JSON.stringify);
export const time = (a) => {
  return time$m(a);
  // eslint-disable-next-line no-undef
  time$({ time_in }); // never run, but here to "trick" calculang graph logic
};
////////// end time memo-loader code //////////



////////// start factor_for_credits_and_bands memo-loader code //////////
//const factor_for_credits_and_bands$m = memoize(999999, isEqual)(factor_for_credits_and_bands$);
export const factor_for_credits_and_bands$m = memoize(factor_for_credits_and_bands$, JSON.stringify);
export const factor_for_credits_and_bands = (a) => {
  return factor_for_credits_and_bands$m(a);
  // eslint-disable-next-line no-undef
  factor_for_credits_and_bands$({ pay_period_duration_in, time_in }); // never run, but here to "trick" calculang graph logic
};
////////// end factor_for_credits_and_bands memo-loader code //////////



////////// start income_tax memo-loader code //////////
//const income_tax$m = memoize(999999, isEqual)(income_tax$);
export const income_tax$m = memoize(income_tax$, JSON.stringify);
export const income_tax = (a) => {
  return income_tax$m(a);
  // eslint-disable-next-line no-undef
  income_tax$({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax memo-loader code //////////



////////// start prsi_taxable_salary memo-loader code //////////
//const prsi_taxable_salary$m = memoize(999999, isEqual)(prsi_taxable_salary$);
export const prsi_taxable_salary$m = memoize(prsi_taxable_salary$, JSON.stringify);
export const prsi_taxable_salary = (a) => {
  return prsi_taxable_salary$m(a);
  // eslint-disable-next-line no-undef
  prsi_taxable_salary$({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_taxable_salary memo-loader code //////////



////////// start prsi memo-loader code //////////
//const prsi$m = memoize(999999, isEqual)(prsi$);
export const prsi$m = memoize(prsi$, JSON.stringify);
export const prsi = (a) => {
  return prsi$m(a);
  // eslint-disable-next-line no-undef
  prsi$({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi memo-loader code //////////



////////// start prsi_rate memo-loader code //////////
//const prsi_rate$m = memoize(999999, isEqual)(prsi_rate$);
export const prsi_rate$m = memoize(prsi_rate$, JSON.stringify);
export const prsi_rate = (a) => {
  return prsi_rate$m(a);
  // eslint-disable-next-line no-undef
  prsi_rate$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_rate memo-loader code //////////



////////// start prsi_payable memo-loader code //////////
//const prsi_payable$m = memoize(999999, isEqual)(prsi_payable$);
export const prsi_payable$m = memoize(prsi_payable$, JSON.stringify);
export const prsi_payable = (a) => {
  return prsi_payable$m(a);
  // eslint-disable-next-line no-undef
  prsi_payable$({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_payable memo-loader code //////////



////////// start net_salary memo-loader code //////////
//const net_salary$m = memoize(999999, isEqual)(net_salary$);
export const net_salary$m = memoize(net_salary$, JSON.stringify);
export const net_salary = (a) => {
  return net_salary$m(a);
  // eslint-disable-next-line no-undef
  net_salary$({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }); // never run, but here to "trick" calculang graph logic
};
////////// end net_salary memo-loader code //////////



////////// start net_salary_pay_period memo-loader code //////////
//const net_salary_pay_period$m = memoize(999999, isEqual)(net_salary_pay_period$);
export const net_salary_pay_period$m = memoize(net_salary_pay_period$, JSON.stringify);
export const net_salary_pay_period = (a) => {
  return net_salary_pay_period$m(a);
  // eslint-disable-next-line no-undef
  net_salary_pay_period$({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }); // never run, but here to "trick" calculang graph logic
};
////////// end net_salary_pay_period memo-loader code //////////