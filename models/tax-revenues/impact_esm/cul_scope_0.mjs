import {
income_tax_sum as income_tax_sum_current,
income_tax as income_tax_current,
effective_rate as effective_rate_current,
paye_sum as paye_sum_current,
paye as paye_current,
usc_sum as usc_sum_current,
usc as usc_current,
income_tax_by_taxpayer as income_tax_by_taxpayer_current,
usc_by_taxpayer as usc_by_taxpayer_current,
paye_by_taxpayer as paye_by_taxpayer_current } from
"./cul_scope_1.mjs";
import {
income_tax_sum as income_tax_sum_proposed,
income_tax as income_tax_proposed,
effective_rate as effective_rate_proposed,
paye_sum as paye_sum_proposed,
paye as paye_proposed,
usc_sum as usc_sum_proposed,
usc as usc_proposed,
income_tax_by_taxpayer as income_tax_by_taxpayer_proposed,
usc_by_taxpayer as usc_by_taxpayer_proposed,
paye_by_taxpayer as paye_by_taxpayer_proposed } from
"./cul_scope_2.mjs";

export { income_tax_sum_current, income_tax_sum_proposed };
export { income_tax_current, income_tax_proposed };
export { usc_sum_current, usc_sum_proposed };
export { usc_current, usc_proposed };
export { paye_sum_current, paye_sum_proposed };
export { paye_current, paye_proposed };
export { effective_rate_current, effective_rate_proposed };
export {
paye_by_taxpayer_proposed,
income_tax_by_taxpayer_proposed,
usc_by_taxpayer_proposed };

export {
paye_by_taxpayer_current,
income_tax_by_taxpayer_current,
usc_by_taxpayer_current };


export const income_tax_by_taxpayer_impact = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_in, usc_table_in, taxpayer_count_in }) =>
income_tax_by_taxpayer_proposed({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_in, usc_table_in, taxpayer_count_in }) - income_tax_by_taxpayer_current({ taxpayer_table_in, taxpayer_id_in, tax_credit_in, taxpayer_count_in });
export const usc_by_taxpayer_impact = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) =>
usc_by_taxpayer_proposed({ usc_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) - usc_by_taxpayer_current({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in });
export const paye_by_taxpayer_impact = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) =>
paye_by_taxpayer_proposed({ paye_table_in, taxpayer_table_in, taxpayer_id_in, taxpayer_count_in }) - paye_by_taxpayer_current({ taxpayer_table_in, taxpayer_id_in, taxpayer_count_in });

export const income_tax_sum_impact = ({ taxpayer_table_in, paye_table_in, tax_credit_in, usc_table_in, taxpayer_count_in }) =>
income_tax_sum_proposed({ taxpayer_table_in, paye_table_in, tax_credit_in, usc_table_in, taxpayer_count_in }) - income_tax_sum_current({ taxpayer_table_in, tax_credit_in, taxpayer_count_in });

export const income_tax_impact = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_in, usc_table_in }) =>
income_tax_proposed({ paye_table_in, taxpayer_table_in, taxpayer_id_in, tax_credit_in, usc_table_in }) - income_tax_current({ taxpayer_table_in, taxpayer_id_in, tax_credit_in });

export const paye_sum_impact = ({ taxpayer_table_in, paye_table_in, taxpayer_count_in }) => paye_sum_proposed({ taxpayer_table_in, paye_table_in, taxpayer_count_in }) - paye_sum_current({ taxpayer_table_in, taxpayer_count_in });

export const paye_impact = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in }) => paye_proposed({ paye_table_in, taxpayer_table_in, taxpayer_id_in }) - paye_current({ taxpayer_table_in, taxpayer_id_in });

export const usc_sum_impact = ({ taxpayer_table_in, usc_table_in, taxpayer_count_in }) => usc_sum_proposed({ taxpayer_table_in, usc_table_in, taxpayer_count_in }) - usc_sum_current({ taxpayer_table_in, taxpayer_count_in });

export const usc_impact = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) => usc_proposed({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) - usc_current({ taxpayer_table_in, taxpayer_id_in });