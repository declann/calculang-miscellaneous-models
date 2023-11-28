import { band } from "./cul_scope_7.mjs";import { tax_credit_proposed } from "./cul_scope_7.mjs";import { tax_rate } from "./cul_scope_7.mjs";import { net_salary_plus_pension_contribution } from "./cul_scope_3.mjs";import { paye } from "./cul_scope_3.mjs";import { paye_over_bands } from "./cul_scope_3.mjs";import { paye_by_band_id } from "./cul_scope_3.mjs";import { paye_taxable_salary } from "./cul_scope_3.mjs";import { paye_rate } from "./cul_scope_3.mjs";import { paye_band_start } from "./cul_scope_3.mjs";import { paye_band_end } from "./cul_scope_3.mjs";import { paye_band_id } from "./cul_scope_3.mjs";import { paye_table } from "./cul_scope_3.mjs";import { usc } from "./cul_scope_3.mjs";import { usc_by_band_id } from "./cul_scope_3.mjs";import { usc_taxable_salary } from "./cul_scope_3.mjs";import { usc_rate } from "./cul_scope_3.mjs";import { usc_band_start } from "./cul_scope_3.mjs";import { usc_band_end } from "./cul_scope_3.mjs";import { usc_band_id } from "./cul_scope_3.mjs";import { usc_table } from "./cul_scope_3.mjs";import { prsi_rate } from "./cul_scope_3.mjs";import { prsi } from "./cul_scope_3.mjs";import { prsi_taxable_salary } from "./cul_scope_3.mjs";import { effective_rate } from "./cul_scope_3.mjs";import { income_tax } from "./cul_scope_3.mjs";import { net_salary } from "./cul_scope_3.mjs";import { tax_credits } from "./cul_scope_3.mjs";import { tax_credit } from "./cul_scope_3.mjs";import { prsi_sum } from "./cul_scope_3.mjs";import { usc_sum } from "./cul_scope_3.mjs";import { paye_sum } from "./cul_scope_3.mjs";import { income_tax_sum } from "./cul_scope_3.mjs";import { prsi_by_taxpayer } from "./cul_scope_3.mjs";import { usc_by_taxpayer } from "./cul_scope_3.mjs";import { paye_by_taxpayer } from "./cul_scope_3.mjs";import { income_tax_by_taxpayer } from "./cul_scope_3.mjs";import { proportion } from "./cul_scope_3.mjs";import { gross_salary } from "./cul_scope_3.mjs";import { taxpayer_count } from "./cul_scope_3.mjs";import { taxpayer_table } from "./cul_scope_3.mjs";import { taxpayer_id } from "./cul_scope_3.mjs";import { pension_contribution } from "./cul_scope_0.mjs";import { prsi_impact } from "./cul_scope_0.mjs";import { prsi_sum_impact } from "./cul_scope_0.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { usc_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_proposed } from "./cul_scope_0.mjs";import { prsi_proposed } from "./cul_scope_0.mjs";import { prsi_sum_proposed } from "./cul_scope_0.mjs";import { usc_proposed } from "./cul_scope_0.mjs";import { usc_sum_proposed } from "./cul_scope_0.mjs";import { paye_proposed } from "./cul_scope_0.mjs";import { paye_sum_proposed } from "./cul_scope_0.mjs";import { effective_rate_proposed } from "./cul_scope_0.mjs";import { income_tax_proposed } from "./cul_scope_0.mjs";import { income_tax_sum_proposed } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_by_taxpayer_current } from "./cul_scope_0.mjs";import { usc_by_taxpayer_current } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_0.mjs";import { prsi_current } from "./cul_scope_0.mjs";import { prsi_sum_current } from "./cul_scope_0.mjs";import { usc_current } from "./cul_scope_0.mjs";import { usc_sum_current } from "./cul_scope_0.mjs";import { paye_current } from "./cul_scope_0.mjs";import { paye_sum_current } from "./cul_scope_0.mjs";import { effective_rate_current } from "./cul_scope_0.mjs";import { income_tax_current } from "./cul_scope_0.mjs";import { income_tax_sum_current } from "./cul_scope_0.mjs"; // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters, single person. Many limitations
// work in progress. See README.md

// inputs:
export const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;
export const tax_credits_ = ({ tax_credits_in }) => tax_credits_in;
export const pension_contribution_ = ({ pension_contribution_in }) => pension_contribution_in;

// functions:
export const net_salary_ = ({ prsi_rate_in, usc_table_in }) => gross_salary({}) - pension_contribution({}) - income_tax({ prsi_rate_in, usc_table_in });

export const income_tax_ = ({ prsi_rate_in, usc_table_in }) => paye({}) + prsi({ prsi_rate_in }) + usc({ usc_table_in });

export const effective_rate_ = ({}) => 1 - net_salary({}) / gross_salary({});

export const prsi_taxable_salary_ = ({}) => gross_salary({});

export const prsi_ = ({ prsi_rate_in }) =>
prsi_taxable_salary({}) * prsi_rate({ prsi_rate_in }) * (gross_salary({}) > 352 * 52 ? 1 : 0); // todo feature flag RE threshold

export const prsi_rate_ = ({}) => 0.04;

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
export const usc_table_ = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 21295, rate: 0.02 },
{
  band_id: 3,
  band_co: 70144,
  rate: 0.045
},
{ band_id: 4, band_co: 0, rate: 0.08 }];


export const usc_band_id_ = ({ usc_band_id_in }) => usc_band_id_in;

export const usc_band_end_ = ({ usc_table_in }) => {
  if (usc_band_id({}) == usc_table({ usc_table_in }).length) return 999999999;
  return usc_table({ usc_table_in })[usc_band_id({}) - 1].band_co;
};

export const usc_band_start_ = ({ usc_table_in }) => {
  if (usc_band_id({}) == 1) return 0;
  return usc_table({ usc_table_in })[usc_band_id({}) - 2].band_co;
};

export const usc_rate_ = ({ usc_table_in }) => usc_table({ usc_table_in })[usc_band_id({}) - 1].rate;

export const usc_taxable_salary_ = ({}) => gross_salary({}); // pay usc on pension contribution

export const usc_by_band_id_ = ({}) =>
usc_rate({}) *
Math.min(
usc_band_end({}) - usc_band_start({}),
Math.max(usc_taxable_salary({}) - usc_band_start({}), 0));


export const usc_ = ({ usc_table_in }) =>
usc_table({ usc_table_in }).reduce(
(a, v) => a + usc_by_band_id({ usc_band_id_in: v.band_id }),
0) * (
gross_salary({}) > 13000 ? 1 : 0);

// PAYE, "
export const paye_table_ = ({}) => [
{ band_id: 1, band_co: 36800, rate: 0.2 },
{ band_id: 2, band_co: 100000, rate: 0.4 },
{
  band_id: 3,
  band_co: 0,
  rate: 0.4
}];


export const paye_band_id_ = ({ paye_band_id_in }) => paye_band_id_in;

export const paye_band_end_ = ({ paye_table_in }) => {
  if (paye_band_id({}) == paye_table({ paye_table_in }).length) return 999999999;
  return paye_table({ paye_table_in })[paye_band_id({}) - 1].band_co;
};

export const paye_band_start_ = ({ paye_table_in }) => {
  if (paye_band_id({}) == 1) return 0;
  return paye_table({ paye_table_in })[paye_band_id({}) - 2].band_co;
};

export const paye_rate_ = ({ paye_table_in }) => paye_table({ paye_table_in })[paye_band_id({}) - 1].rate;

export const paye_taxable_salary_ = ({}) =>
Math.max(0, gross_salary({}) - pension_contribution({}));

export const paye_by_band_id_ = ({}) =>
paye_rate({}) *
Math.min(
paye_band_end({}) - paye_band_start({}),
Math.max(paye_taxable_salary({}) - paye_band_start({}), 0));


export const paye_over_bands_ = ({ paye_table_in }) =>
Math.max(
0,
paye_table({ paye_table_in }).reduce(
(a, v) => a + paye_by_band_id({ paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here => placed outside. Issue #95
);

export const paye_ = ({}) => Math.max(paye_over_bands({}) - tax_credits({}), 0);

export const net_salary_plus_pension_contribution_ = ({}) =>
net_salary({}) + pension_contribution({});