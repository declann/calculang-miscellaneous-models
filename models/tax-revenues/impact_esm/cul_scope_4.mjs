import { tax_credits } from "./cul_scope_3.mjs";import { tax_credit } from "./cul_scope_3.mjs";import { prsi_sum } from "./cul_scope_3.mjs";import { usc_sum } from "./cul_scope_3.mjs";import { paye_sum } from "./cul_scope_3.mjs";import { income_tax_sum } from "./cul_scope_3.mjs";import { prsi_by_taxpayer } from "./cul_scope_3.mjs";import { usc_by_taxpayer } from "./cul_scope_3.mjs";import { paye_by_taxpayer } from "./cul_scope_3.mjs";import { income_tax_by_taxpayer } from "./cul_scope_3.mjs";import { proportion } from "./cul_scope_3.mjs";import { gross_salary } from "./cul_scope_3.mjs";import { taxpayer_count } from "./cul_scope_3.mjs";import { taxpayer_table } from "./cul_scope_3.mjs";import { taxpayer_id } from "./cul_scope_3.mjs";import { prsi } from "./cul_scope_3.mjs";import { paye } from "./cul_scope_3.mjs";import { usc } from "./cul_scope_3.mjs";import { effective_rate } from "./cul_scope_3.mjs";import { income_tax } from "./cul_scope_3.mjs";import { pension_contribution } from "./cul_scope_0.mjs";import { prsi_impact } from "./cul_scope_0.mjs";import { prsi_sum_impact } from "./cul_scope_0.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { usc_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_proposed } from "./cul_scope_0.mjs";import { prsi_sum_proposed } from "./cul_scope_0.mjs";import { usc_proposed } from "./cul_scope_0.mjs";import { usc_sum_proposed } from "./cul_scope_0.mjs";import { paye_proposed } from "./cul_scope_0.mjs";import { paye_sum_proposed } from "./cul_scope_0.mjs";import { effective_rate_proposed } from "./cul_scope_0.mjs";import { income_tax_proposed } from "./cul_scope_0.mjs";import { income_tax_sum_proposed } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_current } from "./cul_scope_0.mjs";import { usc_by_taxpayer_current } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_current } from "./cul_scope_0.mjs";import { prsi_sum_current } from "./cul_scope_0.mjs";import { usc_current } from "./cul_scope_0.mjs";import { usc_sum_current } from "./cul_scope_0.mjs";import { paye_current } from "./cul_scope_0.mjs";import { paye_sum_current } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_0.mjs";import { income_tax_current } from "./cul_scope_0.mjs";import { income_tax_sum_current } from "./cul_scope_0.mjs";import {
income_tax_sum_,
income_tax_,
effective_rate_,
usc_,
prsi_,
paye_,
usc_sum_,
prsi_sum_,
paye_sum_,
income_tax_by_taxpayer_,
usc_by_taxpayer_,
prsi_by_taxpayer_,
paye_by_taxpayer_ } from
"./cul_scope_6.mjs";
export {
income_tax_sum_,
income_tax_,
effective_rate_,
usc_,
paye_,
prsi_,
usc_sum_,
prsi_sum_,
paye_sum_,
income_tax_by_taxpayer_,
usc_by_taxpayer_,
prsi_by_taxpayer_,
paye_by_taxpayer_ };


// tax rate an input
export const tax_rate = ({ tax_rate_in }) => tax_rate_in;

export const tax_credit_proposed = ({ tax_credit_proposed_in }) => tax_credit_proposed_in;

export const tax_credit_ = ({ tax_credit_proposed_in }) => tax_credit_proposed({ tax_credit_proposed_in }); // b/c separate 2022 and proposed assumptions

export const band = ({ band_in }) => band_in;

export const usc_table = ({ usc_table_in }) => usc_table_in;

export const paye_table = ({ paye_table_in }) => paye_table_in;

export const prsi_rate = ({ prsi_rate_in }) => prsi_rate_in;