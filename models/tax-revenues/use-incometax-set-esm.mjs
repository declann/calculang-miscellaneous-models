import * as m from './incometax-set_esm/cul_scope_0.mjs';
import { range } from 'underscore';

console.log(
  m.income_tax_sum({
    taxpayer_table_in: [
      {
        taxpayer_id: 0,
        gross_salary: 10000,
      },
    ],
  })
);
