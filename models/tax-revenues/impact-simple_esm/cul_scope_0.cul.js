import {
  //gross_salary as gross_salary_A,
  //pension_contribution as pension_contribution_A,
  net_salary_A,
  paye_taxable_salary_A,
  net_salary_plus_pension_contribution_A,
} from './A.cul';

import {
  net_salary_B,
  paye_taxable_salary_B,
  net_salary_plus_pension_contribution_B,
  pension_contribution_B
} from './B.cul';

export {
  net_salary_A,
  paye_taxable_salary_A,
  net_salary_plus_pension_contribution_A,
};
export {
  net_salary_B,
  paye_taxable_salary_B,
  net_salary_plus_pension_contribution_B,
  pension_contribution_B
};

import { paye_taxable_salary, pension_contribution } from './simple-incometax.cul';
export { paye_taxable_salary, pension_contribution };

export const gross_salary_A = () => gross_salary_A_in;
export const pension_contribution_A = () => pension_contribution_A_in;
export const tax_credits_A = () => tax_credits_A_in;

export const pension_contribution_impact = () =>
  pension_contribution_B() - pension_contribution_A();

export const paye_taxable_salary_impact = () =>
  paye_taxable_salary_B() -
  paye_taxable_salary_A({
    gross_salary_in: gross_salary_A(),
    pension_contribution_in: pension_contribution_A(),
    tax_credits_in: tax_credits_A(),
  });

//export const net_salary_impact = () => ()
