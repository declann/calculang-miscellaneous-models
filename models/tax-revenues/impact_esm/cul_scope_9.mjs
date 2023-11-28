import { band } from "./cul_scope_7.mjs";import { tax_credit_proposed } from "./cul_scope_7.mjs";import { tax_rate } from "./cul_scope_7.mjs";import { net_salary_plus_pension_contribution } from "./cul_scope_3.mjs";import { paye } from "./cul_scope_3.mjs";import { paye_over_bands } from "./cul_scope_3.mjs";import { paye_by_band_id } from "./cul_scope_3.mjs";import { paye_taxable_salary } from "./cul_scope_3.mjs";import { paye_rate } from "./cul_scope_3.mjs";import { paye_band_start } from "./cul_scope_3.mjs";import { paye_band_end } from "./cul_scope_3.mjs";import { paye_band_id } from "./cul_scope_3.mjs";import { paye_table } from "./cul_scope_3.mjs";import { usc } from "./cul_scope_3.mjs";import { usc_by_band_id } from "./cul_scope_3.mjs";import { usc_taxable_salary } from "./cul_scope_3.mjs";import { usc_rate } from "./cul_scope_3.mjs";import { usc_band_start } from "./cul_scope_3.mjs";import { usc_band_end } from "./cul_scope_3.mjs";import { usc_band_id } from "./cul_scope_3.mjs";import { usc_table } from "./cul_scope_3.mjs";import { prsi_rate } from "./cul_scope_3.mjs";import { prsi } from "./cul_scope_3.mjs";import { prsi_taxable_salary } from "./cul_scope_3.mjs";import { effective_rate } from "./cul_scope_3.mjs";import { income_tax } from "./cul_scope_3.mjs";import { net_salary } from "./cul_scope_3.mjs";import { tax_credits } from "./cul_scope_3.mjs";import { tax_credit } from "./cul_scope_3.mjs";import { prsi_sum } from "./cul_scope_3.mjs";import { usc_sum } from "./cul_scope_3.mjs";import { paye_sum } from "./cul_scope_3.mjs";import { income_tax_sum } from "./cul_scope_3.mjs";import { prsi_by_taxpayer } from "./cul_scope_3.mjs";import { usc_by_taxpayer } from "./cul_scope_3.mjs";import { paye_by_taxpayer } from "./cul_scope_3.mjs";import { income_tax_by_taxpayer } from "./cul_scope_3.mjs";import { proportion } from "./cul_scope_3.mjs";import { gross_salary } from "./cul_scope_3.mjs";import { taxpayer_count } from "./cul_scope_3.mjs";import { taxpayer_table } from "./cul_scope_3.mjs";import { taxpayer_id } from "./cul_scope_3.mjs";import { pension_contribution } from "./cul_scope_0.mjs";import { prsi_impact } from "./cul_scope_0.mjs";import { prsi_sum_impact } from "./cul_scope_0.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { usc_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_proposed } from "./cul_scope_0.mjs";import { prsi_sum_proposed } from "./cul_scope_0.mjs";import { usc_proposed } from "./cul_scope_0.mjs";import { usc_sum_proposed } from "./cul_scope_0.mjs";import { paye_proposed } from "./cul_scope_0.mjs";import { paye_sum_proposed } from "./cul_scope_0.mjs";import { effective_rate_proposed } from "./cul_scope_0.mjs";import { income_tax_proposed } from "./cul_scope_0.mjs";import { income_tax_sum_proposed } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_current } from "./cul_scope_0.mjs";import { usc_by_taxpayer_current } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_current } from "./cul_scope_0.mjs";import { prsi_sum_current } from "./cul_scope_0.mjs";import { usc_current } from "./cul_scope_0.mjs";import { usc_sum_current } from "./cul_scope_0.mjs";import { paye_current } from "./cul_scope_0.mjs";import { paye_sum_current } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_0.mjs";import { income_tax_current } from "./cul_scope_0.mjs";import { income_tax_sum_current } from "./cul_scope_0.mjs";import {
income_tax_,
effective_rate_,
usc_,
paye_,
prsi_ } from
"./cul_scope_10.mjs";
export { income_tax_, effective_rate_, usc_, paye_, prsi_ };

export const taxpayer_id_ = ({ taxpayer_id_in }) => taxpayer_id_in;
export const taxpayer_table_ = ({ taxpayer_table_in }) => taxpayer_table_in;
export const taxpayer_count_ = ({ taxpayer_count_in }) => taxpayer_count_in;

export const gross_salary_ = ({}) => taxpayer_table({})[taxpayer_id({})].gross_salary;
export const proportion_ = ({}) => taxpayer_table({})[taxpayer_id({})].proportion;

export const income_tax_by_taxpayer_ = ({ prsi_rate_in, usc_table_in }) =>
income_tax({ prsi_rate_in, usc_table_in }) * proportion({}) * taxpayer_count({});
export const paye_by_taxpayer_ = ({}) => paye({}) * proportion({}) * taxpayer_count({});
export const usc_by_taxpayer_ = ({ usc_table_in }) => usc({ usc_table_in }) * proportion({}) * taxpayer_count({});
export const prsi_by_taxpayer_ = ({ prsi_rate_in }) => prsi({ prsi_rate_in }) * proportion({}) * taxpayer_count({});

export const income_tax_sum_ = ({ prsi_rate_in, usc_table_in }) =>
taxpayer_table({}).reduce(
(acc, val) =>
acc +
income_tax({ prsi_rate_in, usc_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_id_in: val.taxpayer_id }) * // this should be abstracted e.g. income_tax = income_tax * proportion * taxpayer_calc in sep. scaling model, for now creating _by_taxpayer variables
taxpayer_count({}),
0);


export const paye_sum_ = ({}) =>
taxpayer_table({}).reduce(
(acc, val) =>
acc +
paye({ taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({}),
0);


export const usc_sum_ = ({ usc_table_in }) =>
taxpayer_table({}).reduce(
(acc, val) =>
acc +
usc({ usc_table_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({}),
0);


export const prsi_sum_ = ({ prsi_rate_in }) =>
taxpayer_table({}).reduce(
(acc, val) =>
acc +
prsi({ prsi_rate_in, taxpayer_id_in: val.taxpayer_id }) *
proportion({ taxpayer_id_in: val.taxpayer_id }) *
taxpayer_count({}),
0);


// test mitigate application refactor
export const tax_credit_ = ({ tax_credit_in }) => tax_credit_in;
export const tax_credits_ = ({ tax_credit_proposed_in }) => tax_credit({ tax_credit_proposed_in });