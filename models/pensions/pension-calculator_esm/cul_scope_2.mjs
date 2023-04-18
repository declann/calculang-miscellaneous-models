import { fund_value_0 } from "./cul_scope_0.mjs";import { unit_growth_rate } from "./cul_scope_0.mjs";import { emper_contribution_rate } from "./cul_scope_0.mjs";import { empee_contribution_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate } from "./cul_scope_0.mjs";import { salary_0 } from "./cul_scope_0.mjs";import { retirement_age } from "./cul_scope_0.mjs";import { age_0 } from "./cul_scope_0.mjs";import { age } from "./cul_scope_0.mjs";import { projected_fund_value } from "./cul_scope_0.mjs";import { salary } from "./cul_scope_0.mjs";import { emper_contribution } from "./cul_scope_0.mjs";import { empee_contribution_tax_relief } from "./cul_scope_0.mjs";import { accumulated_empee_contributions } from "./cul_scope_0.mjs";import { empee_contribution } from "./cul_scope_0.mjs";import { unit_price } from "./cul_scope_0.mjs";import { unit_allocation } from "./cul_scope_0.mjs";import { unit_balance } from "./cul_scope_0.mjs";import { fund_value } from "./cul_scope_0.mjs";import { net_salary } from "./cul_scope_0.mjs";
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { gross_salary_ as gross_salary$, tax_credits_ as tax_credits$, pension_contribution_ as pension_contribution$, net_salary_ as net_salary$, income_tax_ as income_tax$, effective_rate_ as effective_rate$, prsi_taxable_salary_ as prsi_taxable_salary$, prsi_ as prsi$, prsi_rate_ as prsi_rate$, usc_table_ as usc_table$, usc_band_id_ as usc_band_id$, usc_band_end_ as usc_band_end$, usc_band_start_ as usc_band_start$, usc_rate_ as usc_rate$, usc_taxable_salary_ as usc_taxable_salary$, usc_by_band_id_ as usc_by_band_id$, usc_ as usc$, paye_table_ as paye_table$, paye_band_id_ as paye_band_id$, paye_band_end_ as paye_band_end$, paye_band_start_ as paye_band_start$, paye_rate_ as paye_rate$, paye_taxable_salary_ as paye_taxable_salary$, paye_by_band_id_ as paye_by_band_id$, paye_over_bands_ as paye_over_bands$, paye_ as paye$, net_salary_plus_pension_contribution_ as net_salary_plus_pension_contribution$ } from "./cul_scope_3.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start gross_salary memo-loader code //////////
//const gross_salary$m = memoize(999999, isEqual)(gross_salary$);
export const gross_salary$m = memoize(gross_salary$, JSON.stringify);
export const gross_salary = (a) => {
  return gross_salary$m(a);
  // eslint-disable-next-line no-undef
  gross_salary$({ gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end gross_salary memo-loader code //////////



////////// start tax_credits memo-loader code //////////
//const tax_credits$m = memoize(999999, isEqual)(tax_credits$);
export const tax_credits$m = memoize(tax_credits$, JSON.stringify);
export const tax_credits = (a) => {
  return tax_credits$m(a);
  // eslint-disable-next-line no-undef
  tax_credits$({ tax_credits_in }); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credits memo-loader code //////////



////////// start pension_contribution memo-loader code //////////
//const pension_contribution$m = memoize(999999, isEqual)(pension_contribution$);
export const pension_contribution$m = memoize(pension_contribution$, JSON.stringify);
export const pension_contribution = (a) => {
  return pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  pension_contribution$({ pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end pension_contribution memo-loader code //////////



////////// start net_salary memo-loader code //////////
//const net_salary$m = memoize(999999, isEqual)(net_salary$);
export const net_salary$m = memoize(net_salary$, JSON.stringify);
export const net_salary_ = (a) => {
  return net_salary$m(a);
  // eslint-disable-next-line no-undef
  net_salary$({ gross_salary_in, pension_contribution_in, tax_credits_in }); // never run, but here to "trick" calculang graph logic
};
////////// end net_salary memo-loader code //////////



////////// start income_tax memo-loader code //////////
//const income_tax$m = memoize(999999, isEqual)(income_tax$);
export const income_tax$m = memoize(income_tax$, JSON.stringify);
export const income_tax = (a) => {
  return income_tax$m(a);
  // eslint-disable-next-line no-undef
  income_tax$({ gross_salary_in, pension_contribution_in, tax_credits_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax memo-loader code //////////



////////// start effective_rate memo-loader code //////////
//const effective_rate$m = memoize(999999, isEqual)(effective_rate$);
export const effective_rate$m = memoize(effective_rate$, JSON.stringify);
export const effective_rate = (a) => {
  return effective_rate$m(a);
  // eslint-disable-next-line no-undef
  effective_rate$({ gross_salary_in, pension_contribution_in, tax_credits_in }); // never run, but here to "trick" calculang graph logic
};
////////// end effective_rate memo-loader code //////////



////////// start prsi_taxable_salary memo-loader code //////////
//const prsi_taxable_salary$m = memoize(999999, isEqual)(prsi_taxable_salary$);
export const prsi_taxable_salary$m = memoize(prsi_taxable_salary$, JSON.stringify);
export const prsi_taxable_salary = (a) => {
  return prsi_taxable_salary$m(a);
  // eslint-disable-next-line no-undef
  prsi_taxable_salary$({ gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_taxable_salary memo-loader code //////////



////////// start prsi memo-loader code //////////
//const prsi$m = memoize(999999, isEqual)(prsi$);
export const prsi$m = memoize(prsi$, JSON.stringify);
export const prsi = (a) => {
  return prsi$m(a);
  // eslint-disable-next-line no-undef
  prsi$({ gross_salary_in }); // never run, but here to "trick" calculang graph logic
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
  usc_band_end$({ usc_band_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_band_end memo-loader code //////////



////////// start usc_band_start memo-loader code //////////
//const usc_band_start$m = memoize(999999, isEqual)(usc_band_start$);
export const usc_band_start$m = memoize(usc_band_start$, JSON.stringify);
export const usc_band_start = (a) => {
  return usc_band_start$m(a);
  // eslint-disable-next-line no-undef
  usc_band_start$({ usc_band_id_in }); // never run, but here to "trick" calculang graph logic
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
  usc_taxable_salary$({ gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_taxable_salary memo-loader code //////////



////////// start usc_by_band_id memo-loader code //////////
//const usc_by_band_id$m = memoize(999999, isEqual)(usc_by_band_id$);
export const usc_by_band_id$m = memoize(usc_by_band_id$, JSON.stringify);
export const usc_by_band_id = (a) => {
  return usc_by_band_id$m(a);
  // eslint-disable-next-line no-undef
  usc_by_band_id$({ usc_band_id_in, gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_band_id memo-loader code //////////



////////// start usc memo-loader code //////////
//const usc$m = memoize(999999, isEqual)(usc$);
export const usc$m = memoize(usc$, JSON.stringify);
export const usc = (a) => {
  return usc$m(a);
  // eslint-disable-next-line no-undef
  usc$({ gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc memo-loader code //////////



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
  paye_band_end$({ paye_band_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_band_end memo-loader code //////////



////////// start paye_band_start memo-loader code //////////
//const paye_band_start$m = memoize(999999, isEqual)(paye_band_start$);
export const paye_band_start$m = memoize(paye_band_start$, JSON.stringify);
export const paye_band_start = (a) => {
  return paye_band_start$m(a);
  // eslint-disable-next-line no-undef
  paye_band_start$({ paye_band_id_in }); // never run, but here to "trick" calculang graph logic
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
  paye_taxable_salary$({ gross_salary_in, pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_taxable_salary memo-loader code //////////



////////// start paye_by_band_id memo-loader code //////////
//const paye_by_band_id$m = memoize(999999, isEqual)(paye_by_band_id$);
export const paye_by_band_id$m = memoize(paye_by_band_id$, JSON.stringify);
export const paye_by_band_id = (a) => {
  return paye_by_band_id$m(a);
  // eslint-disable-next-line no-undef
  paye_by_band_id$({ paye_band_id_in, gross_salary_in, pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_band_id memo-loader code //////////



////////// start paye_over_bands memo-loader code //////////
//const paye_over_bands$m = memoize(999999, isEqual)(paye_over_bands$);
export const paye_over_bands$m = memoize(paye_over_bands$, JSON.stringify);
export const paye_over_bands = (a) => {
  return paye_over_bands$m(a);
  // eslint-disable-next-line no-undef
  paye_over_bands$({ gross_salary_in, pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_over_bands memo-loader code //////////



////////// start paye memo-loader code //////////
//const paye$m = memoize(999999, isEqual)(paye$);
export const paye$m = memoize(paye$, JSON.stringify);
export const paye = (a) => {
  return paye$m(a);
  // eslint-disable-next-line no-undef
  paye$({ gross_salary_in, pension_contribution_in, tax_credits_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye memo-loader code //////////



////////// start net_salary_plus_pension_contribution memo-loader code //////////
//const net_salary_plus_pension_contribution$m = memoize(999999, isEqual)(net_salary_plus_pension_contribution$);
export const net_salary_plus_pension_contribution$m = memoize(net_salary_plus_pension_contribution$, JSON.stringify);
export const net_salary_plus_pension_contribution = (a) => {
  return net_salary_plus_pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  net_salary_plus_pension_contribution$({ gross_salary_in, pension_contribution_in, tax_credits_in }); // never run, but here to "trick" calculang graph logic
};
////////// end net_salary_plus_pension_contribution memo-loader code //////////