import * as m from './tax-revenues_esm/cul_scope_0.mjs'
import { range } from 'underscore';


console.log(m.revenue({zero_in:0}));

console.table(range(0, 10).map(d => ({
  taxpayer_gross_salary: m.taxpayer_gross_salary({ taxpayer_id_in: d }),
  taxpayer_proportion: m.taxpayer_proportion({ taxpayer_id_in: d }),
  income_tax: m.income_tax({gross_salary_in: m.taxpayer_gross_salary({ taxpayer_id_in: d })})
})))