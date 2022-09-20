import { income_tax_sum as income_tax_sum_current } from "./cul_scope_1.mjs";
import { income_tax_sum as income_tax_sum_proposed } from "./cul_scope_2.mjs";

export { income_tax_sum_current, income_tax_sum_proposed };

export const income_tax_sum_impact = ({ taxpayer_table_in, tax_rate_in }) =>
income_tax_sum_proposed({ taxpayer_table_in, tax_rate_in }) - income_tax_sum_current({ taxpayer_table_in });