import {
  income_tax_sum as income_tax_sum_current,
  income_tax as income_tax_current,
  effective_rate as effective_rate_current,
  paye_sum as paye_sum_current,
  paye as paye_current,
  usc_sum as usc_sum_current,
  usc as usc_current,
  prsi_sum as prsi_sum_current,
  prsi as prsi_current,
  income_tax_by_taxpayer as income_tax_by_taxpayer_current,
  usc_by_taxpayer as usc_by_taxpayer_current,
  prsi_by_taxpayer as prsi_by_taxpayer_current,
  paye_by_taxpayer as paye_by_taxpayer_current,
} from './incometax-set.cul';
import {
  income_tax_sum as income_tax_sum_proposed,
  income_tax as income_tax_proposed,
  effective_rate as effective_rate_proposed,
  paye_sum as paye_sum_proposed,
  paye as paye_proposed,
  usc_sum as usc_sum_proposed,
  usc as usc_proposed,
  prsi_sum as prsi_sum_proposed,
  prsi as prsi_proposed,
  income_tax_by_taxpayer as income_tax_by_taxpayer_proposed,
  usc_by_taxpayer as usc_by_taxpayer_proposed,
  prsi_by_taxpayer as prsi_by_taxpayer_proposed,
  paye_by_taxpayer as paye_by_taxpayer_proposed,
} from './proposed.cul';

export { income_tax_sum_current, income_tax_sum_proposed };
export { income_tax_current, income_tax_proposed };
export { usc_sum_current, usc_sum_proposed };
export { prsi_sum_current, prsi_sum_proposed };
export { usc_current, usc_proposed };
export { prsi_current, prsi_proposed };
export { paye_sum_current, paye_sum_proposed };
export { paye_current, paye_proposed };
export { effective_rate_current, effective_rate_proposed };
export {
  paye_by_taxpayer_proposed,
  income_tax_by_taxpayer_proposed,
  usc_by_taxpayer_proposed,
  prsi_by_taxpayer_proposed,
};
export {
  paye_by_taxpayer_current,
  income_tax_by_taxpayer_current,
  usc_by_taxpayer_current,
  prsi_by_taxpayer_current,
};

export const income_tax_by_taxpayer_impact = () =>
  income_tax_by_taxpayer_proposed() - income_tax_by_taxpayer_current();
export const usc_by_taxpayer_impact = () =>
  usc_by_taxpayer_proposed() - usc_by_taxpayer_current();
export const paye_by_taxpayer_impact = () =>
  paye_by_taxpayer_proposed() - paye_by_taxpayer_current();
export const prsi_by_taxpayer_impact = () =>
  prsi_by_taxpayer_proposed() - prsi_by_taxpayer_current();


export const income_tax_sum_impact = () =>
  income_tax_sum_proposed() - income_tax_sum_current();

export const income_tax_impact = () =>
  income_tax_proposed() - income_tax_current();

export const paye_sum_impact = () => paye_sum_proposed() - paye_sum_current();

export const paye_impact = () => paye_proposed() - paye_current();

export const usc_sum_impact = () => usc_sum_proposed() - usc_sum_current();

export const usc_impact = () => usc_proposed() - usc_current();

export const prsi_sum_impact = () => prsi_sum_proposed() - prsi_sum_current();

export const prsi_impact = () => prsi_proposed() - prsi_current();
