import { income_tax_sum } from "./cul_scope_3.mjs";import { gross_salary } from "./cul_scope_3.mjs";import { taxpayer_table } from "./cul_scope_3.mjs";import { taxpayer_id } from "./cul_scope_3.mjs";import { tax_rate } from "./cul_scope_2.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { income_tax_sum_current } from "./cul_scope_1.mjs"; // a simple one

export const net_salary = ({ taxpayer_table_in, taxpayer_id_in, tax_rate_in }) => gross_salary({ taxpayer_table_in, taxpayer_id_in }) - income_tax({ tax_rate_in, taxpayer_table_in, taxpayer_id_in });

export const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;

export const tax_rate_ = ({}) => 0.15;

export const income_tax = ({ tax_rate_in, taxpayer_table_in, taxpayer_id_in }) =>
Math.max(tax_rate({ tax_rate_in }) * gross_salary({ taxpayer_table_in, taxpayer_id_in }) - tax_credit({}), 0);

export const tax_credit = ({}) => 1000;