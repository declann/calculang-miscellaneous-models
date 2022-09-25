import { income_tax, effective_rate, usc, paye } from './simple-incometax.cul';
export { income_tax, effective_rate, usc, paye };

export const taxpayer_id = () => taxpayer_id_in;
export const taxpayer_table = () => taxpayer_table_in;

export const gross_salary = () => taxpayer_table()[taxpayer_id()].gross_salary;
export const proportion = () => taxpayer_table()[taxpayer_id()].proportion;

export const income_tax_sum = () =>
  taxpayer_table().reduce(
    (acc, val) => acc + income_tax({ taxpayer_id_in: val.taxpayer_id }) * proportion(),
    0
  );

export const paye_sum = () =>
  taxpayer_table().reduce(
    (acc, val) => acc + paye({ taxpayer_id_in: val.taxpayer_id }) * proportion(),
    0
  );

export const usc_sum = () =>
  taxpayer_table().reduce(
    (acc, val) => acc + usc({ taxpayer_id_in: val.taxpayer_id }) * proportion(),
    0
  );
