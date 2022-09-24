// a simple one

export const net_salary = () => gross_salary() - income_tax();

export const gross_salary = () => gross_salary_in;

export const income_tax = () => Math.max(paye() + prsi() - usc() - tax_credit(), 0);

export const tax_credit = () => 1000;

export const effective_rate = () => 1 - net_salary() / gross_salary();

export const prsi = () => gross_salary() * 0.04;

export const band = () => 30000;

export const paye = () => {
  return 0.2 * gross_salary() + 0.2 * Math.max(gross_salary() - band(), 0);
};

export const usc_table = () => [
  { band_id: 1, band_co: 12012, rate: 0.005 },
  { band_id: 2, band_co: 21295, rate: 0.02 },
  {
    band_id: 3,
    band_co: 70144,
    rate: 0.045,
  },
  { band_id: 3, band_co: 0, rate: 0.08 },
];

export const band_id = () => band_id_in;

export const usc_band_end = () => {
  if (band_id() == usc_table().length) return 999999999;
  return usc_table()[band_id() - 1];
};
export const usc_band_start = () => {
  if (band_id() == 1) return 0;
  return usc_table()[band_id() - 2];
};
export const usc_rate = () => usc_table()[band_id() - 1];
export const usc_by_band_id = () =>
  usc_rate() *
  Math.min(
    usc_band_end() - usc_band_start(),
    Math.max(gross_salary() - usc_band_start(), 0)
  );
export const usc = () => usc_table().reduce((a, v) => a + usc_by_band_id({band_id:v.band_id}),0)
/*
export const usc_by_band_id = () => {
  return (({ band_id, band_co, rate }) => Math.max(gross_salary() - 1))(
    // there is a rate +1 thing that should be better!)
    usc_table()[band_id() - 1]
  );
};
*/
