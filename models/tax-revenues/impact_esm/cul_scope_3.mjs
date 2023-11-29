import { pension_contribution } from "./cul_scope_0.mjs";import { prsi_impact } from "./cul_scope_0.mjs";import { prsi_sum_impact } from "./cul_scope_0.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { usc_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_proposed } from "./cul_scope_0.mjs";import { prsi_sum_proposed } from "./cul_scope_0.mjs";import { usc_proposed } from "./cul_scope_0.mjs";import { usc_sum_proposed } from "./cul_scope_0.mjs";import { paye_proposed } from "./cul_scope_0.mjs";import { paye_sum_proposed } from "./cul_scope_0.mjs";import { effective_rate_proposed } from "./cul_scope_0.mjs";import { income_tax_proposed } from "./cul_scope_0.mjs";import { income_tax_sum_proposed } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_current } from "./cul_scope_0.mjs";import { usc_by_taxpayer_current } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_current } from "./cul_scope_0.mjs";import { prsi_sum_current } from "./cul_scope_0.mjs";import { usc_current } from "./cul_scope_0.mjs";import { usc_sum_current } from "./cul_scope_0.mjs";import { paye_current } from "./cul_scope_0.mjs";import { paye_sum_current } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_0.mjs";import { income_tax_current } from "./cul_scope_0.mjs";import { income_tax_sum_current } from "./cul_scope_0.mjs";
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { income_tax_sum_ as income_tax_sum$, income_tax_ as income_tax$, effective_rate_ as effective_rate$, usc_ as usc$, prsi_ as prsi$, paye_ as paye$, usc_sum_ as usc_sum$, prsi_sum_ as prsi_sum$, paye_sum_ as paye_sum$, income_tax_by_taxpayer_ as income_tax_by_taxpayer$, usc_by_taxpayer_ as usc_by_taxpayer$, prsi_by_taxpayer_ as prsi_by_taxpayer$, paye_by_taxpayer_ as paye_by_taxpayer$, tax_rate_ as tax_rate$, tax_credit_proposed_ as tax_credit_proposed$, tax_credit_ as tax_credit$, band_ as band$, usc_table_ as usc_table$, paye_table_ as paye_table$, prsi_rate_ as prsi_rate$ } from "./cul_scope_7.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start income_tax_sum memo-loader code //////////
//const income_tax_sum$m = memoize(999999, isEqual)(income_tax_sum$);
export const income_tax_sum$m = memoize(income_tax_sum$, JSON.stringify);
export const income_tax_sum = (a) => {
  return income_tax_sum$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum$({ taxpayer_table_in, paye_table_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum memo-loader code //////////



////////// start income_tax memo-loader code //////////
//const income_tax$m = memoize(999999, isEqual)(income_tax$);
export const income_tax$m = memoize(income_tax$, JSON.stringify);
export const income_tax = (a) => {
  return income_tax$m(a);
  // eslint-disable-next-line no-undef
  income_tax$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax memo-loader code //////////



////////// start effective_rate memo-loader code //////////
//const effective_rate$m = memoize(999999, isEqual)(effective_rate$);
export const effective_rate$m = memoize(effective_rate$, JSON.stringify);
export const effective_rate = (a) => {
  return effective_rate$m(a);
  // eslint-disable-next-line no-undef
  effective_rate$({ taxpayer_table_in, taxpayer_id_in, paye_table_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in }); // never run, but here to "trick" calculang graph logic
};
////////// end effective_rate memo-loader code //////////



////////// start usc memo-loader code //////////
//const usc$m = memoize(999999, isEqual)(usc$);
export const usc$m = memoize(usc$, JSON.stringify);
export const usc = (a) => {
  return usc$m(a);
  // eslint-disable-next-line no-undef
  usc$({ usc_table_in, taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc memo-loader code //////////



////////// start prsi memo-loader code //////////
//const prsi$m = memoize(999999, isEqual)(prsi$);
export const prsi$m = memoize(prsi$, JSON.stringify);
export const prsi = (a) => {
  return prsi$m(a);
  // eslint-disable-next-line no-undef
  prsi$({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi memo-loader code //////////



////////// start paye memo-loader code //////////
//const paye$m = memoize(999999, isEqual)(paye$);
export const paye$m = memoize(paye$, JSON.stringify);
export const paye = (a) => {
  return paye$m(a);
  // eslint-disable-next-line no-undef
  paye$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye memo-loader code //////////



////////// start usc_sum memo-loader code //////////
//const usc_sum$m = memoize(999999, isEqual)(usc_sum$);
export const usc_sum$m = memoize(usc_sum$, JSON.stringify);
export const usc_sum = (a) => {
  return usc_sum$m(a);
  // eslint-disable-next-line no-undef
  usc_sum$({ taxpayer_table_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum memo-loader code //////////



////////// start prsi_sum memo-loader code //////////
//const prsi_sum$m = memoize(999999, isEqual)(prsi_sum$);
export const prsi_sum$m = memoize(prsi_sum$, JSON.stringify);
export const prsi_sum = (a) => {
  return prsi_sum$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum$({ taxpayer_table_in, prsi_rate_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum memo-loader code //////////



////////// start paye_sum memo-loader code //////////
//const paye_sum$m = memoize(999999, isEqual)(paye_sum$);
export const paye_sum$m = memoize(paye_sum$, JSON.stringify);
export const paye_sum = (a) => {
  return paye_sum$m(a);
  // eslint-disable-next-line no-undef
  paye_sum$({ taxpayer_table_in, paye_table_in, tax_credit_proposed_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum memo-loader code //////////



////////// start income_tax_by_taxpayer memo-loader code //////////
//const income_tax_by_taxpayer$m = memoize(999999, isEqual)(income_tax_by_taxpayer$);
export const income_tax_by_taxpayer$m = memoize(income_tax_by_taxpayer$, JSON.stringify);
export const income_tax_by_taxpayer = (a) => {
  return income_tax_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer memo-loader code //////////



////////// start usc_by_taxpayer memo-loader code //////////
//const usc_by_taxpayer$m = memoize(999999, isEqual)(usc_by_taxpayer$);
export const usc_by_taxpayer$m = memoize(usc_by_taxpayer$, JSON.stringify);
export const usc_by_taxpayer = (a) => {
  return usc_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer$({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer memo-loader code //////////



////////// start prsi_by_taxpayer memo-loader code //////////
//const prsi_by_taxpayer$m = memoize(999999, isEqual)(prsi_by_taxpayer$);
export const prsi_by_taxpayer$m = memoize(prsi_by_taxpayer$, JSON.stringify);
export const prsi_by_taxpayer = (a) => {
  return prsi_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer$({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer memo-loader code //////////



////////// start paye_by_taxpayer memo-loader code //////////
//const paye_by_taxpayer$m = memoize(999999, isEqual)(paye_by_taxpayer$);
export const paye_by_taxpayer$m = memoize(paye_by_taxpayer$, JSON.stringify);
export const paye_by_taxpayer = (a) => {
  return paye_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer memo-loader code //////////



////////// start tax_rate memo-loader code //////////
//const tax_rate$m = memoize(999999, isEqual)(tax_rate$);
export const tax_rate$m = memoize(tax_rate$, JSON.stringify);
export const tax_rate = (a) => {
  return tax_rate$m(a);
  // eslint-disable-next-line no-undef
  tax_rate$({ tax_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end tax_rate memo-loader code //////////



////////// start tax_credit_proposed memo-loader code //////////
//const tax_credit_proposed$m = memoize(999999, isEqual)(tax_credit_proposed$);
export const tax_credit_proposed$m = memoize(tax_credit_proposed$, JSON.stringify);
export const tax_credit_proposed = (a) => {
  return tax_credit_proposed$m(a);
  // eslint-disable-next-line no-undef
  tax_credit_proposed$({ tax_credit_proposed_in }); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credit_proposed memo-loader code //////////



////////// start tax_credit memo-loader code //////////
//const tax_credit$m = memoize(999999, isEqual)(tax_credit$);
export const tax_credit$m = memoize(tax_credit$, JSON.stringify);
export const tax_credit = (a) => {
  return tax_credit$m(a);
  // eslint-disable-next-line no-undef
  tax_credit$({ tax_credit_proposed_in }); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credit memo-loader code //////////



////////// start band memo-loader code //////////
//const band$m = memoize(999999, isEqual)(band$);
export const band$m = memoize(band$, JSON.stringify);
export const band = (a) => {
  return band$m(a);
  // eslint-disable-next-line no-undef
  band$({ band_in }); // never run, but here to "trick" calculang graph logic
};
////////// end band memo-loader code //////////



////////// start usc_table memo-loader code //////////
//const usc_table$m = memoize(999999, isEqual)(usc_table$);
export const usc_table$m = memoize(usc_table$, JSON.stringify);
export const usc_table = (a) => {
  return usc_table$m(a);
  // eslint-disable-next-line no-undef
  usc_table$({ usc_table_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_table memo-loader code //////////



////////// start paye_table memo-loader code //////////
//const paye_table$m = memoize(999999, isEqual)(paye_table$);
export const paye_table$m = memoize(paye_table$, JSON.stringify);
export const paye_table = (a) => {
  return paye_table$m(a);
  // eslint-disable-next-line no-undef
  paye_table$({ paye_table_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_table memo-loader code //////////



////////// start prsi_rate memo-loader code //////////
//const prsi_rate$m = memoize(999999, isEqual)(prsi_rate$);
export const prsi_rate$m = memoize(prsi_rate$, JSON.stringify);
export const prsi_rate = (a) => {
  return prsi_rate$m(a);
  // eslint-disable-next-line no-undef
  prsi_rate$({ prsi_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_rate memo-loader code //////////