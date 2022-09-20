import { income_tax_sum } from "./cul_scope_0.mjs";import { gross_salary } from "./cul_scope_0.mjs";import { taxpayer_table } from "./cul_scope_0.mjs";import { taxpayer_id } from "./cul_scope_0.mjs"; // a simple one

export const net_salary = ({ taxpayer_table_in, taxpayer_id_in }) => gross_salary({ taxpayer_table_in, taxpayer_id_in }) - income_tax({ taxpayer_table_in, taxpayer_id_in });

export const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;

export const income_tax = ({ taxpayer_table_in, taxpayer_id_in }) => Math.max(0.15 * gross_salary({ taxpayer_table_in, taxpayer_id_in }) - tax_credit({}), 0);

export const tax_credit = ({}) => 1000;