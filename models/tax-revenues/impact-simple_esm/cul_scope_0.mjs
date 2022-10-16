import {
gross_salary_A,
pension_contribution_A,
net_salary_A,
paye_taxable_salary_A,
net_salary_plus_pension_contribution_A,
income_tax_A } from
"./cul_scope_1.mjs";

import {
gross_salary_B,
pension_contribution_B,
net_salary_B,
paye_taxable_salary_B,
net_salary_plus_pension_contribution_B,
income_tax_B } from
"./cul_scope_2.mjs";

export {
gross_salary_A,
pension_contribution_A,
net_salary_A,
paye_taxable_salary_A,
net_salary_plus_pension_contribution_A,
income_tax_A };

export {
gross_salary_B,
net_salary_B,
paye_taxable_salary_B,
net_salary_plus_pension_contribution_B,
pension_contribution_B,
income_tax_B };

/*
import {
  paye_taxable_salary,
  pension_contribution,
  gross_salary, net_salary
} from './simple-incometax.cul';
export { paye_taxable_salary, pension_contribution, gross_salary, net_salary };
*/
export const pension_contribution_impact = ({ pension_contribution_in, pension_contribution_A_in }) =>
pension_contribution_B({ pension_contribution_in }) - pension_contribution_A({ pension_contribution_A_in });

export const paye_taxable_salary_impact = ({ gross_salary_in, pension_contribution_in, gross_salary_A_in, pension_contribution_A_in }) =>
paye_taxable_salary_B({ gross_salary_in, pension_contribution_in }) - paye_taxable_salary_A({ gross_salary_A_in, pension_contribution_A_in });

export const net_salary_impact = ({ gross_salary_in, pension_contribution_in, tax_credits_in, gross_salary_A_in, pension_contribution_A_in, tax_credits_A_in }) => net_salary_B({ gross_salary_in, pension_contribution_in, tax_credits_in }) - net_salary_A({ gross_salary_A_in, pension_contribution_A_in, tax_credits_A_in });
export const gross_salary_impact = ({ gross_salary_in, gross_salary_A_in }) => gross_salary_B({ gross_salary_in }) - gross_salary_A({ gross_salary_A_in });
export const income_tax_impact = ({ gross_salary_in, pension_contribution_in, tax_credits_in, gross_salary_A_in, pension_contribution_A_in, tax_credits_A_in }) => income_tax_B({ gross_salary_in, pension_contribution_in, tax_credits_in }) - income_tax_A({ gross_salary_A_in, pension_contribution_A_in, tax_credits_A_in });

//export const net_salary_impact = () => ()