import { tax_credits } from "./cul_scope_5.mjs";import { proportion } from "./cul_scope_5.mjs";import { gross_salary } from "./cul_scope_5.mjs";import { taxpayer_count } from "./cul_scope_5.mjs";import { taxpayer_table } from "./cul_scope_5.mjs";import { taxpayer_id } from "./cul_scope_5.mjs";import { prsi_rate } from "./cul_scope_2.mjs";import { paye_table } from "./cul_scope_2.mjs";import { usc_table } from "./cul_scope_2.mjs";import { band } from "./cul_scope_2.mjs";import { tax_credit } from "./cul_scope_2.mjs";import { tax_credit_proposed } from "./cul_scope_2.mjs";import { tax_rate } from "./cul_scope_2.mjs";import { paye_by_taxpayer } from "./cul_scope_2.mjs";import { prsi_by_taxpayer } from "./cul_scope_2.mjs";import { usc_by_taxpayer } from "./cul_scope_2.mjs";import { income_tax_by_taxpayer } from "./cul_scope_2.mjs";import { paye_sum } from "./cul_scope_2.mjs";import { prsi_sum } from "./cul_scope_2.mjs";import { usc_sum } from "./cul_scope_2.mjs";import { paye } from "./cul_scope_2.mjs";import { prsi } from "./cul_scope_2.mjs";import { usc } from "./cul_scope_2.mjs";import { effective_rate } from "./cul_scope_2.mjs";import { income_tax } from "./cul_scope_2.mjs";import { income_tax_sum } from "./cul_scope_2.mjs";import { pension_contribution } from "./cul_scope_0.mjs";import { prsi_impact } from "./cul_scope_0.mjs";import { prsi_sum_impact } from "./cul_scope_0.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { usc_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_proposed } from "./cul_scope_0.mjs";import { prsi_sum_proposed } from "./cul_scope_0.mjs";import { usc_proposed } from "./cul_scope_0.mjs";import { usc_sum_proposed } from "./cul_scope_0.mjs";import { paye_proposed } from "./cul_scope_0.mjs";import { paye_sum_proposed } from "./cul_scope_0.mjs";import { effective_rate_proposed } from "./cul_scope_0.mjs";import { income_tax_proposed } from "./cul_scope_0.mjs";import { income_tax_sum_proposed } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_current } from "./cul_scope_0.mjs";import { usc_by_taxpayer_current } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_current } from "./cul_scope_0.mjs";import { prsi_sum_current } from "./cul_scope_0.mjs";import { usc_current } from "./cul_scope_0.mjs";import { usc_sum_current } from "./cul_scope_0.mjs";import { paye_current } from "./cul_scope_0.mjs";import { paye_sum_current } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_0.mjs";import { income_tax_current } from "./cul_scope_0.mjs";import { income_tax_sum_current } from "./cul_scope_0.mjs";
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { income_tax_sum_current_ as income_tax_sum_current$, income_tax_current_ as income_tax_current$, effective_rate_current_ as effective_rate_current$, paye_sum_current_ as paye_sum_current$, paye_current_ as paye_current$, usc_sum_current_ as usc_sum_current$, usc_current_ as usc_current$, prsi_sum_current_ as prsi_sum_current$, prsi_current_ as prsi_current$, income_tax_by_taxpayer_current_ as income_tax_by_taxpayer_current$, usc_by_taxpayer_current_ as usc_by_taxpayer_current$, prsi_by_taxpayer_current_ as prsi_by_taxpayer_current$, paye_by_taxpayer_current_ as paye_by_taxpayer_current$, income_tax_by_taxpayer_impact_ as income_tax_by_taxpayer_impact$, usc_by_taxpayer_impact_ as usc_by_taxpayer_impact$, paye_by_taxpayer_impact_ as paye_by_taxpayer_impact$, prsi_by_taxpayer_impact_ as prsi_by_taxpayer_impact$, income_tax_sum_impact_ as income_tax_sum_impact$, income_tax_impact_ as income_tax_impact$, paye_sum_impact_ as paye_sum_impact$, paye_impact_ as paye_impact$, usc_sum_impact_ as usc_sum_impact$, usc_impact_ as usc_impact$, prsi_sum_impact_ as prsi_sum_impact$, prsi_impact_ as prsi_impact$, pension_contribution_ as pension_contribution$, tax_rate_ as tax_rate$, tax_credit_proposed_ as tax_credit_proposed$, tax_credit_ as tax_credit$, band_ as band$, usc_table_ as usc_table$, paye_table_ as paye_table$, prsi_rate_ as prsi_rate$, income_tax_ as income_tax$, effective_rate_ as effective_rate$, usc_ as usc$, paye_ as paye$, prsi_ as prsi$, taxpayer_id_ as taxpayer_id$, taxpayer_table_ as taxpayer_table$, taxpayer_count_ as taxpayer_count$, gross_salary_ as gross_salary$, proportion_ as proportion$, income_tax_by_taxpayer_ as income_tax_by_taxpayer$, paye_by_taxpayer_ as paye_by_taxpayer$, usc_by_taxpayer_ as usc_by_taxpayer$, prsi_by_taxpayer_ as prsi_by_taxpayer$, income_tax_sum_ as income_tax_sum$, paye_sum_ as paye_sum$, usc_sum_ as usc_sum$, prsi_sum_ as prsi_sum$, tax_credits_ as tax_credits$ } from "./cul_scope_10.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start income_tax_sum_current memo-loader code //////////
//const income_tax_sum_current$m = memoize(999999, isEqual)(income_tax_sum_current$);
export const income_tax_sum_current$m = memoize(income_tax_sum_current$, JSON.stringify);
export const income_tax_sum_current_ = (a) => {
  return income_tax_sum_current$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum_current memo-loader code //////////



////////// start income_tax_current memo-loader code //////////
//const income_tax_current$m = memoize(999999, isEqual)(income_tax_current$);
export const income_tax_current$m = memoize(income_tax_current$, JSON.stringify);
export const income_tax_current_ = (a) => {
  return income_tax_current$m(a);
  // eslint-disable-next-line no-undef
  income_tax_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_current memo-loader code //////////



////////// start effective_rate_current memo-loader code //////////
//const effective_rate_current$m = memoize(999999, isEqual)(effective_rate_current$);
export const effective_rate_current$m = memoize(effective_rate_current$, JSON.stringify);
export const effective_rate_current_ = (a) => {
  return effective_rate_current$m(a);
  // eslint-disable-next-line no-undef
  effective_rate_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end effective_rate_current memo-loader code //////////



////////// start paye_sum_current memo-loader code //////////
//const paye_sum_current$m = memoize(999999, isEqual)(paye_sum_current$);
export const paye_sum_current$m = memoize(paye_sum_current$, JSON.stringify);
export const paye_sum_current_ = (a) => {
  return paye_sum_current$m(a);
  // eslint-disable-next-line no-undef
  paye_sum_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum_current memo-loader code //////////



////////// start paye_current memo-loader code //////////
//const paye_current$m = memoize(999999, isEqual)(paye_current$);
export const paye_current$m = memoize(paye_current$, JSON.stringify);
export const paye_current_ = (a) => {
  return paye_current$m(a);
  // eslint-disable-next-line no-undef
  paye_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_current memo-loader code //////////



////////// start usc_sum_current memo-loader code //////////
//const usc_sum_current$m = memoize(999999, isEqual)(usc_sum_current$);
export const usc_sum_current$m = memoize(usc_sum_current$, JSON.stringify);
export const usc_sum_current_ = (a) => {
  return usc_sum_current$m(a);
  // eslint-disable-next-line no-undef
  usc_sum_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum_current memo-loader code //////////



////////// start usc_current memo-loader code //////////
//const usc_current$m = memoize(999999, isEqual)(usc_current$);
export const usc_current$m = memoize(usc_current$, JSON.stringify);
export const usc_current_ = (a) => {
  return usc_current$m(a);
  // eslint-disable-next-line no-undef
  usc_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_current memo-loader code //////////



////////// start prsi_sum_current memo-loader code //////////
//const prsi_sum_current$m = memoize(999999, isEqual)(prsi_sum_current$);
export const prsi_sum_current$m = memoize(prsi_sum_current$, JSON.stringify);
export const prsi_sum_current_ = (a) => {
  return prsi_sum_current$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum_current memo-loader code //////////



////////// start prsi_current memo-loader code //////////
//const prsi_current$m = memoize(999999, isEqual)(prsi_current$);
export const prsi_current$m = memoize(prsi_current$, JSON.stringify);
export const prsi_current_ = (a) => {
  return prsi_current$m(a);
  // eslint-disable-next-line no-undef
  prsi_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_current memo-loader code //////////



////////// start income_tax_by_taxpayer_current memo-loader code //////////
//const income_tax_by_taxpayer_current$m = memoize(999999, isEqual)(income_tax_by_taxpayer_current$);
export const income_tax_by_taxpayer_current$m = memoize(income_tax_by_taxpayer_current$, JSON.stringify);
export const income_tax_by_taxpayer_current_ = (a) => {
  return income_tax_by_taxpayer_current$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer_current memo-loader code //////////



////////// start usc_by_taxpayer_current memo-loader code //////////
//const usc_by_taxpayer_current$m = memoize(999999, isEqual)(usc_by_taxpayer_current$);
export const usc_by_taxpayer_current$m = memoize(usc_by_taxpayer_current$, JSON.stringify);
export const usc_by_taxpayer_current_ = (a) => {
  return usc_by_taxpayer_current$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer_current memo-loader code //////////



////////// start prsi_by_taxpayer_current memo-loader code //////////
//const prsi_by_taxpayer_current$m = memoize(999999, isEqual)(prsi_by_taxpayer_current$);
export const prsi_by_taxpayer_current$m = memoize(prsi_by_taxpayer_current$, JSON.stringify);
export const prsi_by_taxpayer_current_ = (a) => {
  return prsi_by_taxpayer_current$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer_current memo-loader code //////////



////////// start paye_by_taxpayer_current memo-loader code //////////
//const paye_by_taxpayer_current$m = memoize(999999, isEqual)(paye_by_taxpayer_current$);
export const paye_by_taxpayer_current$m = memoize(paye_by_taxpayer_current$, JSON.stringify);
export const paye_by_taxpayer_current_ = (a) => {
  return paye_by_taxpayer_current$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer_current$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer_current memo-loader code //////////



////////// start income_tax_by_taxpayer_impact memo-loader code //////////
//const income_tax_by_taxpayer_impact$m = memoize(999999, isEqual)(income_tax_by_taxpayer_impact$);
export const income_tax_by_taxpayer_impact$m = memoize(income_tax_by_taxpayer_impact$, JSON.stringify);
export const income_tax_by_taxpayer_impact_ = (a) => {
  return income_tax_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer_impact memo-loader code //////////



////////// start usc_by_taxpayer_impact memo-loader code //////////
//const usc_by_taxpayer_impact$m = memoize(999999, isEqual)(usc_by_taxpayer_impact$);
export const usc_by_taxpayer_impact$m = memoize(usc_by_taxpayer_impact$, JSON.stringify);
export const usc_by_taxpayer_impact_ = (a) => {
  return usc_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer_impact memo-loader code //////////



////////// start paye_by_taxpayer_impact memo-loader code //////////
//const paye_by_taxpayer_impact$m = memoize(999999, isEqual)(paye_by_taxpayer_impact$);
export const paye_by_taxpayer_impact$m = memoize(paye_by_taxpayer_impact$, JSON.stringify);
export const paye_by_taxpayer_impact_ = (a) => {
  return paye_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer_impact memo-loader code //////////



////////// start prsi_by_taxpayer_impact memo-loader code //////////
//const prsi_by_taxpayer_impact$m = memoize(999999, isEqual)(prsi_by_taxpayer_impact$);
export const prsi_by_taxpayer_impact$m = memoize(prsi_by_taxpayer_impact$, JSON.stringify);
export const prsi_by_taxpayer_impact_ = (a) => {
  return prsi_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer_impact memo-loader code //////////



////////// start income_tax_sum_impact memo-loader code //////////
//const income_tax_sum_impact$m = memoize(999999, isEqual)(income_tax_sum_impact$);
export const income_tax_sum_impact$m = memoize(income_tax_sum_impact$, JSON.stringify);
export const income_tax_sum_impact_ = (a) => {
  return income_tax_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum_impact memo-loader code //////////



////////// start income_tax_impact memo-loader code //////////
//const income_tax_impact$m = memoize(999999, isEqual)(income_tax_impact$);
export const income_tax_impact$m = memoize(income_tax_impact$, JSON.stringify);
export const income_tax_impact_ = (a) => {
  return income_tax_impact$m(a);
  // eslint-disable-next-line no-undef
  income_tax_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_impact memo-loader code //////////



////////// start paye_sum_impact memo-loader code //////////
//const paye_sum_impact$m = memoize(999999, isEqual)(paye_sum_impact$);
export const paye_sum_impact$m = memoize(paye_sum_impact$, JSON.stringify);
export const paye_sum_impact_ = (a) => {
  return paye_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  paye_sum_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum_impact memo-loader code //////////



////////// start paye_impact memo-loader code //////////
//const paye_impact$m = memoize(999999, isEqual)(paye_impact$);
export const paye_impact$m = memoize(paye_impact$, JSON.stringify);
export const paye_impact_ = (a) => {
  return paye_impact$m(a);
  // eslint-disable-next-line no-undef
  paye_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_impact memo-loader code //////////



////////// start usc_sum_impact memo-loader code //////////
//const usc_sum_impact$m = memoize(999999, isEqual)(usc_sum_impact$);
export const usc_sum_impact$m = memoize(usc_sum_impact$, JSON.stringify);
export const usc_sum_impact_ = (a) => {
  return usc_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  usc_sum_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum_impact memo-loader code //////////



////////// start usc_impact memo-loader code //////////
//const usc_impact$m = memoize(999999, isEqual)(usc_impact$);
export const usc_impact$m = memoize(usc_impact$, JSON.stringify);
export const usc_impact_ = (a) => {
  return usc_impact$m(a);
  // eslint-disable-next-line no-undef
  usc_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_impact memo-loader code //////////



////////// start prsi_sum_impact memo-loader code //////////
//const prsi_sum_impact$m = memoize(999999, isEqual)(prsi_sum_impact$);
export const prsi_sum_impact$m = memoize(prsi_sum_impact$, JSON.stringify);
export const prsi_sum_impact_ = (a) => {
  return prsi_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum_impact memo-loader code //////////



////////// start prsi_impact memo-loader code //////////
//const prsi_impact$m = memoize(999999, isEqual)(prsi_impact$);
export const prsi_impact$m = memoize(prsi_impact$, JSON.stringify);
export const prsi_impact_ = (a) => {
  return prsi_impact$m(a);
  // eslint-disable-next-line no-undef
  prsi_impact$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_impact memo-loader code //////////



////////// start pension_contribution memo-loader code //////////
//const pension_contribution$m = memoize(999999, isEqual)(pension_contribution$);
export const pension_contribution$m = memoize(pension_contribution$, JSON.stringify);
export const pension_contribution_ = (a) => {
  return pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  pension_contribution$({ pension_contribution_in }); // never run, but here to "trick" calculang graph logic
};
////////// end pension_contribution memo-loader code //////////



////////// start tax_rate memo-loader code //////////
//const tax_rate$m = memoize(999999, isEqual)(tax_rate$);
export const tax_rate$m = memoize(tax_rate$, JSON.stringify);
export const tax_rate_ = (a) => {
  return tax_rate$m(a);
  // eslint-disable-next-line no-undef
  tax_rate$({}); // never run, but here to "trick" calculang graph logic
};
////////// end tax_rate memo-loader code //////////



////////// start tax_credit_proposed memo-loader code //////////
//const tax_credit_proposed$m = memoize(999999, isEqual)(tax_credit_proposed$);
export const tax_credit_proposed$m = memoize(tax_credit_proposed$, JSON.stringify);
export const tax_credit_proposed_ = (a) => {
  return tax_credit_proposed$m(a);
  // eslint-disable-next-line no-undef
  tax_credit_proposed$({}); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credit_proposed memo-loader code //////////



////////// start tax_credit memo-loader code //////////
//const tax_credit$m = memoize(999999, isEqual)(tax_credit$);
export const tax_credit$m = memoize(tax_credit$, JSON.stringify);
export const tax_credit_ = (a) => {
  return tax_credit$m(a);
  // eslint-disable-next-line no-undef
  tax_credit$({}); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credit memo-loader code //////////



////////// start band memo-loader code //////////
//const band$m = memoize(999999, isEqual)(band$);
export const band$m = memoize(band$, JSON.stringify);
export const band_ = (a) => {
  return band$m(a);
  // eslint-disable-next-line no-undef
  band$({}); // never run, but here to "trick" calculang graph logic
};
////////// end band memo-loader code //////////



////////// start usc_table memo-loader code //////////
//const usc_table$m = memoize(999999, isEqual)(usc_table$);
export const usc_table$m = memoize(usc_table$, JSON.stringify);
export const usc_table_ = (a) => {
  return usc_table$m(a);
  // eslint-disable-next-line no-undef
  usc_table$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_table memo-loader code //////////



////////// start paye_table memo-loader code //////////
//const paye_table$m = memoize(999999, isEqual)(paye_table$);
export const paye_table$m = memoize(paye_table$, JSON.stringify);
export const paye_table_ = (a) => {
  return paye_table$m(a);
  // eslint-disable-next-line no-undef
  paye_table$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_table memo-loader code //////////



////////// start prsi_rate memo-loader code //////////
//const prsi_rate$m = memoize(999999, isEqual)(prsi_rate$);
export const prsi_rate$m = memoize(prsi_rate$, JSON.stringify);
export const prsi_rate_ = (a) => {
  return prsi_rate$m(a);
  // eslint-disable-next-line no-undef
  prsi_rate$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_rate memo-loader code //////////



////////// start income_tax memo-loader code //////////
//const income_tax$m = memoize(999999, isEqual)(income_tax$);
export const income_tax$m = memoize(income_tax$, JSON.stringify);
export const income_tax_ = (a) => {
  return income_tax$m(a);
  // eslint-disable-next-line no-undef
  income_tax$({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax memo-loader code //////////



////////// start effective_rate memo-loader code //////////
//const effective_rate$m = memoize(999999, isEqual)(effective_rate$);
export const effective_rate$m = memoize(effective_rate$, JSON.stringify);
export const effective_rate_ = (a) => {
  return effective_rate$m(a);
  // eslint-disable-next-line no-undef
  effective_rate$({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end effective_rate memo-loader code //////////



////////// start usc memo-loader code //////////
//const usc$m = memoize(999999, isEqual)(usc$);
export const usc$m = memoize(usc$, JSON.stringify);
export const usc_ = (a) => {
  return usc$m(a);
  // eslint-disable-next-line no-undef
  usc$({ taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc memo-loader code //////////



////////// start paye memo-loader code //////////
//const paye$m = memoize(999999, isEqual)(paye$);
export const paye$m = memoize(paye$, JSON.stringify);
export const paye_ = (a) => {
  return paye$m(a);
  // eslint-disable-next-line no-undef
  paye$({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye memo-loader code //////////



////////// start prsi memo-loader code //////////
//const prsi$m = memoize(999999, isEqual)(prsi$);
export const prsi$m = memoize(prsi$, JSON.stringify);
export const prsi_ = (a) => {
  return prsi$m(a);
  // eslint-disable-next-line no-undef
  prsi$({ taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi memo-loader code //////////



////////// start taxpayer_id memo-loader code //////////
//const taxpayer_id$m = memoize(999999, isEqual)(taxpayer_id$);
export const taxpayer_id$m = memoize(taxpayer_id$, JSON.stringify);
export const taxpayer_id_ = (a) => {
  return taxpayer_id$m(a);
  // eslint-disable-next-line no-undef
  taxpayer_id$({}); // never run, but here to "trick" calculang graph logic
};
////////// end taxpayer_id memo-loader code //////////



////////// start taxpayer_table memo-loader code //////////
//const taxpayer_table$m = memoize(999999, isEqual)(taxpayer_table$);
export const taxpayer_table$m = memoize(taxpayer_table$, JSON.stringify);
export const taxpayer_table_ = (a) => {
  return taxpayer_table$m(a);
  // eslint-disable-next-line no-undef
  taxpayer_table$({}); // never run, but here to "trick" calculang graph logic
};
////////// end taxpayer_table memo-loader code //////////



////////// start taxpayer_count memo-loader code //////////
//const taxpayer_count$m = memoize(999999, isEqual)(taxpayer_count$);
export const taxpayer_count$m = memoize(taxpayer_count$, JSON.stringify);
export const taxpayer_count_ = (a) => {
  return taxpayer_count$m(a);
  // eslint-disable-next-line no-undef
  taxpayer_count$({}); // never run, but here to "trick" calculang graph logic
};
////////// end taxpayer_count memo-loader code //////////



////////// start gross_salary memo-loader code //////////
//const gross_salary$m = memoize(999999, isEqual)(gross_salary$);
export const gross_salary$m = memoize(gross_salary$, JSON.stringify);
export const gross_salary_ = (a) => {
  return gross_salary$m(a);
  // eslint-disable-next-line no-undef
  gross_salary$({ gross_salary_in }); // never run, but here to "trick" calculang graph logic
};
////////// end gross_salary memo-loader code //////////



////////// start proportion memo-loader code //////////
//const proportion$m = memoize(999999, isEqual)(proportion$);
export const proportion$m = memoize(proportion$, JSON.stringify);
export const proportion_ = (a) => {
  return proportion$m(a);
  // eslint-disable-next-line no-undef
  proportion$({}); // never run, but here to "trick" calculang graph logic
};
////////// end proportion memo-loader code //////////



////////// start income_tax_by_taxpayer memo-loader code //////////
//const income_tax_by_taxpayer$m = memoize(999999, isEqual)(income_tax_by_taxpayer$);
export const income_tax_by_taxpayer$m = memoize(income_tax_by_taxpayer$, JSON.stringify);
export const income_tax_by_taxpayer_ = (a) => {
  return income_tax_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer$({}); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer memo-loader code //////////



////////// start paye_by_taxpayer memo-loader code //////////
//const paye_by_taxpayer$m = memoize(999999, isEqual)(paye_by_taxpayer$);
export const paye_by_taxpayer$m = memoize(paye_by_taxpayer$, JSON.stringify);
export const paye_by_taxpayer_ = (a) => {
  return paye_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer memo-loader code //////////



////////// start usc_by_taxpayer memo-loader code //////////
//const usc_by_taxpayer$m = memoize(999999, isEqual)(usc_by_taxpayer$);
export const usc_by_taxpayer$m = memoize(usc_by_taxpayer$, JSON.stringify);
export const usc_by_taxpayer_ = (a) => {
  return usc_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer memo-loader code //////////



////////// start prsi_by_taxpayer memo-loader code //////////
//const prsi_by_taxpayer$m = memoize(999999, isEqual)(prsi_by_taxpayer$);
export const prsi_by_taxpayer$m = memoize(prsi_by_taxpayer$, JSON.stringify);
export const prsi_by_taxpayer_ = (a) => {
  return prsi_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer memo-loader code //////////



////////// start income_tax_sum memo-loader code //////////
//const income_tax_sum$m = memoize(999999, isEqual)(income_tax_sum$);
export const income_tax_sum$m = memoize(income_tax_sum$, JSON.stringify);
export const income_tax_sum_ = (a) => {
  return income_tax_sum$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum$({}); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum memo-loader code //////////



////////// start paye_sum memo-loader code //////////
//const paye_sum$m = memoize(999999, isEqual)(paye_sum$);
export const paye_sum$m = memoize(paye_sum$, JSON.stringify);
export const paye_sum_ = (a) => {
  return paye_sum$m(a);
  // eslint-disable-next-line no-undef
  paye_sum$({}); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum memo-loader code //////////



////////// start usc_sum memo-loader code //////////
//const usc_sum$m = memoize(999999, isEqual)(usc_sum$);
export const usc_sum$m = memoize(usc_sum$, JSON.stringify);
export const usc_sum_ = (a) => {
  return usc_sum$m(a);
  // eslint-disable-next-line no-undef
  usc_sum$({}); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum memo-loader code //////////



////////// start prsi_sum memo-loader code //////////
//const prsi_sum$m = memoize(999999, isEqual)(prsi_sum$);
export const prsi_sum$m = memoize(prsi_sum$, JSON.stringify);
export const prsi_sum_ = (a) => {
  return prsi_sum$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum$({}); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum memo-loader code //////////



////////// start tax_credits memo-loader code //////////
//const tax_credits$m = memoize(999999, isEqual)(tax_credits$);
export const tax_credits$m = memoize(tax_credits$, JSON.stringify);
export const tax_credits_ = (a) => {
  return tax_credits$m(a);
  // eslint-disable-next-line no-undef
  tax_credits$({ tax_credits_in }); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credits memo-loader code //////////