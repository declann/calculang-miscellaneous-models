import { income_tax_impact } from "./cul_scope_0.mjs";import { gross_salary_impact } from "./cul_scope_0.mjs";import { net_salary_impact } from "./cul_scope_0.mjs";import { paye_taxable_salary_impact } from "./cul_scope_0.mjs";import { net_salary_plus_pension_contribution_impact } from "./cul_scope_0.mjs";import { pension_contribution_impact } from "./cul_scope_0.mjs";import { income_tax_B } from "./cul_scope_2.mjs";import { net_salary_plus_pension_contribution_B } from "./cul_scope_2.mjs";import { paye_taxable_salary_B } from "./cul_scope_2.mjs";import { net_salary_B } from "./cul_scope_2.mjs";import { pension_contribution_B } from "./cul_scope_2.mjs";import { gross_salary_B } from "./cul_scope_2.mjs";import {
//gross_salary as gross_salary_A,
//pension_contribution as pension_contribution_A,
net_salary as net_salary_A,
paye_taxable_salary as paye_taxable_salary_A,
net_salary_plus_pension_contribution as net_salary_plus_pension_contribution_A,
income_tax as income_tax_A } from
"./cul_scope_3.mjs";

export { net_salary_A, paye_taxable_salary_A, net_salary_plus_pension_contribution_A, income_tax_A };

export const gross_salary_A = ({ gross_salary_A_in }) => gross_salary_A_in;
export const pension_contribution_A = ({ pension_contribution_A_in }) => pension_contribution_A_in;
export const tax_credits_A = ({ tax_credits_A_in }) => tax_credits_A_in;


export const gross_salary = ({ gross_salary_A_in }) => gross_salary_A({ gross_salary_A_in });
export const pension_contribution = ({ pension_contribution_A_in }) => pension_contribution_A({ pension_contribution_A_in });
export const tax_credits = ({ tax_credits_A_in }) => tax_credits_A({ tax_credits_A_in });