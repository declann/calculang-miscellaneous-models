import { revenue } from "./cul_scope_0.mjs";import { zero } from "./cul_scope_0.mjs";import { income_tax } from "./cul_scope_1.mjs"; // some representative taxpayer data(generates)

export const taxpayer_id = ({ taxpayer_id_in }) => taxpayer_id_in;

export const taxpayer_gross_salary = ({ taxpayer_id_in }) => 10000 * taxpayer_id({ taxpayer_id_in });

export const taxpayer_proportion = ({ taxpayer_id_in }) =>
[0, 0.05, 0.05, 0.15, 0.1, 0.2, 0.2, 0.1, 0.1, .05][taxpayer_id({ taxpayer_id_in })];