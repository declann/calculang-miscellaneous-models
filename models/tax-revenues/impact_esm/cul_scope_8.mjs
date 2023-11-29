import { prsi_rate } from "./cul_scope_3.mjs";import { paye_table } from "./cul_scope_3.mjs";import { usc_table } from "./cul_scope_3.mjs";import { band } from "./cul_scope_3.mjs";import { tax_credit } from "./cul_scope_3.mjs";import { tax_credit_proposed } from "./cul_scope_3.mjs";import { tax_rate } from "./cul_scope_3.mjs";import { paye_by_taxpayer } from "./cul_scope_3.mjs";import { prsi_by_taxpayer } from "./cul_scope_3.mjs";import { usc_by_taxpayer } from "./cul_scope_3.mjs";import { income_tax_by_taxpayer } from "./cul_scope_3.mjs";import { paye_sum } from "./cul_scope_3.mjs";import { prsi_sum } from "./cul_scope_3.mjs";import { usc_sum } from "./cul_scope_3.mjs";import { paye } from "./cul_scope_3.mjs";import { prsi } from "./cul_scope_3.mjs";import { usc } from "./cul_scope_3.mjs";import { effective_rate } from "./cul_scope_3.mjs";import { income_tax } from "./cul_scope_3.mjs";import { income_tax_sum } from "./cul_scope_3.mjs";import { pension_contribution } from "./cul_scope_0.mjs";import { prsi_impact } from "./cul_scope_0.mjs";import { prsi_sum_impact } from "./cul_scope_0.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { usc_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_proposed } from "./cul_scope_0.mjs";import { prsi_sum_proposed } from "./cul_scope_0.mjs";import { usc_proposed } from "./cul_scope_0.mjs";import { usc_sum_proposed } from "./cul_scope_0.mjs";import { paye_proposed } from "./cul_scope_0.mjs";import { paye_sum_proposed } from "./cul_scope_0.mjs";import { effective_rate_proposed } from "./cul_scope_0.mjs";import { income_tax_proposed } from "./cul_scope_0.mjs";import { income_tax_sum_proposed } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_current } from "./cul_scope_0.mjs";import { usc_by_taxpayer_current } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_current } from "./cul_scope_0.mjs";import { prsi_sum_current } from "./cul_scope_0.mjs";import { usc_current } from "./cul_scope_0.mjs";import { usc_sum_current } from "./cul_scope_0.mjs";import { paye_current } from "./cul_scope_0.mjs";import { paye_sum_current } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_0.mjs";import { income_tax_current } from "./cul_scope_0.mjs";import { income_tax_sum_current } from "./cul_scope_0.mjs";
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { income_tax_ as income_tax$, effective_rate_ as effective_rate$, usc_ as usc$, paye_ as paye$, prsi_ as prsi$, taxpayer_id_ as taxpayer_id$, taxpayer_table_ as taxpayer_table$, taxpayer_count_ as taxpayer_count$, gross_salary_ as gross_salary$, proportion_ as proportion$, income_tax_by_taxpayer_ as income_tax_by_taxpayer$, paye_by_taxpayer_ as paye_by_taxpayer$, usc_by_taxpayer_ as usc_by_taxpayer$, prsi_by_taxpayer_ as prsi_by_taxpayer$, income_tax_sum_ as income_tax_sum$, paye_sum_ as paye_sum$, usc_sum_ as usc_sum$, prsi_sum_ as prsi_sum$, tax_credits_ as tax_credits$ } from "./cul_scope_9.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start income_tax memo-loader code //////////
//const income_tax$m = memoize(999999, isEqual)(income_tax$);
export const income_tax$m = memoize(income_tax$, JSON.stringify);
export const income_tax_ = (a) => {
  return income_tax$m(a);
  // eslint-disable-next-line no-undef
  income_tax$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax memo-loader code //////////



////////// start effective_rate memo-loader code //////////
//const effective_rate$m = memoize(999999, isEqual)(effective_rate$);
export const effective_rate$m = memoize(effective_rate$, JSON.stringify);
export const effective_rate_ = (a) => {
  return effective_rate$m(a);
  // eslint-disable-next-line no-undef
  effective_rate$({ taxpayer_table_in, taxpayer_id_in, paye_table_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in }); // never run, but here to "trick" calculang graph logic
};
////////// end effective_rate memo-loader code //////////



////////// start usc memo-loader code //////////
//const usc$m = memoize(999999, isEqual)(usc$);
export const usc$m = memoize(usc$, JSON.stringify);
export const usc_ = (a) => {
  return usc$m(a);
  // eslint-disable-next-line no-undef
  usc$({ usc_table_in, taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc memo-loader code //////////



////////// start paye memo-loader code //////////
//const paye$m = memoize(999999, isEqual)(paye$);
export const paye$m = memoize(paye$, JSON.stringify);
export const paye_ = (a) => {
  return paye$m(a);
  // eslint-disable-next-line no-undef
  paye$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye memo-loader code //////////



////////// start prsi memo-loader code //////////
//const prsi$m = memoize(999999, isEqual)(prsi$);
export const prsi$m = memoize(prsi$, JSON.stringify);
export const prsi_ = (a) => {
  return prsi$m(a);
  // eslint-disable-next-line no-undef
  prsi$({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi memo-loader code //////////



////////// start taxpayer_id memo-loader code //////////
//const taxpayer_id$m = memoize(999999, isEqual)(taxpayer_id$);
export const taxpayer_id$m = memoize(taxpayer_id$, JSON.stringify);
export const taxpayer_id = (a) => {
  return taxpayer_id$m(a);
  // eslint-disable-next-line no-undef
  taxpayer_id$({ taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end taxpayer_id memo-loader code //////////



////////// start taxpayer_table memo-loader code //////////
//const taxpayer_table$m = memoize(999999, isEqual)(taxpayer_table$);
export const taxpayer_table$m = memoize(taxpayer_table$, JSON.stringify);
export const taxpayer_table = (a) => {
  return taxpayer_table$m(a);
  // eslint-disable-next-line no-undef
  taxpayer_table$({ taxpayer_table_in }); // never run, but here to "trick" calculang graph logic
};
////////// end taxpayer_table memo-loader code //////////



////////// start taxpayer_count memo-loader code //////////
//const taxpayer_count$m = memoize(999999, isEqual)(taxpayer_count$);
export const taxpayer_count$m = memoize(taxpayer_count$, JSON.stringify);
export const taxpayer_count = (a) => {
  return taxpayer_count$m(a);
  // eslint-disable-next-line no-undef
  taxpayer_count$({ taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end taxpayer_count memo-loader code //////////



////////// start gross_salary memo-loader code //////////
//const gross_salary$m = memoize(999999, isEqual)(gross_salary$);
export const gross_salary$m = memoize(gross_salary$, JSON.stringify);
export const gross_salary = (a) => {
  return gross_salary$m(a);
  // eslint-disable-next-line no-undef
  gross_salary$({ taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end gross_salary memo-loader code //////////



////////// start proportion memo-loader code //////////
//const proportion$m = memoize(999999, isEqual)(proportion$);
export const proportion$m = memoize(proportion$, JSON.stringify);
export const proportion = (a) => {
  return proportion$m(a);
  // eslint-disable-next-line no-undef
  proportion$({ taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end proportion memo-loader code //////////



////////// start income_tax_by_taxpayer memo-loader code //////////
//const income_tax_by_taxpayer$m = memoize(999999, isEqual)(income_tax_by_taxpayer$);
export const income_tax_by_taxpayer$m = memoize(income_tax_by_taxpayer$, JSON.stringify);
export const income_tax_by_taxpayer_ = (a) => {
  return income_tax_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer memo-loader code //////////



////////// start paye_by_taxpayer memo-loader code //////////
//const paye_by_taxpayer$m = memoize(999999, isEqual)(paye_by_taxpayer$);
export const paye_by_taxpayer$m = memoize(paye_by_taxpayer$, JSON.stringify);
export const paye_by_taxpayer_ = (a) => {
  return paye_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer memo-loader code //////////



////////// start usc_by_taxpayer memo-loader code //////////
//const usc_by_taxpayer$m = memoize(999999, isEqual)(usc_by_taxpayer$);
export const usc_by_taxpayer$m = memoize(usc_by_taxpayer$, JSON.stringify);
export const usc_by_taxpayer_ = (a) => {
  return usc_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer$({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer memo-loader code //////////



////////// start prsi_by_taxpayer memo-loader code //////////
//const prsi_by_taxpayer$m = memoize(999999, isEqual)(prsi_by_taxpayer$);
export const prsi_by_taxpayer$m = memoize(prsi_by_taxpayer$, JSON.stringify);
export const prsi_by_taxpayer_ = (a) => {
  return prsi_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer$({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer memo-loader code //////////



////////// start income_tax_sum memo-loader code //////////
//const income_tax_sum$m = memoize(999999, isEqual)(income_tax_sum$);
export const income_tax_sum$m = memoize(income_tax_sum$, JSON.stringify);
export const income_tax_sum_ = (a) => {
  return income_tax_sum$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum$({ taxpayer_table_in, paye_table_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum memo-loader code //////////



////////// start paye_sum memo-loader code //////////
//const paye_sum$m = memoize(999999, isEqual)(paye_sum$);
export const paye_sum$m = memoize(paye_sum$, JSON.stringify);
export const paye_sum_ = (a) => {
  return paye_sum$m(a);
  // eslint-disable-next-line no-undef
  paye_sum$({ taxpayer_table_in, paye_table_in, tax_credit_proposed_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum memo-loader code //////////



////////// start usc_sum memo-loader code //////////
//const usc_sum$m = memoize(999999, isEqual)(usc_sum$);
export const usc_sum$m = memoize(usc_sum$, JSON.stringify);
export const usc_sum_ = (a) => {
  return usc_sum$m(a);
  // eslint-disable-next-line no-undef
  usc_sum$({ taxpayer_table_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum memo-loader code //////////



////////// start prsi_sum memo-loader code //////////
//const prsi_sum$m = memoize(999999, isEqual)(prsi_sum$);
export const prsi_sum$m = memoize(prsi_sum$, JSON.stringify);
export const prsi_sum_ = (a) => {
  return prsi_sum$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum$({ taxpayer_table_in, prsi_rate_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum memo-loader code //////////



////////// start tax_credits memo-loader code //////////
//const tax_credits$m = memoize(999999, isEqual)(tax_credits$);
export const tax_credits$m = memoize(tax_credits$, JSON.stringify);
export const tax_credits = (a) => {
  return tax_credits$m(a);
  // eslint-disable-next-line no-undef
  tax_credits$({ tax_credit_proposed_in }); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credits memo-loader code //////////