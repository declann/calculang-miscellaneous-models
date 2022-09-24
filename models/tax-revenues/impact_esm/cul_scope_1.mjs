import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { effective_rate_proposed } from "./cul_scope_2.mjs";import { income_tax_proposed } from "./cul_scope_2.mjs";import { income_tax_sum_proposed } from "./cul_scope_2.mjs";import { income_tax, effective_rate } from "./cul_scope_3.mjs";
export { income_tax, effective_rate };

export const taxpayer_id = ({ taxpayer_id_in }) => taxpayer_id_in;
export const taxpayer_table = ({ taxpayer_table_in }) => taxpayer_table_in;

export const gross_salary = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].gross_salary;

// -taxpayer_id_in
export const income_tax_sum = ({ taxpayer_table_in, band_id_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) => acc + income_tax({ taxpayer_table_in, band_id_in, taxpayer_id_in: val.taxpayer_id }), //income_tax({ gross_salary_in: gross_salary({ taxpayer_id_in: val }) }),
0);