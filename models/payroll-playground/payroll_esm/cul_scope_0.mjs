// WIP

// USC code adapted from simple-incometax.cul.js

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
export const usc_table = ({}) => [
{ band_id: 1, band_co: 12012, rate: 0.005 },
{ band_id: 2, band_co: 21295, rate: 0.02 },
{
  band_id: 3,
  band_co: 70044,
  rate: 0.045
},
{ band_id: 4, band_co: 999999999, rate: 0.08 }];


export const usc_band_id = ({ usc_band_id_in }) => usc_band_id_in;

export const usc_band_end = ({ usc_band_id_in, pay_period_duration_in, time_in }) => {
  return (
    usc_table({})[usc_band_id({ usc_band_id_in }) - 1].band_co * factor_for_credits_and_bands({ pay_period_duration_in, time_in }));

};

export const usc_band_start = ({ usc_band_id_in, pay_period_duration_in, time_in }) => {
  if (usc_band_id({ usc_band_id_in }) == 1) return 0;
  return (
    usc_table({})[usc_band_id({ usc_band_id_in }) - 2].band_co * factor_for_credits_and_bands({ pay_period_duration_in, time_in }));

};

export const usc_rate = ({ usc_band_id_in }) => usc_table({})[usc_band_id({ usc_band_id_in }) - 1].rate;

export const usc_taxable_salary = ({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) => gross_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }); // pay usc on pension contribution

export const usc_by_band_id = ({ usc_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in }) => usc_rate({ usc_band_id_in }) * usc_taxable_by_band_id({ usc_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in });

export const usc_taxable_by_band_id = ({ usc_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in }) =>
Math.min(
usc_band_end({ usc_band_id_in, pay_period_duration_in, time_in }) - usc_band_start({ usc_band_id_in, pay_period_duration_in, time_in }),
Math.max(usc_taxable_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) - usc_band_start({ usc_band_id_in, pay_period_duration_in, time_in }), 0));


export const usc = ({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in }) =>
usc_table({}).reduce(
(a, v) => a + usc_by_band_id({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, usc_band_id_in: v.band_id }),
0) *
1; //(gross_salary() > 13000 ? 1 : 0);

// end USC

export const pay_period = ({ pay_period_in }) => pay_period_in;
export const pay_period_duration = ({ pay_period_duration_in }) => pay_period_duration_in; // 'M' or 'W'

// op = opening = pre current pay period, fut = after current pay period to end of year
export const op_gross_salary = ({ op_gross_salary_in }) => op_gross_salary_in;
export const pay_period_gross_salary = ({ pay_period_gross_salary_in }) => pay_period_gross_salary_in;
export const fut_gross_salary = ({ fut_gross_salary_in }) => fut_gross_salary_in;
export const gross_salary = ({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) => {
  if (time({ time_in }) == pay_period({ pay_period_in }) - 1) return op_gross_salary({ op_gross_salary_in });else
  if (time({ time_in }) == pay_period({ pay_period_in }))
  return op_gross_salary({ op_gross_salary_in }) + pay_period_gross_salary({ pay_period_gross_salary_in });else
  if (factor_for_credits_and_bands({ pay_period_duration_in, time_in }) == 1)
  return op_gross_salary({ op_gross_salary_in }) + pay_period_gross_salary({ pay_period_gross_salary_in }) + fut_gross_salary({ fut_gross_salary_in });
};
/*
  pay_period_gross_salary() +
  op_gross_salary() + // following expression means I need to define fut_gross_salary_in even if it isn't used for op/current pay period
  fut_gross_salary() * (factor_for_credits_and_bands == 1 ? 1 : 0);*/ // but fut gross salary into last pay period

/*export const op_usc = () => usc({ pay_period_in: pay_period() - 1 });
export const op_usc_taxable_by_band_id = () => usc_taxable_by_band_id({ pay_period_in: pay_period() - 1 });*/ // leave this to application?
//export const pay_period_usc = () => usc() - op_usc();

export const usc_payable = ({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in }) => usc({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in }) - usc({ pay_period_duration_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, time_in: time({ time_in }) - 1 });

// PAYE

export const paye_table = ({}) => [
{ band_id: 1, band_co: 36800, rate: 0.2 },
{ band_id: 2, band_co: 0, rate: 0.4 }
/*{
  band_id: 3,
  band_co: 0,
  rate: 0.4,
},*/];


export const paye_band_id = ({ paye_band_id_in }) => paye_band_id_in;

export const paye_band_end = ({ paye_band_id_in, pay_period_duration_in, time_in }) => {
  if (paye_band_id({ paye_band_id_in }) == paye_table({}).length) return 999999999;
  return (
    paye_table({})[paye_band_id({ paye_band_id_in }) - 1].band_co * factor_for_credits_and_bands({ pay_period_duration_in, time_in }));

};

export const paye_band_start = ({ paye_band_id_in, pay_period_duration_in, time_in }) => {
  if (paye_band_id({ paye_band_id_in }) == 1) return 0;
  return (
    paye_table({})[paye_band_id({ paye_band_id_in }) - 2].band_co * factor_for_credits_and_bands({ pay_period_duration_in, time_in }));

};

export const paye_rate = ({ paye_band_id_in }) => paye_table({})[paye_band_id({ paye_band_id_in }) - 1].rate;

export const paye_taxable_salary = ({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }) =>
Math.max(0, gross_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) - pension_contribution({ time_in, pay_period_in, op_pension_contribution_in, pay_period_pension_contribution_in, pay_period_duration_in, fut_pension_contribution_in }));

export const op_pension_contribution = ({ op_pension_contribution_in }) => op_pension_contribution_in;
export const pay_period_pension_contribution = ({ pay_period_pension_contribution_in }) =>
pay_period_pension_contribution_in;
export const fut_pension_contribution = ({ fut_pension_contribution_in }) => fut_pension_contribution_in;

export const pension_contribution = ({ time_in, pay_period_in, op_pension_contribution_in, pay_period_pension_contribution_in, pay_period_duration_in, fut_pension_contribution_in }) => {
  if (time({ time_in }) == pay_period({ pay_period_in }) - 1) return op_pension_contribution({ op_pension_contribution_in });else
  if (time({ time_in }) == pay_period({ pay_period_in }))
  return op_pension_contribution({ op_pension_contribution_in }) + pay_period_pension_contribution({ pay_period_pension_contribution_in });else
  if (factor_for_credits_and_bands({ pay_period_duration_in, time_in }) == 1)
  return (
    op_pension_contribution({ op_pension_contribution_in }) +
    pay_period_pension_contribution({ pay_period_pension_contribution_in }) +
    fut_pension_contribution({ fut_pension_contribution_in }));

};

export const paye_by_band_id = ({ paye_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }) => paye_rate({ paye_band_id_in }) * paye_taxable_by_band_id({ paye_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in });

export const paye_taxable_by_band_id = ({ paye_band_id_in, pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }) =>
Math.min(
paye_band_end({ paye_band_id_in, pay_period_duration_in, time_in }) - paye_band_start({ paye_band_id_in, pay_period_duration_in, time_in }),
Math.max(paye_taxable_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }) - paye_band_start({ paye_band_id_in, pay_period_duration_in, time_in }), 0));


export const paye_exempt = ({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }) => gross_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) - paye_taxable_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in });

export const paye_over_bands = ({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }) =>
Math.max(
0,
paye_table({}).reduce(
(a, v) => a + paye_by_band_id({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, paye_band_id_in: v.band_id }),
0)
//- tax_credit() // input not working here => placed outside. Issue #95
);

export const tax_credits_pa = ({ tax_credits_pa_in }) => tax_credits_pa_in;

export const tax_credits = ({ tax_credits_pa_in, pay_period_duration_in, time_in }) =>
tax_credits_pa({ tax_credits_pa_in }) * factor_for_credits_and_bands({ pay_period_duration_in, time_in });

export const tax_credits_deducted = ({ tax_credits_pa_in, pay_period_duration_in, time_in }) =>
tax_credits({ tax_credits_pa_in, pay_period_duration_in, time_in }) - tax_credits({ tax_credits_pa_in, pay_period_duration_in, time_in: time({ time_in }) - 1 });

export const paye = ({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }) => Math.max(paye_over_bands({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in }) - tax_credits({ tax_credits_pa_in, pay_period_duration_in, time_in }), 0);

export const paye_payable = ({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }) => paye({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }) - paye({ pay_period_duration_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in, time_in: time({ time_in }) - 1 });

export const time = ({ time_in }) => time_in;

export const factor_for_credits_and_bands = ({ pay_period_duration_in, time_in }) => {
  if (pay_period_duration({ pay_period_duration_in }) == 'W') return time({ time_in }) / 52;
  if (pay_period_duration({ pay_period_duration_in }) == 'M') return time({ time_in }) / 12;
  return 999;
};

export const income_tax = ({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }) => paye({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }) + prsi({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) + usc({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in });

export const prsi_taxable_salary = ({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) => gross_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in });

export const prsi = ({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) =>
prsi_taxable_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) *
prsi_rate({}); /* * (gross_salary() > 352 * 52 ? 1 : 0);*/ // todo feature flag RE threshold

export const prsi_rate = ({}) => 0.04;

export const prsi_payable = ({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) => prsi({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) - prsi({ pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, time_in: time({ time_in }) - 1 });

export const net_salary = ({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }) => gross_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in }) - pension_contribution({ time_in, pay_period_in, op_pension_contribution_in, pay_period_pension_contribution_in, pay_period_duration_in, fut_pension_contribution_in }) - income_tax({ pay_period_duration_in, time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in });

export const net_salary_pay_period = ({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }) => net_salary({ time_in, pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in }) - net_salary({ pay_period_in, op_gross_salary_in, pay_period_gross_salary_in, pay_period_duration_in, fut_gross_salary_in, op_pension_contribution_in, pay_period_pension_contribution_in, fut_pension_contribution_in, tax_credits_pa_in, time_in: time({ time_in }) - 1 });