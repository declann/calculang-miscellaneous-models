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
  pension_contribution_B,
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
  pension_contribution_B,
};

import {
  paye_taxable_salary,
  pension_contribution,
} from './simple-incometax.cul';
export { paye_taxable_salary, pension_contribution };

export const pension_contribution_impact = () =>
  pension_contribution_B() - pension_contribution_A();

export const paye_taxable_salary_impact = () =>
  paye_taxable_salary_B() - paye_taxable_salary_A();

export const net_salary_impact = () => net_salary_B() - net_salary_A();
export const gross_salary_impact = () => gross_salary_B() - gross_salary_A();

//export const net_salary_impact = () => ()
