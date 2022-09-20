import { income_tax_sum as income_tax_sum_current } from './incometax-set.cul';
import { income_tax_sum as income_tax_sum_proposed } from './proposed.cul';

export { income_tax_sum_current, income_tax_sum_proposed };

export const income_tax_sum_impact = () =>
  income_tax_sum_proposed() - income_tax_sum_current();
