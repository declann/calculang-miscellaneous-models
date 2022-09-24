import { paye_table } from "./cul_scope_2.mjs";import { usc_table } from "./cul_scope_2.mjs";import { band } from "./cul_scope_2.mjs";import { tax_rate } from "./cul_scope_2.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_1.mjs";import { income_tax_current } from "./cul_scope_1.mjs";import { income_tax_sum_current } from "./cul_scope_1.mjs";import { income_tax, effective_rate, usc, paye } from "./cul_scope_5.mjs";
export { income_tax, effective_rate, usc, paye };

export const taxpayer_id = ({ taxpayer_id_in }) => taxpayer_id_in;
export const taxpayer_table = ({ taxpayer_table_in }) => taxpayer_table_in;

export const gross_salary = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].gross_salary;

export const income_tax_sum = ({ taxpayer_table_in, paye_table_in, usc_table_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) => acc + income_tax({ paye_table_in, taxpayer_table_in, usc_table_in, taxpayer_id_in: val.taxpayer_id }),
0);


export const paye_sum = ({ taxpayer_table_in, paye_table_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) => acc + paye({ paye_table_in, taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }),
0);


export const usc_sum = ({ taxpayer_table_in, usc_table_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) => acc + usc({ usc_table_in, taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }),
0);