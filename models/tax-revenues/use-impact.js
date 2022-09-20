
var m = require('./impact.js')

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

console.log(m.income_tax_sum_impact({taxpayer_table_in, tax_rate_in:0.15}))
console.log(m.income_tax_sum_impact({taxpayer_table_in, tax_rate_in:0.14}))
console.log(m.income_tax_sum_impact({taxpayer_table_in, tax_rate_in:0.16}))
console.log(m.income_tax_sum_impact({taxpayer_table_in, tax_rate_in:0.30}))

console.log(m.income_tax_impact({taxpayer_table_in, taxpayer_id_in:0, tax_rate_in:0.15}))
console.log(m.income_tax_impact({taxpayer_table_in, taxpayer_id_in:0, tax_rate_in:0.14}))
console.log(m.income_tax_impact({taxpayer_table_in, taxpayer_id_in:0, tax_rate_in:0.16}))
console.log(m.income_tax_impact({taxpayer_table_in, taxpayer_id_in:0, tax_rate_in:0.30}))

