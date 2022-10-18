// WIP

// USC code adapted from simple-incometax.cul.js

// USC, should be mostly abstracted to a table loader
// issues: #11 #76
export const usc_table = () => [
  { band_id: 1, band_co: 12012, rate: 0.005 },
  { band_id: 2, band_co: 21295, rate: 0.02 },
  {
    band_id: 3,
    band_co: 70144,
    rate: 0.045,
  },
  { band_id: 4, band_co: 999999999, rate: 0.08 },
];

export const usc_band_id = () => usc_band_id_in;

export const usc_band_end = () => {
  return (
    usc_table()[usc_band_id() - 1].band_co * factor_for_credits_and_bands()
  );
};

export const usc_band_start = () => {
  if (usc_band_id() == 1) return 0;
  return (
    usc_table()[usc_band_id() - 2].band_co * factor_for_credits_and_bands()
  );
};

export const usc_rate = () => usc_table()[usc_band_id() - 1].rate;

export const usc_taxable_salary = () => gross_salary(); // pay usc on pension contribution

export const usc_by_band_id = () => usc_rate() * usc_taxable_by_band_id();

export const usc_taxable_by_band_id = () =>
  Math.min(
    usc_band_end() - usc_band_start(),
    Math.max(usc_taxable_salary() - usc_band_start(), 0)
  );

export const usc = () =>
  usc_table().reduce(
    (a, v) => a + usc_by_band_id({ usc_band_id_in: v.band_id }),
    0
  ) * 1; //(gross_salary() > 13000 ? 1 : 0);

// end USC

export const pay_period = () => pay_period_in;
export const pay_period_duration = () => pay_period_duration_in; // 'M' or 'W'

// op = opening = pre current pay period, fut = after current pay period to end of year
export const op_gross_salary = () => op_gross_salary_in;
export const pay_period_gross_salary = () => pay_period_gross_salary_in;
export const fut_gross_salary = () => fut_gross_salary_in;
export const gross_salary = () => {
  if (time() == pay_period() - 1) return op_gross_salary();
  else if (time() == pay_period())
    return op_gross_salary() + pay_period_gross_salary();
  else if (factor_for_credits_and_bands() == 1)
    return op_gross_salary() + pay_period_gross_salary() + fut_gross_salary();
};
/*
  pay_period_gross_salary() +
  op_gross_salary() + // following expression means I need to define fut_gross_salary_in even if it isn't used for op/current pay period
  fut_gross_salary() * (factor_for_credits_and_bands == 1 ? 1 : 0);*/ // but fut gross salary into last pay period

/*export const op_usc = () => usc({ pay_period_in: pay_period() - 1 });
export const op_usc_taxable_by_band_id = () => usc_taxable_by_band_id({ pay_period_in: pay_period() - 1 });*/ // leave this to application?
//export const pay_period_usc = () => usc() - op_usc();

export const usc_payable = () => usc() - usc({ time: time() - 1 });

export const time = () => time_in;

export const factor_for_credits_and_bands = () => {
  if (pay_period_duration() == 'W') return time() / 52;
  if (pay_period_duration() == 'M') return time() / 12;
  return 999;
};
