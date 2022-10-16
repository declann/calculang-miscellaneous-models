import {
//gross_salary as gross_salary_A,
//pension_contribution as pension_contribution_A,
net_salary_A,
paye_taxable_salary_A,
net_salary_plus_pension_contribution_A } from
"./cul_scope_1.mjs";

import {
net_salary_B,
paye_taxable_salary_B,
net_salary_plus_pension_contribution_B } from
"./cul_scope_2.mjs";

export {
net_salary_A,
paye_taxable_salary_A,
net_salary_plus_pension_contribution_A };

export {
net_salary_B,
paye_taxable_salary_B,
net_salary_plus_pension_contribution_B };


import { paye_taxable_salary } from "./cul_scope_3.mjs";
export { paye_taxable_salary };

export const gross_salary_A = ({ gross_salary_A_in }) => gross_salary_A_in;
export const pension_contribution_A = ({ pension_contribution_A_in }) => pension_contribution_A_in;
export const tax_credits_A = ({ tax_credits_A_in }) => tax_credits_A_in;

export const pension_contribution_impact = ({ pension_contribution_A_in }) =>
pension_contribution_B() - pension_contribution_A({ pension_contribution_A_in });

export const paye_taxable_salary_impact = ({ gross_salary_in, pension_contribution_in, gross_salary_A_in, pension_contribution_A_in, tax_credits_A_in }) =>
paye_taxable_salary_B({ gross_salary_in, pension_contribution_in }) -
paye_taxable_salary_A({
  gross_salary_in: gross_salary_A({ gross_salary_A_in }),
  pension_contribution_in: pension_contribution_A({ pension_contribution_A_in }),
  tax_credits_in: tax_credits_A({ tax_credits_A_in }) });


//export const net_salary_impact = () => ()