import {
  //gross_salary as gross_salary_A,
  //pension_contribution as pension_contribution_A,
  net_salary as net_salary_A,
  paye_taxable_salary as paye_taxable_salary_A,
  net_salary_plus_pension_contribution as net_salary_plus_pension_contribution_A,
  income_tax as income_tax_A
} from './simple-incometax.cul';

export { net_salary_A, paye_taxable_salary_A, net_salary_plus_pension_contribution_A, income_tax_A };

export const gross_salary_A = () => gross_salary_A_in;
export const pension_contribution_A = () => pension_contribution_A_in;
export const tax_credits_A = () => tax_credits_A_in;

  
export const gross_salary = () => gross_salary_A();
export const pension_contribution = () => pension_contribution_A();
export const tax_credits = () => tax_credits_A();
