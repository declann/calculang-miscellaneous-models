import {
  income_tax,
  effective_rate,
  usc,
  paye,
  prsi,
} from './simple-incometax.cul';
export { income_tax, effective_rate, usc, paye, prsi };

export const taxpayer_id = () => taxpayer_id_in;
export const taxpayer_table = () => taxpayer_table_in;
export const taxpayer_count = () => taxpayer_count_in;

export const gross_salary = () => taxpayer_table()[taxpayer_id()].gross_salary;
export const proportion = () => taxpayer_table()[taxpayer_id()].proportion;

export const income_tax_by_taxpayer = () =>
  income_tax() * proportion() * taxpayer_count();
export const paye_by_taxpayer = () => paye() * proportion() * taxpayer_count();
export const usc_by_taxpayer = () => usc() * proportion() * taxpayer_count();
export const prsi_by_taxpayer = () => prsi() * proportion() * taxpayer_count();

export const income_tax_sum = () =>
  taxpayer_table().reduce(
    (acc, val) =>
      acc +
      income_tax({ taxpayer_id_in: val.taxpayer_id }) *
        proportion({ taxpayer_id_in: val.taxpayer_id }) * // this should be abstracted e.g. income_tax = income_tax * proportion * taxpayer_calc in sep. scaling model, for now creating _by_taxpayer variables
        taxpayer_count(),
    0
  );

export const paye_sum = () =>
  taxpayer_table().reduce(
    (acc, val) =>
      acc +
      paye({ taxpayer_id_in: val.taxpayer_id }) *
        proportion({ taxpayer_id_in: val.taxpayer_id }) *
        taxpayer_count(),
    0
  );

export const usc_sum = () =>
  taxpayer_table().reduce(
    (acc, val) =>
      acc +
      usc({ taxpayer_id_in: val.taxpayer_id }) *
        proportion({ taxpayer_id_in: val.taxpayer_id }) *
        taxpayer_count(),
    0
  );

export const prsi_sum = () =>
  taxpayer_table().reduce(
    (acc, val) =>
      acc +
      prsi({ taxpayer_id_in: val.taxpayer_id }) *
        proportion({ taxpayer_id_in: val.taxpayer_id }) *
        taxpayer_count(),
    0
  );

// test mitigate application refactor
export const tax_credit = () => tax_credit_in;
export const tax_credits = () => tax_credit();