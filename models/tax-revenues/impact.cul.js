import { income_tax_sum as income_tax_sum_current, income_tax as income_tax_current, effective_rate as effective_rate_current } from './incometax-set.cul';
import { income_tax_sum as income_tax_sum_proposed, income_tax as income_tax_proposed, effective_rate as effective_rate_proposed } from './proposed.cul';

import { paye_sum as paye_sum_current, paye as paye_current } from './incometax-set.cul';
import { paye_sum as paye_sum_proposed, paye as paye_proposed } from './proposed.cul';

import { usc_sum as usc_sum_current, usc as usc_current } from './incometax-set.cul';
import { usc_sum as usc_sum_proposed, usc as usc_proposed } from './proposed.cul';

export { income_tax_sum_current, income_tax_sum_proposed };
export { income_tax_current, income_tax_proposed };
export { usc_sum_current, usc_sum_proposed };
export { usc_current, usc_proposed };
export { paye_sum_current, paye_sum_proposed };
export { paye_current, paye_proposed };
export { effective_rate_current, effective_rate_proposed };

export const income_tax_sum_impact = () =>
  income_tax_sum_proposed() - income_tax_sum_current();

export const income_tax_impact = () =>
  income_tax_proposed() - income_tax_current();

  export const paye_sum_impact = () =>
  paye_sum_proposed() - paye_sum_current();

export const paye_impact = () =>
  paye_proposed() - paye_current();

  export const usc_sum_impact = () =>
  usc_sum_proposed() - usc_sum_current();

export const usc_impact = () =>
  usc_proposed() - usc_current();
