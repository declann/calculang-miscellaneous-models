// heavily simplified incometax calculation for Irish incometax
// set to 2022 parameters, single person. Many limitations
// work in progress. See README.md

// inputs:
export const gross_salary = () => gross_salary_in;
export const tax_credits = () => tax_credits_in;
export const pension_contribution = () => pension_contribution_in;

// functions:
export const net_salary = () =>
  gross_salary() - pension_contribution() - income_tax();

export const income_tax = () => paye() + prsi() + usc();

export const effective_rate = () => 1 - net_salary() / gross_salary();

export const prsi_taxable_salary = () => gross_salary();

export const prsi = () =>
  prsi_taxable_salary() * prsi_rate() * (gross_salary() > 352 * 52 ? 1 : 0); // todo feature flag RE threshold

export const prsi_rate = () => 0.04;

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

export const usc_taxable_salary = () => gross_salary(); // pay usc on pension contribution

export const usc_by_band_id = () =>
  usc_rate() *
  Math.min(
    usc_band_end() - usc_band_start(),
    Math.max(usc_taxable_salary() - usc_band_start(), 0)
  );

export const usc = () =>
  usc_table().reduce(
    (a, v) => a + usc_by_band_id({ usc_band_id_in: v.band_id }),
    0
  ) * (gross_salary() > 13000 ? 1 : 0);

// PAYE, "
export const paye_table = () => [
  { band_id: 1, band_co: 36800, rate: 0.2 },
  { band_id: 2, band_co: 100000, rate: 0.4 },
  {
    band_id: 3,
    band_co: 0,
    rate: 0.4,
  },
];

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

export const age = () => age_in;

export const percentage_limit = () => (age() < 30 ? 0.15 : 0.2);

export const paye_taxable_salary = () =>
  Math.max(
    0,
    gross_salary() -
      Math.min(
        pension_contribution(),
        percentage_limit() * Math.min(115000, gross_salary())
      )
  );

export const paye_by_band_id = () =>
  paye_rate() *
  Math.min(
    paye_band_end() - paye_band_start(),
    Math.max(paye_taxable_salary() - paye_band_start(), 0)
  );

export const paye_over_bands = () =>
  Math.max(
    0,
    paye_table().reduce(
      (a, v) => a + paye_by_band_id({ paye_band_id_in: v.band_id }),
      0
    ) //- tax_credit() // input not working here => placed outside. Issue #95
  );

export const paye = () => Math.max(paye_over_bands() - tax_credits(), 0);

export const net_salary_plus_pension_contribution = () =>
  net_salary() + pension_contribution();
