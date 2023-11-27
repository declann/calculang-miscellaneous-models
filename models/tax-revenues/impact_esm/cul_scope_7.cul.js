import {
  income_tax_sum,
  income_tax,
  effective_rate,
  usc,
  prsi,
  paye,
  usc_sum,
  prsi_sum,
  paye_sum,
  income_tax_by_taxpayer,
  usc_by_taxpayer,
  prsi_by_taxpayer,
  paye_by_taxpayer,
} from './incometax-set.cul.js';
export {
  income_tax_sum,
  income_tax,
  effective_rate,
  usc,
  paye,
  prsi,
  usc_sum,
  prsi_sum,
  paye_sum,
  income_tax_by_taxpayer,
  usc_by_taxpayer,
  prsi_by_taxpayer,
  paye_by_taxpayer,
};

// tax rate an input
export const tax_rate = () => tax_rate_in;

export const tax_credit_proposed = () => tax_credit_proposed_in;

export const tax_credit = () => tax_credit_proposed(); // b/c separate 2022 and proposed assumptions

export const band = () => band_in;

export const usc_table = () => usc_table_in;

export const paye_table = () => paye_table_in;

export const prsi_rate = () => prsi_rate_in;
