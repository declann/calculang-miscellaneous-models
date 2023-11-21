import { prsi_rate } from "./cul_scope_2.mjs";import { paye_table } from "./cul_scope_2.mjs";import { usc_table } from "./cul_scope_2.mjs";import { band } from "./cul_scope_2.mjs";import { tax_credit } from "./cul_scope_2.mjs";import { tax_credit_proposed } from "./cul_scope_2.mjs";import { tax_rate } from "./cul_scope_2.mjs";import { prsi_impact } from "./cul_scope_0.mjs";import { prsi_sum_impact } from "./cul_scope_0.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_1.mjs";import { prsi_by_taxpayer_current } from "./cul_scope_1.mjs";import { usc_by_taxpayer_current } from "./cul_scope_1.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_1.mjs";import { prsi_current } from "./cul_scope_1.mjs";import { prsi_sum_current } from "./cul_scope_1.mjs";import { usc_current } from "./cul_scope_1.mjs";import { usc_sum_current } from "./cul_scope_1.mjs";import { paye_current } from "./cul_scope_1.mjs";import { paye_sum_current } from "./cul_scope_1.mjs";import { effective_rate_current } from "./cul_scope_1.mjs";import { income_tax_current } from "./cul_scope_1.mjs";import { income_tax_sum_current } from "./cul_scope_1.mjs";import {
income_tax,
effective_rate,
usc,
paye,
prsi } from
"./cul_scope_5.mjs";
export { income_tax, effective_rate, usc, paye, prsi };

export const taxpayer_id = ({ taxpayer_id_in }) => taxpayer_id_in;
export const taxpayer_table = ({ taxpayer_table_in }) => taxpayer_table_in;
export const taxpayer_count = ({ taxpayer_count_in }) => taxpayer_count_in;

export const gross_salary = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].gross_salary;
export const proportion = ({ taxpayer_table_in, taxpayer_id_in }) => taxpayer_table({ taxpayer_table_in })[taxpayer_id({ taxpayer_id_in })].proportion;

export const income_tax_by_taxpayer = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, pension_contribution_in, tax_credits_in, prsi_rate_in, usc_table_in, taxpayer_count_in }) =>
income_tax({ paye_table_in, taxpayer_table_in, taxpayer_id_in, pension_contribution_in, tax_credits_in, prsi_rate_in, usc_table_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });
export const paye_by_taxpayer = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, pension_contribution_in, tax_credits_in, taxpayer_count_in }) => paye({ paye_table_in, taxpayer_table_in, taxpayer_id_in, pension_contribution_in, tax_credits_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });
export const usc_by_taxpayer = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) => usc({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });
export const prsi_by_taxpayer = ({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in, taxpayer_count_in }) => prsi({ taxpayer_table_in, taxpayer_id_in, prsi_rate_in }) * proportion({ taxpayer_table_in, taxpayer_id_in }) * taxpayer_count({ taxpayer_count_in });

export const income_tax_sum = ({ taxpayer_table_in, paye_table_in, pension_contribution_in, tax_credits_in, prsi_rate_in, usc_table_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
income_tax({ paye_table_in, taxpayer_table_in, pension_contribution_in, tax_credits_in, prsi_rate_in, usc_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) * // this should be abstracted e.g. income_tax = income_tax * proportion * taxpayer_calc in sep. scaling model, for now creating _by_taxpayer variables
taxpayer_count({ taxpayer_count_in }),
0);


export const paye_sum = ({ taxpayer_table_in, paye_table_in, pension_contribution_in, tax_credits_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
paye({ paye_table_in, taxpayer_table_in, pension_contribution_in, tax_credits_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({ taxpayer_count_in }),
0);


export const usc_sum = ({ taxpayer_table_in, usc_table_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
usc({ usc_table_in, taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({ taxpayer_count_in }),
0);


export const prsi_sum = ({ taxpayer_table_in, prsi_rate_in, taxpayer_count_in }) =>
taxpayer_table({ taxpayer_table_in }).reduce(
(acc, val) =>
acc +
prsi({ taxpayer_table_in, prsi_rate_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_table_in, taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({ taxpayer_count_in }),
0);