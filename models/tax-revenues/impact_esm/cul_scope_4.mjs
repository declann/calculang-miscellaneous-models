import { usc_sum } from "./cul_scope_1.mjs";import { paye_sum } from "./cul_scope_1.mjs";import { income_tax_sum } from "./cul_scope_1.mjs";import { usc_by_taxpayer } from "./cul_scope_1.mjs";import { paye_by_taxpayer } from "./cul_scope_1.mjs";import { income_tax_by_taxpayer } from "./cul_scope_1.mjs";import { proportion } from "./cul_scope_1.mjs";import { gross_salary } from "./cul_scope_1.mjs";import { taxpayer_count } from "./cul_scope_1.mjs";import { taxpayer_table } from "./cul_scope_1.mjs";import { taxpayer_id } from "./cul_scope_1.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_proposed } from "./cul_scope_2.mjs";import { usc_by_taxpayer_proposed } from "./cul_scope_2.mjs";import { income_tax_by_taxpayer_proposed } from "./cul_scope_2.mjs";import { usc_proposed } from "./cul_scope_2.mjs";import { usc_sum_proposed } from "./cul_scope_2.mjs";import { paye_proposed } from "./cul_scope_2.mjs";import { paye_sum_proposed } from "./cul_scope_2.mjs";import { effective_rate_proposed } from "./cul_scope_2.mjs";import { income_tax_proposed } from "./cul_scope_2.mjs";import { income_tax_sum_proposed } from "./cul_scope_2.mjs"; // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters. Many limitations

export const net_salary = ({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }) => gross_salary({ taxpayer_table_in, taxpayer_id_in }) - income_tax({ taxpayer_table_in, taxpayer_id_in, tax_credit_in });

export const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;

export const income_tax = ({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }) => Math.max(Math.max(paye({ taxpayer_table_in, taxpayer_id_in }) - tax_credit({ tax_credit_in }), 0) + prsi({ taxpayer_table_in, taxpayer_id_in }) + usc({ taxpayer_table_in, taxpayer_id_in }), 0);

export const tax_credit = ({ tax_credit_in }) => tax_credit_in;

export const effective_rate = ({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }) => 1 - net_salary({ taxpayer_table_in, taxpayer_id_in, tax_credit_in }) / gross_salary({ taxpayer_table_in, taxpayer_id_in });

export const prsi = ({ taxpayer_table_in, taxpayer_id_in }) =>
gross_salary({ taxpayer_table_in, taxpayer_id_in }) * 0.04 * (gross_salary({ taxpayer_table_in, taxpayer_id_in }) > 352 * 52 ? 1 : 0);

export const usc_table = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 21295, rate: 0.02 },
{
  band_id: 3,
  band_co: 70144,
  rate: 0.045 },

{ band_id: 4, band_co: 0, rate: 0.08 }];


export const usc_band_id = ({ usc_band_id_in }) => usc_band_id_in;

export const usc_band_end = ({ usc_band_id_in }) => {
  if (usc_band_id({ usc_band_id_in }) == usc_table({}).length) return 999999999;
  return usc_table({})[usc_band_id({ usc_band_id_in }) - 1].band_co;
};

export const usc_band_start = ({ usc_band_id_in }) => {
  if (usc_band_id({ usc_band_id_in }) == 1) return 0;
  return usc_table({})[usc_band_id({ usc_band_id_in }) - 2].band_co;
};

export const usc_rate = ({ usc_band_id_in }) => usc_table({})[usc_band_id({ usc_band_id_in }) - 1].rate;

export const usc_by_band_id = ({ usc_band_id_in, taxpayer_table_in, taxpayer_id_in }) =>
usc_rate({ usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in }) - usc_band_start({ usc_band_id_in }),
Math.max(gross_salary({ taxpayer_table_in, taxpayer_id_in }) - usc_band_start({ usc_band_id_in }), 0));


export const usc = ({ taxpayer_table_in, taxpayer_id_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ taxpayer_table_in, taxpayer_id_in, usc_band_id_in: v.band_id }),
0) * (
gross_salary({ taxpayer_table_in, taxpayer_id_in }) > 13000 ? 1 : 0);

export const paye_table = ({}) => [
{ band_id: 1, band_co: 36800, rate: 0.2 },
{ band_id: 2, band_co: 100000, rate: 0.4 },
{
  band_id: 3,
  band_co: 0,
  rate: 0.4 }];



export const paye_band_id = ({ paye_band_id_in }) => paye_band_id_in;

export const paye_band_end = ({ paye_band_id_in }) => {
  if (paye_band_id({ paye_band_id_in }) == paye_table({}).length) return 999999999;
  return paye_table({})[paye_band_id({ paye_band_id_in }) - 1].band_co;
};

export const paye_band_start = ({ paye_band_id_in }) => {
  if (paye_band_id({ paye_band_id_in }) == 1) return 0;
  return paye_table({})[paye_band_id({ paye_band_id_in }) - 2].band_co;
};

export const paye_rate = ({ paye_band_id_in }) => paye_table({})[paye_band_id({ paye_band_id_in }) - 1].rate;

export const paye_by_band_id = ({ paye_band_id_in, taxpayer_table_in, taxpayer_id_in }) =>
paye_rate({ paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in }) - paye_band_start({ paye_band_id_in }),
Math.max(gross_salary({ taxpayer_table_in, taxpayer_id_in }) - paye_band_start({ paye_band_id_in }), 0));


export const paye = ({ taxpayer_table_in, taxpayer_id_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ taxpayer_table_in, taxpayer_id_in, paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here, related to reduce/- above? CONFIRMED. works when moved to above
);