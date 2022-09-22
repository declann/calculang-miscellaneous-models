import { income_tax_sum } from "./cul_scope_4.mjs";import { gross_salary } from "./cul_scope_4.mjs";import { taxpayer_table } from "./cul_scope_4.mjs";import { taxpayer_id } from "./cul_scope_4.mjs";import { band } from "./cul_scope_2.mjs";import { tax_rate } from "./cul_scope_2.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_1.mjs";import { income_tax_current } from "./cul_scope_1.mjs";import { income_tax_sum_current } from "./cul_scope_1.mjs"; // a simple one

export const net_salary = ({ taxpayer_table_in, taxpayer_id_in, band_in }) => gross_salary({ taxpayer_table_in, taxpayer_id_in }) - income_tax({ taxpayer_table_in, taxpayer_id_in, band_in });

export const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;


export const income_tax = ({ taxpayer_table_in, taxpayer_id_in, band_in }) =>
Math.max(paye({ taxpayer_table_in, taxpayer_id_in, band_in }) + prsi({ taxpayer_table_in, taxpayer_id_in }) - tax_credit({}), 0);

export const tax_credit = ({}) => 1000;

export const effective_rate = ({ taxpayer_table_in, taxpayer_id_in, band_in }) => 1 - net_salary({ taxpayer_table_in, taxpayer_id_in, band_in }) / gross_salary({ taxpayer_table_in, taxpayer_id_in });

export const prsi = ({ taxpayer_table_in, taxpayer_id_in }) => gross_salary({ taxpayer_table_in, taxpayer_id_in }) * 0.04;

export const band_ = ({}) => 30000;

export const paye = ({ taxpayer_table_in, taxpayer_id_in, band_in }) => {
  return 0.2 * gross_salary({ taxpayer_table_in, taxpayer_id_in }) + 0.2 * Math.min(gross_salary({ taxpayer_table_in, taxpayer_id_in }) - band({ band_in }), 0);
};