import { usc_sum } from "./cul_scope_4.mjs";import { paye_sum } from "./cul_scope_4.mjs";import { income_tax_sum } from "./cul_scope_4.mjs";import { usc_by_taxpayer } from "./cul_scope_4.mjs";import { paye_by_taxpayer } from "./cul_scope_4.mjs";import { income_tax_by_taxpayer } from "./cul_scope_4.mjs";import { proportion } from "./cul_scope_4.mjs";import { gross_salary } from "./cul_scope_4.mjs";import { taxpayer_count } from "./cul_scope_4.mjs";import { taxpayer_table } from "./cul_scope_4.mjs";import { taxpayer_id } from "./cul_scope_4.mjs";import { paye_table } from "./cul_scope_2.mjs";import { usc_table } from "./cul_scope_2.mjs";import { band } from "./cul_scope_2.mjs";import { tax_rate } from "./cul_scope_2.mjs";import { usc_impact } from "./cul_scope_0.mjs";import { usc_sum_impact } from "./cul_scope_0.mjs";import { paye_impact } from "./cul_scope_0.mjs";import { paye_sum_impact } from "./cul_scope_0.mjs";import { income_tax_impact } from "./cul_scope_0.mjs";import { income_tax_sum_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_impact } from "./cul_scope_0.mjs";import { usc_by_taxpayer_impact } from "./cul_scope_0.mjs";import { income_tax_by_taxpayer_impact } from "./cul_scope_0.mjs";import { paye_by_taxpayer_current } from "./cul_scope_1.mjs";import { usc_by_taxpayer_current } from "./cul_scope_1.mjs";import { income_tax_by_taxpayer_current } from "./cul_scope_1.mjs";import { usc_current } from "./cul_scope_1.mjs";import { usc_sum_current } from "./cul_scope_1.mjs";import { paye_current } from "./cul_scope_1.mjs";import { paye_sum_current } from "./cul_scope_1.mjs";import { effective_rate_current } from "./cul_scope_1.mjs";import { income_tax_current } from "./cul_scope_1.mjs";import { income_tax_sum_current } from "./cul_scope_1.mjs"; // a simple one

export const net_salary = ({ taxpayer_table_in, taxpayer_id_in, paye_table_in, usc_table_in }) => gross_salary({ taxpayer_table_in, taxpayer_id_in }) - income_tax({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in });

export const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;

export const income_tax = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in, usc_table_in }) => Math.max(paye({ paye_table_in, taxpayer_table_in, taxpayer_id_in }) + prsi({ taxpayer_table_in, taxpayer_id_in }) + usc({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) - tax_credit({}), 0);

export const tax_credit = ({}) => 1000;

export const effective_rate = ({ taxpayer_table_in, taxpayer_id_in, paye_table_in, usc_table_in }) => 1 - net_salary({ taxpayer_table_in, taxpayer_id_in, paye_table_in, usc_table_in }) / gross_salary({ taxpayer_table_in, taxpayer_id_in });

export const prsi = ({ taxpayer_table_in, taxpayer_id_in }) => gross_salary({ taxpayer_table_in, taxpayer_id_in }) * 0.04;

export const band_ = ({}) => 30000;

/*export const paye = () => {
  return 0.2 * gross_salary() + 0.2 * Math.max(gross_salary() - band(), 0);
};*/

export const usc_table_ = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 21295, rate: 0.02 },
{
  band_id: 3,
  band_co: 70144,
  rate: 0.045 },

{ band_id: 4, band_co: 0, rate: 0.08 }];


export const usc_band_id = ({ usc_band_id_in }) => usc_band_id_in;

export const usc_band_end = ({ usc_band_id_in, usc_table_in }) => {
  if (usc_band_id({ usc_band_id_in }) == usc_table({ usc_table_in }).length) return 999999999;
  return usc_table({ usc_table_in })[usc_band_id({ usc_band_id_in }) - 1].band_co;
};
export const usc_band_start = ({ usc_band_id_in, usc_table_in }) => {
  if (usc_band_id({ usc_band_id_in }) == 1) return 0;
  return usc_table({ usc_table_in })[usc_band_id({ usc_band_id_in }) - 2].band_co;
};
export const usc_rate = ({ usc_table_in, usc_band_id_in }) => usc_table({ usc_table_in })[usc_band_id({ usc_band_id_in }) - 1].rate;
export const usc_by_band_id = ({ usc_table_in, usc_band_id_in, taxpayer_table_in, taxpayer_id_in }) =>
usc_rate({ usc_table_in, usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in, usc_table_in }) - usc_band_start({ usc_band_id_in, usc_table_in }),
Math.max(gross_salary({ taxpayer_table_in, taxpayer_id_in }) - usc_band_start({ usc_band_id_in, usc_table_in }), 0));

export const usc = ({ usc_table_in, taxpayer_table_in, taxpayer_id_in }) => usc_table({ usc_table_in }).reduce((a, v) => a + usc_by_band_id({ usc_table_in, taxpayer_table_in, taxpayer_id_in, usc_band_id_in: v.band_id }), 0);



export const paye_table_ = ({}) => [
{ band_id: 1, band_co: 36800, rate: 0.20 },
{ band_id: 2, band_co: 100000, rate: 0.40 },
{
  band_id: 3,
  band_co: 0,
  rate: 0.40 }];


export const paye_band_id = ({ paye_band_id_in }) => paye_band_id_in;

export const paye_band_end = ({ paye_band_id_in, paye_table_in }) => {
  if (paye_band_id({ paye_band_id_in }) == paye_table({ paye_table_in }).length) return 999999999;
  return paye_table({ paye_table_in })[paye_band_id({ paye_band_id_in }) - 1].band_co;
};
export const paye_band_start = ({ paye_band_id_in, paye_table_in }) => {
  if (paye_band_id({ paye_band_id_in }) == 1) return 0;
  return paye_table({ paye_table_in })[paye_band_id({ paye_band_id_in }) - 2].band_co;
};
export const paye_rate = ({ paye_table_in, paye_band_id_in }) => paye_table({ paye_table_in })[paye_band_id({ paye_band_id_in }) - 1].rate;
export const paye_by_band_id = ({ paye_table_in, paye_band_id_in, taxpayer_table_in, taxpayer_id_in }) =>
paye_rate({ paye_table_in, paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in, paye_table_in }) - paye_band_start({ paye_band_id_in, paye_table_in }),
Math.max(gross_salary({ taxpayer_table_in, taxpayer_id_in }) - paye_band_start({ paye_band_id_in, paye_table_in }), 0));

export const paye = ({ paye_table_in, taxpayer_table_in, taxpayer_id_in }) => Math.max(0, paye_table({ paye_table_in }).reduce((a, v) => a + paye_by_band_id({ paye_table_in, taxpayer_table_in, taxpayer_id_in, paye_band_id_in: v.band_id }), 0) - tax_credit({}));





/*
export const usc_by_band_id = () => {
  return (({ band_id, band_co, rate }) => Math.max(gross_salary() - 1))(
    // there is a rate +1 thing that should be better!)
    usc_table()[band_id() - 1]
  );
};
*/