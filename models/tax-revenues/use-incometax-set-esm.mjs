import * as m from './incometax-set_esm/cul_scope_0.mjs';
import { range } from 'underscore';

const taxpayer_table_in = [
  {
    taxpayer_id: 0,
    gross_salary: 10000,
  },
  {
    taxpayer_id: 1,
    gross_salary: 20000,
  },
];

console.log(m.income_tax_sum({ taxpayer_table_in }));

console.log(m.income_tax({ taxpayer_table_in, taxpayer_id_in: 0 }));
