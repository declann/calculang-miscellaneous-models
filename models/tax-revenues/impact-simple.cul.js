import {
  //gross_salary as gross_salary_A,
  //pension_contribution as pension_contribution_A,
  net_salary as net_salary_A,
  paye_taxable_salary as paye_taxable_salary_A,
  net_salary_plus_pension_contribution as net_salary_plus_pension_contribution_A,
} from './simple-incometax.cul';

import {
  net_salary as net_salary_B,
  paye_taxable_salary as paye_taxable_salary_B,
  net_salary_plus_pension_contribution as net_salary_plus_pension_contribution_B,
} from './simple-incometax.cul';

export { net_salary_A, paye_taxable_salary_A, net_salary_plus_pension_contribution_A };
export { net_salary_B, paye_taxable_salary_B, net_salary_plus_pension_contribution_B };

import { paye_taxable_salary } from './simple-incometax.cul';
export { paye_taxable_salary };


export const gross_salary_A = () => gross_salary_A_in;
export const pension_contribution_A = () => pension_contribution_A_in;
export const tax_credits_A = () => tax_credits_A_in;

export const paye_taxable_salary_impact = () =>
  paye_taxable_salary_B() -
  paye_taxable_salary_A({
    gross_salary_in: gross_salary_A(),
    pension_contribution_in: pension_contribution_A(),
    tax_credits_in: tax_credits_A(),
  });

//export const net_salary_impact = () => ()
