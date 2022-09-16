import { revenue } from "./cul_scope_0.mjs";import { zero } from "./cul_scope_0.mjs";import { taxpayer_proportion } from "./cul_scope_2.mjs";import { taxpayer_gross_salary } from "./cul_scope_2.mjs"; // a simple one

export const net_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in }) - income_tax({ gross_salary_in });

export const gross_salary = ({ gross_salary_in }) => gross_salary_in;

export const income_tax = ({ gross_salary_in }) => Math.max(0.1 * gross_salary({ gross_salary_in }) - tax_credit({}), 0);

export const tax_credit = ({}) => 1000;