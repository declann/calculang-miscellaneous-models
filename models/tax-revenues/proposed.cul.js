import {
  income_tax_sum,
  income_tax,
  effective_rate,
  usc, paye, usc_sum, paye_sum
} from './incometax-set.cul';
export { income_tax_sum, income_tax, effective_rate, usc, paye, usc_sum, paye_sum };

// tax rate an input
export const tax_rate = () => tax_rate_in;

export const band = () => band_in;

export const usc_table = () => usc_table_in;

export const paye_table = () => paye_table_in;
