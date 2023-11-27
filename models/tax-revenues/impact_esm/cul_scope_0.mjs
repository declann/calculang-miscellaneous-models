
import { memoize } from 'underscore';
//import memoize from 'lru-memoize';
//import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?

import { income_tax_sum_current_ as income_tax_sum_current$, income_tax_current_ as income_tax_current$, effective_rate_current_ as effective_rate_current$, paye_sum_current_ as paye_sum_current$, paye_current_ as paye_current$, usc_sum_current_ as usc_sum_current$, usc_current_ as usc_current$, prsi_sum_current_ as prsi_sum_current$, prsi_current_ as prsi_current$, income_tax_by_taxpayer_current_ as income_tax_by_taxpayer_current$, usc_by_taxpayer_current_ as usc_by_taxpayer_current$, prsi_by_taxpayer_current_ as prsi_by_taxpayer_current$, paye_by_taxpayer_current_ as paye_by_taxpayer_current$, income_tax_sum_proposed_ as income_tax_sum_proposed$, income_tax_proposed_ as income_tax_proposed$, effective_rate_proposed_ as effective_rate_proposed$, paye_sum_proposed_ as paye_sum_proposed$, paye_proposed_ as paye_proposed$, usc_sum_proposed_ as usc_sum_proposed$, usc_proposed_ as usc_proposed$, prsi_sum_proposed_ as prsi_sum_proposed$, prsi_proposed_ as prsi_proposed$, income_tax_by_taxpayer_proposed_ as income_tax_by_taxpayer_proposed$, usc_by_taxpayer_proposed_ as usc_by_taxpayer_proposed$, prsi_by_taxpayer_proposed_ as prsi_by_taxpayer_proposed$, paye_by_taxpayer_proposed_ as paye_by_taxpayer_proposed$, income_tax_by_taxpayer_impact_ as income_tax_by_taxpayer_impact$, usc_by_taxpayer_impact_ as usc_by_taxpayer_impact$, paye_by_taxpayer_impact_ as paye_by_taxpayer_impact$, prsi_by_taxpayer_impact_ as prsi_by_taxpayer_impact$, income_tax_sum_impact_ as income_tax_sum_impact$, income_tax_impact_ as income_tax_impact$, paye_sum_impact_ as paye_sum_impact$, paye_impact_ as paye_impact$, usc_sum_impact_ as usc_sum_impact$, usc_impact_ as usc_impact$, prsi_sum_impact_ as prsi_sum_impact$, prsi_impact_ as prsi_impact$, pension_contribution_ as pension_contribution$ } from "./cul_scope_1.mjs"; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!



////////// start income_tax_sum_current memo-loader code //////////
//const income_tax_sum_current$m = memoize(999999, isEqual)(income_tax_sum_current$);
export const income_tax_sum_current$m = memoize(income_tax_sum_current$, JSON.stringify);
export const income_tax_sum_current = (a) => {
  return income_tax_sum_current$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum_current$({ taxpayer_table_in, tax_credit_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum_current memo-loader code //////////



////////// start income_tax_current memo-loader code //////////
//const income_tax_current$m = memoize(999999, isEqual)(income_tax_current$);
export const income_tax_current$m = memoize(income_tax_current$, JSON.stringify);
export const income_tax_current = (a) => {
  return income_tax_current$m(a);
  // eslint-disable-next-line no-undef
  income_tax_current$({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_current memo-loader code //////////



////////// start effective_rate_current memo-loader code //////////
//const effective_rate_current$m = memoize(999999, isEqual)(effective_rate_current$);
export const effective_rate_current$m = memoize(effective_rate_current$, JSON.stringify);
export const effective_rate_current = (a) => {
  return effective_rate_current$m(a);
  // eslint-disable-next-line no-undef
  effective_rate_current$({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end effective_rate_current memo-loader code //////////



////////// start paye_sum_current memo-loader code //////////
//const paye_sum_current$m = memoize(999999, isEqual)(paye_sum_current$);
export const paye_sum_current$m = memoize(paye_sum_current$, JSON.stringify);
export const paye_sum_current = (a) => {
  return paye_sum_current$m(a);
  // eslint-disable-next-line no-undef
  paye_sum_current$({ taxpayer_table_in, tax_credit_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum_current memo-loader code //////////



////////// start paye_current memo-loader code //////////
//const paye_current$m = memoize(999999, isEqual)(paye_current$);
export const paye_current$m = memoize(paye_current$, JSON.stringify);
export const paye_current = (a) => {
  return paye_current$m(a);
  // eslint-disable-next-line no-undef
  paye_current$({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_current memo-loader code //////////



////////// start usc_sum_current memo-loader code //////////
//const usc_sum_current$m = memoize(999999, isEqual)(usc_sum_current$);
export const usc_sum_current$m = memoize(usc_sum_current$, JSON.stringify);
export const usc_sum_current = (a) => {
  return usc_sum_current$m(a);
  // eslint-disable-next-line no-undef
  usc_sum_current$({ taxpayer_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum_current memo-loader code //////////



////////// start usc_current memo-loader code //////////
//const usc_current$m = memoize(999999, isEqual)(usc_current$);
export const usc_current$m = memoize(usc_current$, JSON.stringify);
export const usc_current = (a) => {
  return usc_current$m(a);
  // eslint-disable-next-line no-undef
  usc_current$({ taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_current memo-loader code //////////



////////// start prsi_sum_current memo-loader code //////////
//const prsi_sum_current$m = memoize(999999, isEqual)(prsi_sum_current$);
export const prsi_sum_current$m = memoize(prsi_sum_current$, JSON.stringify);
export const prsi_sum_current = (a) => {
  return prsi_sum_current$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum_current$({ taxpayer_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum_current memo-loader code //////////



////////// start prsi_current memo-loader code //////////
//const prsi_current$m = memoize(999999, isEqual)(prsi_current$);
export const prsi_current$m = memoize(prsi_current$, JSON.stringify);
export const prsi_current = (a) => {
  return prsi_current$m(a);
  // eslint-disable-next-line no-undef
  prsi_current$({ taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_current memo-loader code //////////



////////// start income_tax_by_taxpayer_current memo-loader code //////////
//const income_tax_by_taxpayer_current$m = memoize(999999, isEqual)(income_tax_by_taxpayer_current$);
export const income_tax_by_taxpayer_current$m = memoize(income_tax_by_taxpayer_current$, JSON.stringify);
export const income_tax_by_taxpayer_current = (a) => {
  return income_tax_by_taxpayer_current$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer_current$({ taxpayer_table_in, taxpayer_id_in, tax_credit_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer_current memo-loader code //////////



////////// start usc_by_taxpayer_current memo-loader code //////////
//const usc_by_taxpayer_current$m = memoize(999999, isEqual)(usc_by_taxpayer_current$);
export const usc_by_taxpayer_current$m = memoize(usc_by_taxpayer_current$, JSON.stringify);
export const usc_by_taxpayer_current = (a) => {
  return usc_by_taxpayer_current$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer_current$({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer_current memo-loader code //////////



////////// start prsi_by_taxpayer_current memo-loader code //////////
//const prsi_by_taxpayer_current$m = memoize(999999, isEqual)(prsi_by_taxpayer_current$);
export const prsi_by_taxpayer_current$m = memoize(prsi_by_taxpayer_current$, JSON.stringify);
export const prsi_by_taxpayer_current = (a) => {
  return prsi_by_taxpayer_current$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer_current$({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer_current memo-loader code //////////



////////// start paye_by_taxpayer_current memo-loader code //////////
//const paye_by_taxpayer_current$m = memoize(999999, isEqual)(paye_by_taxpayer_current$);
export const paye_by_taxpayer_current$m = memoize(paye_by_taxpayer_current$, JSON.stringify);
export const paye_by_taxpayer_current = (a) => {
  return paye_by_taxpayer_current$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer_current$({ taxpayer_table_in, taxpayer_id_in, tax_credit_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer_current memo-loader code //////////



////////// start income_tax_sum_proposed memo-loader code //////////
//const income_tax_sum_proposed$m = memoize(999999, isEqual)(income_tax_sum_proposed$);
export const income_tax_sum_proposed$m = memoize(income_tax_sum_proposed$, JSON.stringify);
export const income_tax_sum_proposed = (a) => {
  return income_tax_sum_proposed$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum_proposed$({ taxpayer_table_in, paye_table_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum_proposed memo-loader code //////////



////////// start income_tax_proposed memo-loader code //////////
//const income_tax_proposed$m = memoize(999999, isEqual)(income_tax_proposed$);
export const income_tax_proposed$m = memoize(income_tax_proposed$, JSON.stringify);
export const income_tax_proposed = (a) => {
  return income_tax_proposed$m(a);
  // eslint-disable-next-line no-undef
  income_tax_proposed$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_proposed memo-loader code //////////



////////// start effective_rate_proposed memo-loader code //////////
//const effective_rate_proposed$m = memoize(999999, isEqual)(effective_rate_proposed$);
export const effective_rate_proposed$m = memoize(effective_rate_proposed$, JSON.stringify);
export const effective_rate_proposed = (a) => {
  return effective_rate_proposed$m(a);
  // eslint-disable-next-line no-undef
  effective_rate_proposed$({ taxpayer_table_in, taxpayer_id_in, paye_table_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in }); // never run, but here to "trick" calculang graph logic
};
////////// end effective_rate_proposed memo-loader code //////////



////////// start paye_sum_proposed memo-loader code //////////
//const paye_sum_proposed$m = memoize(999999, isEqual)(paye_sum_proposed$);
export const paye_sum_proposed$m = memoize(paye_sum_proposed$, JSON.stringify);
export const paye_sum_proposed = (a) => {
  return paye_sum_proposed$m(a);
  // eslint-disable-next-line no-undef
  paye_sum_proposed$({ taxpayer_table_in, paye_table_in, tax_credit_proposed_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum_proposed memo-loader code //////////



////////// start paye_proposed memo-loader code //////////
//const paye_proposed$m = memoize(999999, isEqual)(paye_proposed$);
export const paye_proposed$m = memoize(paye_proposed$, JSON.stringify);
export const paye_proposed = (a) => {
  return paye_proposed$m(a);
  // eslint-disable-next-line no-undef
  paye_proposed$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_proposed memo-loader code //////////



////////// start usc_sum_proposed memo-loader code //////////
//const usc_sum_proposed$m = memoize(999999, isEqual)(usc_sum_proposed$);
export const usc_sum_proposed$m = memoize(usc_sum_proposed$, JSON.stringify);
export const usc_sum_proposed = (a) => {
  return usc_sum_proposed$m(a);
  // eslint-disable-next-line no-undef
  usc_sum_proposed$({ taxpayer_table_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum_proposed memo-loader code //////////



////////// start usc_proposed memo-loader code //////////
//const usc_proposed$m = memoize(999999, isEqual)(usc_proposed$);
export const usc_proposed$m = memoize(usc_proposed$, JSON.stringify);
export const usc_proposed = (a) => {
  return usc_proposed$m(a);
  // eslint-disable-next-line no-undef
  usc_proposed$({ usc_table_in, taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_proposed memo-loader code //////////



////////// start prsi_sum_proposed memo-loader code //////////
//const prsi_sum_proposed$m = memoize(999999, isEqual)(prsi_sum_proposed$);
export const prsi_sum_proposed$m = memoize(prsi_sum_proposed$, JSON.stringify);
export const prsi_sum_proposed = (a) => {
  return prsi_sum_proposed$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum_proposed$({ taxpayer_table_in, prsi_rate_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum_proposed memo-loader code //////////



////////// start prsi_proposed memo-loader code //////////
//const prsi_proposed$m = memoize(999999, isEqual)(prsi_proposed$);
export const prsi_proposed$m = memoize(prsi_proposed$, JSON.stringify);
export const prsi_proposed = (a) => {
  return prsi_proposed$m(a);
  // eslint-disable-next-line no-undef
  prsi_proposed$({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_proposed memo-loader code //////////



////////// start income_tax_by_taxpayer_proposed memo-loader code //////////
//const income_tax_by_taxpayer_proposed$m = memoize(999999, isEqual)(income_tax_by_taxpayer_proposed$);
export const income_tax_by_taxpayer_proposed$m = memoize(income_tax_by_taxpayer_proposed$, JSON.stringify);
export const income_tax_by_taxpayer_proposed = (a) => {
  return income_tax_by_taxpayer_proposed$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer_proposed$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer_proposed memo-loader code //////////



////////// start usc_by_taxpayer_proposed memo-loader code //////////
//const usc_by_taxpayer_proposed$m = memoize(999999, isEqual)(usc_by_taxpayer_proposed$);
export const usc_by_taxpayer_proposed$m = memoize(usc_by_taxpayer_proposed$, JSON.stringify);
export const usc_by_taxpayer_proposed = (a) => {
  return usc_by_taxpayer_proposed$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer_proposed$({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer_proposed memo-loader code //////////



////////// start prsi_by_taxpayer_proposed memo-loader code //////////
//const prsi_by_taxpayer_proposed$m = memoize(999999, isEqual)(prsi_by_taxpayer_proposed$);
export const prsi_by_taxpayer_proposed$m = memoize(prsi_by_taxpayer_proposed$, JSON.stringify);
export const prsi_by_taxpayer_proposed = (a) => {
  return prsi_by_taxpayer_proposed$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer_proposed$({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer_proposed memo-loader code //////////



////////// start paye_by_taxpayer_proposed memo-loader code //////////
//const paye_by_taxpayer_proposed$m = memoize(999999, isEqual)(paye_by_taxpayer_proposed$);
export const paye_by_taxpayer_proposed$m = memoize(paye_by_taxpayer_proposed$, JSON.stringify);
export const paye_by_taxpayer_proposed = (a) => {
  return paye_by_taxpayer_proposed$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer_proposed$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer_proposed memo-loader code //////////



////////// start income_tax_by_taxpayer_impact memo-loader code //////////
//const income_tax_by_taxpayer_impact$m = memoize(999999, isEqual)(income_tax_by_taxpayer_impact$);
export const income_tax_by_taxpayer_impact$m = memoize(income_tax_by_taxpayer_impact$, JSON.stringify);
export const income_tax_by_taxpayer_impact = (a) => {
  return income_tax_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer_impact$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer_impact memo-loader code //////////



////////// start usc_by_taxpayer_impact memo-loader code //////////
//const usc_by_taxpayer_impact$m = memoize(999999, isEqual)(usc_by_taxpayer_impact$);
export const usc_by_taxpayer_impact$m = memoize(usc_by_taxpayer_impact$, JSON.stringify);
export const usc_by_taxpayer_impact = (a) => {
  return usc_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer_impact$({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer_impact memo-loader code //////////



////////// start paye_by_taxpayer_impact memo-loader code //////////
//const paye_by_taxpayer_impact$m = memoize(999999, isEqual)(paye_by_taxpayer_impact$);
export const paye_by_taxpayer_impact$m = memoize(paye_by_taxpayer_impact$, JSON.stringify);
export const paye_by_taxpayer_impact = (a) => {
  return paye_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer_impact$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, taxpayer_count_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer_impact memo-loader code //////////



////////// start prsi_by_taxpayer_impact memo-loader code //////////
//const prsi_by_taxpayer_impact$m = memoize(999999, isEqual)(prsi_by_taxpayer_impact$);
export const prsi_by_taxpayer_impact$m = memoize(prsi_by_taxpayer_impact$, JSON.stringify);
export const prsi_by_taxpayer_impact = (a) => {
  return prsi_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer_impact$({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer_impact memo-loader code //////////



////////// start income_tax_sum_impact memo-loader code //////////
//const income_tax_sum_impact$m = memoize(999999, isEqual)(income_tax_sum_impact$);
export const income_tax_sum_impact$m = memoize(income_tax_sum_impact$, JSON.stringify);
export const income_tax_sum_impact = (a) => {
  return income_tax_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum_impact$({ taxpayer_table_in, paye_table_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum_impact memo-loader code //////////



////////// start income_tax_impact memo-loader code //////////
//const income_tax_impact$m = memoize(999999, isEqual)(income_tax_impact$);
export const income_tax_impact$m = memoize(income_tax_impact$, JSON.stringify);
export const income_tax_impact = (a) => {
  return income_tax_impact$m(a);
  // eslint-disable-next-line no-undef
  income_tax_impact$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_impact memo-loader code //////////



////////// start paye_sum_impact memo-loader code //////////
//const paye_sum_impact$m = memoize(999999, isEqual)(paye_sum_impact$);
export const paye_sum_impact$m = memoize(paye_sum_impact$, JSON.stringify);
export const paye_sum_impact = (a) => {
  return paye_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  paye_sum_impact$({ taxpayer_table_in, paye_table_in, tax_credit_proposed_in, taxpayer_count_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum_impact memo-loader code //////////



////////// start paye_impact memo-loader code //////////
//const paye_impact$m = memoize(999999, isEqual)(paye_impact$);
export const paye_impact$m = memoize(paye_impact$, JSON.stringify);
export const paye_impact = (a) => {
  return paye_impact$m(a);
  // eslint-disable-next-line no-undef
  paye_impact$({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_proposed_in, tax_credit_in }); // never run, but here to "trick" calculang graph logic
};
////////// end paye_impact memo-loader code //////////



////////// start usc_sum_impact memo-loader code //////////
//const usc_sum_impact$m = memoize(999999, isEqual)(usc_sum_impact$);
export const usc_sum_impact$m = memoize(usc_sum_impact$, JSON.stringify);
export const usc_sum_impact = (a) => {
  return usc_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  usc_sum_impact$({ taxpayer_table_in, usc_table_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum_impact memo-loader code //////////



////////// start usc_impact memo-loader code //////////
//const usc_impact$m = memoize(999999, isEqual)(usc_impact$);
export const usc_impact$m = memoize(usc_impact$, JSON.stringify);
export const usc_impact = (a) => {
  return usc_impact$m(a);
  // eslint-disable-next-line no-undef
  usc_impact$({ usc_table_in, taxpayer_table_in, taxpayer_id_in }); // never run, but here to "trick" calculang graph logic
};
////////// end usc_impact memo-loader code //////////



////////// start prsi_sum_impact memo-loader code //////////
//const prsi_sum_impact$m = memoize(999999, isEqual)(prsi_sum_impact$);
export const prsi_sum_impact$m = memoize(prsi_sum_impact$, JSON.stringify);
export const prsi_sum_impact = (a) => {
  return prsi_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum_impact$({ taxpayer_table_in, prsi_rate_in, taxpayer_count_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum_impact memo-loader code //////////



////////// start prsi_impact memo-loader code //////////
//const prsi_impact$m = memoize(999999, isEqual)(prsi_impact$);
export const prsi_impact$m = memoize(prsi_impact$, JSON.stringify);
export const prsi_impact = (a) => {
  return prsi_impact$m(a);
  // eslint-disable-next-line no-undef
  prsi_impact$({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in }); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_impact memo-loader code //////////



////////// start pension_contribution memo-loader code //////////
//const pension_contribution$m = memoize(999999, isEqual)(pension_contribution$);
export const pension_contribution$m = memoize(pension_contribution$, JSON.stringify);
export const pension_contribution = (a) => {
  return pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  pension_contribution$({}); // never run, but here to "trick" calculang graph logic
};
////////// end pension_contribution memo-loader code //////////