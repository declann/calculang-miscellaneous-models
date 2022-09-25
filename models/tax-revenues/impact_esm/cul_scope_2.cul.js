import {
  income_tax_sum,
  income_tax,
  effective_rate,
  usc, paye, usc_sum, paye_sum,
  income_tax_by_taxpayer, usc_by_taxpayer, paye_by_taxpayer
} from './incometax-set.cul';
export { income_tax_sum, income_tax, effective_rate, usc, paye, usc_sum, paye_sum, income_tax_by_taxpayer, usc_by_taxpayer, paye_by_taxpayer };

// tax rate an input
export const tax_rate = () => tax_rate_in;

export const band = () => band_in;

export const usc_table = () => usc_table_in;

export const paye_table = () => paye_table_in;
