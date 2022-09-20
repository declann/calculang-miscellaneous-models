import { income_tax } from './simple-incometax.cul';
export { income_tax };

export const taxpayer_id = () => taxpayer_id_in;
export const taxpayer_table = () => taxpayer_table_in;

export const gross_salary = () => taxpayer_table()[taxpayer_id()].gross_salary;

// -taxpayer_id_in
export const income_tax_sum = () =>
  taxpayer_table().reduce(
    (acc, val) => acc + income_tax({ taxpayer_id_in: val.taxpayer_id }), //income_tax({ gross_salary_in: gross_salary({ taxpayer_id_in: val }) }),
    0
  );
