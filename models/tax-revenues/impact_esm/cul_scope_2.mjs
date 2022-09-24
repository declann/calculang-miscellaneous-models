import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_1.mjs";import { income_tax_current } from "./cul_scope_1.mjs";import { income_tax_sum_current } from "./cul_scope_1.mjs";import {
income_tax_sum,
income_tax,
effective_rate } from
"./cul_scope_4.mjs";
export { income_tax_sum, income_tax, effective_rate };

// tax rate an input
export const tax_rate = ({ tax_rate_in }) => tax_rate_in;

export const band = ({ band_in }) => band_in;

export const usc_table = ({ usc_table_in }) => usc_table_in;