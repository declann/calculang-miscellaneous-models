import { fund_value_0 } from "./cul_scope_0.mjs";import { unit_growth_rate } from "./cul_scope_0.mjs";import { emper_contribution_rate } from "./cul_scope_0.mjs";import { empee_contribution_rate } from "./cul_scope_0.mjs";import { salary_inflation_rate } from "./cul_scope_0.mjs";import { salary_0 } from "./cul_scope_0.mjs";import { retirement_age } from "./cul_scope_0.mjs";import { age_0 } from "./cul_scope_0.mjs";import { age } from "./cul_scope_0.mjs";import { projected_fund_value } from "./cul_scope_0.mjs";import { salary } from "./cul_scope_0.mjs";import { emper_contribution } from "./cul_scope_0.mjs";import { empee_contribution_tax_relief } from "./cul_scope_0.mjs";import { accumulated_empee_contributions } from "./cul_scope_0.mjs";import { empee_contribution } from "./cul_scope_0.mjs";import { unit_price } from "./cul_scope_0.mjs";import { unit_allocation } from "./cul_scope_0.mjs";import { unit_balance } from "./cul_scope_0.mjs";import { fund_value } from "./cul_scope_0.mjs"; // heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters, single person. Many limitations
// work in progress. See README.md

// inputs:
export const gross_salary = ({ gross_salary_in }) => gross_salary_in;
export const tax_credits = ({ tax_credits_in }) => tax_credits_in;
export const pension_contribution = ({ pension_contribution_in }) => pension_contribution_in;

// functions:
export const net_salary = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) =>
gross_salary({ gross_salary_in }) - pension_contribution({ pension_contribution_in }) - income_tax({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in });

export const income_tax = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) => paye({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) + prsi({ gross_salary_in }) + usc({ gross_salary_in });

export const effective_rate = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) => 1 - net_salary({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) / gross_salary({ gross_salary_in });

export const prsi_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in });

export const prsi = ({ gross_salary_in }) =>
prsi_taxable_salary({ gross_salary_in }) * prsi_rate({}) * (gross_salary({ gross_salary_in }) > 352 * 52 ? 1 : 0); // todo feature flag RE threshold

export const prsi_rate = ({}) => 0.04;

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
export const usc_table = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 21295, rate: 0.02 },
{
  band_id: 3,
  band_co: 70144,
  rate: 0.045
},
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

export const usc_taxable_salary = ({ gross_salary_in }) => gross_salary({ gross_salary_in }); // pay usc on pension contribution

export const usc_by_band_id = ({ usc_band_id_in, gross_salary_in }) =>
usc_rate({ usc_band_id_in }) *
Math.min(
usc_band_end({ usc_band_id_in }) - usc_band_start({ usc_band_id_in }),
Math.max(usc_taxable_salary({ gross_salary_in }) - usc_band_start({ usc_band_id_in }), 0));


export const usc = ({ gross_salary_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ gross_salary_in, usc_band_id_in: v.band_id }),
0) * (
gross_salary({ gross_salary_in }) > 13000 ? 1 : 0);

// PAYE, "
export const paye_table = ({}) => [
{ band_id: 1, band_co: 36800, rate: 0.2 },
{ band_id: 2, band_co: 100000, rate: 0.4 },
{
  band_id: 3,
  band_co: 0,
  rate: 0.4
}];


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

export const age_ = ({ age_in }) => age_in;

export const percentage_limit = ({ age_in }) => age({ age_in }) < 30 ? 0.15 : 0.2;

// pensions_tax_relief = impact of contribution on paye calc with 115k,gross salary limit
// then use full gross_salary for paye_taxable_salary and create a deduction in summary
// approach below is different, but I think result is the same, todo prove

export const paye_taxable_salary = ({ gross_salary_in, pension_contribution_in, age_in }) =>
Math.max(
0,
gross_salary({ gross_salary_in }) -
Math.min(
pension_contribution({ pension_contribution_in }),
percentage_limit({ age_in }) * Math.min(115000, gross_salary({ gross_salary_in }))));



export const paye_by_band_id = ({ paye_band_id_in, gross_salary_in, pension_contribution_in, age_in }) =>
paye_rate({ paye_band_id_in }) *
Math.min(
paye_band_end({ paye_band_id_in }) - paye_band_start({ paye_band_id_in }),
Math.max(paye_taxable_salary({ gross_salary_in, pension_contribution_in, age_in }) - paye_band_start({ paye_band_id_in }), 0));


export const paye_over_bands = ({ gross_salary_in, pension_contribution_in, age_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ gross_salary_in, pension_contribution_in, age_in, paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here => placed outside. Issue #95
);

export const paye = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) => Math.max(paye_over_bands({ gross_salary_in, pension_contribution_in, age_in }) - tax_credits({ tax_credits_in }), 0);

export const net_salary_plus_pension_contribution = ({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) =>
net_salary({ gross_salary_in, pension_contribution_in, age_in, tax_credits_in }) + pension_contribution({ pension_contribution_in });