import { pension_contribution } from "./cul_scope_0.mjs";import { tax_credits } from "./cul_scope_0.mjs";import { tax_credit } from "./cul_scope_0.mjs";import { prsi_impact } from "./cul_scope_0.mjs";import { prsi_sum_impact } from "./cul_scope_0.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_1.mjs";import { prsi_by_taxpayer_current } from "./cul_scope_1.mjs";import { usc_by_taxpayer_current } from "./cul_scope_1.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_1.mjs";import { prsi_current } from "./cul_scope_1.mjs";import { prsi_sum_current } from "./cul_scope_1.mjs";import { usc_current } from "./cul_scope_1.mjs";import { usc_sum_current } from "./cul_scope_1.mjs";import { paye_current } from "./cul_scope_1.mjs";import { paye_sum_current } from "./cul_scope_1.mjs";import { effective_rate_current } from "./cul_scope_1.mjs";import { income_tax_current } from "./cul_scope_1.mjs";import { income_tax_sum_current } from "./cul_scope_1.mjs";import {
income_tax_sum,
income_tax,
effective_rate,
usc,
prsi,
paye,
usc_sum,
prsi_sum,
paye_sum,
income_tax_by_taxpayer,
usc_by_taxpayer,
prsi_by_taxpayer,
paye_by_taxpayer } from
"./cul_scope_3.mjs";
export {
income_tax_sum,
income_tax,
effective_rate,
usc,
paye,
prsi,
usc_sum,
prsi_sum,
paye_sum,
income_tax_by_taxpayer,
usc_by_taxpayer,
prsi_by_taxpayer,
paye_by_taxpayer };


// tax rate an input
export const tax_rate = ({ tax_rate_in }) => tax_rate_in;

export const tax_credit_proposed = ({ tax_credit_proposed_in }) => tax_credit_proposed_in;

export const tax_credit_ = ({ tax_credit_proposed_in }) => tax_credit_proposed({ tax_credit_proposed_in }); // b/c separate 2022 and proposed assumptions

export const band = ({ band_in }) => band_in;

export const usc_table = ({ usc_table_in }) => usc_table_in;

export const paye_table = ({ paye_table_in }) => paye_table_in;

export const prsi_rate = ({ prsi_rate_in }) => prsi_rate_in;