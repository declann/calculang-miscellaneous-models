import { income_tax_sum as income_tax_sum_current, income_tax as income_tax_current, effective_rate as effective_rate_current } from "./cul_scope_1.mjs";
import { income_tax_sum as income_tax_sum_proposed, income_tax as income_tax_proposed, effective_rate as effective_rate_proposed } from "./cul_scope_2.mjs";

export { income_tax_sum_current, income_tax_sum_proposed };
export { income_tax_current, income_tax_proposed };
export { effective_rate_current, effective_rate_proposed };

export const income_tax_sum_impact = ({ taxpayer_table_in, band_in, usc_table_in }) =>
income_tax_sum_proposed({ taxpayer_table_in, band_in, usc_table_in }) - income_tax_sum_current({ taxpayer_table_in });

export const income_tax_impact = ({ taxpayer_table_in, taxpayer_id_in, band_in, usc_table_in }) =>
income_tax_proposed({ taxpayer_table_in, taxpayer_id_in, band_in, usc_table_in }) - income_tax_current({ taxpayer_table_in, taxpayer_id_in });