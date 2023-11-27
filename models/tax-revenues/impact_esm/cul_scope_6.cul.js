
    import { memoize } from 'underscore';
    //import memoize from 'lru-memoize';
    //import { isEqual } from 'underscore'; // TODO poor tree shaking support, or why is this impact so massive? Move to lodash/lodash-es?
    
    import { income_tax_sum_proposed_ as income_tax_sum_proposed$, income_tax_proposed_ as income_tax_proposed$, effective_rate_proposed_ as effective_rate_proposed$, paye_sum_proposed_ as paye_sum_proposed$, paye_proposed_ as paye_proposed$, usc_sum_proposed_ as usc_sum_proposed$, usc_proposed_ as usc_proposed$, prsi_sum_proposed_ as prsi_sum_proposed$, prsi_proposed_ as prsi_proposed$, income_tax_by_taxpayer_proposed_ as income_tax_by_taxpayer_proposed$, usc_by_taxpayer_proposed_ as usc_by_taxpayer_proposed$, prsi_by_taxpayer_proposed_ as prsi_by_taxpayer_proposed$, paye_by_taxpayer_proposed_ as paye_by_taxpayer_proposed$, income_tax_by_taxpayer_impact_ as income_tax_by_taxpayer_impact$, usc_by_taxpayer_impact_ as usc_by_taxpayer_impact$, paye_by_taxpayer_impact_ as paye_by_taxpayer_impact$, prsi_by_taxpayer_impact_ as prsi_by_taxpayer_impact$, income_tax_sum_impact_ as income_tax_sum_impact$, income_tax_impact_ as income_tax_impact$, paye_sum_impact_ as paye_sum_impact$, paye_impact_ as paye_impact$, usc_sum_impact_ as usc_sum_impact$, usc_impact_ as usc_impact$, prsi_sum_impact_ as prsi_sum_impact$, prsi_impact_ as prsi_impact$, pension_contribution_ as pension_contribution$, taxpayer_id_ as taxpayer_id$, taxpayer_table_ as taxpayer_table$, taxpayer_count_ as taxpayer_count$, gross_salary_ as gross_salary$, proportion_ as proportion$, income_tax_by_taxpayer_ as income_tax_by_taxpayer$, paye_by_taxpayer_ as paye_by_taxpayer$, usc_by_taxpayer_ as usc_by_taxpayer$, prsi_by_taxpayer_ as prsi_by_taxpayer$, income_tax_sum_ as income_tax_sum$, paye_sum_ as paye_sum$, usc_sum_ as usc_sum$, prsi_sum_ as prsi_sum$, tax_credit_ as tax_credit$, tax_credits_ as tax_credits$, net_salary_ as net_salary$, income_tax_ as income_tax$, effective_rate_ as effective_rate$, prsi_taxable_salary_ as prsi_taxable_salary$, prsi_ as prsi$, prsi_rate_ as prsi_rate$, usc_table_ as usc_table$, usc_band_id_ as usc_band_id$, usc_band_end_ as usc_band_end$, usc_band_start_ as usc_band_start$, usc_rate_ as usc_rate$, usc_taxable_salary_ as usc_taxable_salary$, usc_by_band_id_ as usc_by_band_id$, usc_ as usc$, paye_table_ as paye_table$, paye_band_id_ as paye_band_id$, paye_band_end_ as paye_band_end$, paye_band_start_ as paye_band_start$, paye_rate_ as paye_rate$, paye_taxable_salary_ as paye_taxable_salary$, paye_by_band_id_ as paye_by_band_id$, paye_over_bands_ as paye_over_bands$, paye_ as paye$, net_salary_plus_pension_contribution_ as net_salary_plus_pension_contribution$ } from './incometax-set.cul.js?&+memoed'; // there is already-culed stuff in here, why? imports to memo loader include cul_scope_id, what logic should it apply RE passing forward? eliminate? Probably!
    
    

////////// start income_tax_sum_proposed memo-loader code //////////
//const income_tax_sum_proposed$m = memoize(999999, isEqual)(income_tax_sum_proposed$);
export const income_tax_sum_proposed$m = memoize(income_tax_sum_proposed$, JSON.stringify);
export const income_tax_sum_proposed = (a) => {
  return income_tax_sum_proposed$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum_proposed memo-loader code //////////



////////// start income_tax_proposed memo-loader code //////////
//const income_tax_proposed$m = memoize(999999, isEqual)(income_tax_proposed$);
export const income_tax_proposed$m = memoize(income_tax_proposed$, JSON.stringify);
export const income_tax_proposed = (a) => {
  return income_tax_proposed$m(a);
  // eslint-disable-next-line no-undef
  income_tax_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_proposed memo-loader code //////////



////////// start effective_rate_proposed memo-loader code //////////
//const effective_rate_proposed$m = memoize(999999, isEqual)(effective_rate_proposed$);
export const effective_rate_proposed$m = memoize(effective_rate_proposed$, JSON.stringify);
export const effective_rate_proposed = (a) => {
  return effective_rate_proposed$m(a);
  // eslint-disable-next-line no-undef
  effective_rate_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end effective_rate_proposed memo-loader code //////////



////////// start paye_sum_proposed memo-loader code //////////
//const paye_sum_proposed$m = memoize(999999, isEqual)(paye_sum_proposed$);
export const paye_sum_proposed$m = memoize(paye_sum_proposed$, JSON.stringify);
export const paye_sum_proposed = (a) => {
  return paye_sum_proposed$m(a);
  // eslint-disable-next-line no-undef
  paye_sum_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum_proposed memo-loader code //////////



////////// start paye_proposed memo-loader code //////////
//const paye_proposed$m = memoize(999999, isEqual)(paye_proposed$);
export const paye_proposed$m = memoize(paye_proposed$, JSON.stringify);
export const paye_proposed = (a) => {
  return paye_proposed$m(a);
  // eslint-disable-next-line no-undef
  paye_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_proposed memo-loader code //////////



////////// start usc_sum_proposed memo-loader code //////////
//const usc_sum_proposed$m = memoize(999999, isEqual)(usc_sum_proposed$);
export const usc_sum_proposed$m = memoize(usc_sum_proposed$, JSON.stringify);
export const usc_sum_proposed = (a) => {
  return usc_sum_proposed$m(a);
  // eslint-disable-next-line no-undef
  usc_sum_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum_proposed memo-loader code //////////



////////// start usc_proposed memo-loader code //////////
//const usc_proposed$m = memoize(999999, isEqual)(usc_proposed$);
export const usc_proposed$m = memoize(usc_proposed$, JSON.stringify);
export const usc_proposed = (a) => {
  return usc_proposed$m(a);
  // eslint-disable-next-line no-undef
  usc_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_proposed memo-loader code //////////



////////// start prsi_sum_proposed memo-loader code //////////
//const prsi_sum_proposed$m = memoize(999999, isEqual)(prsi_sum_proposed$);
export const prsi_sum_proposed$m = memoize(prsi_sum_proposed$, JSON.stringify);
export const prsi_sum_proposed = (a) => {
  return prsi_sum_proposed$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum_proposed memo-loader code //////////



////////// start prsi_proposed memo-loader code //////////
//const prsi_proposed$m = memoize(999999, isEqual)(prsi_proposed$);
export const prsi_proposed$m = memoize(prsi_proposed$, JSON.stringify);
export const prsi_proposed = (a) => {
  return prsi_proposed$m(a);
  // eslint-disable-next-line no-undef
  prsi_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_proposed memo-loader code //////////



////////// start income_tax_by_taxpayer_proposed memo-loader code //////////
//const income_tax_by_taxpayer_proposed$m = memoize(999999, isEqual)(income_tax_by_taxpayer_proposed$);
export const income_tax_by_taxpayer_proposed$m = memoize(income_tax_by_taxpayer_proposed$, JSON.stringify);
export const income_tax_by_taxpayer_proposed = (a) => {
  return income_tax_by_taxpayer_proposed$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer_proposed memo-loader code //////////



////////// start usc_by_taxpayer_proposed memo-loader code //////////
//const usc_by_taxpayer_proposed$m = memoize(999999, isEqual)(usc_by_taxpayer_proposed$);
export const usc_by_taxpayer_proposed$m = memoize(usc_by_taxpayer_proposed$, JSON.stringify);
export const usc_by_taxpayer_proposed = (a) => {
  return usc_by_taxpayer_proposed$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer_proposed memo-loader code //////////



////////// start prsi_by_taxpayer_proposed memo-loader code //////////
//const prsi_by_taxpayer_proposed$m = memoize(999999, isEqual)(prsi_by_taxpayer_proposed$);
export const prsi_by_taxpayer_proposed$m = memoize(prsi_by_taxpayer_proposed$, JSON.stringify);
export const prsi_by_taxpayer_proposed = (a) => {
  return prsi_by_taxpayer_proposed$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer_proposed memo-loader code //////////



////////// start paye_by_taxpayer_proposed memo-loader code //////////
//const paye_by_taxpayer_proposed$m = memoize(999999, isEqual)(paye_by_taxpayer_proposed$);
export const paye_by_taxpayer_proposed$m = memoize(paye_by_taxpayer_proposed$, JSON.stringify);
export const paye_by_taxpayer_proposed = (a) => {
  return paye_by_taxpayer_proposed$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer_proposed$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer_proposed memo-loader code //////////



////////// start income_tax_by_taxpayer_impact memo-loader code //////////
//const income_tax_by_taxpayer_impact$m = memoize(999999, isEqual)(income_tax_by_taxpayer_impact$);
export const income_tax_by_taxpayer_impact$m = memoize(income_tax_by_taxpayer_impact$, JSON.stringify);
export const income_tax_by_taxpayer_impact = (a) => {
  return income_tax_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer_impact memo-loader code //////////



////////// start usc_by_taxpayer_impact memo-loader code //////////
//const usc_by_taxpayer_impact$m = memoize(999999, isEqual)(usc_by_taxpayer_impact$);
export const usc_by_taxpayer_impact$m = memoize(usc_by_taxpayer_impact$, JSON.stringify);
export const usc_by_taxpayer_impact = (a) => {
  return usc_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer_impact memo-loader code //////////



////////// start paye_by_taxpayer_impact memo-loader code //////////
//const paye_by_taxpayer_impact$m = memoize(999999, isEqual)(paye_by_taxpayer_impact$);
export const paye_by_taxpayer_impact$m = memoize(paye_by_taxpayer_impact$, JSON.stringify);
export const paye_by_taxpayer_impact = (a) => {
  return paye_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer_impact memo-loader code //////////



////////// start prsi_by_taxpayer_impact memo-loader code //////////
//const prsi_by_taxpayer_impact$m = memoize(999999, isEqual)(prsi_by_taxpayer_impact$);
export const prsi_by_taxpayer_impact$m = memoize(prsi_by_taxpayer_impact$, JSON.stringify);
export const prsi_by_taxpayer_impact = (a) => {
  return prsi_by_taxpayer_impact$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer_impact memo-loader code //////////



////////// start income_tax_sum_impact memo-loader code //////////
//const income_tax_sum_impact$m = memoize(999999, isEqual)(income_tax_sum_impact$);
export const income_tax_sum_impact$m = memoize(income_tax_sum_impact$, JSON.stringify);
export const income_tax_sum_impact = (a) => {
  return income_tax_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum_impact memo-loader code //////////



////////// start income_tax_impact memo-loader code //////////
//const income_tax_impact$m = memoize(999999, isEqual)(income_tax_impact$);
export const income_tax_impact$m = memoize(income_tax_impact$, JSON.stringify);
export const income_tax_impact = (a) => {
  return income_tax_impact$m(a);
  // eslint-disable-next-line no-undef
  income_tax_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_impact memo-loader code //////////



////////// start paye_sum_impact memo-loader code //////////
//const paye_sum_impact$m = memoize(999999, isEqual)(paye_sum_impact$);
export const paye_sum_impact$m = memoize(paye_sum_impact$, JSON.stringify);
export const paye_sum_impact = (a) => {
  return paye_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  paye_sum_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum_impact memo-loader code //////////



////////// start paye_impact memo-loader code //////////
//const paye_impact$m = memoize(999999, isEqual)(paye_impact$);
export const paye_impact$m = memoize(paye_impact$, JSON.stringify);
export const paye_impact = (a) => {
  return paye_impact$m(a);
  // eslint-disable-next-line no-undef
  paye_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_impact memo-loader code //////////



////////// start usc_sum_impact memo-loader code //////////
//const usc_sum_impact$m = memoize(999999, isEqual)(usc_sum_impact$);
export const usc_sum_impact$m = memoize(usc_sum_impact$, JSON.stringify);
export const usc_sum_impact = (a) => {
  return usc_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  usc_sum_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum_impact memo-loader code //////////



////////// start usc_impact memo-loader code //////////
//const usc_impact$m = memoize(999999, isEqual)(usc_impact$);
export const usc_impact$m = memoize(usc_impact$, JSON.stringify);
export const usc_impact = (a) => {
  return usc_impact$m(a);
  // eslint-disable-next-line no-undef
  usc_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_impact memo-loader code //////////



////////// start prsi_sum_impact memo-loader code //////////
//const prsi_sum_impact$m = memoize(999999, isEqual)(prsi_sum_impact$);
export const prsi_sum_impact$m = memoize(prsi_sum_impact$, JSON.stringify);
export const prsi_sum_impact = (a) => {
  return prsi_sum_impact$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum_impact memo-loader code //////////



////////// start prsi_impact memo-loader code //////////
//const prsi_impact$m = memoize(999999, isEqual)(prsi_impact$);
export const prsi_impact$m = memoize(prsi_impact$, JSON.stringify);
export const prsi_impact = (a) => {
  return prsi_impact$m(a);
  // eslint-disable-next-line no-undef
  prsi_impact$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_impact memo-loader code //////////



////////// start pension_contribution memo-loader code //////////
//const pension_contribution$m = memoize(999999, isEqual)(pension_contribution$);
export const pension_contribution$m = memoize(pension_contribution$, JSON.stringify);
export const pension_contribution = (a) => {
  return pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  pension_contribution$(); // never run, but here to "trick" calculang graph logic
};
////////// end pension_contribution memo-loader code //////////



////////// start taxpayer_id memo-loader code //////////
//const taxpayer_id$m = memoize(999999, isEqual)(taxpayer_id$);
export const taxpayer_id$m = memoize(taxpayer_id$, JSON.stringify);
export const taxpayer_id = (a) => {
  return taxpayer_id$m(a);
  // eslint-disable-next-line no-undef
  taxpayer_id$(); // never run, but here to "trick" calculang graph logic
};
////////// end taxpayer_id memo-loader code //////////



////////// start taxpayer_table memo-loader code //////////
//const taxpayer_table$m = memoize(999999, isEqual)(taxpayer_table$);
export const taxpayer_table$m = memoize(taxpayer_table$, JSON.stringify);
export const taxpayer_table = (a) => {
  return taxpayer_table$m(a);
  // eslint-disable-next-line no-undef
  taxpayer_table$(); // never run, but here to "trick" calculang graph logic
};
////////// end taxpayer_table memo-loader code //////////



////////// start taxpayer_count memo-loader code //////////
//const taxpayer_count$m = memoize(999999, isEqual)(taxpayer_count$);
export const taxpayer_count$m = memoize(taxpayer_count$, JSON.stringify);
export const taxpayer_count = (a) => {
  return taxpayer_count$m(a);
  // eslint-disable-next-line no-undef
  taxpayer_count$(); // never run, but here to "trick" calculang graph logic
};
////////// end taxpayer_count memo-loader code //////////



////////// start gross_salary memo-loader code //////////
//const gross_salary$m = memoize(999999, isEqual)(gross_salary$);
export const gross_salary$m = memoize(gross_salary$, JSON.stringify);
export const gross_salary = (a) => {
  return gross_salary$m(a);
  // eslint-disable-next-line no-undef
  gross_salary$(); // never run, but here to "trick" calculang graph logic
};
////////// end gross_salary memo-loader code //////////



////////// start proportion memo-loader code //////////
//const proportion$m = memoize(999999, isEqual)(proportion$);
export const proportion$m = memoize(proportion$, JSON.stringify);
export const proportion = (a) => {
  return proportion$m(a);
  // eslint-disable-next-line no-undef
  proportion$(); // never run, but here to "trick" calculang graph logic
};
////////// end proportion memo-loader code //////////



////////// start income_tax_by_taxpayer memo-loader code //////////
//const income_tax_by_taxpayer$m = memoize(999999, isEqual)(income_tax_by_taxpayer$);
export const income_tax_by_taxpayer$m = memoize(income_tax_by_taxpayer$, JSON.stringify);
export const income_tax_by_taxpayer = (a) => {
  return income_tax_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  income_tax_by_taxpayer$(); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_by_taxpayer memo-loader code //////////



////////// start paye_by_taxpayer memo-loader code //////////
//const paye_by_taxpayer$m = memoize(999999, isEqual)(paye_by_taxpayer$);
export const paye_by_taxpayer$m = memoize(paye_by_taxpayer$, JSON.stringify);
export const paye_by_taxpayer = (a) => {
  return paye_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  paye_by_taxpayer$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_taxpayer memo-loader code //////////



////////// start usc_by_taxpayer memo-loader code //////////
//const usc_by_taxpayer$m = memoize(999999, isEqual)(usc_by_taxpayer$);
export const usc_by_taxpayer$m = memoize(usc_by_taxpayer$, JSON.stringify);
export const usc_by_taxpayer = (a) => {
  return usc_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  usc_by_taxpayer$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_taxpayer memo-loader code //////////



////////// start prsi_by_taxpayer memo-loader code //////////
//const prsi_by_taxpayer$m = memoize(999999, isEqual)(prsi_by_taxpayer$);
export const prsi_by_taxpayer$m = memoize(prsi_by_taxpayer$, JSON.stringify);
export const prsi_by_taxpayer = (a) => {
  return prsi_by_taxpayer$m(a);
  // eslint-disable-next-line no-undef
  prsi_by_taxpayer$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_by_taxpayer memo-loader code //////////



////////// start income_tax_sum memo-loader code //////////
//const income_tax_sum$m = memoize(999999, isEqual)(income_tax_sum$);
export const income_tax_sum$m = memoize(income_tax_sum$, JSON.stringify);
export const income_tax_sum = (a) => {
  return income_tax_sum$m(a);
  // eslint-disable-next-line no-undef
  income_tax_sum$(); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax_sum memo-loader code //////////



////////// start paye_sum memo-loader code //////////
//const paye_sum$m = memoize(999999, isEqual)(paye_sum$);
export const paye_sum$m = memoize(paye_sum$, JSON.stringify);
export const paye_sum = (a) => {
  return paye_sum$m(a);
  // eslint-disable-next-line no-undef
  paye_sum$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_sum memo-loader code //////////



////////// start usc_sum memo-loader code //////////
//const usc_sum$m = memoize(999999, isEqual)(usc_sum$);
export const usc_sum$m = memoize(usc_sum$, JSON.stringify);
export const usc_sum = (a) => {
  return usc_sum$m(a);
  // eslint-disable-next-line no-undef
  usc_sum$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_sum memo-loader code //////////



////////// start prsi_sum memo-loader code //////////
//const prsi_sum$m = memoize(999999, isEqual)(prsi_sum$);
export const prsi_sum$m = memoize(prsi_sum$, JSON.stringify);
export const prsi_sum = (a) => {
  return prsi_sum$m(a);
  // eslint-disable-next-line no-undef
  prsi_sum$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_sum memo-loader code //////////



////////// start tax_credit memo-loader code //////////
//const tax_credit$m = memoize(999999, isEqual)(tax_credit$);
export const tax_credit$m = memoize(tax_credit$, JSON.stringify);
export const tax_credit = (a) => {
  return tax_credit$m(a);
  // eslint-disable-next-line no-undef
  tax_credit$(); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credit memo-loader code //////////



////////// start tax_credits memo-loader code //////////
//const tax_credits$m = memoize(999999, isEqual)(tax_credits$);
export const tax_credits$m = memoize(tax_credits$, JSON.stringify);
export const tax_credits = (a) => {
  return tax_credits$m(a);
  // eslint-disable-next-line no-undef
  tax_credits$(); // never run, but here to "trick" calculang graph logic
};
////////// end tax_credits memo-loader code //////////



////////// start net_salary memo-loader code //////////
//const net_salary$m = memoize(999999, isEqual)(net_salary$);
export const net_salary$m = memoize(net_salary$, JSON.stringify);
export const net_salary = (a) => {
  return net_salary$m(a);
  // eslint-disable-next-line no-undef
  net_salary$(); // never run, but here to "trick" calculang graph logic
};
////////// end net_salary memo-loader code //////////



////////// start income_tax memo-loader code //////////
//const income_tax$m = memoize(999999, isEqual)(income_tax$);
export const income_tax$m = memoize(income_tax$, JSON.stringify);
export const income_tax = (a) => {
  return income_tax$m(a);
  // eslint-disable-next-line no-undef
  income_tax$(); // never run, but here to "trick" calculang graph logic
};
////////// end income_tax memo-loader code //////////



////////// start effective_rate memo-loader code //////////
//const effective_rate$m = memoize(999999, isEqual)(effective_rate$);
export const effective_rate$m = memoize(effective_rate$, JSON.stringify);
export const effective_rate = (a) => {
  return effective_rate$m(a);
  // eslint-disable-next-line no-undef
  effective_rate$(); // never run, but here to "trick" calculang graph logic
};
////////// end effective_rate memo-loader code //////////



////////// start prsi_taxable_salary memo-loader code //////////
//const prsi_taxable_salary$m = memoize(999999, isEqual)(prsi_taxable_salary$);
export const prsi_taxable_salary$m = memoize(prsi_taxable_salary$, JSON.stringify);
export const prsi_taxable_salary = (a) => {
  return prsi_taxable_salary$m(a);
  // eslint-disable-next-line no-undef
  prsi_taxable_salary$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_taxable_salary memo-loader code //////////



////////// start prsi memo-loader code //////////
//const prsi$m = memoize(999999, isEqual)(prsi$);
export const prsi$m = memoize(prsi$, JSON.stringify);
export const prsi = (a) => {
  return prsi$m(a);
  // eslint-disable-next-line no-undef
  prsi$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi memo-loader code //////////



////////// start prsi_rate memo-loader code //////////
//const prsi_rate$m = memoize(999999, isEqual)(prsi_rate$);
export const prsi_rate$m = memoize(prsi_rate$, JSON.stringify);
export const prsi_rate = (a) => {
  return prsi_rate$m(a);
  // eslint-disable-next-line no-undef
  prsi_rate$(); // never run, but here to "trick" calculang graph logic
};
////////// end prsi_rate memo-loader code //////////



////////// start usc_table memo-loader code //////////
//const usc_table$m = memoize(999999, isEqual)(usc_table$);
export const usc_table$m = memoize(usc_table$, JSON.stringify);
export const usc_table = (a) => {
  return usc_table$m(a);
  // eslint-disable-next-line no-undef
  usc_table$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_table memo-loader code //////////



////////// start usc_band_id memo-loader code //////////
//const usc_band_id$m = memoize(999999, isEqual)(usc_band_id$);
export const usc_band_id$m = memoize(usc_band_id$, JSON.stringify);
export const usc_band_id = (a) => {
  return usc_band_id$m(a);
  // eslint-disable-next-line no-undef
  usc_band_id$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_band_id memo-loader code //////////



////////// start usc_band_end memo-loader code //////////
//const usc_band_end$m = memoize(999999, isEqual)(usc_band_end$);
export const usc_band_end$m = memoize(usc_band_end$, JSON.stringify);
export const usc_band_end = (a) => {
  return usc_band_end$m(a);
  // eslint-disable-next-line no-undef
  usc_band_end$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_band_end memo-loader code //////////



////////// start usc_band_start memo-loader code //////////
//const usc_band_start$m = memoize(999999, isEqual)(usc_band_start$);
export const usc_band_start$m = memoize(usc_band_start$, JSON.stringify);
export const usc_band_start = (a) => {
  return usc_band_start$m(a);
  // eslint-disable-next-line no-undef
  usc_band_start$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_band_start memo-loader code //////////



////////// start usc_rate memo-loader code //////////
//const usc_rate$m = memoize(999999, isEqual)(usc_rate$);
export const usc_rate$m = memoize(usc_rate$, JSON.stringify);
export const usc_rate = (a) => {
  return usc_rate$m(a);
  // eslint-disable-next-line no-undef
  usc_rate$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_rate memo-loader code //////////



////////// start usc_taxable_salary memo-loader code //////////
//const usc_taxable_salary$m = memoize(999999, isEqual)(usc_taxable_salary$);
export const usc_taxable_salary$m = memoize(usc_taxable_salary$, JSON.stringify);
export const usc_taxable_salary = (a) => {
  return usc_taxable_salary$m(a);
  // eslint-disable-next-line no-undef
  usc_taxable_salary$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_taxable_salary memo-loader code //////////



////////// start usc_by_band_id memo-loader code //////////
//const usc_by_band_id$m = memoize(999999, isEqual)(usc_by_band_id$);
export const usc_by_band_id$m = memoize(usc_by_band_id$, JSON.stringify);
export const usc_by_band_id = (a) => {
  return usc_by_band_id$m(a);
  // eslint-disable-next-line no-undef
  usc_by_band_id$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc_by_band_id memo-loader code //////////



////////// start usc memo-loader code //////////
//const usc$m = memoize(999999, isEqual)(usc$);
export const usc$m = memoize(usc$, JSON.stringify);
export const usc = (a) => {
  return usc$m(a);
  // eslint-disable-next-line no-undef
  usc$(); // never run, but here to "trick" calculang graph logic
};
////////// end usc memo-loader code //////////



////////// start paye_table memo-loader code //////////
//const paye_table$m = memoize(999999, isEqual)(paye_table$);
export const paye_table$m = memoize(paye_table$, JSON.stringify);
export const paye_table = (a) => {
  return paye_table$m(a);
  // eslint-disable-next-line no-undef
  paye_table$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_table memo-loader code //////////



////////// start paye_band_id memo-loader code //////////
//const paye_band_id$m = memoize(999999, isEqual)(paye_band_id$);
export const paye_band_id$m = memoize(paye_band_id$, JSON.stringify);
export const paye_band_id = (a) => {
  return paye_band_id$m(a);
  // eslint-disable-next-line no-undef
  paye_band_id$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_band_id memo-loader code //////////



////////// start paye_band_end memo-loader code //////////
//const paye_band_end$m = memoize(999999, isEqual)(paye_band_end$);
export const paye_band_end$m = memoize(paye_band_end$, JSON.stringify);
export const paye_band_end = (a) => {
  return paye_band_end$m(a);
  // eslint-disable-next-line no-undef
  paye_band_end$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_band_end memo-loader code //////////



////////// start paye_band_start memo-loader code //////////
//const paye_band_start$m = memoize(999999, isEqual)(paye_band_start$);
export const paye_band_start$m = memoize(paye_band_start$, JSON.stringify);
export const paye_band_start = (a) => {
  return paye_band_start$m(a);
  // eslint-disable-next-line no-undef
  paye_band_start$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_band_start memo-loader code //////////



////////// start paye_rate memo-loader code //////////
//const paye_rate$m = memoize(999999, isEqual)(paye_rate$);
export const paye_rate$m = memoize(paye_rate$, JSON.stringify);
export const paye_rate = (a) => {
  return paye_rate$m(a);
  // eslint-disable-next-line no-undef
  paye_rate$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_rate memo-loader code //////////



////////// start paye_taxable_salary memo-loader code //////////
//const paye_taxable_salary$m = memoize(999999, isEqual)(paye_taxable_salary$);
export const paye_taxable_salary$m = memoize(paye_taxable_salary$, JSON.stringify);
export const paye_taxable_salary = (a) => {
  return paye_taxable_salary$m(a);
  // eslint-disable-next-line no-undef
  paye_taxable_salary$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_taxable_salary memo-loader code //////////



////////// start paye_by_band_id memo-loader code //////////
//const paye_by_band_id$m = memoize(999999, isEqual)(paye_by_band_id$);
export const paye_by_band_id$m = memoize(paye_by_band_id$, JSON.stringify);
export const paye_by_band_id = (a) => {
  return paye_by_band_id$m(a);
  // eslint-disable-next-line no-undef
  paye_by_band_id$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_by_band_id memo-loader code //////////



////////// start paye_over_bands memo-loader code //////////
//const paye_over_bands$m = memoize(999999, isEqual)(paye_over_bands$);
export const paye_over_bands$m = memoize(paye_over_bands$, JSON.stringify);
export const paye_over_bands = (a) => {
  return paye_over_bands$m(a);
  // eslint-disable-next-line no-undef
  paye_over_bands$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye_over_bands memo-loader code //////////



////////// start paye memo-loader code //////////
//const paye$m = memoize(999999, isEqual)(paye$);
export const paye$m = memoize(paye$, JSON.stringify);
export const paye = (a) => {
  return paye$m(a);
  // eslint-disable-next-line no-undef
  paye$(); // never run, but here to "trick" calculang graph logic
};
////////// end paye memo-loader code //////////



////////// start net_salary_plus_pension_contribution memo-loader code //////////
//const net_salary_plus_pension_contribution$m = memoize(999999, isEqual)(net_salary_plus_pension_contribution$);
export const net_salary_plus_pension_contribution$m = memoize(net_salary_plus_pension_contribution$, JSON.stringify);
export const net_salary_plus_pension_contribution = (a) => {
  return net_salary_plus_pension_contribution$m(a);
  // eslint-disable-next-line no-undef
  net_salary_plus_pension_contribution$(); // never run, but here to "trick" calculang graph logic
};
////////// end net_salary_plus_pension_contribution memo-loader code //////////


    