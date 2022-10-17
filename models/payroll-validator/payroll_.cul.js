export const tax_credits_annual = () => tax_credits_annual_in;
export const tax_credits = () => tax_credits_annual() * time_factor();

export const paye_band_annual = () => paye_band_annual_in;
export const paye_band = () => paye_band_annual() * time_factor();

export const usc_band_1_annual = () => usc_band_1_annual_in;
export const usc_band_1 = () => usc_band_1_annual() * time_factor();

export const usc_band_2_annual = () => usc_band_2_annual_in;
export const usc_band_2 = () => usc_band_2_annual() * time_factor();

export const usc_band_3_annual = () => usc_band_3_annual_in;
export const usc_band_3 = () => usc_band_3_annual() * time_factor();

export const opening_gross_salary_ytd = () => opening_gross_salary_ytd_in;

export const opening_pension_contributions_ytd = () =>
  opening_pension_contributions_ytd_in;

export const time = () => time_in;

export const time_period = () => time_period_in; // 'M' or 'W'

export const time_factor = () => {
  if (time_period == 'W') return 1 / 52;
  if (time_period == 'M') return 1 / 12;
  return 999;
};
