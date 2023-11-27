import { pension_contribution } from "./cul_scope_0.mjs";import { prsi_impact } from "./cul_scope_0.mjs";import { prsi_sum_impact } from "./cul_scope_0.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { usc_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_proposed } from "./cul_scope_0.mjs";import { prsi_sum_proposed } from "./cul_scope_0.mjs";import { usc_proposed } from "./cul_scope_0.mjs";import { usc_sum_proposed } from "./cul_scope_0.mjs";import { paye_proposed } from "./cul_scope_0.mjs";import { paye_sum_proposed } from "./cul_scope_0.mjs";import { effective_rate_proposed } from "./cul_scope_0.mjs";import { income_tax_proposed } from "./cul_scope_0.mjs";import { income_tax_sum_proposed } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_current } from "./cul_scope_0.mjs";import { usc_by_taxpayer_current } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_current } from "./cul_scope_0.mjs";import { prsi_sum_current } from "./cul_scope_0.mjs";import { usc_current } from "./cul_scope_0.mjs";import { usc_sum_current } from "./cul_scope_0.mjs";import { paye_current } from "./cul_scope_0.mjs";import { paye_sum_current } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_0.mjs";import { income_tax_current } from "./cul_scope_0.mjs";import { income_tax_sum_current } from "./cul_scope_0.mjs";import {
income_tax_sum as income_tax_sum_current_,
income_tax as income_tax_current_,
effective_rate as effective_rate_current_,
paye_sum as paye_sum_current_,
paye as paye_current_,
usc_sum as usc_sum_current_,
usc as usc_current_,
prsi_sum as prsi_sum_current_,
prsi as prsi_current_,
income_tax_by_taxpayer as income_tax_by_taxpayer_current_,
usc_by_taxpayer as usc_by_taxpayer_current_,
prsi_by_taxpayer as prsi_by_taxpayer_current_,
paye_by_taxpayer as paye_by_taxpayer_current_ } from
"./cul_scope_2.mjs";
import {
income_tax_sum as income_tax_sum_proposed_,
income_tax as income_tax_proposed_,
effective_rate as effective_rate_proposed_,
paye_sum as paye_sum_proposed_,
paye as paye_proposed_,
usc_sum as usc_sum_proposed_,
usc as usc_proposed_,
prsi_sum as prsi_sum_proposed_,
prsi as prsi_proposed_,
income_tax_by_taxpayer as income_tax_by_taxpayer_proposed_,
usc_by_taxpayer as usc_by_taxpayer_proposed_,
prsi_by_taxpayer as prsi_by_taxpayer_proposed_,
paye_by_taxpayer as paye_by_taxpayer_proposed_ } from
"./cul_scope_3.mjs";

export { income_tax_sum_current_, income_tax_sum_proposed_ };
export { income_tax_current_, income_tax_proposed_ };
export { usc_sum_current_, usc_sum_proposed_ };
export { prsi_sum_current_, prsi_sum_proposed_ };
export { usc_current_, usc_proposed_ };
export { prsi_current_, prsi_proposed_ };
export { paye_sum_current_, paye_sum_proposed_ };
export { paye_current_, paye_proposed_ };
export { effective_rate_current_, effective_rate_proposed_ };
export {
paye_by_taxpayer_proposed_,
income_tax_by_taxpayer_proposed_,
usc_by_taxpayer_proposed_,
prsi_by_taxpayer_proposed_ };

export {
paye_by_taxpayer_current_,
income_tax_by_taxpayer_current_,
usc_by_taxpayer_current_,
prsi_by_taxpayer_current_ };


export const income_tax_by_taxpayer_impact_ = ({ tax_credit_proposed_in, prsi_rate_in, taxpayer_table_in, taxpayer_id_in, usc_table_in, taxpayer_count_in, tax_credit_in }) =>
income_tax_by_taxpayer_proposed({ tax_credit_proposed_in, prsi_rate_in, taxpayer_table_in, taxpayer_id_in, usc_table_in, taxpayer_count_in }) - income_tax_by_taxpayer_current({ taxpayer_table_in, taxpayer_id_in, tax_credit_in, taxpayer_count_in });
export const usc_by_taxpayer_impact_ = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) =>
usc_by_taxpayer_proposed({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) - usc_by_taxpayer_current({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in });
export const paye_by_taxpayer_impact_ = ({ tax_credit_proposed_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in, tax_credit_in }) =>
paye_by_taxpayer_proposed({ tax_credit_proposed_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) - paye_by_taxpayer_current({ taxpayer_table_in, taxpayer_id_in, tax_credit_in, taxpayer_count_in });
export const prsi_by_taxpayer_impact_ = ({ prsi_rate_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) =>
prsi_by_taxpayer_proposed({ prsi_rate_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) - prsi_by_taxpayer_current({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in });


export const income_tax_sum_impact_ = ({ taxpayer_table_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in, tax_credit_in }) =>
income_tax_sum_proposed({ taxpayer_table_in, tax_credit_proposed_in, prsi_rate_in, usc_table_in, taxpayer_count_in }) - income_tax_sum_current({ taxpayer_table_in, tax_credit_in, taxpayer_count_in });

export const income_tax_impact_ = ({ tax_credit_proposed_in, prsi_rate_in, taxpayer_table_in, taxpayer_id_in, usc_table_in, tax_credit_in }) =>
income_tax_proposed({ tax_credit_proposed_in, prsi_rate_in, taxpayer_table_in, taxpayer_id_in, usc_table_in }) - income_tax_current({ taxpayer_table_in, taxpayer_id_in, tax_credit_in });

export const paye_sum_impact_ = ({ taxpayer_table_in, tax_credit_proposed_in, taxpayer_count_in, tax_credit_in }) => paye_sum_proposed({ taxpayer_table_in, tax_credit_proposed_in, taxpayer_count_in }) - paye_sum_current({ taxpayer_table_in, tax_credit_in, taxpayer_count_in });

export const paye_impact_ = ({ tax_credit_proposed_in, taxpayer_table_in, taxpayer_id_in, tax_credit_in }) => paye_proposed({ tax_credit_proposed_in }) - paye_current({ taxpayer_table_in, taxpayer_id_in, tax_credit_in });

export const usc_sum_impact_ = ({ taxpayer_table_in, usc_table_in, taxpayer_count_in }) => usc_sum_proposed({ taxpayer_table_in, usc_table_in, taxpayer_count_in }) - usc_sum_current({ taxpayer_table_in, taxpayer_count_in });

export const usc_impact_ = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) => usc_proposed({ usc_table_in }) - usc_current({ taxpayer_table_in, taxpayer_id_in });

export const prsi_sum_impact_ = ({ taxpayer_table_in, prsi_rate_in, taxpayer_count_in }) => prsi_sum_proposed({ taxpayer_table_in, prsi_rate_in, taxpayer_count_in }) - prsi_sum_current({ taxpayer_table_in, taxpayer_count_in });

export const prsi_impact_ = ({ prsi_rate_in, taxpayer_table_in, taxpayer_id_in }) => prsi_proposed({ prsi_rate_in, taxpayer_table_in, taxpayer_id_in }) - prsi_current({ taxpayer_table_in, taxpayer_id_in });

// test mitigate application refactor
export const pension_contribution_ = ({}) => 0;