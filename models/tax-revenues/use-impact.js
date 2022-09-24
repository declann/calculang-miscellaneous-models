
var m = require('./impact.js')

const taxpayer_table_in = [
  {
    taxpayer_id: 0,
    gross_salary: 1000,
  },
  {
    taxpayer_id: 1,
    gross_salary: 20000,
  },
];

const usc_table_in = [
  { band_id: 1, band_co: 12012, rate: 0.005 },
  { band_id: 2, band_co: 21295, rate: 0.02 },
  {
    band_id: 3,
    band_co: 70144,
    rate: 0.045,
  },
  { band_id: 4, band_co: 0, rate: 0.08 },
];

console.log(m.income_tax_sum_impact({usc_table_in, taxpayer_table_in, tax_rate_in:0.15}))
console.log(m.income_tax_sum_impact({usc_table_in, taxpayer_table_in, tax_rate_in:0.14}))
console.log(m.income_tax_sum_impact({usc_table_in, taxpayer_table_in, tax_rate_in:0.16}))
console.log(m.income_tax_sum_impact({usc_table_in, taxpayer_table_in, tax_rate_in:0.30}))

console.log(m.income_tax_impact({usc_table_in, taxpayer_table_in, taxpayer_id_in:0, tax_rate_in:0.15}))
console.log(m.income_tax_impact({usc_table_in, taxpayer_table_in, taxpayer_id_in:0, tax_rate_in:0.14}))
console.log(m.income_tax_impact({usc_table_in, taxpayer_table_in, taxpayer_id_in:0, tax_rate_in:0.16}))
console.log(m.income_tax_impact({usc_table_in, taxpayer_table_in, taxpayer_id_in:0, tax_rate_in:0.30}))

console.log(m.effective_rate_current({usc_table_in, taxpayer_table_in, taxpayer_id_in:1, tax_rate_in:0.30}))
console.log(m.effective_rate_proposed({usc_table_in, taxpayer_table_in, taxpayer_id_in:1, tax_rate_in:0.30}))

