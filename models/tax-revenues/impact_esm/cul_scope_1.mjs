import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { usc_proposed } from "./cul_scope_2.mjs";import { usc_sum_proposed } from "./cul_scope_2.mjs";import { paye_proposed } from "./cul_scope_2.mjs";import { paye_sum_proposed } from "./cul_scope_2.mjs";import { effective_rate_proposed } from "./cul_scope_2.mjs";import { income_tax_proposed } from "./cul_scope_2.mjs";import { income_tax_sum_proposed } from "./cul_scope_2.mjs";import { income_tax, effective_rate, usc, paye } from "./cul_scope_3.mjs";
export { income_tax, effective_rate, usc, paye };

export const taxpayer_id = ({ taxpayer_id_in }) => taxpayer_id_in;
export const taxpayer_table = ({ taxpayer_table_in }) => taxpayer_table_in;

export const gross_salary = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].gross_salary;

export const income_tax_sum = ({ taxpayer_table_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) => acc + income_tax({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }),
0);


export const paye_sum = ({ taxpayer_table_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) => acc + paye({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }),
0);


export const usc_sum = ({ taxpayer_table_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) => acc + usc({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }),
0);