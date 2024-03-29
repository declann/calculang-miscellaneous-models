import { net_salary_plus_pension_contribution } from "./cul_scope_2.mjs";import { paye } from "./cul_scope_2.mjs";import { paye_over_bands } from "./cul_scope_2.mjs";import { paye_by_band_id } from "./cul_scope_2.mjs";import { paye_taxable_salary } from "./cul_scope_2.mjs";import { paye_rate } from "./cul_scope_2.mjs";import { paye_band_start } from "./cul_scope_2.mjs";import { paye_band_end } from "./cul_scope_2.mjs";import { paye_band_id } from "./cul_scope_2.mjs";import { paye_table } from "./cul_scope_2.mjs";import { usc } from "./cul_scope_2.mjs";import { usc_by_band_id } from "./cul_scope_2.mjs";import { usc_taxable_salary } from "./cul_scope_2.mjs";import { usc_rate } from "./cul_scope_2.mjs";import { usc_band_start } from "./cul_scope_2.mjs";import { usc_band_end } from "./cul_scope_2.mjs";import { usc_band_id } from "./cul_scope_2.mjs";import { usc_table } from "./cul_scope_2.mjs";import { prsi_rate } from "./cul_scope_2.mjs";import { prsi } from "./cul_scope_2.mjs";import { prsi_taxable_salary } from "./cul_scope_2.mjs";import { effective_rate } from "./cul_scope_2.mjs";import { income_tax } from "./cul_scope_2.mjs";import { pension_contribution } from "./cul_scope_2.mjs";import { tax_credits } from "./cul_scope_2.mjs";import { gross_salary } from "./cul_scope_2.mjs";import { fund_value_0 } from "./cul_scope_0.mjs";import { unit_growth_rate } from "./cul_scope_0.mjs";import { emper_contribution_rate } from "./cul_scope_0.mjs";import { empee_contribution_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate } from "./cul_scope_0.mjs";import { salary_0 } from "./cul_scope_0.mjs";import { retirement_age } from "./cul_scope_0.mjs";import { age_0 } from "./cul_scope_0.mjs";import { age } from "./cul_scope_0.mjs";import { projected_fund_value } from "./cul_scope_0.mjs";import { salary } from "./cul_scope_0.mjs";import { emper_contribution } from "./cul_scope_0.mjs";import { empee_contribution_tax_relief } from "./cul_scope_0.mjs";import { accumulated_empee_contributions } from "./cul_scope_0.mjs";import { empee_contribution } from "./cul_scope_0.mjs";import { unit_price } from "./cul_scope_0.mjs";import { unit_allocation } from "./cul_scope_0.mjs";import { unit_balance } from "./cul_scope_0.mjs";import { fund_value } from "./cul_scope_0.mjs";import { net_salary } from "./cul_scope_0.mjs"; // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters, single person. Many limitations
// work in progress. See README.md

// inputs:
export const gross_salary_ = ({ gross_salary_in }) => gross_salary_in;
export const tax_credits_ = ({ tax_credits_in }) => tax_credits_in;
export const pension_contribution_ = ({ pension_contribution_in }) => pension_contribution_in;

// functions:
export const net_salary_ = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => gross_salary({ gross_salary_in }) - pension_contribution({ pension_contribution_in }) - income_tax({ gross_salary_in, pension_contribution_in, tax_credits_in });

export const income_tax_ = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => paye({ gross_salary_in, pension_contribution_in, tax_credits_in }) + prsi({ gross_salary_in }) + usc({ gross_salary_in });

export const effective_rate_ = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => 1 - net_salary({ gross_salary_in, pension_contribution_in, tax_credits_in }) / gross_salary({ gross_salary_in });

export const prsi_taxable_salary_ = ({ gross_salary_in }) => gross_salary({ gross_salary_in });

export const prsi_ = ({ gross_salary_in }) =>
prsi_taxable_salary({ gross_salary_in }) * prsi_rate({}) * (gross_salary({ gross_salary_in }) > 352 * 52 ? 1 : 0); // todo feature flag RE threshold

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

export const usc_band_end_ = ({ usc_band_id_in }) => {
  if (usc_band_id({ usc_band_id_in }) == usc_table({}).length) return 999999999;
  return usc_table({})[usc_band_id({ usc_band_id_in }) - 1].band_co;
};

export const usc_band_start_ = ({ usc_band_id_in }) => {
  if (usc_band_id({ usc_band_id_in }) == 1) return 0;
  return usc_table({})[usc_band_id({ usc_band_id_in }) - 2].band_co;
};

export const usc_rate_ = ({ usc_band_id_in }) => usc_table({})[usc_band_id({ usc_band_id_in }) - 1].rate;

export const usc_taxable_salary_ = ({ gross_salary_in }) => gross_salary({ gross_salary_in }); // pay usc on pension contribution

export const usc_by_band_id_ = ({ usc_band_id_in, gross_salary_in }) =>
usc_rate({ usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in }) - usc_band_start({ usc_band_id_in }),
Math.max(usc_taxable_salary({ gross_salary_in }) - usc_band_start({ usc_band_id_in }), 0));


export const usc_ = ({ gross_salary_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ gross_salary_in, usc_band_id_in: v.band_id }),
0) * (
gross_salary({ gross_salary_in }) > 13000 ? 1 : 0);

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

export const paye_band_end_ = ({ paye_band_id_in }) => {
  if (paye_band_id({ paye_band_id_in }) == paye_table({}).length) return 999999999;
  return paye_table({})[paye_band_id({ paye_band_id_in }) - 1].band_co;
};

export const paye_band_start_ = ({ paye_band_id_in }) => {
  if (paye_band_id({ paye_band_id_in }) == 1) return 0;
  return paye_table({})[paye_band_id({ paye_band_id_in }) - 2].band_co;
};

export const paye_rate_ = ({ paye_band_id_in }) => paye_table({})[paye_band_id({ paye_band_id_in }) - 1].rate;

export const paye_taxable_salary_ = ({ gross_salary_in, pension_contribution_in }) =>
Math.max(0, gross_salary({ gross_salary_in }) - pension_contribution({ pension_contribution_in }));

export const paye_by_band_id_ = ({ paye_band_id_in, gross_salary_in, pension_contribution_in }) =>
paye_rate({ paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in }) - paye_band_start({ paye_band_id_in }),
Math.max(paye_taxable_salary({ gross_salary_in, pension_contribution_in }) - paye_band_start({ paye_band_id_in }), 0));


export const paye_over_bands_ = ({ gross_salary_in, pension_contribution_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ gross_salary_in, pension_contribution_in, paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here => placed outside. Issue #95
);

export const paye_ = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) => Math.max(paye_over_bands({ gross_salary_in, pension_contribution_in }) - tax_credits({ tax_credits_in }), 0);

export const net_salary_plus_pension_contribution_ = ({ gross_salary_in, pension_contribution_in, tax_credits_in }) =>
net_salary({ gross_salary_in, pension_contribution_in, tax_credits_in }) + pension_contribution({ pension_contribution_in });