// a simple one

export const net_salary = () => gross_salary() - income_tax();

export const gross_salary = () => gross_salary_in;

export const income_tax = () => Math.max(paye() + prsi() + usc() - tax_credit(), 0);

export const tax_credit = () => 1000;

export const effective_rate = () => 1 - net_salary() / gross_salary();

export const prsi = () => gross_salary() * 0.04;

export const band = () => 30000;

/*export const paye = () => {
  return 0.2 * gross_salary() + 0.2 * Math.max(gross_salary() - band(), 0);
};*/

export const usc_table = () => [
  { band_id: 1, band_co: 12012, rate: 0.005 },
  { band_id: 2, band_co: 21295, rate: 0.02 },
  {
    band_id: 3,
    band_co: 70144,
    rate: 0.045,
  },
  { band_id: 4, band_co: 0, rate: 0.08 },
];

export const usc_band_id = () => usc_band_id_in;

export const usc_band_end = () => {
  if (usc_band_id() == usc_table().length) return 999999999;
  return usc_table()[usc_band_id() - 1].band_co;
};
export const usc_band_start = () => {
  if (usc_band_id() == 1) return 0;
  return usc_table()[usc_band_id() - 2].band_co;
};
export const usc_rate = () => usc_table()[usc_band_id() - 1].rate;
export const usc_by_band_id = () =>
  usc_rate() *
  Math.min(
    usc_band_end() - usc_band_start(),
    Math.max(gross_salary() - usc_band_start(), 0)
  );
export const usc = () => usc_table().reduce((a, v) => a + usc_by_band_id({ usc_band_id_in: v.band_id }), 0)



export const paye_table = () => [
  { band_id: 1, band_co: 36800, rate: 0.20 },
  { band_id: 2, band_co: 100000, rate: 0.40 },
  {
    band_id: 3,
    band_co: 0,
    rate: 0.40,
  }];

export const paye_band_id = () => paye_band_id_in;

export const paye_band_end = () => {
  if (paye_band_id() == paye_table().length) return 999999999;
  return paye_table()[paye_band_id() - 1].band_co;
};
export const paye_band_start = () => {
  if (paye_band_id() == 1) return 0;
  return paye_table()[paye_band_id() - 2].band_co;
};
export const paye_rate = () => paye_table()[paye_band_id() - 1].rate;
export const paye_by_band_id = () =>
  paye_rate() *
  Math.min(
    paye_band_end() - paye_band_start(),
    Math.max(gross_salary() - paye_band_start(), 0)
  );
export const paye = () => Math.max(0,paye_table().reduce((a, v) => a + paye_by_band_id({ paye_band_id_in: v.band_id }), 0) - tax_credit())





/*
export const usc_by_band_id = () => {
  return (({ band_id, band_co, rate }) => Math.max(gross_salary() - 1))(
    // there is a rate +1 thing that should be better!)
    usc_table()[band_id() - 1]
  );
};
*/
